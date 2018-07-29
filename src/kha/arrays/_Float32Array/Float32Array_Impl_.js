// Class: kha.arrays._Float32Array.Float32Array_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var Float32Array_Impl_ = function(){}

// Meta

Float32Array_Impl_.__name__ = ["kha","arrays","_Float32Array","Float32Array_Impl_"];
Float32Array_Impl_.prototype = {
	
};
Float32Array_Impl_.prototype.__class__ = Float32Array_Impl_.prototype.constructor = $hxClasses["kha.arrays._Float32Array.Float32Array_Impl_"] = Float32Array_Impl_;

// Init



// Statics

Float32Array_Impl_._new = function(elements) {
	var this1 = new Float32Array(elements);
	return this1;
}
Float32Array_Impl_.get_length = function(this1) {
	return this1.length;
}
Float32Array_Impl_.set = function(this1,index,value) {
	return this1[index] = value;
}
Float32Array_Impl_.get = function(this1,index) {
	return this1[index];
}
Float32Array_Impl_.data = function(this1) {
	return this1;
}
Float32Array_Impl_.arrayRead = function(this1,index) {
	return this1[index];
}
Float32Array_Impl_.arrayWrite = function(this1,index,value) {
	return this1[index] = value;
}
Float32Array_Impl_.subarray = function(this1,start,end) {
	return this1.subarray(start,end);
}


// Export

exports.default = Float32Array_Impl_;