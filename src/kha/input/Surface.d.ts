import {default as HxOverrides} from "./../../HxOverrides";
import * as khaModule from 'kha';

declare namespace kha.input {

export class Surface {

	constructor();
	notify(touchStartListener:any, touchEndListener:any, moveListener:any):void;
	remove(touchStartListener:any, touchEndListener:any, moveListener:any):void;
	touchStartListeners:Array<any>;
	touchEndListeners:Array<any>;
	moveListeners:Array<any>;
	sendTouchStartEvent(index:number, x:number, y:number):void;
	sendTouchEndEvent(index:number, x:number, y:number):void;
	sendMoveEvent(index:number, x:number, y:number):void;
	static get(num?:number):khaModule.input.Surface;
	static instance:khaModule.input.Surface;


}

}

export default kha.input.Surface;