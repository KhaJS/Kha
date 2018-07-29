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

	constructor(header:any, decodeState:any);
	previousWindow:ds.Vector;
	previousLength:number;
	finalY:ds.Vector;
	a:ds.Vector;
	b:ds.Vector;
	c:ds.Vector;
	window:ds.Vector;
	bitReverseData:ds.Vector;
	channelBuffers:ds.Vector;
	channelBufferStart:number;
	channelBufferEnd:number;
	header:Header;
	currentSample:number;
	
	decodeState:VorbisDecodeState;
	read(output:any, samples:any, channels:any, sampleRate:any, useFloat:any):number;
	skipSamples(len:any):number;
	setupSampleNumber(seekFunc:any, inputLength:any):void;
	seek(seekFunc:any, inputLength:any, sampleNumber:any):void;
	seekFrameFromPage(seekFunc:any, pageStart:any, firstSample:any, targetSample:any):void;
	clone(seekFunc:any):khaModule.audio2.ogg.vorbis.VorbisDecoder;
	ensurePosition(seekFunc:any):void;
	getFrameFloat():number;
	pumpFirstFrame():void;
	finishFrame(r:any):number;
	getWindow(len:any):ds.Vector;
	initBlocksize(bs:any, n:any):void;
	inverseMdct(buffer:any, n:any, blocktype:any):void;
	decodePacket():khaModule.audio2.ogg.vorbis.DecodePacketResult;
	decodeInitial():khaModule.audio2.ogg.vorbis.DecodeInitialResult;
	decodePacketRest(r:any):khaModule.audio2.ogg.vorbis.DecodePacketResult;
	static start(input:any):khaModule.audio2.ogg.vorbis.VorbisDecoder;


}

}

export default kha.audio2.ogg.vorbis.VorbisDecoder;