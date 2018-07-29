// Class: kha.input.Surface

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var Surface = function() {
	this.touchStartListeners = [];
	this.touchEndListeners = [];
	this.moveListeners = [];
	Surface.instance = this;
}

// Meta

Surface.__name__ = ["kha","input","Surface"];
Surface.prototype = {
	notify: function(touchStartListener,touchEndListener,moveListener) {
		if(touchStartListener != null) {
			this.touchStartListeners.push(touchStartListener);
		}
		if(touchEndListener != null) {
			this.touchEndListeners.push(touchEndListener);
		}
		if(moveListener != null) {
			this.moveListeners.push(moveListener);
		}
	},
	remove: function(touchStartListener,touchEndListener,moveListener) {
		if(touchStartListener != null) {
			(HxOverrides().default).remove(this.touchStartListeners,touchStartListener);
		}
		if(touchEndListener != null) {
			(HxOverrides().default).remove(this.touchEndListeners,touchEndListener);
		}
		if(moveListener != null) {
			this.moveListeners.push(moveListener);
		}
	},
	sendTouchStartEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.touchStartListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	},
	sendTouchEndEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.touchEndListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	},
	sendMoveEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.moveListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	}
};
Surface.prototype.__class__ = Surface.prototype.constructor = $hxClasses["kha.input.Surface"] = Surface;

// Init



// Statics

Surface.get = function(num) {
	if(num == null) {
		num = 0;
	}
	if(num != 0) {
		return null;
	}
	return Surface.instance;
}


// Export

exports.default = Surface;