// Class: kha.graphics4.VertexStructure

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_graphics4_VertexElement() {return require("./../../kha/graphics4/VertexElement");}
function Type() {return require("./../../Type");}

// Constructor

var VertexStructure = function() {
	this.elements = [];
	this.instanced = false;
}

// Meta

VertexStructure.__name__ = ["kha","graphics4","VertexStructure"];
VertexStructure.prototype = {
	add: function(name,data) {
		this.elements.push(new (kha_graphics4_VertexElement().default)(name,data));
	},
	size: function() {
		return this.elements.length;
	},
	byteSize: function() {
		var byteSize = 0;
		var _g1 = 0;
		var _g = this.elements.length;
		while(_g1 < _g) {
			var i = _g1++;
			byteSize += this.dataByteSize(this.elements[i].data);
		}
		return byteSize;
	},
	dataByteSize: function(data) {
		switch((Type().default).enumIndex(data)) {
		case 0:
			return 4;
		case 1:
			return 8;
		case 2:
			return 12;
		case 3:
			return 16;
		case 4:
			return 64;
		}
	},
	get: function(index) {
		return this.elements[index];
	}
};
VertexStructure.prototype.__class__ = VertexStructure.prototype.constructor = $hxClasses["kha.graphics4.VertexStructure"] = VertexStructure;

// Init



// Statics




// Export

exports.default = VertexStructure;