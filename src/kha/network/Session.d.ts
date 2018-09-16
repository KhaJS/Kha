import {default as Log} from "./../../haxe/Log";
import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as Scheduler} from "./../../kha/Scheduler";
import {default as LocalClient} from "./../../kha/network/LocalClient";
import {default as Reflect} from "./../../Reflect";
import {default as Type} from "./../../Type";
import {default as SyncBuilder} from "./../../kha/network/SyncBuilder";
import {default as Network} from "./../../kha/network/Network";
import {default as IntMap} from "./../../haxe/ds/IntMap";
import {default as System} from "./../../kha/System";
import * as khaModule from 'kha';

declare namespace kha.network {

export class Session {

	constructor(maxPlayers:number, address:string, port:number);
	entities:Map;
	controllers:Map;
	maxPlayers:number;
	currentPlayers:number;
	ping:number;
	address:string;
	port:number;
	startCallback():void;
	refusedCallback():void;
	resetCallback():void;
	localClient:Client;
	network:Network;
	updateTaskId:number;
	pingTaskId:number;
	me:Client;
	get_me():Client;
	addEntity(entity:khaModule.network.Entity):void;
	addController(controller:khaModule.network.Controller):void;
	sendControllerUpdate(id:number, bytes:Bytes):void;
	sendPing():void;
	sendPlayerUpdate():void;
	receive(bytes:Bytes, client?:any):void;
	executeRPC(bytes:Bytes):void;
	waitForStart(callback:any, refuseCallback:any, errorCallback:any, closeCallback:any, resCallback:any):void;
	reset():void;
	update():void;
	sendToServer(bytes:Bytes):void;
	static START:number;
	static ENTITY_UPDATES:number;
	static CONTROLLER_UPDATES:number;
	static REMOTE_CALL:number;
	static PING:number;
	static SESSION_ERROR:number;
	static PLAYER_UPDATES:number;
	static RPC_SERVER:number;
	static RPC_ALL:number;
	static instance:khaModule.network.Session;
	static the():khaModule.network.Session;


}

}

export default kha.network.Session;