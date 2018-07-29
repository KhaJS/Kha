// Class: kha.js.MobileWebAudioChannel

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_audio1_AudioChannel() {return require("./../../kha/audio1/AudioChannel");}
function kha_js_MobileWebAudio() {return require("./../../kha/js/MobileWebAudio");}

// Constructor

var MobileWebAudioChannel = function(sound,loop) {
	this.stopped = false;
	this.paused = false;
	this.buffer = sound._buffer;
	this.loop = loop;
	this.createSource();
}

// Meta

MobileWebAudioChannel.__name__ = ["kha","js","MobileWebAudioChannel"];
MobileWebAudioChannel.__interfaces__ = [(kha_audio1_AudioChannel().default)];
MobileWebAudioChannel.prototype = {
	createSource: function() {
		var _gthis = this;
		this.source = (kha_js_MobileWebAudio().default)._context.createBufferSource();
		this.source.loop = this.loop;
		this.source.buffer = this.buffer;
		this.source.onended = function() {
			_gthis.stopped = true;
		};
		this.gain = (kha_js_MobileWebAudio().default)._context.createGain();
		this.source.connect(this.gain);
		this.gain.connect((kha_js_MobileWebAudio().default)._context.destination);
	},
	play: function() {
		if(this.paused || this.stopped) {
			this.createSource();
		}
		this.stopped = false;
		if(this.paused) {
			this.paused = false;
			this.startTime = (kha_js_MobileWebAudio().default)._context.currentTime - this.pauseTime;
			this.source.start(0,this.pauseTime);
		} else {
			this.startTime = (kha_js_MobileWebAudio().default)._context.currentTime;
			this.source.start();
		}
	},
	pause: function() {
		this.pauseTime = (kha_js_MobileWebAudio().default)._context.currentTime - this.startTime;
		this.paused = true;
		this.source.stop();
	},
	stop: function() {
		this.paused = false;
		this.stopped = true;
		this.source.stop();
	},
	get_length: function() {
		return this.source.buffer.duration;
	},
	get_position: function() {
		if(this.stopped) {
			return this.get_length();
		}
		if(this.paused) {
			return this.pauseTime;
		} else {
			return (kha_js_MobileWebAudio().default)._context.currentTime - this.startTime;
		}
	},
	get_volume: function() {
		return this.gain.gain.value;
	},
	set_volume: function(value) {
		return this.gain.gain.value = value;
	},
	get_finished: function() {
		return this.stopped;
	}
};
MobileWebAudioChannel.prototype.__class__ = MobileWebAudioChannel.prototype.constructor = $hxClasses["kha.js.MobileWebAudioChannel"] = MobileWebAudioChannel;

// Init



// Statics




// Export

exports.default = MobileWebAudioChannel;