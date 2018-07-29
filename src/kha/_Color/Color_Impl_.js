// Class: kha._Color.Color_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Std() {return require("./../../Std");}
function StringTools() {return require("./../../StringTools");}
function HxOverrides() {return require("./../../HxOverrides");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var Color_Impl_ = function(){}

// Meta

Color_Impl_.__name__ = ["kha","_Color","Color_Impl_"];
Color_Impl_.prototype = {
	
};
Color_Impl_.prototype.__class__ = Color_Impl_.prototype.constructor = $hxClasses["kha._Color.Color_Impl_"] = Color_Impl_;

// Init



// Statics

Color_Impl_.fromValue = function(value) {
	return Color_Impl_._new(value);
}
Color_Impl_.fromBytes = function(r,g,b,a) {
	if(a == null) {
		a = 255;
	}
	return Color_Impl_._new(a << 24 | r << 16 | g << 8 | b);
}
Color_Impl_.fromFloats = function(r,g,b,a) {
	if(a == null) {
		a = 1;
	}
	return Color_Impl_._new((Std().default)["int"](a * 255) << 24 | (Std().default)["int"](r * 255) << 16 | (Std().default)["int"](g * 255) << 8 | (Std().default)["int"](b * 255));
}
Color_Impl_.fromString = function(value) {
	if((value.length == 7 || value.length == 9) && (StringTools().default).fastCodeAt(value,0) == 35) {
		var colorValue = (Std().default).parseInt("0x" + (HxOverrides().default).substr(value,1,null));
		if(value.length == 7) {
			colorValue += -16777216;
		}
		return Color_Impl_._new(colorValue);
	} else {
		throw new (js__$Boot_HaxeError().default)("Invalid Color string: '" + value + "'");
	}
}
Color_Impl_._new = function(value) {
	var this1 = value;
	return this1;
}
Color_Impl_.get_value = function(this1) {
	return this1;
}
Color_Impl_.set_value = function(this1,value) {
	this1 = value;
	return this1;
}
Color_Impl_.get_Rb = function(this1) {
	return (this1 & 16711680) >>> 16;
}
Color_Impl_.get_Gb = function(this1) {
	return (this1 & 65280) >>> 8;
}
Color_Impl_.get_Bb = function(this1) {
	return this1 & 255;
}
Color_Impl_.get_Ab = function(this1) {
	return this1 >>> 24;
}
Color_Impl_.set_Rb = function(this1,i) {
	this1 = this1 >>> 24 << 24 | i << 16 | (this1 & 65280) >>> 8 << 8 | this1 & 255;
	return i;
}
Color_Impl_.set_Gb = function(this1,i) {
	this1 = this1 >>> 24 << 24 | (this1 & 16711680) >>> 16 << 16 | i << 8 | this1 & 255;
	return i;
}
Color_Impl_.set_Bb = function(this1,i) {
	this1 = this1 >>> 24 << 24 | (this1 & 16711680) >>> 16 << 16 | (this1 & 65280) >>> 8 << 8 | i;
	return i;
}
Color_Impl_.set_Ab = function(this1,i) {
	this1 = i << 24 | (this1 & 16711680) >>> 16 << 16 | (this1 & 65280) >>> 8 << 8 | this1 & 255;
	return i;
}
Color_Impl_.get_R = function(this1) {
	return ((this1 & 16711680) >>> 16) * 0.00392156862745098;
}
Color_Impl_.get_G = function(this1) {
	return ((this1 & 65280) >>> 8) * 0.00392156862745098;
}
Color_Impl_.get_B = function(this1) {
	return (this1 & 255) * 0.00392156862745098;
}
Color_Impl_.get_A = function(this1) {
	return (this1 >>> 24) * 0.00392156862745098;
}
Color_Impl_.set_R = function(this1,f) {
	this1 = (Std().default)["int"]((this1 >>> 24) * 0.00392156862745098 * 255) << 24 | (Std().default)["int"](f * 255) << 16 | (Std().default)["int"](((this1 & 65280) >>> 8) * 0.00392156862745098 * 255) << 8 | (Std().default)["int"]((this1 & 255) * 0.00392156862745098 * 255);
	return f;
}
Color_Impl_.set_G = function(this1,f) {
	this1 = (Std().default)["int"]((this1 >>> 24) * 0.00392156862745098 * 255) << 24 | (Std().default)["int"](((this1 & 16711680) >>> 16) * 0.00392156862745098 * 255) << 16 | (Std().default)["int"](f * 255) << 8 | (Std().default)["int"]((this1 & 255) * 0.00392156862745098 * 255);
	return f;
}
Color_Impl_.set_B = function(this1,f) {
	this1 = (Std().default)["int"]((this1 >>> 24) * 0.00392156862745098 * 255) << 24 | (Std().default)["int"](((this1 & 16711680) >>> 16) * 0.00392156862745098 * 255) << 16 | (Std().default)["int"](((this1 & 65280) >>> 8) * 0.00392156862745098 * 255) << 8 | (Std().default)["int"](f * 255);
	return f;
}
Color_Impl_.set_A = function(this1,f) {
	this1 = (Std().default)["int"](f * 255) << 24 | (Std().default)["int"](((this1 & 16711680) >>> 16) * 0.00392156862745098 * 255) << 16 | (Std().default)["int"](((this1 & 65280) >>> 8) * 0.00392156862745098 * 255) << 8 | (Std().default)["int"]((this1 & 255) * 0.00392156862745098 * 255);
	return f;
}
Color_Impl_.Black = -16777216
Color_Impl_.White = -1
Color_Impl_.Red = -65536
Color_Impl_.Blue = -16776961
Color_Impl_.Green = -16711936
Color_Impl_.Magenta = -65281
Color_Impl_.Yellow = -256
Color_Impl_.Cyan = -16711681
Color_Impl_.Purple = -8388480
Color_Impl_.Pink = -16181
Color_Impl_.Orange = -23296
Color_Impl_.Transparent = 0
Color_Impl_.invMaxChannelValue = 0.00392156862745098

// Export

exports.default = Color_Impl_;