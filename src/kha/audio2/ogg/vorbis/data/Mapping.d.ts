import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import {default as VorbisTools} from "./../../../../../kha/audio2/ogg/vorbis/VorbisTools";
import {default as MappingChannel} from "./../../../../../kha/audio2/ogg/vorbis/data/MappingChannel";
import {default as MathTools} from "./../../../../../kha/audio2/ogg/tools/MathTools";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Mapping {

	constructor();
	couplingSteps:number;
	chan:any;
	submaps:number;
	submapFloor:any;
	submapResidue:any;
	doFloor(floors:any, i:number, n:number, target:any, finalY:Array<any>, step2Flag:any):void;
	static read(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState, channels:number):Mapping;


}

}

export default kha.audio2.ogg.vorbis.data.Mapping;