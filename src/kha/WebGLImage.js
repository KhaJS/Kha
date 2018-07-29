// Class: kha.WebGLImage

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
var $extend = require("./../extend_stub").default;
function kha_Image() {return require("./../kha/Image");}
function kha_graphics2_Graphics1() {return require("./../kha/graphics2/Graphics1");}
function kha_js_graphics4_Graphics2() {return require("./../kha/js/graphics4/Graphics2");}
function kha_js_graphics4_Graphics() {return require("./../kha/js/graphics4/Graphics");}
function Std() {return require("./../Std");}
function kha__$Color_Color_$Impl_$() {return require("./../kha/_Color/Color_Impl_");}
function kha_SystemImpl() {return require("./../kha/SystemImpl");}
function Type() {return require("./../Type");}
function kha_graphics4_TextureFormat() {return require("./../kha/graphics4/TextureFormat");}
function haxe_Log() {return require("./../haxe/Log");}
function js_Boot() {return require("./../js/Boot");}
function haxe_io_Bytes() {return require("./../haxe/io/Bytes");}
function js_Browser() {return require("./../js/Browser");}

// Constructor

var WebGLImage = function(width,height,format,renderTarget,depthStencilFormat,samples) {
	this.pixels = null;
	this.depthTexture = null;
	this.texture = null;
	this.renderBuffer = null;
	this.frameBuffer = null;
	this.myWidth = width;
	this.myHeight = height;
	this.format = format;
	this.renderTarget = renderTarget;
	this.samples = samples;
	this.image = null;
	this.video = null;
	this.depthStencilFormat = depthStencilFormat;
	WebGLImage.init();
	if(renderTarget) {
		this.createTexture();
	}
}

// Meta

