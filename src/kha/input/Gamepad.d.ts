import {default as HxOverrides} from "./../../HxOverrides";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.input {

export class Gamepad {

	constructor(index?:number, id?:string);
	index:number;
	notify(axisListener:any, buttonListener:any):void;
	remove(axisListener:any, buttonListener:any):void;
	axisListeners:Array<any>;
	buttonListeners:Array<any>;
	id:string;
	connected:boolean;
	get_id():string;
	sendAxisEvent(axis:number, value:number):void;
	sendButtonEvent(button:number, value:number):void;
	
	static get(index?:number):khaModule.input.Gamepad;
	static notifyOnConnect(connectListener:any, disconnectListener:any):void;
	static removeConnect(connectListener:any, disconnectListener:any):void;
	static instances:Array<any>;
	static connectListeners:Array<any>;
	static disconnectListeners:Array<any>;
	static sendConnectEvent(index:number):void;
	static sendDisconnectEvent(index:number):void;


}

}

export default kha.input.Gamepad;