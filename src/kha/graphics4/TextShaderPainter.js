// Class: kha.graphics4.TextShaderPainter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_graphics4_VertexBuffer() {return require("./../../kha/graphics4/VertexBuffer");}
function kha_graphics4_Usage() {return require("./../../kha/graphics4/Usage");}
function kha_graphics4_IndexBuffer() {return require("./../../kha/graphics4/IndexBuffer");}
function kha_graphics4_TextureAddressing() {return require("./../../kha/graphics4/TextureAddressing");}
function kha_graphics4_TextureFilter() {return require("./../../kha/graphics4/TextureFilter");}
function kha_graphics4_MipMapFilter() {return require("./../../kha/graphics4/MipMapFilter");}
function js_Boot() {return require("./../../js/Boot");}
function kha_Kravur() {return require("./../../kha/Kravur");}
function HxOverrides() {return require("./../../HxOverrides");}
function kha_math_FastVector2() {return require("./../../kha/math/FastVector2");}
function kha_graphics4_Graphics2() {return require("./../../kha/graphics4/Graphics2");}
function kha_AlignedQuad() {return require("./../../kha/AlignedQuad");}
function kha_graphics4_BlendingFactor() {return require("./../../kha/graphics4/BlendingFactor");}

// Constructor

var TextShaderPainter = function(g4) {
	this.bakedQuadCache = new (kha_AlignedQuad().default)();
	this.destinationBlend = (kha_graphics4_BlendingFactor().default).Undefined;
	this.sourceBlend = (kha_graphics4_BlendingFactor().default).Undefined;
	this.bilinear = false;
	this.myPipeline = null;
	this.g = g4;
	TextShaderPainter.bufferIndex = 0;
	TextShaderPainter.initShaders();
	this.initBuffers();
	this.projectionLocation = TextShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
	this.textureLocation = TextShaderPainter.shaderPipeline.getTextureUnit("tex");
}

// Meta

