// Class: js.Browser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var Browser = function(){}

// Meta

Browser.__name__ = ["js","Browser"];
Browser.prototype = {
	
};
Browser.prototype.__class__ = Browser.prototype.constructor = $hxClasses["js.Browser"] = Browser;

// Init



// Statics

Browser.get_window = function() {
	return window;
}
Browser.get_document = function() {
	return window.document;
}
Browser.get_navigator = function() {
	return window.navigator;
}
Browser.get_console = function() {
	return window.console;
}


// Export

exports.default = Browser;