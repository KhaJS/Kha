
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastMatrix3 {

	constructor(_00:any, _10:any, _20:any, _01:any, _11:any, _21:any, _02:any, _12:any, _22:any);
	
	
	
	
	
	
	
	
	
	static width:number;
	static height:number;
	static fromMatrix3(m:any):khaModule.math.FastMatrix3;


}

}

export default kha.math.FastMatrix3;