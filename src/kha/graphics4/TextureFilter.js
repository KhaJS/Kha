// Enum: kha.graphics4.TextureFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var TextureFilter = $hxClasses["kha.graphics4.TextureFilter"] = { __ename__: ["kha","graphics4","TextureFilter"], __constructs__: ["PointFilter","LinearFilter","AnisotropicFilter"] }

TextureFilter.PointFilter = ["PointFilter",0];
TextureFilter.PointFilter.toString = $estr;
TextureFilter.PointFilter.__enum__ = TextureFilter;

TextureFilter.LinearFilter = ["LinearFilter",1];
TextureFilter.LinearFilter.toString = $estr;
TextureFilter.LinearFilter.__enum__ = TextureFilter;

TextureFilter.AnisotropicFilter = ["AnisotropicFilter",2];
TextureFilter.AnisotropicFilter.toString = $estr;
TextureFilter.AnisotropicFilter.__enum__ = TextureFilter;


exports.default = TextureFilter;