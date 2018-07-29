// Class: kha.CanvasImage

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
var $extend = require("./../extend_stub").default;
function kha_Image() {return require("./../kha/Image");}
function kha_graphics2_Graphics1() {return require("./../kha/graphics2/Graphics1");}
function js_Browser() {return require("./../js/Browser");}
function kha_js_CanvasGraphics() {return require("./../kha/js/CanvasGraphics");}
function Std() {return require("./../Std");}
function kha__$Color_Color_$Impl_$() {return require("./../kha/_Color/Color_Impl_");}
function kha_SystemImpl() {return require("./../kha/SystemImpl");}
function haxe_io_Bytes() {return require("./../haxe/io/Bytes");}
function kha_graphics4_TextureFormat() {return require("./../kha/graphics4/TextureFormat");}

// Constructor

var CanvasImage = function(width,height,format,renderTarget) {
	this.g2canvas = null;
	this.myWidth = width;
	this.myHeight = height;
	this.format = format;
	this.renderTarget = renderTarget;
	this.image = null;
	this.video = null;
	if(renderTarget) {
		this.createTexture();
	}
}

// Meta

CanvasImage.__name__ = ["kha","CanvasImage"];
CanvasImage.__super__ = (kha_Image().default);
CanvasImage.prototype = $extend((kha_Image().default).prototype, {
	get_g1: function() {
		if(this.graphics1 == null) {
			this.graphics1 = new (kha_graphics2_Graphics1().default)(this);
		}
		return this.graphics1;
	},
	get_g2: function() {
		if(this.g2canvas == null) {
			var canvas = (js_Browser().default).get_document().createElement("canvas");
			this.image = canvas;
			var context = canvas.getContext("2d");
			canvas.width = this.get_width();
			canvas.height = this.get_height();
			this.g2canvas = new (kha_js_CanvasGraphics().default)(context);
		}
		return this.g2canvas;
	},
	get_g4: function() {
		return null;
	},
	get_width: function() {
		return this.myWidth;
	},
	get_height: function() {
		return this.myHeight;
	},
	get_realWidth: function() {
		return this.myWidth;
	},
	get_realHeight: function() {
		return this.myHeight;
	},
	isOpaque: function(x,y) {
		if(this.data == null) {
			if(CanvasImage.context == null) {
				return true;
			} else {
				this.createImageData();
			}
		}
		return this.data.data[y * (Std().default)["int"](this.image.width) * 4 + x * 4 + 3] != 0;
	},
	at: function(x,y) {
		if(this.data == null) {
			if(CanvasImage.context == null) {
				return -16777216;
			} else {
				this.createImageData();
			}
		}
		return (kha__$Color_Color_$Impl_$().default)._new(this.data.data[y * (Std().default)["int"](this.image.width) * 4 + x * 4]);
	},
	createImageData: function() {
		CanvasImage.context.strokeStyle = "rgba(0,0,0,0)";
		CanvasImage.context.fillStyle = "rgba(0,0,0,0)";
		CanvasImage.context.fillRect(0,0,this.image.width,this.image.height);
		CanvasImage.context.drawImage(this.image,0,0,this.image.width,this.image.height,0,0,this.image.width,this.image.height);
		this.data = CanvasImage.context.getImageData(0,0,this.image.width,this.image.height);
	},
	createTexture: function() {
		if((kha_SystemImpl().default).gl == null) {
			return;
		}
		this.texture = (kha_SystemImpl().default).gl.createTexture();
		(kha_SystemImpl().default).gl.bindTexture(3553,this.texture);
		(kha_SystemImpl().default).gl.texParameteri(3553,10240,9729);
		(kha_SystemImpl().default).gl.texParameteri(3553,10241,9729);
		(kha_SystemImpl().default).gl.texParameteri(3553,10242,33071);
		(kha_SystemImpl().default).gl.texParameteri(3553,10243,33071);
		if(this.renderTarget) {
			this.frameBuffer = (kha_SystemImpl().default).gl.createFramebuffer();
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
			(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
			(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36064,3553,this.texture,0);
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,null);
		} else if(this.video != null) {
			(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,6408,5121,this.video);
		} else {
			(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,6408,5121,this.image);
		}
		(kha_SystemImpl().default).gl.bindTexture(3553,null);
	},
	set: function(stage) {
		(kha_SystemImpl().default).gl.activeTexture(33984 + stage);
		(kha_SystemImpl().default).gl.bindTexture(3553,this.texture);
		if(this.video != null) {
			(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,6408,5121,this.video);
		}
	},
	lock: function(level) {
		if(level == null) {
			level = 0;
		}
		this.bytes = (haxe_io_Bytes().default).alloc(this.format == (kha_graphics4_TextureFormat().default).RGBA32 ? 4 * this.get_width() * this.get_height() : this.get_width() * this.get_height());
		return this.bytes;
	},
	unlock: function() {
		if((kha_SystemImpl().default).gl != null) {
			this.texture = (kha_SystemImpl().default).gl.createTexture();
			(kha_SystemImpl().default).gl.bindTexture(3553,this.texture);
			(kha_SystemImpl().default).gl.texParameteri(3553,10240,9729);
			(kha_SystemImpl().default).gl.texParameteri(3553,10241,9729);
			(kha_SystemImpl().default).gl.texParameteri(3553,10242,33071);
			(kha_SystemImpl().default).gl.texParameteri(3553,10243,33071);
			(kha_SystemImpl().default).gl.texImage2D(3553,0,6409,this.get_width(),this.get_height(),0,6409,5121,new Uint8Array(this.bytes.getData()));
			if((kha_SystemImpl().default).gl.getError() == 1282) {
				var rgbaBytes = (haxe_io_Bytes().default).alloc(this.get_width() * this.get_height() * 4);
				var _g1 = 0;
				var _g = this.get_height();
				while(_g1 < _g) {
					var y = _g1++;
					var _g3 = 0;
					var _g2 = this.get_width();
					while(_g3 < _g2) {
						var x = _g3++;
						var value = this.bytes.get(y * this.get_width() + x);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4,value);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 1,value);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 2,value);
						rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 3,255);
					}
				}
				(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5121,new Uint8Array(rgbaBytes.getData()));
			}
			(kha_SystemImpl().default).gl.bindTexture(3553,null);
			this.bytes = null;
		}
	},
	unload: function() {
		this.image = null;
		this.video = null;
		this.data = null;
	}
});
CanvasImage.prototype.__class__ = CanvasImage.prototype.constructor = $hxClasses["kha.CanvasImage"] = CanvasImage;

// Init



// Statics

CanvasImage.init = function() {
	var canvas = (js_Browser().default).get_document().createElement("canvas");
	if(canvas != null) {
		CanvasImage.context = canvas.getContext("2d");
		canvas.width = 2048;
		canvas.height = 2048;
		CanvasImage.context.globalCompositeOperation = "copy";
	}
}
CanvasImage.upperPowerOfTwo = function(v) {
	--v;
	v |= v >>> 1;
	v |= v >>> 2;
	v |= v >>> 4;
	v |= v >>> 8;
	v |= v >>> 16;
	return ++v;
}


// Export

exports.default = CanvasImage;