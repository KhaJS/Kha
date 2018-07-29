import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as Log} from "./../../haxe/Log";
import * as khaModule from 'kha';

declare namespace kha.network {

export class Network {

	constructor(url:any, port:any, errorCallback:any, closeCallback:any);
	socket:;
	open:boolean;
	send(bytes:any, mandatory:any):void;
	listen(listener:any):void;
	static webSocketCloseReason(code:any):string;


}

}

export default kha.network.Network;