// Class: kha.audio2.ogg.tools.Crc32

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function _$UInt_UInt_$Impl_$() {return require("./../../../../_UInt/UInt_Impl_");}

// Constructor

var Crc32 = function(){}

// Meta

Crc32.__name__ = ["kha","audio2","ogg","tools","Crc32"];
Crc32.prototype = {
	
};
Crc32.prototype.__class__ = Crc32.prototype.constructor = $hxClasses["kha.audio2.ogg.tools.Crc32"] = Crc32;

// Init



// Statics

Crc32.init = function() {
	if(Crc32.table != null) {
		return;
	}
	var this1 = new Array(256);
	Crc32.table = this1;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		var s = i << 24;
		var _g1 = 0;
		while(_g1 < 8) {
			var j = _g1++;
			s = s << 1 ^ ((_$UInt_UInt_$Impl_$().default).gte(s,1 << 31) ? 79764919 : 0);
		}
		Crc32.table[i] = s;
	}
}
Crc32.update = function(crc,$byte) {
	return crc << 8 ^ Crc32.table[$byte ^ crc >>> 24];
}
Crc32.POLY = 79764919

// Export

exports.default = Crc32;