
import * as khaModule from 'kha';

declare namespace kha {

export class FrameTask {

	constructor(task:any, priority:number, id:number);
	task():boolean;
	priority:number;
	id:number;
	active:boolean;
	paused:boolean;


}

}

export default kha.FrameTask;