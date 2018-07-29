import {default as ProbedPage} from "./../../../../kha/audio2/ogg/vorbis/data/ProbedPage";
import {default as Type} from "./../../../../Type";
import {default as HaxeError} from "./../../../../js/_Boot/HaxeError";
import {default as Boot} from "./../../../../js/Boot";
import {default as ReaderError} from "./../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import {default as VorbisTools} from "./../../../../kha/audio2/ogg/vorbis/VorbisTools";
import {default as Eof} from "./../../../../haxe/io/Eof";
import {default as Bytes} from "./../../../../haxe/io/Bytes";
import {default as UInt_Impl_} from "./../../../../_UInt/UInt_Impl_";
import {default as FindPageResult} from "./../../../../kha/audio2/ogg/vorbis/_VorbisDecodeState/FindPageResult";
import {default as Crc32} from "./../../../../kha/audio2/ogg/tools/Crc32";
import {default as MathTools} from "./../../../../kha/audio2/ogg/tools/MathTools";
import {default as Page} from "./../../../../kha/audio2/ogg/vorbis/data/Page";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis {

export class VorbisDecodeState {

	constructor(input:any);
	page:Page;
	eof:boolean;
	pFirst:ProbedPage;
	pLast:ProbedPage;
	validBits:number;
	inputPosition:number;
	input:io.Input;
	discardSamplesDeferred:number;
	segments:ds.Vector;
	bytesInSeg:number;
	channelBuffers:ds.Vector;
	channelBufferStart:number;
	channelBufferEnd:number;
	currentSample:number;
	previousWindow:ds.Vector;
	previousLength:number;
	finalY:ds.Vector;
	firstDecode:boolean;
	nextSeg:number;
	acc:UInt;
	lastSeg:boolean;
	lastSegWhich:number;
	endSegWithKnownLoc:number;
	knownLocForPacket:number;
	error:ReaderError;
	currentLoc:number;
	currentLocValid:number;
	firstAudioPageOffset:UInt;
	setup(loc0:any, loc1:any):void;
	clone(seekFunc:any):VorbisDecodeState;
	next():number;
	startPacket():void;
	maybeStartPacket():boolean;
	readBits(n:any):number;
	readPacketRaw():number;
	readPacket():number;
	flushPacket():void;
	vorbisValidate():void;
	firstPageValidate():void;
	startFirstDecode():void;
	capturePattern():void;
	skip(len:any):void;
	prepHuffman():void;
	decode(c:any):number;
	decodeRaw(c:any):number;
	isLastByte():boolean;
	finishDecodePacket(previousLength:any, n:any, r:any):;
	readInt32():number;
	readByte():number;
	read(n:any):ds.Vector;
	readBytes(n:any):Bytes;
	readString(n:any):string;
	getSampleNumber(seekFunc:any, inputLength:any):number;
	forcePageResync():void;
	setInputOffset(seekFunc:any, n:any):void;
	findPage(seekFunc:any, inputLength:any):FindPageResult;
	analyzePage(seekFunc:any, h:any):ProbedPage;
	decodeScalarRaw(c:any):number;
	static INVALID_BITS:number;


}

}

export default kha.audio2.ogg.vorbis.VorbisDecodeState;