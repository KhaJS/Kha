// Class: kha.audio2.ogg.vorbis.VorbisDecoder

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function Std() {return require("./../../../../Std");}
function _$UInt_UInt_$Impl_$() {return require("./../../../../_UInt/UInt_Impl_");}
function js__$Boot_HaxeError() {return require("./../../../../js/_Boot/HaxeError");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}
function Type() {return require("./../../../../Type");}
function kha_audio2_ogg_vorbis_VorbisTools() {return require("./../../../../kha/audio2/ogg/vorbis/VorbisTools");}
function Lambda() {return require("./../../../../Lambda");}
function kha_audio2_ogg_tools_Mdct() {return require("./../../../../kha/audio2/ogg/tools/Mdct");}
function kha_audio2_ogg_tools_MathTools() {return require("./../../../../kha/audio2/ogg/tools/MathTools");}
function kha_audio2_ogg_vorbis_VorbisDecodeState() {return require("./../../../../kha/audio2/ogg/vorbis/VorbisDecodeState");}
function kha_audio2_ogg_vorbis_data_Header() {return require("./../../../../kha/audio2/ogg/vorbis/data/Header");}

// Constructor

var VorbisDecoder = function(header,decodeState) {
	this.header = header;
	this.decodeState = decodeState;
	this.totalSample = null;
	this.currentSample = 0;
	this.previousLength = 0;
	var length = header.channel;
	var this1 = new Array(length);
	this.channelBuffers = this1;
	var length1 = header.channel;
	var this2 = new Array(length1);
	this.previousWindow = this2;
	var length2 = header.channel;
	var this3 = new Array(length2);
	this.finalY = this3;
	var _g1 = 0;
	var _g = header.channel;
	while(_g1 < _g) {
		var i = _g1++;
		this.channelBuffers[i] = (kha_audio2_ogg_vorbis_VorbisTools().default).emptyFloatVector(header.blocksize1);
		this.previousWindow[i] = (kha_audio2_ogg_vorbis_VorbisTools().default).emptyFloatVector((Std().default)["int"](header.blocksize1 / 2));
		this.finalY[i] = [];
	}
	var this4 = new Array(2);
	this.a = this4;
	var this5 = new Array(2);
	this.b = this5;
	var this6 = new Array(2);
	this.c = this6;
	var this7 = new Array(2);
	this.window = this7;
	var this8 = new Array(2);
	this.bitReverseData = this8;
	this.initBlocksize(0,header.blocksize0);
	this.initBlocksize(1,header.blocksize1);
}

// Meta

