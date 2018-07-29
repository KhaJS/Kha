// Class: kha.audio2.StreamChannel

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_audio1_AudioChannel() {return require("./../../kha/audio1/AudioChannel");}
function Std() {return require("./../../Std");}
function kha_audio2_ogg_vorbis_Reader() {return require("./../../kha/audio2/ogg/vorbis/Reader");}

// Constructor

var StreamChannel = function(data,loop) {
	this.paused = false;
	this.atend = false;
	this.myVolume = 1;
	this.loop = loop;
	this.reader = (kha_audio2_ogg_vorbis_Reader().default).openFromBytes(data);
}

// Meta

StreamChannel.__name__ = ["kha","audio2","StreamChannel"];
StreamChannel.__interfaces__ = [(kha_audio1_AudioChannel().default)];
StreamChannel.prototype = {
	nextSamples: function(samples,length,sampleRate) {
		if(this.paused) {
			var _g1 = 0;
			var _g = length;
			while(_g1 < _g) {
				var i = _g1++;
				samples[i] = 0;
			}
			return;
		}
		var count = this.reader.read(samples,(Std().default)["int"](length / 2),2,sampleRate,true) * 2;
		if(count < length) {
			if(this.loop) {
				this.reader.set_currentMillisecond(0);
			} else {
				this.atend = true;
			}
			var _g11 = count;
			var _g2 = length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				samples[i1] = 0;
			}
		}
	},
	play: function() {
		this.paused = false;
	},
	pause: function() {
		this.paused = true;
	},
	stop: function() {
		this.atend = true;
	},
	get_length: function() {
		return this.reader.get_totalMillisecond() / 1000.0;
	},
	get_position: function() {
		return this.reader.get_currentMillisecond() / 1000.0;
	},
	get_volume: function() {
		return this.myVolume;
	},
	set_volume: function(value) {
		return this.myVolume = value;
	},
	get_finished: function() {
		return this.atend;
	}
};
StreamChannel.prototype.__class__ = StreamChannel.prototype.constructor = $hxClasses["kha.audio2.StreamChannel"] = StreamChannel;

// Init



// Statics




// Export

exports.default = StreamChannel;