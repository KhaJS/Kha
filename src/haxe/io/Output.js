// Class: haxe.io.Output

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}
function haxe_io_FPHelper() {return require("./../../haxe/io/FPHelper");}

// Constructor

var Output = function(){}

// Meta

Output.__name__ = ["haxe","io","Output"];
Output.prototype = {
	writeByte: function(c) {
		throw new (js__$Boot_HaxeError().default)("Not implemented");
	},
	writeBytes: function(s,pos,len) {
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		var b = s.b;
		var k = len;
		while(k > 0) {
			this.writeByte(b[pos]);
			++pos;
			--k;
		}
		return len;
	},
	write: function(s) {
		var l = s.length;
		var p = 0;
		while(l > 0) {
			var k = this.writeBytes(s,p,l);
			if(k == 0) {
				throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).Blocked);
			}
			p += k;
			l -= k;
		}
	},
	writeFloat: function(x) {
		this.writeInt32((haxe_io_FPHelper().default).floatToI32(x));
	},
	writeInt32: function(x) {
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	}
};
Output.prototype.__class__ = Output.prototype.constructor = $hxClasses["haxe.io.Output"] = Output;

// Init



// Statics




// Export

exports.default = Output;