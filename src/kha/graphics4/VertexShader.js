// Class: kha.graphics4.VertexShader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}

// Constructor

var VertexShader = function(sources,files) {
	this.sources = [];
	var _g = 0;
	while(_g < sources.length) {
		var source = sources[_g];
		++_g;
		this.sources.push(source.toString());
	}
	this.type = 35633;
	this.shader = null;
	this.files = files;
}

// Meta

VertexShader.__name__ = ["kha","graphics4","VertexShader"];
VertexShader.prototype = {
	delete: function() {
		(kha_SystemImpl().default).gl.deleteShader(this.shader);
		this.shader = null;
		this.sources = null;
	}
};
VertexShader.prototype.__class__ = VertexShader.prototype.constructor = $hxClasses["kha.graphics4.VertexShader"] = VertexShader;

// Init



// Statics

VertexShader.fromSource = function(source) {
	var shader = new VertexShader([],["runtime-string"]);
	shader.sources.push(source);
	return shader;
}


// Export

exports.default = VertexShader;