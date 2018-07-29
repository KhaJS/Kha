// Class: kha.graphics4.PipelineState

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function kha_graphics4_PipelineStateBase() {return require("./../../kha/graphics4/PipelineStateBase");}
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}
function kha_graphics4_VertexData() {return require("./../../kha/graphics4/VertexData");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function kha_js_graphics4_ConstantLocation() {return require("./../../kha/js/graphics4/ConstantLocation");}
function kha_js_graphics4_TextureUnit() {return require("./../../kha/js/graphics4/TextureUnit");}

// Constructor

var PipelineState = function() {
	this.program = null;
	(kha_graphics4_PipelineStateBase().default).call(this);
	this.textures = [];
	this.textureValues = [];
}

// Meta

PipelineState.__name__ = ["kha","graphics4","PipelineState"];
PipelineState.__super__ = (kha_graphics4_PipelineStateBase().default);
PipelineState.prototype = $extend((kha_graphics4_PipelineStateBase().default).prototype, {
	delete: function() {
		if(this.program != null) {
			(kha_SystemImpl().default).gl.deleteProgram(this.program);
		}
	},
	compile: function() {
		if(this.program != null) {
			(kha_SystemImpl().default).gl.deleteProgram(this.program);
		}
		this.program = (kha_SystemImpl().default).gl.createProgram();
		this.compileShader(this.vertexShader);
		this.compileShader(this.fragmentShader);
		(kha_SystemImpl().default).gl.attachShader(this.program,this.vertexShader.shader);
		(kha_SystemImpl().default).gl.attachShader(this.program,this.fragmentShader.shader);
		var index = 0;
		var _g = 0;
		var _g1 = this.inputLayout;
		while(_g < _g1.length) {
			var structure = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = structure.elements;
			while(_g2 < _g3.length) {
				var element = _g3[_g2];
				++_g2;
				(kha_SystemImpl().default).gl.bindAttribLocation(this.program,index,element.name);
				if(element.data == (kha_graphics4_VertexData().default).Float4x4) {
					index += 4;
				} else {
					++index;
				}
			}
		}
		(kha_SystemImpl().default).gl.linkProgram(this.program);
		if(!(kha_SystemImpl().default).gl.getProgramParameter(this.program,35714)) {
			throw new (js__$Boot_HaxeError().default)("Could not link the shader program:\n" + (kha_SystemImpl().default).gl.getProgramInfoLog(this.program));
		}
	},
	set: function() {
		(kha_SystemImpl().default).gl.useProgram(this.program);
		var _g1 = 0;
		var _g = this.textureValues.length;
		while(_g1 < _g) {
			var index = _g1++;
			(kha_SystemImpl().default).gl.uniform1i(this.textureValues[index],index);
		}
		(kha_SystemImpl().default).gl.colorMask(this.colorWriteMaskRed,this.colorWriteMaskGreen,this.colorWriteMaskBlue,this.colorWriteMaskAlpha);
	},
	compileShader: function(shader) {
		if(shader.shader != null) {
			return;
		}
		var s = (kha_SystemImpl().default).gl.createShader(shader.type);
		var highp = (kha_SystemImpl().default).gl.getShaderPrecisionFormat(35632,36338);
		var highpSupported = highp.precision != 0;
		var files = shader.files;
		var _g1 = 0;
		var _g = files.length;
		while(_g1 < _g) {
			var i = _g1++;
			if((kha_SystemImpl().default).gl2) {
				if(files[i].indexOf("-webgl2") >= 0 || files[i].indexOf("runtime-string") >= 0) {
					(kha_SystemImpl().default).gl.shaderSource(s,shader.sources[i]);
					break;
				}
			} else {
				if(!highpSupported && (files[i].indexOf("-relaxed") >= 0 || files[i].indexOf("runtime-string") >= 0)) {
					(kha_SystemImpl().default).gl.shaderSource(s,shader.sources[i]);
					break;
				}
				if(highpSupported && (files[i].indexOf("-relaxed") < 0 || files[i].indexOf("runtime-string") >= 0)) {
					(kha_SystemImpl().default).gl.shaderSource(s,shader.sources[i]);
					break;
				}
			}
		}
		(kha_SystemImpl().default).gl.compileShader(s);
		if(!(kha_SystemImpl().default).gl.getShaderParameter(s,35713)) {
			throw new (js__$Boot_HaxeError().default)("Could not compile shader:\n" + (kha_SystemImpl().default).gl.getShaderInfoLog(s));
		}
		shader.shader = s;
	},
	getConstantLocation: function(name) {
		var location = (kha_SystemImpl().default).gl.getUniformLocation(this.program,name);
		var type = 5126;
		var count = (kha_SystemImpl().default).gl.getProgramParameter(this.program,35718);
		var _g1 = 0;
		var _g = count;
		while(_g1 < _g) {
			var i = _g1++;
			var info = (kha_SystemImpl().default).gl.getActiveUniform(this.program,i);
			if(info.name == name || info.name == name + "[0]") {
				type = info.type;
				break;
			}
		}
		return new (kha_js_graphics4_ConstantLocation().default)(location,type);
	},
	getTextureUnit: function(name) {
		var index = this.findTexture(name);
		if(index < 0) {
			var location = (kha_SystemImpl().default).gl.getUniformLocation(this.program,name);
			index = this.textures.length;
			this.textureValues.push(location);
			this.textures.push(name);
		}
		return new (kha_js_graphics4_TextureUnit().default)(index);
	},
	findTexture: function(name) {
		var _g1 = 0;
		var _g = this.textures.length;
		while(_g1 < _g) {
			var index = _g1++;
			if(this.textures[index] == name) {
				return index;
			}
		}
		return -1;
	}
});
PipelineState.prototype.__class__ = PipelineState.prototype.constructor = $hxClasses["kha.graphics4.PipelineState"] = PipelineState;

// Init



// Statics




// Export

exports.default = PipelineState;