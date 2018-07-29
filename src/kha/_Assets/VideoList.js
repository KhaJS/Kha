// Class: kha._Assets.VideoList

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var VideoList = function() {
	this.names = [];
}

// Meta

VideoList.__name__ = ["kha","_Assets","VideoList"];
VideoList.prototype = {
	get: function(name) {
		return (Reflect().default).field(this,name);
	}
};
VideoList.prototype.__class__ = VideoList.prototype.constructor = $hxClasses["kha._Assets.VideoList"] = VideoList;

// Init



// Statics




// Export

exports.default = VideoList;