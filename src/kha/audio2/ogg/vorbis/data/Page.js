// Class: kha.audio2.ogg.vorbis.data.Page

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $import = require("./../../../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../../../js/_Boot/HaxeError");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}

// Constructor

var Page = function() {
}

// Meta

Page.__name__ = ["kha","audio2","ogg","vorbis","data","Page"];
Page.prototype = {
	clone: function() {
		var page = new Page();
		page.flag = this.flag;
		return page;
	},
	start: function(decodeState) {
		decodeState.capturePattern();
		this.startWithoutCapturePattern(decodeState);
	},
	startWithoutCapturePattern: function(decodeState) {
		var version = decodeState.readByte();
		if(version != 0) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_STREAM_STRUCTURE_VERSION,"" + version,{ fileName : "Page.hx", lineNumber : 34, className : "kha.audio2.ogg.vorbis.data.Page", methodName : "startWithoutCapturePattern"}));
		}
		this.flag = decodeState.readByte();
		var loc0 = decodeState.readInt32();
		var loc1 = decodeState.readInt32();
		decodeState.readInt32();
		decodeState.readInt32();
		decodeState.readInt32();
		decodeState.setup(loc0,loc1);
	}
};
Page.prototype.__class__ = Page.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.Page"] = Page;

// Init



// Statics




// Export

exports.default = Page;