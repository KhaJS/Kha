// Class: kha.input.Keyboard

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_network_Controller() {return require("./../../kha/network/Controller");}
function HxOverrides() {return require("./../../HxOverrides");}
function kha_network_Session() {return require("./../../kha/network/Session");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}

// Constructor

var Keyboard = function() {
	(kha_network_Controller().default).call(this);
	this.downListeners = [];
	this.upListeners = [];
	this.pressListeners = [];
	Keyboard.instance = this;
}

// Meta

Keyboard.__name__ = ["kha","input","Keyboard"];
Keyboard.__super__ = (kha_network_Controller().default);
Keyboard.prototype = $extend((kha_network_Controller().default).prototype, {
	notify: function(downListener,upListener,pressListener) {
		if(downListener != null) {
			this.downListeners.push(downListener);
		}
		if(upListener != null) {
			this.upListeners.push(upListener);
		}
		if(pressListener != null) {
			this.pressListeners.push(pressListener);
		}
	},
	remove: function(downListener,upListener,pressListener) {
		if(downListener != null) {
			(HxOverrides().default).remove(this.downListeners,downListener);
		}
		if(upListener != null) {
			(HxOverrides().default).remove(this.upListeners,upListener);
		}
		if(pressListener != null) {
			(HxOverrides().default).remove(this.pressListeners,pressListener);
		}
	},
	show: function() {
	},
	hide: function() {
	},
	sendDownEvent: function(code) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(5);
			bytes.setInt32(0,0);
			bytes.set(4,code);
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		var _g = 0;
		var _g1 = this.downListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(code);
		}
	},
	sendUpEvent: function(code) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(5);
			bytes.setInt32(0,1);
			bytes.set(4,code);
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		var _g = 0;
		var _g1 = this.upListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(code);
		}
	},
	sendPressEvent: function($char) {
		if((kha_network_Session().default).the() != null) {
			var bytes = (haxe_io_Bytes().default).alloc(5);
			bytes.setInt32(0,2);
			bytes.set(4,(HxOverrides().default).cca($char,0));
			(kha_network_Session().default).the().sendControllerUpdate(this._id(),bytes);
		}
		var _g = 0;
		var _g1 = this.pressListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener($char);
		}
	},
	_receive: function(bytes) {
		var funcindex = bytes.getInt32(0);
		if(funcindex == 0) {
			var input0 = bytes.get(4);
			this.sendDownEvent(input0);
			return;
		}
		if(funcindex == 1) {
			var input01 = bytes.get(4);
			this.sendUpEvent(input01);
			return;
		}
		if(funcindex == 2) {
			var input02 = String.fromCharCode(bytes.get(4));
			this.sendPressEvent(input02);
			return;
		}
	}
});
Keyboard.prototype.__class__ = Keyboard.prototype.constructor = $hxClasses["kha.input.Keyboard"] = Keyboard;

// Init



// Statics

Keyboard.get = function(num) {
	if(num == null) {
		num = 0;
	}
	return (kha_SystemImpl().default).getKeyboard(num);
}
Keyboard.__meta__ = { fields : { sendDownEvent : { input : null}, sendUpEvent : { input : null}, sendPressEvent : { input : null}}}

// Export

exports.default = Keyboard;