
import * as khaModule from 'kha';

declare namespace kha.arrays._Uint32Array {

export class Uint32Array_Impl_ {

	static _new(elements:any):khaModule.arrays.Uint32Array;
	static length:number;
	static get_length(this:any):number;
	static set(this:any, index:any, value:any):number;
	static get(this:any, index:any):number;
	static data(this:any):;
	static arrayRead(this:any, index:any):number;
	static arrayWrite(this:any, index:any, value:any):number;
	static subarray(this:any, start:any, end?:any):khaModule.arrays.Uint32Array;


}

}

export default kha.arrays._Uint32Array.Uint32Array_Impl_;