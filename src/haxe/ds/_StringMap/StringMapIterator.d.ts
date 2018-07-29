
import * as khaModule from 'kha';

declare namespace haxe.ds._StringMap {

export class StringMapIterator {

	constructor(map:any, keys:any);
	map:ds.StringMap;
	keys:Array<any>;
	index:number;
	count:number;
	hasNext():boolean;
	next():;


}

}

export default haxe.ds._StringMap.StringMapIterator;