// Class: kha.LoaderImpl

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function Reflect() {return require("./../Reflect");}
function StringTools() {return require("./../StringTools");}
function kha_internal_HdrFormat() {return require("./../kha/internal/HdrFormat");}
function kha_Image() {return require("./../kha/Image");}
function haxe_io_Bytes() {return require("./../haxe/io/Bytes");}
function kha_graphics4_TextureFormat() {return require("./../kha/graphics4/TextureFormat");}
function kha_graphics4_Usage() {return require("./../kha/graphics4/Usage");}
function js_Browser() {return require("./../js/Browser");}
function kha_SystemImpl() {return require("./../kha/SystemImpl");}
function kha_js_WebAudioSound() {return require("./../kha/js/WebAudioSound");}
function kha_js_MobileWebAudioSound() {return require("./../kha/js/MobileWebAudioSound");}
function kha_js_Sound() {return require("./../kha/js/Sound");}
function kha_js_Video() {return require("./../kha/js/Video");}
function kha_internal_BytesBlob() {return require("./../kha/internal/BytesBlob");}
function kha_Kravur() {return require("./../kha/Kravur");}

// Constructor

var LoaderImpl = function(){}

// Meta

LoaderImpl.__name__ = ["kha","LoaderImpl"];
LoaderImpl.prototype = {
	
};
LoaderImpl.prototype.__class__ = LoaderImpl.prototype.constructor = $hxClasses["kha.LoaderImpl"] = LoaderImpl;

// Init



// Statics

LoaderImpl.getImageFormats = function() {
	return ["png","jpg","hdr"];
}
LoaderImpl.loadImageFromDescription = function(desc,done,failed) {
	var readable = (Reflect().default).hasField(desc,"readable") && desc.readable;
	if((StringTools().default).endsWith(desc.files[0],".hdr")) {
		LoaderImpl.loadBlobFromDescription(desc,function(blob) {
			var hdrImage = (kha_internal_HdrFormat().default).parse(blob.toBytes());
			var tmp = (kha_Image().default).fromBytes((haxe_io_Bytes().default).ofData(hdrImage.data.buffer),hdrImage.width,hdrImage.height,(kha_graphics4_TextureFormat().default).RGBA128,readable ? (kha_graphics4_Usage().default).DynamicUsage : (kha_graphics4_Usage().default).StaticUsage);
			done(tmp);
		},failed);
	} else {
		var img = (js_Browser().default).get_document().createElement("img");
		img.onerror = function(event) {
			failed({ url : desc.files[0], error : event});
		};
		img.onload = function(event1) {
			var tmp1 = (kha_Image().default).fromImage(img,readable);
			done(tmp1);
		};
		img.src = desc.files[0];
		img.crossOrigin = "";
	}
}
LoaderImpl.getSoundFormats = function() {
	var element = (js_Browser().default).get_document().createElement("audio");
	var formats = [];
	if(element.canPlayType("audio/mp4") != "") {
		formats.push("mp4");
	}
	if(element.canPlayType("audio/mp3") != "") {
		formats.push("mp3");
	}
	if((kha_SystemImpl().default)._hasWebAudio || element.canPlayType("audio/ogg") != "") {
		formats.push("ogg");
	}
	return formats;
}
LoaderImpl.loadSoundFromDescription = function(desc,done,failed) {
	if((kha_SystemImpl().default)._hasWebAudio) {
		var element = (js_Browser().default).get_document().createElement("audio");
		if(element.canPlayType("audio/mp4") != "") {
			var _g1 = 0;
			var _g = desc.files.length;
			while(_g1 < _g) {
				var i = _g1++;
				var file = desc.files[i];
				if((StringTools().default).endsWith(file,".mp4")) {
					new (kha_js_WebAudioSound().default)(file,done,failed);
					return;
				}
			}
		}
		if(element.canPlayType("audio/mp3") != "") {
			var _g11 = 0;
			var _g2 = desc.files.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				var file1 = desc.files[i1];
				if((StringTools().default).endsWith(file1,".mp3")) {
					new (kha_js_WebAudioSound().default)(file1,done,failed);
					return;
				}
			}
		}
		var _g12 = 0;
		var _g3 = desc.files.length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var file2 = desc.files[i2];
			if((StringTools().default).endsWith(file2,".ogg")) {
				new (kha_js_WebAudioSound().default)(file2,done,failed);
				return;
			}
		}
	} else if((kha_SystemImpl().default).mobile) {
		var element1 = (js_Browser().default).get_document().createElement("audio");
		if(element1.canPlayType("audio/mp4") != "") {
			var _g13 = 0;
			var _g4 = desc.files.length;
			while(_g13 < _g4) {
				var i3 = _g13++;
				var file3 = desc.files[i3];
				if((StringTools().default).endsWith(file3,".mp4")) {
					new (kha_js_MobileWebAudioSound().default)(file3,done,failed);
					return;
				}
			}
		}
		if(element1.canPlayType("audio/mp3") != "") {
			var _g14 = 0;
			var _g5 = desc.files.length;
			while(_g14 < _g5) {
				var i4 = _g14++;
				var file4 = desc.files[i4];
				if((StringTools().default).endsWith(file4,".mp3")) {
					new (kha_js_MobileWebAudioSound().default)(file4,done,failed);
					return;
				}
			}
		}
		var _g15 = 0;
		var _g6 = desc.files.length;
		while(_g15 < _g6) {
			var i5 = _g15++;
			var file5 = desc.files[i5];
			if((StringTools().default).endsWith(file5,".ogg")) {
				new (kha_js_MobileWebAudioSound().default)(file5,done,failed);
				return;
			}
		}
	} else {
		new (kha_js_Sound().default)(desc.files,done,failed);
	}
}
LoaderImpl.getVideoFormats = function() {
	return ["mp4","webm"];
}
LoaderImpl.loadVideoFromDescription = function(desc,done,failed) {
	(kha_js_Video().default).fromFile(desc.files,done);
}
LoaderImpl.loadRemote = function(desc,done,failed) {
	var request = new XMLHttpRequest();
	request.open("GET",desc.files[0],true);
	request.responseType = "arraybuffer";
	request.onreadystatechange = function() {
		if(request.readyState != 4) {
			return;
		}
		if(request.status >= 200 && request.status < 400 || request.status == 0 && request.statusText == "") {
			var bytes = null;
			var arrayBuffer = request.response;
			if(arrayBuffer != null) {
				var byteArray = new Uint8Array(arrayBuffer);
				bytes = (haxe_io_Bytes().default).ofData(byteArray);
			} else if(request.responseBody != null) {
				var data = VBArray(request.responseBody).toArray();
				bytes = (haxe_io_Bytes().default).alloc(data.length);
				var _g1 = 0;
				var _g = data.length;
				while(_g1 < _g) {
					var i = _g1++;
					bytes.set(i,data[i]);
				}
			} else {
				failed({ url : desc.files[0]});
				return;
			}
			done(new (kha_internal_BytesBlob().default)(bytes));
		} else {
			failed({ url : desc.files[0]});
		}
	};
	request.send(null);
}
LoaderImpl.loadBlobFromDescription = function(desc,done,failed) {
	LoaderImpl.loadRemote(desc,done,failed);
}
LoaderImpl.loadFontFromDescription = function(desc,done,failed) {
	LoaderImpl.loadBlobFromDescription(desc,function(blob) {
		done(new (kha_Kravur().default)(blob));
	},failed);
}


// Export

exports.default = LoaderImpl;