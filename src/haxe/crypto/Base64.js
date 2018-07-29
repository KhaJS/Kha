// Class: haxe.crypto.Base64

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function haxe_crypto_BaseCode() {return require("./../../haxe/crypto/BaseCode");}

// Constructor

var Base64 = function(){}

// Meta

Base64.__name__ = ["haxe","crypto","Base64"];
Base64.prototype = {
	
};
Base64.prototype.__class__ = Base64.prototype.constructor = $hxClasses["haxe.crypto.Base64"] = Base64;

// Init



// Statics

Base64.encode = function(bytes,complement) {
	if(complement == null) {
		complement = true;
	}
	var str = new (haxe_crypto_BaseCode().default)(Base64.BYTES).encodeBytes(bytes).toString();
	if(complement) {
		var _g = bytes.length % 3;
		switch(_g) {
		case 1:
			str += "==";
			break;
		case 2:
			str += "=";
			break;
		default:
		}
	}
	return str;
}
Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
Base64.BYTES = (haxe_io_Bytes().default).ofString(Base64.CHARS)

// Export

exports.default = Base64;