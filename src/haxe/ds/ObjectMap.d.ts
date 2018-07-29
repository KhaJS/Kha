import {default as IMap} from "./../../haxe/IMap";
import {default as HxOverrides} from "./../../HxOverrides";
import * as khaModule from 'kha';

declare namespace haxe.ds {

export class ObjectMap {

	constructor();
	
	set(key:any, value:any):void;
	keys():;
	iterator():;
	static count:number;
	static assignId(obj:any):number;
	static getId(obj:any):number;


}

}

export default haxe.ds.ObjectMap;