// Class: kha.math.FastVector3

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var FastVector3 = function(x,y,z) {
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

FastVector3.__name__ = ["kha","math","FastVector3"];
FastVector3.prototype = {
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
	},
	toString: function() {
		return "FastVector3(" + this.x + ", " + this.y + ", " + this.z + ")";
	}
};
FastVector3.prototype.__class__ = FastVector3.prototype.constructor = $hxClasses["kha.math.FastVector3"] = FastVector3;

// Init



// Statics

FastVector3.fromVector3 = function(v) {
	return new FastVector3(v.x,v.y,v.z);
}


// Export

exports.default = FastVector3;