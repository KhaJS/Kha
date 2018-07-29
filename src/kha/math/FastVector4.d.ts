
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastVector4 {

	constructor(x?:any, y?:any, z?:any, w?:any);
	
	
	
	
	
	get_length():khaModule.FastFloat;
	set_length(length:any):khaModule.FastFloat;
	toString():string;
	static fromVector4(v:any):khaModule.math.FastVector4;


}

}

export default kha.math.FastVector4;