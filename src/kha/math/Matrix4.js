// Class: kha.math.Matrix4

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_math_Vector3() {return require("./../../kha/math/Vector3");}

// Constructor

var Matrix4 = function(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._30 = _30;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._31 = _31;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
	this._32 = _32;
	this._03 = _03;
	this._13 = _13;
	this._23 = _23;
	this._33 = _33;
}

// Meta

Matrix4.__name__ = ["kha","math","Matrix4"];
Matrix4.prototype = {
	
};
Matrix4.prototype.__class__ = Matrix4.prototype.constructor = $hxClasses["kha.math.Matrix4"] = Matrix4;

// Init



// Statics

Matrix4.orthogonalProjection = function(left,right,bottom,top,zn,zf) {
	var tx = -(right + left) / (right - left);
	var ty = -(top + bottom) / (top - bottom);
	var tz = -(zf + zn) / (zf - zn);
	return new Matrix4(2 / (right - left),0,0,tx,0,2 / (top - bottom),0,ty,0,0,-2 / (zf - zn),tz,0,0,0,1);
}
Matrix4.perspectiveProjection = function(fovY,aspect,zn,zf) {
	var uh = 1.0 / Math.tan(fovY / 2);
	var uw = uh / aspect;
	return new Matrix4(uw,0,0,0,0,uh,0,0,0,0,(zf + zn) / (zn - zf),2 * zf * zn / (zn - zf),0,0,-1,0);
}
Matrix4.lookAt = function(eye,at,up) {
	var zaxis = new (kha_math_Vector3().default)(at.x - eye.x,at.y - eye.y,at.z - eye.z);
	zaxis.set_length(1);
	var _x = zaxis.y * up.z - zaxis.z * up.y;
	var _y = zaxis.z * up.x - zaxis.x * up.z;
	var _z = zaxis.x * up.y - zaxis.y * up.x;
	var xaxis = new (kha_math_Vector3().default)(_x,_y,_z);
	xaxis.set_length(1);
	var _x1 = xaxis.y * zaxis.z - xaxis.z * zaxis.y;
	var _y1 = xaxis.z * zaxis.x - xaxis.x * zaxis.z;
	var _z1 = xaxis.x * zaxis.y - xaxis.y * zaxis.x;
	var yaxis = new (kha_math_Vector3().default)(_x1,_y1,_z1);
	return new Matrix4(xaxis.x,xaxis.y,xaxis.z,-(xaxis.x * eye.x + xaxis.y * eye.y + xaxis.z * eye.z),yaxis.x,yaxis.y,yaxis.z,-(yaxis.x * eye.x + yaxis.y * eye.y + yaxis.z * eye.z),-zaxis.x,-zaxis.y,-zaxis.z,zaxis.x * eye.x + zaxis.y * eye.y + zaxis.z * eye.z,0,0,0,1);
}
Matrix4.width = 4
Matrix4.height = 4

// Export

exports.default = Matrix4;