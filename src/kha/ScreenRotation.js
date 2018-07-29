// Enum: kha.ScreenRotation

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../estr_stub").default;
var $hxClasses = require("./../hxClasses_stub").default;

// Definition

var ScreenRotation = $hxClasses["kha.ScreenRotation"] = { __ename__: ["kha","ScreenRotation"], __constructs__: ["RotationNone","Rotation90","Rotation180","Rotation270"] }

ScreenRotation.Rotation90 = ["Rotation90",1];
ScreenRotation.Rotation90.toString = $estr;
ScreenRotation.Rotation90.__enum__ = ScreenRotation;

ScreenRotation.Rotation270 = ["Rotation270",3];
ScreenRotation.Rotation270.toString = $estr;
ScreenRotation.Rotation270.__enum__ = ScreenRotation;

ScreenRotation.Rotation180 = ["Rotation180",2];
ScreenRotation.Rotation180.toString = $estr;
ScreenRotation.Rotation180.__enum__ = ScreenRotation;

ScreenRotation.RotationNone = ["RotationNone",0];
ScreenRotation.RotationNone.toString = $estr;
ScreenRotation.RotationNone.__enum__ = ScreenRotation;


exports.default = ScreenRotation;