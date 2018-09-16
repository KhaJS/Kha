
import * as khaModule from 'kha';

declare namespace kha.arrays._Uint32Array {

export class Uint32Array_Impl_ {

	static _new(elements:number):khaModule.arrays.Uint32Array;
	static length:number;
	static get_length(this:any):number;
	static set(this:any, index:number, value:number):number;
	static get(this:any, index:number):number;
	static data(this:any):any;
	static arrayRead(this:any, index:number):number;
	static arrayWrite(this:any, index:number, value:number):number;
	static subarray(this:any, start:number, end?:any):khaModule.arrays.Uint32Array;


}

}

export default kha.arrays._Uint32Array.Uint32Array_Impl_;