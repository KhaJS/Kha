import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Mode {

	constructor();
	blockflag:boolean;
	mapping:number;
	windowtype:number;
	transformtype:number;
	static read(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState):khaModule.audio2.ogg.vorbis.data.Mode;


}

}

export default kha.audio2.ogg.vorbis.data.Mode;