// Class: kha.arrays._Uint32Array.Uint32Array_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var Uint32Array_Impl_ = function(){}

// Meta

Uint32Array_Impl_.__name__ = ["kha","arrays","_Uint32Array","Uint32Array_Impl_"];
Uint32Array_Impl_.prototype = {
	
};
Uint32Array_Impl_.prototype.__class__ = Uint32Array_Impl_.prototype.constructor = $hxClasses["kha.arrays._Uint32Array.Uint32Array_Impl_"] = Uint32Array_Impl_;

// Init



// Statics

Uint32Array_Impl_._new = function(elements) {
	var this1 = new Uint32Array(elements);
	return this1;
}
Uint32Array_Impl_.get_length = function(this1) {
	return this1.length;
}
Uint32Array_Impl_.set = function(this1,index,value) {
	return this1[index] = value;
}
Uint32Array_Impl_.get = function(this1,index) {
	return this1[index];
}
Uint32Array_Impl_.data = function(this1) {
	return this1;
}
Uint32Array_Impl_.arrayRead = function(this1,index) {
	return this1[index];
}
Uint32Array_Impl_.arrayWrite = function(this1,index,value) {
	return this1[index] = value;
}
Uint32Array_Impl_.subarray = function(this1,start,end) {
	return this1.subarray(start,end);
}


// Export

exports.default = Uint32Array_Impl_;