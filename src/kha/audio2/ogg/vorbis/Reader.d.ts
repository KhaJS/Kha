import {default as Type} from "./../../../../Type";
import {default as UInt_Impl_} from "./../../../../_UInt/UInt_Impl_";
import {default as BytesInput} from "./../../../../haxe/io/BytesInput";
import {default as VorbisDecoder} from "./../../../../kha/audio2/ogg/vorbis/VorbisDecoder";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis {

export class Reader {

	constructor(input:Input, seekFunc:any, inputLength:number);
	decoder:VorbisDecoder;
	header:khaModule.audio2.ogg.vorbis.data.Header;
	get_header():khaModule.audio2.ogg.vorbis.data.Header;
	totalSample:number;
	get_totalSample():number;
	totalMillisecond:number;
	get_totalMillisecond():number;
	currentSample:number;
	get_currentSample():number;
	set_currentSample(value:number):number;
	currentMillisecond:number;
	get_currentMillisecond():number;
	set_currentMillisecond(value:number):number;
	
	
	seekFunc(a1:number):void;
	inputLength:number;
	read(output:khaModule.arrays.Float32Array, samples?:any, channels?:any, sampleRate?:any, useFloat?:boolean):number;
	clone():khaModule.audio2.ogg.vorbis.Reader;
	sampleToMillisecond(samples:number):number;
	millisecondToSample(millseconds:number):number;
	static openFromBytes(bytes:Bytes):khaModule.audio2.ogg.vorbis.Reader;
	static seekBytes(bytes:BytesInput, pos:number):void;
	static readAll(bytes:Bytes, output:any, useFloat?:boolean):khaModule.audio2.ogg.vorbis.data.Header;


}

}

export default kha.audio2.ogg.vorbis.Reader;