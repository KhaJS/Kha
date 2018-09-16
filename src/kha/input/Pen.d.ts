import {default as HxOverrides} from "./../../HxOverrides";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.input {

export class Pen {

	constructor();
	notify(downListener:any, upListener:any, moveListener:any):void;
	remove(downListener:any, upListener:any, moveListener:any):void;
	notifyWindowed(windowId:number, downListener:any, upListener:any, moveListener:any):void;
	removeWindowed(windowId:number, downListener:any, upListener:any, moveListener:any):void;
	windowDownListeners:Array<any>;
	windowUpListeners:Array<any>;
	windowMoveListeners:Array<any>;
	sendDownEvent(windowId:number, x:number, y:number, pressure:number):void;
	sendUpEvent(windowId:number, x:number, y:number, pressure:number):void;
	sendMoveEvent(windowId:number, x:number, y:number, pressure:number):void;
	static get(num?:number):khaModule.input.Pen;
	static instance:khaModule.input.Pen;


}

}

export default kha.input.Pen;