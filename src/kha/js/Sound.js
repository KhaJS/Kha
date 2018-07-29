// Class: kha.js.Sound

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_Sound() {return require("./../../kha/Sound");}
function HxOverrides() {return require("./../../HxOverrides");}
function js_Browser() {return require("./../../js/Browser");}
function StringTools() {return require("./../../StringTools");}

// Constructor

var Sound = function(filenames,done,failed) {
	(kha_Sound().default).call(this);
	this.done = done;
	this.failed = failed;
	Sound.loading.push(this);
	this.element = (js_Browser().default).get_document().createElement("audio");
	this.filenames = [];
	var _g = 0;
	while(_g < filenames.length) {
		var filename = filenames[_g];
		++_g;
		if(this.element.canPlayType("audio/ogg") != "" && (StringTools().default).endsWith(filename,".ogg")) {
			this.filenames.push(filename);
		}
		if(this.element.canPlayType("audio/mp4") != "" && (StringTools().default).endsWith(filename,".mp4")) {
			this.filenames.push(filename);
		}
	}
	this.element.addEventListener("error",$bind(this,this.errorListener),false);
	this.element.addEventListener("canplay",$bind(this,this.canPlayThroughListener),false);
	this.element.src = this.filenames[0];
	this.element.preload = "auto";
	this.element.load();
}

// Meta

Sound.__name__ = ["kha","js","Sound"];
Sound.__super__ = (kha_Sound().default);
Sound.prototype = $extend((kha_Sound().default).prototype, {
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
		this.failed({ url : this.element.src});
		this.finishAsset();
	},
	canPlayThroughListener: function(eventInfo) {
		this.finishAsset();
	},
	finishAsset: function() {
		this.element.removeEventListener("error",$bind(this,this.errorListener),false);
		this.element.removeEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
		this.done(this);
		(HxOverrides().default).remove(Sound.loading,this);
	},
	uncompress: function(done) {
		done();
	}
});
Sound.prototype.__class__ = Sound.prototype.constructor = $hxClasses["kha.js.Sound"] = Sound;

// Init



// Statics


Sound.loading = []

// Export

exports.default = Sound;