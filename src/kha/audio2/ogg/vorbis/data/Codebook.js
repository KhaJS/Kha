// Class: kha.audio2.ogg.vorbis.data.Codebook

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $import = require("./../../../../../import_stub").default;
function kha_audio2_ogg_vorbis_VorbisTools() {return require("./../../../../../kha/audio2/ogg/vorbis/VorbisTools");}
function _$UInt_UInt_$Impl_$() {return require("./../../../../../_UInt/UInt_Impl_");}
function Std() {return require("./../../../../../Std");}
function js__$Boot_HaxeError() {return require("./../../../../../js/_Boot/HaxeError");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}
function kha_audio2_ogg_tools_MathTools() {return require("./../../../../../kha/audio2/ogg/tools/MathTools");}

// Constructor

var Codebook = function() {
}

// Meta

Codebook.__name__ = ["kha","audio2","ogg","vorbis","data","Codebook"];
Codebook.prototype = {
	addEntry: function(huffCode,symbol,count,len,values) {
		if(!this.sparse) {
			this.codewords[symbol] = huffCode;
		} else {
			this.codewords[count] = huffCode;
			this.codewordLengths[count] = len;
			values[count] = symbol;
		}
	},
	includeInSort: function(len) {
		if(this.sparse) {
			(kha_audio2_ogg_vorbis_VorbisTools().default).assert(len != 255,{ fileName : "Codebook.hx", lineNumber : 201, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "includeInSort"});
			return true;
		} else if(len == 255) {
			return false;
		} else if(len > 10) {
			return true;
		} else {
			return false;
		}
	},
	computeCodewords: function(len,n,values) {
		var this1 = new Array(32);
		var available = this1;
		var _g = 0;
		while(_g < 32) {
			var x = _g++;
			available[x] = 0;
		}
		var k = 0;
		while(k < n) {
			if(len[k] < 255) {
				break;
			}
			++k;
		}
		if(k == n) {
			(kha_audio2_ogg_vorbis_VorbisTools().default).assert(this.sortedEntries == 0,{ fileName : "Codebook.hx", lineNumber : 228, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "computeCodewords"});
			return true;
		}
		var m = 0;
		this.addEntry(0,k,m++,len[k],values);
		var i = 0;
		while(++i <= len[k]) available[i] = 1 << 32 - i;
		i = k;
		while(++i < n) {
			var z = len[i];
			if(z == 255) {
				continue;
			}
			while(z > 0 && available[z] == 0) --z;
			if(z == 0) {
				return false;
			}
			var res = available[z];
			available[z] = 0;
			this.addEntry((kha_audio2_ogg_vorbis_VorbisTools().default).bitReverse(res),i,m++,len[i],values);
			if(z != len[i]) {
				var y = len[i];
				while(y > z) {
					(kha_audio2_ogg_vorbis_VorbisTools().default).assert(available[y] == 0,{ fileName : "Codebook.hx", lineNumber : 272, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "computeCodewords"});
					available[y] = res + (1 << 32 - y);
					--y;
				}
			}
		}
		return true;
	},
	computeSortedHuffman: function(lengths,values) {
		if(!this.sparse) {
			var k = 0;
			var _g1 = 0;
			var _g = this.entries;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.includeInSort(lengths[i])) {
					this.sortedCodewords[k++] = (kha_audio2_ogg_vorbis_VorbisTools().default).bitReverse(this.codewords[i]);
				}
			}
			(kha_audio2_ogg_vorbis_VorbisTools().default).assert(k == this.sortedEntries,{ fileName : "Codebook.hx", lineNumber : 296, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "computeSortedHuffman"});
		} else {
			var _g11 = 0;
			var _g2 = this.sortedEntries;
			while(_g11 < _g2) {
				var i1 = _g11++;
				this.sortedCodewords[i1] = (kha_audio2_ogg_vorbis_VorbisTools().default).bitReverse(this.codewords[i1]);
			}
		}
		this.sortedCodewords[this.sortedEntries] = -1;
		this.sortedCodewords.sort((kha_audio2_ogg_vorbis_VorbisTools().default).uintAsc);
		var len = this.sparse ? this.sortedEntries : this.entries;
		var _g12 = 0;
		var _g3 = len;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var huffLen = this.sparse ? lengths[values[i2]] : lengths[i2];
			if(this.includeInSort(huffLen)) {
				var code = (kha_audio2_ogg_vorbis_VorbisTools().default).bitReverse(this.codewords[i2]);
				var x = 0;
				var n = this.sortedEntries;
				while(n > 1) {
					var m = x + (n >> 1);
					if((_$UInt_UInt_$Impl_$().default).gte(code,this.sortedCodewords[m])) {
						x = m;
						n -= n >> 1;
					} else {
						n >>= 1;
					}
				}
				if(this.sparse) {
					this.sortedValues[x] = values[i2];
					this.codewordLengths[x] = huffLen;
				} else {
					this.sortedValues[x] = i2;
				}
			}
		}
	},
	computeAcceleratedHuffman: function() {
		var this1 = new Array(1024);
		this.fastHuffman = this1;
		this.fastHuffman[0] = -1;
		var _g1 = 0;
		var _g = 1024;
		while(_g1 < _g) {
			var i = _g1++;
			this.fastHuffman[i] = -1;
		}
		var len = this.sparse ? this.sortedEntries : this.entries;
		var _g11 = 0;
		var _g2 = len;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(this.codewordLengths[i1] <= 10) {
				var z = this.sparse ? (kha_audio2_ogg_vorbis_VorbisTools().default).bitReverse(this.sortedCodewords[i1]) : this.codewords[i1];
				while(z < 1024) {
					this.fastHuffman[z] = i1;
					z += 1 << this.codewordLengths[i1];
				}
			}
		}
	},
	codebookDecode: function(decodeState,output,offset,len) {
		var z = this.decodeStart(decodeState);
		var lookupValues = this.lookupValues;
		var sequenceP = this.sequenceP;
		var multiplicands = this.multiplicands;
		var minimumValue = this.minimumValue;
		if(z < 0) {
			return false;
		}
		if(len > this.dimensions) {
			len = this.dimensions;
		}
		if(this.lookupType == 1) {
			var div = 1;
			var last = 0.0;
			var _g1 = 0;
			var _g = len;
			while(_g1 < _g) {
				var i = _g1++;
				var off = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat((Std().default)["int"](z / div)) % (_$UInt_UInt_$Impl_$().default).toFloat(lookupValues));
				var val = multiplicands[off] + last;
				var _g2 = offset + i;
				var _g3 = output;
				_g3[_g2] = _g3[_g2] + val;
				if(sequenceP) {
					last = val + minimumValue;
				}
				div = div * lookupValues;
			}
			return true;
		}
		z *= this.dimensions;
		if(sequenceP) {
			var last1 = 0.0;
			var _g11 = 0;
			var _g4 = len;
			while(_g11 < _g4) {
				var i1 = _g11++;
				var val1 = multiplicands[z + i1] + last1;
				var _g21 = offset + i1;
				var _g31 = output;
				_g31[_g21] = _g31[_g21] + val1;
				last1 = val1 + minimumValue;
			}
		} else {
			var last2 = 0.0;
			var _g12 = 0;
			var _g5 = len;
			while(_g12 < _g5) {
				var i2 = _g12++;
				var _g22 = offset + i2;
				var _g32 = output;
				_g32[_g22] = _g32[_g22] + (multiplicands[z + i2] + last2);
			}
		}
		return true;
	},
	codebookDecodeStep: function(decodeState,output,offset,len,step) {
		var z = this.decodeStart(decodeState);
		var last = 0.0;
		if(z < 0) {
			return false;
		}
		if(len > this.dimensions) {
			len = this.dimensions;
		}
		var lookupValues = this.lookupValues;
		var sequenceP = this.sequenceP;
		var multiplicands = this.multiplicands;
		if(this.lookupType == 1) {
			var div = 1;
			var _g1 = 0;
			var _g = len;
			while(_g1 < _g) {
				var i = _g1++;
				var off = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat((Std().default)["int"](z / div)) % (_$UInt_UInt_$Impl_$().default).toFloat(lookupValues));
				var val = multiplicands[off] + last;
				var _g2 = offset + i * step;
				var _g3 = output;
				_g3[_g2] = _g3[_g2] + val;
				if(sequenceP) {
					last = val;
				}
				div = div * lookupValues;
			}
			return true;
		}
		z *= this.dimensions;
		var _g11 = 0;
		var _g4 = len;
		while(_g11 < _g4) {
			var i1 = _g11++;
			var val1 = multiplicands[z + i1] + last;
			var _g21 = offset + i1 * step;
			var _g31 = output;
			_g31[_g21] = _g31[_g21] + val1;
			if(sequenceP) {
				last = val1;
			}
		}
		return true;
	},
	decodeStart: function(decodeState) {
		return decodeState.decode(this);
	},
	decodeDeinterleaveRepeat: function(decodeState,residueBuffers,ch,cInter,pInter,len,totalDecode) {
		var effective = this.dimensions;
		if(this.lookupType == 0) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_STREAM,null,{ fileName : "Codebook.hx", lineNumber : 488, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "decodeDeinterleaveRepeat"}));
		}
		var multiplicands = this.multiplicands;
		var sequenceP = this.sequenceP;
		var lookupValues = this.lookupValues;
		while(totalDecode > 0) {
			var last = 0.0;
			var z = decodeState.decode(this);
			if(z < 0) {
				if(decodeState.isLastByte()) {
					return null;
				}
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_STREAM,null,{ fileName : "Codebook.hx", lineNumber : 503, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "decodeDeinterleaveRepeat"}));
			}
			if(cInter + pInter * ch + effective > len * ch) {
				effective = len * ch - (pInter * ch - cInter);
			}
			if(this.lookupType == 1) {
				var div = 1;
				if(sequenceP) {
					var _g1 = 0;
					var _g = effective;
					while(_g1 < _g) {
						var i = _g1++;
						var off = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat((Std().default)["int"](z / div)) % (_$UInt_UInt_$Impl_$().default).toFloat(lookupValues));
						var val = multiplicands[off] + last;
						var _g2 = pInter;
						var _g3 = residueBuffers[cInter];
						_g3[_g2] = _g3[_g2] + val;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						last = val;
						div = div * lookupValues;
					}
				} else {
					var _g11 = 0;
					var _g4 = effective;
					while(_g11 < _g4) {
						var i1 = _g11++;
						var off1 = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat((Std().default)["int"](z / div)) % (_$UInt_UInt_$Impl_$().default).toFloat(lookupValues));
						var val1 = multiplicands[off1] + last;
						var _g21 = pInter;
						var _g31 = residueBuffers[cInter];
						_g31[_g21] = _g31[_g21] + val1;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						div = div * lookupValues;
					}
				}
			} else {
				z *= this.dimensions;
				if(sequenceP) {
					var _g12 = 0;
					var _g5 = effective;
					while(_g12 < _g5) {
						var i2 = _g12++;
						var val2 = multiplicands[z + i2] + last;
						var _g22 = pInter;
						var _g32 = residueBuffers[cInter];
						_g32[_g22] = _g32[_g22] + val2;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						last = val2;
					}
				} else {
					var _g13 = 0;
					var _g6 = effective;
					while(_g13 < _g6) {
						var i3 = _g13++;
						var val3 = multiplicands[z + i3] + last;
						var _g23 = pInter;
						var _g33 = residueBuffers[cInter];
						_g33[_g23] = _g33[_g23] + val3;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
					}
				}
			}
			totalDecode -= effective;
		}
		return { cInter : cInter, pInter : pInter};
	},
	residueDecode: function(decodeState,target,offset,n,rtype) {
		if(rtype == 0) {
			var step = (Std().default)["int"](n / this.dimensions);
			var _g1 = 0;
			var _g = step;
			while(_g1 < _g) {
				var k = _g1++;
				if(!this.codebookDecodeStep(decodeState,target,offset + k,n - offset - k,step)) {
					return false;
				}
			}
		} else {
			var k1 = 0;
			while(k1 < n) {
				if(!this.codebookDecode(decodeState,target,offset,n - k1)) {
					return false;
				}
				k1 += this.dimensions;
				offset += this.dimensions;
			}
		}
		return true;
	}
};
Codebook.prototype.__class__ = Codebook.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.Codebook"] = Codebook;

