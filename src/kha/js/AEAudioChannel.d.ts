import {default as AudioChannel} from "./../../kha/audio1/AudioChannel";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as Log} from "./../../haxe/Log";
import * as khaModule from 'kha';

declare namespace kha.js {

export class AEAudioChannel {

	constructor(element:any);
	element:any;
	stopped:boolean;
	play():void;
	pause():void;
	stop():void;
	length:number;
	get_length():number;
	position:number;
	get_position():number;
	volume:number;
	get_volume():number;
	set_volume(value:number):number;
	finished:boolean;
	get_finished():boolean;
	static todo:Array<any>;


}

}

export default kha.js.AEAudioChannel;