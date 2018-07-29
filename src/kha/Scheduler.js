// Class: kha.Scheduler

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
function kha_System() {return require("./../kha/System");}
function HxOverrides() {return require("./../HxOverrides");}
function kha_network_Session() {return require("./../kha/network/Session");}
function kha_FrameTask() {return require("./../kha/FrameTask");}
function kha_TimeTask() {return require("./../kha/TimeTask");}

// Constructor

var Scheduler = function(){}

// Meta

Scheduler.__name__ = ["kha","Scheduler"];
Scheduler.prototype = {
	
};
Scheduler.prototype.__class__ = Scheduler.prototype.constructor = $hxClasses["kha.Scheduler"] = Scheduler;

// Init



// Statics

Scheduler.init = function() {
	Scheduler.deltas = [];
	var _g1 = 0;
	var _g = Scheduler.DIF_COUNT;
	while(_g1 < _g) {
		var i = _g1++;
		Scheduler.deltas[i] = 0;
	}
	Scheduler.stopped = true;
	Scheduler.frame_tasks_sorted = true;
	Scheduler.current = Scheduler.lastTime = Scheduler.realTime();
	Scheduler.currentFrameTaskId = 0;
	Scheduler.currentTimeTaskId = 0;
	Scheduler.currentGroupId = 0;
	Scheduler.timeTasks = [];
	Scheduler.pausedTimeTasks = [];
	Scheduler.outdatedTimeTasks = [];
	Scheduler.timeTasksScratchpad = [];
	Scheduler.frameTasks = [];
	Scheduler.toDeleteFrame = [];
}
Scheduler.start = function(restartTimers) {
	if(restartTimers == null) {
		restartTimers = false;
	}
	Scheduler.vsync = (kha_System().default).get_vsync();
	var hz = (kha_System().default).get_refreshRate();
	if(hz >= 57 && hz <= 63) {
		hz = 60;
	}
	Scheduler.onedifhz = 1.0 / hz;
	Scheduler.stopped = false;
	Scheduler.resetTime();
	Scheduler.lastTime = Scheduler.realTime() - Scheduler.startTime;
	var _g1 = 0;
	var _g = Scheduler.DIF_COUNT;
	while(_g1 < _g) {
		var i = _g1++;
		Scheduler.deltas[i] = 0;
	}
	if(restartTimers) {
		var _g2 = 0;
		var _g11 = Scheduler.timeTasks;
		while(_g2 < _g11.length) {
			var timeTask = _g11[_g2];
			++_g2;
			timeTask.paused = false;
		}
		var _g3 = 0;
		var _g12 = Scheduler.frameTasks;
		while(_g3 < _g12.length) {
			var frameTask = _g12[_g3];
			++_g3;
			frameTask.paused = false;
		}
	}
}
Scheduler.stop = function() {
	Scheduler.stopped = true;
}
Scheduler.isStopped = function() {
	return Scheduler.stopped;
}
Scheduler.warpTimeTasksBack = function(time,tasks) {
	var _g = 0;
	while(_g < tasks.length) {
		var timeTask = tasks[_g];
		++_g;
		if(timeTask.start >= time) {
			timeTask.next = timeTask.start;
		} else if(timeTask.period > 0) {
			var sinceStart = time - timeTask.start;
			var times = Math.ceil(sinceStart / timeTask.period);
			timeTask.next = timeTask.start + times * timeTask.period;
		}
	}
}
Scheduler.warp = function(time) {
	if(time < Scheduler.lastTime) {
		Scheduler.current = time;
		Scheduler.lastTime = time;
		Scheduler.warpTimeTasksBack(time,Scheduler.outdatedTimeTasks);
		Scheduler.warpTimeTasksBack(time,Scheduler.timeTasks);
		var _g = 0;
		var _g1 = Scheduler.outdatedTimeTasks;
		while(_g < _g1.length) {
			var task = _g1[_g];
			++_g;
			if(task.next >= time) {
				Scheduler.timeTasksScratchpad.push(task);
			}
		}
		var _g2 = 0;
		var _g11 = Scheduler.timeTasksScratchpad;
		while(_g2 < _g11.length) {
			var task1 = _g11[_g2];
			++_g2;
			(HxOverrides().default).remove(Scheduler.outdatedTimeTasks,task1);
		}
		var _g3 = 0;
		var _g12 = Scheduler.timeTasksScratchpad;
		while(_g3 < _g12.length) {
			var task2 = _g12[_g3];
			++_g3;
			Scheduler.insertSorted(Scheduler.timeTasks,task2);
		}
		while(Scheduler.timeTasksScratchpad.length > 0) (HxOverrides().default).remove(Scheduler.timeTasksScratchpad,Scheduler.timeTasksScratchpad[0]);
	} else if(time > Scheduler.lastTime) {
		Scheduler.startTime -= time - Scheduler.lastTime;
		Scheduler.current = time;
		Scheduler.lastTime = time;
		Scheduler.executeTimeTasks(time);
	}
}
Scheduler.executeFrame = function() {
	var now = Scheduler.realTime() - Scheduler.startTime;
	var delta = now - Scheduler.lastTime;
	var frameEnd = Scheduler.current;
	if(delta >= 0) {
		if((kha_network_Session().default).the() == null) {
			if(delta > Scheduler.maxframetime) {
				Scheduler.startTime += delta - Scheduler.maxframetime;
				delta = Scheduler.maxframetime;
				frameEnd += delta;
			} else if(Scheduler.vsync) {
				var realdif = Scheduler.onedifhz;
				while(realdif < delta - Scheduler.onedifhz) realdif += Scheduler.onedifhz;
				delta = realdif;
				var _g1 = 0;
				var _g = Scheduler.DIF_COUNT - 2;
				while(_g1 < _g) {
					var i = _g1++;
					delta += Scheduler.deltas[i];
					Scheduler.deltas[i] = Scheduler.deltas[i + 1];
				}
				delta += Scheduler.deltas[Scheduler.DIF_COUNT - 2];
				delta /= Scheduler.DIF_COUNT;
				Scheduler.deltas[Scheduler.DIF_COUNT - 2] = realdif;
				frameEnd += delta;
			} else {
				var _g11 = 0;
				var _g2 = Scheduler.DIF_COUNT - 1;
				while(_g11 < _g2) {
					var i1 = _g11++;
					Scheduler.deltas[i1] = Scheduler.deltas[i1 + 1];
				}
				Scheduler.deltas[Scheduler.DIF_COUNT - 1] = delta;
				var next = 0;
				var _g12 = 0;
				var _g3 = Scheduler.DIF_COUNT;
				while(_g12 < _g3) {
					var i2 = _g12++;
					next += Scheduler.deltas[i2];
				}
				next /= Scheduler.DIF_COUNT;
				frameEnd += next;
			}
		} else {
			frameEnd += delta;
		}
		Scheduler.lastTime = frameEnd;
		if(!Scheduler.stopped) {
			Scheduler.current = frameEnd;
		}
		var _g4 = 0;
		var _g13 = Scheduler.pausedTimeTasks;
		while(_g4 < _g13.length) {
			var pausedTask = _g13[_g4];
			++_g4;
			pausedTask.next += delta;
		}
		if(Scheduler.stopped) {
			var _g5 = 0;
			var _g14 = Scheduler.timeTasks;
			while(_g5 < _g14.length) {
				var timeTask = _g14[_g5];
				++_g5;
				timeTask.next += delta;
			}
		}
		Scheduler.executeTimeTasks(frameEnd);
		var _g6 = 0;
		var _g15 = Scheduler.outdatedTimeTasks;
		while(_g6 < _g15.length) {
			var task = _g15[_g6];
			++_g6;
			if(task.next < frameEnd - 10.0) {
				Scheduler.timeTasksScratchpad.push(task);
			}
		}
		var _g7 = 0;
		var _g16 = Scheduler.timeTasksScratchpad;
		while(_g7 < _g16.length) {
			var task1 = _g16[_g7];
			++_g7;
			(HxOverrides().default).remove(Scheduler.outdatedTimeTasks,task1);
		}
		while(Scheduler.timeTasksScratchpad.length > 0) (HxOverrides().default).remove(Scheduler.timeTasksScratchpad,Scheduler.timeTasksScratchpad[0]);
	}
	Scheduler.sortFrameTasks();
	var _g8 = 0;
	var _g17 = Scheduler.frameTasks;
	while(_g8 < _g17.length) {
		var frameTask = _g17[_g8];
		++_g8;
		if(!Scheduler.stopped && !frameTask.paused && frameTask.active) {
			if(!frameTask.task()) {
				frameTask.active = false;
			}
		}
	}
	var _g9 = 0;
	var _g18 = Scheduler.frameTasks;
	while(_g9 < _g18.length) {
		var frameTask1 = _g18[_g9];
		++_g9;
		if(!frameTask1.active) {
			Scheduler.toDeleteFrame.push(frameTask1);
		}
	}
	while(Scheduler.toDeleteFrame.length > 0) (HxOverrides().default).remove(Scheduler.frameTasks,Scheduler.toDeleteFrame.pop());
}
Scheduler.executeTimeTasks = function(until) {
	while(Scheduler.timeTasks.length > 0) {
		Scheduler.activeTimeTask = Scheduler.timeTasks[0];
		if(Scheduler.activeTimeTask.next <= until) {
			Scheduler.activeTimeTask.next += Scheduler.activeTimeTask.period;
			(HxOverrides().default).remove(Scheduler.timeTasks,Scheduler.activeTimeTask);
			if(Scheduler.activeTimeTask.active && Scheduler.activeTimeTask.task()) {
				if(Scheduler.activeTimeTask.period > 0 && (Scheduler.activeTimeTask.duration == 0 || Scheduler.activeTimeTask.duration >= Scheduler.activeTimeTask.start + Scheduler.activeTimeTask.next)) {
					Scheduler.insertSorted(Scheduler.timeTasks,Scheduler.activeTimeTask);
				} else {
					Scheduler.archiveTimeTask(Scheduler.activeTimeTask,until);
				}
			} else {
				Scheduler.activeTimeTask.active = false;
				Scheduler.archiveTimeTask(Scheduler.activeTimeTask,until);
			}
		} else {
			break;
		}
	}
	Scheduler.activeTimeTask = null;
}
Scheduler.archiveTimeTask = function(timeTask,frameEnd) {
}
Scheduler.time = function() {
	return Scheduler.current;
}
Scheduler.realTime = function() {
	return (kha_System().default).get_time();
}
Scheduler.resetTime = function() {
	var now = (kha_System().default).get_time();
	var dif = now - Scheduler.startTime;
	Scheduler.startTime = now;
	var _g = 0;
	var _g1 = Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		timeTask.start -= dif;
		timeTask.next -= dif;
	}
	var _g11 = 0;
	var _g2 = Scheduler.DIF_COUNT;
	while(_g11 < _g2) {
		var i = _g11++;
		Scheduler.deltas[i] = 0;
	}
	Scheduler.current = 0;
	Scheduler.lastTime = 0;
}
Scheduler.addBreakableFrameTask = function(task,priority) {
	Scheduler.frameTasks.push(new (kha_FrameTask().default)(task,priority,++Scheduler.currentFrameTaskId));
	Scheduler.frame_tasks_sorted = false;
	return Scheduler.currentFrameTaskId;
}
Scheduler.addFrameTask = function(task,priority) {
	return Scheduler.addBreakableFrameTask(function() {
		task();
		return true;
	},priority);
}
Scheduler.pauseFrameTask = function(id,paused) {
	var _g = 0;
	var _g1 = Scheduler.frameTasks;
	while(_g < _g1.length) {
		var frameTask = _g1[_g];
		++_g;
		if(frameTask.id == id) {
			frameTask.paused = paused;
			break;
		}
	}
}
Scheduler.removeFrameTask = function(id) {
	var _g = 0;
	var _g1 = Scheduler.frameTasks;
	while(_g < _g1.length) {
		var frameTask = _g1[_g];
		++_g;
		if(frameTask.id == id) {
			frameTask.active = false;
			break;
		}
	}
}
Scheduler.generateGroupId = function() {
	return ++Scheduler.currentGroupId;
}
Scheduler.addBreakableTimeTaskToGroup = function(groupId,task,start,period,duration) {
	if(duration == null) {
		duration = 0;
	}
	if(period == null) {
		period = 0;
	}
	var t = new (kha_TimeTask().default)();
	t.active = true;
	t.task = task;
	t.id = ++Scheduler.currentTimeTaskId;
	t.groupId = groupId;
	t.start = Scheduler.current + start;
	t.period = 0;
	if(period != 0) {
		t.period = period;
	}
	t.duration = 0;
	if(duration != 0) {
		t.duration = t.start + duration;
	}
	t.next = t.start;
	Scheduler.insertSorted(Scheduler.timeTasks,t);
	return t.id;
}
Scheduler.addTimeTaskToGroup = function(groupId,task,start,period,duration) {
	if(duration == null) {
		duration = 0;
	}
	if(period == null) {
		period = 0;
	}
	return Scheduler.addBreakableTimeTaskToGroup(groupId,function() {
		task();
		return true;
	},start,period,duration);
}
Scheduler.addBreakableTimeTask = function(task,start,period,duration) {
	if(duration == null) {
		duration = 0;
	}
	if(period == null) {
		period = 0;
	}
	return Scheduler.addBreakableTimeTaskToGroup(0,task,start,period,duration);
}
Scheduler.addTimeTask = function(task,start,period,duration) {
	if(duration == null) {
		duration = 0;
	}
	if(period == null) {
		period = 0;
	}
	return Scheduler.addTimeTaskToGroup(0,task,start,period,duration);
}
Scheduler.getTimeTask = function(id) {
	if(Scheduler.activeTimeTask != null && Scheduler.activeTimeTask.id == id) {
		return Scheduler.activeTimeTask;
	}
	var _g = 0;
	var _g1 = Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.id == id) {
			return timeTask;
		}
	}
	var _g2 = 0;
	var _g11 = Scheduler.pausedTimeTasks;
	while(_g2 < _g11.length) {
		var timeTask1 = _g11[_g2];
		++_g2;
		if(timeTask1.id == id) {
			return timeTask1;
		}
	}
	return null;
}
Scheduler.pauseTimeTask = function(id,paused) {
	var timeTask = Scheduler.getTimeTask(id);
	if(timeTask != null) {
		Scheduler.pauseRunningTimeTask(timeTask,paused);
	}
	if(Scheduler.activeTimeTask != null && Scheduler.activeTimeTask.id == id) {
		Scheduler.activeTimeTask.paused = paused;
	}
}
Scheduler.pauseRunningTimeTask = function(timeTask,paused) {
	timeTask.paused = paused;
	if(paused) {
		(HxOverrides().default).remove(Scheduler.timeTasks,timeTask);
		Scheduler.pausedTimeTasks.push(timeTask);
	} else {
		Scheduler.insertSorted(Scheduler.timeTasks,timeTask);
		(HxOverrides().default).remove(Scheduler.pausedTimeTasks,timeTask);
	}
}
Scheduler.pauseTimeTasks = function(groupId,paused) {
	var _g = 0;
	var _g1 = Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.groupId == groupId) {
			Scheduler.pauseRunningTimeTask(timeTask,paused);
		}
	}
	if(Scheduler.activeTimeTask != null && Scheduler.activeTimeTask.groupId == groupId) {
		Scheduler.activeTimeTask.paused = paused;
	}
}
Scheduler.removeTimeTask = function(id) {
	var timeTask = Scheduler.getTimeTask(id);
	if(timeTask != null) {
		timeTask.active = false;
		(HxOverrides().default).remove(Scheduler.timeTasks,timeTask);
	}
}
Scheduler.removeTimeTasks = function(groupId) {
	var _g = 0;
	var _g1 = Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		if(timeTask.groupId == groupId) {
			timeTask.active = false;
			Scheduler.timeTasksScratchpad.push(timeTask);
		}
	}
	var _g2 = 0;
	var _g11 = Scheduler.timeTasksScratchpad;
	while(_g2 < _g11.length) {
		var timeTask1 = _g11[_g2];
		++_g2;
		(HxOverrides().default).remove(Scheduler.timeTasks,timeTask1);
	}
	while(Scheduler.timeTasksScratchpad.length > 0) (HxOverrides().default).remove(Scheduler.timeTasksScratchpad,Scheduler.timeTasksScratchpad[0]);
	if(Scheduler.activeTimeTask != null && Scheduler.activeTimeTask.groupId == groupId) {
		Scheduler.activeTimeTask.active = false;
	}
}
Scheduler.numTasksInSchedule = function() {
	return Scheduler.timeTasks.length + Scheduler.frameTasks.length;
}
Scheduler.insertSorted = function(list,task) {
	var _g1 = 0;
	var _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].next > task.next) {
			list.splice(i,0,task);
			return;
		}
	}
	list.push(task);
}
Scheduler.sortFrameTasks = function() {
	if(Scheduler.frame_tasks_sorted) {
		return;
	}
	Scheduler.frameTasks.sort(function(a,b) {
		if(a.priority > b.priority) {
			return 1;
		} else if(a.priority < b.priority) {
			return -1;
		} else {
			return 0;
		}
	});
	Scheduler.frame_tasks_sorted = true;
}
Scheduler.timeWarpSaveTime = 10.0
Scheduler.DIF_COUNT = 3
Scheduler.maxframetime = 0.5
Scheduler.startTime = 0
Scheduler.activeTimeTask = null

// Export

exports.default = Scheduler;