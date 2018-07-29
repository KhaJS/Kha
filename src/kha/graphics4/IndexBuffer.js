// Class: kha.graphics4.IndexBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_SystemImpl() {return require("./../../kha/SystemImpl");}
function kha_graphics4_Usage() {return require("./../../kha/graphics4/Usage");}

// Constructor

var IndexBuffer = function(indexCount,usage,canRead) {
	if(canRead == null) {
		canRead = false;
	}
	this.usage = usage;
	this.mySize = indexCount;
	this.buffer = (kha_SystemImpl().default).gl.createBuffer();
	var this1 = new Uint32Array(indexCount);
	this._data = this1;
}

// Meta

IndexBuffer.__name__ = ["kha","graphics4","IndexBuffer"];
IndexBuffer.prototype = {
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
		return this._data.subarray(start,start + count);
	},
	unlock: function() {
		(kha_SystemImpl().default).gl.bindBuffer(34963,this.buffer);
		var glData = (kha_SystemImpl().default).elementIndexUint == null ? new Uint16Array(this._data) : this._data;
		(kha_SystemImpl().default).gl.bufferData(34963,glData,this.usage == (kha_graphics4_Usage().default).DynamicUsage ? 35048 : 35044);
	},
	set: function() {
		(kha_SystemImpl().default).gl.bindBuffer(34963,this.buffer);
	},
	count: function() {
		return this.mySize;
	}
};
IndexBuffer.prototype.__class__ = IndexBuffer.prototype.constructor = $hxClasses["kha.graphics4.IndexBuffer"] = IndexBuffer;

// Init



// Statics




// Export

exports.default = IndexBuffer;