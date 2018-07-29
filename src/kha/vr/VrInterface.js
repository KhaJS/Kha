// Class: kha.vr.VrInterface

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;

// Constructor

var VrInterface = function() {
}

// Meta

VrInterface.__name__ = ["kha","vr","VrInterface"];
VrInterface.prototype = {
	GetSensorState: function() {
		return null;
	},
	GetPredictedSensorState: function(time) {
		return null;
	},
	WarpSwapBlack: function() {
		return;
	},
	WarpSwapLoadingIcon: function() {
		return;
	},
	WarpSwap: function(parms) {
		return;
	},
	IsPresenting: function() {
		return false;
	},
	IsVrEnabled: function() {
		return false;
	},
	GetTimeInSeconds: function() {
		return 0.0;
	},
	GetProjectionMatrix: function(eye) {
		return null;
	},
	GetViewMatrix: function(eye) {
		return null;
	},
	onVRRequestPresent: function() {
		return;
	},
	onVRExitPresent: function() {
		return;
	},
	onResetPose: function() {
		return;
	}
};
VrInterface.prototype.__class__ = VrInterface.prototype.constructor = $hxClasses["kha.vr.VrInterface"] = VrInterface;

// Init



// Statics




// Export

exports.default = VrInterface;