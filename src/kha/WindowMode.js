// Enum: kha.WindowMode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;
var $hxClasses = require("./../hxClasses_stub").default;

// Definition

var WindowMode = $hxClasses["kha.WindowMode"] = { __ename__: ["kha","WindowMode"], __constructs__: ["Window","BorderlessWindow","Fullscreen"] }

WindowMode.Window = ["Window",0];
WindowMode.Window.toString = $estr;
WindowMode.Window.__enum__ = WindowMode;

WindowMode.Fullscreen = ["Fullscreen",2];
WindowMode.Fullscreen.toString = $estr;
WindowMode.Fullscreen.__enum__ = WindowMode;

WindowMode.BorderlessWindow = ["BorderlessWindow",1];
WindowMode.BorderlessWindow.toString = $estr;
WindowMode.BorderlessWindow.__enum__ = WindowMode;


exports.default = WindowMode;