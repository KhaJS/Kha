// Enum: kha.TargetDisplay

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;
var $hxClasses = require("./../hxClasses_stub").default;

// Definition

var TargetDisplay = $hxClasses["kha.TargetDisplay"] = { __ename__: ["kha","TargetDisplay"], __constructs__: ["Primary","ById"] }

TargetDisplay.ById = function(id) { var $x = ["ById",1,id]; $x.__enum__ = TargetDisplay; $x.toString = $estr; return $x; }
TargetDisplay.Primary = ["Primary",0];
TargetDisplay.Primary.toString = $estr;
TargetDisplay.Primary.__enum__ = TargetDisplay;


exports.default = TargetDisplay;