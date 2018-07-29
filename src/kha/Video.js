// Class: kha.Video

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
function kha_Resource() {return require("./../kha/Resource");}

// Constructor

var Video = function() {
}

// Meta

Video.__name__ = ["kha","Video"];
Video.__interfaces__ = [(kha_Resource().default)];
Video.prototype = {
	width: function() {
		return 100;
	},
	height: function() {
		return 100;
	},
	play: function(loop) {
		if(loop == null) {
			loop = false;
		}
	},
	pause: function() {
	},
	stop: function() {
	},
	getLength: function() {
		return 0;
	},
	getCurrentPos: function() {
		return 0;
	},
	get_position: function() {
		return 0;
	},
	set_position: function(value) {
		return 0;
	},
	getVolume: function() {
		return 1;
	},
	setVolume: function(volume) {
	},
	isFinished: function() {
		return this.getCurrentPos() >= this.getLength();
	},
	unload: function() {
	}
};
Video.prototype.__class__ = Video.prototype.constructor = $hxClasses["kha.Video"] = Video;

// Init



// Statics




// Export

exports.default = Video;