// Class: kha.js.Font

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_Resource() {return require("./../../kha/Resource");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function js_Browser() {return require("./../../js/Browser");}
function js_Boot() {return require("./../../js/Boot");}
function kha_CanvasImage() {return require("./../../kha/CanvasImage");}
function kha_internal_BytesBlob() {return require("./../../kha/internal/BytesBlob");}

// Constructor

var Font = function(blob) {
	this.images = new (haxe_ds_IntMap().default)();
	this.kravur = new kha_js_Font.Kravur(blob);
}

// Meta

Font.__name__ = ["kha","js","Font"];
Font.__interfaces__ = [(kha_Resource().default)];
Font.prototype = {
	height: function(fontSize) {
		return this.kravur._get(fontSize).getHeight();
	},
	width: function(fontSize,str) {
		return this.kravur._get(fontSize).stringWidth(str);
	},
	widthOfCharacters: function(fontSize,characters,start,length) {
		return this.kravur._get(fontSize).charactersWidth(characters,start,length);
	},
	baseline: function(fontSize) {
		return this.kravur._get(fontSize).getBaselinePosition();
	},
	getImage: function(fontSize,color,glyphs) {
		var imageIndex = glyphs == null ? fontSize : fontSize * 10000 + glyphs.length;
		if(!this.images.exists(imageIndex)) {
			var this1 = this.images;
			var v = new (haxe_ds_IntMap().default)();
			this1.set(imageIndex,v);
		}
		if(!this.images.get(imageIndex).exists(color)) {
			var kravur = this.kravur._get(fontSize,glyphs);
			var canvas = (js_Browser().default).get_document().createElement("canvas");
			canvas.width = kravur.width;
			canvas.height = kravur.height;
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = "black";
			ctx.fillRect(0,0,kravur.width,kravur.height);
			var imageData = ctx.getImageData(0,0,kravur.width,kravur.height);
			var bytes = ((js_Boot().default).__cast(kravur.getTexture() , (kha_CanvasImage().default))).bytes;
			var _g1 = 0;
			var _g = bytes.length;
			while(_g1 < _g) {
				var i = _g1++;
				imageData.data[i * 4] = (color & 16711680) >>> 16;
				imageData.data[i * 4 + 1] = (color & 65280) >>> 8;
				imageData.data[i * 4 + 2] = color & 255;
				imageData.data[i * 4 + 3] = bytes.get(i);
			}
			ctx.putImageData(imageData,0,0);
			var img = (js_Browser().default).get_document().createElement("img");
			img.src = canvas.toDataURL("image/png");
			this.images.get(imageIndex).set(color,img);
			return img;
		}
		return this.images.get(imageIndex).get(color);
	},
	unload: function() {
		this.kravur = null;
		this.images = null;
	}
};
Font.prototype.__class__ = Font.prototype.constructor = $hxClasses["kha.js.Font"] = Font;

// Init



// Statics

Font.fromBytes = function(bytes) {
	return new Font((kha_internal_BytesBlob().default).fromBytes(bytes));
}


// Export

exports.default = Font;