import {default as Buffer} from "./../../kha/audio2/Buffer";
import {default as Std} from "./../../Std";
import {default as Browser} from "./../../js/Browser";
import {default as AEAudioChannel} from "./../../kha/js/AEAudioChannel";
import * as khaModule from 'kha';

declare namespace kha.audio2 {

export class Audio {

	static buffer:Buffer;
	static _context:;
	static processingNode:;
	static initContext():void;
	static _init():boolean;
	static audioCallback(a1:any, a2:any):void;
	static stream(sound:any, loop?:any):AudioChannel;


}

}

export default kha.audio2.Audio;