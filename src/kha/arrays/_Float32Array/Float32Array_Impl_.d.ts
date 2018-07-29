
import * as khaModule from 'kha';

declare namespace kha.arrays._Float32Array {

export class Float32Array_Impl_ {

	static _new(elements:any):khaModule.arrays.Float32Array;
	static length:number;
	static get_length(this:any):number;
	static set(this:any, index:any, value:any):khaModule.FastFloat;
	static get(this:any, index:any):khaModule.FastFloat;
	static data(this:any):;
	static arrayRead(this:any, index:any):khaModule.FastFloat;
	static arrayWrite(this:any, index:any, value:any):khaModule.FastFloat;
	static subarray(this:any, start:any, end?:any):khaModule.arrays.Float32Array;


}

}

export default kha.arrays._Float32Array.Float32Array_Impl_;