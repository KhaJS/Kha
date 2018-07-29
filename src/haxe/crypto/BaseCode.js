// Class: haxe.crypto.BaseCode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function Std() {return require("./../../Std");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) ++nbits;
	if(nbits > 8 || len != 1 << nbits) {
		throw new (js__$Boot_HaxeError().default)("BaseCode : base length must be a power of two.");
	}
	this.base = base;
	this.nbits = nbits;
}

// Meta

BaseCode.__name__ = ["haxe","crypto","BaseCode"];
BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = (Std().default)["int"](b.length * 8 / nbits);
		var out = (haxe_io_Bytes().default).alloc(size + (b.length * 8 % nbits == 0 ? 0 : 1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.get(pin++);
			}
			curbits -= nbits;
			out.set(pout++,base.get(buf >> curbits & mask));
		}
		if(curbits > 0) {
			out.set(pout++,base.get(buf << nbits - curbits & mask));
		}
		return out;
	}
};
BaseCode.prototype.__class__ = BaseCode.prototype.constructor = $hxClasses["haxe.crypto.BaseCode"] = BaseCode;

// Init



// Statics




// Export

exports.default = BaseCode;