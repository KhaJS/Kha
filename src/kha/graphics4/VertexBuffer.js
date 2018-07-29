// Class: kha.graphics4.VertexBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}
function kha_graphics4_Usage() {return require("./../../kha/graphics4/Usage");}
function Type() {return require("./../../Type");}
function Std() {return require("./../../Std");}

// Constructor

var VertexBuffer = function(vertexCount,structure,usage,instanceDataStepRate,canRead) {
	if(canRead == null) {
		canRead = false;
	}
	if(instanceDataStepRate == null) {
		instanceDataStepRate = 0;
	}
	this.usage = usage;
	this.instanceDataStepRate = instanceDataStepRate;
	this.mySize = vertexCount;
	this.myStride = 0;
	var _g = 0;
	var _g1 = structure.elements;
	while(_g < _g1.length) {
		var element = _g1[_g];
		++_g;
		var _g2 = element.data;
		switch((Type().default).enumIndex(_g2)) {
		case 0:
			this.myStride += 4;
			break;
		case 1:
			this.myStride += 8;
			break;
		case 2:
			this.myStride += 12;
			break;
		case 3:
			this.myStride += 16;
			break;
		case 4:
			this.myStride += 64;
			break;
		}
	}
	this.buffer = (kha_SystemImpl().default).gl.createBuffer();
	var this1 = new Float32Array((Std().default)["int"](vertexCount * this.myStride / 4));
	this._data = this1;
	this.sizes = [];
	this.offsets = [];
	this.sizes[structure.elements.length - 1] = 0;
	this.offsets[structure.elements.length - 1] = 0;
	var offset = 0;
	var index = 0;
	var _g3 = 0;
	var _g11 = structure.elements;
	while(_g3 < _g11.length) {
		var element1 = _g11[_g3];
		++_g3;
		var size;
		var _g21 = element1.data;
		switch((Type().default).enumIndex(_g21)) {
		case 0:
			size = 1;
			break;
		case 1:
			size = 2;
			break;
		case 2:
			size = 3;
			break;
		case 3:
			size = 4;
			break;
		case 4:
			size = 16;
			break;
		}
		this.sizes[index] = size;
		this.offsets[index] = offset;
		var _g31 = element1.data;
		switch((Type().default).enumIndex(_g31)) {
		case 0:
			offset += 4;
			break;
		case 1:
			offset += 8;
			break;
		case 2:
			offset += 12;
			break;
		case 3:
			offset += 16;
			break;
		case 4:
			offset += 64;
			break;
		}
		++index;
	}
}

// Meta

VertexBuffer.__name__ = ["kha","graphics4","VertexBuffer"];
VertexBuffer.prototype = {
	delete: function() {
		this._data = null;
		(kha_SystemImpl().default).gl.deleteBuffer(this.buffer);
	},
	lock: function(start,count) {
		if(start == null) {
			start = 0;
		}
		if(count == null) {
			count = this.mySize;
		}
		return this._data.subarray(start * this.stride(),(start + count) * this.stride());
	},
	unlock: function() {
		(kha_SystemImpl().default).gl.bindBuffer(34962,this.buffer);
		(kha_SystemImpl().default).gl.bufferData(34962,this._data,this.usage == (kha_graphics4_Usage().default).DynamicUsage ? 35048 : 35044);
	},
	stride: function() {
		return this.myStride;
	},
	count: function() {
		return this.mySize;
	},
	set: function(offset) {
		var ext = (kha_SystemImpl().default).gl2 ? true : (kha_SystemImpl().default).gl.getExtension("ANGLE_instanced_arrays");
		(kha_SystemImpl().default).gl.bindBuffer(34962,this.buffer);
		var attributesOffset = 0;
		var _g1 = 0;
		var _g = this.sizes.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.sizes[i] > 4) {
				var size = this.sizes[i];
				var addonOffset = 0;
				while(size > 0) {
					(kha_SystemImpl().default).gl.enableVertexAttribArray(offset + attributesOffset);
					(kha_SystemImpl().default).gl.vertexAttribPointer(offset + attributesOffset,4,5126,false,this.myStride,this.offsets[i] + addonOffset);
					if(ext) {
						if((kha_SystemImpl().default).gl2) {
							(kha_SystemImpl().default).gl.vertexAttribDivisor(offset + attributesOffset,this.instanceDataStepRate);
						} else {
							ext.vertexAttribDivisorANGLE(offset + attributesOffset,this.instanceDataStepRate);
						}
					}
					size -= 4;
					addonOffset += 16;
					++attributesOffset;
				}
			} else {
				(kha_SystemImpl().default).gl.enableVertexAttribArray(offset + attributesOffset);
				(kha_SystemImpl().default).gl.vertexAttribPointer(offset + attributesOffset,this.sizes[i],5126,false,this.myStride,this.offsets[i]);
				if(ext) {
					if((kha_SystemImpl().default).gl2) {
						(kha_SystemImpl().default).gl.vertexAttribDivisor(offset + attributesOffset,this.instanceDataStepRate);
					} else {
						ext.vertexAttribDivisorANGLE(offset + attributesOffset,this.instanceDataStepRate);
					}
				}
				++attributesOffset;
			}
		}
		return attributesOffset;
	}
};
VertexBuffer.prototype.__class__ = VertexBuffer.prototype.constructor = $hxClasses["kha.graphics4.VertexBuffer"] = VertexBuffer;

// Init



// Statics




// Export

exports.default = VertexBuffer;