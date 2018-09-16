import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import {default as Floor0} from "./../../../../../kha/audio2/ogg/vorbis/data/Floor0";
import {default as Floor1} from "./../../../../../kha/audio2/ogg/vorbis/data/Floor1";
import {default as IntPoint} from "./../../../../../kha/audio2/ogg/vorbis/data/IntPoint";
import {default as VorbisTools} from "./../../../../../kha/audio2/ogg/vorbis/VorbisTools";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Floor {

	constructor();
	floor0:Floor0;
	floor1:Floor1;
	type:number;
	static read(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState, codebooks:any):Floor;


}

}

export default kha.audio2.ogg.vorbis.data.Floor;