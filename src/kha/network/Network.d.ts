import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as Log} from "./../../haxe/Log";
import * as khaModule from 'kha';

declare namespace kha.network {

export class Network {

	constructor(url:string, port:number, errorCallback:any, closeCallback:any);
	socket:any;
	open:boolean;
	send(bytes:Bytes, mandatory:boolean):void;
	listen(listener:any):void;
	static webSocketCloseReason(code:number):string;


}

}

export default kha.network.Network;