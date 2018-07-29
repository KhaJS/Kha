// Class: EReg

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function js__$Boot_HaxeError() {return require("./js/_Boot/HaxeError");}

// Constructor

var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
}

// Meta

EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	},
	matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw new (js__$Boot_HaxeError().default)("EReg::matched");
		}
	}
};
EReg.prototype.__class__ = EReg.prototype.constructor = $hxClasses["EReg"] = EReg;

// Init



// Statics




// Export

exports.default = EReg;