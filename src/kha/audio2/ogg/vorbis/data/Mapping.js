// Class: kha.audio2.ogg.vorbis.data.Mapping

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $import = require("./../../../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../../../js/_Boot/HaxeError");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}
function kha_audio2_ogg_vorbis_VorbisTools() {return require("./../../../../../kha/audio2/ogg/vorbis/VorbisTools");}
function kha_audio2_ogg_vorbis_data_MappingChannel() {return require("./../../../../../kha/audio2/ogg/vorbis/data/MappingChannel");}
function kha_audio2_ogg_tools_MathTools() {return require("./../../../../../kha/audio2/ogg/tools/MathTools");}

// Constructor

var Mapping = function() {
}

// Meta

Mapping.__name__ = ["kha","audio2","ogg","vorbis","data","Mapping"];
Mapping.prototype = {
	doFloor: function(floors,i,n,target,finalY,step2Flag) {
		var n2 = n >> 1;
		var s = this.chan[i].mux;
		var floor;
		var floor1 = floors[this.submapFloor[s]];
		if(floor1.type == 0) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_STREAM,null,{ fileName : "Mapping.hx", lineNumber : 94, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "doFloor"}));
		} else {
			var g = floor1.floor1;
			var lx = 0;
			var ly = finalY[0] * g.floor1Multiplier;
			var _g1 = 1;
			var _g = g.values;
			while(_g1 < _g) {
				var q = _g1++;
				var j = g.sortedOrder[q];
				if(finalY[j] >= 0) {
					var hy = finalY[j] * g.floor1Multiplier;
					var hx = g.xlist[j];
					(kha_audio2_ogg_vorbis_VorbisTools().default).drawLine(target,lx,ly,hx,hy,n2);
					lx = hx;
					ly = hy;
				}
			}
			if(lx < n2) {
				var _g11 = lx;
				var _g2 = n2;
				while(_g11 < _g2) {
					var j1 = _g11++;
					var _g21 = j1;
					var _g3 = target;
					_g3[_g21] = _g3[_g21] * (kha_audio2_ogg_vorbis_VorbisTools().default).INVERSE_DB_TABLE[ly];
				}
			}
		}
	}
};
Mapping.prototype.__class__ = Mapping.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.Mapping"] = Mapping;

// Init



// Statics

Mapping.read = function(decodeState,channels) {
	var m = new Mapping();
	var mappingType = decodeState.readBits(16);
	if(mappingType != 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,"mapping type " + mappingType,{ fileName : "Mapping.hx", lineNumber : 22, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
	}
	var this1 = new Array(channels);
	m.chan = this1;
	var _g1 = 0;
	var _g = channels;
	while(_g1 < _g) {
		var j = _g1++;
		m.chan[j] = new (kha_audio2_ogg_vorbis_data_MappingChannel().default)();
	}
	if(decodeState.readBits(1) != 0) {
		m.submaps = decodeState.readBits(4) + 1;
	} else {
		m.submaps = 1;
	}
	if(decodeState.readBits(1) != 0) {
		m.couplingSteps = decodeState.readBits(8) + 1;
		var _g11 = 0;
		var _g2 = m.couplingSteps;
		while(_g11 < _g2) {
			var k = _g11++;
			m.chan[k].magnitude = decodeState.readBits((kha_audio2_ogg_tools_MathTools().default).ilog(channels - 1));
			m.chan[k].angle = decodeState.readBits((kha_audio2_ogg_tools_MathTools().default).ilog(channels - 1));
			if(m.chan[k].magnitude >= channels) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 46, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
			if(m.chan[k].angle >= channels) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 49, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
			if(m.chan[k].magnitude == m.chan[k].angle) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 52, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
		}
	} else {
		m.couplingSteps = 0;
	}
	if(decodeState.readBits(2) != 0) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 61, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
	}
	if(m.submaps > 1) {
		var _g12 = 0;
		var _g3 = channels;
		while(_g12 < _g3) {
			var j1 = _g12++;
			m.chan[j1].mux = decodeState.readBits(4);
			if(m.chan[j1].mux >= m.submaps) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Mapping.hx", lineNumber : 67, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
		}
	} else {
		var _g13 = 0;
		var _g4 = channels;
		while(_g13 < _g4) {
			var j2 = _g13++;
			m.chan[j2].mux = 0;
		}
	}
	var length = m.submaps;
	var this2 = new Array(length);
	m.submapFloor = this2;
	var length1 = m.submaps;
	var this3 = new Array(length1);
	m.submapResidue = this3;
	var _g14 = 0;
	var _g5 = m.submaps;
	while(_g14 < _g5) {
		var j3 = _g14++;
		decodeState.readBits(8);
		m.submapFloor[j3] = decodeState.readBits(8);
		m.submapResidue[j3] = decodeState.readBits(8);
	}
	return m;
}


// Export

exports.default = Mapping;