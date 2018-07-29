import {default as System} from "./../kha/System";
import {default as HxOverrides} from "./../HxOverrides";
import {default as Session} from "./../kha/network/Session";
import {default as FrameTask} from "./../kha/FrameTask";
import {default as TimeTask} from "./../kha/TimeTask";
import * as khaModule from 'kha';

declare namespace kha {

export class Scheduler {

	static timeTasks:Array<any>;
	static pausedTimeTasks:Array<any>;
	static outdatedTimeTasks:Array<any>;
	static timeTasksScratchpad:Array<any>;
	static timeWarpSaveTime:number;
	static frameTasks:Array<any>;
	static toDeleteFrame:Array<any>;
	static current:number;
	static lastTime:number;
	static frame_tasks_sorted:boolean;
	static stopped:boolean;
	static vsync:boolean;
	static onedifhz:number;
	static currentFrameTaskId:number;
	static currentTimeTaskId:number;
	static currentGroupId:number;
	static DIF_COUNT:number;
	static maxframetime:number;
	static deltas:Array<any>;
	static startTime:number;
	static activeTimeTask:TimeTask;
	static init():void;
	static start(restartTimers?:any):void;
	static stop():void;
	static isStopped():boolean;
	static warpTimeTasksBack(time:any, tasks:any):void;
	static warp(time:any):void;
	static executeFrame():void;
	static executeTimeTasks(until:any):void;
	static archiveTimeTask(timeTask:any, frameEnd:any):void;
	static time():number;
	static realTime():number;
	static resetTime():void;
	static addBreakableFrameTask(task:any, priority:any):number;
	static addFrameTask(task:any, priority:any):number;
	static pauseFrameTask(id:any, paused:any):void;
	static removeFrameTask(id:any):void;
	static generateGroupId():number;
	static addBreakableTimeTaskToGroup(groupId:any, task:any, start:any, period?:any, duration?:any):number;
	static addTimeTaskToGroup(groupId:any, task:any, start:any, period?:any, duration?:any):number;
	static addBreakableTimeTask(task:any, start:any, period?:any, duration?:any):number;
	static addTimeTask(task:any, start:any, period?:any, duration?:any):number;
	static getTimeTask(id:any):TimeTask;
	static pauseTimeTask(id:any, paused:any):void;
	static pauseRunningTimeTask(timeTask:any, paused:any):void;
	static pauseTimeTasks(groupId:any, paused:any):void;
	static removeTimeTask(id:any):void;
	static removeTimeTasks(groupId:any):void;
	static numTasksInSchedule():number;
	static insertSorted(list:any, task:any):void;
	static sortFrameTasks():void;


}

}

export default kha.Scheduler;