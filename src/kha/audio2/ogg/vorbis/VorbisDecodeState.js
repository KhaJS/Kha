// Class: kha.audio2.ogg.vorbis.VorbisDecodeState

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function kha_audio2_ogg_vorbis_data_ProbedPage() {return require("./../../../../kha/audio2/ogg/vorbis/data/ProbedPage");}
function Type() {return require("./../../../../Type");}
function js__$Boot_HaxeError() {return require("./../../../../js/_Boot/HaxeError");}
function js_Boot() {return require("./../../../../js/Boot");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}
function kha_audio2_ogg_vorbis_VorbisTools() {return require("./../../../../kha/audio2/ogg/vorbis/VorbisTools");}
function haxe_io_Eof() {return require("./../../../../haxe/io/Eof");}
function haxe_io_Bytes() {return require("./../../../../haxe/io/Bytes");}
function _$UInt_UInt_$Impl_$() {return require("./../../../../_UInt/UInt_Impl_");}
function kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult() {return require("./../../../../kha/audio2/ogg/vorbis/_VorbisDecodeState/FindPageResult");}
function kha_audio2_ogg_tools_Crc32() {return require("./../../../../kha/audio2/ogg/tools/Crc32");}
function kha_audio2_ogg_tools_MathTools() {return require("./../../../../kha/audio2/ogg/tools/MathTools");}
function kha_audio2_ogg_vorbis_data_Page() {return require("./../../../../kha/audio2/ogg/vorbis/data/Page");}

// Constructor

var VorbisDecodeState = function(input) {
	this.nextSeg = 0;
	this.firstDecode = false;
	this.bytesInSeg = 0;
	this.validBits = 0;
	this.input = input;
	this.inputPosition = 0;
	this.page = new (kha_audio2_ogg_vorbis_data_Page().default)();
	(kha_audio2_ogg_tools_Crc32().default).init();
}

// Meta

