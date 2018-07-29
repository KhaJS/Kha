// Enum: kha.graphics4.TextureAddressing

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var TextureAddressing = $hxClasses["kha.graphics4.TextureAddressing"] = { __ename__: ["kha","graphics4","TextureAddressing"], __constructs__: ["Repeat","Mirror","Clamp"] }

TextureAddressing.Repeat = ["Repeat",0];
TextureAddressing.Repeat.toString = $estr;
TextureAddressing.Repeat.__enum__ = TextureAddressing;

TextureAddressing.Mirror = ["Mirror",1];
TextureAddressing.Mirror.toString = $estr;
TextureAddressing.Mirror.__enum__ = TextureAddressing;

TextureAddressing.Clamp = ["Clamp",2];
TextureAddressing.Clamp.toString = $estr;
TextureAddressing.Clamp.__enum__ = TextureAddressing;


exports.default = TextureAddressing;