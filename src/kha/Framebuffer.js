// Class: kha.Framebuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function kha_Canvas() {return require("./../kha/Canvas");}
function kha_System() {return require("./../kha/System");}

// Constructor

var Framebuffer = function(windowId,g1,g2,g4) {
	this.windowId = windowId;
	this.graphics1 = g1;
	this.graphics2 = g2;
	this.graphics4 = g4;
}

// Meta

Framebuffer.__name__ = ["kha","Framebuffer"];
Framebuffer.__interfaces__ = [(kha_Canvas().default)];
Framebuffer.prototype = {
	init: function(g1,g2,g4) {
		this.graphics1 = g1;
		this.graphics2 = g2;
		this.graphics4 = g4;
	},
	get_g1: function() {
		return this.graphics1;
	},
	get_g2: function() {
		return this.graphics2;
	},
	get_g4: function() {
		return this.graphics4;
	},
	get_width: function() {
		return (kha_System().default).windowWidth(this.windowId);
	},
	get_height: function() {
		return (kha_System().default).windowHeight(this.windowId);
	}
};
Framebuffer.prototype.__class__ = Framebuffer.prototype.constructor = $hxClasses["kha.Framebuffer"] = Framebuffer;

// Init



// Statics




// Export

exports.default = Framebuffer;