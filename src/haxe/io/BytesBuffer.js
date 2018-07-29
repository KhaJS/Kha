// Class: haxe.io.BytesBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var BytesBuffer = function() {
	this.b = [];
}

// Meta

BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
BytesBuffer.prototype = {
	addByte: function($byte) {
		this.b.push($byte);
	},
	addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	},
	getBytes: function() {
		var bytes = new (haxe_io_Bytes().default)(new Uint8Array(this.b).buffer);
		this.b = null;
		return bytes;
	}
};
BytesBuffer.prototype.__class__ = BytesBuffer.prototype.constructor = $hxClasses["haxe.io.BytesBuffer"] = BytesBuffer;

// Init



// Statics




// Export

exports.default = BytesBuffer;