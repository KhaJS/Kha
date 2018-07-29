// Class: kha.math.FastMatrix3

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var FastMatrix3 = function(_00,_10,_20,_01,_11,_21,_02,_12,_22) {
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

FastMatrix3.__name__ = ["kha","math","FastMatrix3"];
FastMatrix3.prototype = {
	
};
FastMatrix3.prototype.__class__ = FastMatrix3.prototype.constructor = $hxClasses["kha.math.FastMatrix3"] = FastMatrix3;

// Init



// Statics

FastMatrix3.fromMatrix3 = function(m) {
	return new FastMatrix3(m._00,m._10,m._20,m._01,m._11,m._21,m._02,m._12,m._22);
}
FastMatrix3.width = 3
FastMatrix3.height = 3

// Export

exports.default = FastMatrix3;