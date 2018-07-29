// Class: kha.FrameTask

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var FrameTask = function(task,priority,id) {
	this.task = task;
	this.priority = priority;
	this.id = id;
	this.active = true;
	this.paused = false;
}

// Meta

FrameTask.__name__ = ["kha","FrameTask"];
FrameTask.prototype = {
	
};
FrameTask.prototype.__class__ = FrameTask.prototype.constructor = $hxClasses["kha.FrameTask"] = FrameTask;

// Init



// Statics




// Export

exports.default = FrameTask;