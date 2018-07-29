// Class: kha.internal.BytesBlob

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_Resource() {return require("./../../kha/Resource");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var BytesBlob = function(bytes) {
	this.bytes = bytes;
}

// Meta

BytesBlob.__name__ = ["kha","internal","BytesBlob"];
BytesBlob.__interfaces__ = [(kha_Resource().default)];
BytesBlob.prototype = {
	sub: function(start,length) {
		return new BytesBlob(this.bytes.sub(start,length));
	},
	get_length: function() {
		return this.bytes.length;
	},
	writeU8: function(position,value) {
		this.bytes.set(position,value);
	},
	readU8: function(position) {
		var $byte = this.bytes.get(position);
		++position;
		return $byte;
	},
	readS8: function(position) {
		var $byte = this.bytes.get(position);
		++position;
		var sign = ($byte & 128) == 0 ? 1 : -1;
		$byte &= 127;
		return sign * $byte;
	},
	readU16BE: function(position) {
		var first = this.bytes.get(position);
		var second = this.bytes.get(position + 1);
		position += 2;
		return first * 256 + second;
	},
	readU16LE: function(position) {
		var first = this.bytes.get(position);
		var second = this.bytes.get(position + 1);
		position += 2;
		return second * 256 + first;
	},
	readU32LE: function(position) {
		var fourth = this.bytes.get(position);
		var third = this.bytes.get(position + 1);
		var second = this.bytes.get(position + 2);
		var first = this.bytes.get(position + 3);
		position += 4;
		return fourth + third * 256 + second * 256 * 256 + first * 256 * 256 * 256;
	},
	readU32BE: function(position) {
		var fourth = this.bytes.get(position);
		var third = this.bytes.get(position + 1);
		var second = this.bytes.get(position + 2);
		var first = this.bytes.get(position + 3);
		position += 4;
		return first + second * 256 + third * 256 * 256 + fourth * 256 * 256 * 256;
	},
	readS16BE: function(position) {
		var first = this.bytes.get(position);
		var second = this.bytes.get(position + 1);
		position += 2;
		var sign = (first & 128) == 0 ? 1 : -1;
		first &= 127;
		if(sign == -1) {
			return -32767 + first * 256 + second;
		} else {
			return first * 256 + second;
		}
	},
	readS16LE: function(position) {
		var first = this.bytes.get(position);
		var second = this.bytes.get(position + 1);
		var sign = (second & 128) == 0 ? 1 : -1;
		second &= 127;
		position += 2;
		if(sign == -1) {
			return -32767 + second * 256 + first;
		} else {
			return second * 256 + first;
		}
	},
	readS32LE: function(position) {
		var fourth = this.bytes.get(position);
		var third = this.bytes.get(position + 1);
		var second = this.bytes.get(position + 2);
		var first = this.bytes.get(position + 3);
		var sign = (first & 128) == 0 ? 1 : -1;
		first &= 127;
		position += 4;
		if(sign == -1) {
			return -2147483647 + fourth + third * 256 + second * 256 * 256 + first * 256 * 256 * 256;
		} else {
			return fourth + third * 256 + second * 256 * 256 + first * 256 * 256 * 256;
		}
	},
	readS32BE: function(position) {
		var fourth = this.bytes.get(position);
		var third = this.bytes.get(position + 1);
		var second = this.bytes.get(position + 2);
		var first = this.bytes.get(position + 3);
		var sign = (fourth & 128) == 0 ? 1 : -1;
		fourth &= 127;
		position += 4;
		if(sign == -1) {
			return -2147483647 + first + second * 256 + third * 256 * 256 + fourth * 256 * 256 * 256;
		}
		return first + second * 256 + third * 256 * 256 + fourth * 256 * 256 * 256;
	},
	readF32LE: function(position) {
		return BytesBlob.readF32(this.readS32LE(position));
	},
	readF32BE: function(position) {
		return BytesBlob.readF32(this.readS32BE(position));
	},
	toString: function() {
		return this.bytes.toString();
	},
	readUtf8Char: function(position) {
		if(position.value >= this.get_length()) {
			return -1;
		}
		var c = this.readU8(position.value);
		++position.value;
		var value = 0;
		if(!BytesBlob.bit(c,7)) {
			value = c;
		} else if(BytesBlob.bit(c,7) && BytesBlob.bit(c,6) && !BytesBlob.bit(c,5)) {
			var a = c & 31;
			var c2 = this.readU8(position.value);
			++position.value;
			var b = c2 & 63;
			value = a << 6 | b;
		} else if(BytesBlob.bit(c,7) && BytesBlob.bit(c,6) && BytesBlob.bit(c,5) && !BytesBlob.bit(c,4)) {
			position.value += 2;
		} else if(BytesBlob.bit(c,7) && BytesBlob.bit(c,6) && BytesBlob.bit(c,5) && BytesBlob.bit(c,4) && !BytesBlob.bit(c,3)) {
			position.value += 3;
		}
		return value;
	},
	readUtf8Block: function(buffer,position) {
		var bufferindex = 0;
		if(position.value >= this.get_length()) {
			return "";
		}
		while(bufferindex < 2000) {
			var c = this.readUtf8Char(position);
			if(c < 0) {
				break;
			}
			buffer[bufferindex] = c;
			++bufferindex;
		}
		return BytesBlob.toText(buffer,bufferindex);
	},
	readUtf8String: function() {
		var this1 = new Array(2000);
		var buffer = this1;
		var text = "";
		var start = 0;
		if(this.get_length() >= 3 && this.bytes.get(0) == 239 && this.bytes.get(1) == 187 && this.bytes.get(2) == 191) {
			start = 3;
		}
		var position = { value : start};
		while(position.value < this.get_length()) text += this.readUtf8Block(buffer,position);
		return text;
	},
	toBytes: function() {
		return this.bytes;
	},
	unload: function() {
		this.bytes = null;
	}
};
BytesBlob.prototype.__class__ = BytesBlob.prototype.constructor = $hxClasses["kha.internal.BytesBlob"] = BytesBlob;

// Init



// Statics

BytesBlob.fromBytes = function(bytes) {
	return new BytesBlob(bytes);
}
BytesBlob.alloc = function(size) {
	return new BytesBlob((haxe_io_Bytes().default).alloc(size));
}
BytesBlob.readF32 = function(i) {
	var sign = (i & -2147483648) == 0 ? 1 : -1;
	var exp = i >> 23 & 255;
	var man = i & 8388607;
	switch(exp) {
	case 0:
		return 0.0;
	case 255:
		if(man != 0) {
			return NaN;
		} else if(sign > 0) {
			return Infinity;
		} else {
			return -Infinity;
		}
		break;
	default:
		return sign * ((man + 8388608) / 8388608.0) * Math.pow(2,exp - 127);
	}
}
BytesBlob.bit = function(value,position) {
	var b = (value >>> position & 1) == 1;
	if(b) {
		var a = 3;
		++a;
		return true;
	} else {
		var c = 4;
		--c;
		return false;
	}
}
BytesBlob.toText = function(chars,length) {
	var value = "";
	var _g1 = 0;
	var _g = length;
	while(_g1 < _g) {
		var i = _g1++;
		value += String.fromCharCode(chars[i]);
	}
	return value;
}
BytesBlob.bufferSize = 2000

// Export

exports.default = BytesBlob;