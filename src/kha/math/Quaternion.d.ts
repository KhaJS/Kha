import {default as Matrix4} from "./../../kha/math/Matrix4";
import {default as Vector3} from "./../../kha/math/Vector3";
import * as khaModule from 'kha';

declare namespace kha.math {

export class Quaternion {

	constructor(x?:any, y?:any, z?:any, w?:any);
	values:Array<any>;
	slerp(t:any, q:any):khaModule.math.Quaternion;
	rotated(b:any):khaModule.math.Quaternion;
	scaled(scale:any):khaModule.math.Quaternion;
	scale(scale:any):void;
	matrix():Matrix4;
	get(index:any):number;
	set(index:any, value:any):void;
	x:number;
	y:number;
	z:number;
	w:number;
	length:number;
	get_x():number;
	set_x(value:any):number;
	get_y():number;
	set_y(value:any):number;
	get_z():number;
	set_z(value:any):number;
	get_w():number;
	set_w(value:any):number;
	get_length():number;
	set_length(length:any):number;
	addVector(vec:any):khaModule.math.Quaternion;
	add(q:any):khaModule.math.Quaternion;
	sub(q:any):khaModule.math.Quaternion;
	mult(r:any):khaModule.math.Quaternion;
	normalize():void;
	dot(q:any):number;
	getEulerAngles(A1:any, A2:any, A3:any, S?:any, D?:any):Vector3;
	static fromAxisAngle(axis:any, radians:any):khaModule.math.Quaternion;
	static AXIS_X:number;
	static AXIS_Y:number;
	static AXIS_Z:number;


}

}

export default kha.math.Quaternion;