// Class: kha.graphics4.Graphics2

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_graphics2_Graphics() {return require("./../../kha/graphics2/Graphics");}
function Std() {return require("./../../Std");}
function kha_Framebuffer() {return require("./../../kha/Framebuffer");}
function kha_math_FastMatrix4() {return require("./../../kha/math/FastMatrix4");}
function kha_Image() {return require("./../../kha/Image");}
function kha_math_FastVector2() {return require("./../../kha/math/FastVector2");}
function kha_graphics2_ImageScaleQuality() {return require("./../../kha/graphics2/ImageScaleQuality");}
function kha_graphics4_VertexStructure() {return require("./../../kha/graphics4/VertexStructure");}
function kha_graphics4_VertexData() {return require("./../../kha/graphics4/VertexData");}
function kha_graphics4_PipelineState() {return require("./../../kha/graphics4/PipelineState");}
function kha_Shaders() {return require("./../../kha/Shaders");}
function kha_graphics4_BlendingFactor() {return require("./../../kha/graphics4/BlendingFactor");}
function kha_graphics4_ImageShaderPainter() {return require("./../../kha/graphics4/ImageShaderPainter");}
function kha_graphics4_ColoredShaderPainter() {return require("./../../kha/graphics4/ColoredShaderPainter");}
function kha_graphics4_TextShaderPainter() {return require("./../../kha/graphics4/TextShaderPainter");}

// Constructor

var Graphics2 = function(canvas) {
	this.myMipmapScaleQuality = (kha_graphics2_ImageScaleQuality().default).High;
	this.myImageScaleQuality = (kha_graphics2_ImageScaleQuality().default).High;
	(kha_graphics2_Graphics().default).call(this);
	this.set_color(-1);
	this.canvas = canvas;
	this.g = canvas.get_g4();
	this.imagePainter = new (kha_graphics4_ImageShaderPainter().default)(this.g);
	this.coloredPainter = new (kha_graphics4_ColoredShaderPainter().default)(this.g);
	this.textPainter = new (kha_graphics4_TextShaderPainter().default)(this.g);
	this.textPainter.fontSize = this.get_fontSize();
	this.setProjection();
	if(Graphics2.videoPipeline == null) {
		Graphics2.videoPipeline = Graphics2.createImagePipeline(Graphics2.createImageVertexStructure());
		Graphics2.videoPipeline.fragmentShader = (kha_Shaders().default).painter_video_frag;
		Graphics2.videoPipeline.vertexShader = (kha_Shaders().default).painter_video_vert;
		Graphics2.videoPipeline.compile();
	}
}

// Meta

