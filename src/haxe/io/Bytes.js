// Class: haxe.io.Bytes

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}
function StringTools() {return require("./../../StringTools");}

// Constructor

var Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
}

// Meta

Bytes.__name__ = ["haxe","io","Bytes"];
Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	},
	set: function(pos,v) {
		this.b[pos] = v & 255;
	},
	blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	},
	sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		return new Bytes(this.b.buffer.slice(pos + this.b.byteOffset,pos + this.b.byteOffset + len));
	},
	initData: function() {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
	},
	getDouble: function(pos) {
		this.initData();
		return this.data.getFloat64(pos,true);
	},
	getFloat: function(pos) {
		this.initData();
		return this.data.getFloat32(pos,true);
	},
	setDouble: function(pos,v) {
		this.initData();
		this.data.setFloat64(pos,v,true);
	},
	setFloat: function(pos,v) {
		this.initData();
		this.data.setFloat32(pos,v,true);
	},
	getUInt16: function(pos) {
		this.initData();
		return this.data.getUint16(pos,true);
	},
	getInt32: function(pos) {
		this.initData();
		return this.data.getInt32(pos,true);
	},
	setInt32: function(pos,v) {
		this.initData();
		this.data.setInt32(pos,v,true);
	},
	getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) {
					break;
				}
				s += fcc(c);
			} else if(c < 224) {
				s += fcc((c & 63) << 6 | b[i++] & 127);
			} else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	},
	toString: function() {
		return this.getString(0,this.length);
	},
	getData: function() {
		return this.b.bufferValue;
	}
};
Bytes.prototype.__class__ = Bytes.prototype.constructor = $hxClasses["haxe.io.Bytes"] = Bytes;

// Init



// Statics

Bytes.alloc = function(length) {
	return new Bytes(new ArrayBuffer(length));
}
Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = (StringTools().default).fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | (StringTools().default).fastCodeAt(s,i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new Bytes(new Uint8Array(a).buffer);
}
Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new Bytes(b);
}


// Export

exports.default = Bytes;