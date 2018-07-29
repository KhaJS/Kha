// Class: kha.internal.HdrFormat

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function EReg() {return require("./../../EReg");}
function haxe_Log() {return require("./../../haxe/Log");}
function haxe_io__$UInt8Array_UInt8Array_$Impl_$() {return require("./../../haxe/io/_UInt8Array/UInt8Array_Impl_");}
function Std() {return require("./../../Std");}

// Constructor

var HdrFormat = function() {
}

// Meta

HdrFormat.__name__ = ["kha","internal","HdrFormat"];
HdrFormat.prototype = {
	
};
HdrFormat.prototype.__class__ = HdrFormat.prototype.constructor = $hxClasses["kha.internal.HdrFormat"] = HdrFormat;

// Init



// Statics

HdrFormat.readBuf = function(buf) {
	var bytesRead = 0;
	while(true) {
		buf[bytesRead++] = HdrFormat.buffer[HdrFormat.fileOffset] & 255;
		if(!(++HdrFormat.fileOffset < HdrFormat.bufferLength && bytesRead < buf.length)) {
			break;
		}
	}
	return bytesRead;
}
HdrFormat.readBufOffset = function(buf,offset,length) {
	var bytesRead = 0;
	while(true) {
		buf[offset + bytesRead++] = HdrFormat.buffer[HdrFormat.fileOffset] & 255;
		if(!(++HdrFormat.fileOffset < HdrFormat.bufferLength && bytesRead < length)) {
			break;
		}
	}
	return bytesRead;
}
HdrFormat.readPixelsRaw = function(buffer,data,offset,numpixels) {
	var numExpected = 4 * numpixels;
	var numRead = HdrFormat.readBufOffset(data,offset,numExpected);
	if(numRead < numExpected) {
		(haxe_Log().default).trace("Error reading raw pixels: got " + numRead + " bytes, expected " + numExpected,{ fileName : "HdrFormat.hx", lineNumber : 43, className : "kha.internal.HdrFormat", methodName : "readPixelsRaw"});
		return;
	}
}
HdrFormat.readPixelsRawRLE = function(buffer,data,offset,scanline_width,num_scanlines) {
	var this1 = new Uint8Array(4);
	var rgbe = this1;
	var scanline_buffer = null;
	var ptr;
	var ptr_end;
	var count;
	var this2 = new Uint8Array(2);
	var buf = this2;
	var bufferLength = buffer.length;
	while(num_scanlines > 0) {
		if(HdrFormat.readBuf(rgbe) < rgbe.length) {
			(haxe_Log().default).trace("Error reading bytes: expected " + rgbe.length,{ fileName : "HdrFormat.hx", lineNumber : 59, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
			return;
		}
		if(rgbe[0] != 2 || rgbe[1] != 2 || (rgbe[2] & 128) != 0) {
			data[offset++] = rgbe[0] & 255;
			data[offset++] = rgbe[1] & 255;
			data[offset++] = rgbe[2] & 255;
			data[offset++] = rgbe[3] & 255;
			HdrFormat.readPixelsRaw(buffer,data,offset,scanline_width * num_scanlines - 1);
			return;
		}
		if(((rgbe[2] & 255) << 8 | rgbe[3] & 255) != scanline_width) {
			(haxe_Log().default).trace("Wrong scanline width " + ((rgbe[2] & 255) << 8 | rgbe[3] & 255) + ", expected " + scanline_width,{ fileName : "HdrFormat.hx", lineNumber : 74, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
			return;
		}
		if(scanline_buffer == null) {
			var this3 = new Uint8Array(4 * scanline_width);
			scanline_buffer = this3;
		}
		ptr = 0;
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			ptr_end = (i + 1) * scanline_width;
			while(ptr < ptr_end) {
				if(HdrFormat.readBuf(buf) < buf.length) {
					(haxe_Log().default).trace("Error reading 2-byte buffer",{ fileName : "HdrFormat.hx", lineNumber : 88, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
					return;
				}
				if((buf[0] & 255) > 128) {
					count = (buf[0] & 255) - 128;
					if(count == 0 || count > ptr_end - ptr) {
						(haxe_Log().default).trace("Bad scanline data",{ fileName : "HdrFormat.hx", lineNumber : 95, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
						return;
					}
					while(count-- > 0) scanline_buffer[ptr++] = buf[1] & 255;
				} else {
					count = buf[0] & 255;
					if(count == 0 || count > ptr_end - ptr) {
						(haxe_Log().default).trace("Bad scanline data",{ fileName : "HdrFormat.hx", lineNumber : 106, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
						return;
					}
					scanline_buffer[ptr++] = buf[1] & 255;
					if(--count > 0) {
						if(HdrFormat.readBufOffset(scanline_buffer,ptr,count) < count) {
							(haxe_Log().default).trace("Error reading non-run data",{ fileName : "HdrFormat.hx", lineNumber : 112, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
							return;
						}
						ptr += count;
					}
				}
			}
		}
		var _g1 = 0;
		var _g2 = scanline_width;
		while(_g1 < _g2) {
			var i1 = _g1++;
			data[offset] = scanline_buffer[i1] & 255;
			data[offset + 1] = scanline_buffer[i1 + scanline_width] & 255;
			data[offset + 2] = scanline_buffer[i1 + 2 * scanline_width] & 255;
			data[offset + 3] = scanline_buffer[i1 + 3 * scanline_width] & 255;
			offset += 4;
		}
		--num_scanlines;
	}
}
HdrFormat.readLine = function() {
	var buf = "";
	while(true) {
		var b = HdrFormat.buffer[HdrFormat.fileOffset];
		if(b == 10) {
			++HdrFormat.fileOffset;
			break;
		}
		buf += String.fromCharCode(b);
		if(!(++HdrFormat.fileOffset < HdrFormat.bufferLength)) {
			break;
		}
	}
	return buf;
}
HdrFormat.parse = function(bytes) {
	HdrFormat.buffer = (haxe_io__$UInt8Array_UInt8Array_$Impl_$().default).fromBytes(bytes);
	HdrFormat.bufferLength = HdrFormat.buffer.length;
	HdrFormat.fileOffset = 0;
	var width = 0;
	var height = 0;
	var exposure = 1.0;
	var gamma = 1.0;
	var rle = false;
	var _g = 0;
	while(_g < 20) {
		var i = _g++;
		var line = HdrFormat.readLine();
		if(HdrFormat.formatPattern.match(line)) {
			rle = true;
		} else if(HdrFormat.exposurePattern.match(line)) {
			exposure = (Std().default).parseFloat(HdrFormat.exposurePattern.matched(1));
		} else if(HdrFormat.widthHeightPattern.match(line)) {
			height = (Std().default).parseInt(HdrFormat.widthHeightPattern.matched(1));
			width = (Std().default).parseInt(HdrFormat.widthHeightPattern.matched(2));
			break;
		}
	}
	if(!rle) {
		(haxe_Log().default).trace("File is not run length encoded!",{ fileName : "HdrFormat.hx", lineNumber : 175, className : "kha.internal.HdrFormat", methodName : "parse"});
		return null;
	}
	var this1 = new Uint8Array(width * height * 4);
	var data = this1;
	var scanline_width = width;
	var num_scanlines = height;
	HdrFormat.readPixelsRawRLE(HdrFormat.buffer,data,0,scanline_width,num_scanlines);
	var this2 = new Float32Array(width * height * 4);
	var floatData = this2;
	var offset = 0;
	while(offset < data.length) {
		var r = data[offset] / 255;
		var g = data[offset + 1] / 255;
		var b = data[offset + 2] / 255;
		var e = data[offset + 3];
		var f = Math.pow(2.0,e - 128.0);
		r *= f;
		g *= f;
		b *= f;
		floatData[offset] = r;
		floatData[offset + 1] = g;
		floatData[offset + 2] = b;
		floatData[offset + 3] = 1.0;
		offset += 4;
	}
	return { width : width, height : height, data : floatData};
}
HdrFormat.radiancePattern = new (EReg().default)("#\\?RADIANCE","i")
HdrFormat.commentPattern = new (EReg().default)("#.*","i")
HdrFormat.gammaPattern = new (EReg().default)("GAMMA=","i")
HdrFormat.exposurePattern = new (EReg().default)("EXPOSURE=\\s*([0-9]*[.][0-9]*)","i")
HdrFormat.formatPattern = new (EReg().default)("FORMAT=32-bit_rle_rgbe","i")
HdrFormat.widthHeightPattern = new (EReg().default)("-Y ([0-9]+) \\+X ([0-9]+)","i")

// Export

exports.default = HdrFormat;