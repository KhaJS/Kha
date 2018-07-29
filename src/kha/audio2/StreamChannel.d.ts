import {default as AudioChannel} from "./../../kha/audio1/AudioChannel";
import {default as Std} from "./../../Std";
import {default as Reader} from "./../../kha/audio2/ogg/vorbis/Reader";
import * as khaModule from 'kha';

declare namespace kha.audio2 {

export class StreamChannel {

	constructor(data:any, loop:any);
	reader:Reader;
	atend:boolean;
	loop:boolean;
	myVolume:number;
	paused:boolean;
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

export default kha.audio2.StreamChannel;