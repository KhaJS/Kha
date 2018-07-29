import {default as Client} from "./../../kha/network/Client";
import * as khaModule from 'kha';

declare namespace kha.network {

export class LocalClient {

	constructor(id:any);
	myId:number;
	send(bytes:any, mandatory:any):void;
	receive(receiver:any):void;
	onClose(close:any):void;
	controllers:Array<any>;
	get_controllers():Array<any>;
	id:number;
	get_id():number;


}

}

export default kha.network.LocalClient;