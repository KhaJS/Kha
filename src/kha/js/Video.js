// Class: kha.js.Video

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_Video() {return require("./../../kha/Video");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_Log() {return require("./../../haxe/Log");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}
function kha_Image() {return require("./../../kha/Image");}
function js_Browser() {return require("./../../js/Browser");}
function StringTools() {return require("./../../StringTools");}

// Constructor

var Video = function() {
	(kha_Video().default).call(this);
}

// Meta

Video.__name__ = ["kha","js","Video"];
Video.__super__ = (kha_Video().default);
Video.prototype = $extend((kha_Video().default).prototype, {
	width: function() {
		return this.element.videoWidth;
	},
	height: function() {
		return this.element.videoHeight;
	},
	play: function(loop) {
		if(loop == null) {
			loop = false;
		}
		try {
			this.element.loop = loop;
			this.element.play();
		} catch( e ) {
			if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
			(haxe_Log().default).trace(e,{ fileName : "Video.hx", lineNumber : 64, className : "kha.js.Video", methodName : "play"});
		}
	},
	pause: function() {
		try {
			this.element.pause();
		} catch( e ) {
			if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
			(haxe_Log().default).trace(e,{ fileName : "Video.hx", lineNumber : 73, className : "kha.js.Video", methodName : "pause"});
		}
	},
	stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
		} catch( e ) {
			if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
			(haxe_Log().default).trace(e,{ fileName : "Video.hx", lineNumber : 83, className : "kha.js.Video", methodName : "stop"});
		}
	},
	getCurrentPos: function() {
		return Math.ceil(this.element.currentTime * 1000);
	},
	get_position: function() {
		return Math.ceil(this.element.currentTime * 1000);
	},
	set_position: function(value) {
		this.element.currentTime = value / 1000;
		return value;
	},
	getLength: function() {
		if(isFinite(this.element.duration)) {
			return Math.floor(this.element.duration * 1000);
		} else {
			return -1;
		}
	},
	errorListener: function(eventInfo) {
		if(this.element.error.code == 4) {
			var _g1 = 0;
			var _g = this.filenames.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.element.src == this.filenames[i]) {
					this.element.src = this.filenames[i + 1];
					return;
				}
			}
		}
		(haxe_Log().default).trace("Error loading " + this.element.src,{ fileName : "Video.hx", lineNumber : 120, className : "kha.js.Video", methodName : "errorListener"});
		this.finishAsset();
	},
	canPlayThroughListener: function(eventInfo) {
		this.finishAsset();
	},
	finishAsset: function() {
		this.element.removeEventListener("error",$bind(this,this.errorListener),false);
		this.element.removeEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
		if((kha_SystemImpl().default).gl != null) {
			this.texture = (kha_Image().default).fromVideo(this);
		}
		this.done(this);
	}
});
Video.prototype.__class__ = Video.prototype.constructor = $hxClasses["kha.js.Video"] = Video;

// Init



// Statics

Video.fromElement = function(element) {
	var video = new Video();
	video.element = element;
	if((kha_SystemImpl().default).gl != null) {
		video.texture = (kha_Image().default).fromVideo(video);
	}
	return video;
}
Video.fromFile = function(filenames,done) {
	var video = new Video();
	video.done = done;
	video.element = (js_Browser().default).get_document().createElement("video");
	video.filenames = [];
	var _g = 0;
	while(_g < filenames.length) {
		var filename = filenames[_g];
		++_g;
		if(video.element.canPlayType("video/webm") != "" && (StringTools().default).endsWith(filename,".webm")) {
			video.filenames.push(filename);
		}
		if(video.element.canPlayType("video/mp4") != "" && (StringTools().default).endsWith(filename,".mp4")) {
			video.filenames.push(filename);
		}
	}
	video.element.addEventListener("error",$bind(video,video.errorListener),false);
	video.element.addEventListener("canplaythrough",$bind(video,video.canPlayThroughListener),false);
	video.element.preload = "auto";
	video.element.src = video.filenames[0];
}


// Export

exports.default = Video;