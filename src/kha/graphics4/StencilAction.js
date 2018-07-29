// Enum: kha.graphics4.StencilAction

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var StencilAction = $hxClasses["kha.graphics4.StencilAction"] = { __ename__: ["kha","graphics4","StencilAction"], __constructs__: ["Keep","Zero","Replace","Increment","IncrementWrap","Decrement","DecrementWrap","Invert"] }

StencilAction.DecrementWrap = ["DecrementWrap",6];
StencilAction.DecrementWrap.toString = $estr;
StencilAction.DecrementWrap.__enum__ = StencilAction;

StencilAction.Decrement = ["Decrement",5];
StencilAction.Decrement.toString = $estr;
StencilAction.Decrement.__enum__ = StencilAction;

StencilAction.Zero = ["Zero",1];
StencilAction.Zero.toString = $estr;
StencilAction.Zero.__enum__ = StencilAction;

StencilAction.Invert = ["Invert",7];
StencilAction.Invert.toString = $estr;
StencilAction.Invert.__enum__ = StencilAction;

StencilAction.IncrementWrap = ["IncrementWrap",4];
StencilAction.IncrementWrap.toString = $estr;
StencilAction.IncrementWrap.__enum__ = StencilAction;

StencilAction.Replace = ["Replace",2];
StencilAction.Replace.toString = $estr;
StencilAction.Replace.__enum__ = StencilAction;

StencilAction.Increment = ["Increment",3];
StencilAction.Increment.toString = $estr;
StencilAction.Increment.__enum__ = StencilAction;

StencilAction.Keep = ["Keep",0];
StencilAction.Keep.toString = $estr;
StencilAction.Keep.__enum__ = StencilAction;


exports.default = StencilAction;