Graphics2.__name__ = ["kha","graphics4","Graphics2"];
Graphics2.__super__ = (kha_graphics2_Graphics().default);
Graphics2.prototype = $extend((kha_graphics2_Graphics().default).prototype, {
	setProjection: function() {
		var width = this.canvas.get_width();
		var height = this.canvas.get_height();
		if((Std().default)["is"](this.canvas,(kha_Framebuffer().default))) {
			this.projectionMatrix = (kha_math_FastMatrix4().default).orthogonalProjection(0,width,height,0,0.1,1000);
		} else {
			if(!(kha_Image().default).get_nonPow2Supported()) {
				width = Graphics2.upperPowerOfTwo(width);
				height = Graphics2.upperPowerOfTwo(height);
			}
			if(this.g.renderTargetsInvertedY()) {
				this.projectionMatrix = (kha_math_FastMatrix4().default).orthogonalProjection(0,width,0,height,0.1,1000);
			} else {
				this.projectionMatrix = (kha_math_FastMatrix4().default).orthogonalProjection(0,width,height,0,0.1,1000);
			}
		}
		this.imagePainter.setProjection(this.projectionMatrix);
		this.coloredPainter.setProjection(this.projectionMatrix);
		this.textPainter.setProjection(this.projectionMatrix);
	},
	drawImage: function(img,x,y) {
		this.coloredPainter.end();
		this.textPainter.end();
		var xw = x + img.get_width();
		var yh = y + img.get_height();
		var _this = this.get_transformation();
		var value = new (kha_math_FastVector2().default)(x,yh);
		var w = _this._02 * value.x + _this._12 * value.y + _this._22;
		var x1 = (_this._00 * value.x + _this._10 * value.y + _this._20) / w;
		var y1 = (_this._01 * value.x + _this._11 * value.y + _this._21) / w;
		var p1 = new (kha_math_FastVector2().default)(x1,y1);
		var _this1 = this.get_transformation();
		var value1 = new (kha_math_FastVector2().default)(x,y);
		var w1 = _this1._02 * value1.x + _this1._12 * value1.y + _this1._22;
		var x2 = (_this1._00 * value1.x + _this1._10 * value1.y + _this1._20) / w1;
		var y2 = (_this1._01 * value1.x + _this1._11 * value1.y + _this1._21) / w1;
		var p2 = new (kha_math_FastVector2().default)(x2,y2);
		var _this2 = this.get_transformation();
		var value2 = new (kha_math_FastVector2().default)(xw,y);
		var w2 = _this2._02 * value2.x + _this2._12 * value2.y + _this2._22;
		var x3 = (_this2._00 * value2.x + _this2._10 * value2.y + _this2._20) / w2;
		var y3 = (_this2._01 * value2.x + _this2._11 * value2.y + _this2._21) / w2;
		var p3 = new (kha_math_FastVector2().default)(x3,y3);
		var _this3 = this.get_transformation();
		var value3 = new (kha_math_FastVector2().default)(xw,yh);
		var w3 = _this3._02 * value3.x + _this3._12 * value3.y + _this3._22;
		var x4 = (_this3._00 * value3.x + _this3._10 * value3.y + _this3._20) / w3;
		var y4 = (_this3._01 * value3.x + _this3._11 * value3.y + _this3._21) / w3;
		var p4 = new (kha_math_FastVector2().default)(x4,y4);
		this.imagePainter.drawImage(img,p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y,this.get_opacity(),this.get_color());
	},
	drawScaledSubImage: function(img,sx,sy,sw,sh,dx,dy,dw,dh) {
		this.coloredPainter.end();
		this.textPainter.end();
		var _this = this.get_transformation();
		var value = new (kha_math_FastVector2().default)(dx,dy + dh);
		var w = _this._02 * value.x + _this._12 * value.y + _this._22;
		var x = (_this._00 * value.x + _this._10 * value.y + _this._20) / w;
		var y = (_this._01 * value.x + _this._11 * value.y + _this._21) / w;
		var p1 = new (kha_math_FastVector2().default)(x,y);
		var _this1 = this.get_transformation();
		var value1 = new (kha_math_FastVector2().default)(dx,dy);
		var w1 = _this1._02 * value1.x + _this1._12 * value1.y + _this1._22;
		var x1 = (_this1._00 * value1.x + _this1._10 * value1.y + _this1._20) / w1;
		var y1 = (_this1._01 * value1.x + _this1._11 * value1.y + _this1._21) / w1;
		var p2 = new (kha_math_FastVector2().default)(x1,y1);
		var _this2 = this.get_transformation();
		var value2 = new (kha_math_FastVector2().default)(dx + dw,dy);
		var w2 = _this2._02 * value2.x + _this2._12 * value2.y + _this2._22;
		var x2 = (_this2._00 * value2.x + _this2._10 * value2.y + _this2._20) / w2;
		var y2 = (_this2._01 * value2.x + _this2._11 * value2.y + _this2._21) / w2;
		var p3 = new (kha_math_FastVector2().default)(x2,y2);
		var _this3 = this.get_transformation();
		var value3 = new (kha_math_FastVector2().default)(dx + dw,dy + dh);
		var w3 = _this3._02 * value3.x + _this3._12 * value3.y + _this3._22;
		var x3 = (_this3._00 * value3.x + _this3._10 * value3.y + _this3._20) / w3;
		var y3 = (_this3._01 * value3.x + _this3._11 * value3.y + _this3._21) / w3;
		var p4 = new (kha_math_FastVector2().default)(x3,y3);
		this.imagePainter.drawImage2(img,sx,sy,sw,sh,p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y,this.get_opacity(),this.get_color());
	},
	get_color: function() {
		return this.myColor;
	},
	set_color: function(color) {
		return this.myColor = color;
	},
	drawRect: function(x,y,width,height,strength) {
		if(strength == null) {
			strength = 1.0;
		}
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.get_transformation();
		var value = new (kha_math_FastVector2().default)(x - strength / 2,y + strength / 2);
		var w = _this._02 * value.x + _this._12 * value.y + _this._22;
		var x1 = (_this._00 * value.x + _this._10 * value.y + _this._20) / w;
		var y1 = (_this._01 * value.x + _this._11 * value.y + _this._21) / w;
		var p1 = new (kha_math_FastVector2().default)(x1,y1);
		var _this1 = this.get_transformation();
		var value1 = new (kha_math_FastVector2().default)(x - strength / 2,y - strength / 2);
		var w1 = _this1._02 * value1.x + _this1._12 * value1.y + _this1._22;
		var x2 = (_this1._00 * value1.x + _this1._10 * value1.y + _this1._20) / w1;
		var y2 = (_this1._01 * value1.x + _this1._11 * value1.y + _this1._21) / w1;
		var p2 = new (kha_math_FastVector2().default)(x2,y2);
		var _this2 = this.get_transformation();
		var value2 = new (kha_math_FastVector2().default)(x + width + strength / 2,y - strength / 2);
		var w2 = _this2._02 * value2.x + _this2._12 * value2.y + _this2._22;
		var x3 = (_this2._00 * value2.x + _this2._10 * value2.y + _this2._20) / w2;
		var y3 = (_this2._01 * value2.x + _this2._11 * value2.y + _this2._21) / w2;
		var p3 = new (kha_math_FastVector2().default)(x3,y3);
		var _this3 = this.get_transformation();
		var value3 = new (kha_math_FastVector2().default)(x + width + strength / 2,y + strength / 2);
		var w3 = _this3._02 * value3.x + _this3._12 * value3.y + _this3._22;
		var x4 = (_this3._00 * value3.x + _this3._10 * value3.y + _this3._20) / w3;
		var y4 = (_this3._01 * value3.x + _this3._11 * value3.y + _this3._21) / w3;
		var p4 = new (kha_math_FastVector2().default)(x4,y4);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this4 = this.get_transformation();
		var value4 = new (kha_math_FastVector2().default)(x - strength / 2,y + height - strength / 2);
		var w4 = _this4._02 * value4.x + _this4._12 * value4.y + _this4._22;
		var x5 = (_this4._00 * value4.x + _this4._10 * value4.y + _this4._20) / w4;
		var y5 = (_this4._01 * value4.x + _this4._11 * value4.y + _this4._21) / w4;
		p1 = new (kha_math_FastVector2().default)(x5,y5);
		var _this5 = this.get_transformation();
		var value5 = new (kha_math_FastVector2().default)(x - strength / 2,y + strength / 2);
		var w5 = _this5._02 * value5.x + _this5._12 * value5.y + _this5._22;
		var x6 = (_this5._00 * value5.x + _this5._10 * value5.y + _this5._20) / w5;
		var y6 = (_this5._01 * value5.x + _this5._11 * value5.y + _this5._21) / w5;
		p2 = new (kha_math_FastVector2().default)(x6,y6);
		var _this6 = this.get_transformation();
		var value6 = new (kha_math_FastVector2().default)(x + strength / 2,y + strength / 2);
		var w6 = _this6._02 * value6.x + _this6._12 * value6.y + _this6._22;
		var x7 = (_this6._00 * value6.x + _this6._10 * value6.y + _this6._20) / w6;
		var y7 = (_this6._01 * value6.x + _this6._11 * value6.y + _this6._21) / w6;
		p3 = new (kha_math_FastVector2().default)(x7,y7);
		var _this7 = this.get_transformation();
		var value7 = new (kha_math_FastVector2().default)(x + strength / 2,y + height - strength / 2);
		var w7 = _this7._02 * value7.x + _this7._12 * value7.y + _this7._22;
		var x8 = (_this7._00 * value7.x + _this7._10 * value7.y + _this7._20) / w7;
		var y8 = (_this7._01 * value7.x + _this7._11 * value7.y + _this7._21) / w7;
		p4 = new (kha_math_FastVector2().default)(x8,y8);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this8 = this.get_transformation();
		var value8 = new (kha_math_FastVector2().default)(x - strength / 2,y + height + strength / 2);
		var w8 = _this8._02 * value8.x + _this8._12 * value8.y + _this8._22;
		var x9 = (_this8._00 * value8.x + _this8._10 * value8.y + _this8._20) / w8;
		var y9 = (_this8._01 * value8.x + _this8._11 * value8.y + _this8._21) / w8;
		p1 = new (kha_math_FastVector2().default)(x9,y9);
		var _this9 = this.get_transformation();
		var value9 = new (kha_math_FastVector2().default)(x - strength / 2,y + height - strength / 2);
		var w9 = _this9._02 * value9.x + _this9._12 * value9.y + _this9._22;
		var x10 = (_this9._00 * value9.x + _this9._10 * value9.y + _this9._20) / w9;
		var y10 = (_this9._01 * value9.x + _this9._11 * value9.y + _this9._21) / w9;
		p2 = new (kha_math_FastVector2().default)(x10,y10);
		var _this10 = this.get_transformation();
		var value10 = new (kha_math_FastVector2().default)(x + width + strength / 2,y + height - strength / 2);
		var w10 = _this10._02 * value10.x + _this10._12 * value10.y + _this10._22;
		var x11 = (_this10._00 * value10.x + _this10._10 * value10.y + _this10._20) / w10;
		var y11 = (_this10._01 * value10.x + _this10._11 * value10.y + _this10._21) / w10;
		p3 = new (kha_math_FastVector2().default)(x11,y11);
		var _this11 = this.get_transformation();
		var value11 = new (kha_math_FastVector2().default)(x + width + strength / 2,y + height + strength / 2);
		var w11 = _this11._02 * value11.x + _this11._12 * value11.y + _this11._22;
		var x12 = (_this11._00 * value11.x + _this11._10 * value11.y + _this11._20) / w11;
		var y12 = (_this11._01 * value11.x + _this11._11 * value11.y + _this11._21) / w11;
		p4 = new (kha_math_FastVector2().default)(x12,y12);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
		var _this12 = this.get_transformation();
		var value12 = new (kha_math_FastVector2().default)(x + width - strength / 2,y + height - strength / 2);
		var w12 = _this12._02 * value12.x + _this12._12 * value12.y + _this12._22;
		var x13 = (_this12._00 * value12.x + _this12._10 * value12.y + _this12._20) / w12;
		var y13 = (_this12._01 * value12.x + _this12._11 * value12.y + _this12._21) / w12;
		p1 = new (kha_math_FastVector2().default)(x13,y13);
		var _this13 = this.get_transformation();
		var value13 = new (kha_math_FastVector2().default)(x + width - strength / 2,y + strength / 2);
		var w13 = _this13._02 * value13.x + _this13._12 * value13.y + _this13._22;
		var x14 = (_this13._00 * value13.x + _this13._10 * value13.y + _this13._20) / w13;
		var y14 = (_this13._01 * value13.x + _this13._11 * value13.y + _this13._21) / w13;
		p2 = new (kha_math_FastVector2().default)(x14,y14);
		var _this14 = this.get_transformation();
		var value14 = new (kha_math_FastVector2().default)(x + width + strength / 2,y + strength / 2);
		var w14 = _this14._02 * value14.x + _this14._12 * value14.y + _this14._22;
		var x15 = (_this14._00 * value14.x + _this14._10 * value14.y + _this14._20) / w14;
		var y15 = (_this14._01 * value14.x + _this14._11 * value14.y + _this14._21) / w14;
		p3 = new (kha_math_FastVector2().default)(x15,y15);
		var _this15 = this.get_transformation();
		var value15 = new (kha_math_FastVector2().default)(x + width + strength / 2,y + height - strength / 2);
		var w15 = _this15._02 * value15.x + _this15._12 * value15.y + _this15._22;
		var x16 = (_this15._00 * value15.x + _this15._10 * value15.y + _this15._20) / w15;
		var y16 = (_this15._01 * value15.x + _this15._11 * value15.y + _this15._21) / w15;
		p4 = new (kha_math_FastVector2().default)(x16,y16);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
	},
	fillRect: function(x,y,width,height) {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.get_transformation();
		var value = new (kha_math_FastVector2().default)(x,y + height);
		var w = _this._02 * value.x + _this._12 * value.y + _this._22;
		var x1 = (_this._00 * value.x + _this._10 * value.y + _this._20) / w;
		var y1 = (_this._01 * value.x + _this._11 * value.y + _this._21) / w;
		var p1 = new (kha_math_FastVector2().default)(x1,y1);
		var _this1 = this.get_transformation();
		var value1 = new (kha_math_FastVector2().default)(x,y);
		var w1 = _this1._02 * value1.x + _this1._12 * value1.y + _this1._22;
		var x2 = (_this1._00 * value1.x + _this1._10 * value1.y + _this1._20) / w1;
		var y2 = (_this1._01 * value1.x + _this1._11 * value1.y + _this1._21) / w1;
		var p2 = new (kha_math_FastVector2().default)(x2,y2);
		var _this2 = this.get_transformation();
		var value2 = new (kha_math_FastVector2().default)(x + width,y);
		var w2 = _this2._02 * value2.x + _this2._12 * value2.y + _this2._22;
		var x3 = (_this2._00 * value2.x + _this2._10 * value2.y + _this2._20) / w2;
		var y3 = (_this2._01 * value2.x + _this2._11 * value2.y + _this2._21) / w2;
		var p3 = new (kha_math_FastVector2().default)(x3,y3);
		var _this3 = this.get_transformation();
		var value3 = new (kha_math_FastVector2().default)(x + width,y + height);
		var w3 = _this3._02 * value3.x + _this3._12 * value3.y + _this3._22;
		var x4 = (_this3._00 * value3.x + _this3._10 * value3.y + _this3._20) / w3;
		var y4 = (_this3._01 * value3.x + _this3._11 * value3.y + _this3._21) / w3;
		var p4 = new (kha_math_FastVector2().default)(x4,y4);
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
	},
	drawString: function(text,x,y) {
		this.imagePainter.end();
		this.coloredPainter.end();
		this.textPainter.drawString(text,this.get_opacity(),this.get_color(),x,y,this.get_transformation(),(kha_graphics2_Graphics().default).fontGlyphs);
	},
	drawCharacters: function(text,start,length,x,y) {
		this.imagePainter.end();
		this.coloredPainter.end();
		this.textPainter.drawCharacters(text,start,length,this.get_opacity(),this.get_color(),x,y,this.get_transformation(),(kha_graphics2_Graphics().default).fontGlyphs);
	},
	get_font: function() {
		return this.myFont;
	},
	set_font: function(font) {
		this.textPainter.setFont(font);
		return this.myFont = font;
	},
	set_fontSize: function(value) {
		return (kha_graphics2_Graphics().default).prototype.set_fontSize.call(this,this.textPainter.fontSize = value);
	},
	drawLine: function(x1,y1,x2,y2,strength) {
		if(strength == null) {
			strength = 1.0;
		}
		this.imagePainter.end();
		this.textPainter.end();
		var vec;
		if(y2 == y1) {
			vec = new (kha_math_FastVector2().default)(0,-1);
		} else {
			vec = new (kha_math_FastVector2().default)(1,-(x2 - x1) / (y2 - y1));
		}
		vec.set_length(strength);
		var p1 = new (kha_math_FastVector2().default)(x1 + 0.5 * vec.x,y1 + 0.5 * vec.y);
		var p2 = new (kha_math_FastVector2().default)(x2 + 0.5 * vec.x,y2 + 0.5 * vec.y);
		var p3 = new (kha_math_FastVector2().default)(p1.x - vec.x,p1.y - vec.y);
		var p4 = new (kha_math_FastVector2().default)(p2.x - vec.x,p2.y - vec.y);
		var _this = this.get_transformation();
		var w = _this._02 * p1.x + _this._12 * p1.y + _this._22;
		var x = (_this._00 * p1.x + _this._10 * p1.y + _this._20) / w;
		var y = (_this._01 * p1.x + _this._11 * p1.y + _this._21) / w;
		p1 = new (kha_math_FastVector2().default)(x,y);
		var _this1 = this.get_transformation();
		var w1 = _this1._02 * p2.x + _this1._12 * p2.y + _this1._22;
		var x3 = (_this1._00 * p2.x + _this1._10 * p2.y + _this1._20) / w1;
		var y3 = (_this1._01 * p2.x + _this1._11 * p2.y + _this1._21) / w1;
		p2 = new (kha_math_FastVector2().default)(x3,y3);
		var _this2 = this.get_transformation();
		var w2 = _this2._02 * p3.x + _this2._12 * p3.y + _this2._22;
		var x4 = (_this2._00 * p3.x + _this2._10 * p3.y + _this2._20) / w2;
		var y4 = (_this2._01 * p3.x + _this2._11 * p3.y + _this2._21) / w2;
		p3 = new (kha_math_FastVector2().default)(x4,y4);
		var _this3 = this.get_transformation();
		var w3 = _this3._02 * p4.x + _this3._12 * p4.y + _this3._22;
		var x5 = (_this3._00 * p4.x + _this3._10 * p4.y + _this3._20) / w3;
		var y5 = (_this3._01 * p4.x + _this3._11 * p4.y + _this3._21) / w3;
		p4 = new (kha_math_FastVector2().default)(x5,y5);
		this.coloredPainter.fillTriangle(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
		this.coloredPainter.fillTriangle(this.get_opacity(),this.get_color(),p3.x,p3.y,p2.x,p2.y,p4.x,p4.y);
	},
	fillTriangle: function(x1,y1,x2,y2,x3,y3) {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.get_transformation();
		var value = new (kha_math_FastVector2().default)(x1,y1);
		var w = _this._02 * value.x + _this._12 * value.y + _this._22;
		var x = (_this._00 * value.x + _this._10 * value.y + _this._20) / w;
		var y = (_this._01 * value.x + _this._11 * value.y + _this._21) / w;
		var p1 = new (kha_math_FastVector2().default)(x,y);
		var _this1 = this.get_transformation();
		var value1 = new (kha_math_FastVector2().default)(x2,y2);
		var w1 = _this1._02 * value1.x + _this1._12 * value1.y + _this1._22;
		var x4 = (_this1._00 * value1.x + _this1._10 * value1.y + _this1._20) / w1;
		var y4 = (_this1._01 * value1.x + _this1._11 * value1.y + _this1._21) / w1;
		var p2 = new (kha_math_FastVector2().default)(x4,y4);
		var _this2 = this.get_transformation();
		var value2 = new (kha_math_FastVector2().default)(x3,y3);
		var w2 = _this2._02 * value2.x + _this2._12 * value2.y + _this2._22;
		var x5 = (_this2._00 * value2.x + _this2._10 * value2.y + _this2._20) / w2;
		var y5 = (_this2._01 * value2.x + _this2._11 * value2.y + _this2._21) / w2;
		var p3 = new (kha_math_FastVector2().default)(x5,y5);
		this.coloredPainter.fillTriangle(this.get_opacity(),this.get_color(),p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
	},
	get_imageScaleQuality: function() {
		return this.myImageScaleQuality;
	},
	set_imageScaleQuality: function(value) {
		this.imagePainter.setBilinearFilter(value == (kha_graphics2_ImageScaleQuality().default).High);
		this.textPainter.setBilinearFilter(value == (kha_graphics2_ImageScaleQuality().default).High);
		return this.myImageScaleQuality = value;
	},
	get_mipmapScaleQuality: function() {
		return this.myMipmapScaleQuality;
	},
	set_mipmapScaleQuality: function(value) {
		this.imagePainter.setBilinearMipmapFilter(value == (kha_graphics2_ImageScaleQuality().default).High);
		return this.myMipmapScaleQuality = value;
	},
	setPipeline: function(pipeline) {
		this.flush();
		this.imagePainter.set_pipeline(pipeline);
		this.coloredPainter.set_pipeline(pipeline);
		this.textPainter.set_pipeline(pipeline);
		if(pipeline != null) {
			this.g.setPipeline(pipeline);
		}
	},
	scissor: function(x,y,width,height) {
		this.flush();
		this.g.scissor(x,y,width,height);
	},
	disableScissor: function() {
		this.flush();
		this.g.disableScissor();
	},
	begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
		this.g.begin();
		if(clear) {
			this.clear(clearColor);
		}
		this.setProjection();
	},
	clear: function(color) {
		this.flush();
		this.g.clear(color == null ? -16777216 : color);
	},
	flush: function() {
		this.imagePainter.end();
		this.textPainter.end();
		this.coloredPainter.end();
	},
	end: function() {
		this.flush();
		this.g.end();
	},
	drawVideoInternal: function(video,x,y,width,height) {
	},
	drawVideo: function(video,x,y,width,height) {
		this.setPipeline(Graphics2.videoPipeline);
		this.drawVideoInternal(video,x,y,width,height);
		this.setPipeline(null);
	}
});
Graphics2.prototype.__class__ = Graphics2.prototype.constructor = $hxClasses["kha.graphics4.Graphics2"] = Graphics2;

// Init



// Statics

Graphics2.upperPowerOfTwo = function(v) {
	--v;
	v |= v >>> 1;
	v |= v >>> 2;
	v |= v >>> 4;
	v |= v >>> 8;
	v |= v >>> 16;
	return ++v;
}
Graphics2.createImageVertexStructure = function() {
	var structure = new (kha_graphics4_VertexStructure().default)();
	structure.add("vertexPosition",(kha_graphics4_VertexData().default).Float3);
	structure.add("texPosition",(kha_graphics4_VertexData().default).Float2);
	structure.add("vertexColor",(kha_graphics4_VertexData().default).Float4);
	return structure;
}
Graphics2.createImagePipeline = function(structure) {
	var shaderPipeline = new (kha_graphics4_PipelineState().default)();
	shaderPipeline.fragmentShader = (kha_Shaders().default).painter_image_frag;
	shaderPipeline.vertexShader = (kha_Shaders().default).painter_image_vert;
	shaderPipeline.inputLayout = [structure];
	shaderPipeline.blendSource = (kha_graphics4_BlendingFactor().default).BlendOne;
	shaderPipeline.blendDestination = (kha_graphics4_BlendingFactor().default).InverseSourceAlpha;
	shaderPipeline.alphaBlendSource = (kha_graphics4_BlendingFactor().default).BlendOne;
	shaderPipeline.alphaBlendDestination = (kha_graphics4_BlendingFactor().default).InverseSourceAlpha;
	return shaderPipeline;
}
Graphics2.createColoredVertexStructure = function() {
	var structure = new (kha_graphics4_VertexStructure().default)();
	structure.add("vertexPosition",(kha_graphics4_VertexData().default).Float3);
	structure.add("vertexColor",(kha_graphics4_VertexData().default).Float4);
	return structure;
}
Graphics2.createColoredPipeline = function(structure) {
	var shaderPipeline = new (kha_graphics4_PipelineState().default)();
	shaderPipeline.fragmentShader = (kha_Shaders().default).painter_colored_frag;
	shaderPipeline.vertexShader = (kha_Shaders().default).painter_colored_vert;
	shaderPipeline.inputLayout = [structure];
	shaderPipeline.blendSource = (kha_graphics4_BlendingFactor().default).SourceAlpha;
	shaderPipeline.blendDestination = (kha_graphics4_BlendingFactor().default).InverseSourceAlpha;
	shaderPipeline.alphaBlendSource = (kha_graphics4_BlendingFactor().default).SourceAlpha;
	shaderPipeline.alphaBlendDestination = (kha_graphics4_BlendingFactor().default).InverseSourceAlpha;
	return shaderPipeline;
}
Graphics2.createTextVertexStructure = function() {
	var structure = new (kha_graphics4_VertexStructure().default)();
	structure.add("vertexPosition",(kha_graphics4_VertexData().default).Float3);
	structure.add("texPosition",(kha_graphics4_VertexData().default).Float2);
	structure.add("vertexColor",(kha_graphics4_VertexData().default).Float4);
	return structure;
}
Graphics2.createTextPipeline = function(structure) {
	var shaderPipeline = new (kha_graphics4_PipelineState().default)();
	shaderPipeline.fragmentShader = (kha_Shaders().default).painter_text_frag;
	shaderPipeline.vertexShader = (kha_Shaders().default).painter_text_vert;
	shaderPipeline.inputLayout = [structure];
	shaderPipeline.blendSource = (kha_graphics4_BlendingFactor().default).SourceAlpha;
	shaderPipeline.blendDestination = (kha_graphics4_BlendingFactor().default).InverseSourceAlpha;
	shaderPipeline.alphaBlendSource = (kha_graphics4_BlendingFactor().default).SourceAlpha;
	shaderPipeline.alphaBlendDestination = (kha_graphics4_BlendingFactor().default).InverseSourceAlpha;
	return shaderPipeline;
}


// Export

exports.default = Graphics2;