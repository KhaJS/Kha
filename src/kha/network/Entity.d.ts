
import * as khaModule from 'kha';

declare namespace kha.network {

export class Entity {

	
	_id():number;
	_size():number;
	_send(offset:any, bytes:any):number;
	_receive(offset:any, bytes:any):number;


}

}

export default kha.network.Entity;