import {default as AudioChannel} from "./../../kha/audio1/AudioChannel";
import {default as Audio1} from "./../../kha/audio2/Audio1";
import * as khaModule from 'kha';

declare namespace kha.audio2 {

export class AudioChannel {

	constructor(looping:any);
	data:khaModule.arrays.Float32Array;
	myVolume:number;
	myPosition:number;
	paused:boolean;
	looping:boolean;
	nextSamples(samples:any, length:any, sampleRate:any):void;
	play():void;
	pause():void;
	stop():void;
	length:number;
	get_length():number;
	position:number;
	get_position():number;
	volume:number;
	get_volume():number;
	set_volume(value:any):number;
	finished:boolean;
	get_finished():boolean;


}

}

export default kha.audio2.AudioChannel;