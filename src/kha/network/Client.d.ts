
import * as khaModule from 'kha';

declare namespace kha.network {

export class Client {

	
	get_id():number;
	id:number;
	send(bytes:any, mandatory:any):void;
	receive(receiver:any):void;
	onClose(close:any):void;


}

}

export default kha.network.Client;