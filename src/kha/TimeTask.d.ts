
import * as khaModule from 'kha';

declare namespace kha {

export class TimeTask {

	constructor();
	task():boolean;
	start:number;
	period:number;
	duration:number;
	next:number;
	id:number;
	groupId:number;
	active:boolean;
	paused:boolean;


}

}

export default kha.TimeTask;