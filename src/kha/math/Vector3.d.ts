
import * as khaModule from 'kha';

declare namespace kha.math {

export class Vector3 {

	constructor(x?:any, y?:any, z?:any);
	x:number;
	y:number;
	z:number;
	length:number;
	get_length():number;
	set_length(length:any):number;


}

}

export default kha.math.Vector3;