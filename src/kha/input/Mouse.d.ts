import {default as Controller} from "./../../kha/network/Controller";
import {default as HxOverrides} from "./../../HxOverrides";
import {default as Log} from "./../../haxe/Log";
import {default as Session} from "./../../kha/network/Session";
import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.input {

export class Mouse extends kha_network_Controller {

	constructor();
	notify(downListener:any, upListener:any, moveListener:any, wheelListener:any, leaveListener?:any):void;
	remove(downListener:any, upListener:any, moveListener:any, wheelListener:any, leaveListener?:any):void;
	notifyWindowed(windowId:any, downListener:any, upListener:any, moveListener:any, wheelListener:any, leaveListener?:any):void;
	removeWindowed(windowId:any, downListener:any, upListener:any, moveListener:any, wheelListener:any, leaveListener?:any):void;
	lock():void;
	unlock():void;
	canLock():boolean;
	isLocked():boolean;
	notifyOnLockChange(change:any, error:any):void;
	removeFromLockChange(change:any, error:any):void;
	hideSystemCursor():void;
	showSystemCursor():void;
	windowDownListeners:Array<any>;
	windowUpListeners:Array<any>;
	windowMoveListeners:Array<any>;
	windowWheelListeners:Array<any>;
	windowLeaveListeners:Array<any>;
	sendLeaveEvent(windowId:any):void;
	sendDownEvent(windowId:any, button:any, x:any, y:any):void;
	sendUpEvent(windowId:any, button:any, x:any, y:any):void;
	sendMoveEvent(windowId:any, x:any, y:any, movementX:any, movementY:any):void;
	sendWheelEvent(windowId:any, delta:any):void;
	_receive(bytes:any):void;
	
	static get(num?:any):khaModule.input.Mouse;
	static instance:khaModule.input.Mouse;


}

}

export default kha.input.Mouse;