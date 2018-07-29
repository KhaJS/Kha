import {default as Mouse} from "./../../kha/input/Mouse";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.input {

export class MouseImpl extends kha_input_Mouse {

	constructor();
	lock():void;
	unlock():void;
	canLock():boolean;
	isLocked():boolean;
	notifyOnLockChange(func:any, error:any):void;
	removeFromLockChange(func:any, error:any):void;
	hideSystemCursor():void;
	showSystemCursor():void;
	_receive(bytes:any):void;


}

}

export default kha.input.MouseImpl;