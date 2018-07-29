// Class: kha.audio2.ogg.vorbis.data.PageFlag

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;

// Constructor

var PageFlag = function(){}

// Meta

PageFlag.__name__ = ["kha","audio2","ogg","vorbis","data","PageFlag"];
PageFlag.prototype = {
	
};
PageFlag.prototype.__class__ = PageFlag.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.PageFlag"] = PageFlag;

// Init



// Statics


PageFlag.CONTINUED_PACKET = 1
PageFlag.FIRST_PAGE = 2
PageFlag.LAST_PAGE = 4

// Export

exports.default = PageFlag;