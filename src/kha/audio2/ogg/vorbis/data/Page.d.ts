import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Page {

	constructor();
	flag:number;
	clone():khaModule.audio2.ogg.vorbis.data.Page;
	start(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState):void;
	startWithoutCapturePattern(decodeState:khaModule.audio2.ogg.vorbis.VorbisDecodeState):void;


}

}

export default kha.audio2.ogg.vorbis.data.Page;