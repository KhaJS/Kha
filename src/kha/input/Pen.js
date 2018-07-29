// Class: kha.input.Pen

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function HxOverrides() {return require("./../../HxOverrides");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}

// Constructor

var Pen = function() {
	Pen.instance = this;
}

// Meta

Pen.__name__ = ["kha","input","Pen"];
Pen.prototype = {
	notify: function(downListener,upListener,moveListener) {
		this.notifyWindowed(0,downListener,upListener,moveListener);
	},
	remove: function(downListener,upListener,moveListener) {
		this.removeWindowed(0,downListener,upListener,moveListener);
	},
	notifyWindowed: function(windowId,downListener,upListener,moveListener) {
		if(downListener != null) {
			if(this.windowDownListeners == null) {
				this.windowDownListeners = [];
			}
			while(this.windowDownListeners.length <= windowId) this.windowDownListeners.push([]);
			this.windowDownListeners[windowId].push(downListener);
		}
		if(upListener != null) {
			if(this.windowUpListeners == null) {
				this.windowUpListeners = [];
			}
			while(this.windowUpListeners.length <= windowId) this.windowUpListeners.push([]);
			this.windowUpListeners[windowId].push(upListener);
		}
		if(moveListener != null) {
			if(this.windowMoveListeners == null) {
				this.windowMoveListeners = [];
			}
			while(this.windowMoveListeners.length <= windowId) this.windowMoveListeners.push([]);
			this.windowMoveListeners[windowId].push(moveListener);
		}
	},
	removeWindowed: function(windowId,downListener,upListener,moveListener) {
		if(downListener != null && this.windowDownListeners != null) {
			if(windowId < this.windowDownListeners.length) {
				(HxOverrides().default).remove(this.windowDownListeners[windowId],downListener);
			}
		}
		if(upListener != null && this.windowUpListeners != null) {
			if(windowId < this.windowUpListeners.length) {
				(HxOverrides().default).remove(this.windowUpListeners[windowId],upListener);
			}
		}
		if(moveListener != null && this.windowMoveListeners != null) {
			if(windowId < this.windowMoveListeners.length) {
				(HxOverrides().default).remove(this.windowMoveListeners[windowId],moveListener);
			}
		}
	},
	sendDownEvent: function(windowId,x,y,pressure) {
		if(this.windowDownListeners != null) {
			var _g = 0;
			var _g1 = this.windowDownListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(x,y,pressure);
			}
		}
	},
	sendUpEvent: function(windowId,x,y,pressure) {
		if(this.windowUpListeners != null) {
			var _g = 0;
			var _g1 = this.windowUpListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(x,y,pressure);
			}
		}
	},
	sendMoveEvent: function(windowId,x,y,pressure) {
		if(this.windowMoveListeners != null) {
			var _g = 0;
			var _g1 = this.windowMoveListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(x,y,pressure);
			}
		}
	}
};
Pen.prototype.__class__ = Pen.prototype.constructor = $hxClasses["kha.input.Pen"] = Pen;

// Init



// Statics

Pen.get = function(num) {
	if(num == null) {
		num = 0;
	}
	return (kha_SystemImpl().default).getPen(num);
}


// Export

exports.default = Pen;