WebGLImage.__name__ = ["kha","WebGLImage"];
WebGLImage.__super__ = (kha_Image().default);
WebGLImage.prototype = $extend((kha_Image().default).prototype, {
	get_g1: function() {
		if(this.graphics1 == null) {
			this.graphics1 = new (kha_graphics2_Graphics1().default)(this);
		}
		return this.graphics1;
	},
	get_g2: function() {
		if(this.graphics2 == null) {
			this.graphics2 = new (kha_js_graphics4_Graphics2().default)(this);
		}
		return this.graphics2;
	},
	get_g4: function() {
		if(this.graphics4 == null) {
			this.graphics4 = new (kha_js_graphics4_Graphics().default)(this);
		}
		return this.graphics4;
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
			if(WebGLImage.context == null) {
				return true;
			} else {
				this.createImageData();
			}
		}
		return this.data.data[y * (Std().default)["int"](this.image.width) * 4 + x * 4 + 3] != 0;
	},
	at: function(x,y) {
		if(this.data == null) {
			if(WebGLImage.context == null) {
				return -16777216;
			} else {
				this.createImageData();
			}
		}
		var r = this.data.data[y * (Std().default)["int"](this.image.width) * 4 + x * 4];
		var g = this.data.data[y * (Std().default)["int"](this.image.width) * 4 + x * 4 + 1];
		var b = this.data.data[y * (Std().default)["int"](this.image.width) * 4 + x * 4 + 2];
		var a = this.data.data[y * (Std().default)["int"](this.image.width) * 4 + x * 4 + 3];
		return (kha__$Color_Color_$Impl_$().default)._new(a << 24 | r << 16 | g << 8 | b);
	},
	createImageData: function() {
		if((Std().default)["is"](this.image,Uint8Array)) {
			this.data = new ImageData(new Uint8ClampedArray(this.image.buffer),this.get_width(),this.get_height());
		} else {
			if(this.get_width() > WebGLImage.canvas.width || this.get_height() > WebGLImage.canvas.height) {
				var cw = WebGLImage.canvas.width;
				var ch = WebGLImage.canvas.height;
				while(this.get_width() > cw || this.get_height() > ch) {
					cw *= 2;
					ch *= 2;
				}
				WebGLImage.canvas.width = cw;
				WebGLImage.canvas.height = ch;
			}
			WebGLImage.context.strokeStyle = "rgba(0,0,0,0)";
			WebGLImage.context.fillStyle = "rgba(0,0,0,0)";
			WebGLImage.context.fillRect(0,0,this.image.width,this.image.height);
			WebGLImage.context.drawImage(this.image,0,0,this.image.width,this.image.height,0,0,this.image.width,this.image.height);
			this.data = WebGLImage.context.getImageData(0,0,this.image.width,this.image.height);
		}
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
			var _g = this.format;
			switch((Type().default).enumIndex(_g)) {
			case 0:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
				break;
			case 2:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 34836 : 6408,this.get_realWidth(),this.get_realHeight(),0,6408,5126,null);
				break;
			case 3:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33189 : 6402,this.get_realWidth(),this.get_realHeight(),0,6402,5123,null);
				break;
			case 4:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 34842 : 6408,this.get_realWidth(),this.get_realHeight(),0,6408,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,null);
				break;
			case 5:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33326 : 6406,this.get_realWidth(),this.get_realHeight(),0,(kha_SystemImpl().default).gl2 ? 6403 : 6406,5126,null);
				break;
			case 6:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33325 : 6406,this.get_realWidth(),this.get_realHeight(),0,(kha_SystemImpl().default).gl2 ? 6403 : 6406,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,null);
				break;
			default:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
			}
			if(this.format == (kha_graphics4_TextureFormat().default).DEPTH16) {
				(kha_SystemImpl().default).gl.texParameteri(3553,10240,9728);
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9728);
				(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36096,3553,this.texture,0);
				if(!(kha_SystemImpl().default).gl2) {
					var colortex = (kha_SystemImpl().default).gl.createTexture();
					(kha_SystemImpl().default).gl.bindTexture(3553,colortex);
					(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
					(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36064,3553,colortex,0);
					(kha_SystemImpl().default).gl.bindTexture(3553,this.texture);
				}
			} else {
				(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36064,3553,this.texture,0);
			}
			this.initDepthStencilBuffer(this.depthStencilFormat);
			if((kha_SystemImpl().default).gl.checkFramebufferStatus(36160) != 36053) {
				(haxe_Log().default).trace("WebGL error: Framebuffer incomplete",{ fileName : "WebGLImage.hx", lineNumber : 225, className : "kha.WebGLImage", methodName : "createTexture"});
			}
			(kha_SystemImpl().default).gl.bindRenderbuffer(36161,null);
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,null);
		} else if(this.video != null) {
			(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,6408,5121,this.video);
		} else {
			var _g1 = this.format;
			switch((Type().default).enumIndex(_g1)) {
			case 0:
				if((Std().default)["is"](this.image,Uint8Array)) {
					(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.myWidth,this.myHeight,0,6408,5121,this.image);
				} else {
					(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,6408,5121,this.image);
				}
				break;
			case 2:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,this.image);
				break;
			case 4:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,this.image);
				break;
			case 5:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,(kha_SystemImpl().default).gl2 ? 6403 : 6406,5126,this.image);
				break;
			case 6:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,(kha_SystemImpl().default).gl2 ? 6403 : 6406,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,this.image);
				break;
			default:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,6408,5121,this.image);
			}
		}
		(kha_SystemImpl().default).gl.bindTexture(3553,null);
	},
	initDepthStencilBuffer: function(depthStencilFormat) {
		switch(depthStencilFormat) {
		case 0:
			break;
		case 1:case 5:
			if((kha_SystemImpl().default).depthTexture == null) {
				this.renderBuffer = (kha_SystemImpl().default).gl.createRenderbuffer();
				(kha_SystemImpl().default).gl.bindRenderbuffer(36161,this.renderBuffer);
				(kha_SystemImpl().default).gl.renderbufferStorage(36161,33189,this.get_realWidth(),this.get_realHeight());
				(kha_SystemImpl().default).gl.framebufferRenderbuffer(36160,36096,36161,this.renderBuffer);
			} else {
				this.depthTexture = (kha_SystemImpl().default).gl.createTexture();
				(kha_SystemImpl().default).gl.bindTexture(3553,this.depthTexture);
				if(depthStencilFormat == 1) {
					(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33190 : 6402,this.get_realWidth(),this.get_realHeight(),0,6402,5125,null);
				} else {
					(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33189 : 6402,this.get_realWidth(),this.get_realHeight(),0,6402,5123,null);
				}
				(kha_SystemImpl().default).gl.texParameteri(3553,10240,9728);
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9728);
				(kha_SystemImpl().default).gl.texParameteri(3553,10242,33071);
				(kha_SystemImpl().default).gl.texParameteri(3553,10243,33071);
				(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
				(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36096,3553,this.depthTexture,0);
			}
			break;
		case 2:case 3:case 4:
			if((kha_SystemImpl().default).depthTexture == null) {
				this.renderBuffer = (kha_SystemImpl().default).gl.createRenderbuffer();
				(kha_SystemImpl().default).gl.bindRenderbuffer(36161,this.renderBuffer);
				(kha_SystemImpl().default).gl.renderbufferStorage(36161,34041,this.get_realWidth(),this.get_realHeight());
				(kha_SystemImpl().default).gl.framebufferRenderbuffer(36160,33306,36161,this.renderBuffer);
			} else {
				this.depthTexture = (kha_SystemImpl().default).gl.createTexture();
				(kha_SystemImpl().default).gl.bindTexture(3553,this.depthTexture);
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 35056 : 34041,this.get_realWidth(),this.get_realHeight(),0,34041,(kha_SystemImpl().default).depthTexture.UNSIGNED_INT_24_8_WEBGL,null);
				(kha_SystemImpl().default).gl.texParameteri(3553,10240,9728);
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9728);
				(kha_SystemImpl().default).gl.texParameteri(3553,10242,33071);
				(kha_SystemImpl().default).gl.texParameteri(3553,10243,33071);
				(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
				(kha_SystemImpl().default).gl.framebufferTexture2D(36160,33306,3553,this.depthTexture,0);
			}
			break;
		}
	},
	set: function(stage) {
		(kha_SystemImpl().default).gl.activeTexture(33984 + stage);
		(kha_SystemImpl().default).gl.bindTexture(3553,this.texture);
		if(this.video != null) {
			(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,6408,5121,this.video);
		}
	},
	setDepth: function(stage) {
		(kha_SystemImpl().default).gl.activeTexture(33984 + stage);
		(kha_SystemImpl().default).gl.bindTexture(3553,this.depthTexture);
	},
	setDepthStencilFrom: function(image) {
		(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
		(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36096,3553,((js_Boot().default).__cast(image , WebGLImage)).depthTexture,0);
	},
	bytesToArray: function(bytes) {
		var _g = this.format;
		switch((Type().default).enumIndex(_g)) {
		case 0:case 1:
			return new Uint8Array(bytes.getData());
		case 2:case 4:case 5:case 6:
			return new Float32Array(bytes.getData());
		default:
			return new Uint8Array(bytes.getData());
		}
	},
	lock: function(level) {
		if(level == null) {
			level = 0;
		}
		this.bytes = (haxe_io_Bytes().default).alloc(WebGLImage.formatByteSize(this.format) * this.get_width() * this.get_height());
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
			var _g = this.format;
			switch((Type().default).enumIndex(_g)) {
			case 0:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5121,this.bytesToArray(this.bytes));
				break;
			case 1:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,6409,this.get_width(),this.get_height(),0,6409,5121,this.bytesToArray(this.bytes));
				if((kha_SystemImpl().default).gl.getError() == 1282) {
					var rgbaBytes = (haxe_io_Bytes().default).alloc(this.get_width() * this.get_height() * 4);
					var _g1 = 0;
					var _g2 = this.get_height();
					while(_g1 < _g2) {
						var y = _g1++;
						var _g3 = 0;
						var _g21 = this.get_width();
						while(_g3 < _g21) {
							var x = _g3++;
							var value = this.bytes.get(y * this.get_width() + x);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4,value);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 1,value);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 2,value);
							rgbaBytes.set(y * this.get_width() * 4 + x * 4 + 3,255);
						}
					}
					(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5121,this.bytesToArray(rgbaBytes));
				}
				break;
			case 2:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 34836 : 6408,this.get_width(),this.get_height(),0,6408,5126,this.bytesToArray(this.bytes));
				break;
			case 4:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 34842 : 6408,this.get_width(),this.get_height(),0,6408,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,this.bytesToArray(this.bytes));
				break;
			case 5:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33326 : 6406,this.get_width(),this.get_height(),0,(kha_SystemImpl().default).gl2 ? 6403 : 6406,5126,this.bytesToArray(this.bytes));
				break;
			case 6:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,(kha_SystemImpl().default).gl2 ? 33325 : 6406,this.get_width(),this.get_height(),0,(kha_SystemImpl().default).gl2 ? 6403 : 6406,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,this.bytesToArray(this.bytes));
				break;
			default:
				(kha_SystemImpl().default).gl.texImage2D(3553,0,6408,this.get_width(),this.get_height(),0,6408,5121,this.bytesToArray(this.bytes));
			}
			(kha_SystemImpl().default).gl.bindTexture(3553,null);
			this.bytes = null;
		}
	},
	getPixels: function() {
		if(this.frameBuffer == null) {
			return null;
		}
		if(this.pixels == null) {
			var _g = this.format;
			switch((Type().default).enumIndex(_g)) {
			case 0:case 1:
				this.pixels = new Uint8Array(WebGLImage.formatByteSize(this.format) * this.get_width() * this.get_height());
				break;
			case 2:case 5:
				this.pixels = new Float32Array((Std().default)["int"](WebGLImage.formatByteSize(this.format) / 4) * this.get_width() * this.get_height());
				break;
			case 4:case 6:
				this.pixels = new Uint16Array((Std().default)["int"](WebGLImage.formatByteSize(this.format) / 2) * this.get_width() * this.get_height());
				break;
			default:
				this.pixels = new Uint8Array(WebGLImage.formatByteSize(this.format) * this.get_width() * this.get_height());
			}
		}
		(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
		var _g1 = this.format;
		switch((Type().default).enumIndex(_g1)) {
		case 0:
			(kha_SystemImpl().default).gl.readPixels(0,0,this.myWidth,this.myHeight,6408,5121,this.pixels);
			break;
		case 1:
			(kha_SystemImpl().default).gl.readPixels(0,0,this.myWidth,this.myHeight,(kha_SystemImpl().default).gl2 ? 6403 : 6406,5121,this.pixels);
			break;
		case 2:
			(kha_SystemImpl().default).gl.readPixels(0,0,this.myWidth,this.myHeight,6408,5126,this.pixels);
			break;
		case 4:
			(kha_SystemImpl().default).gl.readPixels(0,0,this.myWidth,this.myHeight,6408,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,this.pixels);
			break;
		case 5:
			(kha_SystemImpl().default).gl.readPixels(0,0,this.myWidth,this.myHeight,(kha_SystemImpl().default).gl2 ? 6403 : 6406,5126,this.pixels);
			break;
		case 6:
			(kha_SystemImpl().default).gl.readPixels(0,0,this.myWidth,this.myHeight,(kha_SystemImpl().default).gl2 ? 6403 : 6406,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,this.pixels);
			break;
		default:
			(kha_SystemImpl().default).gl.readPixels(0,0,this.myWidth,this.myHeight,6408,5121,this.pixels);
		}
		return (haxe_io_Bytes().default).ofData(this.pixels.buffer);
	},
	unload: function() {
		if(this.texture != null) {
			(kha_SystemImpl().default).gl.deleteTexture(this.texture);
		}
		if(this.depthTexture != null) {
			(kha_SystemImpl().default).gl.deleteTexture(this.depthTexture);
		}
		if(this.frameBuffer != null) {
			(kha_SystemImpl().default).gl.deleteFramebuffer(this.frameBuffer);
		}
		if(this.renderBuffer != null) {
			(kha_SystemImpl().default).gl.deleteRenderbuffer(this.renderBuffer);
		}
	},
	generateMipmaps: function(levels) {
		(kha_SystemImpl().default).gl.bindTexture(3553,this.texture);
		(kha_SystemImpl().default).gl.generateMipmap(3553);
	},
	setMipmaps: function(mipmaps) {
		(kha_SystemImpl().default).gl.bindTexture(3553,this.texture);
		if(this.format == (kha_graphics4_TextureFormat().default).RGBA128) {
			var _g1 = 0;
			var _g = mipmaps.length;
			while(_g1 < _g) {
				var i = _g1++;
				(kha_SystemImpl().default).gl.texImage2D(3553,i + 1,(kha_SystemImpl().default).gl2 ? 34836 : 6408,mipmaps[i].get_width(),mipmaps[i].get_height(),0,6408,5126,((js_Boot().default).__cast(mipmaps[i] , WebGLImage)).image);
			}
		} else if(this.format == (kha_graphics4_TextureFormat().default).RGBA64) {
			var _g11 = 0;
			var _g2 = mipmaps.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				(kha_SystemImpl().default).gl.texImage2D(3553,i1 + 1,(kha_SystemImpl().default).gl2 ? 34842 : 6408,mipmaps[i1].get_width(),mipmaps[i1].get_height(),0,6408,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,((js_Boot().default).__cast(mipmaps[i1] , WebGLImage)).image);
			}
		} else {
			var _g12 = 0;
			var _g3 = mipmaps.length;
			while(_g12 < _g3) {
				var i2 = _g12++;
				(kha_SystemImpl().default).gl.texImage2D(3553,i2 + 1,6408,6408,5121,((js_Boot().default).__cast(mipmaps[i2] , WebGLImage)).image);
			}
		}
	}
});
WebGLImage.prototype.__class__ = WebGLImage.prototype.constructor = $hxClasses["kha.WebGLImage"] = WebGLImage;

