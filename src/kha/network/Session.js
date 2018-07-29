// Class: kha.network.Session

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function haxe_Log() {return require("./../../haxe/Log");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function kha_Scheduler() {return require("./../../kha/Scheduler");}
function kha_network_LocalClient() {return require("./../../kha/network/LocalClient");}
function Reflect() {return require("./../../Reflect");}
function Type() {return require("./../../Type");}
function kha_network_SyncBuilder() {return require("./../../kha/network/SyncBuilder");}
function kha_network_Network() {return require("./../../kha/network/Network");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function kha_System() {return require("./../../kha/System");}

// Constructor

var Session = function(maxPlayers,address,port) {
	this.ping = 1;
	this.currentPlayers = 0;
	this.controllers = new (haxe_ds_IntMap().default)();
	this.entities = new (haxe_ds_IntMap().default)();
	Session.instance = this;
	this.maxPlayers = maxPlayers;
	this.address = address;
	this.port = port;
}

// Meta

Session.__name__ = ["kha","network","Session"];
Session.prototype = {
	get_me: function() {
		return this.localClient;
	},
	addEntity: function(entity) {
		this.entities.set(entity._id(),entity);
	},
	addController: function(controller) {
		(haxe_Log().default).trace("Adding controller id " + controller._id(),{ fileName : "Session.hx", lineNumber : 88, className : "kha.network.Session", methodName : "addController"});
		controller._inputBufferIndex = 0;
		this.controllers.set(controller._id(),controller);
	},
	sendControllerUpdate: function(id,bytes) {
		if(this.controllers.exists(id)) {
			if(this.controllers.get(id)._inputBuffer.length < this.controllers.get(id)._inputBufferIndex + 4 + bytes.length) {
				var newBuffer = (haxe_io_Bytes().default).alloc(this.controllers.get(id)._inputBufferIndex + 4 + bytes.length);
				newBuffer.blit(0,this.controllers.get(id)._inputBuffer,0,this.controllers.get(id)._inputBufferIndex);
				this.controllers.get(id)._inputBuffer = newBuffer;
			}
			this.controllers.get(id)._inputBuffer.setInt32(this.controllers.get(id)._inputBufferIndex,bytes.length);
			this.controllers.get(id)._inputBuffer.blit(this.controllers.get(id)._inputBufferIndex + 4,bytes,0,bytes.length);
			this.controllers.get(id)._inputBufferIndex += 4 + bytes.length;
		}
	},
	sendPing: function() {
		var bytes = (haxe_io_Bytes().default).alloc(5);
		bytes.set(0,4);
		bytes.setFloat(1,(kha_Scheduler().default).realTime());
		this.sendToServer(bytes);
	},
	sendPlayerUpdate: function() {
	},
	receive: function(bytes,client) {
		var _g = bytes.get(0);
		switch(_g) {
		case 0:
			var index = bytes.get(1);
			this.localClient = new (kha_network_LocalClient().default)(index);
			(kha_Scheduler().default).resetTime();
			this.startCallback();
			break;
		case 1:
			var time = bytes.getDouble(1);
			var offset = 9;
			var entity = this.entities.iterator();
			while(entity.hasNext()) {
				var entity1 = entity.next();
				entity1._receive(offset,bytes);
				offset += entity1._size();
			}
			(kha_Scheduler().default).warp(time);
			break;
		case 3:
			var _g1 = bytes.get(1);
			switch(_g1) {
			case 0:
				break;
			case 1:
				this.executeRPC(bytes);
				break;
			}
			break;
		case 4:
			var sendTime = bytes.getFloat(1);
			this.ping = (kha_Scheduler().default).realTime() - sendTime;
			break;
		case 5:
			this.refusedCallback();
			break;
		case 6:
			this.currentPlayers = bytes.getInt32(1);
			break;
		}
	},
	executeRPC: function(bytes) {
		var args = [];
		var syncId = bytes.getInt32(2);
		var index = 6;
		var classnamelength = bytes.getUInt16(index);
		index += 2;
		var classname = "";
		var _g1 = 0;
		var _g = classnamelength;
		while(_g1 < _g) {
			var i = _g1++;
			classname += String.fromCharCode(bytes.get(index));
			++index;
		}
		var methodnamelength = bytes.getUInt16(index);
		index += 2;
		var methodname = "";
		var _g11 = 0;
		var _g2 = methodnamelength;
		while(_g11 < _g2) {
			var i1 = _g11++;
			methodname += String.fromCharCode(bytes.get(index));
			++index;
		}
		while(index < bytes.length) {
			var type = bytes.get(index);
			++index;
			switch(type) {
			case 66:
				var value = bytes.get(index) == 1;
				++index;
				(haxe_Log().default).trace("Bool: " + (value == null ? "null" : "" + value),{ fileName : "Session.hx", lineNumber : 295, className : "kha.network.Session", methodName : "executeRPC"});
				args.push(value);
				break;
			case 70:
				var value1 = bytes.getDouble(index);
				index += 8;
				(haxe_Log().default).trace("Float: " + value1,{ fileName : "Session.hx", lineNumber : 300, className : "kha.network.Session", methodName : "executeRPC"});
				args.push(value1);
				break;
			case 73:
				var value2 = bytes.getInt32(index);
				index += 4;
				(haxe_Log().default).trace("Int: " + value2,{ fileName : "Session.hx", lineNumber : 305, className : "kha.network.Session", methodName : "executeRPC"});
				args.push(value2);
				break;
			case 83:
				var length = bytes.getUInt16(index);
				index += 2;
				var str = "";
				var _g12 = 0;
				var _g3 = length;
				while(_g12 < _g3) {
					var i2 = _g12++;
					str += String.fromCharCode(bytes.get(index));
					++index;
				}
				(haxe_Log().default).trace("String: " + str,{ fileName : "Session.hx", lineNumber : 315, className : "kha.network.Session", methodName : "executeRPC"});
				args.push(str);
				break;
			default:
				(haxe_Log().default).trace("Unknown argument type.",{ fileName : "Session.hx", lineNumber : 318, className : "kha.network.Session", methodName : "executeRPC"});
			}
		}
		if(syncId == -1) {
			(Reflect().default).callMethod(null,(Reflect().default).field((Type().default).resolveClass(classname),methodname + "_remotely"),args);
		} else {
			(Reflect().default).callMethod((kha_network_SyncBuilder().default).objects[syncId],(Reflect().default).field((kha_network_SyncBuilder().default).objects[syncId],methodname + "_remotely"),args);
		}
	},
	waitForStart: function(callback,refuseCallback,errorCallback,closeCallback,resCallback) {
		var _gthis = this;
		this.startCallback = callback;
		this.refusedCallback = refuseCallback;
		this.resetCallback = resCallback;
		this.network = new (kha_network_Network().default)(this.address,this.port,errorCallback,function() {
			closeCallback();
			_gthis.reset();
		});
		this.network.listen(function(bytes) {
			_gthis.receive(bytes);
		});
		this.updateTaskId = (kha_Scheduler().default).addFrameTask($bind(this,this.update),0);
		this.ping = 1;
		this.pingTaskId = (kha_Scheduler().default).addTimeTask($bind(this,this.sendPing),0,1);
	},
	reset: function() {
		(kha_Scheduler().default).removeFrameTask(this.updateTaskId);
		(kha_Scheduler().default).removeTimeTask(this.pingTaskId);
		this.currentPlayers = 0;
		this.ping = 1;
		this.controllers = new (haxe_ds_IntMap().default)();
		this.entities = new (haxe_ds_IntMap().default)();
		this.resetCallback();
	},
	update: function() {
		var controller = this.controllers.iterator();
		while(controller.hasNext()) {
			var controller1 = controller.next();
			if(controller1._inputBufferIndex > 0) {
				var bytes = (haxe_io_Bytes().default).alloc(22 + controller1._inputBufferIndex);
				bytes.set(0,2);
				bytes.setInt32(1,controller1._id());
				bytes.setDouble(5,(kha_Scheduler().default).time());
				bytes.setInt32(13,(kha_System().default).windowWidth(0));
				bytes.setInt32(17,(kha_System().default).windowHeight(0));
				bytes.set(21,(Type().default).enumIndex((kha_System().default).get_screenRotation()));
				bytes.blit(22,controller1._inputBuffer,0,controller1._inputBufferIndex);
				this.sendToServer(bytes);
				controller1._inputBufferIndex = 0;
			}
		}
	},
	sendToServer: function(bytes) {
		this.network.send(bytes,false);
	}
};
Session.prototype.__class__ = Session.prototype.constructor = $hxClasses["kha.network.Session"] = Session;

// Init



// Statics

Session.the = function() {
	return Session.instance;
}
Session.START = 0
Session.ENTITY_UPDATES = 1
Session.CONTROLLER_UPDATES = 2
Session.REMOTE_CALL = 3
Session.PING = 4
Session.SESSION_ERROR = 5
Session.PLAYER_UPDATES = 6
Session.RPC_SERVER = 0
Session.RPC_ALL = 1
Session.instance = null

// Export

exports.default = Session;