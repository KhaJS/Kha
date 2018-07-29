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
fileDict.forEach((fileNames, dirName) => {
  // Make sure this is not invoked on the root directory.
  if(dirName !== rootDir) {
    const splitName = dirName.split('/');
    // Remove root name, ie: 'kha' from directory name.
    splitName.shift();
    const joinedName = splitName.join('/');
    tsFile.addImportDeclaration({
      defaultImport: `* as ${splitName[0]}`,
      moduleSpecifier: `./${joinedName}`
    }) 

    tsFile.addStatements(`export const ${splitName[0]}: \n{${
      (() => {
        let nameTypes = "";
        fileNames.forEach((name) => {
          nameTypes += `\n${name}:${splitName[0]}.${name},`
        });
        return nameTypes;
      })()
    }\n} = ${splitName[0]};`) 
    /*
    if(splitName.length > 1) {
      console.log(`default as ${splitName[splitName.length - 1]}`)
      tsFile.addExportDeclaration({
        namedExports: [`default as ${splitName[splitName.length - 1]}`],
        moduleSpecifier: `./${joinedName}`
      })
    } else {
      console.log(`default as ${splitName[0]}`)
      tsFile.addExportDeclaration({
        namedExports: [`default as ${splitName[0]}`], 
        moduleSpecifier: `./${joinedName}`
      })
    }
    */
  }
})
tsFile.saveSync();

