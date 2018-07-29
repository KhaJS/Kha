// Enum: kha.audio2.ogg.vorbis._VorbisDecodeState.FindPageResult

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../../../estr_stub").default;
var $hxClasses = require("./../../../../../hxClasses_stub").default;

// Definition

var FindPageResult = $hxClasses["kha.audio2.ogg.vorbis._VorbisDecodeState.FindPageResult"] = { __ename__: ["kha","audio2","ogg","vorbis","_VorbisDecodeState","FindPageResult"], __constructs__: ["Found","NotFound"] }

FindPageResult.Found = function(end,last) { var $x = ["Found",0,end,last]; $x.__enum__ = FindPageResult; $x.toString = $estr; return $x; }
FindPageResult.NotFound = ["NotFound",1];
FindPageResult.NotFound.toString = $estr;
FindPageResult.NotFound.__enum__ = FindPageResult;


exports.default = FindPageResult;