// Init



// Statics

WebGLImage.init = function() {
	if(WebGLImage.context == null) {
		WebGLImage.canvas = (js_Browser().default).get_document().createElement("canvas");
		if(WebGLImage.canvas != null) {
			WebGLImage.context = WebGLImage.canvas.getContext("2d");
			WebGLImage.canvas.width = 4096;
			WebGLImage.canvas.height = 4096;
			WebGLImage.context.globalCompositeOperation = "copy";
		}
	}
}
WebGLImage.upperPowerOfTwo = function(v) {
	--v;
	v |= v >>> 1;
	v |= v >>> 2;
	v |= v >>> 4;
	v |= v >>> 8;
	v |= v >>> 16;
	return ++v;
}
WebGLImage.formatByteSize = function(format) {
	switch((Type().default).enumIndex(format)) {
	case 0:
		return 4;
	case 1:
		return 1;
	case 2:
		return 16;
	case 3:
		return 2;
	case 4:
		return 8;
	case 5:
		return 4;
	case 6:
		return 2;
	}
}
WebGLImage.GL_RGBA16F = 34842
WebGLImage.GL_RGBA32F = 34836
WebGLImage.GL_R16F = 33325
WebGLImage.GL_R32F = 33326
WebGLImage.GL_RED = 6403
WebGLImage.GL_DEPTH_COMPONENT24 = 33190
WebGLImage.GL_DEPTH24_STENCIL8 = 35056
WebGLImage.GL_DEPTH32F_STENCIL8 = 36013

// Export

exports.default = WebGLImage;