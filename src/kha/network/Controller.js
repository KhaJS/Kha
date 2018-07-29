// Class: kha.network.Controller

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_network_ControllerBuilder() {return require("./../../kha/network/ControllerBuilder");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var Controller = function() {
	this.__id = (kha_network_ControllerBuilder().default).nextId++;
	this._inputBuffer = (haxe_io_Bytes().default).alloc(1);
}

// Meta

Controller.__name__ = ["kha","network","Controller"];
Controller.prototype = {
	_id: function() {
		return this.__id;
	},
	_receive: function(bytes) {
	}
};
Controller.prototype.__class__ = Controller.prototype.constructor = $hxClasses["kha.network.Controller"] = Controller;

// Init



// Statics




// Export

exports.default = Controller;