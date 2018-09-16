import {default as Audio} from "./../../kha/audio2/Audio";
import {default as AudioChannel} from "./../../kha/audio2/AudioChannel";
import {default as StreamChannel} from "./../../kha/audio2/StreamChannel";
import * as khaModule from 'kha';

declare namespace kha.audio2 {

export class Audio1 {

	static channelCount:number;
	static soundChannels:any;
	static streamChannels:any;
	static internalSoundChannels:any;
	static internalStreamChannels:any;
	static sampleCache1:khaModule.arrays.Float32Array;
	static sampleCache2:khaModule.arrays.Float32Array;
	static _init():void;
	static max(a:number, b:number):number;
	static min(a:number, b:number):number;
	static mix(samples:number, buffer:khaModule.audio2.Buffer):void;
	static play(sound:khaModule.Sound, loop?:boolean):AudioChannel;
	static _playAgain(channel:AudioChannel):void;
	static stream(sound:khaModule.Sound, loop?:boolean):AudioChannel;


}

}

export default kha.audio2.Audio1;