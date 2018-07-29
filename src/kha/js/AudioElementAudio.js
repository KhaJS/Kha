// Class: kha.js.AudioElementAudio

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_js_AEAudioChannel() {return require("./../../kha/js/AEAudioChannel");}

// Constructor

var AudioElementAudio = function(){}

// Meta

AudioElementAudio.__name__ = ["kha","js","AudioElementAudio"];
AudioElementAudio.prototype = {
	
};
AudioElementAudio.prototype.__class__ = AudioElementAudio.prototype.constructor = $hxClasses["kha.js.AudioElementAudio"] = AudioElementAudio;

// Init



// Statics

AudioElementAudio._compile = function() {
}
AudioElementAudio.play = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	return AudioElementAudio.stream(sound,loop);
}
AudioElementAudio.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	sound.element.loop = loop;
	var channel = new (kha_js_AEAudioChannel().default)(sound.element);
	channel.play();
	return channel;
}


// Export

exports.default = AudioElementAudio;