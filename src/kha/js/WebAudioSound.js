// Class: kha.js.WebAudioSound

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_Sound() {return require("./../../kha/Sound");}
function kha_audio2_Audio() {return require("./../../kha/audio2/Audio");}
function js_Browser() {return require("./../../js/Browser");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var WebAudioSound = function(filename,done,failed) {
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
		done(_gthis);
	};
	request.send(null);
}

// Meta

WebAudioSound.__name__ = ["kha","js","WebAudioSound"];
WebAudioSound.__super__ = (kha_Sound().default);
WebAudioSound.prototype = $extend((kha_Sound().default).prototype, {
	superUncompress: function(done) {
		(kha_Sound().default).prototype.uncompress.call(this,done);
	},
	uncompress: function(done) {
		var _gthis = this;
		(kha_audio2_Audio().default)._context.decodeAudioData(this.compressedData.getData(),function(buffer) {
			var ch0 = buffer.getChannelData(0);
			var len = ch0.length;
			var this1 = new Float32Array(len * 2);
			_gthis.uncompressedData = this1;
			if(buffer.numberOfChannels == 1) {
				var idx = 0;
				var i = 0;
				var lidx = len * 2;
				var uncompressInner = function() {
				};
				uncompressInner = function() {
					var chk_len = idx + 11025;
					var next_chk = chk_len > lidx ? lidx : chk_len;
					while(idx < next_chk) {
						_gthis.uncompressedData[idx] = ch0[i];
						_gthis.uncompressedData[idx + 1] = ch0[i];
						idx += 2;
						i += 1;
					}
					if(idx < lidx) {
						(js_Browser().default).get_window().setTimeout(uncompressInner,0);
					} else {
						_gthis.compressedData = null;
					}
				};
				uncompressInner();
				(js_Browser().default).get_window().setTimeout(done,250);
			} else {
				var ch1 = buffer.getChannelData(1);
				var idx1 = 0;
				var i1 = 0;
				var lidx1 = len * 2;
				var uncompressInner1 = function() {
				};
				uncompressInner1 = function() {
					var chk_len1 = idx1 + 11025;
					var next_chk1 = chk_len1 > lidx1 ? lidx1 : chk_len1;
					while(idx1 < next_chk1) {
						_gthis.uncompressedData[idx1] = ch0[i1];
						_gthis.uncompressedData[idx1 + 1] = ch1[i1];
						idx1 += 2;
						i1 += 1;
					}
					if(idx1 < lidx1) {
						(js_Browser().default).get_window().setTimeout(uncompressInner1,0);
					} else {
						_gthis.compressedData = null;
					}
				};
				uncompressInner1();
				(js_Browser().default).get_window().setTimeout(done,250);
			}
		},function() {
			_gthis.superUncompress(done);
		});
	}
});
WebAudioSound.prototype.__class__ = WebAudioSound.prototype.constructor = $hxClasses["kha.js.WebAudioSound"] = WebAudioSound;

// Init



// Statics




// Export

exports.default = WebAudioSound;