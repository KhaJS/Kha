// Class: kha.TargetRectangle

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var TargetRectangle = function(x,y,w,h,s,r) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.scaleFactor = s;
	this.rotation = r;
}

// Meta

TargetRectangle.__name__ = ["kha","TargetRectangle"];
TargetRectangle.prototype = {
	
};
TargetRectangle.prototype.__class__ = TargetRectangle.prototype.constructor = $hxClasses["kha.TargetRectangle"] = TargetRectangle;

// Init



// Statics




// Export

exports.default = TargetRectangle;