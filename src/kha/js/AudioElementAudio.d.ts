import {default as AEAudioChannel} from "./../../kha/js/AEAudioChannel";
import * as khaModule from 'kha';

declare namespace kha.js {

export class AudioElementAudio {

	static _compile():void;
	static play(sound:any, loop?:any):AudioChannel;
	static stream(sound:any, loop?:any):AudioChannel;


}

}

export default kha.js.AudioElementAudio;