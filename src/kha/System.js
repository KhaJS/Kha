// Class: kha.System

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function kha_WindowMode() {return require("./../kha/WindowMode");}
function kha_SystemImpl() {return require("./../kha/SystemImpl");}
function HxOverrides() {return require("./../HxOverrides");}

// Constructor

var System = function(){}

// Meta

System.__name__ = ["kha","System"];
System.prototype = {
	
};
System.prototype.__class__ = System.prototype.constructor = $hxClasses["kha.System"] = System;

// Init



// Statics

System.init = function(options,callback) {
	if(options.title == null) {
		options.title = "Kha";
	}
	if(options.width == null) {
		options.width = 800;
	}
	if(options.height == null) {
		options.height = 600;
	}
	if(options.samplesPerPixel == null) {
		options.samplesPerPixel = 1;
	}
	if(options.vSync == null) {
		options.vSync = true;
	}
	if(options.windowMode == null) {
		options.windowMode = (kha_WindowMode().default).Window;
	}
	if(options.resizable == null) {
		options.resizable = false;
	}
	if(options.maximizable == null) {
		options.maximizable = false;
	}
	if(options.minimizable == null) {
		options.minimizable = true;
	}
	System.theTitle = options.title;
	(kha_SystemImpl().default).init(options,callback);
}
System.initEx = function(title,options,windowCallback,callback) {
	System.theTitle = title;
	(kha_SystemImpl().default).initEx(title,options,windowCallback,callback);
}
System.get_title = function() {
	return System.theTitle;
}
System.notifyOnRender = function(listener,id) {
	if(id == null) {
		id = 0;
	}
	while(id >= System.renderListeners.length) System.renderListeners.push([]);
	System.renderListeners[id].push(listener);
}
System.removeRenderListener = function(listener,id) {
	if(id == null) {
		id = 0;
	}
	(HxOverrides().default).remove(System.renderListeners[id],listener);
}
System.notifyOnApplicationState = function(foregroundListener,resumeListener,pauseListener,backgroundListener,shutdownListener) {
	if(foregroundListener != null) {
		System.foregroundListeners.push(foregroundListener);
	}
	if(resumeListener != null) {
		System.resumeListeners.push(resumeListener);
	}
	if(pauseListener != null) {
		System.pauseListeners.push(pauseListener);
	}
	if(backgroundListener != null) {
		System.backgroundListeners.push(backgroundListener);
	}
	if(shutdownListener != null) {
		System.shutdownListeners.push(shutdownListener);
	}
}
System.notifyOnDropFiles = function(dropFilesListener) {
	System.dropFilesListeners.push(dropFilesListener);
}
System.notifyOnCutCopyPaste = function(cutListener,copyListener,pasteListener) {
	System.cutListener = cutListener;
	System.copyListener = copyListener;
	System.pasteListener = pasteListener;
}
System.render = function(id,framebuffer) {
	if(System.renderListeners.length == 0) {
		return;
	}
	var _g = 0;
	var _g1 = System.renderListeners[id];
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(framebuffer);
	}
}
System.foreground = function() {
	var _g = 0;
	var _g1 = System.foregroundListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
}
System.resume = function() {
	var _g = 0;
	var _g1 = System.resumeListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
}
System.pause = function() {
	var _g = 0;
	var _g1 = System.pauseListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
}
System.background = function() {
	var _g = 0;
	var _g1 = System.backgroundListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
}
System.shutdown = function() {
	var _g = 0;
	var _g1 = System.shutdownListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
}
System.dropFiles = function(filePath) {
	var _g = 0;
	var _g1 = System.dropFilesListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(filePath);
	}
}
System.get_time = function() {
	return (kha_SystemImpl().default).getTime();
}
System.windowWidth = function(windowId) {
	if(windowId == null) {
		windowId = 0;
	}
	return (kha_SystemImpl().default).windowWidth(windowId);
}
System.windowHeight = function(windowId) {
	if(windowId == null) {
		windowId = 0;
	}
	return (kha_SystemImpl().default).windowHeight(windowId);
}
System.screenDpi = function() {
	return (kha_SystemImpl().default).screenDpi();
}
System.get_screenRotation = function() {
	return (kha_SystemImpl().default).getScreenRotation();
}
System.get_vsync = function() {
	return (kha_SystemImpl().default).getVsync();
}
System.get_refreshRate = function() {
	return (kha_SystemImpl().default).getRefreshRate();
}
System.get_systemId = function() {
	return (kha_SystemImpl().default).getSystemId();
}
System.requestShutdown = function() {
	(kha_SystemImpl().default).requestShutdown();
}
System.changeResolution = function(width,height) {
	(kha_SystemImpl().default).changeResolution(width,height);
}
System.loadUrl = function(url) {
	(kha_SystemImpl().default).loadUrl(url);
}
System.canSwitchFullscreen = function() {
	return (kha_SystemImpl().default).canSwitchFullscreen();
}
System.isFullscreen = function() {
	return (kha_SystemImpl().default).isFullscreen();
}
System.requestFullscreen = function() {
	(kha_SystemImpl().default).requestFullscreen();
}
System.exitFullscreen = function() {
	(kha_SystemImpl().default).exitFullscreen();
}
System.notifyOnFullscreenChange = function(func,error) {
	(kha_SystemImpl().default).notifyOfFullscreenChange(func,error);
}
System.removeFullscreenListener = function(func,error) {
	(kha_SystemImpl().default).removeFromFullscreenChange(func,error);
}
System.renderListeners = []
System.foregroundListeners = []
System.resumeListeners = []
System.pauseListeners = []
System.backgroundListeners = []
System.shutdownListeners = []
System.dropFilesListeners = []
System.cutListener = null
System.copyListener = null
System.pasteListener = null

// Export

exports.default = System;