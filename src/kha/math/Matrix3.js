// Class: kha.math.Matrix3

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;

// Constructor

var Matrix3 = function(_00,_10,_20,_01,_11,_21,_02,_12,_22) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
}

// Meta

Matrix3.__name__ = ["kha","math","Matrix3"];
Matrix3.prototype = {
	
};
Matrix3.prototype.__class__ = Matrix3.prototype.constructor = $hxClasses["kha.math.Matrix3"] = Matrix3;

// Init



// Statics


Matrix3.width = 3
Matrix3.height = 3

// Export

exports.default = Matrix3;