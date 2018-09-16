import {default as MobileWebAudioChannel} from "./../../kha/js/MobileWebAudioChannel";
import * as khaModule from 'kha';

declare namespace kha.js {

export class MobileWebAudio {

	static _context:any;
	static _init():void;
	static play(sound:khaModule.js.Sound, loop?:boolean):AudioChannel;
	static stream(sound:khaModule.js.Sound, loop?:boolean):AudioChannel;


}

}

export default kha.js.MobileWebAudio;