// Class: js._Boot.HaxeError

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;

// Constructor

var HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,HaxeError);
	}
}

// Meta

HaxeError.__name__ = ["js","_Boot","HaxeError"];
HaxeError.__super__ = Error;
HaxeError.prototype = $extend(Error.prototype, {
	
});
HaxeError.prototype.__class__ = HaxeError.prototype.constructor = $hxClasses["js._Boot.HaxeError"] = HaxeError;

// Init



// Statics

HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new HaxeError(val);
	}
}


// Export

exports.default = HaxeError;