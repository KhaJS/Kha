import {default as Type} from "./../../../../Type";
import {default as UInt_Impl_} from "./../../../../_UInt/UInt_Impl_";
import {default as BytesInput} from "./../../../../haxe/io/BytesInput";
import {default as VorbisDecoder} from "./../../../../kha/audio2/ogg/vorbis/VorbisDecoder";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis {

export class Reader {

	constructor(input:any, seekFunc:any, inputLength:any);
	decoder:VorbisDecoder;
	header:khaModule.audio2.ogg.vorbis.data.Header;
	get_header():khaModule.audio2.ogg.vorbis.data.Header;
	totalSample:number;
	get_totalSample():number;
	totalMillisecond:number;
	get_totalMillisecond():number;
	currentSample:number;
	get_currentSample():number;
	set_currentSample(value:any):number;
	currentMillisecond:number;
	get_currentMillisecond():number;
	set_currentMillisecond(value:any):number;
	
	
	seekFunc(a1:any):void;
	inputLength:number;
	read(output:any, samples?:any, channels?:any, sampleRate?:any, useFloat?:any):number;
	clone():khaModule.audio2.ogg.vorbis.Reader;
	sampleToMillisecond(samples:any):number;
	millisecondToSample(millseconds:any):number;
	static openFromBytes(bytes:any):khaModule.audio2.ogg.vorbis.Reader;
	static seekBytes(bytes:any, pos:any):void;
	static readAll(bytes:any, output:any, useFloat?:any):khaModule.audio2.ogg.vorbis.data.Header;


}

}

export default kha.audio2.ogg.vorbis.Reader;