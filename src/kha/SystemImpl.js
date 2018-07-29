// Class: kha.SystemImpl

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
var $bind = require("./../bind_stub").default;
function js_Browser() {return require("./../js/Browser");}
function haxe_Log() {return require("./../haxe/Log");}
function kha_ScreenRotation() {return require("./../kha/ScreenRotation");}
function js_Boot() {return require("./../js/Boot");}
function kha_input_Keyboard() {return require("./../kha/input/Keyboard");}
function kha_input_MouseImpl() {return require("./../kha/input/MouseImpl");}
function kha_input_Surface() {return require("./../kha/input/Surface");}
function kha_input_Gamepad() {return require("./../kha/input/Gamepad");}
function kha_GamepadStates() {return require("./../kha/GamepadStates");}
function kha_System() {return require("./../kha/System");}
function kha_CanvasImage() {return require("./../kha/CanvasImage");}
function kha_Scheduler() {return require("./../kha/Scheduler");}
function kha_CompilerDefines() {return require("./../kha/CompilerDefines");}
function kha_Shaders() {return require("./../kha/Shaders");}
function kha_js_graphics4_Graphics() {return require("./../kha/js/graphics4/Graphics");}
function kha_Framebuffer() {return require("./../kha/Framebuffer");}
function kha_graphics2_Graphics1() {return require("./../kha/graphics2/Graphics1");}
function kha_js_graphics4_Graphics2() {return require("./../kha/js/graphics4/Graphics2");}
function kha_js_CanvasGraphics() {return require("./../kha/js/CanvasGraphics");}
function kha_audio2_Audio() {return require("./../kha/audio2/Audio");}
function kha_audio2_Audio1() {return require("./../kha/audio2/Audio1");}
function kha_js_MobileWebAudio() {return require("./../kha/js/MobileWebAudio");}
function kha_js_AudioElementAudio() {return require("./../kha/js/AudioElementAudio");}
function kha_vr_VrInterface() {return require("./../kha/vr/VrInterface");}
function kha_js_vr_VrInterface() {return require("./../kha/js/vr/VrInterface");}
function Std() {return require("./../Std");}

// Constructor

var SystemImpl = function(){}

// Meta

SystemImpl.__name__ = ["kha","SystemImpl"];
SystemImpl.prototype = {
	
};
SystemImpl.prototype.__class__ = SystemImpl.prototype.constructor = $hxClasses["kha.SystemImpl"] = SystemImpl;

// Init



// Statics

