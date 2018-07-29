import {default as MobileWebAudioChannel} from "./../../kha/js/MobileWebAudioChannel";
import * as khaModule from 'kha';

declare namespace kha.js {

export class MobileWebAudio {

	static _context:;
	static _init():void;
	static play(sound:any, loop?:any):AudioChannel;
	static stream(sound:any, loop?:any):AudioChannel;


}

}

export default kha.js.MobileWebAudio;