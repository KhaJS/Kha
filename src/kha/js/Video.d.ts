import {default as Video} from "./../../kha/Video";
import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as Log} from "./../../haxe/Log";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import {default as Image} from "./../../kha/Image";
import {default as Browser} from "./../../js/Browser";
import {default as StringTools} from "./../../StringTools";
import * as khaModule from 'kha';

declare namespace kha.js {

export class Video extends kha_Video {

	constructor();
	filenames:Array<any>;
	element:;
	done(a1:any):void;
	texture:Image;
	width():number;
	height():number;
	play(loop?:any):void;
	pause():void;
	stop():void;
	getCurrentPos():number;
	get_position():number;
	set_position(value:any):number;
	getLength():number;
	errorListener(eventInfo:any):void;
	canPlayThroughListener(eventInfo:any):void;
	finishAsset():void;
	static fromElement(element:any):Video;
	static fromFile(filenames:any, done:any):void;


}

}

export default kha.js.Video;