SystemImpl.errorHandler = function(message,source,lineno,colno,error) {
	(js_Browser().default).get_console().error(error.stack);
	return true;
}
SystemImpl.init = function(options,callback) {
	SystemImpl.options = options;
	SystemImpl.mobile = SystemImpl.isMobile();
	SystemImpl.ios = SystemImpl.isIOS();
	SystemImpl.chrome = SystemImpl.isChrome();
	SystemImpl.firefox = SystemImpl.isFirefox();
	SystemImpl.ie = SystemImpl.isIE();
	SystemImpl.init2();
	callback();
}
SystemImpl.initEx = function(title,options,windowCallback,callback) {
	(haxe_Log().default).trace("initEx is not supported on the html5 target, running init() with first window options",{ fileName : "SystemImpl.hx", lineNumber : 83, className : "kha.SystemImpl", methodName : "initEx"});
	SystemImpl.init({ title : title, width : options[0].width, height : options[0].height},callback);
	if(windowCallback != null) {
		windowCallback(0);
	}
}
SystemImpl.isMobile = function() {
	var agent = (js_Browser().default).get_navigator().userAgent;
	if(agent.indexOf("Android") >= 0 || agent.indexOf("webOS") >= 0 || agent.indexOf("BlackBerry") >= 0 || agent.indexOf("Windows Phone") >= 0) {
		return true;
	}
	if(SystemImpl.isIOS()) {
		return true;
	}
	return false;
}
SystemImpl.isIOS = function() {
	var agent = (js_Browser().default).get_navigator().userAgent;
	if(agent.indexOf("iPhone") >= 0 || agent.indexOf("iPad") >= 0 || agent.indexOf("iPod") >= 0) {
		return true;
	}
	return false;
}
SystemImpl.isChrome = function() {
	var agent = (js_Browser().default).get_navigator().userAgent;
	if(agent.indexOf("Chrome") >= 0) {
		return true;
	}
	return false;
}
SystemImpl.isFirefox = function() {
	var agent = (js_Browser().default).get_navigator().userAgent;
	if(agent.indexOf("Firefox") >= 0) {
		return true;
	}
	return false;
}
SystemImpl.isIE = function() {
	var agent = (js_Browser().default).get_navigator().userAgent;
	if(agent.indexOf("MSIE ") >= 0 || agent.indexOf("Trident/") >= 0) {
		return true;
	}
	return false;
}
SystemImpl.windowWidth = function(windowId) {
	if(windowId == null) {
		windowId = 0;
	}
	if(SystemImpl.khanvas.width == 0 && SystemImpl.options.width != null) {
		return SystemImpl.options.width;
	} else {
		return SystemImpl.khanvas.width;
	}
}
SystemImpl.windowHeight = function(windowId) {
	if(windowId == null) {
		windowId = 0;
	}
	if(SystemImpl.khanvas.height == 0 && SystemImpl.options.height != null) {
		return SystemImpl.options.height;
	} else {
		return SystemImpl.khanvas.height;
	}
}
SystemImpl.screenDpi = function() {
	var dpiElement = (js_Browser().default).get_document().createElement("div");
	dpiElement.style.position = "absolute";
	dpiElement.style.width = "1in";
	dpiElement.style.height = "1in";
	dpiElement.style.left = "-100%";
	dpiElement.style.top = "-100%";
	(js_Browser().default).get_document().body.appendChild(dpiElement);
	var dpi = dpiElement.offsetHeight;
	dpiElement.remove();
	return dpi;
}
SystemImpl.setCanvas = function(canvas) {
	SystemImpl.khanvas = canvas;
}
SystemImpl.getScreenRotation = function() {
	return (kha_ScreenRotation().default).RotationNone;
}
SystemImpl.getTime = function() {
	var performance = window.performance ? window.performance : window.Date;
	return performance.now() / 1000;
}
SystemImpl.getVsync = function() {
	return true;
}
SystemImpl.getRefreshRate = function() {
	return 60;
}
SystemImpl.getSystemId = function() {
	return "HTML5";
}
SystemImpl.requestShutdown = function() {
	(js_Browser().default).get_window().close();
}
SystemImpl.init2 = function(backbufferFormat) {
	(haxe_Log().default).trace = (js_Boot().default).__trace;
	SystemImpl.keyboard = new (kha_input_Keyboard().default)();
	SystemImpl.mouse = new (kha_input_MouseImpl().default)();
	SystemImpl.surface = new (kha_input_Surface().default)();
	SystemImpl.gamepads = [];
	SystemImpl.gamepadStates = [];
	var _g = 0;
	while(_g < 4) {
		var i = _g++;
		SystemImpl.gamepads[i] = new (kha_input_Gamepad().default)(i);
		SystemImpl.gamepadStates[i] = new (kha_GamepadStates().default)();
	}
	(js_Browser().default).get_window().addEventListener("gamepadconnected",function(e_) {
		(kha_input_Gamepad().default).sendConnectEvent(e_.gamepad.index);
	});
	(js_Browser().default).get_window().addEventListener("gamepaddisconnected",function(e_1) {
		(kha_input_Gamepad().default).sendDisconnectEvent(e_1.gamepad.index);
	});
	if(SystemImpl.ie) {
		SystemImpl.pressedKeys = [];
		var _g1 = 0;
		while(_g1 < 256) {
			var i1 = _g1++;
			SystemImpl.pressedKeys.push(false);
		}
		var _g2 = 0;
		while(_g2 < 256) {
			var i2 = _g2++;
			SystemImpl.pressedKeys.push(null);
		}
	}
	(js_Browser().default).get_document().addEventListener("copy",function(e_2) {
		var e = e_2;
		if((kha_System().default).copyListener != null) {
			var data = (kha_System().default).copyListener();
			if(data != null) {
				e.clipboardData.setData("text/plain",data);
			}
			e.preventDefault();
		}
	});
	(js_Browser().default).get_document().addEventListener("cut",function(e_3) {
		var e1 = e_3;
		if((kha_System().default).cutListener != null) {
			var data1 = (kha_System().default).cutListener();
			if(data1 != null) {
				e1.clipboardData.setData("text/plain",data1);
			}
			e1.preventDefault();
		}
	});
	(js_Browser().default).get_document().addEventListener("paste",function(e_4) {
		var e2 = e_4;
		if((kha_System().default).pasteListener != null) {
			var tmp = e2.clipboardData.getData("text/plain");
			(kha_System().default).pasteListener(tmp);
			e2.preventDefault();
		}
	});
	(kha_CanvasImage().default).init();
	(kha_Scheduler().default).init();
	SystemImpl.loadFinished();
}
SystemImpl.getMouse = function(num) {
	if(num != 0) {
		return null;
	}
	return SystemImpl.mouse;
}
SystemImpl.getKeyboard = function(num) {
	if(num != 0) {
		return null;
	}
	return SystemImpl.keyboard;
}
SystemImpl.checkGamepad = function(pad) {
	var _g1 = 0;
	var _g = pad.axes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(pad.axes[i] != null) {
			if(SystemImpl.gamepadStates[pad.index].axes[i] != pad.axes[i]) {
				var axis = pad.axes[i];
				if(i % 2 == 1) {
					axis = -axis;
				}
				SystemImpl.gamepadStates[pad.index].axes[i] = axis;
				SystemImpl.gamepads[pad.index].sendAxisEvent(i,axis);
			}
		}
	}
	var _g11 = 0;
	var _g2 = pad.buttons.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		if(pad.buttons[i1] != null) {
			if(SystemImpl.gamepadStates[pad.index].buttons[i1] != pad.buttons[i1].value) {
				SystemImpl.gamepadStates[pad.index].buttons[i1] = pad.buttons[i1].value;
				SystemImpl.gamepads[pad.index].sendButtonEvent(i1,pad.buttons[i1].value);
			}
		}
	}
	if(pad.axes.length <= 4 && pad.buttons.length > 7) {
		SystemImpl.gamepadStates[pad.index].axes[4] = pad.buttons[6].value;
		SystemImpl.gamepads[pad.index].sendAxisEvent(4,pad.buttons[6].value);
		SystemImpl.gamepadStates[pad.index].axes[5] = pad.buttons[7].value;
		SystemImpl.gamepads[pad.index].sendAxisEvent(5,pad.buttons[7].value);
	}
}
SystemImpl.loadFinished = function() {
	var canvas = SystemImpl.khanvas;
	if(canvas == null) {
		canvas = (js_Browser().default).get_document().getElementById((kha_CompilerDefines().default).canvas_id);
	}
	canvas.style.cursor = "default";
	var gl = false;
	try {
		SystemImpl.gl = canvas.getContext("webgl2",{ alpha : false, antialias : SystemImpl.options.samplesPerPixel > 1, stencil : true});
		SystemImpl.gl.pixelStorei(37441,1);
		SystemImpl.halfFloat = { HALF_FLOAT_OES : 5131};
		SystemImpl.depthTexture = { UNSIGNED_INT_24_8_WEBGL : 34042};
		SystemImpl.drawBuffers = { COLOR_ATTACHMENT0_WEBGL : 36064};
		SystemImpl.elementIndexUint = true;
		SystemImpl.gl.getExtension("EXT_color_buffer_float");
		SystemImpl.gl.getExtension("OES_texture_float_linear");
		SystemImpl.gl.getExtension("OES_texture_half_float_linear");
		SystemImpl.anisotropicFilter = SystemImpl.gl.getExtension("EXT_texture_filter_anisotropic");
		if(SystemImpl.anisotropicFilter == null) {
			SystemImpl.anisotropicFilter = SystemImpl.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
		}
		gl = true;
		SystemImpl.gl2 = true;
		(kha_Shaders().default).init();
	} catch( e ) {
		(haxe_Log().default).trace("Could not initialize WebGL 2, falling back to WebGL.",{ fileName : "SystemImpl.hx", lineNumber : 349, className : "kha.SystemImpl", methodName : "loadFinished"});
	}
	if(!SystemImpl.gl2) {
		try {
			SystemImpl.gl = canvas.getContext("experimental-webgl",{ alpha : false, antialias : SystemImpl.options.samplesPerPixel > 1, stencil : true});
			if(SystemImpl.gl != null) {
				SystemImpl.gl.pixelStorei(37441,1);
				SystemImpl.gl.getExtension("OES_texture_float");
				SystemImpl.gl.getExtension("OES_texture_float_linear");
				SystemImpl.halfFloat = SystemImpl.gl.getExtension("OES_texture_half_float");
				SystemImpl.gl.getExtension("OES_texture_half_float_linear");
				SystemImpl.depthTexture = SystemImpl.gl.getExtension("WEBGL_depth_texture");
				SystemImpl.gl.getExtension("EXT_shader_texture_lod");
				SystemImpl.gl.getExtension("OES_standard_derivatives");
				SystemImpl.anisotropicFilter = SystemImpl.gl.getExtension("EXT_texture_filter_anisotropic");
				if(SystemImpl.anisotropicFilter == null) {
					SystemImpl.anisotropicFilter = SystemImpl.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
				}
				SystemImpl.drawBuffers = SystemImpl.gl.getExtension("WEBGL_draw_buffers");
				SystemImpl.elementIndexUint = SystemImpl.gl.getExtension("OES_element_index_uint");
				gl = true;
				(kha_Shaders().default).init();
			}
		} catch( e1 ) {
			(haxe_Log().default).trace("Could not initialize WebGL, falling back to Canvas.",{ fileName : "SystemImpl.hx", lineNumber : 373, className : "kha.SystemImpl", methodName : "loadFinished"});
		}
	}
	SystemImpl.setCanvas(canvas);
	if(gl) {
		var g4 = new (kha_js_graphics4_Graphics().default)();
		SystemImpl.frame = new (kha_Framebuffer().default)(0,null,null,g4);
		SystemImpl.frame.init(new (kha_graphics2_Graphics1().default)(SystemImpl.frame),new (kha_js_graphics4_Graphics2().default)(SystemImpl.frame),g4);
	} else {
		kha_js_Font.Kravur = kha_Kravur; kha_Kravur = kha_js_Font;
		var g2 = new (kha_js_CanvasGraphics().default)(canvas.getContext("2d"));
		SystemImpl.frame = new (kha_Framebuffer().default)(0,null,g2,null);
		SystemImpl.frame.init(new (kha_graphics2_Graphics1().default)(SystemImpl.frame),g2,null);
	}
	if(!SystemImpl.mobile && (kha_audio2_Audio().default)._init()) {
		SystemImpl._hasWebAudio = true;
		(kha_audio2_Audio1().default)._init();
	} else if(SystemImpl.mobile) {
		SystemImpl._hasWebAudio = false;
		(kha_js_MobileWebAudio().default)._init();
		kha_audio2_Audio1 = kha_js_MobileWebAudio;
	} else {
		SystemImpl._hasWebAudio = false;
		(kha_js_AudioElementAudio().default)._compile();
		kha_audio2_Audio1 = kha_js_AudioElementAudio;
	}
	(kha_vr_VrInterface().default).instance = new (kha_js_vr_VrInterface().default)();
	(kha_Scheduler().default).start();
	var $window = (js_Browser().default).get_window();
	var requestAnimationFrame = $window.requestAnimationFrame;
	if(requestAnimationFrame == null) {
		requestAnimationFrame = $window.mozRequestAnimationFrame;
	}
	if(requestAnimationFrame == null) {
		requestAnimationFrame = $window.webkitRequestAnimationFrame;
	}
	if(requestAnimationFrame == null) {
		requestAnimationFrame = $window.msRequestAnimationFrame;
	}
	var animate = null;
	animate = function(timestamp) {
		var window1 = (js_Browser().default).get_window();
		if(requestAnimationFrame == null) {
			window1.setTimeout(animate,16.6666666666666679);
		} else {
			requestAnimationFrame(animate);
		}
		var sysGamepads = SystemImpl.getGamepads();
		if(sysGamepads != null) {
			var _g1 = 0;
			var _g = sysGamepads.length;
			while(_g1 < _g) {
				var i = _g1++;
				var pad = sysGamepads[i];
				if(pad != null) {
					SystemImpl.checkGamepad(pad);
				}
			}
		}
		(kha_Scheduler().default).executeFrame();
		if(canvas.getContext) {
			var displayWidth = canvas.clientWidth;
			var displayHeight = canvas.clientHeight;
			if(canvas.width != displayWidth || canvas.height != displayHeight) {
				canvas.width = displayWidth;
				canvas.height = displayHeight;
			}
			(kha_System().default).render(0,SystemImpl.frame);
			if(SystemImpl.gl != null) {
				SystemImpl.gl.clearColor(1,1,1,1);
				SystemImpl.gl.colorMask(false,false,false,true);
				SystemImpl.gl.clear(16384);
				SystemImpl.gl.colorMask(true,true,true,true);
			}
		}
	};
	var animate1 = animate;
	if(requestAnimationFrame == null) {
		$window.setTimeout(animate1,16.6666666666666679);
	} else {
		requestAnimationFrame(animate1);
	}
	if(canvas.getAttribute("tabindex") == null) {
		canvas.setAttribute("tabindex","0");
	}
	canvas.focus();
	canvas.oncontextmenu = function(event) {
		event.stopPropagation();
		event.preventDefault();
	};
	canvas.onmousedown = SystemImpl.mouseDown;
	canvas.onmousemove = SystemImpl.mouseMove;
	if(SystemImpl.keyboard != null) {
		canvas.onkeydown = SystemImpl.keyDown;
		canvas.onkeyup = SystemImpl.keyUp;
		canvas.onkeypress = SystemImpl.keyPress;
	}
	canvas.onblur = SystemImpl.onBlur;
	canvas.onfocus = SystemImpl.onFocus;
	canvas.onmousewheel = canvas.onwheel = SystemImpl.mouseWheel;
	canvas.onmouseleave = SystemImpl.mouseLeave;
	canvas.addEventListener("wheel mousewheel",SystemImpl.mouseWheel,false);
	canvas.addEventListener("touchstart",SystemImpl.touchDown,false);
	canvas.addEventListener("touchend",SystemImpl.touchUp,false);
	canvas.addEventListener("touchmove",SystemImpl.touchMove,false);
	canvas.addEventListener("touchcancel",SystemImpl.touchCancel,false);
	(js_Browser().default).get_window().addEventListener("unload",SystemImpl.unload);
}
SystemImpl.lockMouse = function() {
	if(($_=SystemImpl.khanvas,$bind($_,$_.requestPointerLock))) {
		SystemImpl.khanvas.requestPointerLock();
	} else if(SystemImpl.khanvas.mozRequestPointerLock) {
		SystemImpl.khanvas.mozRequestPointerLock();
	} else if(SystemImpl.khanvas.webkitRequestPointerLock) {
		SystemImpl.khanvas.webkitRequestPointerLock();
	}
}
SystemImpl.unlockMouse = function() {
	if(document.exitPointerLock) {
		document.exitPointerLock();
	} else if(document.mozExitPointerLock) {
		document.mozExitPointerLock();
	} else if(document.webkitExitPointerLock) {
		document.webkitExitPointerLock();
	}
}
SystemImpl.canLockMouse = function() {
	return 'pointerLockElement' in document ||
		'mozPointerLockElement' in document ||
		'webkitPointerLockElement' in document;
}
SystemImpl.isMouseLocked = function() {
	return document.pointerLockElement === kha_SystemImpl.khanvas ||
			document.mozPointerLockElement === kha_SystemImpl.khanvas ||
			document.webkitPointerLockElement === kha_SystemImpl.khanvas;
}
SystemImpl.notifyOfMouseLockChange = function(func,error) {
	(js_Browser().default).get_document().addEventListener("pointerlockchange",func,false);
	(js_Browser().default).get_document().addEventListener("mozpointerlockchange",func,false);
	(js_Browser().default).get_document().addEventListener("webkitpointerlockchange",func,false);
	(js_Browser().default).get_document().addEventListener("pointerlockerror",error,false);
	(js_Browser().default).get_document().addEventListener("mozpointerlockerror",error,false);
	(js_Browser().default).get_document().addEventListener("webkitpointerlockerror",error,false);
}
SystemImpl.removeFromMouseLockChange = function(func,error) {
	(js_Browser().default).get_document().removeEventListener("pointerlockchange",func,false);
	(js_Browser().default).get_document().removeEventListener("mozpointerlockchange",func,false);
	(js_Browser().default).get_document().removeEventListener("webkitpointerlockchange",func,false);
	(js_Browser().default).get_document().removeEventListener("pointerlockerror",error,false);
	(js_Browser().default).get_document().removeEventListener("mozpointerlockerror",error,false);
	(js_Browser().default).get_document().removeEventListener("webkitpointerlockerror",error,false);
}
SystemImpl.unload = function(_) {
}
SystemImpl.setMouseXY = function(event) {
	var rect = SystemImpl.khanvas.getBoundingClientRect();
	var borderWidth = SystemImpl.khanvas.clientLeft;
	var borderHeight = SystemImpl.khanvas.clientTop;
	SystemImpl.mouseX = (Std().default)["int"]((event.clientX - rect.left - borderWidth) * SystemImpl.khanvas.width / (rect.width - 2 * borderWidth));
	SystemImpl.mouseY = (Std().default)["int"]((event.clientY - rect.top - borderHeight) * SystemImpl.khanvas.height / (rect.height - 2 * borderHeight));
}
SystemImpl.unlockiOSSound = function() {
	if(!SystemImpl.ios || SystemImpl.iosSoundEnabled) {
		return;
	}
	var buffer = (kha_js_MobileWebAudio().default)._context.createBuffer(1,1,22050);
	var source = (kha_js_MobileWebAudio().default)._context.createBufferSource();
	source.buffer = buffer;
	source.connect((kha_js_MobileWebAudio().default)._context.destination);
	source.start();
	source.stop();
	SystemImpl.iosSoundEnabled = true;
}
SystemImpl.unlockSound = function() {
	if(!SystemImpl.soundEnabled) {
		var context = (kha_audio2_Audio().default)._context;
		if(context == null) {
			context = kha_audio2_Audio1._context;
		}
		if(context != null) {
			context.resume().then(function(c) {
				SystemImpl.soundEnabled = true;
			})["catch"](function(err) {
				(haxe_Log().default).trace(err,{ fileName : "SystemImpl.hx", lineNumber : 600, className : "kha.SystemImpl", methodName : "unlockSound"});
			});
		}
	}
	SystemImpl.unlockiOSSound();
}
SystemImpl.mouseLeave = function() {
	SystemImpl.mouse.sendLeaveEvent(0);
}
SystemImpl.mouseWheel = function(event) {
	SystemImpl.insideInputEvent = true;
	SystemImpl.unlockSound();
	event.preventDefault();
	if(event.deltaMode == 0) {
		if(event.deltaY < 0) {
			SystemImpl.mouse.sendWheelEvent(0,-1);
		} else if(event.deltaY > 0) {
			SystemImpl.mouse.sendWheelEvent(0,1);
		}
		SystemImpl.insideInputEvent = false;
		return false;
	}
	if(event.deltaMode == 1) {
		SystemImpl.minimumScroll = (Std().default)["int"](Math.min(SystemImpl.minimumScroll,Math.abs(event.deltaY)));
		SystemImpl.mouse.sendWheelEvent(0,(Std().default)["int"](event.deltaY / SystemImpl.minimumScroll));
		SystemImpl.insideInputEvent = false;
		return false;
	}
	SystemImpl.insideInputEvent = false;
	return false;
}
SystemImpl.mouseDown = function(event) {
	SystemImpl.insideInputEvent = true;
	SystemImpl.unlockSound();
	SystemImpl.setMouseXY(event);
	if(event.which == 1) {
		if(event.ctrlKey) {
			SystemImpl.leftMouseCtrlDown = true;
			SystemImpl.mouse.sendDownEvent(0,1,SystemImpl.mouseX,SystemImpl.mouseY);
		} else {
			SystemImpl.leftMouseCtrlDown = false;
			SystemImpl.mouse.sendDownEvent(0,0,SystemImpl.mouseX,SystemImpl.mouseY);
		}
		if(($_=SystemImpl.khanvas,$bind($_,$_.setCapture)) != null) {
			SystemImpl.khanvas.setCapture();
		} else {
			SystemImpl.khanvas.ownerDocument.addEventListener("mousemove",SystemImpl.documentMouseMove,true);
		}
		SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",SystemImpl.mouseLeftUp);
	} else if(event.which == 2) {
		SystemImpl.mouse.sendDownEvent(0,2,SystemImpl.mouseX,SystemImpl.mouseY);
		SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",SystemImpl.mouseMiddleUp);
	} else if(event.which == 3) {
		SystemImpl.mouse.sendDownEvent(0,1,SystemImpl.mouseX,SystemImpl.mouseY);
		SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",SystemImpl.mouseRightUp);
	}
	SystemImpl.insideInputEvent = false;
}
SystemImpl.mouseLeftUp = function(event) {
	SystemImpl.unlockSound();
	if(event.which != 1) {
		return;
	}
	SystemImpl.insideInputEvent = true;
	SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",SystemImpl.mouseLeftUp);
	if(($_=SystemImpl.khanvas,$bind($_,$_.releaseCapture)) != null) {
		SystemImpl.khanvas.ownerDocument.releaseCapture();
	} else {
		SystemImpl.khanvas.ownerDocument.removeEventListener("mousemove",SystemImpl.documentMouseMove,true);
	}
	if(SystemImpl.leftMouseCtrlDown) {
		SystemImpl.mouse.sendUpEvent(0,1,SystemImpl.mouseX,SystemImpl.mouseY);
	} else {
		SystemImpl.mouse.sendUpEvent(0,0,SystemImpl.mouseX,SystemImpl.mouseY);
	}
	SystemImpl.leftMouseCtrlDown = false;
	SystemImpl.insideInputEvent = false;
}
SystemImpl.mouseMiddleUp = function(event) {
	SystemImpl.unlockSound();
	if(event.which != 2) {
		return;
	}
	SystemImpl.insideInputEvent = true;
	SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",SystemImpl.mouseMiddleUp);
	SystemImpl.mouse.sendUpEvent(0,2,SystemImpl.mouseX,SystemImpl.mouseY);
	SystemImpl.insideInputEvent = false;
}
SystemImpl.mouseRightUp = function(event) {
	SystemImpl.unlockSound();
	if(event.which != 3) {
		return;
	}
	SystemImpl.insideInputEvent = true;
	SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",SystemImpl.mouseRightUp);
	SystemImpl.mouse.sendUpEvent(0,1,SystemImpl.mouseX,SystemImpl.mouseY);
	SystemImpl.insideInputEvent = false;
}
SystemImpl.documentMouseMove = function(event) {
	event.stopPropagation();
	SystemImpl.mouseMove(event);
}
SystemImpl.mouseMove = function(event) {
	SystemImpl.insideInputEvent = true;
	SystemImpl.unlockSound();
	var lastMouseX = SystemImpl.mouseX;
	var lastMouseY = SystemImpl.mouseY;
	SystemImpl.setMouseXY(event);
	var movementX = event.movementX;
	var movementY = event.movementY;
	if(event.movementX == null) {
		if(event.mozMovementX != null) {
			movementX = event.mozMovementX;
		} else if(event.webkitMovementX != null) {
			movementX = event.webkitMovementX;
		} else {
			movementX = SystemImpl.mouseX - lastMouseX;
		}
		if(event.mozMovementY != null) {
			movementY = event.mozMovementY;
		} else if(event.webkitMovementY != null) {
			movementY = event.webkitMovementY;
		} else {
			movementY = SystemImpl.mouseY - lastMouseY;
		}
	}
	if(SystemImpl.firefox) {
		movementX = (Std().default)["int"](movementX * (js_Browser().default).get_window().devicePixelRatio);
		movementY = (Std().default)["int"](movementY * (js_Browser().default).get_window().devicePixelRatio);
	}
	SystemImpl.mouse.sendMoveEvent(0,SystemImpl.mouseX,SystemImpl.mouseY,movementX,movementY);
	SystemImpl.insideInputEvent = false;
}
SystemImpl.setTouchXY = function(touch) {
	var rect = SystemImpl.khanvas.getBoundingClientRect();
	var borderWidth = SystemImpl.khanvas.clientLeft;
	var borderHeight = SystemImpl.khanvas.clientTop;
	SystemImpl.touchX = (Std().default)["int"]((touch.clientX - rect.left - borderWidth) * SystemImpl.khanvas.width / (rect.width - 2 * borderWidth));
	SystemImpl.touchY = (Std().default)["int"]((touch.clientY - rect.top - borderHeight) * SystemImpl.khanvas.height / (rect.height - 2 * borderHeight));
}
SystemImpl.touchDown = function(event) {
	SystemImpl.insideInputEvent = true;
	SystemImpl.unlockSound();
	event.stopPropagation();
	event.preventDefault();
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		var id = touch.identifier;
		if(SystemImpl.ios) {
			id = SystemImpl.iosTouchs.indexOf(-1);
			if(id == -1) {
				id = SystemImpl.iosTouchs.length;
			}
			SystemImpl.iosTouchs[id] = touch.identifier;
		}
		SystemImpl.setTouchXY(touch);
		SystemImpl.mouse.sendDownEvent(0,0,SystemImpl.touchX,SystemImpl.touchY);
		SystemImpl.surface.sendTouchStartEvent(id,SystemImpl.touchX,SystemImpl.touchY);
	}
	SystemImpl.insideInputEvent = false;
}
SystemImpl.touchUp = function(event) {
	SystemImpl.insideInputEvent = true;
	SystemImpl.unlockSound();
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		var id = touch.identifier;
		if(SystemImpl.ios) {
			id = SystemImpl.iosTouchs.indexOf(id);
			SystemImpl.iosTouchs[id] = -1;
		}
		SystemImpl.setTouchXY(touch);
		SystemImpl.mouse.sendUpEvent(0,0,SystemImpl.touchX,SystemImpl.touchY);
		SystemImpl.surface.sendTouchEndEvent(id,SystemImpl.touchX,SystemImpl.touchY);
	}
	SystemImpl.insideInputEvent = false;
}
SystemImpl.touchMove = function(event) {
	SystemImpl.insideInputEvent = true;
	SystemImpl.unlockSound();
	var index = 0;
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		SystemImpl.setTouchXY(touch);
		if(index == 0) {
			var movementX = SystemImpl.touchX - SystemImpl.lastFirstTouchX;
			var movementY = SystemImpl.touchY - SystemImpl.lastFirstTouchY;
			SystemImpl.lastFirstTouchX = SystemImpl.touchX;
			SystemImpl.lastFirstTouchY = SystemImpl.touchY;
			SystemImpl.mouse.sendMoveEvent(0,SystemImpl.touchX,SystemImpl.touchY,movementX,movementY);
		}
		var id = touch.identifier;
		if(SystemImpl.ios) {
			id = SystemImpl.iosTouchs.indexOf(id);
		}
		SystemImpl.surface.sendMoveEvent(id,SystemImpl.touchX,SystemImpl.touchY);
		++index;
	}
	SystemImpl.insideInputEvent = false;
}
SystemImpl.touchCancel = function(event) {
	SystemImpl.insideInputEvent = true;
	SystemImpl.unlockSound();
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		var id = touch.identifier;
		if(SystemImpl.ios) {
			id = SystemImpl.iosTouchs.indexOf(id);
		}
		SystemImpl.setTouchXY(touch);
		SystemImpl.mouse.sendUpEvent(0,0,SystemImpl.touchX,SystemImpl.touchY);
		SystemImpl.surface.sendTouchEndEvent(id,SystemImpl.touchX,SystemImpl.touchY);
	}
	SystemImpl.iosTouchs = [];
	SystemImpl.insideInputEvent = false;
}
SystemImpl.onBlur = function() {
	(kha_System().default).background();
}
SystemImpl.onFocus = function() {
	(kha_System().default).foreground();
}
SystemImpl.keycodeToChar = function(key,keycode,shift) {
	if(key != null) {
		if(key.length == 1) {
			return key;
		}
		switch(key) {
		case "Add":
			return "+";
		case "Divide":
			return "/";
		case "Multiply":
			return "*";
		case "Subtract":
			return "-";
		}
	}
	switch(keycode) {
	case 48:
		if(shift) {
			return "=";
		} else {
			return "0";
		}
		break;
	case 49:
		if(shift) {
			return "!";
		} else {
			return "1";
		}
		break;
	case 50:
		if(shift) {
			return "\"";
		} else {
			return "2";
		}
		break;
	case 51:
		if(shift) {
			return "§";
		} else {
			return "3";
		}
		break;
	case 52:
		if(shift) {
			return "$";
		} else {
			return "4";
		}
		break;
	case 53:
		if(shift) {
			return "%";
		} else {
			return "5";
		}
		break;
	case 54:
		if(shift) {
			return "&";
		} else {
			return "6";
		}
		break;
	case 55:
		if(shift) {
			return "/";
		} else {
			return "7";
		}
		break;
	case 56:
		if(shift) {
			return "(";
		} else {
			return "8";
		}
		break;
	case 57:
		if(shift) {
			return ")";
		} else {
			return "9";
		}
		break;
	case 106:
		return "*";
	case 107:
		return "+";
	case 109:
		return "-";
	case 111:
		return "/";
	case 187:
		if(shift) {
			return "*";
		} else {
			return "+";
		}
		break;
	case 188:
		if(shift) {
			return ";";
		} else {
			return ",";
		}
		break;
	case 189:
		if(shift) {
			return "_";
		} else {
			return "-";
		}
		break;
	case 190:
		if(shift) {
			return ":";
		} else {
			return ".";
		}
		break;
	case 191:
		if(shift) {
			return "'";
		} else {
			return "#";
		}
		break;
	case 212:
		if(shift) {
			return "`";
		} else {
			return "´";
		}
		break;
	case 219:
		if(shift) {
			return "?";
		} else {
			return "ß";
		}
		break;
	case 226:
		if(shift) {
			return ">";
		} else {
			return "<";
		}
		break;
	}
	if(keycode >= 96 && keycode <= 105) {
		return String.fromCharCode(-48 + keycode);
	}
	if(keycode >= 65 && keycode <= 90) {
		if(shift) {
			return String.fromCharCode(keycode);
		} else {
			return String.fromCharCode(keycode - 65 + 97);
		}
	}
	return String.fromCharCode(keycode);
}
SystemImpl.keyDown = function(event) {
	if((event.keyCode < 112 || event.keyCode > 123) && (event.key != null && event.key.length != 1)) {
		event.preventDefault();
	}
	event.stopPropagation();
	if(SystemImpl.ie) {
		if(SystemImpl.pressedKeys[event.keyCode]) {
			event.preventDefault();
			return;
		}
		SystemImpl.pressedKeys[event.keyCode] = true;
	} else if(event.repeat) {
		event.preventDefault();
		return;
	}
	SystemImpl.keyboard.sendDownEvent(event.keyCode);
}
SystemImpl.keyUp = function(event) {
	event.preventDefault();
	event.stopPropagation();
	if(SystemImpl.ie) {
		SystemImpl.pressedKeys[event.keyCode] = false;
	}
	SystemImpl.keyboard.sendUpEvent(event.keyCode);
}
SystemImpl.keyPress = function(event) {
	if(event.which == 0) {
		return;
	}
	event.preventDefault();
	event.stopPropagation();
	SystemImpl.keyboard.sendPressEvent(String.fromCharCode(event.which));
}
SystemImpl.canSwitchFullscreen = function() {
	return 'fullscreenElement ' in document ||
		'mozFullScreenElement' in document ||
		'webkitFullscreenElement' in document ||
		'msFullscreenElement' in document
		;
}
SystemImpl.isFullscreen = function() {
	return document.fullscreenElement === this.khanvas ||
			document.mozFullScreenElement === this.khanvas ||
			document.webkitFullscreenElement === this.khanvas ||
			document.msFullscreenElement === this.khanvas ;
}
SystemImpl.requestFullscreen = function() {
	if(($_=SystemImpl.khanvas,$bind($_,$_.requestFullscreen))) {
		SystemImpl.khanvas.requestFullscreen();
	} else if(SystemImpl.khanvas.msRequestFullscreen) {
		SystemImpl.khanvas.msRequestFullscreen();
	} else if(SystemImpl.khanvas.mozRequestFullScreen) {
		SystemImpl.khanvas.mozRequestFullScreen();
	} else if(SystemImpl.khanvas.webkitRequestFullscreen) {
		SystemImpl.khanvas.webkitRequestFullscreen();
	}
}
SystemImpl.exitFullscreen = function() {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}
SystemImpl.notifyOfFullscreenChange = function(func,error) {
	(js_Browser().default).get_document().addEventListener("fullscreenchange",func,false);
	(js_Browser().default).get_document().addEventListener("mozfullscreenchange",func,false);
	(js_Browser().default).get_document().addEventListener("webkitfullscreenchange",func,false);
	(js_Browser().default).get_document().addEventListener("MSFullscreenChange",func,false);
	(js_Browser().default).get_document().addEventListener("fullscreenerror",error,false);
	(js_Browser().default).get_document().addEventListener("mozfullscreenerror",error,false);
	(js_Browser().default).get_document().addEventListener("webkitfullscreenerror",error,false);
	(js_Browser().default).get_document().addEventListener("MSFullscreenError",error,false);
}
SystemImpl.removeFromFullscreenChange = function(func,error) {
	(js_Browser().default).get_document().removeEventListener("fullscreenchange",func,false);
	(js_Browser().default).get_document().removeEventListener("mozfullscreenchange",func,false);
	(js_Browser().default).get_document().removeEventListener("webkitfullscreenchange",func,false);
	(js_Browser().default).get_document().removeEventListener("MSFullscreenChange",func,false);
	(js_Browser().default).get_document().removeEventListener("fullscreenerror",error,false);
	(js_Browser().default).get_document().removeEventListener("mozfullscreenerror",error,false);
	(js_Browser().default).get_document().removeEventListener("webkitfullscreenerror",error,false);
	(js_Browser().default).get_document().removeEventListener("MSFullscreenError",error,false);
}
SystemImpl.changeResolution = function(width,height) {
}
SystemImpl.setKeepScreenOn = function(on) {
}
SystemImpl.loadUrl = function(url) {
	(js_Browser().default).get_window().open(url,"_blank");
}
SystemImpl.getGamepadId = function(index) {
	var sysGamepads = SystemImpl.getGamepads();
	if(sysGamepads != null && sysGamepads[index]) {
		return sysGamepads[index].id;
	}
	return "unkown";
}
SystemImpl.getGamepads = function() {
	if(SystemImpl.chrome && (kha_vr_VrInterface().default).instance.IsVrEnabled()) {
		return null;
	}
	if(navigator.getGamepads) {
		return (js_Browser().default).get_navigator().getGamepads();
	} else {
		return null;
	}
}
SystemImpl.getPen = function(num) {
	return null;
}
SystemImpl.mobile = false
SystemImpl.ios = false
SystemImpl.mobileAudioPlaying = false
SystemImpl.chrome = false
SystemImpl.firefox = false
SystemImpl.ie = false
SystemImpl.insideInputEvent = false
SystemImpl.maxGamepads = 4
SystemImpl.leftMouseCtrlDown = false
SystemImpl.keyboard = null
SystemImpl.minimumScroll = 999
SystemImpl.lastFirstTouchX = 0
SystemImpl.lastFirstTouchY = 0
SystemImpl.iosSoundEnabled = false
SystemImpl.soundEnabled = false
SystemImpl.iosTouchs = []

// Export

exports.default = SystemImpl;