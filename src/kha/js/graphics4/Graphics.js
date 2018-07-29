// Class: kha.js.graphics4.Graphics

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function kha_graphics4_Graphics() {return require("./../../../kha/graphics4/Graphics");}
function Std() {return require("./../../../Std");}
function kha_graphics4_CubeMap() {return require("./../../../kha/graphics4/CubeMap");}
function js_Boot() {return require("./../../../js/Boot");}
function kha_WebGLImage() {return require("./../../../kha/WebGLImage");}
function kha_SystemImpl() {return require("./../../../kha/SystemImpl");}
function kha_System() {return require("./../../../kha/System");}
function Type() {return require("./../../../Type");}
function kha_graphics4_BlendingFactor() {return require("./../../../kha/graphics4/BlendingFactor");}
function kha_graphics4_VertexBuffer() {return require("./../../../kha/graphics4/VertexBuffer");}
function kha_graphics4_IndexBuffer() {return require("./../../../kha/graphics4/IndexBuffer");}
function kha_js_graphics4_TextureUnit() {return require("./../../../kha/js/graphics4/TextureUnit");}
function kha_js_Video() {return require("./../../../kha/js/Video");}
function kha_graphics4_TextureFilter() {return require("./../../../kha/graphics4/TextureFilter");}
function kha_js_graphics4_ConstantLocation() {return require("./../../../kha/js/graphics4/ConstantLocation");}
function kha_graphics4_CompareMode() {return require("./../../../kha/graphics4/CompareMode");}
function kha_graphics4_StencilAction() {return require("./../../../kha/graphics4/StencilAction");}

// Constructor

var Graphics = function(renderTarget) {
	var this1 = new Float32Array(9);
	this.matrix3Cache = this1;
	var this11 = new Float32Array(16);
	this.matrixCache = this11;
	this.isDepthAttachment = false;
	this.isCubeMap = false;
	this.colorMaskAlpha = true;
	this.colorMaskBlue = true;
	this.colorMaskGreen = true;
	this.colorMaskRed = true;
	this.depthMask = false;
	this.depthTest = false;
	this.renderTarget = renderTarget;
	this.init();
	if((kha_SystemImpl().default).gl2) {
		this.instancedExtension = true;
	} else {
		this.instancedExtension = (kha_SystemImpl().default).gl.getExtension("ANGLE_instanced_arrays");
		this.blendMinMaxExtension = (kha_SystemImpl().default).gl.getExtension("EXT_blend_minmax");
	}
}

// Meta

