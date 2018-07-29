// Class: kha.Shaders

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function Reflect() {return require("./../Reflect");}
function haxe_Unserializer() {return require("./../haxe/Unserializer");}
function kha_internal_BytesBlob() {return require("./../kha/internal/BytesBlob");}
function kha_graphics4_FragmentShader() {return require("./../kha/graphics4/FragmentShader");}
function kha_graphics4_VertexShader() {return require("./../kha/graphics4/VertexShader");}

// Constructor

var Shaders = function(){}

// Meta

Shaders.__name__ = ["kha","Shaders"];
Shaders.prototype = {
	
};
Shaders.prototype.__class__ = Shaders.prototype.constructor = $hxClasses["kha.Shaders"] = Shaders;

// Init



// Statics

Shaders.init = function() {
	var blobs = [];
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		var data = (Reflect().default).field(Shaders,"painter_colored_fragData" + i);
		var bytes = (haxe_Unserializer().default).run(data);
		blobs.push((kha_internal_BytesBlob().default).fromBytes(bytes));
	}
	Shaders.painter_colored_frag = new (kha_graphics4_FragmentShader().default)(blobs,["painter-colored.frag.essl","painter-colored-relaxed.frag.essl","painter-colored-webgl2.frag.essl"]);
	var blobs1 = [];
	var _g1 = 0;
	while(_g1 < 3) {
		var i1 = _g1++;
		var data1 = (Reflect().default).field(Shaders,"painter_colored_vertData" + i1);
		var bytes1 = (haxe_Unserializer().default).run(data1);
		blobs1.push((kha_internal_BytesBlob().default).fromBytes(bytes1));
	}
	Shaders.painter_colored_vert = new (kha_graphics4_VertexShader().default)(blobs1,["painter-colored.vert.essl","painter-colored-relaxed.vert.essl","painter-colored-webgl2.vert.essl"]);
	var blobs2 = [];
	var _g2 = 0;
	while(_g2 < 3) {
		var i2 = _g2++;
		var data2 = (Reflect().default).field(Shaders,"painter_image_fragData" + i2);
		var bytes2 = (haxe_Unserializer().default).run(data2);
		blobs2.push((kha_internal_BytesBlob().default).fromBytes(bytes2));
	}
	Shaders.painter_image_frag = new (kha_graphics4_FragmentShader().default)(blobs2,["painter-image.frag.essl","painter-image-relaxed.frag.essl","painter-image-webgl2.frag.essl"]);
	var blobs3 = [];
	var _g3 = 0;
	while(_g3 < 3) {
		var i3 = _g3++;
		var data3 = (Reflect().default).field(Shaders,"painter_image_vertData" + i3);
		var bytes3 = (haxe_Unserializer().default).run(data3);
		blobs3.push((kha_internal_BytesBlob().default).fromBytes(bytes3));
	}
	Shaders.painter_image_vert = new (kha_graphics4_VertexShader().default)(blobs3,["painter-image.vert.essl","painter-image-relaxed.vert.essl","painter-image-webgl2.vert.essl"]);
	var blobs4 = [];
	var _g4 = 0;
	while(_g4 < 3) {
		var i4 = _g4++;
		var data4 = (Reflect().default).field(Shaders,"painter_text_fragData" + i4);
		var bytes4 = (haxe_Unserializer().default).run(data4);
		blobs4.push((kha_internal_BytesBlob().default).fromBytes(bytes4));
	}
	Shaders.painter_text_frag = new (kha_graphics4_FragmentShader().default)(blobs4,["painter-text.frag.essl","painter-text-relaxed.frag.essl","painter-text-webgl2.frag.essl"]);
	var blobs5 = [];
	var _g5 = 0;
	while(_g5 < 3) {
		var i5 = _g5++;
		var data5 = (Reflect().default).field(Shaders,"painter_text_vertData" + i5);
		var bytes5 = (haxe_Unserializer().default).run(data5);
		blobs5.push((kha_internal_BytesBlob().default).fromBytes(bytes5));
	}
	Shaders.painter_text_vert = new (kha_graphics4_VertexShader().default)(blobs5,["painter-text.vert.essl","painter-text-relaxed.vert.essl","painter-text-webgl2.vert.essl"]);
	var blobs6 = [];
	var _g6 = 0;
	while(_g6 < 3) {
		var i6 = _g6++;
		var data6 = (Reflect().default).field(Shaders,"painter_video_fragData" + i6);
		var bytes6 = (haxe_Unserializer().default).run(data6);
		blobs6.push((kha_internal_BytesBlob().default).fromBytes(bytes6));
	}
	Shaders.painter_video_frag = new (kha_graphics4_FragmentShader().default)(blobs6,["painter-video.frag.essl","painter-video-relaxed.frag.essl","painter-video-webgl2.frag.essl"]);
	var blobs7 = [];
	var _g7 = 0;
	while(_g7 < 3) {
		var i7 = _g7++;
		var data7 = (Reflect().default).field(Shaders,"painter_video_vertData" + i7);
		var bytes7 = (haxe_Unserializer().default).run(data7);
		blobs7.push((kha_internal_BytesBlob().default).fromBytes(bytes7));
	}
	Shaders.painter_video_vert = new (kha_graphics4_VertexShader().default)(blobs7,["painter-video.vert.essl","painter-video-relaxed.vert.essl","painter-video-webgl2.vert.essl"]);
}
Shaders.painter_colored_fragData0 = "s198:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdmFyeWluZyBoaWdocCB2ZWM0IGZyYWdtZW50Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBnbF9GcmFnRGF0YVswXSA9IGZyYWdtZW50Q29sb3I7Cn0KCg"
Shaders.painter_colored_fragData1 = "s192:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7Cgp2YXJ5aW5nIHZlYzQgZnJhZ21lbnRDb2xvcjsKCnZvaWQgbWFpbigpCnsKICAgIGdsX0ZyYWdEYXRhWzBdID0gZnJhZ21lbnRDb2xvcjsKfQoK"
Shaders.painter_colored_fragData2 = "s223:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwppbiBoaWdocCB2ZWM0IGZyYWdtZW50Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBGcmFnQ29sb3IgPSBmcmFnbWVudENvbG9yOwp9Cgo"
Shaders.painter_colored_frag = null
Shaders.painter_colored_vertData0 = "s331:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmF0dHJpYnV0ZSB2ZWMzIHZlcnRleFBvc2l0aW9uOwp2YXJ5aW5nIHZlYzQgZnJhZ21lbnRDb2xvcjsKYXR0cmlidXRlIHZlYzQgdmVydGV4Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiB2ZWM0KHZlcnRleFBvc2l0aW9uLCAxLjApOwogICAgZnJhZ21lbnRDb2xvciA9IHZlcnRleENvbG9yOwp9Cgo"
Shaders.painter_colored_vertData1 = "s374:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1lZGl1bXAgbWF0NCBwcm9qZWN0aW9uTWF0cml4OwoKYXR0cmlidXRlIG1lZGl1bXAgdmVjMyB2ZXJ0ZXhQb3NpdGlvbjsKdmFyeWluZyBtZWRpdW1wIHZlYzQgZnJhZ21lbnRDb2xvcjsKYXR0cmlidXRlIG1lZGl1bXAgdmVjNCB2ZXJ0ZXhDb2xvcjsKCnZvaWQgbWFpbigpCnsKICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIHZlYzQodmVydGV4UG9zaXRpb24sIDEuMCk7CiAgICBmcmFnbWVudENvbG9yID0gdmVydGV4Q29sb3I7Cn0KCg"
Shaders.painter_colored_vertData2 = "s311:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWM0IGZyYWdtZW50Q29sb3I7CmluIHZlYzQgdmVydGV4Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiB2ZWM0KHZlcnRleFBvc2l0aW9uLCAxLjApOwogICAgZnJhZ21lbnRDb2xvciA9IHZlcnRleENvbG9yOwp9Cgo"
Shaders.painter_colored_vert = null
Shaders.painter_image_fragData0 = "s471:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKdmFyeWluZyBoaWdocCB2ZWMyIHRleENvb3JkOwp2YXJ5aW5nIGhpZ2hwIHZlYzQgY29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBoaWdocCB2ZWM0IHRleGNvbG9yID0gdGV4dHVyZTJEKHRleCwgdGV4Q29vcmQpICogY29sb3I7CiAgICBoaWdocCB2ZWMzIF8zMiA9IHRleGNvbG9yLnh5eiAqIGNvbG9yLnc7CiAgICB0ZXhjb2xvciA9IHZlYzQoXzMyLngsIF8zMi55LCBfMzIueiwgdGV4Y29sb3Iudyk7CiAgICBnbF9GcmFnRGF0YVswXSA9IHRleGNvbG9yOwp9Cgo"
Shaders.painter_image_fragData1 = "s444:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7Cgp1bmlmb3JtIG1lZGl1bXAgc2FtcGxlcjJEIHRleDsKCnZhcnlpbmcgdmVjMiB0ZXhDb29yZDsKdmFyeWluZyB2ZWM0IGNvbG9yOwoKdm9pZCBtYWluKCkKewogICAgdmVjNCB0ZXhjb2xvciA9IHRleHR1cmUyRCh0ZXgsIHRleENvb3JkKSAqIGNvbG9yOwogICAgdmVjMyBfMzIgPSB0ZXhjb2xvci54eXogKiBjb2xvci53OwogICAgdGV4Y29sb3IgPSB2ZWM0KF8zMi54LCBfMzIueSwgXzMyLnosIHRleGNvbG9yLncpOwogICAgZ2xfRnJhZ0RhdGFbMF0gPSB0ZXhjb2xvcjsKfQoK"
Shaders.painter_image_fragData2 = "s487:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKaW4gaGlnaHAgdmVjMiB0ZXhDb29yZDsKaW4gaGlnaHAgdmVjNCBjb2xvcjsKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwoKdm9pZCBtYWluKCkKewogICAgaGlnaHAgdmVjNCB0ZXhjb2xvciA9IHRleHR1cmUodGV4LCB0ZXhDb29yZCkgKiBjb2xvcjsKICAgIGhpZ2hwIHZlYzMgXzMyID0gdGV4Y29sb3IueHl6ICogY29sb3IudzsKICAgIHRleGNvbG9yID0gdmVjNChfMzIueCwgXzMyLnksIF8zMi56LCB0ZXhjb2xvci53KTsKICAgIEZyYWdDb2xvciA9IHRleGNvbG9yOwp9Cgo"
Shaders.painter_image_frag = null
Shaders.painter_image_vertData0 = "s415:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmF0dHJpYnV0ZSB2ZWMzIHZlcnRleFBvc2l0aW9uOwp2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7CmF0dHJpYnV0ZSB2ZWMyIHRleFBvc2l0aW9uOwp2YXJ5aW5nIHZlYzQgY29sb3I7CmF0dHJpYnV0ZSB2ZWM0IHZlcnRleENvbG9yOwoKdm9pZCBtYWluKCkKewogICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvbiwgMS4wKTsKICAgIHRleENvb3JkID0gdGV4UG9zaXRpb247CiAgICBjb2xvciA9IHZlcnRleENvbG9yOwp9Cgo"
Shaders.painter_image_vertData1 = "s479:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1lZGl1bXAgbWF0NCBwcm9qZWN0aW9uTWF0cml4OwoKYXR0cmlidXRlIG1lZGl1bXAgdmVjMyB2ZXJ0ZXhQb3NpdGlvbjsKdmFyeWluZyBtZWRpdW1wIHZlYzIgdGV4Q29vcmQ7CmF0dHJpYnV0ZSBtZWRpdW1wIHZlYzIgdGV4UG9zaXRpb247CnZhcnlpbmcgbWVkaXVtcCB2ZWM0IGNvbG9yOwphdHRyaWJ1dGUgbWVkaXVtcCB2ZWM0IHZlcnRleENvbG9yOwoKdm9pZCBtYWluKCkKewogICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvbiwgMS4wKTsKICAgIHRleENvb3JkID0gdGV4UG9zaXRpb247CiAgICBjb2xvciA9IHZlcnRleENvbG9yOwp9Cgo"
Shaders.painter_image_vertData2 = "s380:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHRleFBvc2l0aW9uOwpvdXQgdmVjNCBjb2xvcjsKaW4gdmVjNCB2ZXJ0ZXhDb2xvcjsKCnZvaWQgbWFpbigpCnsKICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIHZlYzQodmVydGV4UG9zaXRpb24sIDEuMCk7CiAgICB0ZXhDb29yZCA9IHRleFBvc2l0aW9uOwogICAgY29sb3IgPSB2ZXJ0ZXhDb2xvcjsKfQoK"
Shaders.painter_image_vert = null
Shaders.painter_text_fragData0 = "s351:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKdmFyeWluZyBoaWdocCB2ZWM0IGZyYWdtZW50Q29sb3I7CnZhcnlpbmcgaGlnaHAgdmVjMiB0ZXhDb29yZDsKCnZvaWQgbWFpbigpCnsKICAgIGdsX0ZyYWdEYXRhWzBdID0gdmVjNChmcmFnbWVudENvbG9yLnh5eiwgdGV4dHVyZTJEKHRleCwgdGV4Q29vcmQpLnggKiBmcmFnbWVudENvbG9yLncpOwp9Cgo"
Shaders.painter_text_fragData1 = "s340:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7Cgp1bmlmb3JtIG1lZGl1bXAgc2FtcGxlcjJEIHRleDsKCnZhcnlpbmcgdmVjNCBmcmFnbWVudENvbG9yOwp2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7Cgp2b2lkIG1haW4oKQp7CiAgICBnbF9GcmFnRGF0YVswXSA9IHZlYzQoZnJhZ21lbnRDb2xvci54eXosIHRleHR1cmUyRCh0ZXgsIHRleENvb3JkKS54ICogZnJhZ21lbnRDb2xvci53KTsKfQoK"
Shaders.painter_text_fragData2 = "s367:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwppbiBoaWdocCB2ZWM0IGZyYWdtZW50Q29sb3I7CmluIGhpZ2hwIHZlYzIgdGV4Q29vcmQ7Cgp2b2lkIG1haW4oKQp7CiAgICBGcmFnQ29sb3IgPSB2ZWM0KGZyYWdtZW50Q29sb3IueHl6LCB0ZXh0dXJlKHRleCwgdGV4Q29vcmQpLnggKiBmcmFnbWVudENvbG9yLncpOwp9Cgo"
Shaders.painter_text_frag = null
Shaders.painter_text_vertData0 = "s436:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmF0dHJpYnV0ZSB2ZWMzIHZlcnRleFBvc2l0aW9uOwp2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7CmF0dHJpYnV0ZSB2ZWMyIHRleFBvc2l0aW9uOwp2YXJ5aW5nIHZlYzQgZnJhZ21lbnRDb2xvcjsKYXR0cmlidXRlIHZlYzQgdmVydGV4Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiB2ZWM0KHZlcnRleFBvc2l0aW9uLCAxLjApOwogICAgdGV4Q29vcmQgPSB0ZXhQb3NpdGlvbjsKICAgIGZyYWdtZW50Q29sb3IgPSB2ZXJ0ZXhDb2xvcjsKfQoK"
Shaders.painter_text_vertData1 = "s500:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1lZGl1bXAgbWF0NCBwcm9qZWN0aW9uTWF0cml4OwoKYXR0cmlidXRlIG1lZGl1bXAgdmVjMyB2ZXJ0ZXhQb3NpdGlvbjsKdmFyeWluZyBtZWRpdW1wIHZlYzIgdGV4Q29vcmQ7CmF0dHJpYnV0ZSBtZWRpdW1wIHZlYzIgdGV4UG9zaXRpb247CnZhcnlpbmcgbWVkaXVtcCB2ZWM0IGZyYWdtZW50Q29sb3I7CmF0dHJpYnV0ZSBtZWRpdW1wIHZlYzQgdmVydGV4Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiB2ZWM0KHZlcnRleFBvc2l0aW9uLCAxLjApOwogICAgdGV4Q29vcmQgPSB0ZXhQb3NpdGlvbjsKICAgIGZyYWdtZW50Q29sb3IgPSB2ZXJ0ZXhDb2xvcjsKfQoK"
Shaders.painter_text_vertData2 = "s402:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHRleFBvc2l0aW9uOwpvdXQgdmVjNCBmcmFnbWVudENvbG9yOwppbiB2ZWM0IHZlcnRleENvbG9yOwoKdm9pZCBtYWluKCkKewogICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvbiwgMS4wKTsKICAgIHRleENvb3JkID0gdGV4UG9zaXRpb247CiAgICBmcmFnbWVudENvbG9yID0gdmVydGV4Q29sb3I7Cn0KCg"
Shaders.painter_text_vert = null
Shaders.painter_video_fragData0 = "s471:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKdmFyeWluZyBoaWdocCB2ZWMyIHRleENvb3JkOwp2YXJ5aW5nIGhpZ2hwIHZlYzQgY29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBoaWdocCB2ZWM0IHRleGNvbG9yID0gdGV4dHVyZTJEKHRleCwgdGV4Q29vcmQpICogY29sb3I7CiAgICBoaWdocCB2ZWMzIF8zMiA9IHRleGNvbG9yLnh5eiAqIGNvbG9yLnc7CiAgICB0ZXhjb2xvciA9IHZlYzQoXzMyLngsIF8zMi55LCBfMzIueiwgdGV4Y29sb3Iudyk7CiAgICBnbF9GcmFnRGF0YVswXSA9IHRleGNvbG9yOwp9Cgo"
Shaders.painter_video_fragData1 = "s444:I3ZlcnNpb24gMTAwCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7Cgp1bmlmb3JtIG1lZGl1bXAgc2FtcGxlcjJEIHRleDsKCnZhcnlpbmcgdmVjMiB0ZXhDb29yZDsKdmFyeWluZyB2ZWM0IGNvbG9yOwoKdm9pZCBtYWluKCkKewogICAgdmVjNCB0ZXhjb2xvciA9IHRleHR1cmUyRCh0ZXgsIHRleENvb3JkKSAqIGNvbG9yOwogICAgdmVjMyBfMzIgPSB0ZXhjb2xvci54eXogKiBjb2xvci53OwogICAgdGV4Y29sb3IgPSB2ZWM0KF8zMi54LCBfMzIueSwgXzMyLnosIHRleGNvbG9yLncpOwogICAgZ2xfRnJhZ0RhdGFbMF0gPSB0ZXhjb2xvcjsKfQoK"
Shaders.painter_video_fragData2 = "s487:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKaW4gaGlnaHAgdmVjMiB0ZXhDb29yZDsKaW4gaGlnaHAgdmVjNCBjb2xvcjsKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwoKdm9pZCBtYWluKCkKewogICAgaGlnaHAgdmVjNCB0ZXhjb2xvciA9IHRleHR1cmUodGV4LCB0ZXhDb29yZCkgKiBjb2xvcjsKICAgIGhpZ2hwIHZlYzMgXzMyID0gdGV4Y29sb3IueHl6ICogY29sb3IudzsKICAgIHRleGNvbG9yID0gdmVjNChfMzIueCwgXzMyLnksIF8zMi56LCB0ZXhjb2xvci53KTsKICAgIEZyYWdDb2xvciA9IHRleGNvbG9yOwp9Cgo"
Shaders.painter_video_frag = null
Shaders.painter_video_vertData0 = "s415:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmF0dHJpYnV0ZSB2ZWMzIHZlcnRleFBvc2l0aW9uOwp2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7CmF0dHJpYnV0ZSB2ZWMyIHRleFBvc2l0aW9uOwp2YXJ5aW5nIHZlYzQgY29sb3I7CmF0dHJpYnV0ZSB2ZWM0IHZlcnRleENvbG9yOwoKdm9pZCBtYWluKCkKewogICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvbiwgMS4wKTsKICAgIHRleENvb3JkID0gdGV4UG9zaXRpb247CiAgICBjb2xvciA9IHZlcnRleENvbG9yOwp9Cgo"
Shaders.painter_video_vertData1 = "s479:I3ZlcnNpb24gMTAwCgp1bmlmb3JtIG1lZGl1bXAgbWF0NCBwcm9qZWN0aW9uTWF0cml4OwoKYXR0cmlidXRlIG1lZGl1bXAgdmVjMyB2ZXJ0ZXhQb3NpdGlvbjsKdmFyeWluZyBtZWRpdW1wIHZlYzIgdGV4Q29vcmQ7CmF0dHJpYnV0ZSBtZWRpdW1wIHZlYzIgdGV4UG9zaXRpb247CnZhcnlpbmcgbWVkaXVtcCB2ZWM0IGNvbG9yOwphdHRyaWJ1dGUgbWVkaXVtcCB2ZWM0IHZlcnRleENvbG9yOwoKdm9pZCBtYWluKCkKewogICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvbiwgMS4wKTsKICAgIHRleENvb3JkID0gdGV4UG9zaXRpb247CiAgICBjb2xvciA9IHZlcnRleENvbG9yOwp9Cgo"
Shaders.painter_video_vertData2 = "s380:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHRleFBvc2l0aW9uOwpvdXQgdmVjNCBjb2xvcjsKaW4gdmVjNCB2ZXJ0ZXhDb2xvcjsKCnZvaWQgbWFpbigpCnsKICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIHZlYzQodmVydGV4UG9zaXRpb24sIDEuMCk7CiAgICB0ZXhDb29yZCA9IHRleFBvc2l0aW9uOwogICAgY29sb3IgPSB2ZXJ0ZXhDb2xvcjsKfQoK"
Shaders.painter_video_vert = null

// Export

exports.default = Shaders;