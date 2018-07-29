import {default as Std} from "./../../../../../Std";
import {default as UInt_Impl_} from "./../../../../../_UInt/UInt_Impl_";
import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Residue {

	constructor();
	begin:UInt;
	end:UInt;
	partSize:UInt;
	classifications:number;
	classbook:number;
	classdata:ds.Vector;
	residueBooks:ds.Vector;
	type:number;
	decode(decodeState:any, header:any, residueBuffers:any, ch:any, n:any, doNotDecode:any, channelBuffers:any):void;
	static read(decodeState:any, codebooks:any):khaModule.audio2.ogg.vorbis.data.Residue;


}

}

export default kha.audio2.ogg.vorbis.data.Residue;