// Class: kha.audio2.Buffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Buffer = function(size,channels,samplesPerSecond) {
	this.size = size;
	var this1 = new Float32Array(size);
	this.data = this1;
	this.channels = channels;
	this.samplesPerSecond = samplesPerSecond;
	this.readLocation = 0;
	this.writeLocation = 0;
}

// Meta

Buffer.__name__ = ["kha","audio2","Buffer"];
Buffer.prototype = {
	
};
Buffer.prototype.__class__ = Buffer.prototype.constructor = $hxClasses["kha.audio2.Buffer"] = Buffer;

// Init



// Statics




// Export

exports.default = Buffer;