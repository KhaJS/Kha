
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastMatrix3 {

	constructor(_00:khaModule.FastFloat, _10:khaModule.FastFloat, _20:khaModule.FastFloat, _01:khaModule.FastFloat, _11:khaModule.FastFloat, _21:khaModule.FastFloat, _02:khaModule.FastFloat, _12:khaModule.FastFloat, _22:khaModule.FastFloat);
	
	
	
	
	
	
	
	
	
	static width:number;
	static height:number;
	static fromMatrix3(m:khaModule.math.Matrix3):khaModule.math.FastMatrix3;


}

}

export default kha.math.FastMatrix3;