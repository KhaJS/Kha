// Enum: kha.graphics4.CompareMode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var CompareMode = $hxClasses["kha.graphics4.CompareMode"] = { __ename__: ["kha","graphics4","CompareMode"], __constructs__: ["Always","Never","Equal","NotEqual","Less","LessEqual","Greater","GreaterEqual"] }

CompareMode.GreaterEqual = ["GreaterEqual",7];
CompareMode.GreaterEqual.toString = $estr;
CompareMode.GreaterEqual.__enum__ = CompareMode;

CompareMode.Greater = ["Greater",6];
CompareMode.Greater.toString = $estr;
CompareMode.Greater.__enum__ = CompareMode;

CompareMode.Less = ["Less",4];
CompareMode.Less.toString = $estr;
CompareMode.Less.__enum__ = CompareMode;

CompareMode.NotEqual = ["NotEqual",3];
CompareMode.NotEqual.toString = $estr;
CompareMode.NotEqual.__enum__ = CompareMode;

CompareMode.Never = ["Never",1];
CompareMode.Never.toString = $estr;
CompareMode.Never.__enum__ = CompareMode;

CompareMode.Equal = ["Equal",2];
CompareMode.Equal.toString = $estr;
CompareMode.Equal.__enum__ = CompareMode;

CompareMode.Always = ["Always",0];
CompareMode.Always.toString = $estr;
CompareMode.Always.__enum__ = CompareMode;

CompareMode.LessEqual = ["LessEqual",5];
CompareMode.LessEqual.toString = $estr;
CompareMode.LessEqual.__enum__ = CompareMode;


exports.default = CompareMode;