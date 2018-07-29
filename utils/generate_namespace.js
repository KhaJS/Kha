const fs = require('fs');
const path = require('path');
const Project = require('ts-simple-ast').default;
const rootDir = 'kha';

// Regex filter for file extension.
const regexp = /\.(d.ts)$/i;
// Read all files in directory recursively.
const read = (dir) =>
  fs.readdirSync(dir)
    .reduce((files, file) =>
      fs.statSync(path.join(dir, file)).isDirectory() ?
        files.concat(read(path.join(dir, file))) :
        files.concat(path.join(dir, file)),
      []
    )
    .filter((val) => {
      if(regexp.test(val))
        return val;
    });

// Get filepaths.
const filePaths = read(rootDir);
const fileDict = new Map();

filePaths.map((file, index) => {
  // Split the path.
  const splitPath = file.split("/");
  // Remove filename from array. (And remove file extension.)
  const fileName = splitPath.pop().split(".")[0];
  // Rejoin path directory to use as Map/Dictionary key.
  const dirName = splitPath.join("/");

  // If there is a duplicate dirname, add to array, else if this is the first, create array.
  if(fileDict.has(dirName)) {
    const fileList = fileDict.get(dirName);
    fileList.push(fileName);
  } else {
    fileDict.set(dirName, [fileName]);
  }
});

const ast = new Project();

// Javascript

// Create index.js in subdirectories.
fileDict.forEach((fileNames, dirName) => {
  // Make sure this is not invoked on the root directory.
  if(dirName !== rootDir) {
    let exportStr = 'module.exports = {';

    const jsFile = ast.createSourceFile(`${dirName}/index.js`, '', { overwrite: true });
    fileNames.forEach((fileName) => {
      exportStr += `\n\t${fileName}: require("./${fileName}").default,`;
    });
    exportStr += `\n}`;
    jsFile.addStatements(exportStr)
    jsFile.saveSync();
  }
});

// Create index.js in root directory.
const jsFile = ast.createSourceFile(`${rootDir}/index.js`, '', { overwrite: true });
let exportStr = 'module.exports = {'

// Export all files in root directory.
fileDict.get(rootDir).forEach((fileName) => {
  exportStr += `\n\t${fileName}: require("./${fileName}").default,`;
});

// Export all JS subdirectories.
Array.from(fileDict.keys()).forEach((dirName) => {
  // Make sure this is not invoked on the root directory.
  if(dirName !== rootDir) {
    const splitName = dirName.split('/');
    // Remove root name, ie: 'kha' from directory name.
    splitName.shift();
    const joinedName = splitName.join('/');

    exportStr += `\n\t${splitName[0]}: require("./${joinedName}"),`;
  }
})
exportStr += `\n}`;
jsFile.addStatements(exportStr)
jsFile.saveSync();

// Typescript

// Create index.ts in subdirectories.
fileDict.forEach((fileNames, dirName) => {
  // Make sure this is not invoked on the root directory.
  if(dirName !== rootDir) {
    const tsFile = ast.createSourceFile(`${dirName}/index.d.ts`, '', { overwrite: true });
    fileNames.forEach((fileName) => {
      tsFile.addExportDeclaration({
        namedExports: [`default as ${fileName}`],
        moduleSpecifier: `./${fileName}`
      })
    });
    tsFile.saveSync();
  }
});


// Create index.d.ts in root directory.
const tsFile = ast.createSourceFile(`${rootDir}/index.d.ts`, '', { overwrite: true });
// Export all files in root directory.
fileDict.get(rootDir).forEach((fileName) => {
  tsFile.addExportDeclaration({
    namedExports: [`default as ${fileName}`],
    moduleSpecifier: `./${fileName}`
  })
});

// Export all TS subdirectories.
const exportDict = {};
const existingNames = new Map();
fileDict.forEach((fileNames, dirName) => {
  // Make sure this is not invoked on the root directory.
  if(dirName !== rootDir) {
    const splitName = dirName.split('/');
    // Remove root name, ie: 'kha' from directory name.
    splitName.shift();
    const joinedName = splitName.join('/');
    const firstName = splitName[0];

    if(existingNames.has(firstName)) {
      existingNames.get(firstName).push(`${firstName}Proxy${existingNames.get(firstName).length}`);

      tsFile.addImportDeclaration({
        defaultImport: `* as ${firstName}Proxy${existingNames.get(firstName).length}`,
        moduleSpecifier: `./${joinedName}`
      }) 
    } else {
      existingNames.set(firstName, []);
      existingNames.get(firstName).push(`${firstName}Proxy${existingNames.get(firstName).length}`);

      tsFile.addImportDeclaration({
        defaultImport: `* as ${firstName}Proxy${existingNames.get(firstName).length}`,
        moduleSpecifier: `./${joinedName}`
      }) 
    }
    
    if(splitName.length > 1) {
      fileNames.forEach((name) => {
        if(exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`]) {
          exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`][name] = splitName;
        } else {
          exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`] = {};
          exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`][name] = splitName;
        }
      })
    } else {
      fileNames.forEach((name) => {
        if(exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`]) {
          Object.assign(exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`], {[name]: [firstName]});
        } else {
          exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`] = {};
          Object.assign(exportDict[`${firstName}Proxy${existingNames.get(firstName).length}`], {[name]: [firstName]});
        }
      });
    }
  }
})

const exportTree = {};

const traverseDict = (tree, dirNames, className, namespace) => {
  for(var j = 0; j < dirNames.length; j++) {
      if(dirNames[j] !== "") {
          if(typeof tree[dirNames[j]] === 'undefined')
              tree[dirNames[j]] = {};
          tree = tree[dirNames[j]];
      }

      if(j === dirNames.length - 1) {
        
        if(dirNames.length === 1) {
          Object.assign(exportTree[dirNames[0]], {[className]: `${namespace}.${className}`})
        } else {
          if(!tree[dirNames[j]]) {
            tree[dirNames[j]] = {};
          }
          Object.assign(tree[dirNames[j]], {[className]: `${namespace}.${className}`})
        }
      }
  }
  return tree;
}

// Create recursive exportTree by traversing exportDict.
for (key in exportDict) {
  const namespace = key;
  const classNames = exportDict[key];

  
  for(key in classNames) {
    const className = key;
    const dirNames = classNames[key];
    const tree = traverseDict(exportTree, dirNames, className, namespace)
  }
}

// Traverse tree to create namespaces.
const traverseTree = (obj, parent, parentKey, node) => {
  for (let k in obj) {
    if (obj[k] && typeof obj[k] === 'object') {
      const nameSpace = node.addNamespace({
        isExported: true,
        name: k
      })
      traverseTree(obj[k], obj, k, nameSpace)
    } else {
      node.addTypeAlias({
        isExported: true,
        name: k,
        type: obj[k]
      })
    }
  }
}

for (key in exportTree) {
 const decl = tsFile.addNamespace({
    isExported: true,
    name: key,
  });
  traverseTree(exportTree[key], exportTree, key, decl)
}

tsFile.saveSync();
