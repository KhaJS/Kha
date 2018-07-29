// Class: kha.Kravur

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function kha_Resource() {return require("./../kha/Resource");}
function kha_graphics2_Graphics() {return require("./../kha/graphics2/Graphics");}
function kha_KravurImage() {return require("./../kha/KravurImage");}
function kha_graphics2_truetype_Stbtt_$bakedchar() {return require("./../kha/graphics2/truetype/Stbtt_bakedchar");}
function kha_internal_BytesBlob() {return require("./../kha/internal/BytesBlob");}
function kha_graphics2_truetype_StbTruetype() {return require("./../kha/graphics2/truetype/StbTruetype");}
function kha_graphics2_truetype_Stbtt_$fontinfo() {return require("./../kha/graphics2/truetype/Stbtt_fontinfo");}
function Std() {return require("./../Std");}
function haxe_ds_IntMap() {return require("./../haxe/ds/IntMap");}

// Constructor

var Kravur = function(blob) {
	this.images = new (haxe_ds_IntMap().default)();
	this.blob = blob;
}

// Meta

Kravur.__name__ = ["kha","Kravur"];
Kravur.__interfaces__ = [(kha_Resource().default)];
Kravur.prototype = {
	_get: function(fontSize,glyphs) {
		if(glyphs == null) {
			glyphs = (kha_graphics2_Graphics().default).fontGlyphs;
		}
		if(glyphs != this.oldGlyphs) {
			this.oldGlyphs = glyphs;
			(kha_KravurImage().default).gaps = [glyphs[0]];
			var next = (kha_KravurImage().default).gaps[0] + 1;
			var _g1 = 1;
			var _g = glyphs.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(glyphs[i] != next) {
					(kha_KravurImage().default).gaps.push(glyphs[i - 1]);
					(kha_KravurImage().default).gaps.push(glyphs[i]);
					next = glyphs[i] + 1;
				} else {
					++next;
				}
			}
			(kha_KravurImage().default).gaps.push(glyphs[glyphs.length - 1]);
		}
		var imageIndex = glyphs == null ? fontSize : fontSize * 10000 + glyphs.length;
		if(!this.images.exists(imageIndex)) {
			var width = 64;
			var height = 32;
			var length = glyphs.length;
			var this1 = new Array(length);
			var baked = this1;
			var _g11 = 0;
			var _g2 = baked.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				baked[i1] = new (kha_graphics2_truetype_Stbtt_$bakedchar().default)();
			}
			var pixels = null;
			var status = -1;
			while(status <= 0) {
				if(height < width) {
					height *= 2;
				} else {
					width *= 2;
				}
				pixels = (kha_internal_BytesBlob().default).alloc(width * height);
				status = (kha_graphics2_truetype_StbTruetype().default).stbtt_BakeFontBitmap(this.blob,0,fontSize,pixels,width,height,glyphs,baked);
			}
			var info = new (kha_graphics2_truetype_Stbtt_$fontinfo().default)();
			(kha_graphics2_truetype_StbTruetype().default).stbtt_InitFont(info,this.blob,0);
			var metrics = (kha_graphics2_truetype_StbTruetype().default).stbtt_GetFontVMetrics(info);
			var scale = (kha_graphics2_truetype_StbTruetype().default).stbtt_ScaleForPixelHeight(info,fontSize);
			var ascent = Math.round(metrics.ascent * scale);
			var descent = Math.round(metrics.descent * scale);
			var lineGap = Math.round(metrics.lineGap * scale);
			var image = new (kha_KravurImage().default)((Std().default)["int"](fontSize),ascent,descent,lineGap,width,height,baked,pixels);
			this.images.set(imageIndex,image);
			return image;
		}
		return this.images.get(imageIndex);
	},
	height: function(fontSize) {
		return this._get(fontSize).getHeight();
	},
	width: function(fontSize,str) {
		return this._get(fontSize).stringWidth(str);
	},
	widthOfCharacters: function(fontSize,characters,start,length) {
		return this._get(fontSize).charactersWidth(characters,start,length);
	},
	baseline: function(fontSize) {
		return this._get(fontSize).getBaselinePosition();
	},
	unload: function() {
		this.blob = null;
		this.images = null;
	}
};
Kravur.prototype.__class__ = Kravur.prototype.constructor = $hxClasses["kha.Kravur"] = Kravur;

// Init



// Statics

Kravur.fromBytes = function(bytes) {
	return new Kravur((kha_internal_BytesBlob().default).fromBytes(bytes));
}


// Export

exports.default = Kravur;