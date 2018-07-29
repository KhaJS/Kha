import {default as SystemImpl} from "./../../kha/SystemImpl";
import {default as Usage} from "./../../kha/graphics4/Usage";
import {default as Type} from "./../../Type";
import {default as Std} from "./../../Std";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class VertexBuffer {

	constructor(vertexCount:any, structure:any, usage:any, instanceDataStepRate?:any, canRead?:any);
	
	_data:khaModule.arrays.Float32Array;
	mySize:number;
	myStride:number;
	sizes:Array<any>;
	offsets:Array<any>;
	
	instanceDataStepRate:number;
	delete():void;
	lock(start?:any, count?:any):khaModule.arrays.Float32Array;
	unlock():void;
	stride():number;
	count():number;
	set(offset:any):number;


}

}

export default kha.graphics4.VertexBuffer;