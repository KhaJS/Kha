// Class: haxe.io._UInt8Array.UInt8Array_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var UInt8Array_Impl_ = function(){}

// Meta

UInt8Array_Impl_.__name__ = ["haxe","io","_UInt8Array","UInt8Array_Impl_"];
UInt8Array_Impl_.prototype = {
	
};
UInt8Array_Impl_.prototype.__class__ = UInt8Array_Impl_.prototype.constructor = $hxClasses["haxe.io._UInt8Array.UInt8Array_Impl_"] = UInt8Array_Impl_;

// Init



// Statics

UInt8Array_Impl_.fromBytes = function(bytes,bytePos,length) {
	if(bytePos == null) {
		bytePos = 0;
	}
	if(length == null) {
		length = bytes.length - bytePos;
	}
	return new Uint8Array(bytes.getData(),bytePos,length);
}


// Export

exports.default = UInt8Array_Impl_;