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
	static start(restartTimers?:boolean):void;
	static stop():void;
	static isStopped():boolean;
	static warpTimeTasksBack(time:number, tasks:Array<any>):void;
	static warp(time:number):void;
	static executeFrame():void;
	static executeTimeTasks(until:number):void;
	static archiveTimeTask(timeTask:TimeTask, frameEnd:number):void;
	static time():number;
	static realTime():number;
	static resetTime():void;
	static addBreakableFrameTask(task:any, priority:number):number;
	static addFrameTask(task:any, priority:number):number;
	static pauseFrameTask(id:number, paused:boolean):void;
	static removeFrameTask(id:number):void;
	static generateGroupId():number;
	static addBreakableTimeTaskToGroup(groupId:number, task:any, start:number, period?:number, duration?:number):number;
	static addTimeTaskToGroup(groupId:number, task:any, start:number, period?:number, duration?:number):number;
	static addBreakableTimeTask(task:any, start:number, period?:number, duration?:number):number;
	static addTimeTask(task:any, start:number, period?:number, duration?:number):number;
	static getTimeTask(id:number):TimeTask;
	static pauseTimeTask(id:number, paused:boolean):void;
	static pauseRunningTimeTask(timeTask:TimeTask, paused:boolean):void;
	static pauseTimeTasks(groupId:number, paused:boolean):void;
	static removeTimeTask(id:number):void;
	static removeTimeTasks(groupId:number):void;
	static numTasksInSchedule():number;
	static insertSorted(list:Array<any>, task:TimeTask):void;
	static sortFrameTasks():void;


}

}

export default kha.Scheduler;