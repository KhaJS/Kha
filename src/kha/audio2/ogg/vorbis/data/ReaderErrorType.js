// Enum: kha.audio2.ogg.vorbis.data.ReaderErrorType

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../../../estr_stub").default;
var $hxClasses = require("./../../../../../hxClasses_stub").default;

// Definition

var ReaderErrorType = $hxClasses["kha.audio2.ogg.vorbis.data.ReaderErrorType"] = { __ename__: ["kha","audio2","ogg","vorbis","data","ReaderErrorType"], __constructs__: ["NEED_MORE_DATA","INVALID_API_MIXING","OUTOFMEM","FEATURE_NOT_SUPPORTED","TOO_MANY_CHANNELS","FILE_OPEN_FAILURE","SEEK_WITHOUT_LENGTH","UNEXPECTED_EOF","SEEK_INVALID","INVALID_SETUP","INVALID_STREAM","MISSING_CAPTURE_PATTERN","INVALID_STREAM_STRUCTURE_VERSION","CONTINUED_PACKET_FLAG_INVALID","INCORRECT_STREAM_SERIAL_NUMBER","INVALID_FIRST_PAGE","BAD_PACKET_TYPE","CANT_FIND_LAST_PAGE","SEEK_FAILED","OTHER"] }

ReaderErrorType.UNEXPECTED_EOF = ["UNEXPECTED_EOF",7];
ReaderErrorType.UNEXPECTED_EOF.toString = $estr;
ReaderErrorType.UNEXPECTED_EOF.__enum__ = ReaderErrorType;

ReaderErrorType.INVALID_SETUP = ["INVALID_SETUP",9];
ReaderErrorType.INVALID_SETUP.toString = $estr;
ReaderErrorType.INVALID_SETUP.__enum__ = ReaderErrorType;

ReaderErrorType.FEATURE_NOT_SUPPORTED = ["FEATURE_NOT_SUPPORTED",3];
ReaderErrorType.FEATURE_NOT_SUPPORTED.toString = $estr;
ReaderErrorType.FEATURE_NOT_SUPPORTED.__enum__ = ReaderErrorType;

ReaderErrorType.NEED_MORE_DATA = ["NEED_MORE_DATA",0];
ReaderErrorType.NEED_MORE_DATA.toString = $estr;
ReaderErrorType.NEED_MORE_DATA.__enum__ = ReaderErrorType;

ReaderErrorType.INVALID_API_MIXING = ["INVALID_API_MIXING",1];
ReaderErrorType.INVALID_API_MIXING.toString = $estr;
ReaderErrorType.INVALID_API_MIXING.__enum__ = ReaderErrorType;

ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID = ["CONTINUED_PACKET_FLAG_INVALID",13];
ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID.toString = $estr;
ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID.__enum__ = ReaderErrorType;

ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION = ["INVALID_STREAM_STRUCTURE_VERSION",12];
ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION.toString = $estr;
ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION.__enum__ = ReaderErrorType;

ReaderErrorType.CANT_FIND_LAST_PAGE = ["CANT_FIND_LAST_PAGE",17];
ReaderErrorType.CANT_FIND_LAST_PAGE.toString = $estr;
ReaderErrorType.CANT_FIND_LAST_PAGE.__enum__ = ReaderErrorType;

ReaderErrorType.INVALID_FIRST_PAGE = ["INVALID_FIRST_PAGE",15];
ReaderErrorType.INVALID_FIRST_PAGE.toString = $estr;
ReaderErrorType.INVALID_FIRST_PAGE.__enum__ = ReaderErrorType;

ReaderErrorType.MISSING_CAPTURE_PATTERN = ["MISSING_CAPTURE_PATTERN",11];
ReaderErrorType.MISSING_CAPTURE_PATTERN.toString = $estr;
ReaderErrorType.MISSING_CAPTURE_PATTERN.__enum__ = ReaderErrorType;

ReaderErrorType.BAD_PACKET_TYPE = ["BAD_PACKET_TYPE",16];
ReaderErrorType.BAD_PACKET_TYPE.toString = $estr;
ReaderErrorType.BAD_PACKET_TYPE.__enum__ = ReaderErrorType;

ReaderErrorType.SEEK_FAILED = ["SEEK_FAILED",18];
ReaderErrorType.SEEK_FAILED.toString = $estr;
ReaderErrorType.SEEK_FAILED.__enum__ = ReaderErrorType;

ReaderErrorType.INVALID_STREAM = ["INVALID_STREAM",10];
ReaderErrorType.INVALID_STREAM.toString = $estr;
ReaderErrorType.INVALID_STREAM.__enum__ = ReaderErrorType;

ReaderErrorType.OTHER = ["OTHER",19];
ReaderErrorType.OTHER.toString = $estr;
ReaderErrorType.OTHER.__enum__ = ReaderErrorType;

ReaderErrorType.INCORRECT_STREAM_SERIAL_NUMBER = ["INCORRECT_STREAM_SERIAL_NUMBER",14];
ReaderErrorType.INCORRECT_STREAM_SERIAL_NUMBER.toString = $estr;
ReaderErrorType.INCORRECT_STREAM_SERIAL_NUMBER.__enum__ = ReaderErrorType;

ReaderErrorType.SEEK_WITHOUT_LENGTH = ["SEEK_WITHOUT_LENGTH",6];
ReaderErrorType.SEEK_WITHOUT_LENGTH.toString = $estr;
ReaderErrorType.SEEK_WITHOUT_LENGTH.__enum__ = ReaderErrorType;

ReaderErrorType.FILE_OPEN_FAILURE = ["FILE_OPEN_FAILURE",5];
ReaderErrorType.FILE_OPEN_FAILURE.toString = $estr;
ReaderErrorType.FILE_OPEN_FAILURE.__enum__ = ReaderErrorType;

ReaderErrorType.OUTOFMEM = ["OUTOFMEM",2];
ReaderErrorType.OUTOFMEM.toString = $estr;
ReaderErrorType.OUTOFMEM.__enum__ = ReaderErrorType;

ReaderErrorType.TOO_MANY_CHANNELS = ["TOO_MANY_CHANNELS",4];
ReaderErrorType.TOO_MANY_CHANNELS.toString = $estr;
ReaderErrorType.TOO_MANY_CHANNELS.__enum__ = ReaderErrorType;

ReaderErrorType.SEEK_INVALID = ["SEEK_INVALID",8];
ReaderErrorType.SEEK_INVALID.toString = $estr;
ReaderErrorType.SEEK_INVALID.__enum__ = ReaderErrorType;


exports.default = ReaderErrorType;