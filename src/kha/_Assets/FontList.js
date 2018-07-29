// Class: kha._Assets.FontList

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var FontList = function() {
	this.names = [];
}

// Meta

FontList.__name__ = ["kha","_Assets","FontList"];
FontList.prototype = {
	get: function(name) {
		return (Reflect().default).field(this,name);
	}
};
FontList.prototype.__class__ = FontList.prototype.constructor = $hxClasses["kha._Assets.FontList"] = FontList;

// Init



// Statics




// Export

exports.default = FontList;