// Class: kha.math.Vector2

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Vector2 = function(x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
}

// Meta

Vector2.__name__ = ["kha","math","Vector2"];
Vector2.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) {
			return 0;
		}
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		return length;
	}
};
Vector2.prototype.__class__ = Vector2.prototype.constructor = $hxClasses["kha.math.Vector2"] = Vector2;

// Init



// Statics




// Export

exports.default = Vector2;