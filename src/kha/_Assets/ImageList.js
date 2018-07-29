// Class: kha._Assets.ImageList

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var ImageList = function() {
	this.names = [];
}

// Meta

ImageList.__name__ = ["kha","_Assets","ImageList"];
ImageList.prototype = {
	get: function(name) {
		return (Reflect().default).field(this,name);
	}
};
ImageList.prototype.__class__ = ImageList.prototype.constructor = $hxClasses["kha._Assets.ImageList"] = ImageList;

// Init



// Statics




// Export

exports.default = ImageList;