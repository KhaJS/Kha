// Class: kha.Assets

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function kha__$Assets_ImageList() {return require("./../kha/_Assets/ImageList");}
function kha__$Assets_SoundList() {return require("./../kha/_Assets/SoundList");}
function kha__$Assets_BlobList() {return require("./../kha/_Assets/BlobList");}
function kha__$Assets_FontList() {return require("./../kha/_Assets/FontList");}
function kha__$Assets_VideoList() {return require("./../kha/_Assets/VideoList");}
function Type() {return require("./../Type");}
function StringTools() {return require("./../StringTools");}
function HxOverrides() {return require("./../HxOverrides");}
function Reflect() {return require("./../Reflect");}
function kha_LoaderImpl() {return require("./../kha/LoaderImpl");}
function haxe_Log() {return require("./../haxe/Log");}

// Constructor

var Assets = function(){}

// Meta

Assets.__name__ = ["kha","Assets"];
Assets.prototype = {
	
};
Assets.prototype.__class__ = Assets.prototype.constructor = $hxClasses["kha.Assets"] = Assets;

// Init



// Statics

Assets.loadEverything = function(callback,filter,uncompressSoundsFilter,failed) {
	var fileCount = 0;
	var _g = 0;
	var _g1 = (Type().default).getInstanceFields((kha__$Assets_BlobList().default));
	while(_g < _g1.length) {
		var blob = _g1[_g];
		++_g;
		if((StringTools().default).endsWith(blob,"Load")) {
			fileCount += 1;
		}
	}
	var _g2 = 0;
	var _g11 = (Type().default).getInstanceFields((kha__$Assets_ImageList().default));
	while(_g2 < _g11.length) {
		var image = _g11[_g2];
		++_g2;
		if((StringTools().default).endsWith(image,"Load")) {
			fileCount += 1;
		}
	}
	var _g3 = 0;
	var _g12 = (Type().default).getInstanceFields((kha__$Assets_SoundList().default));
	while(_g3 < _g12.length) {
		var sound = _g12[_g3];
		++_g3;
		if((StringTools().default).endsWith(sound,"Load")) {
			fileCount += 1;
		}
	}
	var _g4 = 0;
	var _g13 = (Type().default).getInstanceFields((kha__$Assets_FontList().default));
	while(_g4 < _g13.length) {
		var font = _g13[_g4];
		++_g4;
		if((StringTools().default).endsWith(font,"Load")) {
			fileCount += 1;
		}
	}
	var _g5 = 0;
	var _g14 = (Type().default).getInstanceFields((kha__$Assets_VideoList().default));
	while(_g5 < _g14.length) {
		var video = _g14[_g5];
		++_g5;
		if((StringTools().default).endsWith(video,"Load")) {
			fileCount += 1;
		}
	}
	if(fileCount == 0) {
		callback();
		return;
	}
	var filesLeft = fileCount;
	var onLoaded = function() {
		filesLeft -= 1;
		Assets.progress = 1 - filesLeft / fileCount;
		if(filesLeft == 0) {
			callback();
		}
	};
	var _g6 = 0;
	var _g15 = (Type().default).getInstanceFields((kha__$Assets_BlobList().default));
	while(_g6 < _g15.length) {
		var blob1 = _g15[_g6];
		++_g6;
		if((StringTools().default).endsWith(blob1,"Load")) {
			var name = (HxOverrides().default).substr(blob1,0,blob1.length - 4);
			var description = (Reflect().default).field(Assets.blobs,name + "Description");
			if(filter == null || filter(description)) {
				((Reflect().default).field(Assets.blobs,blob1))(onLoaded,function(err) {
					Assets.reporter(failed,{ fileName : "Assets.hx", lineNumber : 134, className : "kha.Assets", methodName : "loadEverything"});
					onLoaded();
				});
			} else {
				onLoaded();
			}
		}
	}
	var _g7 = 0;
	var _g16 = (Type().default).getInstanceFields((kha__$Assets_ImageList().default));
	while(_g7 < _g16.length) {
		var image1 = _g16[_g7];
		++_g7;
		if((StringTools().default).endsWith(image1,"Load")) {
			var name1 = (HxOverrides().default).substr(image1,0,image1.length - 4);
			var description1 = (Reflect().default).field(Assets.images,name1 + "Description");
			if(filter == null || filter(description1)) {
				((Reflect().default).field(Assets.images,image1))(onLoaded,function(err1) {
					Assets.reporter(failed,{ fileName : "Assets.hx", lineNumber : 150, className : "kha.Assets", methodName : "loadEverything"});
					onLoaded();
				});
			} else {
				onLoaded();
			}
		}
	}
	var _g8 = 0;
	var _g17 = (Type().default).getInstanceFields((kha__$Assets_SoundList().default));
	while(_g8 < _g17.length) {
		var sound1 = [_g17[_g8]];
		++_g8;
		if((StringTools().default).endsWith(sound1[0],"Load")) {
			var name2 = (HxOverrides().default).substr(sound1[0],0,sound1[0].length - 4);
			var description2 = [(Reflect().default).field(Assets.sounds,name2 + "Description")];
			if(filter == null || filter(description2[0])) {
				((Reflect().default).field(Assets.sounds,sound1[0]))((function(description3,sound2) {
					return function() {
						if(uncompressSoundsFilter == null || uncompressSoundsFilter(description3[0])) {
							var sound3 = (Reflect().default).field(Assets.sounds,sound2[0].substring(0,sound2[0].length - 4));
							sound3.uncompress(onLoaded);
						} else {
							onLoaded();
						}
					};
				})(description2,sound1),Assets.reporter(failed,{ fileName : "Assets.hx", lineNumber : 172, className : "kha.Assets", methodName : "loadEverything"}));
			} else {
				onLoaded();
			}
		}
	}
	var _g9 = 0;
	var _g18 = (Type().default).getInstanceFields((kha__$Assets_FontList().default));
	while(_g9 < _g18.length) {
		var font1 = _g18[_g9];
		++_g9;
		if((StringTools().default).endsWith(font1,"Load")) {
			var name3 = (HxOverrides().default).substr(font1,0,font1.length - 4);
			var description4 = (Reflect().default).field(Assets.fonts,name3 + "Description");
			if(filter == null || filter(description4)) {
				((Reflect().default).field(Assets.fonts,font1))(onLoaded,function(err2) {
					Assets.reporter(failed,{ fileName : "Assets.hx", lineNumber : 185, className : "kha.Assets", methodName : "loadEverything"});
					onLoaded();
				});
			} else {
				onLoaded();
			}
		}
	}
	var _g10 = 0;
	var _g19 = (Type().default).getInstanceFields((kha__$Assets_VideoList().default));
	while(_g10 < _g19.length) {
		var video1 = _g19[_g10];
		++_g10;
		if((StringTools().default).endsWith(video1,"Load")) {
			var name4 = (HxOverrides().default).substr(video1,0,video1.length - 4);
			var description5 = (Reflect().default).field(Assets.videos,name4 + "Description");
			if(filter == null || filter(description5)) {
				((Reflect().default).field(Assets.videos,video1))(onLoaded,function(err3) {
					Assets.reporter(failed,{ fileName : "Assets.hx", lineNumber : 200, className : "kha.Assets", methodName : "loadEverything"});
					onLoaded();
				});
			} else {
				onLoaded();
			}
		}
	}
}
Assets.loadImage = function(name,done,failed,pos) {
	var description = (Reflect().default).field(Assets.images,name + "Description");
	(kha_LoaderImpl().default).loadImageFromDescription(description,function(image) {
		(Reflect().default).setField(Assets.images,name,image);
		done(image);
	},Assets.reporter(failed,pos));
}
Assets.loadImageFromPath = function(path,readable,done,failed,pos) {
	var description = { files : [path], readable : readable};
	(kha_LoaderImpl().default).loadImageFromDescription(description,done,Assets.reporter(failed,pos));
}
Assets.get_imageFormats = function() {
	return (kha_LoaderImpl().default).getImageFormats();
}
Assets.loadBlob = function(name,done,failed,pos) {
	var description = (Reflect().default).field(Assets.blobs,name + "Description");
	(kha_LoaderImpl().default).loadBlobFromDescription(description,function(blob) {
		(Reflect().default).setField(Assets.blobs,name,blob);
		done(blob);
	},Assets.reporter(failed,pos));
}
Assets.loadBlobFromPath = function(path,done,failed,pos) {
	var description = { files : [path]};
	(kha_LoaderImpl().default).loadBlobFromDescription(description,done,Assets.reporter(failed,pos));
}
Assets.loadSound = function(name,done,failed,pos) {
	var description = (Reflect().default).field(Assets.sounds,name + "Description");
	(kha_LoaderImpl().default).loadSoundFromDescription(description,function(sound) {
		(Reflect().default).setField(Assets.sounds,name,sound);
		done(sound);
	},Assets.reporter(failed,pos));
	return;
}
Assets.loadSoundFromPath = function(path,done,failed,pos) {
	var description = { files : [path]};
	(kha_LoaderImpl().default).loadSoundFromDescription(description,done,Assets.reporter(failed,pos));
	return;
}
Assets.get_soundFormats = function() {
	return (kha_LoaderImpl().default).getSoundFormats();
}
Assets.loadFont = function(name,done,failed,pos) {
	var description = (Reflect().default).field(Assets.fonts,name + "Description");
	(kha_LoaderImpl().default).loadFontFromDescription(description,function(font) {
		(Reflect().default).setField(Assets.fonts,name,font);
		done(font);
	},Assets.reporter(failed,pos));
	return;
}
Assets.loadFontFromPath = function(path,done,failed,pos) {
	var description = { files : [path]};
	(kha_LoaderImpl().default).loadFontFromDescription(description,done,Assets.reporter(failed,pos));
	return;
}
Assets.get_fontFormats = function() {
	return ["ttf"];
}
Assets.loadVideo = function(name,done,failed,pos) {
	var description = (Reflect().default).field(Assets.videos,name + "Description");
	(kha_LoaderImpl().default).loadVideoFromDescription(description,function(video) {
		(Reflect().default).setField(Assets.videos,name,video);
		done(video);
	},Assets.reporter(failed,pos));
	return;
}
Assets.loadVideoFromPath = function(path,done,failed,pos) {
	var description = { files : [path]};
	(kha_LoaderImpl().default).loadVideoFromDescription(description,done,Assets.reporter(failed,pos));
	return;
}
Assets.get_videoFormats = function() {
	return (kha_LoaderImpl().default).getVideoFormats();
}
Assets.reporter = function(custom,pos) {
	if(custom != null) {
		return custom;
	} else {
		var f = (haxe_Log().default).trace;
		var a1 = pos;
		return function(v) {
			f(v,a1);
		};
	}
}
Assets.images = new (kha__$Assets_ImageList().default)()
Assets.sounds = new (kha__$Assets_SoundList().default)()
Assets.blobs = new (kha__$Assets_BlobList().default)()
Assets.fonts = new (kha__$Assets_FontList().default)()
Assets.videos = new (kha__$Assets_VideoList().default)()

// Export

exports.default = Assets;