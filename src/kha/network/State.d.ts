
import * as khaModule from 'kha';

declare namespace kha.network {

export class State {

	constructor(time:number, data:any);
	time:number;
	data:any;


}

}

export default kha.network.State;