// Class: kha.js.graphics4.Graphics2

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function kha_graphics4_Graphics2() {return require("./../../../kha/graphics4/Graphics2");}
function js_Boot() {return require("./../../../js/Boot");}
function kha_js_Video() {return require("./../../../kha/js/Video");}
function kha_SystemImpl() {return require("./../../../kha/SystemImpl");}

// Constructor

var Graphics2 = function(canvas) {
	(kha_graphics4_Graphics2().default).call(this,canvas);
}

// Meta

Graphics2.__name__ = ["kha","js","graphics4","Graphics2"];
Graphics2.__super__ = (kha_graphics4_Graphics2().default);
Graphics2.prototype = $extend((kha_graphics4_Graphics2().default).prototype, {
	drawVideoInternal: function(video,x,y,width,height) {
		var v = (js_Boot().default).__cast(video , (kha_js_Video().default));
		this.drawScaledSubImage(v.texture,0,0,v.texture.get_width(),v.texture.get_height(),x,y,width,height);
	},
	begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
		(kha_SystemImpl().default).gl.colorMask(true,true,true,true);
		(kha_SystemImpl().default).gl.disable(2929);
		(kha_SystemImpl().default).gl.depthFunc(519);
		(kha_graphics4_Graphics2().default).prototype.begin.call(this,clear,clearColor);
	}
});
Graphics2.prototype.__class__ = Graphics2.prototype.constructor = $hxClasses["kha.js.graphics4.Graphics2"] = Graphics2;

// Init



// Statics




// Export

exports.default = Graphics2;