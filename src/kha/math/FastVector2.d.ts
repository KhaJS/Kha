
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastVector2 {

	constructor(x?:any, y?:any);
	
	
	
	get_length():khaModule.FastFloat;
	set_length(length:any):khaModule.FastFloat;
	toString():string;
	static fromVector2(v:any):khaModule.math.FastVector2;


}

}

export default kha.math.FastVector2;