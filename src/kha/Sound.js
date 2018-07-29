// Class: kha.Sound

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function kha_Resource() {return require("./../kha/Resource");}
function haxe_io_BytesOutput() {return require("./../haxe/io/BytesOutput");}
function kha_audio2_ogg_vorbis_Reader() {return require("./../kha/audio2/ogg/vorbis/Reader");}
function Std() {return require("./../Std");}

// Constructor

var Sound = function() {
}

// Meta

Sound.__name__ = ["kha","Sound"];
Sound.__interfaces__ = [(kha_Resource().default)];
Sound.prototype = {
	uncompress: function(done) {
		if(this.uncompressedData != null) {
			done();
			return;
		}
		var output = new (haxe_io_BytesOutput().default)();
		var header = (kha_audio2_ogg_vorbis_Reader().default).readAll(this.compressedData,output,true);
		var soundBytes = output.getBytes();
		var count = (Std().default)["int"](soundBytes.length / 4);
		if(header.channel == 1) {
			var this1 = new Float32Array(count * 2);
			this.uncompressedData = this1;
			var _g1 = 0;
			var _g = count;
			while(_g1 < _g) {
				var i = _g1++;
				this.uncompressedData[i * 2] = soundBytes.getFloat(i * 4);
				this.uncompressedData[i * 2 + 1] = soundBytes.getFloat(i * 4);
			}
		} else {
			var this2 = new Float32Array(count);
			this.uncompressedData = this2;
			var _g11 = 0;
			var _g2 = count;
			while(_g11 < _g2) {
				var i1 = _g11++;
				this.uncompressedData[i1] = soundBytes.getFloat(i1 * 4);
			}
		}
		this.compressedData = null;
		done();
	},
	unload: function() {
		this.compressedData = null;
		this.uncompressedData = null;
	}
};
Sound.prototype.__class__ = Sound.prototype.constructor = $hxClasses["kha.Sound"] = Sound;

// Init



// Statics




// Export

exports.default = Sound;