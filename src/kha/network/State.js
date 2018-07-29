// Class: kha.network.State

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;

// Constructor

var State = function(time,data) {
	this.time = time;
	this.data = data;
}

// Meta

State.__name__ = ["kha","network","State"];
State.prototype = {
	
};
State.prototype.__class__ = State.prototype.constructor = $hxClasses["kha.network.State"] = State;

// Init



// Statics




// Export

exports.default = State;