VorbisDecoder.__name__ = ["kha","audio2","ogg","vorbis","VorbisDecoder"];
VorbisDecoder.prototype = {
	read: function(output,samples,channels,sampleRate,useFloat) {
		var b = this.header.sampleRate;
		if((Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat(sampleRate) % (_$UInt_UInt_$Impl_$().default).toFloat(b)) != 0) {
			throw new (js__$Boot_HaxeError().default)("Unsupported sampleRate : can't convert " + (Std().default).string((_$UInt_UInt_$Impl_$().default).toFloat(this.header.sampleRate)) + " to " + sampleRate);
		}
		if(channels % this.header.channel != 0) {
			throw new (js__$Boot_HaxeError().default)("Unsupported channels : can't convert " + this.header.channel + " to " + channels);
		}
		var b1 = this.header.sampleRate;
		var sampleRepeat = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat(sampleRate) / (_$UInt_UInt_$Impl_$().default).toFloat(b1));
		var channelRepeat = (Std().default)["int"](channels / this.header.channel);
		var n = 0;
		var len = Math.floor(samples / sampleRepeat);
		if(this.totalSample != null && len > this.totalSample - this.currentSample) {
			len = this.totalSample - this.currentSample;
		}
		var index = 0;
		while(n < len) {
			var k = this.channelBufferEnd - this.channelBufferStart;
			if(k >= len - n) {
				k = len - n;
			}
			var _g1 = this.channelBufferStart;
			var _g = this.channelBufferStart + k;
			while(_g1 < _g) {
				var j = _g1++;
				var _g3 = 0;
				var _g2 = sampleRepeat;
				while(_g3 < _g2) {
					var sr = _g3++;
					var _g5 = 0;
					var _g4 = this.header.channel;
					while(_g5 < _g4) {
						var i = _g5++;
						var _g7 = 0;
						var _g6 = channelRepeat;
						while(_g7 < _g6) {
							var cr = _g7++;
							var value = this.channelBuffers[i][j];
							if(value > 1) {
								value = 1;
							} else if(value < -1) {
								value = -1;
							}
							if(useFloat) {
								output[index] = value;
								++index;
							}
						}
					}
				}
			}
			n += k;
			this.channelBufferStart += k;
			if(n == len || this.getFrameFloat() == 0) {
				break;
			}
		}
		var _g11 = n;
		var _g8 = len;
		while(_g11 < _g8) {
			var j1 = _g11++;
			var _g31 = 0;
			var _g21 = sampleRepeat;
			while(_g31 < _g21) {
				var sr1 = _g31++;
				var _g51 = 0;
				var _g41 = this.header.channel;
				while(_g51 < _g41) {
					var i1 = _g51++;
					var _g71 = 0;
					var _g61 = channelRepeat;
					while(_g71 < _g61) {
						var cr1 = _g71++;
						if(useFloat) {
							output[index] = 0;
							++index;
						}
					}
				}
			}
		}
		this.currentSample += len;
		return len * sampleRepeat;
	},
	skipSamples: function(len) {
		var n = 0;
		if(this.totalSample != null && len > this.totalSample - this.currentSample) {
			len = this.totalSample - this.currentSample;
		}
		while(n < len) {
			var k = this.channelBufferEnd - this.channelBufferStart;
			if(k >= len - n) {
				k = len - n;
			}
			n += k;
			this.channelBufferStart += k;
			if(n == len || this.getFrameFloat() == 0) {
				break;
			}
		}
		this.currentSample += len;
		return len;
	},
	setupSampleNumber: function(seekFunc,inputLength) {
		if(this.totalSample == null) {
			this.totalSample = this.decodeState.getSampleNumber(seekFunc,inputLength);
		}
	},
	seek: function(seekFunc,inputLength,sampleNumber) {
		if(this.currentSample == sampleNumber) {
			return;
		}
		if(this.totalSample == null) {
			this.setupSampleNumber(seekFunc,inputLength);
			if(this.totalSample == 0) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).CANT_FIND_LAST_PAGE,null,{ fileName : "VorbisDecoder.hx", lineNumber : 187, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
			}
		}
		if(sampleNumber < 0) {
			sampleNumber = 0;
		}
		var p0 = this.decodeState.pFirst;
		var p1 = this.decodeState.pLast;
		if(sampleNumber >= p1.lastDecodedSample) {
			sampleNumber = p1.lastDecodedSample - 1;
		}
		if(sampleNumber < p0.lastDecodedSample) {
			this.seekFrameFromPage(seekFunc,p0.pageStart,0,sampleNumber);
		} else {
			var attempts = 0;
			while(p0.pageEnd < p1.pageStart) {
				var startOffset = p0.pageEnd;
				var endOffset = p1.afterPreviousPageStart;
				var startSample = p0.lastDecodedSample;
				var endSample = p1.lastDecodedSample;
				if(startSample == null || endSample == null) {
					throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 219, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
				}
				if((_$UInt_UInt_$Impl_$().default).gt(endOffset,startOffset + 4000)) {
					endOffset = endOffset - 4000;
				}
				var probe = startOffset + Math.floor((_$UInt_UInt_$Impl_$().default).toFloat(endOffset - startOffset) / (_$UInt_UInt_$Impl_$().default).toFloat(endSample - startSample) * (sampleNumber - startSample));
				if(attempts >= 4) {
					var probe2 = startOffset + (endOffset - startOffset >>> 1);
					if(attempts >= 8) {
						probe = probe2;
					} else if((_$UInt_UInt_$Impl_$().default).gt(probe2,probe)) {
						probe = probe + (probe2 - probe >>> 1);
					} else {
						probe = probe2 + (probe - probe2 >>> 1);
					}
				}
				++attempts;
				this.decodeState.setInputOffset(seekFunc,probe);
				var _g = this.decodeState.findPage(seekFunc,inputLength);
				switch((Type().default).enumIndex(_g)) {
				case 0:
					break;
				case 1:
					throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 249, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
					break;
				}
				var q = this.decodeState.analyzePage(seekFunc,this.header);
				if(q == null) {
					throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 255, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
				}
				q.afterPreviousPageStart = probe;
				if(q.pageStart == p1.pageStart) {
					p1 = q;
					continue;
				}
				if(sampleNumber < q.lastDecodedSample) {
					p1 = q;
				} else {
					p0 = q;
				}
			}
			if(p0.lastDecodedSample <= sampleNumber && sampleNumber < p1.lastDecodedSample) {
				this.seekFrameFromPage(seekFunc,p1.pageStart,p0.lastDecodedSample,sampleNumber);
			} else {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 275, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
			}
		}
	},
	seekFrameFromPage: function(seekFunc,pageStart,firstSample,targetSample) {
		var frame = 0;
		var frameStart = firstSample;
		this.decodeState.setInputOffset(seekFunc,pageStart);
		this.decodeState.forcePageResync();
		var leftEnd = 0;
		var leftStart = 0;
		var prevState = null;
		var lastState = null;
		while(true) {
			prevState = lastState;
			lastState = this.decodeState.clone(seekFunc);
			var initialResult = this.decodeInitial();
			if(initialResult == null) {
				lastState = prevState;
				break;
			}
			leftStart = initialResult.left.start;
			leftEnd = initialResult.left.end;
			var start = frame == 0 ? leftEnd : leftStart;
			if(targetSample < frameStart + initialResult.right.start - start) {
				break;
			}
			this.decodeState.flushPacket();
			frameStart += initialResult.right.start - start;
			++frame;
		}
		this.decodeState = lastState;
		seekFunc(this.decodeState.inputPosition);
		this.previousLength = 0;
		this.pumpFirstFrame();
		this.currentSample = frameStart;
		this.skipSamples(targetSample - frameStart);
	},
	clone: function(seekFunc) {
		var decoder = (Type().default).createEmptyInstance(VorbisDecoder);
		decoder.currentSample = this.currentSample;
		decoder.totalSample = this.totalSample;
		decoder.previousLength = this.previousLength;
		decoder.channelBufferStart = this.channelBufferStart;
		decoder.channelBufferEnd = this.channelBufferEnd;
		decoder.a = this.a;
		decoder.b = this.b;
		decoder.c = this.c;
		decoder.window = this.window;
		decoder.bitReverseData = this.bitReverseData;
		decoder.header = this.header;
		decoder.decodeState = this.decodeState.clone(seekFunc);
		var length = this.header.channel;
		var this1 = new Array(length);
		decoder.channelBuffers = this1;
		var length1 = this.header.channel;
		var this2 = new Array(length1);
		decoder.previousWindow = this2;
		var length2 = this.header.channel;
		var this3 = new Array(length2);
		decoder.finalY = this3;
		var _g1 = 0;
		var _g = this.header.channel;
		while(_g1 < _g) {
			var i = _g1++;
			decoder.channelBuffers[i] = (kha_audio2_ogg_vorbis_VorbisTools().default).copyVector(this.channelBuffers[i]);
			decoder.previousWindow[i] = (kha_audio2_ogg_vorbis_VorbisTools().default).copyVector(this.previousWindow[i]);
			decoder.finalY[i] = (Lambda().default).array(this.finalY[i]);
		}
		return decoder;
	},
	ensurePosition: function(seekFunc) {
		seekFunc(this.decodeState.inputPosition);
	},
	getFrameFloat: function() {
		var result = this.decodePacket();
		if(result == null) {
			this.channelBufferStart = this.channelBufferEnd = 0;
			return 0;
		}
		var len = this.finishFrame(result);
		this.channelBufferStart = result.left;
		this.channelBufferEnd = result.left + len;
		return len;
	},
	pumpFirstFrame: function() {
		this.finishFrame(this.decodePacket());
	},
	finishFrame: function(r) {
		var len = r.len;
		var right = r.right;
		var left = r.left;
		if(this.previousLength != 0) {
			var n = this.previousLength;
			var w = this.getWindow(n);
			var _g1 = 0;
			var _g = this.header.channel;
			while(_g1 < _g) {
				var i = _g1++;
				var cb = this.channelBuffers[i];
				var pw = this.previousWindow[i];
				var _g3 = 0;
				var _g2 = n;
				while(_g3 < _g2) {
					var j = _g3++;
					cb[left + j] = cb[left + j] * w[j] + pw[j] * w[n - 1 - j];
				}
			}
		}
		var prev = this.previousLength;
		this.previousLength = len - right;
		var _g11 = 0;
		var _g4 = this.header.channel;
		while(_g11 < _g4) {
			var i1 = _g11++;
			var pw1 = this.previousWindow[i1];
			var cb1 = this.channelBuffers[i1];
			var _g31 = 0;
			var _g21 = len - right;
			while(_g31 < _g21) {
				var j1 = _g31++;
				pw1[j1] = cb1[right + j1];
			}
		}
		if(prev == 0) {
			return 0;
		}
		if(len < right) {
			right = len;
		}
		return right - left;
	},
	getWindow: function(len) {
		len <<= 1;
		if(len == this.header.blocksize0) {
			return this.window[0];
		} else if(len == this.header.blocksize1) {
			return this.window[1];
		} else {
			(kha_audio2_ogg_vorbis_VorbisTools().default).assert(false,{ fileName : "VorbisDecoder.hx", lineNumber : 466, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "getWindow"});
			return null;
		}
	},
	initBlocksize: function(bs,n) {
		var n2 = n >> 1;
		var n4 = n >> 2;
		var n8 = n >> 3;
		var this1 = this.a;
		var this2 = new Array(n2);
		this1[bs] = this2;
		var this3 = this.b;
		var this4 = new Array(n2);
		this3[bs] = this4;
		var this5 = this.c;
		var this6 = new Array(n4);
		this5[bs] = this6;
		var this7 = this.window;
		var this8 = new Array(n2);
		this7[bs] = this8;
		var this9 = this.bitReverseData;
		var this10 = new Array(n8);
		this9[bs] = this10;
		(kha_audio2_ogg_vorbis_VorbisTools().default).computeTwiddleFactors(n,this.a[bs],this.b[bs],this.c[bs]);
		(kha_audio2_ogg_vorbis_VorbisTools().default).computeWindow(n,this.window[bs]);
		(kha_audio2_ogg_vorbis_VorbisTools().default).computeBitReverse(n,this.bitReverseData[bs]);
	},
	inverseMdct: function(buffer,n,blocktype) {
		var bt = blocktype ? 1 : 0;
		(kha_audio2_ogg_tools_Mdct().default).inverseTransform(buffer,n,this.a[bt],this.b[bt],this.c[bt],this.bitReverseData[bt]);
	},
	decodePacket: function() {
		var result = this.decodeInitial();
		if(result == null) {
			return null;
		}
		var rest = this.decodePacketRest(result);
		return rest;
	},
	decodeInitial: function() {
		this.channelBufferStart = this.channelBufferEnd = 0;
		while(true) {
			if(!this.decodeState.maybeStartPacket()) {
				return null;
			}
			if(this.decodeState.readBits(1) != 0) {
				while(-1 != this.decodeState.readPacket()) {
				}
				continue;
			}
			break;
		}
		var i = this.decodeState.readBits((kha_audio2_ogg_tools_MathTools().default).ilog(this.header.modes.length - 1));
		if(i == -1 || i >= this.header.modes.length) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).SEEK_FAILED,null,{ fileName : "VorbisDecoder.hx", lineNumber : 519, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "decodeInitial"}));
		}
		var m = this.header.modes[i];
		var n;
		var prev;
		var next;
		if(m.blockflag) {
			n = this.header.blocksize1;
			prev = this.decodeState.readBits(1);
			next = this.decodeState.readBits(1);
		} else {
			next = 0;
			prev = next;
			n = this.header.blocksize0;
		}
		var windowCenter = n >> 1;
		return { mode : i, left : m.blockflag && prev == 0 ? { start : n - this.header.blocksize0 >> 2, end : n + this.header.blocksize0 >> 2} : { start : 0, end : windowCenter}, right : m.blockflag && next == 0 ? { start : n * 3 - this.header.blocksize0 >> 2, end : n * 3 + this.header.blocksize0 >> 2} : { start : windowCenter, end : n}};
	},
	decodePacketRest: function(r) {
		var len = 0;
		var m = this.header.modes[r.mode];
		var this1 = new Array(256);
		var zeroChannel = this1;
		var this2 = new Array(256);
		var reallyZeroChannel = this2;
		var n = m.blockflag ? this.header.blocksize1 : this.header.blocksize0;
		var map = this.header.mapping[m.mapping];
		var n2 = n >> 1;
		var rangeList = [256,128,86,64];
		var codebooks = this.header.codebooks;
		var _g1 = 0;
		var _g = this.header.channel;
		while(_g1 < _g) {
			var i = _g1++;
			var s = map.chan[i].mux;
			zeroChannel[i] = false;
			var floor = this.header.floorConfig[map.submapFloor[s]];
			if(floor.type == 0) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_STREAM,null,{ fileName : "VorbisDecoder.hx", lineNumber : 581, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "decodePacketRest"}));
			} else {
				var g = floor.floor1;
				if(this.decodeState.readBits(1) != 0) {
					var fy = [];
					var this3 = new Array(256);
					var step2Flag = this3;
					var range = rangeList[g.floor1Multiplier - 1];
					var offset = 2;
					fy = this.finalY[i];
					fy[0] = this.decodeState.readBits((kha_audio2_ogg_tools_MathTools().default).ilog(range) - 1);
					fy[1] = this.decodeState.readBits((kha_audio2_ogg_tools_MathTools().default).ilog(range) - 1);
					var _g3 = 0;
					var _g2 = g.partitions;
					while(_g3 < _g2) {
						var j = _g3++;
						var pclass = g.partitionClassList[j];
						var cdim = g.classDimensions[pclass];
						var cbits = g.classSubclasses[pclass];
						var csub = (1 << cbits) - 1;
						var cval = 0;
						if(cbits != 0) {
							var c = codebooks[g.classMasterbooks[pclass]];
							cval = this.decodeState.decode(c);
						}
						var books = g.subclassBooks[pclass];
						var _g5 = 0;
						var _g4 = cdim;
						while(_g5 < _g4) {
							var k = _g5++;
							var book = books[cval & csub];
							cval >>= cbits;
							fy[offset++] = book >= 0 ? this.decodeState.decode(codebooks[book]) : 0;
						}
					}
					if(this.decodeState.validBits == -1) {
						zeroChannel[i] = true;
						continue;
					}
					step2Flag[0] = step2Flag[1] = true;
					var naighbors = g.neighbors;
					var xlist = g.xlist;
					var _g31 = 2;
					var _g21 = g.values;
					while(_g31 < _g21) {
						var j1 = _g31++;
						var low = naighbors[j1][0];
						var high = naighbors[j1][1];
						var lowroom = (kha_audio2_ogg_vorbis_VorbisTools().default).predictPoint(xlist[j1],xlist[low],xlist[high],fy[low],fy[high]);
						var val = fy[j1];
						var highroom = range - lowroom;
						var room = highroom < lowroom ? highroom * 2 : lowroom * 2;
						if(val != 0) {
							step2Flag[low] = step2Flag[high] = true;
							step2Flag[j1] = true;
							if(val >= room) {
								if(highroom > lowroom) {
									fy[j1] = val - lowroom + lowroom;
								} else {
									fy[j1] = lowroom - val + highroom - 1;
								}
							} else if((val & 1) != 0) {
								fy[j1] = lowroom - (val + 1 >> 1);
							} else {
								fy[j1] = lowroom + (val >> 1);
							}
						} else {
							step2Flag[j1] = false;
							fy[j1] = lowroom;
						}
					}
					var _g32 = 0;
					var _g22 = g.values;
					while(_g32 < _g22) {
						var j2 = _g32++;
						if(!step2Flag[j2]) {
							fy[j2] = -1;
						}
					}
				} else {
					zeroChannel[i] = true;
				}
			}
		}
		var _g11 = 0;
		var _g6 = this.header.channel;
		while(_g11 < _g6) {
			var i1 = _g11++;
			reallyZeroChannel[i1] = zeroChannel[i1];
		}
		var _g12 = 0;
		var _g7 = map.couplingSteps;
		while(_g12 < _g7) {
			var i2 = _g12++;
			if(!zeroChannel[map.chan[i2].magnitude] || !zeroChannel[map.chan[i2].angle]) {
				zeroChannel[map.chan[i2].magnitude] = zeroChannel[map.chan[i2].angle] = false;
			}
		}
		var _g13 = 0;
		var _g8 = map.submaps;
		while(_g13 < _g8) {
			var i3 = _g13++;
			var length = this.header.channel;
			var this4 = new Array(length);
			var residueBuffers = this4;
			var this5 = new Array(256);
			var doNotDecode = this5;
			var ch = 0;
			var _g33 = 0;
			var _g23 = this.header.channel;
			while(_g33 < _g23) {
				var j3 = _g33++;
				if(map.chan[j3].mux == i3) {
					if(zeroChannel[j3]) {
						doNotDecode[ch] = true;
						residueBuffers[ch] = null;
					} else {
						doNotDecode[ch] = false;
						residueBuffers[ch] = this.channelBuffers[j3];
					}
					++ch;
				}
			}
			var r1 = map.submapResidue[i3];
			var residue = this.header.residueConfig[r1];
			residue.decode(this.decodeState,this.header,residueBuffers,ch,n2,doNotDecode,this.channelBuffers);
		}
		var i4 = map.couplingSteps;
		var n21 = n >> 1;
		while(--i4 >= 0) {
			var m1 = this.channelBuffers[map.chan[i4].magnitude];
			var a = this.channelBuffers[map.chan[i4].angle];
			var _g14 = 0;
			var _g9 = n21;
			while(_g14 < _g9) {
				var j4 = _g14++;
				var a2;
				var m2;
				if(m1[j4] > 0) {
					if(a[j4] > 0) {
						m2 = m1[j4];
						a2 = m1[j4] - a[j4];
					} else {
						a2 = m1[j4];
						m2 = m1[j4] + a[j4];
					}
				} else if(a[j4] > 0) {
					m2 = m1[j4];
					a2 = m1[j4] + a[j4];
				} else {
					a2 = m1[j4];
					m2 = m1[j4] - a[j4];
				}
				m1[j4] = m2;
				a[j4] = a2;
			}
		}
		var _g15 = 0;
		var _g10 = this.header.channel;
		while(_g15 < _g10) {
			var i5 = _g15++;
			if(reallyZeroChannel[i5]) {
				var _g34 = 0;
				var _g24 = n21;
				while(_g34 < _g24) {
					var j5 = _g34++;
					this.channelBuffers[i5][j5] = 0;
				}
			} else {
				map.doFloor(this.header.floorConfig,i5,n,this.channelBuffers[i5],this.finalY[i5],null);
			}
		}
		var _g16 = 0;
		var _g17 = this.header.channel;
		while(_g16 < _g17) {
			var i6 = _g16++;
			this.inverseMdct(this.channelBuffers[i6],n,m.blockflag);
		}
		this.decodeState.flushPacket();
		return this.decodeState.finishDecodePacket(this.previousLength,n,r);
	}
};
VorbisDecoder.prototype.__class__ = VorbisDecoder.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.VorbisDecoder"] = VorbisDecoder;

// Init



// Statics

VorbisDecoder.start = function(input) {
	var decodeState = new (kha_audio2_ogg_vorbis_VorbisDecodeState().default)(input);
	var header = (kha_audio2_ogg_vorbis_data_Header().default).read(decodeState);
	var decoder = new VorbisDecoder(header,decodeState);
	decodeState.startFirstDecode();
	decoder.pumpFirstFrame();
	return decoder;
}


// Export

exports.default = VorbisDecoder;