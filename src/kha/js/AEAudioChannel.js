// Class: kha.js.AEAudioChannel

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_audio1_AudioChannel() {return require("./../../kha/audio1/AudioChannel");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_Log() {return require("./../../haxe/Log");}

// Constructor

var AEAudioChannel = function(element) {
	this.stopped = false;
	this.element = element;
}

// Meta

AEAudioChannel.__name__ = ["kha","js","AEAudioChannel"];
AEAudioChannel.__interfaces__ = [(kha_audio1_AudioChannel().default)];
AEAudioChannel.prototype = {
	play: function() {
		this.stopped = false;
		if((kha_SystemImpl().default).mobile) {
			if((kha_SystemImpl().default).insideInputEvent) {
				this.element.play();
				(kha_SystemImpl().default).mobileAudioPlaying = true;
			} else if((kha_SystemImpl().default).mobileAudioPlaying) {
				this.element.play();
			} else {
				AEAudioChannel.todo.push(this);
			}
		} else {
			this.element.play();
		}
	},
	pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
			(haxe_Log().default).trace(e,{ fileName : "AEAudioChannel.hx", lineNumber : 39, className : "kha.js.AEAudioChannel", methodName : "pause"});
		}
	},
	stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
			this.stopped = true;
		} catch( e ) {
			if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
			(haxe_Log().default).trace(e,{ fileName : "AEAudioChannel.hx", lineNumber : 50, className : "kha.js.AEAudioChannel", methodName : "stop"});
		}
	},
	get_length: function() {
		if(isFinite(this.element.duration)) {
			return this.element.duration;
		} else {
			return Infinity;
		}
	},
	get_position: function() {
		return this.element.currentTime;
	},
	get_volume: function() {
		return this.element.volume;
	},
	set_volume: function(value) {
		return this.element.volume = value;
	},
	get_finished: function() {
		if(!this.stopped) {
			return this.get_position() >= this.get_length();
		} else {
			return true;
		}
	}
};
AEAudioChannel.prototype.__class__ = AEAudioChannel.prototype.constructor = $hxClasses["kha.js.AEAudioChannel"] = AEAudioChannel;

// Init



// Statics


AEAudioChannel.todo = []

// Export

exports.default = AEAudioChannel;