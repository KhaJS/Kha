// Class: StringTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function HxOverrides() {return require("./HxOverrides");}

// Constructor

var StringTools = function(){}

// Meta

StringTools.__name__ = ["StringTools"];
StringTools.prototype = {
	
};
StringTools.prototype.__class__ = StringTools.prototype.constructor = $hxClasses["StringTools"] = StringTools;

// Init



// Statics

StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return (HxOverrides().default).substr(s,slen - elen,elen) == end;
	} else {
		return false;
	}
}
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
}
StringTools.isEof = function(c) {
	return c != c;
}


// Export

exports.default = StringTools;