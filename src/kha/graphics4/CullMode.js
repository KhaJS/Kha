// Enum: kha.graphics4.CullMode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var CullMode = $hxClasses["kha.graphics4.CullMode"] = { __ename__: ["kha","graphics4","CullMode"], __constructs__: ["Clockwise","CounterClockwise","None"] }

CullMode.Clockwise = ["Clockwise",0];
CullMode.Clockwise.toString = $estr;
CullMode.Clockwise.__enum__ = CullMode;

CullMode.None = ["None",2];
CullMode.None.toString = $estr;
CullMode.None.__enum__ = CullMode;

CullMode.CounterClockwise = ["CounterClockwise",1];
CullMode.CounterClockwise.toString = $estr;
CullMode.CounterClockwise.__enum__ = CullMode;


exports.default = CullMode;