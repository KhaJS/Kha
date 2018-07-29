import {default as IMap} from "./../../haxe/IMap";
import {default as StringMapIterator} from "./../../haxe/ds/_StringMap/StringMapIterator";
import * as khaModule from 'kha';

declare namespace haxe.ds {

export class StringMap {

	constructor();
	
	
	isReserved(key:any):boolean;
	set(key:any, value:any):void;
	get(key:any):;
	exists(key:any):boolean;
	setReserved(key:any, value:any):void;
	getReserved(key:any):;
	existsReserved(key:any):boolean;
	arrayKeys():Array<any>;
	iterator():Iterator;


}

}

export default haxe.ds.StringMap;