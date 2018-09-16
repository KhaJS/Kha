import {default as Controller} from "./../../kha/network/Controller";
import {default as HxOverrides} from "./../../HxOverrides";
import {default as Session} from "./../../kha/network/Session";
import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.input {

export class Keyboard extends kha_network_Controller {

	constructor();
	notify(downListener:any, upListener:any, pressListener?:any):void;
	remove(downListener:any, upListener:any, pressListener:any):void;
	show():void;
	hide():void;
	downListeners:Array<any>;
	upListeners:Array<any>;
	pressListeners:Array<any>;
	sendDownEvent(code:khaModule.input.KeyCode):void;
	sendUpEvent(code:khaModule.input.KeyCode):void;
	sendPressEvent(char:string):void;
	_receive(bytes:Bytes):void;
	
	static get(num?:number):khaModule.input.Keyboard;
	static instance:khaModule.input.Keyboard;


}

}

export default kha.input.Keyboard;