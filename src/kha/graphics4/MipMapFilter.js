// Enum: kha.graphics4.MipMapFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var MipMapFilter = $hxClasses["kha.graphics4.MipMapFilter"] = { __ename__: ["kha","graphics4","MipMapFilter"], __constructs__: ["NoMipFilter","PointMipFilter","LinearMipFilter"] }

MipMapFilter.NoMipFilter = ["NoMipFilter",0];
MipMapFilter.NoMipFilter.toString = $estr;
MipMapFilter.NoMipFilter.__enum__ = MipMapFilter;

MipMapFilter.LinearMipFilter = ["LinearMipFilter",2];
MipMapFilter.LinearMipFilter.toString = $estr;
MipMapFilter.LinearMipFilter.__enum__ = MipMapFilter;

MipMapFilter.PointMipFilter = ["PointMipFilter",1];
MipMapFilter.PointMipFilter.toString = $estr;
MipMapFilter.PointMipFilter.__enum__ = MipMapFilter;


exports.default = MipMapFilter;