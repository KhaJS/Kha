// Class: kha._Assets.BlobList

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var BlobList = function() {
	this.names = [];
}

// Meta

BlobList.__name__ = ["kha","_Assets","BlobList"];
BlobList.prototype = {
	get: function(name) {
		return (Reflect().default).field(this,name);
	}
};
BlobList.prototype.__class__ = BlobList.prototype.constructor = $hxClasses["kha._Assets.BlobList"] = BlobList;

// Init



// Statics




// Export

exports.default = BlobList;