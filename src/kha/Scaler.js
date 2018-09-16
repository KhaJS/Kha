// Class: kha.Scaler

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function Type() {return require("./../Type");}
function kha_TargetRectangle() {return require("./../kha/TargetRectangle");}
function Std() {return require("./../Std");}
function kha_math_FastMatrix3() {return require("./../kha/math/FastMatrix3");}

// Constructor

var Scaler = function(){}

// Meta

Scaler.__name__ = ["kha","Scaler"];
Scaler.prototype = {
	
};
Scaler.prototype.__class__ = Scaler.prototype.constructor = $hxClasses["kha.Scaler"] = Scaler;

// Init



// Statics

Scaler.targetRect = function(width,height,destinationWidth,destinationHeight,rotation) {
	var scalex;
	var scaley;
	var scalew;
	var scaleh;
	var scale;
	switch((Type().default).enumIndex(rotation)) {
	case 0:
		if(width / height > destinationWidth / destinationHeight) {
			scale = destinationWidth / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = 0;
			scaley = (destinationHeight - scaleh) * 0.5;
		} else {
			scale = destinationHeight / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destinationWidth - scalew) * 0.5;
			scaley = 0;
		}
		break;
	case 1:
		if(width / height > destinationHeight / destinationWidth) {
			scale = destinationHeight / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destinationWidth - scaleh) * 0.5 + scaleh;
			scaley = 0;
		} else {
			scale = destinationWidth / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = scaleh;
			scaley = (destinationHeight - scalew) * 0.5;
		}
		break;
	case 2:
		if(width / height > destinationWidth / destinationHeight) {
			scale = destinationWidth / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = scalew;
			scaley = (destinationHeight - scaleh) * 0.5 + scaleh;
		} else {
			scale = destinationHeight / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destinationWidth - scalew) * 0.5 + scalew;
			scaley = scaleh;
		}
		break;
	case 3:
		if(width / height > destinationHeight / destinationWidth) {
			scale = destinationHeight / width;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = (destinationWidth - scaleh) * 0.5;
			scaley = scalew;
		} else {
			scale = destinationWidth / height;
			scalew = width * scale;
			scaleh = height * scale;
			scalex = 0;
			scaley = (destinationHeight - scalew) * 0.5 + scalew;
		}
		break;
	}
	return new (kha_TargetRectangle().default)(scalex,scaley,scalew,scaleh,scale,rotation);
}
Scaler.transformXDirectly = function(x,y,sourceWidth,sourceHeight,destinationWidth,destinationHeight,rotation) {
	var targetRect = Scaler.targetRect(sourceWidth,sourceHeight,destinationWidth,destinationHeight,rotation);
	var _g = targetRect.rotation;
	switch((Type().default).enumIndex(_g)) {
	case 0:
		return (Std().default)["int"]((x - targetRect.x) / targetRect.scaleFactor);
	case 1:
		return (Std().default)["int"]((y - targetRect.y) / targetRect.scaleFactor);
	case 2:
		return (Std().default)["int"]((targetRect.x - x) / targetRect.scaleFactor);
	case 3:
		return (Std().default)["int"]((targetRect.y - y) / targetRect.scaleFactor);
	}
}
Scaler.transformX = function(x,y,source,destination,rotation) {
	return Scaler.transformXDirectly(x,y,source.get_width(),source.get_height(),destination.get_width(),destination.get_height(),rotation);
}
Scaler.transformYDirectly = function(x,y,sourceWidth,sourceHeight,destinationWidth,destinationHeight,rotation) {
	var targetRect = Scaler.targetRect(sourceWidth,sourceHeight,destinationWidth,destinationHeight,rotation);
	var _g = targetRect.rotation;
	switch((Type().default).enumIndex(_g)) {
	case 0:
		return (Std().default)["int"]((y - targetRect.y) / targetRect.scaleFactor);
	case 1:
		return (Std().default)["int"]((targetRect.x - x) / targetRect.scaleFactor);
	case 2:
		return (Std().default)["int"]((targetRect.y - y) / targetRect.scaleFactor);
	case 3:
		return (Std().default)["int"]((x - targetRect.x) / targetRect.scaleFactor);
	}
}
Scaler.transformY = function(x,y,source,destination,rotation) {
	return Scaler.transformYDirectly(x,y,source.get_width(),source.get_height(),destination.get_width(),destination.get_height(),rotation);
}
Scaler.scale = function(source,destination,rotation) {
	var g = destination.get_g2();
	g.pushTransformation(Scaler.getScaledTransformation(source.get_width(),source.get_height(),destination.get_width(),destination.get_height(),rotation));
	g.set_color(-1);
	g.set_opacity(1);
	g.drawImage(source,0,0);
	g.popTransformation();
}
Scaler.getScaledTransformation = function(width,height,destinationWidth,destinationHeight,rotation) {
	var rect = Scaler.targetRect(width,height,destinationWidth,destinationHeight,rotation);
	var sf = rect.scaleFactor;
	var transformation = new (kha_math_FastMatrix3().default)(sf,0,rect.x,0,sf,rect.y,0,0,1);
	switch((Type().default).enumIndex(rotation)) {
	case 0:
		break;
	case 1:
		var alpha = Math.PI / 2;
		var m = new (kha_math_FastMatrix3().default)(Math.cos(alpha),-Math.sin(alpha),0,Math.sin(alpha),Math.cos(alpha),0,0,0,1);
		transformation = new (kha_math_FastMatrix3().default)(transformation._00 * m._00 + transformation._10 * m._01 + transformation._20 * m._02,transformation._00 * m._10 + transformation._10 * m._11 + transformation._20 * m._12,transformation._00 * m._20 + transformation._10 * m._21 + transformation._20 * m._22,transformation._01 * m._00 + transformation._11 * m._01 + transformation._21 * m._02,transformation._01 * m._10 + transformation._11 * m._11 + transformation._21 * m._12,transformation._01 * m._20 + transformation._11 * m._21 + transformation._21 * m._22,transformation._02 * m._00 + transformation._12 * m._01 + transformation._22 * m._02,transformation._02 * m._10 + transformation._12 * m._11 + transformation._22 * m._12,transformation._02 * m._20 + transformation._12 * m._21 + transformation._22 * m._22);
		break;
	case 2:
		var alpha1 = Math.PI;
		var m1 = new (kha_math_FastMatrix3().default)(Math.cos(alpha1),-Math.sin(alpha1),0,Math.sin(alpha1),Math.cos(alpha1),0,0,0,1);
		transformation = new (kha_math_FastMatrix3().default)(transformation._00 * m1._00 + transformation._10 * m1._01 + transformation._20 * m1._02,transformation._00 * m1._10 + transformation._10 * m1._11 + transformation._20 * m1._12,transformation._00 * m1._20 + transformation._10 * m1._21 + transformation._20 * m1._22,transformation._01 * m1._00 + transformation._11 * m1._01 + transformation._21 * m1._02,transformation._01 * m1._10 + transformation._11 * m1._11 + transformation._21 * m1._12,transformation._01 * m1._20 + transformation._11 * m1._21 + transformation._21 * m1._22,transformation._02 * m1._00 + transformation._12 * m1._01 + transformation._22 * m1._02,transformation._02 * m1._10 + transformation._12 * m1._11 + transformation._22 * m1._12,transformation._02 * m1._20 + transformation._12 * m1._21 + transformation._22 * m1._22);
		break;
	case 3:
		var alpha2 = Math.PI * 3 / 2;
		var m2 = new (kha_math_FastMatrix3().default)(Math.cos(alpha2),-Math.sin(alpha2),0,Math.sin(alpha2),Math.cos(alpha2),0,0,0,1);
		transformation = new (kha_math_FastMatrix3().default)(transformation._00 * m2._00 + transformation._10 * m2._01 + transformation._20 * m2._02,transformation._00 * m2._10 + transformation._10 * m2._11 + transformation._20 * m2._12,transformation._00 * m2._20 + transformation._10 * m2._21 + transformation._20 * m2._22,transformation._01 * m2._00 + transformation._11 * m2._01 + transformation._21 * m2._02,transformation._01 * m2._10 + transformation._11 * m2._11 + transformation._21 * m2._12,transformation._01 * m2._20 + transformation._11 * m2._21 + transformation._21 * m2._22,transformation._02 * m2._00 + transformation._12 * m2._01 + transformation._22 * m2._02,transformation._02 * m2._10 + transformation._12 * m2._11 + transformation._22 * m2._12,transformation._02 * m2._20 + transformation._12 * m2._21 + transformation._22 * m2._22);
		break;
	}
	return transformation;
}


// Export

exports.default = Scaler;