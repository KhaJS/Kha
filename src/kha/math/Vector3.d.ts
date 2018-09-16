
import * as khaModule from 'kha';

declare namespace kha.math {

export class Vector3 {

	constructor(x?:number, y?:number, z?:number);
	x:number;
	y:number;
	z:number;
	length:number;
	get_length():number;
	set_length(length:number):number;


}

}

export default kha.math.Vector3;