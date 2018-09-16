
import * as khaModule from 'kha';

declare namespace kha.arrays._Float32Array {

export class Float32Array_Impl_ {

	static _new(elements:number):khaModule.arrays.Float32Array;
	static length:number;
	static get_length(this:any):number;
	static set(this:any, index:number, value:khaModule.FastFloat):khaModule.FastFloat;
	static get(this:any, index:number):khaModule.FastFloat;
	static data(this:any):any;
	static arrayRead(this:any, index:number):khaModule.FastFloat;
	static arrayWrite(this:any, index:number, value:khaModule.FastFloat):khaModule.FastFloat;
	static subarray(this:any, start:number, end?:any):khaModule.arrays.Float32Array;


}

}

export default kha.arrays._Float32Array.Float32Array_Impl_;