VorbisDecodeState.__name__ = ["kha","audio2","ogg","vorbis","VorbisDecodeState"];
VorbisDecodeState.prototype = {
	setup: function(loc0,loc1) {
		var segmentCount = this.readByte();
		this.segments = this.read(segmentCount);
		this.endSegWithKnownLoc = -2;
		if(loc0 != -1 || loc1 != -1) {
			var i = segmentCount - 1;
			while(i >= 0) {
				if(this.segments[i] < 255) {
					break;
				}
				if(i >= 0) {
					this.endSegWithKnownLoc = i;
					this.knownLocForPacket = loc0;
				}
				--i;
			}
		}
		if(this.firstDecode) {
			var i1 = 0;
			var len = 0;
			var p = new (kha_audio2_ogg_vorbis_data_ProbedPage().default)();
			var _g1 = 0;
			var _g = segmentCount;
			while(_g1 < _g) {
				var i2 = _g1++;
				len += this.segments[i2];
			}
			len += 27 + segmentCount;
			p.pageStart = this.firstAudioPageOffset;
			p.pageEnd = p.pageStart + len;
			p.firstDecodedSample = 0;
			p.lastDecodedSample = loc0;
			this.pFirst = p;
		}
		this.nextSeg = 0;
	},
	clone: function(seekFunc) {
		var state = (Type().default).createEmptyInstance(VorbisDecodeState);
		seekFunc(this.inputPosition);
		state.input = this.input;
		state.eof = this.eof;
		state.validBits = this.validBits;
		state.discardSamplesDeferred = this.discardSamplesDeferred;
		state.firstDecode = this.firstDecode;
		state.nextSeg = this.nextSeg;
		state.bytesInSeg = this.bytesInSeg;
		state.acc = state.acc;
		state.lastSeg = this.lastSeg;
		state.lastSegWhich = this.lastSegWhich;
		state.currentLoc = this.currentLoc;
		state.currentLocValid = this.currentLocValid;
		state.inputPosition = this.inputPosition;
		state.firstAudioPageOffset = this.firstAudioPageOffset;
		state.error = this.error;
		state.segments = this.segments;
		state.pFirst = this.pFirst;
		state.pLast = this.pLast;
		state.page = this.page.clone();
		return state;
	},
	next: function() {
		if(this.lastSeg) {
			return 0;
		}
		if(this.nextSeg == -1) {
			this.lastSegWhich = this.segments.length - 1;
			try {
				this.page.start(this);
			} catch( e ) {
				if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
				if( (js_Boot().default).__instanceof(e,(kha_audio2_ogg_vorbis_data_ReaderError().default)) ) {
					this.lastSeg = true;
					this.error = e;
					return 0;
				} else throw(e);
			}
			if((this.page.flag & 1) == 0) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).CONTINUED_PACKET_FLAG_INVALID,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 171, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "next"}));
			}
		}
		var len = this.segments[this.nextSeg++];
		if(len < 255) {
			this.lastSeg = true;
			this.lastSegWhich = this.nextSeg - 1;
		}
		if(this.nextSeg >= this.segments.length) {
			this.nextSeg = -1;
		}
		(kha_audio2_ogg_vorbis_VorbisTools().default).assert(this.bytesInSeg == 0,{ fileName : "VorbisDecodeState.hx", lineNumber : 184, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "next"});
		this.bytesInSeg = len;
		return len;
	},
	startPacket: function() {
		while(this.nextSeg == -1) {
			this.page.start(this);
			if((this.page.flag & 1) != 0) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).MISSING_CAPTURE_PATTERN,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 193, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "startPacket"}));
			}
		}
		this.lastSeg = false;
		this.validBits = 0;
		this.bytesInSeg = 0;
	},
	maybeStartPacket: function() {
		if(this.nextSeg == -1) {
			var eof = false;
			var x;
			try {
				x = this.readByte();
			} catch( e ) {
				if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
				if( (js_Boot().default).__instanceof(e,(haxe_io_Eof().default)) ) {
					eof = true;
					x = 0;
				} else throw(e);
			}
			if(eof) {
				return false;
			}
			if(x != 79 || this.readByte() != 103 || this.readByte() != 103 || this.readByte() != 83) {
				throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).MISSING_CAPTURE_PATTERN,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 218, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "maybeStartPacket"}));
			}
			this.page.startWithoutCapturePattern(this);
		}
		this.startPacket();
		return true;
	},
	readBits: function(n) {
		if(this.validBits < 0) {
			return 0;
		} else if(this.validBits < n) {
			if(n > 24) {
				return this.readBits(24) + (this.readBits(n - 24) << 24);
			} else {
				if(this.validBits == 0) {
					this.acc = 0;
				}
				while(true) {
					if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) {
						this.validBits = -1;
						break;
					} else {
						this.bytesInSeg--;
						this.acc = this.acc + (this.readByte() << this.validBits);
						this.validBits += 8;
					}
					if(!(this.validBits < n)) {
						break;
					}
				}
				if(this.validBits < 0) {
					return 0;
				} else {
					var z = this.acc & (1 << n) - 1;
					this.acc = this.acc >>> n;
					this.validBits -= n;
					return z;
				}
			}
		} else {
			var z1 = this.acc & (1 << n) - 1;
			this.acc = this.acc >>> n;
			this.validBits -= n;
			return z1;
		}
	},
	readPacketRaw: function() {
		if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) {
			return -1;
		} else {
			this.bytesInSeg--;
			return this.readByte();
		}
	},
	readPacket: function() {
		var x = this.readPacketRaw();
		this.validBits = 0;
		return x;
	},
	flushPacket: function() {
		while(this.bytesInSeg != 0 || !this.lastSeg && this.next() != 0) {
			this.bytesInSeg--;
			this.readByte();
		}
	},
	vorbisValidate: function() {
		var header = (haxe_io_Bytes().default).alloc(6);
		var _g = 0;
		while(_g < 6) {
			var i = _g++;
			header.set(i,this.readPacket());
		}
		if(header.toString() != "vorbis") {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,"vorbis header",{ fileName : "VorbisDecodeState.hx", lineNumber : 300, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "vorbisValidate"}));
		}
	},
	firstPageValidate: function() {
		if(this.segments.length != 1) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"segmentCount",{ fileName : "VorbisDecodeState.hx", lineNumber : 307, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "firstPageValidate"}));
		}
		if(this.segments[0] != 30) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_FIRST_PAGE,"decodeState head",{ fileName : "VorbisDecodeState.hx", lineNumber : 310, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "firstPageValidate"}));
		}
	},
	startFirstDecode: function() {
		this.firstAudioPageOffset = this.inputPosition;
		this.firstDecode = true;
	},
	capturePattern: function() {
		if(this.readByte() != 79 || this.readByte() != 103 || this.readByte() != 103 || this.readByte() != 83) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).MISSING_CAPTURE_PATTERN,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 323, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "capturePattern"}));
		}
	},
	skip: function(len) {
		this.read(len);
	},
	prepHuffman: function() {
		if(this.validBits <= 24) {
			if(this.validBits == 0) {
				this.acc = 0;
			}
			while(true) {
				if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) {
					return;
				} else {
					this.bytesInSeg--;
					this.acc = this.acc + (this.readByte() << this.validBits);
					this.validBits += 8;
				}
				if(!(this.validBits <= 24)) {
					break;
				}
			}
		}
	},
	decode: function(c) {
		var val = this.decodeRaw(c);
		if(c.sparse) {
			val = c.sortedValues[val];
		}
		return val;
	},
	decodeRaw: function(c) {
		if(this.validBits < 10) {
			this.prepHuffman();
		}
		var i = c.fastHuffman[this.acc & 1023];
		if(i >= 0) {
			var l = c.codewordLengths[i];
			this.acc = this.acc >>> l;
			this.validBits -= l;
			if(this.validBits < 0) {
				this.validBits = 0;
				return -1;
			} else {
				return i;
			}
		} else {
			return this.decodeScalarRaw(c);
		}
	},
	isLastByte: function() {
		if(this.bytesInSeg == 0) {
			return this.lastSeg;
		} else {
			return false;
		}
	},
	finishDecodePacket: function(previousLength,n,r) {
		var left = r.left.start;
		var currentLocValid = false;
		var n2 = n >> 1;
		if(this.firstDecode) {
			this.currentLoc = -n2;
			this.discardSamplesDeferred = n - r.right.end;
			currentLocValid = true;
			this.firstDecode = false;
		} else if(this.discardSamplesDeferred != 0) {
			r.left.start += this.discardSamplesDeferred;
			left = r.left.start;
			this.discardSamplesDeferred = 0;
		} else {
			var tmp = previousLength == 0 && currentLocValid;
		}
		if(this.lastSegWhich == this.endSegWithKnownLoc) {
			if(currentLocValid && (this.page.flag & 4) != 0) {
				var currentEnd = this.knownLocForPacket - (n - r.right.end);
				if(currentEnd < this.currentLoc + r.right.end) {
					var len = currentEnd < this.currentLoc ? 0 : currentEnd - this.currentLoc;
					len += r.left.start;
					this.currentLoc += len;
					return { len : len, left : left, right : r.right.start};
				}
			}
			this.currentLoc = this.knownLocForPacket - (n2 - r.left.start);
			currentLocValid = true;
		}
		if(currentLocValid) {
			this.currentLoc += r.right.start - r.left.start;
		}
		return { len : r.right.end, left : left, right : r.right.start};
	},
	readInt32: function() {
		this.inputPosition += 4;
		return this.input.readInt32();
	},
	readByte: function() {
		this.inputPosition += 1;
		return this.input.readByte();
	},
	read: function(n) {
		this.inputPosition += n;
		var this1 = new Array(n);
		var vec = this1;
		var _g1 = 0;
		var _g = n;
		while(_g1 < _g) {
			var i = _g1++;
			vec[i] = this.input.readByte();
		}
		return vec;
	},
	readBytes: function(n) {
		this.inputPosition += n;
		return this.input.read(n);
	},
	readString: function(n) {
		this.inputPosition += n;
		return this.input.readString(n);
	},
	getSampleNumber: function(seekFunc,inputLength) {
		var restoreOffset = this.inputPosition;
		var previousSafe = (_$UInt_UInt_$Impl_$().default).gte(inputLength,65536) && (_$UInt_UInt_$Impl_$().default).gte(inputLength - 65536,this.firstAudioPageOffset) ? inputLength - 65536 : this.firstAudioPageOffset;
		this.setInputOffset(seekFunc,previousSafe);
		var end = 0;
		var last = false;
		var _g = this.findPage(seekFunc,inputLength);
		switch((Type().default).enumIndex(_g)) {
		case 0:
			var l = _g[3];
			var e = _g[2];
			end = e;
			last = l;
			break;
		case 1:
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).CANT_FIND_LAST_PAGE,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 518, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "getSampleNumber"}));
			break;
		}
		var lastPageLoc = this.inputPosition;
		try {
			while(!last) {
				this.setInputOffset(seekFunc,end);
				var _g1 = this.findPage(seekFunc,inputLength);
				switch((Type().default).enumIndex(_g1)) {
				case 0:
					var l1 = _g1[3];
					var e1 = _g1[2];
					end = e1;
					last = l1;
					break;
				case 1:
					throw "__break__";
					break;
				}
				previousSafe = lastPageLoc + 1;
				lastPageLoc = this.inputPosition;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		this.setInputOffset(seekFunc,lastPageLoc);
		var vorbisHeader = this.read(6);
		var lo = this.readInt32();
		var hi = this.readInt32();
		if(lo == -1 && hi == -1 || hi > 0) {
			throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).CANT_FIND_LAST_PAGE,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 552, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "getSampleNumber"}));
		}
		this.pLast = new (kha_audio2_ogg_vorbis_data_ProbedPage().default)();
		this.pLast.pageStart = lastPageLoc;
		this.pLast.pageEnd = end;
		this.pLast.lastDecodedSample = lo;
		this.pLast.firstDecodedSample = null;
		this.pLast.afterPreviousPageStart = previousSafe;
		this.setInputOffset(seekFunc,restoreOffset);
		return lo;
	},
	forcePageResync: function() {
		this.nextSeg = -1;
	},
	setInputOffset: function(seekFunc,n) {
		seekFunc(this.inputPosition = n);
	},
	findPage: function(seekFunc,inputLength) {
		try {
			while(true) {
				var n = this.readByte();
				if(n == 79) {
					var retryLoc = this.inputPosition;
					if(retryLoc - 25 > inputLength) {
						return (kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult().default).NotFound;
					}
					if(this.readByte() != 103 || this.readByte() != 103 || this.readByte() != 83) {
						continue;
					}
					var this1 = new Array(27);
					var header = this1;
					header[0] = 79;
					header[1] = 103;
					header[2] = 103;
					header[3] = 83;
					var _g = 4;
					while(_g < 27) {
						var i = _g++;
						header[i] = this.readByte();
					}
					if(header[4] != 0) {
						this.setInputOffset(seekFunc,retryLoc);
						continue;
					}
					var goal = header[22] + (header[23] << 8) + (header[24] << 16) + (header[25] << 24);
					var _g1 = 22;
					while(_g1 < 26) {
						var i1 = _g1++;
						header[i1] = 0;
					}
					var crc = 0;
					var _g2 = 0;
					while(_g2 < 27) {
						var i2 = _g2++;
						crc = (kha_audio2_ogg_tools_Crc32().default).update(crc,header[i2]);
					}
					var len = 0;
					try {
						var _g11 = 0;
						var _g3 = header[26];
						while(_g11 < _g3) {
							var i3 = _g11++;
							var s = this.readByte();
							crc = (kha_audio2_ogg_tools_Crc32().default).update(crc,s);
							len += s;
						}
						var _g12 = 0;
						var _g4 = len;
						while(_g12 < _g4) {
							var i4 = _g12++;
							crc = (kha_audio2_ogg_tools_Crc32().default).update(crc,this.readByte());
						}
					} catch( e ) {
						if (e instanceof (js__$Boot_HaxeError().default)) e = e.val;
						if( (js_Boot().default).__instanceof(e,(haxe_io_Eof().default)) ) {
							return (kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult().default).NotFound;
						} else throw(e);
					}
					if(crc == goal) {
						var end = this.inputPosition;
						this.setInputOffset(seekFunc,retryLoc - 1);
						return (kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult().default).Found(end,(header[5] & 4) != 0);
					}
				}
			}
		} catch( e1 ) {
			if (e1 instanceof (js__$Boot_HaxeError().default)) e1 = e1.val;
			if( (js_Boot().default).__instanceof(e1,(haxe_io_Eof().default)) ) {
				return (kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult().default).NotFound;
			} else throw(e1);
		}
	},
	analyzePage: function(seekFunc,h) {
		var z = new (kha_audio2_ogg_vorbis_data_ProbedPage().default)();
		var this1 = new Array(255);
		var packetType = this1;
		z.pageStart = this.inputPosition;
		var pageHeader = this.read(27);
		(kha_audio2_ogg_vorbis_VorbisTools().default).assert(pageHeader[0] == 79 && pageHeader[1] == 103 && pageHeader[2] == 103 && pageHeader[3] == 83,{ fileName : "VorbisDecodeState.hx", lineNumber : 660, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "analyzePage"});
		var lacing = this.read(pageHeader[26]);
		var len = 0;
		var _g1 = 0;
		var _g = pageHeader[26];
		while(_g1 < _g) {
			var i = _g1++;
			len += lacing[i];
		}
		z.pageEnd = z.pageStart + 27 + pageHeader[26] + len;
		z.lastDecodedSample = pageHeader[6] + (pageHeader[7] << 8) + (pageHeader[8] << 16) + (pageHeader[9] << 16);
		if((pageHeader[5] & 4) != 0) {
			z.firstDecodedSample = null;
			this.setInputOffset(seekFunc,z.pageStart);
			return z;
		}
		var numPacket = 0;
		var packetStart = (pageHeader[5] & 1) == 0;
		var modeCount = h.modes.length;
		var _g11 = 0;
		var _g2 = pageHeader[26];
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(packetStart) {
				if(lacing[i1] == 0) {
					this.setInputOffset(seekFunc,z.pageStart);
					return null;
				}
				var n = this.readByte();
				if((n & 1) != 0) {
					this.setInputOffset(seekFunc,z.pageStart);
					return null;
				}
				n >>= 1;
				var b = (kha_audio2_ogg_tools_MathTools().default).ilog(modeCount - 1);
				n &= (1 << b) - 1;
				if(n >= modeCount) {
					this.setInputOffset(seekFunc,z.pageStart);
					return null;
				}
				packetType[numPacket++] = h.modes[n].blockflag;
				this.skip(lacing[i1] - 1);
			} else {
				this.skip(lacing[i1]);
			}
			packetStart = lacing[i1] < 255;
		}
		var samples = 0;
		if(numPacket > 1) {
			samples += packetType[numPacket - 1] ? h.blocksize1 : h.blocksize0;
		}
		var i2 = numPacket - 2;
		while(i2 >= 1) {
			--i2;
			if(packetType[i2]) {
				if(packetType[i2 + 1]) {
					samples += h.blocksize1 >> 1;
				} else {
					samples += (h.blocksize1 - h.blocksize0 >> 2) + (h.blocksize0 >> 1);
				}
			} else {
				samples += h.blocksize0 >> 1;
			}
			--i2;
		}
		z.firstDecodedSample = z.lastDecodedSample - samples;
		this.setInputOffset(seekFunc,z.pageStart);
		return z;
	},
	decodeScalarRaw: function(c) {
		this.prepHuffman();
		(kha_audio2_ogg_vorbis_VorbisTools().default).assert(c.sortedCodewords != null || c.codewords != null,{ fileName : "VorbisDecodeState.hx", lineNumber : 787, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "decodeScalarRaw"});
		var codewordLengths = c.codewordLengths;
		var codewords = c.codewords;
		var sortedCodewords = c.sortedCodewords;
		if(c.entries > 8 ? sortedCodewords != null : codewords != null) {
			var code = (kha_audio2_ogg_vorbis_VorbisTools().default).bitReverse(this.acc);
			var x = 0;
			var n = c.sortedEntries;
			while(n > 1) {
				var m = x + (n >> 1);
				if((_$UInt_UInt_$Impl_$().default).gte(code,sortedCodewords[m])) {
					x = m;
					n -= n >> 1;
				} else {
					n >>= 1;
				}
			}
			if(!c.sparse) {
				x = c.sortedValues[x];
			}
			var len = codewordLengths[x];
			if(this.validBits >= len) {
				this.acc = this.acc >>> len;
				this.validBits -= len;
				return x;
			}
			this.validBits = 0;
			return -1;
		}
		(kha_audio2_ogg_vorbis_VorbisTools().default).assert(!c.sparse,{ fileName : "VorbisDecodeState.hx", lineNumber : 829, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "decodeScalarRaw"});
		var _g1 = 0;
		var _g = c.entries;
		while(_g1 < _g) {
			var i = _g1++;
			var cl = codewordLengths[i];
			if(cl == 255) {
				continue;
			}
			if(codewords[i] == (this.acc & (1 << cl) - 1)) {
				if(this.validBits >= cl) {
					this.acc = this.acc >>> cl;
					this.validBits -= cl;
					return i;
				}
				this.validBits = 0;
				return -1;
			}
		}
		this.error = new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_STREAM,null,{ fileName : "VorbisDecodeState.hx", lineNumber : 846, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "decodeScalarRaw"});
		this.validBits = 0;
		return -1;
	}
};
VorbisDecodeState.prototype.__class__ = VorbisDecodeState.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.VorbisDecodeState"] = VorbisDecodeState;

// Init



// Statics


VorbisDecodeState.INVALID_BITS = -1

// Export

exports.default = VorbisDecodeState;