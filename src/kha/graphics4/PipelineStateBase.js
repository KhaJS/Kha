// Class: kha.graphics4.PipelineStateBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_graphics4_CullMode() {return require("./../../kha/graphics4/CullMode");}
function kha_graphics4_CompareMode() {return require("./../../kha/graphics4/CompareMode");}
function kha_graphics4_StencilAction() {return require("./../../kha/graphics4/StencilAction");}
function kha_graphics4_BlendingFactor() {return require("./../../kha/graphics4/BlendingFactor");}
function kha_graphics4_BlendingOperation() {return require("./../../kha/graphics4/BlendingOperation");}

// Constructor

var PipelineStateBase = function() {
	this.inputLayout = null;
	this.vertexShader = null;
	this.fragmentShader = null;
	this.geometryShader = null;
	this.tessellationControlShader = null;
	this.tessellationEvaluationShader = null;
	this.cullMode = (kha_graphics4_CullMode().default).None;
	this.depthWrite = false;
	this.depthMode = (kha_graphics4_CompareMode().default).Always;
	this.stencilMode = (kha_graphics4_CompareMode().default).Always;
	this.stencilBothPass = (kha_graphics4_StencilAction().default).Keep;
	this.stencilDepthFail = (kha_graphics4_StencilAction().default).Keep;
	this.stencilFail = (kha_graphics4_StencilAction().default).Keep;
	this.stencilReferenceValue = 0;
	this.stencilReadMask = 255;
	this.stencilWriteMask = 255;
	this.blendSource = (kha_graphics4_BlendingFactor().default).BlendOne;
	this.blendDestination = (kha_graphics4_BlendingFactor().default).BlendZero;
	this.blendOperation = (kha_graphics4_BlendingOperation().default).Add;
	this.alphaBlendSource = (kha_graphics4_BlendingFactor().default).BlendOne;
	this.alphaBlendDestination = (kha_graphics4_BlendingFactor().default).BlendZero;
	this.alphaBlendOperation = (kha_graphics4_BlendingOperation().default).Add;
	this.set_colorWriteMask(true);
	this.conservativeRasterization = false;
}

// Meta

PipelineStateBase.__name__ = ["kha","graphics4","PipelineStateBase"];
PipelineStateBase.prototype = {
	set_colorWriteMask: function(value) {
		return this.colorWriteMaskRed = this.colorWriteMaskBlue = this.colorWriteMaskGreen = this.colorWriteMaskAlpha = value;
	}
};
PipelineStateBase.prototype.__class__ = PipelineStateBase.prototype.constructor = $hxClasses["kha.graphics4.PipelineStateBase"] = PipelineStateBase;

// Init



// Statics




// Export

exports.default = PipelineStateBase;