// Class: kha.graphics4.CubeMap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_Resource() {return require("./../../kha/Resource");}
function kha_Canvas() {return require("./../../kha/Canvas");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}
function Type() {return require("./../../Type");}
function kha_graphics4_TextureFormat() {return require("./../../kha/graphics4/TextureFormat");}
function kha_js_graphics4_Graphics() {return require("./../../kha/js/graphics4/Graphics");}

// Constructor

var CubeMap = function(size,format,renderTarget,depthStencilFormat) {
	this.isDepthAttachment = false;
	this.depthTexture = null;
	this.texture = null;
	this.frameBuffer = null;
	this.myWidth = size;
	this.myHeight = size;
	this.format = format;
	this.renderTarget = renderTarget;
	this.depthStencilFormat = depthStencilFormat;
	if(renderTarget) {
		this.createTexture();
	}
}

// Meta

CubeMap.__name__ = ["kha","graphics4","CubeMap"];
CubeMap.__interfaces__ = [(kha_Resource().default),(kha_Canvas().default)];
CubeMap.prototype = {
	createTexture: function() {
		if((kha_SystemImpl().default).gl == null) {
			return;
		}
		this.texture = (kha_SystemImpl().default).gl.createTexture();
		(kha_SystemImpl().default).gl.bindTexture(34067,this.texture);
		(kha_SystemImpl().default).gl.texParameteri(34067,10240,9729);
		(kha_SystemImpl().default).gl.texParameteri(34067,10241,9729);
		(kha_SystemImpl().default).gl.texParameteri(34067,10242,33071);
		(kha_SystemImpl().default).gl.texParameteri(34067,10243,33071);
		if(this.renderTarget) {
			this.frameBuffer = (kha_SystemImpl().default).gl.createFramebuffer();
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
			var _g = this.format;
			switch((Type().default).enumIndex(_g)) {
			case 0:
				var _g1 = 0;
				while(_g1 < 6) {
					var i = _g1++;
					(kha_SystemImpl().default).gl.texImage2D(34069 + i,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				}
				break;
			case 2:
				var _g2 = 0;
				while(_g2 < 6) {
					var i1 = _g2++;
					(kha_SystemImpl().default).gl.texImage2D(34069 + i1,0,(kha_SystemImpl().default).gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,null);
				}
				break;
			case 3:
				var _g3 = 0;
				while(_g3 < 6) {
					var i2 = _g3++;
					(kha_SystemImpl().default).gl.texImage2D(34069 + i2,0,(kha_SystemImpl().default).gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
				}
				break;
			case 4:
				var _g4 = 0;
				while(_g4 < 6) {
					var i3 = _g4++;
					(kha_SystemImpl().default).gl.texImage2D(34069 + i3,0,(kha_SystemImpl().default).gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,null);
				}
				break;
			case 5:
				var _g5 = 0;
				while(_g5 < 6) {
					var i4 = _g5++;
					(kha_SystemImpl().default).gl.texImage2D(34069 + i4,0,(kha_SystemImpl().default).gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,6406,5126,null);
				}
				break;
			case 6:
				var _g6 = 0;
				while(_g6 < 6) {
					var i5 = _g6++;
					(kha_SystemImpl().default).gl.texImage2D(34069 + i5,0,(kha_SystemImpl().default).gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,6406,(kha_SystemImpl().default).halfFloat.HALF_FLOAT_OES,null);
				}
				break;
			default:
				var _g7 = 0;
				while(_g7 < 6) {
					var i6 = _g7++;
					(kha_SystemImpl().default).gl.texImage2D(34069 + i6,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				}
			}
			if(this.format == (kha_graphics4_TextureFormat().default).DEPTH16) {
				(kha_SystemImpl().default).gl.texParameteri(34067,10240,9728);
				(kha_SystemImpl().default).gl.texParameteri(34067,10241,9728);
				this.isDepthAttachment = true;
				if(!(kha_SystemImpl().default).gl2) {
					var colortex = (kha_SystemImpl().default).gl.createTexture();
					(kha_SystemImpl().default).gl.bindTexture(34067,colortex);
					var _g11 = 0;
					while(_g11 < 6) {
						var i7 = _g11++;
						(kha_SystemImpl().default).gl.texImage2D(34069 + i7,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
						(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36064,34069 + i7,colortex,0);
					}
					(kha_SystemImpl().default).gl.bindTexture(34067,this.texture);
				}
			}
			this.initDepthStencilBuffer(this.depthStencilFormat);
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,null);
		}
		(kha_SystemImpl().default).gl.bindTexture(34067,null);
	},
	initDepthStencilBuffer: function(depthStencilFormat) {
		switch(depthStencilFormat) {
		case 0:
			break;
		case 1:case 5:
			this.depthTexture = (kha_SystemImpl().default).gl.createTexture();
			(kha_SystemImpl().default).gl.bindTexture(34067,this.depthTexture);
			if(depthStencilFormat == 1) {
				(kha_SystemImpl().default).gl.texImage2D(34067,0,(kha_SystemImpl().default).gl2 ? 33190 : 6402,this.myWidth,this.myHeight,0,6402,5125,null);
			} else {
				(kha_SystemImpl().default).gl.texImage2D(34067,0,(kha_SystemImpl().default).gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
			}
			(kha_SystemImpl().default).gl.texParameteri(34067,10240,9728);
			(kha_SystemImpl().default).gl.texParameteri(34067,10241,9728);
			(kha_SystemImpl().default).gl.texParameteri(34067,10242,33071);
			(kha_SystemImpl().default).gl.texParameteri(34067,10243,33071);
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
			(kha_SystemImpl().default).gl.framebufferTexture2D(36160,36096,34067,this.depthTexture,0);
			break;
		case 2:case 3:case 4:
			this.depthTexture = (kha_SystemImpl().default).gl.createTexture();
			(kha_SystemImpl().default).gl.bindTexture(34067,this.depthTexture);
			(kha_SystemImpl().default).gl.texImage2D(34067,0,(kha_SystemImpl().default).gl2 ? 35056 : 34041,this.myWidth,this.myHeight,0,34041,(kha_SystemImpl().default).depthTexture.UNSIGNED_INT_24_8_WEBGL,null);
			(kha_SystemImpl().default).gl.texParameteri(34067,10240,9728);
			(kha_SystemImpl().default).gl.texParameteri(34067,10241,9728);
			(kha_SystemImpl().default).gl.texParameteri(34067,10242,33071);
			(kha_SystemImpl().default).gl.texParameteri(34067,10243,33071);
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.frameBuffer);
			(kha_SystemImpl().default).gl.framebufferTexture2D(36160,33306,34067,this.depthTexture,0);
			break;
		}
	},
	set: function(stage) {
		(kha_SystemImpl().default).gl.activeTexture(33984 + stage);
		(kha_SystemImpl().default).gl.bindTexture(34067,this.texture);
	},
	setDepth: function(stage) {
		(kha_SystemImpl().default).gl.activeTexture(33984 + stage);
		(kha_SystemImpl().default).gl.bindTexture(34067,this.depthTexture);
	},
	unload: function() {
	},
	lock: function(level) {
		if(level == null) {
			level = 0;
		}
		return null;
	},
	unlock: function() {
	},
	get_width: function() {
		return this.myWidth;
	},
	get_height: function() {
		return this.myHeight;
	},
	get_g1: function() {
		return null;
	},
	get_g2: function() {
		return null;
	},
	get_g4: function() {
		if(this.graphics4 == null) {
			this.graphics4 = new (kha_js_graphics4_Graphics().default)(this);
		}
		return this.graphics4;
	}
};
CubeMap.prototype.__class__ = CubeMap.prototype.constructor = $hxClasses["kha.graphics4.CubeMap"] = CubeMap;

// Init



// Statics

CubeMap.createRenderTarget = function(size,format,depthStencil,contextId) {
	if(contextId == null) {
		contextId = 0;
	}
	if(format == null) {
		format = (kha_graphics4_TextureFormat().default).RGBA32;
	}
	if(depthStencil == null) {
		depthStencil = 0;
	}
	return new CubeMap(size,format,true,depthStencil);
}
CubeMap.GL_RGBA16F = 34842
CubeMap.GL_RGBA32F = 34836
CubeMap.GL_R16F = 33325
CubeMap.GL_R32F = 33326
CubeMap.GL_DEPTH_COMPONENT24 = 33190
CubeMap.GL_DEPTH24_STENCIL8 = 35056
CubeMap.GL_DEPTH32F_STENCIL8 = 36013

// Export

exports.default = CubeMap;