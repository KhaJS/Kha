// Enum: kha.graphics4.TextureFormat

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var TextureFormat = $hxClasses["kha.graphics4.TextureFormat"] = { __ename__: ["kha","graphics4","TextureFormat"], __constructs__: ["RGBA32","L8","RGBA128","DEPTH16","RGBA64","A32","A16"] }

TextureFormat.RGBA32 = ["RGBA32",0];
TextureFormat.RGBA32.toString = $estr;
TextureFormat.RGBA32.__enum__ = TextureFormat;

TextureFormat.RGBA128 = ["RGBA128",2];
TextureFormat.RGBA128.toString = $estr;
TextureFormat.RGBA128.__enum__ = TextureFormat;

TextureFormat.L8 = ["L8",1];
TextureFormat.L8.toString = $estr;
TextureFormat.L8.__enum__ = TextureFormat;

TextureFormat.RGBA64 = ["RGBA64",4];
TextureFormat.RGBA64.toString = $estr;
TextureFormat.RGBA64.__enum__ = TextureFormat;

TextureFormat.DEPTH16 = ["DEPTH16",3];
TextureFormat.DEPTH16.toString = $estr;
TextureFormat.DEPTH16.__enum__ = TextureFormat;

TextureFormat.A16 = ["A16",6];
TextureFormat.A16.toString = $estr;
TextureFormat.A16.__enum__ = TextureFormat;

TextureFormat.A32 = ["A32",5];
TextureFormat.A32.toString = $estr;
TextureFormat.A32.__enum__ = TextureFormat;


exports.default = TextureFormat;