import {default as Std} from "./../../../../Std";
import {default as UInt_Impl_} from "./../../../../_UInt/UInt_Impl_";
import {default as HaxeError} from "./../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import {default as Type} from "./../../../../Type";
import {default as VorbisTools} from "./../../../../kha/audio2/ogg/vorbis/VorbisTools";
import {default as Lambda} from "./../../../../Lambda";
import {default as Mdct} from "./../../../../kha/audio2/ogg/tools/Mdct";
import {default as MathTools} from "./../../../../kha/audio2/ogg/tools/MathTools";
import {default as VorbisDecodeState} from "./../../../../kha/audio2/ogg/vorbis/VorbisDecodeState";
import {default as Header} from "./../../../../kha/audio2/ogg/vorbis/data/Header";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis {

export class VorbisDecoder {

	constructor(header:Header, decodeState:VorbisDecodeState);
	previousWindow:any;
	previousLength:number;
	finalY:any;
	a:any;
	b:any;
	c:any;
	window:any;
	bitReverseData:any;
	channelBuffers:any;
	channelBufferStart:number;
	channelBufferEnd:number;
	header:Header;
	currentSample:number;
	
	decodeState:VorbisDecodeState;
	read(output:khaModule.arrays.Float32Array, samples:number, channels:number, sampleRate:number, useFloat:boolean):number;
	skipSamples(len:number):number;
	setupSampleNumber(seekFunc:any, inputLength:number):void;
	seek(seekFunc:any, inputLength:UInt, sampleNumber:number):void;
	seekFrameFromPage(seekFunc:any, pageStart:number, firstSample:number, targetSample:number):void;
	clone(seekFunc:any):khaModule.audio2.ogg.vorbis.VorbisDecoder;
	ensurePosition(seekFunc:any):void;
	getFrameFloat():number;
	pumpFirstFrame():void;
	finishFrame(r:khaModule.audio2.ogg.vorbis.DecodePacketResult):number;
	getWindow(len:number):any;
	initBlocksize(bs:number, n:number):void;
	inverseMdct(buffer:any, n:number, blocktype:boolean):void;
	decodePacket():khaModule.audio2.ogg.vorbis.DecodePacketResult;
	decodeInitial():khaModule.audio2.ogg.vorbis.DecodeInitialResult;
	decodePacketRest(r:khaModule.audio2.ogg.vorbis.DecodeInitialResult):khaModule.audio2.ogg.vorbis.DecodePacketResult;
	static start(input:any):khaModule.audio2.ogg.vorbis.VorbisDecoder;


}

}

export default kha.audio2.ogg.vorbis.VorbisDecoder;