import {default as IMap} from "./../../haxe/IMap";
import {default as HxOverrides} from "./../../HxOverrides";
import * as khaModule from 'kha';

declare namespace haxe.ds {

export class IntMap {

	constructor();
	
	set(key:any, value:any):void;
	get(key:any):;
	exists(key:any):boolean;
	keys():;
	iterator():;


}

}

export default haxe.ds.IntMap;