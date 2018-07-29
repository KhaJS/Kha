// Class: kha.js.MobileWebAudioSound

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_Sound() {return require("./../../kha/Sound");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function kha_js_MobileWebAudio() {return require("./../../kha/js/MobileWebAudio");}

// Constructor

var MobileWebAudioSound = function(filename,done,failed) {
	var _gthis = this;
	(kha_Sound().default).call(this);
	var request = new XMLHttpRequest();
	request.open("GET",filename,true);
	request.responseType = "arraybuffer";
	request.onerror = function() {
		failed({ url : filename});
	};
	request.onload = function() {
		_gthis.compressedData = (haxe_io_Bytes().default).ofData(request.response);
		_gthis.uncompressedData = null;
		(kha_js_MobileWebAudio().default)._context.decodeAudioData(_gthis.compressedData.getData(),function(buffer) {
			_gthis._buffer = buffer;
			done(_gthis);
		},function() {
			failed({ url : filename, error : "Audio format not supported"});
		});
	};
	request.send(null);
}

// Meta

MobileWebAudioSound.__name__ = ["kha","js","MobileWebAudioSound"];
MobileWebAudioSound.__super__ = (kha_Sound().default);
MobileWebAudioSound.prototype = $extend((kha_Sound().default).prototype, {
	uncompress: function(done) {
		done();
	}
});
MobileWebAudioSound.prototype.__class__ = MobileWebAudioSound.prototype.constructor = $hxClasses["kha.js.MobileWebAudioSound"] = MobileWebAudioSound;

// Init



// Statics




// Export

exports.default = MobileWebAudioSound;