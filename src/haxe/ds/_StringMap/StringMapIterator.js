// Class: haxe.ds._StringMap.StringMapIterator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;

// Constructor

var StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
}

// Meta

StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	},
	next: function() {
		return this.map.get(this.keys[this.index++]);
	}
};
StringMapIterator.prototype.__class__ = StringMapIterator.prototype.constructor = $hxClasses["haxe.ds._StringMap.StringMapIterator"] = StringMapIterator;

// Init



// Statics




// Export

exports.default = StringMapIterator;