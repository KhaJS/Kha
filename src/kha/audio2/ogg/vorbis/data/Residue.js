// Class: kha.audio2.ogg.vorbis.data.Residue

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $import = require("./../../../../../import_stub").default;
function Std() {return require("./../../../../../Std");}
function _$UInt_UInt_$Impl_$() {return require("./../../../../../_UInt/UInt_Impl_");}
function js__$Boot_HaxeError() {return require("./../../../../../js/_Boot/HaxeError");}
function kha_audio2_ogg_vorbis_data_ReaderError() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderError");}
function kha_audio2_ogg_vorbis_data_ReaderErrorType() {return require("./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType");}

// Constructor

var Residue = function() {
}

// Meta

Residue.__name__ = ["kha","audio2","ogg","vorbis","data","Residue"];
Residue.prototype = {
	decode: function(decodeState,header,residueBuffers,ch,n,doNotDecode,channelBuffers) {
		var codebooks = header.codebooks;
		var classwords = codebooks[this.classbook].dimensions;
		var nRead = this.end - this.begin;
		var partSize = this.partSize;
		var partRead = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat(nRead) / (_$UInt_UInt_$Impl_$().default).toFloat(partSize));
		var length = header.channel * partRead + 1;
		var this1 = new Array(length);
		var classifications = this1;
		var _g1 = 0;
		var _g = ch;
		while(_g1 < _g) {
			var i = _g1++;
			if(!doNotDecode[i]) {
				var buffer = residueBuffers[i];
				var _g3 = 0;
				var _g2 = buffer.length;
				while(_g3 < _g2) {
					var j = _g3++;
					buffer[j] = 0;
				}
			}
		}
		if(this.type == 2 && ch != 1) {
			var _g11 = 0;
			var _g4 = ch;
			while(_g11 < _g4) {
				var j1 = _g11++;
				if(!doNotDecode[j1]) {
					break;
				} else if(j1 == ch - 1) {
					return;
				}
			}
			var _g5 = 0;
			while(_g5 < 8) {
				var pass = _g5++;
				var pcount = 0;
				var classSet = 0;
				if(ch == 2) {
					while(pcount < partRead) {
						var z = this.begin + pcount * partSize;
						var cInter = z & 1;
						var pInter = z >>> 1;
						if(pass == 0) {
							var c = codebooks[this.classbook];
							var q = decodeState.decode(c);
							if(q == -1) {
								return;
							}
							var i1 = classwords;
							while(--i1 >= 0) {
								classifications[i1 + pcount] = q % this.classifications;
								q = (Std().default)["int"](q / this.classifications);
							}
						}
						var _g21 = 0;
						var _g12 = classwords;
						while(_g21 < _g12) {
							var i2 = _g21++;
							if(pcount >= partRead) {
								break;
							}
							var z1 = this.begin + pcount * partSize;
							var c1 = classifications[pcount];
							var b = this.residueBooks[c1][pass];
							if(b >= 0) {
								var book = codebooks[b];
								var result = book.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter,pInter,n,partSize);
								if(result == null) {
									return;
								} else {
									cInter = result.cInter;
									pInter = result.pInter;
								}
							} else {
								z1 = z1 + partSize;
								cInter = z1 & 1;
								pInter = z1 >>> 1;
							}
							++pcount;
						}
					}
				} else if(ch == 1) {
					while(pcount < partRead) {
						var z2 = this.begin + pcount * partSize;
						var cInter1 = 0;
						var pInter1 = z2;
						if(pass == 0) {
							var c2 = codebooks[this.classbook];
							var q1 = decodeState.decode(c2);
							if(q1 == -1) {
								return;
							}
							var i3 = classwords;
							while(--i3 >= 0) {
								classifications[i3 + pcount] = q1 % this.classifications;
								q1 = (Std().default)["int"](q1 / this.classifications);
							}
						}
						var _g22 = 0;
						var _g13 = classwords;
						while(_g22 < _g13) {
							var i4 = _g22++;
							if(pcount >= partRead) {
								break;
							}
							var z3 = this.begin + pcount * partSize;
							var b1 = this.residueBooks[classifications[pcount]][pass];
							if(b1 >= 0) {
								var book1 = codebooks[b1];
								var result1 = book1.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter1,pInter1,n,partSize);
								if(result1 == null) {
									return;
								} else {
									cInter1 = result1.cInter;
									pInter1 = result1.pInter;
								}
							} else {
								z3 = z3 + partSize;
								cInter1 = 0;
								pInter1 = z3;
							}
							++pcount;
						}
					}
				} else {
					while(pcount < partRead) {
						var z4 = this.begin + pcount * partSize;
						var cInter2 = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat(z4) % (_$UInt_UInt_$Impl_$().default).toFloat(ch));
						var pInter2 = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat(z4) / (_$UInt_UInt_$Impl_$().default).toFloat(ch));
						if(pass == 0) {
							var c3 = codebooks[this.classbook];
							var q2 = decodeState.decode(c3);
							if(q2 == -1) {
								return;
							}
							var i5 = classwords;
							while(--i5 >= 0) {
								classifications[i5 + pcount] = q2 % this.classifications;
								q2 = (Std().default)["int"](q2 / this.classifications);
							}
						}
						var _g23 = 0;
						var _g14 = classwords;
						while(_g23 < _g14) {
							var i6 = _g23++;
							if(pcount >= partRead) {
								break;
							}
							var z5 = this.begin + pcount * partSize;
							var b2 = this.residueBooks[classifications[pcount]][pass];
							if(b2 >= 0) {
								var book2 = codebooks[b2];
								var result2 = book2.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter2,pInter2,n,partSize);
								if(result2 == null) {
									return;
								} else {
									cInter2 = result2.cInter;
									pInter2 = result2.pInter;
								}
							} else {
								z5 = z5 + partSize;
								cInter2 = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat(z5) % (_$UInt_UInt_$Impl_$().default).toFloat(ch));
								pInter2 = (Std().default)["int"]((_$UInt_UInt_$Impl_$().default).toFloat(z5) / (_$UInt_UInt_$Impl_$().default).toFloat(ch));
							}
							++pcount;
						}
					}
				}
			}
			return;
		}
		var _g6 = 0;
		while(_g6 < 8) {
			var pass1 = _g6++;
			var pcount1 = 0;
			var classSet1 = 0;
			while(pcount1 < partRead) {
				if(pass1 == 0) {
					var _g24 = 0;
					var _g15 = ch;
					while(_g24 < _g15) {
						var j2 = _g24++;
						if(!doNotDecode[j2]) {
							var c4 = codebooks[this.classbook];
							var temp = decodeState.decode(c4);
							if(temp == -1) {
								return;
							}
							var i7 = classwords;
							while(--i7 >= 0) {
								classifications[j2 * partRead + i7 + pcount1] = temp % this.classifications;
								temp = (Std().default)["int"](temp / this.classifications);
							}
						}
					}
				}
				var _g25 = 0;
				var _g16 = classwords;
				while(_g25 < _g16) {
					var i8 = _g25++;
					if(pcount1 >= partRead) {
						break;
					}
					var _g41 = 0;
					var _g31 = ch;
					while(_g41 < _g31) {
						var j3 = _g41++;
						if(!doNotDecode[j3]) {
							var c5 = classifications[j3 * partRead + pcount1];
							var b3 = this.residueBooks[c5][pass1];
							if(b3 >= 0) {
								var target = residueBuffers[j3];
								var offset = this.begin + pcount1 * partSize;
								var n1 = partSize;
								var book3 = codebooks[b3];
								if(!book3.residueDecode(decodeState,target,offset,n1,this.type)) {
									return;
								}
							}
						}
					}
					++pcount1;
				}
			}
		}
	}
};
Residue.prototype.__class__ = Residue.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.Residue"] = Residue;

