// Class: kha.audio2.ogg.vorbis.data.ReaderError

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;

// Constructor

var ReaderError = function(type,message,posInfos) {
	if(message == null) {
		message = "";
	}
	this.type = type;
	this.message = message;
	this.posInfos = posInfos;
}

// Meta

ReaderError.__name__ = ["kha","audio2","ogg","vorbis","data","ReaderError"];
ReaderError.prototype = {
	
};
ReaderError.prototype.__class__ = ReaderError.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.ReaderError"] = ReaderError;

// Init



// Statics




// Export

exports.default = ReaderError;