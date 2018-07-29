// Class: Reflect

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function js_Boot() {return require("./js/Boot");}

// Constructor

var Reflect = function(){}

// Meta

Reflect.__name__ = ["Reflect"];
Reflect.prototype = {
	
};
Reflect.prototype.__class__ = Reflect.prototype.constructor = $hxClasses["Reflect"] = Reflect;

// Init



// Statics

Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !((js_Boot().default).isClass(f) || (js_Boot().default).isEnum(f));
	} else {
		return false;
	}
}


// Export

exports.default = Reflect;