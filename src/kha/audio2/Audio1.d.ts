import {default as Audio} from "./../../kha/audio2/Audio";
import {default as AudioChannel} from "./../../kha/audio2/AudioChannel";
import {default as StreamChannel} from "./../../kha/audio2/StreamChannel";
import * as khaModule from 'kha';

declare namespace kha.audio2 {

export class Audio1 {

	static channelCount:number;
	static soundChannels:ds.Vector;
	static streamChannels:ds.Vector;
	static internalSoundChannels:ds.Vector;
	static internalStreamChannels:ds.Vector;
	static sampleCache1:khaModule.arrays.Float32Array;
	static sampleCache2:khaModule.arrays.Float32Array;
	static _init():void;
	static max(a:any, b:any):number;
	static min(a:any, b:any):number;
	static mix(samples:any, buffer:any):void;
	static play(sound:any, loop?:any):AudioChannel;
	static _playAgain(channel:any):void;
	static stream(sound:any, loop?:any):AudioChannel;


}

}

export default kha.audio2.Audio1;