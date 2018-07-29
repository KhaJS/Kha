// Class: kha.Image

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function kha_Resource() {return require("./../kha/Resource");}
function kha_Canvas() {return require("./../kha/Canvas");}
function kha_graphics4_TextureFormat() {return require("./../kha/graphics4/TextureFormat");}
function kha_graphics4_Usage() {return require("./../kha/graphics4/Usage");}
function kha_SystemImpl() {return require("./../kha/SystemImpl");}
function kha_CanvasImage() {return require("./../kha/CanvasImage");}
function kha_WebGLImage() {return require("./../kha/WebGLImage");}
function haxe_crypto_Base64() {return require("./../haxe/crypto/Base64");}
function js_Boot() {return require("./../js/Boot");}
function js_Browser() {return require("./../js/Browser");}

// Constructor

var Image = function(){}

// Meta

Image.__name__ = ["kha","Image"];
Image.__interfaces__ = [(kha_Resource().default),(kha_Canvas().default)];
Image.prototype = {
	isOpaque: function(x,y) {
		return false;
	},
	at: function(x,y) {
		return -16777216;
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
	getPixels: function() {
		return null;
	},
	generateMipmaps: function(levels) {
	},
	setMipmaps: function(mipmaps) {
	},
	setDepthStencilFrom: function(image) {
	},
	clear: function(x,y,z,width,height,depth,color) {
	},
	get_width: function() {
		return 0;
	},
	get_height: function() {
		return 0;
	},
	get_depth: function() {
		return 1;
	},
	get_realWidth: function() {
		return 0;
	},
	get_realHeight: function() {
		return 0;
	},
	get_g1: function() {
		return null;
	},
	get_g2: function() {
		return null;
	},
	get_g4: function() {
		return null;
	}
};
Image.prototype.__class__ = Image.prototype.constructor = $hxClasses["kha.Image"] = Image;

// Init



// Statics

Image.create = function(width,height,format,usage) {
	if(format == null) {
		format = (kha_graphics4_TextureFormat().default).RGBA32;
	}
	if(usage == null) {
		usage = (kha_graphics4_Usage().default).StaticUsage;
	}
	if((kha_SystemImpl().default).gl == null) {
		return new (kha_CanvasImage().default)(width,height,format,false);
	} else {
		return new (kha_WebGLImage().default)(width,height,format,false,0,1);
	}
}
Image.create3D = function(width,height,depth,format,usage) {
	return null;
}
Image.createRenderTarget = function(width,height,format,depthStencil,antiAliasingSamples,contextId) {
	if(contextId == null) {
		contextId = 0;
	}
	if(antiAliasingSamples == null) {
		antiAliasingSamples = 1;
	}
	if(depthStencil == null) {
		depthStencil = 0;
	}
	if(format == null) {
		format = (kha_graphics4_TextureFormat().default).RGBA32;
	}
	if((kha_SystemImpl().default).gl == null) {
		return new (kha_CanvasImage().default)(width,height,format,true);
	} else {
		return new (kha_WebGLImage().default)(width,height,format,true,depthStencil,antiAliasingSamples);
	}
}
Image.fromImage = function(image,readable) {
	if((kha_SystemImpl().default).gl == null) {
		var img = new (kha_CanvasImage().default)(image.width,image.height,(kha_graphics4_TextureFormat().default).RGBA32,false);
		img.image = image;
		img.createTexture();
		return img;
	} else {
		var img1 = new (kha_WebGLImage().default)(image.width,image.height,(kha_graphics4_TextureFormat().default).RGBA32,false,0,1);
		img1.image = image;
		img1.createTexture();
		return img1;
	}
}
Image.fromBytes = function(bytes,width,height,format,usage) {
	if(format == null) {
		format = (kha_graphics4_TextureFormat().default).RGBA32;
	}
	if(usage == null) {
		usage = (kha_graphics4_Usage().default).StaticUsage;
	}
	if((kha_SystemImpl().default).gl != null) {
		var img = new (kha_WebGLImage().default)(width,height,format,false,0,1);
		img.image = img.bytesToArray(bytes);
		img.createTexture();
		return img;
	}
	return null;
}
Image.fromBytes3D = function(bytes,width,height,depth,format,usage) {
	return null;
}
Image.fromEncodedBytes = function(bytes,fileExtention,doneCallback,errorCallback,readable) {
	if(readable == null) {
		readable = false;
	}
	var dataUrl = "data:image;base64," + (haxe_crypto_Base64().default).encode(bytes);
	var imageElement = (js_Boot().default).__cast((js_Browser().default).get_document().createElement("img") , HTMLImageElement);
	imageElement.onload = function() {
		var tmp = Image.fromImage(imageElement,readable);
		doneCallback(tmp);
	};
	imageElement.onerror = function() {
		errorCallback("Image was not created");
	};
	imageElement.src = dataUrl;
}
Image.fromVideo = function(video) {
	if((kha_SystemImpl().default).gl == null) {
		var img = new (kha_CanvasImage().default)(video.element.videoWidth,video.element.videoHeight,(kha_graphics4_TextureFormat().default).RGBA32,false);
		img.video = video.element;
		img.createTexture();
		return img;
	} else {
		var img1 = new (kha_WebGLImage().default)(video.element.videoWidth,video.element.videoHeight,(kha_graphics4_TextureFormat().default).RGBA32,false,0,1);
		img1.video = video.element;
		img1.createTexture();
		return img1;
	}
}
Image.get_maxSize = function() {
	if((kha_SystemImpl().default).gl == null) {
		return 8192;
	} else {
		return (kha_SystemImpl().default).gl.getParameter(3379);
	}
}
Image.get_nonPow2Supported = function() {
	return (kha_SystemImpl().default).gl != null;
}


// Export

exports.default = Image;