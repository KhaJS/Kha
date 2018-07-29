
import * as khaModule from 'kha';

declare namespace kha.math {

export class Vector4 {

	constructor(x?:any, y?:any, z?:any, w?:any);
	x:number;
	y:number;
	z:number;
	w:number;
	length:number;
	get_length():number;
	set_length(length:any):number;


}

}

export default kha.math.Vector4;