TextShaderPainter.__name__ = ["kha","graphics4","TextShaderPainter"];
TextShaderPainter.prototype = {
	get_pipeline: function() {
		return this.myPipeline;
	},
	set_pipeline: function(pipe) {
		if(pipe == null) {
			this.projectionLocation = TextShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
			this.textureLocation = TextShaderPainter.shaderPipeline.getTextureUnit("tex");
		} else {
			this.projectionLocation = pipe.getConstantLocation("projectionMatrix");
			this.textureLocation = pipe.getTextureUnit("tex");
		}
		return this.myPipeline = pipe;
	},
	setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	},
	initBuffers: function() {
		if(TextShaderPainter.rectVertexBuffer == null) {
			TextShaderPainter.rectVertexBuffer = new (kha_graphics4_VertexBuffer().default)(400,TextShaderPainter.structure,(kha_graphics4_Usage().default).DynamicUsage);
			TextShaderPainter.rectVertices = TextShaderPainter.rectVertexBuffer.lock();
			TextShaderPainter.indexBuffer = new (kha_graphics4_IndexBuffer().default)(600,(kha_graphics4_Usage().default).StaticUsage);
			var indices = TextShaderPainter.indexBuffer.lock();
			var _g = 0;
			while(_g < 100) {
				var i = _g++;
				indices[i * 3 * 2] = i * 4;
				indices[i * 3 * 2 + 1] = i * 4 + 1;
				indices[i * 3 * 2 + 2] = i * 4 + 2;
				indices[i * 3 * 2 + 3] = i * 4;
				indices[i * 3 * 2 + 4] = i * 4 + 2;
				indices[i * 3 * 2 + 5] = i * 4 + 3;
			}
			TextShaderPainter.indexBuffer.unlock();
		}
	},
	setRectVertices: function(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		var baseIndex = TextShaderPainter.bufferIndex * 9 * 4;
		TextShaderPainter.rectVertices[baseIndex] = bottomleftx;
		TextShaderPainter.rectVertices[baseIndex + 1] = bottomlefty;
		TextShaderPainter.rectVertices[baseIndex + 2] = -5.0;
		TextShaderPainter.rectVertices[baseIndex + 9] = topleftx;
		TextShaderPainter.rectVertices[baseIndex + 10] = toplefty;
		TextShaderPainter.rectVertices[baseIndex + 11] = -5.0;
		TextShaderPainter.rectVertices[baseIndex + 18] = toprightx;
		TextShaderPainter.rectVertices[baseIndex + 19] = toprighty;
		TextShaderPainter.rectVertices[baseIndex + 20] = -5.0;
		TextShaderPainter.rectVertices[baseIndex + 27] = bottomrightx;
		TextShaderPainter.rectVertices[baseIndex + 28] = bottomrighty;
		TextShaderPainter.rectVertices[baseIndex + 29] = -5.0;
	},
	setRectTexCoords: function(left,top,right,bottom) {
		var baseIndex = TextShaderPainter.bufferIndex * 9 * 4;
		TextShaderPainter.rectVertices[baseIndex + 3] = left;
		TextShaderPainter.rectVertices[baseIndex + 4] = bottom;
		TextShaderPainter.rectVertices[baseIndex + 12] = left;
		TextShaderPainter.rectVertices[baseIndex + 13] = top;
		TextShaderPainter.rectVertices[baseIndex + 21] = right;
		TextShaderPainter.rectVertices[baseIndex + 22] = top;
		TextShaderPainter.rectVertices[baseIndex + 30] = right;
		TextShaderPainter.rectVertices[baseIndex + 31] = bottom;
	},
	setRectColors: function(opacity,color) {
		var baseIndex = TextShaderPainter.bufferIndex * 9 * 4;
		var a = opacity * ((color >>> 24) * 0.00392156862745098);
		TextShaderPainter.rectVertices[baseIndex + 5] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 6] = ((color & 65280) >>> 8) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 7] = (color & 255) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 8] = a;
		TextShaderPainter.rectVertices[baseIndex + 14] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 15] = ((color & 65280) >>> 8) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 16] = (color & 255) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 17] = a;
		TextShaderPainter.rectVertices[baseIndex + 23] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 24] = ((color & 65280) >>> 8) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 25] = (color & 255) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 26] = a;
		TextShaderPainter.rectVertices[baseIndex + 32] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 33] = ((color & 65280) >>> 8) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 34] = (color & 255) * 0.00392156862745098;
		TextShaderPainter.rectVertices[baseIndex + 35] = a;
	},
	drawBuffer: function() {
		TextShaderPainter.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(TextShaderPainter.rectVertexBuffer);
		this.g.setIndexBuffer(TextShaderPainter.indexBuffer);
		this.g.setPipeline(this.get_pipeline() == null ? TextShaderPainter.shaderPipeline : this.get_pipeline());
		this.g.setTexture(this.textureLocation,TextShaderPainter.lastTexture);
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.setTextureParameters(this.textureLocation,(kha_graphics4_TextureAddressing().default).Clamp,(kha_graphics4_TextureAddressing().default).Clamp,this.bilinear ? (kha_graphics4_TextureFilter().default).LinearFilter : (kha_graphics4_TextureFilter().default).PointFilter,this.bilinear ? (kha_graphics4_TextureFilter().default).LinearFilter : (kha_graphics4_TextureFilter().default).PointFilter,(kha_graphics4_MipMapFilter().default).NoMipFilter);
		this.g.drawIndexedVertices(0,TextShaderPainter.bufferIndex * 2 * 3);
		this.g.setTexture(this.textureLocation,null);
		TextShaderPainter.bufferIndex = 0;
		TextShaderPainter.rectVertices = TextShaderPainter.rectVertexBuffer.lock();
	},
	setBilinearFilter: function(bilinear) {
		this.end();
		this.bilinear = bilinear;
	},
	setFont: function(font) {
		this.font = (js_Boot().default).__cast(font , (kha_Kravur().default));
	},
	startString: function(text) {
		this.text = text;
	},
	charCodeAt: function(position) {
		return (HxOverrides().default).cca(this.text,position);
	},
	stringLength: function() {
		return this.text.length;
	},
	endString: function() {
		this.text = null;
	},
	drawString: function(text,opacity,color,x,y,transformation,fontGlyphs) {
		var font = this.font._get(this.fontSize,fontGlyphs);
		var tex = font.getTexture();
		if(TextShaderPainter.lastTexture != null && tex != TextShaderPainter.lastTexture) {
			this.drawBuffer();
		}
		TextShaderPainter.lastTexture = tex;
		var xpos = x;
		var ypos = y;
		this.startString(text);
		var _g1 = 0;
		var _g = this.stringLength();
		while(_g1 < _g) {
			var i = _g1++;
			var q = font.getBakedQuad(this.bakedQuadCache,TextShaderPainter.findIndex(this.charCodeAt(i),fontGlyphs),xpos,ypos);
			if(q != null) {
				if(TextShaderPainter.bufferIndex + 1 >= 100) {
					this.drawBuffer();
				}
				this.setRectColors(opacity,color);
				this.setRectTexCoords(q.s0 * tex.get_width() / tex.get_realWidth(),q.t0 * tex.get_height() / tex.get_realHeight(),q.s1 * tex.get_width() / tex.get_realWidth(),q.t1 * tex.get_height() / tex.get_realHeight());
				var value = new (kha_math_FastVector2().default)(q.x0,q.y1);
				var w = transformation._02 * value.x + transformation._12 * value.y + transformation._22;
				var x1 = (transformation._00 * value.x + transformation._10 * value.y + transformation._20) / w;
				var y1 = (transformation._01 * value.x + transformation._11 * value.y + transformation._21) / w;
				var p0 = new (kha_math_FastVector2().default)(x1,y1);
				var value1 = new (kha_math_FastVector2().default)(q.x0,q.y0);
				var w1 = transformation._02 * value1.x + transformation._12 * value1.y + transformation._22;
				var x2 = (transformation._00 * value1.x + transformation._10 * value1.y + transformation._20) / w1;
				var y2 = (transformation._01 * value1.x + transformation._11 * value1.y + transformation._21) / w1;
				var p1 = new (kha_math_FastVector2().default)(x2,y2);
				var value2 = new (kha_math_FastVector2().default)(q.x1,q.y0);
				var w2 = transformation._02 * value2.x + transformation._12 * value2.y + transformation._22;
				var x3 = (transformation._00 * value2.x + transformation._10 * value2.y + transformation._20) / w2;
				var y3 = (transformation._01 * value2.x + transformation._11 * value2.y + transformation._21) / w2;
				var p2 = new (kha_math_FastVector2().default)(x3,y3);
				var value3 = new (kha_math_FastVector2().default)(q.x1,q.y1);
				var w3 = transformation._02 * value3.x + transformation._12 * value3.y + transformation._22;
				var x4 = (transformation._00 * value3.x + transformation._10 * value3.y + transformation._20) / w3;
				var y4 = (transformation._01 * value3.x + transformation._11 * value3.y + transformation._21) / w3;
				var p3 = new (kha_math_FastVector2().default)(x4,y4);
				this.setRectVertices(p0.x,p0.y,p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
				xpos += q.xadvance;
				++TextShaderPainter.bufferIndex;
			}
		}
		this.endString();
	},
	drawCharacters: function(text,start,length,opacity,color,x,y,transformation,fontGlyphs) {
		var font = this.font._get(this.fontSize,fontGlyphs);
		var tex = font.getTexture();
		if(TextShaderPainter.lastTexture != null && tex != TextShaderPainter.lastTexture) {
			this.drawBuffer();
		}
		TextShaderPainter.lastTexture = tex;
		var xpos = x;
		var ypos = y;
		var _g1 = start;
		var _g = start + length;
		while(_g1 < _g) {
			var i = _g1++;
			var q = font.getBakedQuad(this.bakedQuadCache,TextShaderPainter.findIndex(text[i],fontGlyphs),xpos,ypos);
			if(q != null) {
				if(TextShaderPainter.bufferIndex + 1 >= 100) {
					this.drawBuffer();
				}
				this.setRectColors(opacity,color);
				this.setRectTexCoords(q.s0 * tex.get_width() / tex.get_realWidth(),q.t0 * tex.get_height() / tex.get_realHeight(),q.s1 * tex.get_width() / tex.get_realWidth(),q.t1 * tex.get_height() / tex.get_realHeight());
				var value = new (kha_math_FastVector2().default)(q.x0,q.y1);
				var w = transformation._02 * value.x + transformation._12 * value.y + transformation._22;
				var x1 = (transformation._00 * value.x + transformation._10 * value.y + transformation._20) / w;
				var y1 = (transformation._01 * value.x + transformation._11 * value.y + transformation._21) / w;
				var p0 = new (kha_math_FastVector2().default)(x1,y1);
				var value1 = new (kha_math_FastVector2().default)(q.x0,q.y0);
				var w1 = transformation._02 * value1.x + transformation._12 * value1.y + transformation._22;
				var x2 = (transformation._00 * value1.x + transformation._10 * value1.y + transformation._20) / w1;
				var y2 = (transformation._01 * value1.x + transformation._11 * value1.y + transformation._21) / w1;
				var p1 = new (kha_math_FastVector2().default)(x2,y2);
				var value2 = new (kha_math_FastVector2().default)(q.x1,q.y0);
				var w2 = transformation._02 * value2.x + transformation._12 * value2.y + transformation._22;
				var x3 = (transformation._00 * value2.x + transformation._10 * value2.y + transformation._20) / w2;
				var y3 = (transformation._01 * value2.x + transformation._11 * value2.y + transformation._21) / w2;
				var p2 = new (kha_math_FastVector2().default)(x3,y3);
				var value3 = new (kha_math_FastVector2().default)(q.x1,q.y1);
				var w3 = transformation._02 * value3.x + transformation._12 * value3.y + transformation._22;
				var x4 = (transformation._00 * value3.x + transformation._10 * value3.y + transformation._20) / w3;
				var y4 = (transformation._01 * value3.x + transformation._11 * value3.y + transformation._21) / w3;
				var p3 = new (kha_math_FastVector2().default)(x4,y4);
				this.setRectVertices(p0.x,p0.y,p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
				xpos += q.xadvance;
				++TextShaderPainter.bufferIndex;
			}
		}
	},
	end: function() {
		if(TextShaderPainter.bufferIndex > 0) {
			this.drawBuffer();
		}
		TextShaderPainter.lastTexture = null;
	}
};
TextShaderPainter.prototype.__class__ = TextShaderPainter.prototype.constructor = $hxClasses["kha.graphics4.TextShaderPainter"] = TextShaderPainter;

// Init



// Statics

TextShaderPainter.initShaders = function() {
	if(TextShaderPainter.structure == null) {
		TextShaderPainter.structure = (kha_graphics4_Graphics2().default).createTextVertexStructure();
	}
	if(TextShaderPainter.shaderPipeline == null) {
		TextShaderPainter.shaderPipeline = (kha_graphics4_Graphics2().default).createTextPipeline(TextShaderPainter.structure);
		TextShaderPainter.shaderPipeline.compile();
	}
}
TextShaderPainter.findIndex = function(charcode,fontGlyphs) {
	var _g1 = 0;
	var _g = fontGlyphs.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(fontGlyphs[i] == charcode) {
			return i;
		}
	}
	return 0;
}
TextShaderPainter.shaderPipeline = null
TextShaderPainter.structure = null
TextShaderPainter.bufferSize = 100

// Export

exports.default = TextShaderPainter;