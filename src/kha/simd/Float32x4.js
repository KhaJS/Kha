// Class: kha.simd.Float32x4

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Float32x4 = function(_0,_1,_2,_3) {
	this._0 = _0;
	this._1 = _1;
	this._2 = _2;
	this._3 = _3;
}

// Meta

Float32x4.__name__ = ["kha","simd","Float32x4"];
Float32x4.prototype = {
	
};
Float32x4.prototype.__class__ = Float32x4.prototype.constructor = $hxClasses["kha.simd.Float32x4"] = Float32x4;

// Init



// Statics

Float32x4.create = function() {
	return new Float32x4(0,0,0,0);
}
Float32x4.loadAllFast = function(t) {
	return new Float32x4(t,t,t,t);
}
Float32x4.load = function(a,b,c,d) {
	return new Float32x4(a,b,c,d);
}
Float32x4.loadFast = function(a,b,c,d) {
	return new Float32x4(a,b,c,d);
}
Float32x4.get = function(t,index) {
	var value = 0;
	switch(index) {
	case 0:
		value = t._0;
		break;
	case 1:
		value = t._1;
		break;
	case 2:
		value = t._2;
		break;
	case 3:
		value = t._3;
		break;
	}
	return value;
}
Float32x4.getFast = function(t,index) {
	switch(index) {
	case 0:
		return t._0;
	case 1:
		return t._1;
	case 2:
		return t._2;
	case 3:
		return t._3;
	}
	return 0;
}
Float32x4.abs = function(t) {
	return new Float32x4(Math.abs(t._0),Math.abs(t._1),Math.abs(t._2),Math.abs(t._3));
}
Float32x4.add = function(a,b) {
	return new Float32x4(a._0 + b._0,a._1 + b._1,a._2 + b._2,a._3 + b._3);
}
Float32x4.div = function(a,b) {
	return new Float32x4(a._0 / b._0,a._1 / b._1,a._2 / b._2,a._3 / b._3);
}
Float32x4.mul = function(a,b) {
	return new Float32x4(a._0 * b._0,a._1 * b._1,a._2 * b._2,a._3 * b._3);
}
Float32x4.neg = function(t) {
	return new Float32x4(-t._0,-t._1,-t._2,-t._3);
}
Float32x4.reciprocalApproximation = function(t) {
	return new Float32x4(0,0,0,0);
}
Float32x4.reciprocalSqrtApproximation = function(t) {
	return new Float32x4(0,0,0,0);
}
Float32x4.sub = function(a,b) {
	return new Float32x4(a._0 - b._0,a._1 - b._1,a._2 - b._2,a._3 - b._3);
}
Float32x4.sqrt = function(t) {
	return new Float32x4(Math.sqrt(t._0),Math.sqrt(t._1),Math.sqrt(t._2),Math.sqrt(t._3));
}


// Export

exports.default = Float32x4;