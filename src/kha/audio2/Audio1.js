// Class: kha.audio2.Audio1

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_audio2_Audio() {return require("./../../kha/audio2/Audio");}
function kha_audio2_AudioChannel() {return require("./../../kha/audio2/AudioChannel");}
function kha_audio2_StreamChannel() {return require("./../../kha/audio2/StreamChannel");}

// Constructor

var Audio1 = function(){}

// Meta

Audio1.__name__ = ["kha","audio2","Audio1"];
Audio1.prototype = {
	
};
Audio1.prototype.__class__ = Audio1.prototype.constructor = $hxClasses["kha.audio2.Audio1"] = Audio1;

// Init



// Statics

Audio1._init = function() {
	var this1 = new Array(16);
	Audio1.soundChannels = this1;
	var this2 = new Array(16);
	Audio1.streamChannels = this2;
	var this3 = new Array(16);
	Audio1.internalSoundChannels = this3;
	var this4 = new Array(16);
	Audio1.internalStreamChannels = this4;
	var this5 = new Float32Array(512);
	Audio1.sampleCache1 = this5;
	var this6 = new Float32Array(512);
	Audio1.sampleCache2 = this6;
	(kha_audio2_Audio().default).audioCallback = Audio1.mix;
}
Audio1.max = function(a,b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
}
Audio1.min = function(a,b) {
	if(a < b) {
		return a;
	} else {
		return b;
	}
}
Audio1.mix = function(samples,buffer) {
	if(Audio1.sampleCache1.length < samples) {
		var this1 = new Float32Array(samples);
		Audio1.sampleCache1 = this1;
		var this2 = new Float32Array(samples);
		Audio1.sampleCache2 = this2;
	}
	var _g1 = 0;
	var _g = samples;
	while(_g1 < _g) {
		var i = _g1++;
		Audio1.sampleCache2[i] = 0;
	}
	var _g2 = 0;
	while(_g2 < 16) {
		var i1 = _g2++;
		Audio1.internalSoundChannels[i1] = Audio1.soundChannels[i1];
	}
	var _g3 = 0;
	while(_g3 < 16) {
		var i2 = _g3++;
		Audio1.internalStreamChannels[i2] = Audio1.streamChannels[i2];
	}
	var _g4 = 0;
	var _g11 = Audio1.internalSoundChannels;
	while(_g4 < _g11.length) {
		var channel = _g11[_g4];
		++_g4;
		if(channel == null || channel.get_finished()) {
			continue;
		}
		channel.nextSamples(Audio1.sampleCache1,samples,buffer.samplesPerSecond);
		var _g31 = 0;
		var _g21 = samples;
		while(_g31 < _g21) {
			var i3 = _g31++;
			var _g41 = i3;
			var _g5 = Audio1.sampleCache2;
			_g5[_g41] += Audio1.sampleCache1[i3] * channel.get_volume();
		}
	}
	var _g6 = 0;
	var _g12 = Audio1.internalStreamChannels;
	while(_g6 < _g12.length) {
		var channel1 = _g12[_g6];
		++_g6;
		if(channel1 == null || channel1.get_finished()) {
			continue;
		}
		channel1.nextSamples(Audio1.sampleCache1,samples,buffer.samplesPerSecond);
		var _g32 = 0;
		var _g22 = samples;
		while(_g32 < _g22) {
			var i4 = _g32++;
			var _g42 = i4;
			var _g51 = Audio1.sampleCache2;
			_g51[_g42] += Audio1.sampleCache1[i4] * channel1.get_volume();
		}
	}
	var _g13 = 0;
	var _g7 = samples;
	while(_g13 < _g7) {
		var i5 = _g13++;
		buffer.data[buffer.writeLocation] = Audio1.max(Audio1.min(Audio1.sampleCache2[i5],1.0),-1.0);
		buffer.writeLocation += 1;
		if(buffer.writeLocation >= buffer.size) {
			buffer.writeLocation = 0;
		}
	}
}
Audio1.play = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var channel = null;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		if(Audio1.soundChannels[i] == null || Audio1.soundChannels[i].get_finished()) {
			channel = new (kha_audio2_AudioChannel().default)(loop);
			channel.data = sound.uncompressedData;
			Audio1.soundChannels[i] = channel;
			break;
		}
	}
	return channel;
}
Audio1._playAgain = function(channel) {
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		if(Audio1.soundChannels[i] == null || Audio1.soundChannels[i].get_finished() || Audio1.soundChannels[i] == channel) {
			Audio1.soundChannels[i] = channel;
			break;
		}
	}
}
Audio1.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var hardwareChannel = (kha_audio2_Audio().default).stream(sound,loop);
	if(hardwareChannel != null) {
		return hardwareChannel;
	}
	var channel = null;
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		if(Audio1.streamChannels[i] == null || Audio1.streamChannels[i].get_finished()) {
			channel = new (kha_audio2_StreamChannel().default)(sound.compressedData,loop);
			Audio1.streamChannels[i] = channel;
			break;
		}
	}
	return channel;
}
Audio1.channelCount = 16

// Export

exports.default = Audio1;