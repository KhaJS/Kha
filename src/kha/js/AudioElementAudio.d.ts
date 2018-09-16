import {default as AEAudioChannel} from "./../../kha/js/AEAudioChannel";
import * as khaModule from 'kha';

declare namespace kha.js {

export class AudioElementAudio {

	static _compile():void;
	static play(sound:khaModule.js.Sound, loop?:boolean):AudioChannel;
	static stream(sound:khaModule.js.Sound, loop?:boolean):AudioChannel;


}

}

export default kha.js.AudioElementAudio;