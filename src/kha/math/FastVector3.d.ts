
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastVector3 {

	constructor(x?:khaModule.FastFloat, y?:khaModule.FastFloat, z?:khaModule.FastFloat);
	
	
	
	
	get_length():khaModule.FastFloat;
	set_length(length:khaModule.FastFloat):khaModule.FastFloat;
	toString():string;
	static fromVector3(v:khaModule.math.Vector3):khaModule.math.FastVector3;


}

}

export default kha.math.FastVector3;