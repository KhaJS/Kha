// Class: kha.js.MobileWebAudio

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_js_MobileWebAudioChannel() {return require("./../../kha/js/MobileWebAudioChannel");}

// Constructor

var MobileWebAudio = function(){}

// Meta

MobileWebAudio.__name__ = ["kha","js","MobileWebAudio"];
MobileWebAudio.prototype = {
	
};
MobileWebAudio.prototype.__class__ = MobileWebAudio.prototype.constructor = $hxClasses["kha.js.MobileWebAudio"] = MobileWebAudio;

// Init



// Statics

MobileWebAudio._init = function() {
	try {
		MobileWebAudio._context = new AudioContext();
		return;
	} catch( e ) {
	}
	try {
		this._context = new webkitAudioContext();
		return;
	} catch( e1 ) {
	}
}
MobileWebAudio.play = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var channel = new (kha_js_MobileWebAudioChannel().default)(sound,loop);
	channel.play();
	return channel;
}
MobileWebAudio.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	return MobileWebAudio.play(sound,loop);
}


// Export

exports.default = MobileWebAudio;