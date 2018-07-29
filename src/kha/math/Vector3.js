// Class: kha.math.Vector3

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Vector3 = function(x,y,z) {
	if(z == null) {
		z = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
	this.z = z;
}

// Meta

Vector3.__name__ = ["kha","math","Vector3"];
Vector3.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	},
	set_length: function(length) {
		var currentLength = this.get_length();
		if(currentLength == 0) {
			return 0;
		}
		var mul = length / currentLength;
		this.x *= mul;
		this.y *= mul;
		this.z *= mul;
		return length;
	}
};
Vector3.prototype.__class__ = Vector3.prototype.constructor = $hxClasses["kha.math.Vector3"] = Vector3;

// Init



// Statics




// Export

exports.default = Vector3;