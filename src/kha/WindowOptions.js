// Class: kha.WindowOptions

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var WindowOptions = function(width,height,mode,title,x,y,targetDisplay,rendererOptions,windowedModeOptions) {
	this.width = width;
	this.height = height;
	this.mode = mode;
	this.title = title;
	this.x = x;
	this.y = y;
	this.targetDisplay = targetDisplay;
	this.rendererOptions = rendererOptions;
	this.windowedModeOptions = windowedModeOptions;
}

// Meta

WindowOptions.__name__ = ["kha","WindowOptions"];
WindowOptions.prototype = {
	
};
WindowOptions.prototype.__class__ = WindowOptions.prototype.constructor = $hxClasses["kha.WindowOptions"] = WindowOptions;

// Init



// Statics




// Export

exports.default = WindowOptions;