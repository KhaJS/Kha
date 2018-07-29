// Class: kha.vr.Pose

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_math_Quaternion() {return require("./../../kha/math/Quaternion");}
function kha_math_Vector3() {return require("./../../kha/math/Vector3");}

// Constructor

var Pose = function() {
	this.Orientation = new (kha_math_Quaternion().default)();
	this.Position = new (kha_math_Vector3().default)();
}

// Meta

Pose.__name__ = ["kha","vr","Pose"];
Pose.prototype = {
	
};
Pose.prototype.__class__ = Pose.prototype.constructor = $hxClasses["kha.vr.Pose"] = Pose;

// Init



// Statics




// Export

exports.default = Pose;