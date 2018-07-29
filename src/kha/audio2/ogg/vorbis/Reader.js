// Class: kha.audio2.ogg.vorbis.Reader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function Type() {return require("./../../../../Type");}
function _$UInt_UInt_$Impl_$() {return require("./../../../../_UInt/UInt_Impl_");}
function haxe_io_BytesInput() {return require("./../../../../haxe/io/BytesInput");}
function kha_audio2_ogg_vorbis_VorbisDecoder() {return require("./../../../../kha/audio2/ogg/vorbis/VorbisDecoder");}

// Constructor

var Reader = function(input,seekFunc,inputLength) {
	this.seekFunc = seekFunc;
	this.inputLength = inputLength;
	this.decoder = (kha_audio2_ogg_vorbis_VorbisDecoder().default).start(input);
	this.decoder.setupSampleNumber(seekFunc,inputLength);
	this.loopStart = this.get_header().comment.get_loopStart();
	this.loopLength = this.get_header().comment.get_loopLength();
}

// Meta

Reader.__name__ = ["kha","audio2","ogg","vorbis","Reader"];
Reader.prototype = {
	get_header: function() {
		return this.decoder.header;
	},
	get_totalSample: function() {
		return this.decoder.totalSample;
	},
	get_totalMillisecond: function() {
		return this.sampleToMillisecond(this.decoder.totalSample);
	},
	get_currentSample: function() {
		return this.decoder.currentSample;
	},
	set_currentSample: function(value) {
		this.decoder.seek(this.seekFunc,this.inputLength,value);
		return this.decoder.currentSample;
	},
	get_currentMillisecond: function() {
		return this.sampleToMillisecond(this.get_currentSample());
	},
	set_currentMillisecond: function(value) {
		this.set_currentSample(this.millisecondToSample(value));
		return this.get_currentMillisecond();
	},
	read: function(output,samples,channels,sampleRate,useFloat) {
		if(useFloat == null) {
			useFloat = false;
		}
		this.decoder.ensurePosition(this.seekFunc);
		if(samples == null) {
			samples = this.decoder.totalSample;
		}
		if(channels == null) {
			channels = this.get_header().channel;
		}
		if(sampleRate == null) {
			sampleRate = this.get_header().sampleRate;
		}
		return this.decoder.read(output,samples,channels,sampleRate,useFloat);
	},
	clone: function() {
		var reader = (Type().default).createEmptyInstance(Reader);
		reader.seekFunc = this.seekFunc;
		reader.inputLength = this.inputLength;
		reader.decoder = this.decoder.clone(this.seekFunc);
		reader.loopStart = this.loopStart;
		reader.loopLength = this.loopLength;
		return reader;
	},
	sampleToMillisecond: function(samples) {
		var b = this.get_header().sampleRate;
		return (_$UInt_UInt_$Impl_$().default).toFloat(samples) / (_$UInt_UInt_$Impl_$().default).toFloat(b) * 1000;
	},
	millisecondToSample: function(millseconds) {
		var _g = millseconds / 1000;
		var _g1 = this.get_header().sampleRate;
		return Math.floor((_$UInt_UInt_$Impl_$().default).toFloat(_g1) * _g);
	}
};
Reader.prototype.__class__ = Reader.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.Reader"] = Reader;

// Init



// Statics

Reader.openFromBytes = function(bytes) {
	var input = new (haxe_io_BytesInput().default)(bytes);
	var a1 = input;
	return new Reader(input,function(a2) {
		Reader.seekBytes(a1,a2);
	},bytes.length);
}
Reader.seekBytes = function(bytes,pos) {
	bytes.set_position(pos);
}
Reader.readAll = function(bytes,output,useFloat) {
	if(useFloat == null) {
		useFloat = false;
	}
	var input = new (haxe_io_BytesInput().default)(bytes);
	var decoder = (kha_audio2_ogg_vorbis_VorbisDecoder().default).start(input);
	var a1 = input;
	decoder.setupSampleNumber(function(a2) {
		Reader.seekBytes(a1,a2);
	},bytes.length);
	var header = decoder.header;
	var count = 0;
	var bufferSize = 4096;
	var this1 = new Float32Array(bufferSize * header.channel);
	var buffer = this1;
	while(true) {
		var n = decoder.read(buffer,bufferSize,header.channel,header.sampleRate,useFloat);
		var _g1 = 0;
		var _g = n * header.channel;
		while(_g1 < _g) {
			var i = _g1++;
			output.writeFloat(buffer[i]);
		}
		if(n == 0) {
			break;
		}
		count += n;
	}
	return decoder.header;
}


// Export

exports.default = Reader;