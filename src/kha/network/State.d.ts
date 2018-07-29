
import * as khaModule from 'kha';

declare namespace kha.network {

export class State {

	constructor(time:any, data:any);
	time:number;
	data:io.Bytes;


}

}

export default kha.network.State;