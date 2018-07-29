// Class: kha.js.vr.VrInterface

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
var $extend = require("./../../../extend_stub").default;
function kha_vr_VrInterface() {return require("./../../../kha/vr/VrInterface");}
function kha_SystemImpl() {return require("./../../../kha/SystemImpl");}
function Std() {return require("./../../../Std");}
function haxe_Log() {return require("./../../../haxe/Log");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function kha_vr_SensorState() {return require("./../../../kha/vr/SensorState");}
function kha_vr_PoseState() {return require("./../../../kha/vr/PoseState");}
function kha_math_Vector3() {return require("./../../../kha/math/Vector3");}
function kha_vr_Pose() {return require("./../../../kha/vr/Pose");}
function kha_math_Quaternion() {return require("./../../../kha/math/Quaternion");}
function kha_Scheduler() {return require("./../../../kha/Scheduler");}
function kha_math_FastMatrix4() {return require("./../../../kha/math/FastMatrix4");}

// Constructor

var VrInterface = function() {
	this.vrHeight = 0;
	this.vrWidth = 0;
	this.height = 0;
	this.width = 0;
	this.rightViewMatrix = new (kha_math_FastMatrix4().default)(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	this.leftViewMatrix = new (kha_math_FastMatrix4().default)(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	this.rightProjectionMatrix = new (kha_math_FastMatrix4().default)(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	this.leftProjectionMatrix = new (kha_math_FastMatrix4().default)(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	this.vrEnabled = false;
	(kha_vr_VrInterface().default).call(this);
	var displayEnabled = false;
	if(displayEnabled) {
		this.vrEnabled = true;
		this.getVRDisplays();
		(haxe_Log().default).trace("Display enabled.",{ fileName : "VrInterface.hx", lineNumber : 39, className : "kha.js.vr.VrInterface", methodName : "new"});
	}
}

// Meta

VrInterface.__name__ = ["kha","js","vr","VrInterface"];
VrInterface.__super__ = (kha_vr_VrInterface().default);
VrInterface.prototype = $extend((kha_vr_VrInterface().default).prototype, {
	getVRDisplays: function() {
		var _gthis = this;
		var vrDisplayInstance = navigator.getVRDisplays();
		vrDisplayInstance.then(function(displays) {
			if(displays.length > 0) {
				_gthis.frameData = new VRFrameData();
				_gthis.vrDisplay = displays[0];
				_gthis.vrDisplay.depthNear = 0.1;
				_gthis.vrDisplay.depthFar = 1024.0;
				var leftEye = _gthis.vrDisplay.getEyeParameters("left");
				var rightEye = _gthis.vrDisplay.getEyeParameters("right");
				_gthis.width = (kha_SystemImpl().default).khanvas.width;
				_gthis.height = (kha_SystemImpl().default).khanvas.height;
				_gthis.vrWidth = (Std().default)["int"](Math.max(leftEye.renderWidth,rightEye.renderWidth) * 2);
				_gthis.vrHeight = (Std().default)["int"](Math.max(leftEye.renderHeight,rightEye.renderHeight));
			} else {
				(haxe_Log().default).trace("There are no VR displays connected.",{ fileName : "VrInterface.hx", lineNumber : 59, className : "kha.js.vr.VrInterface", methodName : "getVRDisplays"});
			}
		});
	},
	onVRRequestPresent: function() {
		var _gthis = this;
		try {
			this.vrDisplay.requestPresent([{ source : (kha_SystemImpl().default).khanvas}]).then(function() {
				_gthis.onResize();
				_gthis.vrDisplay.requestAnimationFrame($bind(_gthis,_gthis.onAnimationFrame));
			});
		} catch( err ) {
			if (err instanceof (js__$Boot_HaxeError().default)) err = err.val;
			(haxe_Log().default).trace("Failed to requestPresent.",{ fileName : "VrInterface.hx", lineNumber : 71, className : "kha.js.vr.VrInterface", methodName : "onVRRequestPresent"});
			(haxe_Log().default).trace(err,{ fileName : "VrInterface.hx", lineNumber : 72, className : "kha.js.vr.VrInterface", methodName : "onVRRequestPresent"});
		}
	},
	onVRExitPresent: function() {
		var _gthis = this;
		try {
			this.vrDisplay.exitPresent([{ source : (kha_SystemImpl().default).khanvas}]).then(function() {
				_gthis.onResize();
			});
		} catch( err ) {
			if (err instanceof (js__$Boot_HaxeError().default)) err = err.val;
			(haxe_Log().default).trace("Failed to exitPresent.",{ fileName : "VrInterface.hx", lineNumber : 82, className : "kha.js.vr.VrInterface", methodName : "onVRExitPresent"});
			(haxe_Log().default).trace(err,{ fileName : "VrInterface.hx", lineNumber : 83, className : "kha.js.vr.VrInterface", methodName : "onVRExitPresent"});
		}
	},
	onResetPose: function() {
		try {
			this.vrDisplay.resetPose();
		} catch( err ) {
			if (err instanceof (js__$Boot_HaxeError().default)) err = err.val;
			(haxe_Log().default).trace("Failed to resetPose",{ fileName : "VrInterface.hx", lineNumber : 91, className : "kha.js.vr.VrInterface", methodName : "onResetPose"});
			(haxe_Log().default).trace(err,{ fileName : "VrInterface.hx", lineNumber : 92, className : "kha.js.vr.VrInterface", methodName : "onResetPose"});
		}
	},
	onAnimationFrame: function(timestamp) {
		if(this.vrDisplay != null && this.vrDisplay.isPresenting) {
			this.vrDisplay.requestAnimationFrame($bind(this,this.onAnimationFrame));
			this.vrDisplay.getFrameData(this.frameData);
			this.leftProjectionMatrix = this.createMatrixFromArray(this.frameData.leftProjectionMatrix);
			this.leftViewMatrix = this.createMatrixFromArray(this.frameData.leftViewMatrix);
			this.rightProjectionMatrix = this.createMatrixFromArray(this.frameData.rightProjectionMatrix);
			this.rightViewMatrix = this.createMatrixFromArray(this.frameData.rightViewMatrix);
			this.vrDisplay.submitFrame();
		}
	},
	onResize: function() {
		if(this.vrDisplay != null && this.vrDisplay.isPresenting) {
			(kha_SystemImpl().default).khanvas.width = this.vrWidth;
			(kha_SystemImpl().default).khanvas.height = this.vrHeight;
		} else {
			(kha_SystemImpl().default).khanvas.width = this.width;
			(kha_SystemImpl().default).khanvas.height = this.height;
		}
	},
	GetSensorState: function() {
		return this.GetPredictedSensorState(0.0);
	},
	GetPredictedSensorState: function(time) {
		var result = new (kha_vr_SensorState().default)();
		result.Predicted = new (kha_vr_PoseState().default)();
		result.Recorded = result.Predicted;
		result.Predicted.AngularAcceleration = new (kha_math_Vector3().default)();
		result.Predicted.AngularVelocity = new (kha_math_Vector3().default)();
		result.Predicted.LinearAcceleration = new (kha_math_Vector3().default)();
		result.Predicted.LinearVelocity = new (kha_math_Vector3().default)();
		result.Predicted.TimeInSeconds = time;
		result.Predicted.Pose = new (kha_vr_Pose().default)();
		result.Predicted.Pose.Orientation = new (kha_math_Quaternion().default)();
		result.Predicted.Pose.Position = new (kha_math_Vector3().default)();
		var mPose = this.frameData.pose;
		if(mPose != null) {
			result.Predicted.AngularVelocity = this.createVectorFromArray(mPose.angularVelocity);
			result.Predicted.AngularAcceleration = this.createVectorFromArray(mPose.angularAcceleration);
			result.Predicted.LinearVelocity = this.createVectorFromArray(mPose.linearVelocity);
			result.Predicted.LinearAcceleration = this.createVectorFromArray(mPose.linearAcceleration);
			result.Predicted.Pose.Orientation = this.createQuaternion(mPose.orientation);
			result.Predicted.Pose.Position = this.createVectorFromArray(mPose.position);
		}
		return result;
	},
	WarpSwapBlack: function() {
	},
	WarpSwapLoadingIcon: function() {
	},
	WarpSwap: function(parms) {
	},
	IsPresenting: function() {
		if(this.vrDisplay != null) {
			return this.vrDisplay.isPresenting;
		}
		return false;
	},
	IsVrEnabled: function() {
		return this.vrEnabled;
	},
	GetTimeInSeconds: function() {
		return (kha_Scheduler().default).time();
	},
	GetProjectionMatrix: function(eye) {
		if(eye == 0) {
			return this.leftProjectionMatrix;
		} else {
			return this.rightProjectionMatrix;
		}
	},
	GetViewMatrix: function(eye) {
		if(eye == 0) {
			return this.leftViewMatrix;
		} else {
			return this.rightViewMatrix;
		}
	},
	createMatrixFromArray: function(array) {
		var matrix = new (kha_math_FastMatrix4().default)(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
		matrix._00 = array[0];
		matrix._01 = array[1];
		matrix._02 = array[2];
		matrix._03 = array[3];
		matrix._10 = array[4];
		matrix._11 = array[5];
		matrix._12 = array[6];
		matrix._13 = array[7];
		matrix._20 = array[8];
		matrix._21 = array[9];
		matrix._22 = array[10];
		matrix._23 = array[11];
		matrix._30 = array[12];
		matrix._31 = array[13];
		matrix._32 = array[14];
		matrix._33 = array[15];
		return matrix;
	},
	createVectorFromArray: function(array) {
		var vector = new (kha_math_Vector3().default)(0,0,0);
		if(array != null) {
			vector.x = array[0];
			vector.y = array[1];
			vector.z = array[2];
		}
		return vector;
	},
	createQuaternion: function(array) {
		var quaternion = new (kha_math_Quaternion().default)(0,0,0,0);
		if(array != null) {
			quaternion.set_x(array[0]);
			quaternion.set_y(array[1]);
			quaternion.set_z(array[2]);
			quaternion.set_w(array[3]);
		}
		return quaternion;
	}
});
VrInterface.prototype.__class__ = VrInterface.prototype.constructor = $hxClasses["kha.js.vr.VrInterface"] = VrInterface;

// Init



// Statics




// Export

exports.default = VrInterface;