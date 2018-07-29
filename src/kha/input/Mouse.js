// Class: kha.input.Mouse

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_network_Controller() {return require("./../../kha/network/Controller");}
function HxOverrides() {return require("./../../HxOverrides");}
function haxe_Log() {return require("./../../haxe/Log");}
function kha_network_Session() {return require("./../../kha/network/Session");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}

// Constructor

var Mouse = function() {
	(kha_network_Controller().default).call(this);
	Mouse.instance = this;
}

// Meta

Mouse.__name__ = ["kha","input","Mouse"];
Mouse.__super__ = (kha_network_Controller().default);
Mouse.prototype = $extend((kha_network_Controller().default).prototype, {
	notify: function(downListener,upListener,moveListener,wheelListener,leaveListener) {
		this.notifyWindowed(0,downListener,upListener,moveListener,wheelListener,leaveListener);
	},
	remove: function(downListener,upListener,moveListener,wheelListener,leaveListener) {
		this.removeWindowed(0,downListener,upListener,moveListener,wheelListener,leaveListener);
	},
	notifyWindowed: function(windowId,downListener,upListener,moveListener,wheelListener,leaveListener) {
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
		if(wheelListener != null) {
			if(this.windowWheelListeners == null) {
				this.windowWheelListeners = [];
			}
			while(this.windowWheelListeners.length <= windowId) this.windowWheelListeners.push([]);
			this.windowWheelListeners[windowId].push(wheelListener);
		}
		if(leaveListener != null) {
			if(this.windowLeaveListeners == null) {
				this.windowLeaveListeners = [];
			}
			while(this.windowLeaveListeners.length <= windowId) this.windowLeaveListeners.push([]);
			this.windowLeaveListeners[windowId].push(leaveListener);
		}
	},
	removeWindowed: function(windowId,downListener,upListener,moveListener,wheelListener,leaveListener) {
		if(downListener != null) {
			if(this.windowDownListeners != null) {
				if(windowId < this.windowDownListeners.length) {
					(HxOverrides().default).remove(this.windowDownListeners[windowId],downListener);
				} else {
					(haxe_Log().default).trace("no downListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 110, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				(haxe_Log().default).trace("no downListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 114, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(upListener != null) {
			if(this.windowUpListeners != null) {
				if(windowId < this.windowUpListeners.length) {
					(HxOverrides().default).remove(this.windowUpListeners[windowId],upListener);
				} else {
					(haxe_Log().default).trace("no upListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 124, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				(haxe_Log().default).trace("no upListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 128, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(moveListener != null) {
			if(this.windowMoveListeners != null) {
				if(windowId < this.windowMoveListeners.length) {
					(HxOverrides().default).remove(this.windowMoveListeners[windowId],moveListener);
				} else {
					(haxe_Log().default).trace("no moveListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 138, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				(haxe_Log().default).trace("no moveListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 142, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(wheelListener != null) {
			if(this.windowWheelListeners != null) {
				if(windowId < this.windowWheelListeners.length) {
					(HxOverrides().default).remove(this.windowWheelListeners[windowId],wheelListener);
				} else {
					(haxe_Log().default).trace("no wheelListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 152, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				(haxe_Log().default).trace("no wheelListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 156, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(leaveListener != null) {
			if(this.windowLeaveListeners != null) {
				if(windowId < this.windowLeaveListeners.length) {
					(HxOverrides().default).remove(this.windowLeaveListeners[windowId],leaveListener);
				} else {
					(haxe_Log().default).trace("no leaveListeners for window \"" + windowId + "\" are registered",{ fileName : "Mouse.hx", lineNumber : 166, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				(haxe_Log().default).trace("no leaveListeners were ever registered",{ fileName : "Mouse.hx", lineNumber : 170, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
	},
	lock: function() {
	},
	unlock: function() {
	},
	canLock: function() {
		return false;
	},
	isLocked: function() {
		return false;
	},
	notifyOnLockChange: function(change,error) {
	},
	removeFromLockChange: function(change,error) {
	},
	hideSystemCursor: function() {
	},
	showSystemCursor: function() {
	},
	sendLeaveEvent: function(windowId) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(8);
			bytes.setInt32(0,0);
			bytes.setInt32(4,windowId);
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowLeaveListeners != null) {
			var _g = 0;
			var _g1 = this.windowLeaveListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener();
			}
		}
	},
	sendDownEvent: function(windowId,button,x,y) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(20);
			bytes.setInt32(0,1);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,button);
			bytes.setInt32(12,x);
			bytes.setInt32(16,y);
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowDownListeners != null) {
			var _g = 0;
			var _g1 = this.windowDownListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(button,x,y);
			}
		}
	},
	sendUpEvent: function(windowId,button,x,y) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(20);
			bytes.setInt32(0,2);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,button);
			bytes.setInt32(12,x);
			bytes.setInt32(16,y);
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowUpListeners != null) {
			var _g = 0;
			var _g1 = this.windowUpListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(button,x,y);
			}
		}
	},
	sendMoveEvent: function(windowId,x,y,movementX,movementY) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(24);
			bytes.setInt32(0,3);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,x);
			bytes.setInt32(12,y);
			bytes.setInt32(16,movementX);
			bytes.setInt32(20,movementY);
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowMoveListeners != null) {
			var _g = 0;
			var _g1 = this.windowMoveListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(x,y,movementX,movementY);
			}
		}
	},
	sendWheelEvent: function(windowId,delta) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(12);
			bytes.setInt32(0,4);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,delta);
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowWheelListeners != null) {
			var _g = 0;
			var _g1 = this.windowWheelListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(delta);
			}
		}
	},
	_receive: function(bytes) {
		var funcindex = bytes.getInt32(0);
		if(funcindex == 0) {
			var input0 = bytes.getInt32(4);
			this.sendLeaveEvent(input0);
			return;
		}
		if(funcindex == 1) {
			var input01 = bytes.getInt32(4);
			var input1 = bytes.getInt32(8);
			var input2 = bytes.getInt32(12);
			var input3 = bytes.getInt32(16);
			this.sendDownEvent(input01,input1,input2,input3);
			return;
		}
		if(funcindex == 2) {
			var input02 = bytes.getInt32(4);
			var input11 = bytes.getInt32(8);
			var input21 = bytes.getInt32(12);
			var input31 = bytes.getInt32(16);
			this.sendUpEvent(input02,input11,input21,input31);
			return;
		}
		if(funcindex == 3) {
			var input03 = bytes.getInt32(4);
			var input12 = bytes.getInt32(8);
			var input22 = bytes.getInt32(12);
			var input32 = bytes.getInt32(16);
			var input4 = bytes.getInt32(20);
			this.sendMoveEvent(input03,input12,input22,input32,input4);
			return;
		}
		if(funcindex == 4) {
			var input04 = bytes.getInt32(4);
			var input13 = bytes.getInt32(8);
			this.sendWheelEvent(input04,input13);
			return;
		}
	}
});
Mouse.prototype.__class__ = Mouse.prototype.constructor = $hxClasses["kha.input.Mouse"] = Mouse;

// Init



// Statics

Mouse.get = function(num) {
	if(num == null) {
		num = 0;
	}
	return (kha_SystemImpl().default).getMouse(num);
}
Mouse.__meta__ = { fields : { sendLeaveEvent : { input : null}, sendDownEvent : { input : null}, sendUpEvent : { input : null}, sendMoveEvent : { input : null}, sendWheelEvent : { input : null}}}

// Export

exports.default = Mouse;