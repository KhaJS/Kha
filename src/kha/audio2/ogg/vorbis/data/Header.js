// Class: kha.audio2.ogg.vorbis.data.Header

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $import = require("./../../../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../../../js/_Boot/HaxeError");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}
function haxe_io_BytesOutput() {return require("./../../../../../haxe/io/BytesOutput");}
function haxe_io_BytesInput() {return require("./../../../../../haxe/io/BytesInput");}
function kha_audio2_ogg_vorbis_data_Comment() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Comment");}
function kha_audio2_ogg_vorbis_data_Codebook() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Codebook");}
function kha_audio2_ogg_vorbis_data_Floor() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Floor");}
function kha_audio2_ogg_vorbis_data_Residue() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Residue");}
function kha_audio2_ogg_vorbis_data_Mapping() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Mapping");}
function kha_audio2_ogg_vorbis_data_Mode() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Mode");}

// Constructor

var Header = function() {
}

// Meta

Header.__name__ = ["kha","audio2","ogg","vorbis","data","Header"];
Header.prototype = {
	
};
Header.prototype.__class__ = Header.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.Header"] = Header;

// Init



// Statics

Header.read = function(decodeState) {
	var page = decodeState.page;
	page.start(decodeState);
	if((page.flag & 2) == 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"not firstPage",{ fileName : "Header.hx", lineNumber : 46, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if((page.flag & 4) != 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"lastPage",{ fileName : "Header.hx", lineNumber : 49, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if((page.flag & 1) != 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"continuedPacket",{ fileName : "Header.hx", lineNumber : 52, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.firstPageValidate();
	if(decodeState.readByte() != 1) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"decodeState head",{ fileName : "Header.hx", lineNumber : 57, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.vorbisValidate();
	var version = decodeState.readInt32();
	if(version != 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"vorbis version : " + version,{ fileName : "Header.hx", lineNumber : 66, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	var header = new Header();
	header.channel = decodeState.readByte();
	if(header.channel == 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"no channel",{ fileName : "Header.hx", lineNumber : 73, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	} else if(header.channel > 16) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).TOO_MANY_CHANNELS,"too many channels",{ fileName : "Header.hx", lineNumber : 75, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	header.sampleRate = decodeState.readInt32();
	if(header.sampleRate == 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"no sampling rate",{ fileName : "Header.hx", lineNumber : 80, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	header.maximumBitRate = decodeState.readInt32();
	header.nominalBitRate = decodeState.readInt32();
	header.minimumBitRate = decodeState.readInt32();
	var x = decodeState.readByte();
	var log0 = x & 15;
	var log1 = x >> 4;
	header.blocksize0 = 1 << log0;
	header.blocksize1 = 1 << log1;
	if(log0 < 6 || log0 > 13) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 93, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if(log1 < 6 || log1 > 13) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 96, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if(log0 > log1) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 99, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	var x1 = decodeState.readByte();
	if((x1 & 1) == 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,null,{ fileName : "Header.hx", lineNumber : 105, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.page.start(decodeState);
	decodeState.startPacket();
	var len = 0;
	var output = new (haxe_io_BytesOutput().default)();
	while(true) {
		len = decodeState.next();
		if(!(len != 0)) {
			break;
		}
		output.write(decodeState.readBytes(len));
		decodeState.bytesInSeg = 0;
	}
	var packetInput = new (haxe_io_BytesInput().default)(output.getBytes());
	packetInput.readByte();
	packetInput.read(6);
	var vendorLength = packetInput.readInt32();
	header.vendor = packetInput.readString(vendorLength);
	header.comment = new (kha_audio2_ogg_vorbis_data_Comment().default)();
	var commentCount = packetInput.readInt32();
	var _g1 = 0;
	var _g = commentCount;
	while(_g1 < _g) {
		var i = _g1++;
		var n = packetInput.readInt32();
		var str = packetInput.readString(n);
		var splitter = str.indexOf("=");
		if(splitter != -1) {
			header.comment.add(str.substring(0,splitter),str.substring(splitter + 1));
		}
	}
	var x2 = packetInput.readByte();
	if((x2 & 1) == 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 141, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.startPacket();
	if(decodeState.readPacket() != 5) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,"setup packet",{ fileName : "Header.hx", lineNumber : 149, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.vorbisValidate();
	var codebookCount = decodeState.readBits(8) + 1;
	var this1 = new Array(codebookCount);
	header.codebooks = this1;
	var _g11 = 0;
	var _g2 = codebookCount;
	while(_g11 < _g2) {
		var i1 = _g11++;
		header.codebooks[i1] = (kha_audio2_ogg_vorbis_data_Codebook().default).read(decodeState);
	}
	x1 = decodeState.readBits(6) + 1;
	var _g12 = 0;
	var _g3 = x1;
	while(_g12 < _g3) {
		var i2 = _g12++;
		if(decodeState.readBits(16) != 0) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 165, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
		}
	}
	var floorCount = decodeState.readBits(6) + 1;
	var this2 = new Array(floorCount);
	header.floorConfig = this2;
	var _g13 = 0;
	var _g4 = floorCount;
	while(_g13 < _g4) {
		var i3 = _g13++;
		header.floorConfig[i3] = (kha_audio2_ogg_vorbis_data_Floor().default).read(decodeState,header.codebooks);
	}
	var residueCount = decodeState.readBits(6) + 1;
	var this3 = new Array(residueCount);
	header.residueConfig = this3;
	var _g14 = 0;
	var _g5 = residueCount;
	while(_g14 < _g5) {
		var i4 = _g14++;
		header.residueConfig[i4] = (kha_audio2_ogg_vorbis_data_Residue().default).read(decodeState,header.codebooks);
	}
	var mappingCount = decodeState.readBits(6) + 1;
	var this4 = new Array(mappingCount);
	header.mapping = this4;
	var _g15 = 0;
	var _g6 = mappingCount;
	while(_g15 < _g6) {
		var i5 = _g15++;
		var map = (kha_audio2_ogg_vorbis_data_Mapping().default).read(decodeState,header.channel);
		header.mapping[i5] = map;
		var _g31 = 0;
		var _g21 = map.submaps;
		while(_g31 < _g21) {
			var j = _g31++;
			if(map.submapFloor[j] >= header.floorConfig.length) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 191, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
			}
			if(map.submapResidue[j] >= header.residueConfig.length) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 194, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
			}
		}
	}
	var modeCount = decodeState.readBits(6) + 1;
	var this5 = new Array(modeCount);
	header.modes = this5;
	var _g16 = 0;
	var _g7 = modeCount;
	while(_g16 < _g7) {
		var i6 = _g16++;
		var mode = (kha_audio2_ogg_vorbis_data_Mode().default).read(decodeState);
		header.modes[i6] = mode;
		if(mode.mapping >= header.mapping.length) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Header.hx", lineNumber : 205, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
		}
	}
	decodeState.flushPacket();
	return header;
}
Header.PACKET_ID = 1
Header.PACKET_COMMENT = 3
Header.PACKET_SETUP = 5

// Export

exports.default = Header;