// Init



// Statics

Codebook.read = function(decodeState) {
	var c = new Codebook();
	if(decodeState.readBits(8) != 66 || decodeState.readBits(8) != 67 || decodeState.readBits(8) != 86) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Codebook.hx", lineNumber : 40, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	}
	var x = decodeState.readBits(8);
	c.dimensions = (decodeState.readBits(8) << 8) + x;
	var x1 = decodeState.readBits(8);
	var y = decodeState.readBits(8);
	c.entries = (decodeState.readBits(8) << 16) + (y << 8) + x1;
	var ordered = decodeState.readBits(1);
	c.sparse = ordered != 0 ? false : decodeState.readBits(1) != 0;
	var length = c.entries;
	var this1 = new Array(length);
	var lengths = this1;
	if(!c.sparse) {
		c.codewordLengths = lengths;
	}
	var total = 0;
	if(ordered != 0) {
		var currentEntry = 0;
		var currentLength = decodeState.readBits(5) + 1;
		while(currentEntry < c.entries) {
			var limit = c.entries - currentEntry;
			var n = decodeState.readBits((kha_audio2_ogg_tools_MathTools().default).ilog(limit));
			if(currentEntry + n > c.entries) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,"codebook entrys",{ fileName : "Codebook.hx", lineNumber : 67, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
			}
			var _g1 = 0;
			var _g = n;
			while(_g1 < _g) {
				var i = _g1++;
				lengths[currentEntry + i] = currentLength;
			}
			currentEntry += n;
			++currentLength;
		}
	} else {
		var _g11 = 0;
		var _g2 = c.entries;
		while(_g11 < _g2) {
			var j = _g11++;
			var present = c.sparse ? decodeState.readBits(1) : 1;
			if(present != 0) {
				lengths[j] = decodeState.readBits(5) + 1;
				++total;
			} else {
				lengths[j] = 255;
			}
		}
	}
	if(c.sparse && total >= c.entries >> 2) {
		c.codewordLengths = lengths;
		c.sparse = false;
	}
	var tmp;
	if(c.sparse) {
		tmp = total;
	} else {
		var sortedCount = 0;
		var _g12 = 0;
		var _g3 = c.entries;
		while(_g12 < _g3) {
			var j1 = _g12++;
			var l = lengths[j1];
			if(l > 10 && l != 255) {
				++sortedCount;
			}
		}
		tmp = sortedCount;
	}
	c.sortedEntries = tmp;
	var values = null;
	if(!c.sparse) {
		var length1 = c.entries;
		var this2 = new Array(length1);
		c.codewords = this2;
	} else {
		if(c.sortedEntries != 0) {
			var length2 = c.sortedEntries;
			var this3 = new Array(length2);
			c.codewordLengths = this3;
			var length3 = c.entries;
			var this4 = new Array(length3);
			c.codewords = this4;
			var length4 = c.entries;
			var this5 = new Array(length4);
			values = this5;
		}
		var size = c.entries + 64 * c.sortedEntries;
	}
	if(!c.computeCodewords(lengths,c.entries,values)) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,"compute codewords",{ fileName : "Codebook.hx", lineNumber : 120, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	}
	if(c.sortedEntries != 0) {
		c.sortedCodewords = [];
		var length5 = c.sortedEntries;
		var this6 = new Array(length5);
		c.sortedValues = this6;
		c.computeSortedHuffman(lengths,values);
	}
	if(c.sparse) {
		values = null;
		c.codewords = null;
		lengths = null;
	}
	c.computeAcceleratedHuffman();
	c.lookupType = decodeState.readBits(4);
	if(c.lookupType > 2) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,"codebook lookup type",{ fileName : "Codebook.hx", lineNumber : 143, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	}
	if(c.lookupType > 0) {
		c.minimumValue = (kha_audio2_ogg_vorbis_VorbisTools().default).floatUnpack(decodeState.readBits(32));
		c.deltaValue = (kha_audio2_ogg_vorbis_VorbisTools().default).floatUnpack(decodeState.readBits(32));
		c.valueBits = decodeState.readBits(4) + 1;
		c.sequenceP = decodeState.readBits(1) != 0;
		if(c.lookupType == 1) {
			c.lookupValues = (kha_audio2_ogg_vorbis_VorbisTools().default).lookup1Values(c.entries,c.dimensions);
		} else {
			c.lookupValues = c.entries * c.dimensions;
		}
		var length6 = c.lookupValues;
		var this7 = new Array(length6);
		var mults = this7;
		var _g13 = 0;
		var _g4 = c.lookupValues;
		while(_g13 < _g4) {
			var j2 = _g13++;
			var q = decodeState.readBits(c.valueBits);
			if(q == -1) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,"fail lookup",{ fileName : "Codebook.hx", lineNumber : 161, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
			}
			mults[j2] = q;
		}
		var length7 = c.lookupValues;
		var this8 = new Array(length7);
		c.multiplicands = this8;
		var _g14 = 0;
		var _g5 = c.lookupValues;
		while(_g14 < _g5) {
			var j3 = _g14++;
			c.multiplicands[j3] = mults[j3] * c.deltaValue + c.minimumValue;
		}
		if(c.lookupType == 2 && c.sequenceP) {
			var _g15 = 1;
			var _g6 = c.lookupValues;
			while(_g15 < _g6) {
				var j4 = _g15++;
				c.multiplicands[j4] = c.multiplicands[j4 - 1];
			}
			c.sequenceP = false;
		}
	}
	return c;
}
Codebook.NO_CODE = 255
Codebook.delay = 0

// Export

exports.default = Codebook;