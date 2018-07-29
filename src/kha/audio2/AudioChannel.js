// Class: kha.audio2.AudioChannel

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_audio1_AudioChannel() {return require("./../../kha/audio1/AudioChannel");}
function kha_audio2_Audio1() {return require("./../../kha/audio2/Audio1");}

// Constructor

var AudioChannel = function(looping) {
	this.paused = false;
	this.looping = looping;
	this.myVolume = 1;
	this.myPosition = 0;
}

// Meta

AudioChannel.__name__ = ["kha","audio2","AudioChannel"];
AudioChannel.__interfaces__ = [(kha_audio1_AudioChannel().default)];
AudioChannel.prototype = {
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
		var w_ptr = 0;
		var chk_ptr = 0;
		while(w_ptr < length) {
			var addressable_data = this.data.length - this.myPosition;
			var next_chunk = addressable_data < length - w_ptr ? addressable_data : length - w_ptr;
			while(chk_ptr < next_chunk) {
				samples[w_ptr] = this.data[this.myPosition];
				++this.myPosition;
				++chk_ptr;
				++w_ptr;
			}
			if(!this.looping) {
				break;
			} else {
				chk_ptr = 0;
				if(this.myPosition >= this.data.length) {
					this.myPosition = 0;
				}
			}
		}
		while(w_ptr < length) {
			samples[w_ptr] = 0;
			++w_ptr;
		}
	},
	play: function() {
		this.paused = false;
		if(this.get_finished()) {
			this.myPosition = 0;
			(kha_audio2_Audio1().default)._playAgain(this);
		}
	},
	pause: function() {
		this.paused = true;
	},
	stop: function() {
		this.myPosition = this.data.length;
	},
	get_length: function() {
		return this.data.length / 44100 / 2;
	},
	get_position: function() {
		return this.myPosition / 44100 / 2;
	},
	get_volume: function() {
		return this.myVolume;
	},
	set_volume: function(value) {
		return this.myVolume = value;
	},
	get_finished: function() {
		return this.myPosition >= this.data.length;
	}
};
AudioChannel.prototype.__class__ = AudioChannel.prototype.constructor = $hxClasses["kha.audio2.AudioChannel"] = AudioChannel;

// Init



// Statics




// Export

exports.default = AudioChannel;