import {default as SystemImpl} from "./../../kha/SystemImpl";
import {default as Usage} from "./../../kha/graphics4/Usage";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class IndexBuffer {

	constructor(indexCount:any, usage:any, canRead?:any);
	
	_data:khaModule.arrays.Uint32Array;
	mySize:number;
	
	delete():void;
	lock(start?:any, count?:any):khaModule.arrays.Uint32Array;
	unlock():void;
	set():void;
	count():number;


}

}

export default kha.graphics4.IndexBuffer;