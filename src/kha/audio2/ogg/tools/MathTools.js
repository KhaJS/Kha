// Class: kha.audio2.ogg.tools.MathTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;

// Constructor

var MathTools = function(){}

// Meta

MathTools.__name__ = ["kha","audio2","ogg","tools","MathTools"];
MathTools.prototype = {
	
};
MathTools.prototype.__class__ = MathTools.prototype.constructor = $hxClasses["kha.audio2.ogg.tools.MathTools"] = MathTools;

// Init



// Statics

MathTools.ilog = function(n) {
	var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
	if(n < 16384) {
		if(n < 16) {
			return log2_4[n];
		} else if(n < 512) {
			return 5 + log2_4[n >> 5];
		} else {
			return 10 + log2_4[n >> 10];
		}
	} else if(n < 16777216) {
		if(n < 524288) {
			return 15 + log2_4[n >> 15];
		} else {
			return 20 + log2_4[n >> 20];
		}
	} else if(n < 536870912) {
		return 25 + log2_4[n >> 25];
	} else if(n < -2147483648) {
		return 30 + log2_4[n >> 30];
	} else {
		return 0;
	}
}


// Export

exports.default = MathTools;