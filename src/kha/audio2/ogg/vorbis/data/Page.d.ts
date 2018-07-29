import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Page {

	constructor();
	flag:number;
	clone():khaModule.audio2.ogg.vorbis.data.Page;
	start(decodeState:any):void;
	startWithoutCapturePattern(decodeState:any):void;


}

}

export default kha.audio2.ogg.vorbis.data.Page;