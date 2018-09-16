import {default as VorbisTools} from "./../../../../../kha/audio2/ogg/vorbis/VorbisTools";
import {default as UInt_Impl_} from "./../../../../../_UInt/UInt_Impl_";
import {default as Std} from "./../../../../../Std";
import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import {default as MathTools} from "./../../../../../kha/audio2/ogg/tools/MathTools";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Codebook {

	constructor();
	dimensions:number;
	entries:number;
	codewordLengths:any;
	minimumValue:number;
	deltaValue:number;
	valueBits:number;
	lookupType:number;
	sequenceP:boolean;
	sparse:boolean;
	lookupValues:UInt;
	multiplicands:any;
	codewords:any;
	fastHuffman:any;
	sortedCodewords:Array<any>;
	sortedValues:any;
	sortedEntries:number;
	addEntry(huffCode:UInt, symbol:number, count:number, len:number, values:any):void;
	includeInSort(len:number):boolean;
	computeCodewords(len:any, n:number, values:any):boolean;
	computeSortedHuffman(lengths:any, values:any):void;
	computeAcceleratedHuffman():void;
	codebookDecode(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState, output:any, offset:number, len:number):boolean;
	codebookDecodeStep(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState, output:any, offset:number, len:number, step:number):boolean;
	decodeStart(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState):number;
	decodeDeinterleaveRepeat(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState, residueBuffers:any, ch:number, cInter:number, pInter:number, len:number, totalDecode:number):any;
	residueDecode(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState, target:any, offset:number, n:number, rtype:number):boolean;
	static NO_CODE:number;
	static read(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState):khaModule.audio2.ogg.vorbis.data.Codebook;
	static delay:number;


}

}

export default kha.audio2.ogg.vorbis.data.Codebook;