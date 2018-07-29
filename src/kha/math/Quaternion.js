// Class: kha.math.Quaternion

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_math_Matrix4() {return require("./../../kha/math/Matrix4");}
function kha_math_Vector3() {return require("./../../kha/math/Vector3");}

// Constructor

var Quaternion = function(x,y,z,w) {
	if(w == null) {
		w = 1;
	}
	if(z == null) {
		z = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.values = [];
	this.values.push(x);
	this.values.push(y);
	this.values.push(z);
	this.values.push(w);
}

// Meta

Quaternion.__name__ = ["kha","math","Quaternion"];
Quaternion.prototype = {
	slerp: function(t,q) {
		var epsilon = 0.0005;
		var dot = this.dot(q);
		if(dot > 1 - epsilon) {
			var result = q.add(this.sub(q).scaled(t));
			result.normalize();
			return result;
		}
		if(dot < 0) {
			dot = 0;
		}
		if(dot > 1) {
			dot = 1;
		}
		var theta0 = Math.acos(dot);
		var theta = theta0 * t;
		var q2 = q.sub(this.scaled(dot));
		q2.normalize();
		var result1 = this.scaled(Math.cos(theta)).add(q2.scaled(Math.sin(theta)));
		result1.normalize();
		return result1;
	},
	rotated: function(b) {
		var q = new Quaternion();
		q.set_w(this.get_w() * b.get_w() - this.get_x() * b.get_x() - this.get_y() * b.get_y() - this.get_z() * b.get_z());
		q.set_x(this.get_w() * b.get_x() + this.get_x() * b.get_w() + this.get_y() * b.get_z() - this.get_z() * b.get_y());
		q.set_y(this.get_w() * b.get_y() + this.get_y() * b.get_w() + this.get_z() * b.get_x() - this.get_x() * b.get_z());
		q.set_z(this.get_w() * b.get_z() + this.get_z() * b.get_w() + this.get_x() * b.get_y() - this.get_y() * b.get_x());
		q.normalize();
		return q;
	},
	scaled: function(scale) {
		return new Quaternion(this.get_x() * scale,this.get_y() * scale,this.get_z() * scale,this.get_w() * scale);
	},
	scale: function(scale) {
		this.set_x(this.get_x() * scale);
		this.set_y(this.get_y() * scale);
		this.set_z(this.get_z() * scale);
		this.set_w(this.get_w() * scale);
	},
	matrix: function() {
		var s = 2.0;
		var xs = this.get_x() * s;
		var ys = this.get_y() * s;
		var zs = this.get_z() * s;
		var wx = this.get_w() * xs;
		var wy = this.get_w() * ys;
		var wz = this.get_w() * zs;
		var xx = this.get_x() * xs;
		var xy = this.get_x() * ys;
		var xz = this.get_x() * zs;
		var yy = this.get_y() * ys;
		var yz = this.get_y() * zs;
		var zz = this.get_z() * zs;
		return new (kha_math_Matrix4().default)(1 - (yy + zz),xy - wz,xz + wy,0,xy + wz,1 - (xx + zz),yz - wx,0,xz - wy,yz + wx,1 - (xx + yy),0,0,0,0,1);
	},
	get: function(index) {
		return this.values[index];
	},
	set: function(index,value) {
		this.values[index] = value;
	},
	get_x: function() {
		return this.values[0];
	},
	set_x: function(value) {
		return this.values[0] = value;
	},
	get_y: function() {
		return this.values[1];
	},
	set_y: function(value) {
		return this.values[1] = value;
	},
	get_z: function() {
		return this.values[2];
	},
	set_z: function(value) {
		return this.values[2] = value;
	},
	get_w: function() {
		return this.values[3];
	},
	set_w: function(value) {
		return this.values[3] = value;
	},
	get_length: function() {
		return Math.sqrt(this.get_x() * this.get_x() + this.get_y() * this.get_y() + this.get_z() * this.get_z() + this.get_w() * this.get_w());
	},
	set_length: function(length) {
		if(this.get_length() == 0) {
			return 0;
		}
		var mul = length / this.get_length();
		var _g = this;
		_g.set_x(_g.get_x() * mul);
		var _g1 = this;
		_g1.set_y(_g1.get_y() * mul);
		var _g2 = this;
		_g2.set_z(_g2.get_z() * mul);
		return length;
	},
	addVector: function(vec) {
		var result = new Quaternion(this.get_x(),this.get_y(),this.get_z(),this.get_w());
		var q1 = new Quaternion(0,vec.x,vec.y,vec.z);
		q1 = q1.mult(result);
		var _g = result;
		_g.set_x(_g.get_x() + q1.get_x() * 0.5);
		var _g1 = result;
		_g1.set_y(_g1.get_y() + q1.get_y() * 0.5);
		var _g2 = result;
		_g2.set_z(_g2.get_z() + q1.get_z() * 0.5);
		var _g3 = result;
		_g3.set_w(_g3.get_w() + q1.get_w() * 0.5);
		return result;
	},
	add: function(q) {
		return new Quaternion(this.get_x() + q.get_x(),this.get_y() + q.get_y(),this.get_z() + q.get_z(),this.get_w() + q.get_w());
	},
	sub: function(q) {
		return new Quaternion(this.get_x() - q.get_x(),this.get_y() - q.get_y(),this.get_z() - q.get_z(),this.get_w() - q.get_w());
	},
	mult: function(r) {
		var q = new Quaternion();
		q.set_x(this.get_w() * r.get_x() + this.get_x() * r.get_w() + this.get_y() * r.get_z() - this.get_z() * r.get_y());
		q.set_y(this.get_w() * r.get_y() - this.get_x() * r.get_z() + this.get_y() * r.get_w() + this.get_z() * r.get_x());
		q.set_z(this.get_w() * r.get_z() + this.get_x() * r.get_y() - this.get_y() * r.get_x() + this.get_z() * r.get_w());
		q.set_w(this.get_w() * r.get_w() - this.get_x() * r.get_x() - this.get_y() * r.get_y() - this.get_z() * r.get_z());
		return q;
	},
	normalize: function() {
		this.scale(1.0 / this.get_length());
	},
	dot: function(q) {
		return this.get_x() * q.get_x() + this.get_y() * q.get_y() + this.get_z() * q.get_z() + this.get_w() * q.get_w();
	},
	getEulerAngles: function(A1,A2,A3,S,D) {
		if(D == null) {
			D = 1;
		}
		if(S == null) {
			S = 1;
		}
		var result = new (kha_math_Vector3().default)();
		var Q = [];
		Q[0] = this.get_x();
		Q[1] = this.get_y();
		Q[2] = this.get_z();
		var ww = this.get_w() * this.get_w();
		var Q11 = Q[A1] * Q[A1];
		var Q22 = Q[A2] * Q[A2];
		var Q33 = Q[A3] * Q[A3];
		var psign = -1;
		var SingularityRadius = 0.0000001;
		var PiOver2 = Math.PI / 2.0;
		if((A1 + 1) % 3 == A2 && (A2 + 1) % 3 == A3) {
			psign = 1;
		}
		var s2 = psign * 2.0 * (psign * this.get_w() * Q[A2] + Q[A1] * Q[A3]);
		if(s2 < -1 + SingularityRadius) {
			result.x = 0;
			result.y = -S * D * PiOver2;
			result.z = S * D * Math.atan2(2 * (psign * Q[A1] * Q[A2] + this.get_w() * Q[A3]),ww + Q22 - Q11 - Q33);
		} else if(s2 > 1 - SingularityRadius) {
			result.x = 0;
			result.y = S * D * PiOver2;
			result.z = S * D * Math.atan2(2 * (psign * Q[A1] * Q[A2] + this.get_w() * Q[A3]),ww + Q22 - Q11 - Q33);
		} else {
			result.x = -S * D * Math.atan2(-2 * (this.get_w() * Q[A1] - psign * Q[A2] * Q[A3]),ww + Q33 - Q11 - Q22);
			result.y = S * D * Math.asin(s2);
			result.z = S * D * Math.atan2(2 * (this.get_w() * Q[A3] - psign * Q[A1] * Q[A2]),ww + Q11 - Q22 - Q33);
		}
		return result;
	}
};
Quaternion.prototype.__class__ = Quaternion.prototype.constructor = $hxClasses["kha.math.Quaternion"] = Quaternion;

// Init



// Statics

Quaternion.fromAxisAngle = function(axis,radians) {
	var q = new Quaternion();
	q.set_w(Math.cos(radians / 2.0));
	q.set_x(q.set_y(q.set_z(Math.sin(radians / 2.0))));
	var _g = q;
	_g.set_x(_g.get_x() * axis.x);
	var _g1 = q;
	_g1.set_y(_g1.get_y() * axis.y);
	var _g2 = q;
	_g2.set_z(_g2.get_z() * axis.z);
	return q;
}
Quaternion.AXIS_X = 0
Quaternion.AXIS_Y = 1
Quaternion.AXIS_Z = 2

// Export

exports.default = Quaternion;