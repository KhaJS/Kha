// Class: kha.graphics4.ColoredShaderPainter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_graphics4_VertexBuffer() {return require("./../../kha/graphics4/VertexBuffer");}
function kha_graphics4_Usage() {return require("./../../kha/graphics4/Usage");}
function kha_graphics4_IndexBuffer() {return require("./../../kha/graphics4/IndexBuffer");}
function kha_graphics4_Graphics2() {return require("./../../kha/graphics4/Graphics2");}
function kha_graphics4_BlendingFactor() {return require("./../../kha/graphics4/BlendingFactor");}

// Constructor

var ColoredShaderPainter = function(g4) {
	this.destinationBlend = (kha_graphics4_BlendingFactor().default).Undefined;
	this.sourceBlend = (kha_graphics4_BlendingFactor().default).Undefined;
	this.myPipeline = null;
	this.g = g4;
	ColoredShaderPainter.bufferIndex = 0;
	ColoredShaderPainter.triangleBufferIndex = 0;
	ColoredShaderPainter.initShaders();
	this.initBuffers();
	this.projectionLocation = ColoredShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
}

// Meta

ColoredShaderPainter.__name__ = ["kha","graphics4","ColoredShaderPainter"];
ColoredShaderPainter.prototype = {
	get_pipeline: function() {
		return this.myPipeline;
	},
	set_pipeline: function(pipe) {
		if(pipe == null) {
			this.projectionLocation = ColoredShaderPainter.shaderPipeline.getConstantLocation("projectionMatrix");
		} else {
			this.projectionLocation = pipe.getConstantLocation("projectionMatrix");
		}
		return this.myPipeline = pipe;
	},
	setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	},
	initBuffers: function() {
		if(ColoredShaderPainter.rectVertexBuffer == null) {
			ColoredShaderPainter.rectVertexBuffer = new (kha_graphics4_VertexBuffer().default)(400,ColoredShaderPainter.structure,(kha_graphics4_Usage().default).DynamicUsage);
			ColoredShaderPainter.rectVertices = ColoredShaderPainter.rectVertexBuffer.lock();
			ColoredShaderPainter.indexBuffer = new (kha_graphics4_IndexBuffer().default)(600,(kha_graphics4_Usage().default).StaticUsage);
			var indices = ColoredShaderPainter.indexBuffer.lock();
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
			ColoredShaderPainter.indexBuffer.unlock();
			ColoredShaderPainter.triangleVertexBuffer = new (kha_graphics4_VertexBuffer().default)(300,ColoredShaderPainter.structure,(kha_graphics4_Usage().default).DynamicUsage);
			ColoredShaderPainter.triangleVertices = ColoredShaderPainter.triangleVertexBuffer.lock();
			ColoredShaderPainter.triangleIndexBuffer = new (kha_graphics4_IndexBuffer().default)(300,(kha_graphics4_Usage().default).StaticUsage);
			var triIndices = ColoredShaderPainter.triangleIndexBuffer.lock();
			var _g1 = 0;
			while(_g1 < 100) {
				var i1 = _g1++;
				triIndices[i1 * 3] = i1 * 3;
				triIndices[i1 * 3 + 1] = i1 * 3 + 1;
				triIndices[i1 * 3 + 2] = i1 * 3 + 2;
			}
			ColoredShaderPainter.triangleIndexBuffer.unlock();
		}
	},
	setRectVertices: function(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		var baseIndex = ColoredShaderPainter.bufferIndex * 7 * 4;
		ColoredShaderPainter.rectVertices[baseIndex] = bottomleftx;
		ColoredShaderPainter.rectVertices[baseIndex + 1] = bottomlefty;
		ColoredShaderPainter.rectVertices[baseIndex + 2] = -5.0;
		ColoredShaderPainter.rectVertices[baseIndex + 7] = topleftx;
		ColoredShaderPainter.rectVertices[baseIndex + 8] = toplefty;
		ColoredShaderPainter.rectVertices[baseIndex + 9] = -5.0;
		ColoredShaderPainter.rectVertices[baseIndex + 14] = toprightx;
		ColoredShaderPainter.rectVertices[baseIndex + 15] = toprighty;
		ColoredShaderPainter.rectVertices[baseIndex + 16] = -5.0;
		ColoredShaderPainter.rectVertices[baseIndex + 21] = bottomrightx;
		ColoredShaderPainter.rectVertices[baseIndex + 22] = bottomrighty;
		ColoredShaderPainter.rectVertices[baseIndex + 23] = -5.0;
	},
	setRectColors: function(opacity,color) {
		var baseIndex = ColoredShaderPainter.bufferIndex * 7 * 4;
		var a = opacity * ((color >>> 24) * 0.00392156862745098);
		ColoredShaderPainter.rectVertices[baseIndex + 3] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 4] = ((color & 65280) >>> 8) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 5] = (color & 255) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 6] = a;
		ColoredShaderPainter.rectVertices[baseIndex + 10] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 11] = ((color & 65280) >>> 8) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 12] = (color & 255) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 13] = a;
		ColoredShaderPainter.rectVertices[baseIndex + 17] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 18] = ((color & 65280) >>> 8) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 19] = (color & 255) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 20] = a;
		ColoredShaderPainter.rectVertices[baseIndex + 24] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 25] = ((color & 65280) >>> 8) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 26] = (color & 255) * 0.00392156862745098;
		ColoredShaderPainter.rectVertices[baseIndex + 27] = a;
	},
	setTriVertices: function(x1,y1,x2,y2,x3,y3) {
		var baseIndex = ColoredShaderPainter.triangleBufferIndex * 7 * 3;
		ColoredShaderPainter.triangleVertices[baseIndex] = x1;
		ColoredShaderPainter.triangleVertices[baseIndex + 1] = y1;
		ColoredShaderPainter.triangleVertices[baseIndex + 2] = -5.0;
		ColoredShaderPainter.triangleVertices[baseIndex + 7] = x2;
		ColoredShaderPainter.triangleVertices[baseIndex + 8] = y2;
		ColoredShaderPainter.triangleVertices[baseIndex + 9] = -5.0;
		ColoredShaderPainter.triangleVertices[baseIndex + 14] = x3;
		ColoredShaderPainter.triangleVertices[baseIndex + 15] = y3;
		ColoredShaderPainter.triangleVertices[baseIndex + 16] = -5.0;
	},
	setTriColors: function(opacity,color) {
		var baseIndex = ColoredShaderPainter.triangleBufferIndex * 7 * 3;
		var a = opacity * ((color >>> 24) * 0.00392156862745098);
		ColoredShaderPainter.triangleVertices[baseIndex + 3] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 4] = ((color & 65280) >>> 8) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 5] = (color & 255) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 6] = a;
		ColoredShaderPainter.triangleVertices[baseIndex + 10] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 11] = ((color & 65280) >>> 8) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 12] = (color & 255) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 13] = a;
		ColoredShaderPainter.triangleVertices[baseIndex + 17] = ((color & 16711680) >>> 16) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 18] = ((color & 65280) >>> 8) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 19] = (color & 255) * 0.00392156862745098;
		ColoredShaderPainter.triangleVertices[baseIndex + 20] = a;
	},
	drawBuffer: function(trisDone) {
		if(!trisDone) {
			this.endTris(true);
		}
		ColoredShaderPainter.rectVertexBuffer.unlock();
		this.g.setVertexBuffer(ColoredShaderPainter.rectVertexBuffer);
		this.g.setIndexBuffer(ColoredShaderPainter.indexBuffer);
		this.g.setPipeline(this.get_pipeline() == null ? ColoredShaderPainter.shaderPipeline : this.get_pipeline());
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,ColoredShaderPainter.bufferIndex * 2 * 3);
		ColoredShaderPainter.bufferIndex = 0;
		ColoredShaderPainter.rectVertices = ColoredShaderPainter.rectVertexBuffer.lock();
	},
	drawTriBuffer: function(rectsDone) {
		if(!rectsDone) {
			this.endRects(true);
		}
		ColoredShaderPainter.triangleVertexBuffer.unlock();
		this.g.setVertexBuffer(ColoredShaderPainter.triangleVertexBuffer);
		this.g.setIndexBuffer(ColoredShaderPainter.triangleIndexBuffer);
		this.g.setPipeline(this.get_pipeline() == null ? ColoredShaderPainter.shaderPipeline : this.get_pipeline());
		this.g.setMatrix(this.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,ColoredShaderPainter.triangleBufferIndex * 3);
		ColoredShaderPainter.triangleBufferIndex = 0;
		ColoredShaderPainter.triangleVertices = ColoredShaderPainter.triangleVertexBuffer.lock();
	},
	fillRect: function(opacity,color,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		if(ColoredShaderPainter.triangleBufferIndex > 0) {
			this.drawTriBuffer(true);
		}
		if(ColoredShaderPainter.bufferIndex + 1 >= 100) {
			this.drawBuffer(false);
		}
		this.setRectColors(opacity,color);
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++ColoredShaderPainter.bufferIndex;
	},
	fillTriangle: function(opacity,color,x1,y1,x2,y2,x3,y3) {
		if(ColoredShaderPainter.bufferIndex > 0) {
			this.drawBuffer(true);
		}
		if(ColoredShaderPainter.triangleBufferIndex + 1 >= 100) {
			this.drawTriBuffer(false);
		}
		this.setTriColors(opacity,color);
		this.setTriVertices(x1,y1,x2,y2,x3,y3);
		++ColoredShaderPainter.triangleBufferIndex;
	},
	endTris: function(rectsDone) {
		if(ColoredShaderPainter.triangleBufferIndex > 0) {
			this.drawTriBuffer(rectsDone);
		}
	},
	endRects: function(trisDone) {
		if(ColoredShaderPainter.bufferIndex > 0) {
			this.drawBuffer(trisDone);
		}
	},
	end: function() {
		this.endTris(false);
		this.endRects(false);
	}
};
ColoredShaderPainter.prototype.__class__ = ColoredShaderPainter.prototype.constructor = $hxClasses["kha.graphics4.ColoredShaderPainter"] = ColoredShaderPainter;

// Init



// Statics

ColoredShaderPainter.initShaders = function() {
	if(ColoredShaderPainter.structure == null) {
		ColoredShaderPainter.structure = (kha_graphics4_Graphics2().default).createColoredVertexStructure();
	}
	if(ColoredShaderPainter.shaderPipeline == null) {
		ColoredShaderPainter.shaderPipeline = (kha_graphics4_Graphics2().default).createColoredPipeline(ColoredShaderPainter.structure);
		ColoredShaderPainter.shaderPipeline.compile();
	}
}
ColoredShaderPainter.shaderPipeline = null
ColoredShaderPainter.structure = null
ColoredShaderPainter.bufferSize = 100
ColoredShaderPainter.triangleBufferSize = 100

// Export

exports.default = ColoredShaderPainter;