// Init



// Statics

Residue.read = function(decodeState,codebooks) {
	var r = new Residue();
	r.type = decodeState.readBits(16);
	if(r.type > 2) {
		throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Residue.hx", lineNumber : 29, className : "kha.audio2.ogg.vorbis.data.Residue", methodName : "read"}));
	}
	var this1 = new Array(64);
	var residueCascade = this1;
	r.begin = decodeState.readBits(24);
	r.end = decodeState.readBits(24);
	r.partSize = decodeState.readBits(24) + 1;
	var classifications = r.classifications = decodeState.readBits(6) + 1;
	r.classbook = decodeState.readBits(8);
	var _g1 = 0;
	var _g = r.classifications;
	while(_g1 < _g) {
		var j = _g1++;
		var highBits = 0;
		var lowBits = decodeState.readBits(3);
		if(decodeState.readBits(1) != 0) {
			highBits = decodeState.readBits(5);
		}
		residueCascade[j] = highBits * 8 + lowBits;
	}
	var length = r.classifications;
	var this2 = new Array(length);
	r.residueBooks = this2;
	var _g11 = 0;
	var _g2 = r.classifications;
	while(_g11 < _g2) {
		var j1 = _g11++;
		var this3 = r.residueBooks;
		var this4 = new Array(8);
		this3[j1] = this4;
		var _g21 = 0;
		while(_g21 < 8) {
			var k = _g21++;
			if((residueCascade[j1] & 1 << k) != 0) {
				r.residueBooks[j1][k] = decodeState.readBits(8);
				if(r.residueBooks[j1][k] >= codebooks.length) {
					throw new (js__$Boot_HaxeError().default)(new (kha_audio2_ogg_vorbis_data_ReaderError().default)((kha_audio2_ogg_vorbis_data_ReaderErrorType().default).INVALID_SETUP,null,{ fileName : "Residue.hx", lineNumber : 55, className : "kha.audio2.ogg.vorbis.data.Residue", methodName : "read"}));
				}
			} else {
				r.residueBooks[j1][k] = -1;
			}
		}
	}
	var el = codebooks[r.classbook].entries;
	var classwords = codebooks[r.classbook].dimensions;
	var this5 = new Array(el);
	r.classdata = this5;
	var _g12 = 0;
	var _g3 = el;
	while(_g12 < _g3) {
		var j2 = _g12++;
		var temp = j2;
		var k1 = classwords;
		var this6 = r.classdata;
		var this7 = new Array(classwords);
		var cd = this6[j2] = this7;
		while(--k1 >= 0) {
			cd[k1] = temp % classifications;
			temp = (Std().default)["int"](temp / classifications);
		}
	}
	return r;
}


// Export

exports.default = Residue;