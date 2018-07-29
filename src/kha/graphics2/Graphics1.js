// Class: kha.graphics2.Graphics1

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_graphics1_Graphics() {return require("./../../kha/graphics1/Graphics");}
function kha_Image() {return require("./../../kha/Image");}
function kha_graphics4_TextureFormat() {return require("./../../kha/graphics4/TextureFormat");}
function kha_graphics4_Usage() {return require("./../../kha/graphics4/Usage");}
function kha__$Color_Color_$Impl_$() {return require("./../../kha/_Color/Color_Impl_");}

// Constructor

var Graphics1 = function(canvas) {
	this.canvas = canvas;
}

// Meta

Graphics1.__name__ = ["kha","graphics2","Graphics1"];
Graphics1.__interfaces__ = [(kha_graphics1_Graphics().default)];
Graphics1.prototype = {
	begin: function() {
		if(this.texture == null) {
			this.texture = (kha_Image().default).create(this.canvas.get_width(),this.canvas.get_height(),(kha_graphics4_TextureFormat().default).RGBA32,(kha_graphics4_Usage().default).ReadableUsage);
		}
		this.pixels = this.texture.lock();
	},
	end: function() {
		this.texture.unlock();
		this.canvas.get_g2().begin();
		this.canvas.get_g2().drawImage(this.texture,0,0);
		this.canvas.get_g2().end();
	},
	setPixel: function(x,y,color) {
		this.pixels.setInt32(y * this.texture.get_realWidth() * 4 + x * 4,(kha__$Color_Color_$Impl_$().default).fromBytes(color & 255,(color & 65280) >>> 8,(color & 16711680) >>> 16,color >>> 24));
	}
};
Graphics1.prototype.__class__ = Graphics1.prototype.constructor = $hxClasses["kha.graphics2.Graphics1"] = Graphics1;

// Init



// Statics




// Export

exports.default = Graphics1;