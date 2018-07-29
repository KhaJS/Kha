// Class: kha.audio2.ogg.vorbis.data.Floor

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $import = require("./../../../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../../../js/_Boot/HaxeError");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}
function kha_audio2_ogg_vorbis_data_Floor0() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Floor0");}
function kha_audio2_ogg_vorbis_data_Floor1() {return require("./../../../../../kha/audio2/ogg/vorbis/data/Floor1");}
function kha_audio2_ogg_vorbis_data_IntPoint() {return require("./../../../../../kha/audio2/ogg/vorbis/data/IntPoint");}
function kha_audio2_ogg_vorbis_VorbisTools() {return require("./../../../../../kha/audio2/ogg/vorbis/VorbisTools");}

// Constructor

var Floor = function() {
}

// Meta

Floor.__name__ = ["kha","audio2","ogg","vorbis","data","Floor"];
Floor.prototype = {
	
};
Floor.prototype.__class__ = Floor.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.Floor"] = Floor;

// Init



// Statics

Floor.read = function(decodeState,codebooks) {
	var floor = new Floor();
	floor.type = decodeState.readBits(16);
	if(floor.type > 1) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Floor.hx", lineNumber : 28, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
	}
	if(floor.type == 0) {
		var g = floor.floor0 = new (kha_audio2_ogg_vorbis_data_Floor0().default)();
		g.order = decodeState.readBits(8);
		g.rate = decodeState.readBits(16);
		g.barkMapSize = decodeState.readBits(16);
		g.amplitudeBits = decodeState.readBits(6);
		g.amplitudeOffset = decodeState.readBits(8);
		g.numberOfBooks = decodeState.readBits(4) + 1;
		var _g1 = 0;
		var _g = g.numberOfBooks;
		while(_g1 < _g) {
			var j = _g1++;
			g.bookList[j] = decodeState.readBits(8);
		}
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).FEATURE_NOT_SUPPORTED,null,{ fileName : "Floor.hx", lineNumber : 41, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
	} else {
		var p = [];
		var g1 = floor.floor1 = new (kha_audio2_ogg_vorbis_data_Floor1().default)();
		var maxClass = -1;
		g1.partitions = decodeState.readBits(5);
		var length = g1.partitions;
		var this1 = new Array(length);
		g1.partitionClassList = this1;
		var _g11 = 0;
		var _g2 = g1.partitions;
		while(_g11 < _g2) {
			var j1 = _g11++;
			g1.partitionClassList[j1] = decodeState.readBits(4);
			if(g1.partitionClassList[j1] > maxClass) {
				maxClass = g1.partitionClassList[j1];
			}
		}
		var this2 = new Array(maxClass + 1);
		g1.classDimensions = this2;
		var this3 = new Array(maxClass + 1);
		g1.classMasterbooks = this3;
		var this4 = new Array(maxClass + 1);
		g1.classSubclasses = this4;
		var this5 = new Array(maxClass + 1);
		g1.subclassBooks = this5;
		var _g12 = 0;
		var _g3 = maxClass + 1;
		while(_g12 < _g3) {
			var j2 = _g12++;
			g1.classDimensions[j2] = decodeState.readBits(3) + 1;
			g1.classSubclasses[j2] = decodeState.readBits(2);
			if(g1.classSubclasses[j2] != 0) {
				g1.classMasterbooks[j2] = decodeState.readBits(8);
				if(g1.classMasterbooks[j2] >= codebooks.length) {
					throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Floor.hx", lineNumber : 64, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
				}
			}
			var kl = 1 << g1.classSubclasses[j2];
			var this6 = g1.subclassBooks;
			var this7 = new Array(kl);
			this6[j2] = this7;
			var _g31 = 0;
			var _g21 = kl;
			while(_g31 < _g21) {
				var k = _g31++;
				g1.subclassBooks[j2][k] = decodeState.readBits(8) - 1;
				if(g1.subclassBooks[j2][k] >= codebooks.length) {
					throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Floor.hx", lineNumber : 73, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
				}
			}
		}
		g1.floor1Multiplier = decodeState.readBits(2) + 1;
		g1.rangebits = decodeState.readBits(4);
		var this8 = new Array(250);
		g1.xlist = this8;
		g1.xlist[0] = 0;
		g1.xlist[1] = 1 << g1.rangebits;
		g1.values = 2;
		var _g13 = 0;
		var _g4 = g1.partitions;
		while(_g13 < _g4) {
			var j3 = _g13++;
			var c = g1.partitionClassList[j3];
			var _g32 = 0;
			var _g22 = g1.classDimensions[c];
			while(_g32 < _g22) {
				var k1 = _g32++;
				g1.xlist[g1.values] = decodeState.readBits(g1.rangebits);
				g1.values++;
			}
		}
		var _g14 = 0;
		var _g5 = g1.values;
		while(_g14 < _g5) {
			var j4 = _g14++;
			p.push(new (kha_audio2_ogg_vorbis_data_IntPoint().default)());
			p[j4].x = g1.xlist[j4];
			p[j4].y = j4;
		}
		p.sort((kha_audio2_ogg_vorbis_VorbisTools().default).pointCompare);
		var length1 = g1.values;
		var this9 = new Array(length1);
		g1.sortedOrder = this9;
		var _g15 = 0;
		var _g6 = g1.values;
		while(_g15 < _g6) {
			var j5 = _g15++;
			g1.sortedOrder[j5] = p[j5].y;
		}
		var length2 = g1.values;
		var this10 = new Array(length2);
		g1.neighbors = this10;
		var _g16 = 2;
		var _g7 = g1.values;
		while(_g16 < _g7) {
			var j6 = _g16++;
			var ne = (kha_audio2_ogg_vorbis_VorbisTools().default).neighbors(g1.xlist,j6);
			var this11 = g1.neighbors;
			var length3 = g1.values;
			var this12 = new Array(length3);
			this11[j6] = this12;
			g1.neighbors[j6][0] = ne.low;
			g1.neighbors[j6][1] = ne.high;
		}
	}
	return floor;
}


// Export

exports.default = Floor;