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
	input:any;
	discardSamplesDeferred:number;
	segments:any;
	bytesInSeg:number;
	channelBuffers:any;
	channelBufferStart:number;
	channelBufferEnd:number;
	currentSample:number;
	previousWindow:any;
	previousLength:number;
	finalY:any;
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
	setup(loc0:number, loc1:number):void;
	clone(seekFunc:any):VorbisDecodeState;
	next():number;
	startPacket():void;
	maybeStartPacket():boolean;
	readBits(n:number):number;
	readPacketRaw():number;
	readPacket():number;
	flushPacket():void;
	vorbisValidate():void;
	firstPageValidate():void;
	startFirstDecode():void;
	capturePattern():void;
	skip(len:number):void;
	prepHuffman():void;
	decode(c:khaModule.audio2.ogg.vorbis.data.Codebook):number;
	decodeRaw(c:khaModule.audio2.ogg.vorbis.data.Codebook):number;
	isLastByte():boolean;
	finishDecodePacket(previousLength:number, n:number, r:khaModule.audio2.ogg.vorbis.DecodeInitialResult):any;
	readInt32():number;
	readByte():number;
	read(n:number):any;
	readBytes(n:number):Bytes;
	readString(n:number):string;
	getSampleNumber(seekFunc:any, inputLength:UInt):number;
	forcePageResync():void;
	setInputOffset(seekFunc:any, n:number):void;
	findPage(seekFunc:any, inputLength:number):FindPageResult;
	analyzePage(seekFunc:any, h:khaModule.audio2.ogg.vorbis.data.Header):ProbedPage;
	decodeScalarRaw(c:khaModule.audio2.ogg.vorbis.data.Codebook):number;
	static INVALID_BITS:number;


}

}

export default kha.audio2.ogg.vorbis.VorbisDecodeState;