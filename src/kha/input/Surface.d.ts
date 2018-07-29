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
	sendTouchStartEvent(index:any, x:any, y:any):void;
	sendTouchEndEvent(index:any, x:any, y:any):void;
	sendMoveEvent(index:any, x:any, y:any):void;
	static get(num?:any):khaModule.input.Surface;
	static instance:khaModule.input.Surface;


}

}

export default kha.input.Surface;