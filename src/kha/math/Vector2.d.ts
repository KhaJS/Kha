
import * as khaModule from 'kha';

declare namespace kha.math {

export class Vector2 {

	constructor(x?:any, y?:any);
	x:number;
	y:number;
	length:number;
	get_length():number;
	set_length(length:any):number;


}

}

export default kha.math.Vector2;