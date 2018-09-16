
import * as khaModule from 'kha';

declare namespace kha.math {

export class Vector4 {

	constructor(x?:number, y?:number, z?:number, w?:number);
	x:number;
	y:number;
	z:number;
	w:number;
	length:number;
	get_length():number;
	set_length(length:number):number;


}

}

export default kha.math.Vector4;