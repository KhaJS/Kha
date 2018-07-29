// Enum: kha.graphics4.Usage

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var Usage = $hxClasses["kha.graphics4.Usage"] = { __ename__: ["kha","graphics4","Usage"], __constructs__: ["StaticUsage","DynamicUsage","ReadableUsage"] }

Usage.StaticUsage = ["StaticUsage",0];
Usage.StaticUsage.toString = $estr;
Usage.StaticUsage.__enum__ = Usage;

Usage.DynamicUsage = ["DynamicUsage",1];
Usage.DynamicUsage.toString = $estr;
Usage.DynamicUsage.__enum__ = Usage;

Usage.ReadableUsage = ["ReadableUsage",2];
Usage.ReadableUsage.toString = $estr;
Usage.ReadableUsage.__enum__ = Usage;


exports.default = Usage;