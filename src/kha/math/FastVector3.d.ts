
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastVector3 {

	constructor(x?:any, y?:any, z?:any);
	
	
	
	
	get_length():khaModule.FastFloat;
	set_length(length:any):khaModule.FastFloat;
	toString():string;
	static fromVector3(v:any):khaModule.math.FastVector3;


}

}

export default kha.math.FastVector3;