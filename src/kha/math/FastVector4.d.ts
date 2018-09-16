
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastVector4 {

	constructor(x?:khaModule.FastFloat, y?:khaModule.FastFloat, z?:khaModule.FastFloat, w?:khaModule.FastFloat);
	
	
	
	
	
	get_length():khaModule.FastFloat;
	set_length(length:khaModule.FastFloat):khaModule.FastFloat;
	toString():string;
	static fromVector4(v:khaModule.math.Vector4):khaModule.math.FastVector4;


}

}

export default kha.math.FastVector4;