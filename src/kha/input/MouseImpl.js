// Class: kha.input.MouseImpl

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_input_Mouse() {return require("./../../kha/input/Mouse");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}

// Constructor

var MouseImpl = function() {
	(kha_input_Mouse().default).call(this);
}

// Meta

MouseImpl.__name__ = ["kha","input","MouseImpl"];
MouseImpl.__super__ = (kha_input_Mouse().default);
MouseImpl.prototype = $extend((kha_input_Mouse().default).prototype, {
	lock: function() {
		(kha_SystemImpl().default).lockMouse();
	},
	unlock: function() {
		(kha_SystemImpl().default).unlockMouse();
	},
	canLock: function() {
		return (kha_SystemImpl().default).canLockMouse();
	},
	isLocked: function() {
		return (kha_SystemImpl().default).isMouseLocked();
	},
	notifyOnLockChange: function(func,error) {
		(kha_SystemImpl().default).notifyOfMouseLockChange(func,error);
	},
	removeFromLockChange: function(func,error) {
		(kha_SystemImpl().default).removeFromMouseLockChange(func,error);
	},
	hideSystemCursor: function() {
		(kha_SystemImpl().default).khanvas.style.cursor = "none";
	},
	showSystemCursor: function() {
		(kha_SystemImpl().default).khanvas.style.cursor = "default";
	},
	_receive: function(bytes) {
		var funcindex = bytes.getInt32(0);
	}
});
MouseImpl.prototype.__class__ = MouseImpl.prototype.constructor = $hxClasses["kha.input.MouseImpl"] = MouseImpl;

// Init



// Statics




// Export

exports.default = MouseImpl;