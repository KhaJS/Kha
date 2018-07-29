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
	codewordLengths:ds.Vector;
	minimumValue:number;
	deltaValue:number;
	valueBits:number;
	lookupType:number;
	sequenceP:boolean;
	sparse:boolean;
	lookupValues:UInt;
	multiplicands:ds.Vector;
	codewords:ds.Vector;
	fastHuffman:ds.Vector;
	sortedCodewords:Array<any>;
	sortedValues:ds.Vector;
	sortedEntries:number;
	addEntry(huffCode:any, symbol:any, count:any, len:any, values:any):void;
	includeInSort(len:any):boolean;
	computeCodewords(len:any, n:any, values:any):boolean;
	computeSortedHuffman(lengths:any, values:any):void;
	computeAcceleratedHuffman():void;
	codebookDecode(decodeState:any, output:any, offset:any, len:any):boolean;
	codebookDecodeStep(decodeState:any, output:any, offset:any, len:any, step:any):boolean;
	decodeStart(decodeState:any):number;
	decodeDeinterleaveRepeat(decodeState:any, residueBuffers:any, ch:any, cInter:any, pInter:any, len:any, totalDecode:any):;
	residueDecode(decodeState:any, target:any, offset:any, n:any, rtype:any):boolean;
	static NO_CODE:number;
	static read(decodeState:any):khaModule.audio2.ogg.vorbis.data.Codebook;
	static delay:number;


}

}

export default kha.audio2.ogg.vorbis.data.Codebook;