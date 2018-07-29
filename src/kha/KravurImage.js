// Class: kha.KravurImage

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function Std() {return require("./../Std");}
function HxOverrides() {return require("./../HxOverrides");}
function kha_Image() {return require("./../kha/Image");}
function kha_graphics4_TextureFormat() {return require("./../kha/graphics4/TextureFormat");}

// Constructor

var KravurImage = function(size,ascent,descent,lineGap,width,height,chars,pixels) {
	this.mySize = size;
	this.width = width;
	this.height = height;
	this.chars = chars;
	this.baseline = ascent;
	var _g = 0;
	while(_g < chars.length) {
		var $char = chars[_g];
		++_g;
		$char.yoff += this.baseline;
	}
	this.texture = (kha_Image().default).create(width,height,(kha_graphics4_TextureFormat().default).L8);
	var bytes = this.texture.lock();
	var pos = 0;
	var _g1 = 0;
	var _g2 = height;
	while(_g1 < _g2) {
		var y = _g1++;
		var _g3 = 0;
		var _g21 = width;
		while(_g3 < _g21) {
			var x = _g3++;
			bytes.set(pos,pixels.readU8(pos));
			++pos;
		}
	}
	this.texture.unlock();
}

// Meta

KravurImage.__name__ = ["kha","KravurImage"];
KravurImage.prototype = {
	getTexture: function() {
		return this.texture;
	},
	getBakedQuad: function(q,char_index,xpos,ypos) {
		if(char_index >= this.chars.length) {
			return null;
		}
		var ipw = 1.0 / this.width;
		var iph = 1.0 / this.height;
		var b = this.chars[char_index];
		if(b == null) {
			return null;
		}
		var round_x = Math.round(xpos + b.xoff);
		var round_y = Math.round(ypos + b.yoff);
		q.x0 = round_x;
		q.y0 = round_y;
		q.x1 = round_x + b.x1 - b.x0;
		q.y1 = round_y + b.y1 - b.y0;
		q.s0 = b.x0 * ipw;
		q.t0 = b.y0 * iph;
		q.s1 = b.x1 * ipw;
		q.t1 = b.y1 * iph;
		q.xadvance = b.xadvance;
		return q;
	},
	getCharWidth: function(charIndex) {
		if(this.chars.length == 0) {
			return 0;
		}
		var offset = KravurImage.gaps[0];
		if(charIndex < offset) {
			return this.chars[0].xadvance;
		}
		var _g1 = 1;
		var _g = (Std().default)["int"](KravurImage.gaps.length / 2);
		while(_g1 < _g) {
			var i = _g1++;
			var prevEnd = KravurImage.gaps[i * 2 - 1];
			var start = KravurImage.gaps[i * 2];
			if(charIndex > start - 1) {
				offset += start - 1 - prevEnd;
			}
		}
		if(charIndex - offset >= this.chars.length) {
			return this.chars[0].xadvance;
		}
		return this.chars[charIndex - offset].xadvance;
	},
	getHeight: function() {
		return this.mySize;
	},
	stringWidth: function(string) {
		var str = new String(string);
		var width = 0;
		var _g1 = 0;
		var _g = str.length;
		while(_g1 < _g) {
			var c = _g1++;
			width += this.getCharWidth((HxOverrides().default).cca(str,c));
		}
		return width;
	},
	charactersWidth: function(characters,start,length) {
		var width = 0;
		var _g1 = start;
		var _g = start + length;
		while(_g1 < _g) {
			var i = _g1++;
			width += this.getCharWidth(characters[i]);
		}
		return width;
	},
	getBaselinePosition: function() {
		return this.baseline;
	}
};
KravurImage.prototype.__class__ = KravurImage.prototype.constructor = $hxClasses["kha.KravurImage"] = KravurImage;

// Init



// Statics




// Export

exports.default = KravurImage;