import {default as Resource} from "./../kha/Resource";
import * as khaModule from 'kha';

declare namespace kha {

export class Video {

	constructor();
	width():number;
	height():number;
	play(loop?:any):void;
	pause():void;
	stop():void;
	getLength():number;
	getCurrentPos():number;
	position:number;
	get_position():number;
	set_position(value:any):number;
	getVolume():number;
	setVolume(volume:any):void;
	isFinished():boolean;
	unload():void;


}

}

export default kha.Video;