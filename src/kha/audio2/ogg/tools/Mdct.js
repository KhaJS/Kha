// Class: kha.audio2.ogg.tools.Mdct

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function kha_audio2_ogg_tools_MathTools() {return require("./../../../../kha/audio2/ogg/tools/MathTools");}

// Constructor

var Mdct = function(){}

// Meta

Mdct.__name__ = ["kha","audio2","ogg","tools","Mdct"];
Mdct.prototype = {
	
};
Mdct.prototype.__class__ = Mdct.prototype.constructor = $hxClasses["kha.audio2.ogg.tools.Mdct"] = Mdct;

// Init



// Statics

Mdct.inverseTransform = function(buffer,n,a,b,c,bitReverse) {
	var n2 = n >> 1;
	var n4 = n >> 2;
	var n8 = n >> 3;
	var this1 = new Array(n2);
	var buf2 = this1;
	var dOffset = n2 - 2;
	var aaOffset = 0;
	var eOffset = 0;
	var eStopOffset = n2;
	while(eOffset != eStopOffset) {
		buf2[dOffset + 1] = buffer[eOffset] * a[aaOffset] - buffer[eOffset + 2] * a[aaOffset + 1];
		buf2[dOffset] = buffer[eOffset] * a[aaOffset + 1] + buffer[eOffset + 2] * a[aaOffset];
		dOffset -= 2;
		aaOffset += 2;
		eOffset += 4;
	}
	eOffset = n2 - 3;
	while(dOffset >= 0) {
		buf2[dOffset + 1] = -buffer[eOffset + 2] * a[aaOffset] - -buffer[eOffset] * a[aaOffset + 1];
		buf2[dOffset] = -buffer[eOffset + 2] * a[aaOffset + 1] + -buffer[eOffset] * a[aaOffset];
		dOffset -= 2;
		aaOffset += 2;
		eOffset -= 4;
	}
	var u = buffer;
	var v = buf2;
	var aaOffset1 = n2 - 8;
	var eOffset0 = n4;
	var eOffset1 = 0;
	var dOffset0 = n4;
	var dOffset1 = 0;
	while(aaOffset1 >= 0) {
		var v41_21 = v[eOffset0 + 1] - v[eOffset1 + 1];
		var v40_20 = v[eOffset0] - v[eOffset1];
		u[dOffset0 + 1] = v[eOffset0 + 1] + v[eOffset1 + 1];
		u[dOffset0] = v[eOffset0] + v[eOffset1];
		u[dOffset1 + 1] = v41_21 * a[aaOffset1 + 4] - v40_20 * a[aaOffset1 + 5];
		u[dOffset1] = v40_20 * a[aaOffset1 + 4] + v41_21 * a[aaOffset1 + 5];
		v41_21 = v[eOffset0 + 3] - v[eOffset1 + 3];
		v40_20 = v[eOffset0 + 2] - v[eOffset1 + 2];
		u[dOffset0 + 3] = v[eOffset0 + 3] + v[eOffset1 + 3];
		u[dOffset0 + 2] = v[eOffset0 + 2] + v[eOffset1 + 2];
		u[dOffset1 + 3] = v41_21 * a[aaOffset1] - v40_20 * a[aaOffset1 + 1];
		u[dOffset1 + 2] = v40_20 * a[aaOffset1] + v41_21 * a[aaOffset1 + 1];
		aaOffset1 -= 8;
		dOffset0 += 4;
		dOffset1 += 4;
		eOffset0 += 4;
		eOffset1 += 4;
	}
	var ld = (kha_audio2_ogg_tools_MathTools().default).ilog(n) - 1;
	Mdct.step3Iter0Loop(n >> 4,u,n2 - 1 - n4 * 0,-(n >> 3),a);
	Mdct.step3Iter0Loop(n >> 4,u,n2 - 1 - n4,-(n >> 3),a);
	Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8 * 0,-(n >> 4),a,16);
	Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8,-(n >> 4),a,16);
	Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8 * 2,-(n >> 4),a,16);
	Mdct.step3InnerRLoop(n >> 5,u,n2 - 1 - n8 * 3,-(n >> 4),a,16);
	var _g1 = 2;
	var _g = ld - 3 >> 1;
	while(_g1 < _g) {
		var l = _g1++;
		var k0 = n >> l + 2;
		var k0_2 = k0 >> 1;
		var lim = 1 << l + 1;
		var _g3 = 0;
		var _g2 = lim;
		while(_g3 < _g2) {
			var i = _g3++;
			Mdct.step3InnerRLoop(n >> l + 4,u,n2 - 1 - k0 * i,-k0_2,a,1 << l + 3);
		}
	}
	var _g11 = ld - 3 >> 1;
	var _g4 = ld - 6;
	while(_g11 < _g4) {
		var l1 = _g11++;
		var k01 = n >> l1 + 2;
		var k1 = 1 << l1 + 3;
		var k0_21 = k01 >> 1;
		var rlim = n >> l1 + 6;
		var lim1 = 1 << l1 + 1;
		var aOffset = 0;
		var i_off = n2 - 1;
		var r = rlim + 1;
		while(--r > 0) {
			Mdct.step3InnerSLoop(lim1,u,i_off,-k0_21,a,aOffset,k1,k01);
			aOffset += k1 * 4;
			i_off -= 8;
		}
	}
	Mdct.step3InnerSLoopLd654(n >> 5,u,n2 - 1,a,n);
	var brOffset = 0;
	var dOffset01 = n4 - 4;
	var dOffset11 = n2 - 4;
	while(dOffset01 >= 0) {
		var k4 = bitReverse[brOffset];
		v[dOffset11 + 3] = u[k4];
		v[dOffset11 + 2] = u[k4 + 1];
		v[dOffset01 + 3] = u[k4 + 2];
		v[dOffset01 + 2] = u[k4 + 3];
		k4 = bitReverse[brOffset + 1];
		v[dOffset11 + 1] = u[k4];
		v[dOffset11] = u[k4 + 1];
		v[dOffset01 + 1] = u[k4 + 2];
		v[dOffset01] = u[k4 + 3];
		dOffset01 -= 4;
		dOffset11 -= 4;
		brOffset += 2;
	}
	var cOffset = 0;
	var dOffset2 = 0;
	var eOffset2 = n2 - 4;
	while(dOffset2 < eOffset2) {
		var a02 = v[dOffset2] - v[eOffset2 + 2];
		var a11 = v[dOffset2 + 1] + v[eOffset2 + 3];
		var b0 = c[cOffset + 1] * a02 + c[cOffset] * a11;
		var b1 = c[cOffset + 1] * a11 - c[cOffset] * a02;
		var b2 = v[dOffset2] + v[eOffset2 + 2];
		var b3 = v[dOffset2 + 1] - v[eOffset2 + 3];
		v[dOffset2] = b2 + b0;
		v[dOffset2 + 1] = b3 + b1;
		v[eOffset2 + 2] = b2 - b0;
		v[eOffset2 + 3] = b1 - b3;
		a02 = v[dOffset2 + 2] - v[eOffset2];
		a11 = v[dOffset2 + 3] + v[eOffset2 + 1];
		b0 = c[cOffset + 3] * a02 + c[cOffset + 2] * a11;
		b1 = c[cOffset + 3] * a11 - c[cOffset + 2] * a02;
		b2 = v[dOffset2 + 2] + v[eOffset2];
		b3 = v[dOffset2 + 3] - v[eOffset2 + 1];
		v[dOffset2 + 2] = b2 + b0;
		v[dOffset2 + 3] = b3 + b1;
		v[eOffset2] = b2 - b0;
		v[eOffset2 + 1] = b1 - b3;
		cOffset += 4;
		dOffset2 += 4;
		eOffset2 -= 4;
	}
	var bOffset = n2 - 8;
	var eOffset3 = n2 - 8;
	var dOffset02 = 0;
	var dOffset12 = n2 - 4;
	var dOffset21 = n2;
	var dOffset3 = n - 4;
	while(eOffset3 >= 0) {
		var p3 = buf2[eOffset3 + 6] * b[bOffset + 7] - buf2[eOffset3 + 7] * b[bOffset + 6];
		var p2 = -buf2[eOffset3 + 6] * b[bOffset + 6] - buf2[eOffset3 + 7] * b[bOffset + 7];
		buffer[dOffset02] = p3;
		buffer[dOffset12 + 3] = -p3;
		buffer[dOffset21] = p2;
		buffer[dOffset3 + 3] = p2;
		var p1 = buf2[eOffset3 + 4] * b[bOffset + 5] - buf2[eOffset3 + 5] * b[bOffset + 4];
		var p0 = -buf2[eOffset3 + 4] * b[bOffset + 4] - buf2[eOffset3 + 5] * b[bOffset + 5];
		buffer[dOffset02 + 1] = p1;
		buffer[dOffset12 + 2] = -p1;
		buffer[dOffset21 + 1] = p0;
		buffer[dOffset3 + 2] = p0;
		p3 = buf2[eOffset3 + 2] * b[bOffset + 3] - buf2[eOffset3 + 3] * b[bOffset + 2];
		p2 = -buf2[eOffset3 + 2] * b[bOffset + 2] - buf2[eOffset3 + 3] * b[bOffset + 3];
		buffer[dOffset02 + 2] = p3;
		buffer[dOffset12 + 1] = -p3;
		buffer[dOffset21 + 2] = p2;
		buffer[dOffset3 + 1] = p2;
		p1 = buf2[eOffset3] * b[bOffset + 1] - buf2[eOffset3 + 1] * b[bOffset];
		p0 = -buf2[eOffset3] * b[bOffset] - buf2[eOffset3 + 1] * b[bOffset + 1];
		buffer[dOffset02 + 3] = p1;
		buffer[dOffset12] = -p1;
		buffer[dOffset21 + 3] = p0;
		buffer[dOffset3] = p0;
		bOffset -= 8;
		eOffset3 -= 8;
		dOffset02 += 4;
		dOffset21 += 4;
		dOffset12 -= 4;
		dOffset3 -= 4;
	}
}
Mdct.step3Iter0Loop = function(n,e,i_off,k_off,a) {
	var eeOffset0 = i_off;
	var eeOffset2 = i_off + k_off;
	var aOffset = 0;
	var i = (n >> 2) + 1;
	while(--i > 0) {
		var k00_20 = e[eeOffset0] - e[eeOffset2];
		var k01_21 = e[eeOffset0 + -1] - e[eeOffset2 + -1];
		var _g = eeOffset0;
		var _g1 = e;
		_g1[_g] = _g1[_g] + e[eeOffset2];
		var _g2 = eeOffset0 + -1;
		var _g11 = e;
		_g11[_g2] = _g11[_g2] + e[eeOffset2 + -1];
		e[eeOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -1] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		k00_20 = e[eeOffset0 + -2] - e[eeOffset2 + -2];
		k01_21 = e[eeOffset0 + -3] - e[eeOffset2 + -3];
		var _g3 = eeOffset0 + -2;
		var _g12 = e;
		_g12[_g3] = _g12[_g3] + e[eeOffset2 + -2];
		var _g4 = eeOffset0 + -3;
		var _g13 = e;
		_g13[_g4] = _g13[_g4] + e[eeOffset2 + -3];
		e[eeOffset2 + -2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -3] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		k00_20 = e[eeOffset0 + -4] - e[eeOffset2 + -4];
		k01_21 = e[eeOffset0 + -5] - e[eeOffset2 + -5];
		var _g5 = eeOffset0 + -4;
		var _g14 = e;
		_g14[_g5] = _g14[_g5] + e[eeOffset2 + -4];
		var _g6 = eeOffset0 + -5;
		var _g15 = e;
		_g15[_g6] = _g15[_g6] + e[eeOffset2 + -5];
		e[eeOffset2 + -4] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -5] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		k00_20 = e[eeOffset0 + -6] - e[eeOffset2 + -6];
		k01_21 = e[eeOffset0 + -7] - e[eeOffset2 + -7];
		var _g7 = eeOffset0 + -6;
		var _g16 = e;
		_g16[_g7] = _g16[_g7] + e[eeOffset2 + -6];
		var _g8 = eeOffset0 + -7;
		var _g17 = e;
		_g17[_g8] = _g17[_g8] + e[eeOffset2 + -7];
		e[eeOffset2 + -6] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eeOffset2 + -7] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += 8;
		eeOffset0 -= 8;
		eeOffset2 -= 8;
	}
}
Mdct.step3InnerRLoop = function(lim,e,d0,k_off,a,k1) {
	var aOffset = 0;
	var eOffset0 = d0;
	var eOffset2 = d0 + k_off;
	var i = (lim >> 2) + 1;
	while(--i > 0) {
		var k00_20 = e[eOffset0] - e[eOffset2];
		var k01_21 = e[eOffset0 + -1] - e[eOffset2 + -1];
		var _g = eOffset0;
		var _g1 = e;
		_g1[_g] = _g1[_g] + e[eOffset2];
		var _g2 = eOffset0 + -1;
		var _g11 = e;
		_g11[_g2] = _g11[_g2] + e[eOffset2 + -1];
		e[eOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -1] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += k1;
		k00_20 = e[eOffset0 + -2] - e[eOffset2 + -2];
		k01_21 = e[eOffset0 + -3] - e[eOffset2 + -3];
		var _g3 = eOffset0 + -2;
		var _g12 = e;
		_g12[_g3] = _g12[_g3] + e[eOffset2 + -2];
		var _g4 = eOffset0 + -3;
		var _g13 = e;
		_g13[_g4] = _g13[_g4] + e[eOffset2 + -3];
		e[eOffset2 + -2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -3] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += k1;
		k00_20 = e[eOffset0 + -4] - e[eOffset2 + -4];
		k01_21 = e[eOffset0 + -5] - e[eOffset2 + -5];
		var _g5 = eOffset0 + -4;
		var _g14 = e;
		_g14[_g5] = _g14[_g5] + e[eOffset2 + -4];
		var _g6 = eOffset0 + -5;
		var _g15 = e;
		_g15[_g6] = _g15[_g6] + e[eOffset2 + -5];
		e[eOffset2 + -4] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -5] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		aOffset += k1;
		k00_20 = e[eOffset0 + -6] - e[eOffset2 + -6];
		k01_21 = e[eOffset0 + -7] - e[eOffset2 + -7];
		var _g7 = eOffset0 + -6;
		var _g16 = e;
		_g16[_g7] = _g16[_g7] + e[eOffset2 + -6];
		var _g8 = eOffset0 + -7;
		var _g17 = e;
		_g17[_g8] = _g17[_g8] + e[eOffset2 + -7];
		e[eOffset2 + -6] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
		e[eOffset2 + -7] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
		eOffset0 -= 8;
		eOffset2 -= 8;
		aOffset += k1;
	}
}
Mdct.step3InnerSLoop = function(n,e,i_off,k_off,a,aOffset0,aOffset1,k0) {
	var A0 = a[aOffset0];
	var A1 = a[aOffset0 + 1];
	var A2 = a[aOffset0 + aOffset1];
	var A3 = a[aOffset0 + aOffset1 + 1];
	var A4 = a[aOffset0 + aOffset1 * 2];
	var A5 = a[aOffset0 + aOffset1 * 2 + 1];
	var A6 = a[aOffset0 + aOffset1 * 3];
	var A7 = a[aOffset0 + aOffset1 * 3 + 1];
	var eeOffset0 = i_off;
	var eeOffset2 = i_off + k_off;
	var i = n + 1;
	while(--i > 0) {
		var k00 = e[eeOffset0] - e[eeOffset2];
		var k11 = e[eeOffset0 + -1] - e[eeOffset2 + -1];
		e[eeOffset0] = e[eeOffset0] + e[eeOffset2];
		e[eeOffset0 + -1] = e[eeOffset0 + -1] + e[eeOffset2 + -1];
		e[eeOffset2] = k00 * A0 - k11 * A1;
		e[eeOffset2 + -1] = k11 * A0 + k00 * A1;
		k00 = e[eeOffset0 + -2] - e[eeOffset2 + -2];
		k11 = e[eeOffset0 + -3] - e[eeOffset2 + -3];
		e[eeOffset0 + -2] = e[eeOffset0 + -2] + e[eeOffset2 + -2];
		e[eeOffset0 + -3] = e[eeOffset0 + -3] + e[eeOffset2 + -3];
		e[eeOffset2 + -2] = k00 * A2 - k11 * A3;
		e[eeOffset2 + -3] = k11 * A2 + k00 * A3;
		k00 = e[eeOffset0 + -4] - e[eeOffset2 + -4];
		k11 = e[eeOffset0 + -5] - e[eeOffset2 + -5];
		e[eeOffset0 + -4] = e[eeOffset0 + -4] + e[eeOffset2 + -4];
		e[eeOffset0 + -5] = e[eeOffset0 + -5] + e[eeOffset2 + -5];
		e[eeOffset2 + -4] = k00 * A4 - k11 * A5;
		e[eeOffset2 + -5] = k11 * A4 + k00 * A5;
		k00 = e[eeOffset0 + -6] - e[eeOffset2 + -6];
		k11 = e[eeOffset0 + -7] - e[eeOffset2 + -7];
		e[eeOffset0 + -6] = e[eeOffset0 + -6] + e[eeOffset2 + -6];
		e[eeOffset0 + -7] = e[eeOffset0 + -7] + e[eeOffset2 + -7];
		e[eeOffset2 + -6] = k00 * A6 - k11 * A7;
		e[eeOffset2 + -7] = k11 * A6 + k00 * A7;
		eeOffset0 -= k0;
		eeOffset2 -= k0;
	}
}
Mdct.iter54 = function(e,zOffset) {
	var t0 = e[zOffset];
	var t1 = e[zOffset + -4];
	var k00 = t0 - t1;
	var y0 = t0 + t1;
	t0 = e[zOffset + -2];
	t1 = e[zOffset + -6];
	var y2 = t0 + t1;
	var k22 = t0 - t1;
	e[zOffset] = y0 + y2;
	e[zOffset + -2] = y0 - y2;
	var k33 = e[zOffset + -3] - e[zOffset + -7];
	e[zOffset + -4] = k00 + k33;
	e[zOffset + -6] = k00 - k33;
	t0 = e[zOffset + -1];
	t1 = e[zOffset + -5];
	var k11 = t0 - t1;
	var y1 = t0 + t1;
	var y3 = e[zOffset + -3] + e[zOffset + -7];
	e[zOffset + -1] = y1 + y3;
	e[zOffset + -3] = y1 - y3;
	e[zOffset + -5] = k11 - k22;
	e[zOffset + -7] = k11 + k22;
}
Mdct.step3InnerSLoopLd654 = function(n,e,i_off,a,baseN) {
	var A2 = a[baseN >> 3];
	var zOffset = i_off;
	var baseOffset = i_off - 16 * n;
	while(zOffset > baseOffset) {
		var t0 = e[zOffset];
		var t1 = e[zOffset + -8];
		e[zOffset + -8] = t0 - t1;
		e[zOffset] = t0 + t1;
		t0 = e[zOffset + -1];
		t1 = e[zOffset + -9];
		e[zOffset + -9] = t0 - t1;
		e[zOffset + -1] = t0 + t1;
		t0 = e[zOffset + -2];
		t1 = e[zOffset + -10];
		var k00 = t0 - t1;
		e[zOffset + -2] = t0 + t1;
		t0 = e[zOffset + -3];
		t1 = e[zOffset + -11];
		var k11 = t0 - t1;
		e[zOffset + -3] = t0 + t1;
		e[zOffset + -10] = (k00 + k11) * A2;
		e[zOffset + -11] = (k11 - k00) * A2;
		t0 = e[zOffset + -4];
		t1 = e[zOffset + -12];
		k00 = t1 - t0;
		e[zOffset + -4] = t0 + t1;
		t0 = e[zOffset + -5];
		t1 = e[zOffset + -13];
		k11 = t0 - t1;
		e[zOffset + -5] = t0 + t1;
		e[zOffset + -12] = k11;
		e[zOffset + -13] = k00;
		t0 = e[zOffset + -6];
		t1 = e[zOffset + -14];
		k00 = t1 - t0;
		e[zOffset + -6] = t0 + t1;
		t0 = e[zOffset + -7];
		t1 = e[zOffset + -15];
		k11 = t0 - t1;
		e[zOffset + -7] = t0 + t1;
		e[zOffset + -14] = (k00 + k11) * A2;
		e[zOffset + -15] = (k00 - k11) * A2;
		Mdct.iter54(e,zOffset);
		Mdct.iter54(e,zOffset - 8);
		zOffset -= 16;
	}
}


// Export

exports.default = Mdct;