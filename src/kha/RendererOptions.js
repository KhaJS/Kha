// Class: kha.RendererOptions

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var RendererOptions = function(textureFormat,depthStencilFormat,samplesPerPixel) {
	this.textureFormat = textureFormat;
	this.depthStencilFormat = depthStencilFormat;
	this.samplesPerPixel = samplesPerPixel;
}

// Meta

RendererOptions.__name__ = ["kha","RendererOptions"];
RendererOptions.prototype = {
	
};
RendererOptions.prototype.__class__ = RendererOptions.prototype.constructor = $hxClasses["kha.RendererOptions"] = RendererOptions;

// Init



// Statics




// Export

exports.default = RendererOptions;