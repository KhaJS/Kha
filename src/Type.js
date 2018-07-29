// Class: Type

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function js_Boot() {return require("./js/Boot");}
function Reflect() {return require("./Reflect");}
function js__$Boot_HaxeError() {return require("./js/_Boot/HaxeError");}
function HxOverrides() {return require("./HxOverrides");}

// Constructor

var Type = function(){}

// Meta

Type.__name__ = ["Type"];
Type.prototype = {
	
};
Type.prototype.__class__ = Type.prototype.constructor = $hxClasses["Type"] = Type;

// Init



// Statics

Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !(js_Boot().default).isClass(cl)) {
		return null;
	}
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !(js_Boot().default).isEnum(e)) {
		return null;
	}
	return e;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = (Reflect().default).field(e,constr);
	if(f == null) {
		throw new (js__$Boot_HaxeError().default)("No such constructor " + constr);
	}
	if((Reflect().default).isFunction(f)) {
		if(params == null) {
			throw new (js__$Boot_HaxeError().default)("Constructor " + constr + " need parameters");
		}
		return (Reflect().default).callMethod(e,f,params);
	}
	if(params != null && params.length != 0) {
		throw new (js__$Boot_HaxeError().default)("Constructor " + constr + " does not need parameters");
	}
	return f;
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	(HxOverrides().default).remove(a,"__class__");
	(HxOverrides().default).remove(a,"__properties__");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__.slice();
}
Type.enumIndex = function(e) {
	return e[1];
}


// Export

exports.default = Type;