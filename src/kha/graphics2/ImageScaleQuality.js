// Enum: kha.graphics2.ImageScaleQuality

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxClasses = require("./../../hxClasses_stub").default;

// Definition

var ImageScaleQuality = $hxClasses["kha.graphics2.ImageScaleQuality"] = { __ename__: ["kha","graphics2","ImageScaleQuality"], __constructs__: ["Low","High"] }

ImageScaleQuality.Low = ["Low",0];
ImageScaleQuality.Low.toString = $estr;
ImageScaleQuality.Low.__enum__ = ImageScaleQuality;

ImageScaleQuality.High = ["High",1];
ImageScaleQuality.High.toString = $estr;
ImageScaleQuality.High.__enum__ = ImageScaleQuality;


exports.default = ImageScaleQuality;