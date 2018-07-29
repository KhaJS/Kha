// Enum: kha.Position

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;
var $hxClasses = require("./../hxClasses_stub").default;

// Definition

var Position = $hxClasses["kha.Position"] = { __ename__: ["kha","Position"], __constructs__: ["Center","Fixed"] }

Position.Fixed = function(v) { var $x = ["Fixed",1,v]; $x.__enum__ = Position; $x.toString = $estr; return $x; }
Position.Center = ["Center",0];
Position.Center.toString = $estr;
Position.Center.__enum__ = Position;


exports.default = Position;