Graphics.__name__ = ["kha","js","graphics4","Graphics"];
Graphics.__interfaces__ = [(kha_graphics4_Graphics().default)];
Graphics.prototype = {
	init: function() {
		if(this.renderTarget == null) {
			return;
		}
		this.isCubeMap = (Std().default)["is"](this.renderTarget,(kha_graphics4_CubeMap().default));
		if(this.isCubeMap) {
			var cubeMap = (js_Boot().default).__cast(this.renderTarget , (kha_graphics4_CubeMap().default));
			this.renderTargetFrameBuffer = cubeMap.frameBuffer;
			this.renderTargetTexture = cubeMap.texture;
			this.isDepthAttachment = cubeMap.isDepthAttachment;
		} else {
			var image = (js_Boot().default).__cast(this.renderTarget , (kha_WebGLImage().default));
			this.renderTargetFrameBuffer = image.frameBuffer;
			this.renderTargetTexture = image.texture;
		}
	},
	begin: function(additionalRenderTargets) {
		(kha_SystemImpl().default).gl.enable(3042);
		(kha_SystemImpl().default).gl.blendFunc(770,771);
		if(this.renderTarget == null) {
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,null);
			(kha_SystemImpl().default).gl.viewport(0,0,(kha_System().default).windowWidth(),(kha_System().default).windowHeight());
		} else {
			(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.renderTargetFrameBuffer);
			(kha_SystemImpl().default).gl.viewport(0,0,this.renderTarget.get_width(),this.renderTarget.get_height());
			if(additionalRenderTargets != null) {
				(kha_SystemImpl().default).gl.framebufferTexture2D(36160,(kha_SystemImpl().default).drawBuffers.COLOR_ATTACHMENT0_WEBGL,3553,this.renderTargetTexture,0);
				var _g1 = 0;
				var _g = additionalRenderTargets.length;
				while(_g1 < _g) {
					var i = _g1++;
					(kha_SystemImpl().default).gl.framebufferTexture2D(36160,(kha_SystemImpl().default).drawBuffers.COLOR_ATTACHMENT0_WEBGL + i + 1,3553,((js_Boot().default).__cast(additionalRenderTargets[i] , (kha_WebGLImage().default))).texture,0);
				}
				var attachments = [(kha_SystemImpl().default).drawBuffers.COLOR_ATTACHMENT0_WEBGL];
				var _g11 = 0;
				var _g2 = additionalRenderTargets.length;
				while(_g11 < _g2) {
					var i1 = _g11++;
					attachments.push((kha_SystemImpl().default).drawBuffers.COLOR_ATTACHMENT0_WEBGL + i1 + 1);
				}
				if((kha_SystemImpl().default).gl2) {
					(kha_SystemImpl().default).gl.drawBuffers(attachments);
				} else {
					(kha_SystemImpl().default).drawBuffers.drawBuffersWEBGL(attachments);
				}
			}
		}
	},
	beginFace: function(face) {
		(kha_SystemImpl().default).gl.enable(3042);
		(kha_SystemImpl().default).gl.blendFunc(770,771);
		(kha_SystemImpl().default).gl.bindFramebuffer(36160,this.renderTargetFrameBuffer);
		(kha_SystemImpl().default).gl.framebufferTexture2D(36160,this.isDepthAttachment ? 36096 : 36064,34069 + face,this.renderTargetTexture,0);
		(kha_SystemImpl().default).gl.viewport(0,0,this.renderTarget.get_width(),this.renderTarget.get_height());
	},
	beginEye: function(eye) {
		(kha_SystemImpl().default).gl.enable(3042);
		(kha_SystemImpl().default).gl.blendFunc(770,771);
		(kha_SystemImpl().default).gl.bindFramebuffer(36160,null);
		if(eye == 0) {
			(kha_SystemImpl().default).gl.viewport(0,0,(Std().default)["int"]((kha_System().default).windowWidth() * 0.5),(kha_System().default).windowHeight());
		} else {
			(kha_SystemImpl().default).gl.viewport((Std().default)["int"]((kha_System().default).windowWidth() * 0.5),0,(Std().default)["int"]((kha_System().default).windowWidth() * 0.5),(kha_System().default).windowHeight());
		}
	},
	end: function() {
	},
	flush: function() {
	},
	vsynced: function() {
		return true;
	},
	refreshRate: function() {
		return 60;
	},
	clear: function(color,depth,stencil) {
		var clearMask = 0;
		if(color != null) {
			clearMask |= 16384;
			(kha_SystemImpl().default).gl.colorMask(true,true,true,true);
			(kha_SystemImpl().default).gl.clearColor(((color & 16711680) >>> 16) * 0.00392156862745098,((color & 65280) >>> 8) * 0.00392156862745098,(color & 255) * 0.00392156862745098,(color >>> 24) * 0.00392156862745098);
		}
		if(depth != null) {
			clearMask |= 256;
			(kha_SystemImpl().default).gl.enable(2929);
			(kha_SystemImpl().default).gl.depthMask(true);
			(kha_SystemImpl().default).gl.clearDepth(depth);
		}
		if(stencil != null) {
			clearMask |= 1024;
			(kha_SystemImpl().default).gl.enable(2960);
			(kha_SystemImpl().default).gl.stencilMask(255);
			(kha_SystemImpl().default).gl.clearStencil(stencil);
		}
		(kha_SystemImpl().default).gl.clear(clearMask);
		(kha_SystemImpl().default).gl.colorMask(this.colorMaskRed,this.colorMaskGreen,this.colorMaskBlue,this.colorMaskAlpha);
		if(this.depthTest) {
			(kha_SystemImpl().default).gl.enable(2929);
		} else {
			(kha_SystemImpl().default).gl.disable(2929);
		}
		(kha_SystemImpl().default).gl.depthMask(this.depthMask);
	},
	viewport: function(x,y,width,height) {
		if(this.renderTarget == null) {
			(kha_SystemImpl().default).gl.viewport(x,(kha_System().default).windowHeight(0) - y - height,width,height);
		} else {
			(kha_SystemImpl().default).gl.viewport(x,y,width,height);
		}
	},
	scissor: function(x,y,width,height) {
		(kha_SystemImpl().default).gl.enable(3089);
		if(this.renderTarget == null) {
			(kha_SystemImpl().default).gl.scissor(x,(kha_System().default).windowHeight(0) - y - height,width,height);
		} else {
			(kha_SystemImpl().default).gl.scissor(x,y,width,height);
		}
	},
	disableScissor: function() {
		(kha_SystemImpl().default).gl.disable(3089);
	},
	renderTargetsInvertedY: function() {
		return true;
	},
	setDepthMode: function(write,mode) {
		switch((Type().default).enumIndex(mode)) {
		case 0:
			if(write) {
				(kha_SystemImpl().default).gl.enable(2929);
			} else {
				(kha_SystemImpl().default).gl.disable(2929);
			}
			this.depthTest = write;
			(kha_SystemImpl().default).gl.depthFunc(519);
			break;
		case 1:
			(kha_SystemImpl().default).gl.enable(2929);
			this.depthTest = true;
			(kha_SystemImpl().default).gl.depthFunc(512);
			break;
		case 2:
			(kha_SystemImpl().default).gl.enable(2929);
			this.depthTest = true;
			(kha_SystemImpl().default).gl.depthFunc(514);
			break;
		case 3:
			(kha_SystemImpl().default).gl.enable(2929);
			this.depthTest = true;
			(kha_SystemImpl().default).gl.depthFunc(517);
			break;
		case 4:
			(kha_SystemImpl().default).gl.enable(2929);
			this.depthTest = true;
			(kha_SystemImpl().default).gl.depthFunc(513);
			break;
		case 5:
			(kha_SystemImpl().default).gl.enable(2929);
			this.depthTest = true;
			(kha_SystemImpl().default).gl.depthFunc(515);
			break;
		case 6:
			(kha_SystemImpl().default).gl.enable(2929);
			this.depthTest = true;
			(kha_SystemImpl().default).gl.depthFunc(516);
			break;
		case 7:
			(kha_SystemImpl().default).gl.enable(2929);
			this.depthTest = true;
			(kha_SystemImpl().default).gl.depthFunc(518);
			break;
		}
		(kha_SystemImpl().default).gl.depthMask(write);
		this.depthMask = write;
	},
	setBlendingMode: function(source,destination,operation,alphaSource,alphaDestination,alphaOperation) {
		if(source == (kha_graphics4_BlendingFactor().default).BlendOne && destination == (kha_graphics4_BlendingFactor().default).BlendZero) {
			(kha_SystemImpl().default).gl.disable(3042);
		} else {
			(kha_SystemImpl().default).gl.enable(3042);
			(kha_SystemImpl().default).gl.blendFuncSeparate(Graphics.getBlendFunc(source),Graphics.getBlendFunc(destination),Graphics.getBlendFunc(alphaSource),Graphics.getBlendFunc(alphaDestination));
			(kha_SystemImpl().default).gl.blendEquationSeparate(Graphics.getBlendOp(operation),Graphics.getBlendOp(alphaOperation));
		}
	},
	createVertexBuffer: function(vertexCount,structure,usage,canRead) {
		if(canRead == null) {
			canRead = false;
		}
		return new (kha_graphics4_VertexBuffer().default)(vertexCount,structure,usage);
	},
	setVertexBuffer: function(vertexBuffer) {
		((js_Boot().default).__cast(vertexBuffer , (kha_graphics4_VertexBuffer().default))).set(0);
	},
	setVertexBuffers: function(vertexBuffers) {
		var offset = 0;
		var _g = 0;
		while(_g < vertexBuffers.length) {
			var vertexBuffer = vertexBuffers[_g];
			++_g;
			offset += ((js_Boot().default).__cast(vertexBuffer , (kha_graphics4_VertexBuffer().default))).set(offset);
		}
	},
	createIndexBuffer: function(indexCount,usage,canRead) {
		if(canRead == null) {
			canRead = false;
		}
		return new (kha_graphics4_IndexBuffer().default)(indexCount,usage);
	},
	setIndexBuffer: function(indexBuffer) {
		this.indicesCount = indexBuffer.count();
		((js_Boot().default).__cast(indexBuffer , (kha_graphics4_IndexBuffer().default))).set();
	},
	setTexture: function(stage,texture) {
		if(texture == null) {
			(kha_SystemImpl().default).gl.activeTexture(33984 + ((js_Boot().default).__cast(stage , (kha_js_graphics4_TextureUnit().default))).value);
			(kha_SystemImpl().default).gl.bindTexture(3553,null);
		} else {
			((js_Boot().default).__cast(texture , (kha_WebGLImage().default))).set(((js_Boot().default).__cast(stage , (kha_js_graphics4_TextureUnit().default))).value);
		}
	},
	setTextureDepth: function(stage,texture) {
		((js_Boot().default).__cast(texture , (kha_WebGLImage().default))).setDepth(((js_Boot().default).__cast(stage , (kha_js_graphics4_TextureUnit().default))).value);
	},
	setTextureArray: function(unit,texture) {
	},
	setVideoTexture: function(unit,texture) {
		if(texture == null) {
			(kha_SystemImpl().default).gl.activeTexture(33984 + ((js_Boot().default).__cast(unit , (kha_js_graphics4_TextureUnit().default))).value);
			(kha_SystemImpl().default).gl.bindTexture(3553,null);
		} else {
			((js_Boot().default).__cast(((js_Boot().default).__cast(texture , (kha_js_Video().default))).texture , (kha_WebGLImage().default))).set(((js_Boot().default).__cast(unit , (kha_js_graphics4_TextureUnit().default))).value);
		}
	},
	setImageTexture: function(unit,texture) {
	},
	setTextureParameters: function(texunit,uAddressing,vAddressing,minificationFilter,magnificationFilter,mipmapFilter) {
		(kha_SystemImpl().default).gl.activeTexture(33984 + ((js_Boot().default).__cast(texunit , (kha_js_graphics4_TextureUnit().default))).value);
		switch((Type().default).enumIndex(uAddressing)) {
		case 0:
			(kha_SystemImpl().default).gl.texParameteri(3553,10242,10497);
			break;
		case 1:
			(kha_SystemImpl().default).gl.texParameteri(3553,10242,33648);
			break;
		case 2:
			(kha_SystemImpl().default).gl.texParameteri(3553,10242,33071);
			break;
		}
		switch((Type().default).enumIndex(vAddressing)) {
		case 0:
			(kha_SystemImpl().default).gl.texParameteri(3553,10243,10497);
			break;
		case 1:
			(kha_SystemImpl().default).gl.texParameteri(3553,10243,33648);
			break;
		case 2:
			(kha_SystemImpl().default).gl.texParameteri(3553,10243,33071);
			break;
		}
		switch((Type().default).enumIndex(minificationFilter)) {
		case 0:
			switch((Type().default).enumIndex(mipmapFilter)) {
			case 0:
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9728);
				break;
			case 1:
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9984);
				break;
			case 2:
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9986);
				break;
			}
			break;
		case 1:case 2:
			switch((Type().default).enumIndex(mipmapFilter)) {
			case 0:
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9729);
				break;
			case 1:
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9985);
				break;
			case 2:
				(kha_SystemImpl().default).gl.texParameteri(3553,10241,9987);
				break;
			}
			if(minificationFilter == (kha_graphics4_TextureFilter().default).AnisotropicFilter) {
				(kha_SystemImpl().default).gl.texParameteri(3553,(kha_SystemImpl().default).anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT,4);
			}
			break;
		}
		switch((Type().default).enumIndex(magnificationFilter)) {
		case 0:
			(kha_SystemImpl().default).gl.texParameteri(3553,10240,9728);
			break;
		case 1:case 2:
			(kha_SystemImpl().default).gl.texParameteri(3553,10240,9729);
			break;
		}
	},
	setTexture3DParameters: function(texunit,uAddressing,vAddressing,wAddressing,minificationFilter,magnificationFilter,mipmapFilter) {
	},
	setCubeMap: function(stage,cubeMap) {
		if(cubeMap == null) {
			(kha_SystemImpl().default).gl.activeTexture(33984 + ((js_Boot().default).__cast(stage , (kha_js_graphics4_TextureUnit().default))).value);
			(kha_SystemImpl().default).gl.bindTexture(34067,null);
		} else {
			cubeMap.set(((js_Boot().default).__cast(stage , (kha_js_graphics4_TextureUnit().default))).value);
		}
	},
	setCubeMapDepth: function(stage,cubeMap) {
		cubeMap.setDepth(((js_Boot().default).__cast(stage , (kha_js_graphics4_TextureUnit().default))).value);
	},
	setCullMode: function(mode) {
		switch((Type().default).enumIndex(mode)) {
		case 0:
			(kha_SystemImpl().default).gl.enable(2884);
			(kha_SystemImpl().default).gl.cullFace(1029);
			break;
		case 1:
			(kha_SystemImpl().default).gl.enable(2884);
			(kha_SystemImpl().default).gl.cullFace(1028);
			break;
		case 2:
			(kha_SystemImpl().default).gl.disable(2884);
			break;
		}
	},
	setPipeline: function(pipe) {
		this.setCullMode(pipe.cullMode);
		this.setDepthMode(pipe.depthWrite,pipe.depthMode);
		this.setStencilParameters(pipe.stencilMode,pipe.stencilBothPass,pipe.stencilDepthFail,pipe.stencilFail,pipe.stencilReferenceValue,pipe.stencilReadMask,pipe.stencilWriteMask);
		this.setBlendingMode(pipe.blendSource,pipe.blendDestination,pipe.blendOperation,pipe.alphaBlendSource,pipe.alphaBlendDestination,pipe.alphaBlendOperation);
		pipe.set();
		this.colorMaskRed = pipe.colorWriteMaskRed;
		this.colorMaskGreen = pipe.colorWriteMaskGreen;
		this.colorMaskBlue = pipe.colorWriteMaskBlue;
		this.colorMaskAlpha = pipe.colorWriteMaskAlpha;
	},
	setBool: function(location,value) {
		(kha_SystemImpl().default).gl.uniform1i(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value ? 1 : 0);
	},
	setInt: function(location,value) {
		(kha_SystemImpl().default).gl.uniform1i(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value);
	},
	setFloat: function(location,value) {
		(kha_SystemImpl().default).gl.uniform1f(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value);
	},
	setFloat2: function(location,value1,value2) {
		(kha_SystemImpl().default).gl.uniform2f(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value1,value2);
	},
	setFloat3: function(location,value1,value2,value3) {
		(kha_SystemImpl().default).gl.uniform3f(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value1,value2,value3);
	},
	setFloat4: function(location,value1,value2,value3,value4) {
		(kha_SystemImpl().default).gl.uniform4f(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value1,value2,value3,value4);
	},
	setFloats: function(location,values) {
		var webglLocation = (js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default));
		var _g = webglLocation.type;
		switch(_g) {
		case 35664:
			(kha_SystemImpl().default).gl.uniform2fv(webglLocation.value,values);
			break;
		case 35665:
			(kha_SystemImpl().default).gl.uniform3fv(webglLocation.value,values);
			break;
		case 35666:
			(kha_SystemImpl().default).gl.uniform4fv(webglLocation.value,values);
			break;
		case 35676:
			(kha_SystemImpl().default).gl.uniformMatrix4fv(webglLocation.value,false,values);
			break;
		default:
			(kha_SystemImpl().default).gl.uniform1fv(webglLocation.value,values);
		}
	},
	setVector2: function(location,value) {
		(kha_SystemImpl().default).gl.uniform2f(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value.x,value.y);
	},
	setVector3: function(location,value) {
		(kha_SystemImpl().default).gl.uniform3f(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value.x,value.y,value.z);
	},
	setVector4: function(location,value) {
		(kha_SystemImpl().default).gl.uniform4f(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,value.x,value.y,value.z,value.w);
	},
	setMatrix: function(location,matrix) {
		this.matrixCache[0] = matrix._00;
		this.matrixCache[1] = matrix._01;
		this.matrixCache[2] = matrix._02;
		this.matrixCache[3] = matrix._03;
		this.matrixCache[4] = matrix._10;
		this.matrixCache[5] = matrix._11;
		this.matrixCache[6] = matrix._12;
		this.matrixCache[7] = matrix._13;
		this.matrixCache[8] = matrix._20;
		this.matrixCache[9] = matrix._21;
		this.matrixCache[10] = matrix._22;
		this.matrixCache[11] = matrix._23;
		this.matrixCache[12] = matrix._30;
		this.matrixCache[13] = matrix._31;
		this.matrixCache[14] = matrix._32;
		this.matrixCache[15] = matrix._33;
		(kha_SystemImpl().default).gl.uniformMatrix4fv(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,false,this.matrixCache);
	},
	setMatrix3: function(location,matrix) {
		this.matrix3Cache[0] = matrix._00;
		this.matrix3Cache[1] = matrix._01;
		this.matrix3Cache[2] = matrix._02;
		this.matrix3Cache[3] = matrix._10;
		this.matrix3Cache[4] = matrix._11;
		this.matrix3Cache[5] = matrix._12;
		this.matrix3Cache[6] = matrix._20;
		this.matrix3Cache[7] = matrix._21;
		this.matrix3Cache[8] = matrix._22;
		(kha_SystemImpl().default).gl.uniformMatrix3fv(((js_Boot().default).__cast(location , (kha_js_graphics4_ConstantLocation().default))).value,false,this.matrix3Cache);
	},
	drawIndexedVertices: function(start,count) {
		if(count == null) {
			count = -1;
		}
		if(start == null) {
			start = 0;
		}
		var type = (kha_SystemImpl().default).elementIndexUint == null ? 5123 : 5125;
		var size = type == 5123 ? 2 : 4;
		(kha_SystemImpl().default).gl.drawElements(4,count == -1 ? this.indicesCount : count,type,start * size);
	},
	convertStencilAction: function(action) {
		switch((Type().default).enumIndex(action)) {
		case 0:
			return 7680;
		case 1:
			return 0;
		case 2:
			return 7681;
		case 3:
			return 7682;
		case 4:
			return 34055;
		case 5:
			return 7683;
		case 6:
			return 34056;
		case 7:
			return 5386;
		}
	},
	setStencilParameters: function(compareMode,bothPass,depthFail,stencilFail,referenceValue,readMask,writeMask) {
		if(writeMask == null) {
			writeMask = 255;
		}
		if(readMask == null) {
			readMask = 255;
		}
		if(compareMode == (kha_graphics4_CompareMode().default).Always && bothPass == (kha_graphics4_StencilAction().default).Keep && depthFail == (kha_graphics4_StencilAction().default).Keep && stencilFail == (kha_graphics4_StencilAction().default).Keep) {
			(kha_SystemImpl().default).gl.disable(2960);
		} else {
			(kha_SystemImpl().default).gl.enable(2960);
			var stencilFunc = 0;
			switch((Type().default).enumIndex(compareMode)) {
			case 0:
				stencilFunc = 519;
				break;
			case 1:
				stencilFunc = 512;
				break;
			case 2:
				stencilFunc = 514;
				break;
			case 3:
				stencilFunc = 517;
				break;
			case 4:
				stencilFunc = 513;
				break;
			case 5:
				stencilFunc = 515;
				break;
			case 6:
				stencilFunc = 516;
				break;
			case 7:
				stencilFunc = 518;
				break;
			}
			(kha_SystemImpl().default).gl.stencilMask(writeMask);
			(kha_SystemImpl().default).gl.stencilOp(this.convertStencilAction(stencilFail),this.convertStencilAction(depthFail),this.convertStencilAction(bothPass));
			(kha_SystemImpl().default).gl.stencilFunc(stencilFunc,referenceValue,readMask);
		}
	},
	drawIndexedVerticesInstanced: function(instanceCount,start,count) {
		if(count == null) {
			count = -1;
		}
		if(start == null) {
			start = 0;
		}
		if(this.instancedRenderingAvailable()) {
			var type = (kha_SystemImpl().default).elementIndexUint == null ? 5123 : 5125;
			var typeSize = (kha_SystemImpl().default).elementIndexUint == null ? 2 : 4;
			if((kha_SystemImpl().default).gl2) {
				(kha_SystemImpl().default).gl.drawElementsInstanced(4,count == -1 ? this.indicesCount : count,type,start * typeSize,instanceCount);
			} else {
				this.instancedExtension.drawElementsInstancedANGLE(4,count == -1 ? this.indicesCount : count,type,start * typeSize,instanceCount);
			}
		}
	},
	instancedRenderingAvailable: function() {
		return this.instancedExtension;
	}
};
Graphics.prototype.__class__ = Graphics.prototype.constructor = $hxClasses["kha.js.graphics4.Graphics"] = Graphics;

// Init



// Statics

Graphics.getBlendFunc = function(factor) {
	switch((Type().default).enumIndex(factor)) {
	case 0:case 2:
		return 0;
	case 1:
		return 1;
	case 3:
		return 770;
	case 4:
		return 772;
	case 5:
		return 771;
	case 6:
		return 773;
	case 7:
		return 768;
	case 8:
		return 774;
	case 9:
		return 769;
	case 10:
		return 775;
	}
}
Graphics.getBlendOp = function(op) {
	switch((Type().default).enumIndex(op)) {
	case 0:
		return 32774;
	case 1:
		return 32778;
	case 2:
		return 32779;
	case 3:
		return 32775;
	case 4:
		return 32776;
	}
}


// Export

exports.default = Graphics;