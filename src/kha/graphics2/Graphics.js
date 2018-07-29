// Class: kha.graphics2.Graphics

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_graphics2_ImageScaleQuality() {return require("./../../kha/graphics2/ImageScaleQuality");}
function kha_math_FastMatrix3() {return require("./../../kha/math/FastMatrix3");}

// Constructor

var Graphics = function() {
	this.transformations = [];
	this.transformations.push(new (kha_math_FastMatrix3().default)(1,0,0,0,1,0,0,0,1));
	this.opacities = [];
	this.opacities.push(1);
	this.myFontSize = 12;
	this.pipe = null;
}

// Meta

Graphics.__name__ = ["kha","graphics2","Graphics"];
Graphics.prototype = {
	begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
	},
	end: function() {
	},
	flush: function() {
	},
	clear: function(color) {
	},
	drawImage: function(img,x,y) {
		this.drawSubImage(img,x,y,0,0,img.get_width(),img.get_height());
	},
	drawSubImage: function(img,x,y,sx,sy,sw,sh) {
		this.drawScaledSubImage(img,sx,sy,sw,sh,x,y,sw,sh);
	},
	drawScaledImage: function(img,dx,dy,dw,dh) {
		this.drawScaledSubImage(img,0,0,img.get_width(),img.get_height(),dx,dy,dw,dh);
	},
	drawScaledSubImage: function(image,sx,sy,sw,sh,dx,dy,dw,dh) {
	},
	drawRect: function(x,y,width,height,strength) {
		if(strength == null) {
			strength = 1.0;
		}
	},
	fillRect: function(x,y,width,height) {
	},
	drawString: function(text,x,y) {
	},
	drawCharacters: function(text,start,length,x,y) {
	},
	drawLine: function(x1,y1,x2,y2,strength) {
		if(strength == null) {
			strength = 1.0;
		}
	},
	drawVideo: function(video,x,y,width,height) {
	},
	fillTriangle: function(x1,y1,x2,y2,x3,y3) {
	},
	get_imageScaleQuality: function() {
		return (kha_graphics2_ImageScaleQuality().default).Low;
	},
	set_imageScaleQuality: function(value) {
		return (kha_graphics2_ImageScaleQuality().default).High;
	},
	get_mipmapScaleQuality: function() {
		return (kha_graphics2_ImageScaleQuality().default).Low;
	},
	set_mipmapScaleQuality: function(value) {
		return (kha_graphics2_ImageScaleQuality().default).High;
	},
	get_color: function() {
		return -16777216;
	},
	set_color: function(color) {
		return -16777216;
	},
	get_font: function() {
		return null;
	},
	set_font: function(font) {
		return null;
	},
	get_fontSize: function() {
		return this.myFontSize;
	},
	set_fontSize: function(value) {
		return this.myFontSize = value;
	},
	pushTransformation: function(transformation) {
		var trans = new (kha_math_FastMatrix3().default)(1,0,0,0,1,0,0,0,1);
		trans._00 = transformation._00;
		trans._10 = transformation._10;
		trans._20 = transformation._20;
		trans._01 = transformation._01;
		trans._11 = transformation._11;
		trans._21 = transformation._21;
		trans._02 = transformation._02;
		trans._12 = transformation._12;
		trans._22 = transformation._22;
		this.setTransformation(trans);
		this.transformations.push(trans);
	},
	popTransformation: function() {
		var ret = this.transformations.pop();
		this.setTransformation(this.get_transformation());
		return ret;
	},
	get_transformation: function() {
		return this.transformations[this.transformations.length - 1];
	},
	set_transformation: function(transformation) {
		this.setTransformation(transformation);
		var _this = this.transformations[this.transformations.length - 1];
		_this._00 = transformation._00;
		_this._10 = transformation._10;
		_this._20 = transformation._20;
		_this._01 = transformation._01;
		_this._11 = transformation._11;
		_this._21 = transformation._21;
		_this._02 = transformation._02;
		_this._12 = transformation._12;
		_this._22 = transformation._22;
		return transformation;
	},
	translation: function(tx,ty) {
		var _this = new (kha_math_FastMatrix3().default)(1,0,tx,0,1,ty,0,0,1);
		var m = this.get_transformation();
		return new (kha_math_FastMatrix3().default)(_this._00 * m._00 + _this._10 * m._01 + _this._20 * m._02,_this._00 * m._10 + _this._10 * m._11 + _this._20 * m._12,_this._00 * m._20 + _this._10 * m._21 + _this._20 * m._22,_this._01 * m._00 + _this._11 * m._01 + _this._21 * m._02,_this._01 * m._10 + _this._11 * m._11 + _this._21 * m._12,_this._01 * m._20 + _this._11 * m._21 + _this._21 * m._22,_this._02 * m._00 + _this._12 * m._01 + _this._22 * m._02,_this._02 * m._10 + _this._12 * m._11 + _this._22 * m._12,_this._02 * m._20 + _this._12 * m._21 + _this._22 * m._22);
	},
	translate: function(tx,ty) {
		this.set_transformation(this.translation(tx,ty));
	},
	pushTranslation: function(tx,ty) {
		this.pushTransformation(this.translation(tx,ty));
	},
	rotation: function(angle,centerx,centery) {
		var _this = new (kha_math_FastMatrix3().default)(1,0,centerx,0,1,centery,0,0,1);
		var m = new (kha_math_FastMatrix3().default)(Math.cos(angle),-Math.sin(angle),0,Math.sin(angle),Math.cos(angle),0,0,0,1);
		var _this1 = new (kha_math_FastMatrix3().default)(_this._00 * m._00 + _this._10 * m._01 + _this._20 * m._02,_this._00 * m._10 + _this._10 * m._11 + _this._20 * m._12,_this._00 * m._20 + _this._10 * m._21 + _this._20 * m._22,_this._01 * m._00 + _this._11 * m._01 + _this._21 * m._02,_this._01 * m._10 + _this._11 * m._11 + _this._21 * m._12,_this._01 * m._20 + _this._11 * m._21 + _this._21 * m._22,_this._02 * m._00 + _this._12 * m._01 + _this._22 * m._02,_this._02 * m._10 + _this._12 * m._11 + _this._22 * m._12,_this._02 * m._20 + _this._12 * m._21 + _this._22 * m._22);
		var m1 = new (kha_math_FastMatrix3().default)(1,0,-centerx,0,1,-centery,0,0,1);
		var _this2 = new (kha_math_FastMatrix3().default)(_this1._00 * m1._00 + _this1._10 * m1._01 + _this1._20 * m1._02,_this1._00 * m1._10 + _this1._10 * m1._11 + _this1._20 * m1._12,_this1._00 * m1._20 + _this1._10 * m1._21 + _this1._20 * m1._22,_this1._01 * m1._00 + _this1._11 * m1._01 + _this1._21 * m1._02,_this1._01 * m1._10 + _this1._11 * m1._11 + _this1._21 * m1._12,_this1._01 * m1._20 + _this1._11 * m1._21 + _this1._21 * m1._22,_this1._02 * m1._00 + _this1._12 * m1._01 + _this1._22 * m1._02,_this1._02 * m1._10 + _this1._12 * m1._11 + _this1._22 * m1._12,_this1._02 * m1._20 + _this1._12 * m1._21 + _this1._22 * m1._22);
		var m2 = this.get_transformation();
		return new (kha_math_FastMatrix3().default)(_this2._00 * m2._00 + _this2._10 * m2._01 + _this2._20 * m2._02,_this2._00 * m2._10 + _this2._10 * m2._11 + _this2._20 * m2._12,_this2._00 * m2._20 + _this2._10 * m2._21 + _this2._20 * m2._22,_this2._01 * m2._00 + _this2._11 * m2._01 + _this2._21 * m2._02,_this2._01 * m2._10 + _this2._11 * m2._11 + _this2._21 * m2._12,_this2._01 * m2._20 + _this2._11 * m2._21 + _this2._21 * m2._22,_this2._02 * m2._00 + _this2._12 * m2._01 + _this2._22 * m2._02,_this2._02 * m2._10 + _this2._12 * m2._11 + _this2._22 * m2._12,_this2._02 * m2._20 + _this2._12 * m2._21 + _this2._22 * m2._22);
	},
	rotate: function(angle,centerx,centery) {
		var temp = this.rotation(angle,centerx,centery);
		this.get_transformation()._00 = temp._00;
		this.get_transformation()._01 = temp._01;
		this.get_transformation()._02 = temp._02;
		this.get_transformation()._10 = temp._10;
		this.get_transformation()._11 = temp._11;
		this.get_transformation()._12 = temp._12;
		this.get_transformation()._20 = temp._20;
		this.get_transformation()._21 = temp._21;
		this.get_transformation()._22 = temp._22;
	},
	pushRotation: function(angle,centerx,centery) {
		this.pushTransformation(this.rotation(angle,centerx,centery));
	},
	pushOpacity: function(opacity) {
		this.setOpacity(opacity);
		this.opacities.push(opacity);
	},
	popOpacity: function() {
		var ret = this.opacities.pop();
		this.setOpacity(this.get_opacity());
		return ret;
	},
	get_opacity: function() {
		return this.opacities[this.opacities.length - 1];
	},
	set_opacity: function(opacity) {
		this.setOpacity(opacity);
		return this.opacities[this.opacities.length - 1] = opacity;
	},
	scissor: function(x,y,width,height) {
	},
	disableScissor: function() {
	},
	get_pipeline: function() {
		return this.pipe;
	},
	set_pipeline: function(pipeline) {
		this.setPipeline(pipeline);
		return this.pipe = pipeline;
	},
	setTransformation: function(transformation) {
	},
	setOpacity: function(opacity) {
	},
	setPipeline: function(pipeline) {
	}
};
Graphics.prototype.__class__ = Graphics.prototype.constructor = $hxClasses["kha.graphics2.Graphics"] = Graphics;

// Init



// Statics


Graphics.fontGlyphs = (function($this) {
	var $r;
	var _g = [];
	{
		var _g1 = 32;
		while(_g1 < 256) {
			var i = _g1++;
			_g.push(i);
		}
	}
	$r = _g;
	return $r;
}(this))

// Export

exports.default = Graphics;