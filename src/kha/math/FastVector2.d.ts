
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastVector2 {

	constructor(x?:khaModule.FastFloat, y?:khaModule.FastFloat);
	
	
	
	get_length():khaModule.FastFloat;
	set_length(length:khaModule.FastFloat):khaModule.FastFloat;
	toString():string;
	static fromVector2(v:khaModule.math.Vector2):khaModule.math.FastVector2;


}

}

export default kha.math.FastVector2;