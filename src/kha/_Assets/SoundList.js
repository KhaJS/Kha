// Class: kha._Assets.SoundList

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var SoundList = function() {
	this.names = [];
}

// Meta

SoundList.__name__ = ["kha","_Assets","SoundList"];
SoundList.prototype = {
	get: function(name) {
		return (Reflect().default).field(this,name);
	}
};
SoundList.prototype.__class__ = SoundList.prototype.constructor = $hxClasses["kha._Assets.SoundList"] = SoundList;

// Init



// Statics




// Export

exports.default = SoundList;