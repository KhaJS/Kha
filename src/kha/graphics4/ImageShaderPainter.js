// Class: kha.graphics4.ImageShaderPainter

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
function kha_graphics4_Graphics2() {return require("./../../kha/graphics4/Graphics2");}
function kha_graphics4_BlendingFactor() {return require("./../../kha/graphics4/BlendingFactor");}

// Constructor

var ImageShaderPainter = function(g4) {
	this.destinationBlend = (kha_graphics4_BlendingFactor().default).Undefined;
	this.sourceBlend = (kha_graphics4_BlendingFactor().default).Undefined;
	this.myPipeline = null;
	this.bilinearMipmaps = false;
	this.bilinear = false;
	this.g = g4;
	ImageShaderPainter.bufferIndex = 0;
	ImageShaderPainter.initShaders();
	this.initBuffers();
	this.projectionLocation = ImageShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
	this.textureLocation = ImageShaderPainter.shaderPipeline.getTextureUnit("tex");
}

// Meta

ImageShaderPainter.__name__ = ["kha","graphics4","ImageShaderPainter"];
ImageShaderPainter.prototype = {
	get_pipeline: function() {
		return this.myPipeline;
	},
	set_pipeline: function(pipe) {
		if(pipe == null) {
			this.projectionLocation = ImageShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
			this.textureLocation = ImageShaderPainter.shaderPipeline.getTextureUnit("tex");
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
		if(ImageShaderPainter.rectVertexBuffer == null) {
			ImageShaderPainter.rectVertexBuffer = new (kha_graphics4_VertexBuffer().default)(6000,ImageShaderPainter.structure,(kha_graphics4_Usage().default).DynamicUsage);
			ImageShaderPainter.rectVertices = ImageShaderPainter.rectVertexBuffer.lock();
			ImageShaderPainter.indexBuffer = new (kha_graphics4_IndexBuffer().default)(9000,(kha_graphics4_Usage().default).StaticUsage);
			var indices = ImageShaderPainter.indexBuffer.lock();
			var _g = 0;
			while(_g < 1500) {
				var i = _g++;
				indices[i * 3 * 2] = i * 4;
				indices[i * 3 * 2 + 1] = i * 4 + 1;
				indices[i * 3 * 2 + 2] = i * 4 + 2;
				indices[i * 3 * 2 + 3] = i * 4;
				indices[i * 3 * 2 + 4] = i * 4 + 2;
				indices[i * 3 * 2 + 5] = i * 4 + 3;
			}
			ImageShaderPainter.indexBuffer.unlock();
		}
	},
	setRectVertices: function(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		var baseIndex = ImageShaderPainter.bufferIndex * 9 * 4;
		ImageShaderPainter.rectVertices[baseIndex] = bottomleftx;
		ImageShaderPainter.rectVertices[baseIndex + 1] = bottomlefty;
		ImageShaderPainter.rectVertices[baseIndex + 2] = -5.0;
		ImageShaderPainter.rectVertices[baseIndex + 9] = topleftx;
		ImageShaderPainter.rectVertices[baseIndex + 10] = toplefty;
		ImageShaderPainter.rectVertices[baseIndex + 11] = -5.0;
		ImageShaderPainter.rectVertices[baseIndex + 18] = toprightx;
		ImageShaderPainter.rectVertices[baseIndex + 19] = toprighty;
		ImageShaderPainter.rectVertices[baseIndex + 20] = -5.0;
		ImageShaderPainter.rectVertices[baseIndex + 27] = bottomrightx;
		ImageShaderPainter.rectVertices[baseIndex + 28] = bottomrighty;
		ImageShaderPainter.rectVertices[baseIndex + 29] = -5.0;
	},
	setRectTexCoords: function(left,top,right,bottom) {
		var baseIndex = ImageShaderPainter.bufferIndex * 9 * 4;
		ImageShaderPainter.rectVertices[baseIndex + 3] = left;
		ImageShaderPainter.rectVertices[baseIndex + 4] = bottom;
		ImageShaderPainter.rectVertices[baseIndex + 12] = left;
		ImageShaderPainter.rectVertices[baseIndex + 13] = top;
		ImageShaderPainter.rectVertices[baseIndex + 21] = right;
		ImageShaderPainter.rectVertices[baseIndex + 22] = top;
		ImageShaderPainter.rectVertices[baseIndex + 30] = right;
		ImageShaderPainter.rectVertices[baseIndex + 31] = bottom;
	},
	setRectColor: function(r,g,b,a) {
		var baseIndex = ImageShaderPainter.bufferIndex * 9 * 4;
		ImageShaderPainter.rectVertices[baseIndex + 5] = r;
		ImageShaderPainter.rectVertices[baseIndex + 6] = g;
		ImageShaderPainter.rectVertices[baseIndex + 7] = b;
		ImageShaderPainter.rectVertices[baseIndex + 8] = a;
		ImageShaderPainter.rectVertices[baseIndex + 14] = r;
		ImageShaderPainter.rectVertices[baseIndex + 15] = g;
		ImageShaderPainter.rectVertices[baseIndex + 16] = b;
		ImageShaderPainter.rectVertices[baseIndex + 17] = a;
		ImageShaderPainter.rectVertices[baseIndex + 23] = r;
		ImageShaderPainter.rectVertices[baseIndex + 24] = g;
		ImageShaderPainter.rectVertices[baseIndex + 25] = b;
		ImageShaderPainter.rectVertices[baseIndex + 26] = a;
		ImageShaderPainter.rectVertices[baseIndex + 32] = r;
		ImageShaderPainter.rectVertices[baseIndex + 33] = g;
		ImageShaderPainter.rectVertices[baseIndex + 34] = b;
		ImageShaderPainter.rectVertices[baseIndex + 35] = a;
	},
	drawBuffer: function() {
		ImageShaderPainter.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(ImageShaderPainter.rectVertexBuffer);
		this.g.setIndexBuffer(ImageShaderPainter.indexBuffer);
		this.g.setPipeline(this.get_pipeline() == null ? ImageShaderPainter.shaderPipeline : this.get_pipeline());
		this.g.setTexture(this.textureLocation,ImageShaderPainter.lastTexture);
		this.g.setTextureParameters(this.textureLocation,(kha_graphics4_TextureAddressing().default).Clamp,(kha_graphics4_TextureAddressing().default).Clamp,this.bilinear ? (kha_graphics4_TextureFilter().default).LinearFilter : (kha_graphics4_TextureFilter().default).PointFilter,this.bilinear ? (kha_graphics4_TextureFilter().default).LinearFilter : (kha_graphics4_TextureFilter().default).PointFilter,this.bilinearMipmaps ? (kha_graphics4_MipMapFilter().default).LinearMipFilter : (kha_graphics4_MipMapFilter().default).NoMipFilter);
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,ImageShaderPainter.bufferIndex * 2 * 3);
		this.g.setTexture(this.textureLocation,null);
		ImageShaderPainter.bufferIndex = 0;
		ImageShaderPainter.rectVertices = ImageShaderPainter.rectVertexBuffer.lock();
	},
	setBilinearFilter: function(bilinear) {
		this.end();
		this.bilinear = bilinear;
	},
	setBilinearMipmapFilter: function(bilinear) {
		this.end();
		this.bilinearMipmaps = bilinear;
	},
	drawImage: function(img,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty,opacity,color) {
		var tex = img;
		if(ImageShaderPainter.bufferIndex + 1 >= 1500 || ImageShaderPainter.lastTexture != null && tex != ImageShaderPainter.lastTexture) {
			this.drawBuffer();
		}
		this.setRectColor(((color & 16711680) >>> 16) * 0.00392156862745098,((color & 65280) >>> 8) * 0.00392156862745098,(color & 255) * 0.00392156862745098,(color >>> 24) * 0.00392156862745098 * opacity);
		this.setRectTexCoords(0,0,tex.get_width() / tex.get_realWidth(),tex.get_height() / tex.get_realHeight());
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++ImageShaderPainter.bufferIndex;
		ImageShaderPainter.lastTexture = tex;
	},
	drawImage2: function(img,sx,sy,sw,sh,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty,opacity,color) {
		var tex = img;
		if(ImageShaderPainter.bufferIndex + 1 >= 1500 || ImageShaderPainter.lastTexture != null && tex != ImageShaderPainter.lastTexture) {
			this.drawBuffer();
		}
		this.setRectTexCoords(sx / tex.get_realWidth(),sy / tex.get_realHeight(),(sx + sw) / tex.get_realWidth(),(sy + sh) / tex.get_realHeight());
		this.setRectColor(((color & 16711680) >>> 16) * 0.00392156862745098,((color & 65280) >>> 8) * 0.00392156862745098,(color & 255) * 0.00392156862745098,(color >>> 24) * 0.00392156862745098 * opacity);
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++ImageShaderPainter.bufferIndex;
		ImageShaderPainter.lastTexture = tex;
	},
	drawImageScale: function(img,sx,sy,sw,sh,left,top,right,bottom,opacity,color) {
		var tex = img;
		if(ImageShaderPainter.bufferIndex + 1 >= 1500 || ImageShaderPainter.lastTexture != null && tex != ImageShaderPainter.lastTexture) {
			this.drawBuffer();
		}
		this.setRectTexCoords(sx / tex.get_realWidth(),sy / tex.get_realHeight(),(sx + sw) / tex.get_realWidth(),(sy + sh) / tex.get_realHeight());
		this.setRectColor(((color & 16711680) >>> 16) * 0.00392156862745098,((color & 65280) >>> 8) * 0.00392156862745098,(color & 255) * 0.00392156862745098,opacity);
		this.setRectVertices(left,bottom,left,top,right,top,right,bottom);
		++ImageShaderPainter.bufferIndex;
		ImageShaderPainter.lastTexture = tex;
	},
	end: function() {
		if(ImageShaderPainter.bufferIndex > 0) {
			this.drawBuffer();
		}
		ImageShaderPainter.lastTexture = null;
	}
};
ImageShaderPainter.prototype.__class__ = ImageShaderPainter.prototype.constructor = $hxClasses["kha.graphics4.ImageShaderPainter"] = ImageShaderPainter;

// Init



// Statics

ImageShaderPainter.initShaders = function() {
	if(ImageShaderPainter.structure == null) {
		ImageShaderPainter.structure = (kha_graphics4_Graphics2().default).createImageVertexStructure();
	}
	if(ImageShaderPainter.shaderPipeline == null) {
		ImageShaderPainter.shaderPipeline = (kha_graphics4_Graphics2().default).createImagePipeline(ImageShaderPainter.structure);
		ImageShaderPainter.shaderPipeline.compile();
	}
}
ImageShaderPainter.shaderPipeline = null
ImageShaderPainter.structure = null
ImageShaderPainter.bufferSize = 1500
ImageShaderPainter.vertexSize = 9

// Export

exports.default = ImageShaderPainter;