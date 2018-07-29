// Class: haxe.io.BytesOutput

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function haxe_io_Output() {return require("./../../haxe/io/Output");}
function haxe_io_BytesBuffer() {return require("./../../haxe/io/BytesBuffer");}

// Constructor

var BytesOutput = function() {
	this.b = new (haxe_io_BytesBuffer().default)();
}

// Meta

BytesOutput.__name__ = ["haxe","io","BytesOutput"];
BytesOutput.__super__ = (haxe_io_Output().default);
BytesOutput.prototype = $extend((haxe_io_Output().default).prototype, {
	writeByte: function(c) {
		this.b.addByte(c);
	},
	writeBytes: function(buf,pos,len) {
		this.b.addBytes(buf,pos,len);
		return len;
	},
	getBytes: function() {
		return this.b.getBytes();
	}
});
BytesOutput.prototype.__class__ = BytesOutput.prototype.constructor = $hxClasses["haxe.io.BytesOutput"] = BytesOutput;

// Init



// Statics




// Export

exports.default = BytesOutput;