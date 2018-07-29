import {default as AudioChannel} from "./../../kha/audio1/AudioChannel";
import {default as MobileWebAudio} from "./../../kha/js/MobileWebAudio";
import * as khaModule from 'kha';

declare namespace kha.js {

export class MobileWebAudioChannel {

	constructor(sound:any, loop:any);
	buffer:;
	loop:boolean;
	source:;
	gain:;
	startTime:number;
	pauseTime:number;
	paused:boolean;
	stopped:boolean;
	createSource():void;
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

export default kha.js.MobileWebAudioChannel;