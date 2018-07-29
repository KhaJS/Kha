// Class: kha.math.FastVector4

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var FastVector4 = function(x,y,z,w) {
	if(w == null) {
		w = 1;
	}
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
	this.w = w;
}

// Meta

FastVector4.__name__ = ["kha","math","FastVector4"];
FastVector4.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
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
		this.w *= mul;
		return length;
	},
	toString: function() {
		return "FastVector4(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
	}
};
FastVector4.prototype.__class__ = FastVector4.prototype.constructor = $hxClasses["kha.math.FastVector4"] = FastVector4;

// Init



// Statics

FastVector4.fromVector4 = function(v) {
	return new FastVector4(v.x,v.y,v.z,v.w);
}


// Export

exports.default = FastVector4;