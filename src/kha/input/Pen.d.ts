import {default as HxOverrides} from "./../../HxOverrides";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.input {

export class Pen {

	constructor();
	notify(downListener:any, upListener:any, moveListener:any):void;
	remove(downListener:any, upListener:any, moveListener:any):void;
	notifyWindowed(windowId:any, downListener:any, upListener:any, moveListener:any):void;
	removeWindowed(windowId:any, downListener:any, upListener:any, moveListener:any):void;
	windowDownListeners:Array<any>;
	windowUpListeners:Array<any>;
	windowMoveListeners:Array<any>;
	sendDownEvent(windowId:any, x:any, y:any, pressure:any):void;
	sendUpEvent(windowId:any, x:any, y:any, pressure:any):void;
	sendMoveEvent(windowId:any, x:any, y:any, pressure:any):void;
	static get(num?:any):khaModule.input.Pen;
	static instance:khaModule.input.Pen;


}

}

export default kha.input.Pen;