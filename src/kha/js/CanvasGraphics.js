// Class: kha.js.CanvasGraphics

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_graphics2_Graphics() {return require("./../../kha/graphics2/Graphics");}
function js_Boot() {return require("./../../js/Boot");}
function kha_CanvasImage() {return require("./../../kha/CanvasImage");}
function kha_graphics2_ImageScaleQuality() {return require("./../../kha/graphics2/ImageScaleQuality");}
function HxOverrides() {return require("./../../HxOverrides");}
function kha_js_Font() {return require("./../../kha/js/Font");}
function kha_js_Video() {return require("./../../kha/js/Video");}
function kha_AlignedQuad() {return require("./../../kha/AlignedQuad");}
function kha__$Color_Color_$Impl_$() {return require("./../../kha/_Color/Color_Impl_");}

// Constructor

var CanvasGraphics = function(canvas) {
	this.bakedQuadCache = new (kha_AlignedQuad().default)();
	(kha_graphics2_Graphics().default).call(this);
	this.canvas = canvas;
	CanvasGraphics.instance = this;
	this.myColor = (kha__$Color_Color_$Impl_$().default).fromBytes(0,0,0);
	canvas.save();
}

// Meta

CanvasGraphics.__name__ = ["kha","js","CanvasGraphics"];
CanvasGraphics.__super__ = (kha_graphics2_Graphics().default);
CanvasGraphics.prototype = $extend((kha_graphics2_Graphics().default).prototype, {
	begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
		if(clear) {
			this.clear(clearColor);
		}
	},
	clear: function(color) {
		if(color == null) {
			color = 0;
		}
		this.canvas.strokeStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		this.canvas.fillStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		if((color >>> 24) * 0.00392156862745098 == 0) {
			this.canvas.clearRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height);
		} else {
			this.canvas.fillRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height);
		}
		this.set_color(this.myColor);
	},
	end: function() {
	},
	drawImage: function(img,x,y) {
		this.canvas.globalAlpha = this.get_opacity();
		this.canvas.drawImage(((js_Boot().default).__cast(img , (kha_CanvasImage().default))).image,x,y);
		this.canvas.globalAlpha = 1;
	},
	drawScaledSubImage: function(image,sx,sy,sw,sh,dx,dy,dw,dh) {
		this.canvas.globalAlpha = this.get_opacity();
		try {
			if(dw < 0 || dh < 0) {
				this.canvas.save();
				this.canvas.translate(dx,dy);
				var x = 0.0;
				var y = 0.0;
				if(dw < 0) {
					this.canvas.scale(-1,1);
					x = -dw;
				}
				if(dh < 0) {
					this.canvas.scale(1,-1);
					y = -dh;
				}
				this.canvas.drawImage(((js_Boot().default).__cast(image , (kha_CanvasImage().default))).image,sx,sy,sw,sh,x,y,dw,dh);
				this.canvas.restore();
			} else {
				this.canvas.drawImage(((js_Boot().default).__cast(image , (kha_CanvasImage().default))).image,sx,sy,sw,sh,dx,dy,dw,dh);
			}
		} catch( ex ) {
		}
		this.canvas.globalAlpha = 1;
	},
	set_color: function(color) {
		this.myColor = color;
		this.canvas.strokeStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		this.canvas.fillStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		return color;
	},
	get_color: function() {
		return this.myColor;
	},
	get_imageScaleQuality: function() {
		return this.scaleQuality;
	},
	set_imageScaleQuality: function(value) {
		if(value == (kha_graphics2_ImageScaleQuality().default).Low) {
			this.canvas.mozImageSmoothingEnabled = false;
			this.canvas.webkitImageSmoothingEnabled = false;
			this.canvas.msImageSmoothingEnabled = false;
			this.canvas.imageSmoothingEnabled = false;
		} else {
			this.canvas.mozImageSmoothingEnabled = true;
			this.canvas.webkitImageSmoothingEnabled = true;
			this.canvas.msImageSmoothingEnabled = true;
			this.canvas.imageSmoothingEnabled = true;
		}
		return this.scaleQuality = value;
	},
	drawRect: function(x,y,width,height,strength) {
		if(strength == null) {
			strength = 1.0;
		}
		this.canvas.beginPath();
		var oldStrength = this.canvas.lineWidth;
		this.canvas.lineWidth = Math.round(strength);
		this.canvas.rect(x,y,width,height);
		this.canvas.stroke();
		this.canvas.lineWidth = oldStrength;
	},
	fillRect: function(x,y,width,height) {
		var tmp = this.get_opacity();
		this.canvas.globalAlpha = tmp * ((this.myColor >>> 24) * 0.00392156862745098);
		this.canvas.fillRect(x,y,width,height);
		this.canvas.globalAlpha = this.get_opacity();
	},
	drawArc: function(cx,cy,radius,sAngle,eAngle,strength,ccw) {
		if(ccw == null) {
			ccw = false;
		}
		if(strength == null) {
			strength = 1.0;
		}
		this._drawArc(cx,cy,radius,sAngle,eAngle,strength,ccw);
	},
	drawCircle: function(cx,cy,radius,strength) {
		if(strength == null) {
			strength = 1.0;
		}
		this._drawArc(cx,cy,radius,0,2 * Math.PI,strength,false);
	},
	_drawArc: function(cx,cy,radius,sAngle,eAngle,strength,ccw) {
		this.canvas.beginPath();
		var oldStrength = this.canvas.lineWidth;
		this.canvas.lineWidth = Math.round(strength);
		this.canvas.arc(cx,cy,radius,sAngle,eAngle,ccw);
		this.canvas.stroke();
		this.canvas.lineWidth = oldStrength;
	},
	fillArc: function(cx,cy,radius,sAngle,eAngle,ccw) {
		if(ccw == null) {
			ccw = false;
		}
		this.canvas.beginPath();
		this.canvas.arc(cx,cy,radius,sAngle,eAngle,ccw);
		this.canvas.fill();
	},
	fillCircle: function(cx,cy,radius) {
		this.canvas.beginPath();
		this.canvas.arc(cx,cy,radius,0,2 * Math.PI,false);
		this.canvas.fill();
	},
	drawString: function(text,x,y) {
		var image = this.webfont.getImage(this.get_fontSize(),this.myColor,(kha_graphics2_Graphics().default).fontGlyphs);
		if(image.width > 0) {
			var xpos = x;
			var ypos = y;
			var _g1 = 0;
			var _g = text.length;
			while(_g1 < _g) {
				var i = _g1++;
				var q;
				if((kha_graphics2_Graphics().default).fontGlyphs != null) {
					q = this.webfont.kravur._get(this.get_fontSize(),(kha_graphics2_Graphics().default).fontGlyphs).getBakedQuad(this.bakedQuadCache,(kha_graphics2_Graphics().default).fontGlyphs.indexOf((HxOverrides().default).cca(text,i)),xpos,ypos);
				} else {
					q = this.webfont.kravur._get(this.get_fontSize()).getBakedQuad(this.bakedQuadCache,(HxOverrides().default).cca(text,i) - 32,xpos,ypos);
				}
				if(q != null) {
					if(q.s1 - q.s0 > 0 && q.t1 - q.t0 > 0 && q.x1 - q.x0 > 0 && q.y1 - q.y0 > 0) {
						this.canvas.drawImage(image,q.s0 * image.width,q.t0 * image.height,(q.s1 - q.s0) * image.width,(q.t1 - q.t0) * image.height,q.x0,q.y0,q.x1 - q.x0,q.y1 - q.y0);
					}
					xpos += q.xadvance;
				}
			}
		}
	},
	set_font: function(font) {
		this.webfont = (js_Boot().default).__cast(font , (kha_js_Font().default));
		return this.webfont;
	},
	get_font: function() {
		return this.webfont;
	},
	drawLine: function(x1,y1,x2,y2,strength) {
		if(strength == null) {
			strength = 1.0;
		}
		this.canvas.beginPath();
		var oldWith = this.canvas.lineWidth;
		this.canvas.lineWidth = Math.round(strength);
		this.canvas.moveTo(x1,y1);
		this.canvas.lineTo(x2,y2);
		this.canvas.moveTo(0,0);
		this.canvas.stroke();
		this.canvas.lineWidth = oldWith;
	},
	fillTriangle: function(x1,y1,x2,y2,x3,y3) {
		this.canvas.beginPath();
		this.canvas.closePath();
		this.canvas.fill();
	},
	scissor: function(x,y,width,height) {
		this.canvas.beginPath();
		this.canvas.rect(x,y,width,height);
		this.canvas.clip();
	},
	disableScissor: function() {
		this.canvas.restore();
	},
	drawVideo: function(video,x,y,width,height) {
		this.canvas.drawImage(((js_Boot().default).__cast(video , (kha_js_Video().default))).element,x,y,width,height);
	},
	setTransformation: function(transformation) {
		this.canvas.setTransform(transformation._00,transformation._01,transformation._10,transformation._11,transformation._20,transformation._21);
	}
});
CanvasGraphics.prototype.__class__ = CanvasGraphics.prototype.constructor = $hxClasses["kha.js.CanvasGraphics"] = CanvasGraphics;

// Init



// Statics

CanvasGraphics.stringWidth = function(font,text) {
	if(CanvasGraphics.instance == null) {
		return 5 * text.length;
	} else {
		CanvasGraphics.instance.set_font(font);
		return CanvasGraphics.instance.canvas.measureText(text).width;
	}
}


// Export

exports.default = CanvasGraphics;