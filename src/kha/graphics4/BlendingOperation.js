// Enum: kha.graphics4.BlendingOperation

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var BlendingOperation = $hxClasses["kha.graphics4.BlendingOperation"] = { __ename__: ["kha","graphics4","BlendingOperation"], __constructs__: ["Add","Subtract","ReverseSubtract","Min","Max"] }

BlendingOperation.ReverseSubtract = ["ReverseSubtract",2];
BlendingOperation.ReverseSubtract.toString = $estr;
BlendingOperation.ReverseSubtract.__enum__ = BlendingOperation;

BlendingOperation.Add = ["Add",0];
BlendingOperation.Add.toString = $estr;
BlendingOperation.Add.__enum__ = BlendingOperation;

BlendingOperation.Max = ["Max",4];
BlendingOperation.Max.toString = $estr;
BlendingOperation.Max.__enum__ = BlendingOperation;

BlendingOperation.Subtract = ["Subtract",1];
BlendingOperation.Subtract.toString = $estr;
BlendingOperation.Subtract.__enum__ = BlendingOperation;

BlendingOperation.Min = ["Min",3];
BlendingOperation.Min.toString = $estr;
BlendingOperation.Min.__enum__ = BlendingOperation;


exports.default = BlendingOperation;