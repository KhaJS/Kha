// Class: kha.input.Gamepad

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function HxOverrides() {return require("./../../HxOverrides");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}

// Constructor

var Gamepad = function(index,id) {
	if(id == null) {
		id = "unknown";
	}
	if(index == null) {
		index = 0;
	}
	this.index = index;
	this.axisListeners = [];
	this.buttonListeners = [];
	Gamepad.instances[index] = this;
}

// Meta

Gamepad.__name__ = ["kha","input","Gamepad"];
Gamepad.prototype = {
	notify: function(axisListener,buttonListener) {
		if(axisListener != null) {
			this.axisListeners.push(axisListener);
		}
		if(buttonListener != null) {
			this.buttonListeners.push(buttonListener);
		}
	},
	remove: function(axisListener,buttonListener) {
		if(axisListener != null) {
			(HxOverrides().default).remove(this.axisListeners,axisListener);
		}
		if(buttonListener != null) {
			(HxOverrides().default).remove(this.buttonListeners,buttonListener);
		}
	},
	get_id: function() {
		return (kha_SystemImpl().default).getGamepadId(this.index);
	},
	sendAxisEvent: function(axis,value) {
		var _g = 0;
		var _g1 = this.axisListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(axis,value);
		}
	},
	sendButtonEvent: function(button,value) {
		var _g = 0;
		var _g1 = this.buttonListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(button,value);
		}
	}
};
Gamepad.prototype.__class__ = Gamepad.prototype.constructor = $hxClasses["kha.input.Gamepad"] = Gamepad;

// Init



// Statics

Gamepad.get = function(index) {
	if(index == null) {
		index = 0;
	}
	if(index >= Gamepad.instances.length) {
		return null;
	}
	return Gamepad.instances[index];
}
Gamepad.notifyOnConnect = function(connectListener,disconnectListener) {
	if(connectListener != null) {
		Gamepad.connectListeners.push(connectListener);
	}
	if(disconnectListener != null) {
		Gamepad.disconnectListeners.push(disconnectListener);
	}
}
Gamepad.removeConnect = function(connectListener,disconnectListener) {
	if(connectListener != null) {
		(HxOverrides().default).remove(Gamepad.connectListeners,connectListener);
	}
	if(disconnectListener != null) {
		(HxOverrides().default).remove(Gamepad.disconnectListeners,disconnectListener);
	}
}
Gamepad.sendConnectEvent = function(index) {
	Gamepad.instances[index].connected = true;
	var _g = 0;
	var _g1 = Gamepad.connectListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(index);
	}
}
Gamepad.sendDisconnectEvent = function(index) {
	Gamepad.instances[index].connected = false;
	var _g = 0;
	var _g1 = Gamepad.disconnectListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(index);
	}
}
Gamepad.__meta__ = { statics : { sendConnectEvent : { input : null}, sendDisconnectEvent : { input : null}}, fields : { sendAxisEvent : { input : null}, sendButtonEvent : { input : null}}}
Gamepad.instances = []
Gamepad.connectListeners = []
Gamepad.disconnectListeners = []

// Export

exports.default = Gamepad;