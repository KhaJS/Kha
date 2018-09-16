import {default as ControllerBuilder} from "./../../kha/network/ControllerBuilder";
import {default as Bytes} from "./../../haxe/io/Bytes";
import * as khaModule from 'kha';

declare namespace kha.network {

export class Controller {

	constructor();
	__id:number;
	_inputBufferIndex:number;
	_inputBuffer:Bytes;
	_id():number;
	_receive(bytes:Bytes):void;


}

}

export default kha.network.Controller;