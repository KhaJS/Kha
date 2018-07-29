// Class: kha.audio2.Audio

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function kha_audio2_Buffer() {return require("./../../kha/audio2/Buffer");}
function Std() {return require("./../../Std");}
function js_Browser() {return require("./../../js/Browser");}
function kha_js_AEAudioChannel() {return require("./../../kha/js/AEAudioChannel");}

// Constructor

var Audio = function(){}

// Meta

Audio.__name__ = ["kha","audio2","Audio"];
Audio.prototype = {
	
};
Audio.prototype.__class__ = Audio.prototype.constructor = $hxClasses["kha.audio2.Audio"] = Audio;

// Init



// Statics

Audio.initContext = function() {
	try {
		Audio._context = new AudioContext();
		return;
	} catch( e ) {
	}
	try {
		this._context = new webkitAudioContext();
		return;
	} catch( e1 ) {
	}
}
Audio._init = function() {
	Audio.initContext();
	if(Audio._context == null) {
		return false;
	}
	var bufferSize = 2048;
	Audio.buffer = new (kha_audio2_Buffer().default)(bufferSize * 4,2,(Std().default)["int"](Audio._context.sampleRate));
	Audio.processingNode = Audio._context.createScriptProcessor(bufferSize,0,2);
	Audio.processingNode.onaudioprocess = function(e) {
		var output1 = e.outputBuffer.getChannelData(0);
		var output2 = e.outputBuffer.getChannelData(1);
		if(Audio.audioCallback != null) {
			Audio.audioCallback(e.outputBuffer.length * 2,Audio.buffer);
			var _g1 = 0;
			var _g = e.outputBuffer.length;
			while(_g1 < _g) {
				var i = _g1++;
				output1[i] = Audio.buffer.data[Audio.buffer.readLocation];
				Audio.buffer.readLocation += 1;
				output2[i] = Audio.buffer.data[Audio.buffer.readLocation];
				Audio.buffer.readLocation += 1;
				if(Audio.buffer.readLocation >= Audio.buffer.size) {
					Audio.buffer.readLocation = 0;
				}
			}
		} else {
			var _g11 = 0;
			var _g2 = e.outputBuffer.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				output1[i1] = 0;
				output2[i1] = 0;
			}
		}
	};
	Audio.processingNode.connect(Audio._context.destination);
	return true;
}
Audio.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var element = (js_Browser().default).get_document().createElement("audio");
	var blob = new Blob([sound.compressedData.getData()],{ type : "audio/mp4"});
	element.src = URL.createObjectURL(blob);
	element.loop = loop;
	var channel = new (kha_js_AEAudioChannel().default)(element);
	channel.play();
	return channel;
}


// Export

exports.default = Audio;