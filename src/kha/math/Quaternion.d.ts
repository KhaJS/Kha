import {default as Matrix4} from "./../../kha/math/Matrix4";
import {default as Vector3} from "./../../kha/math/Vector3";
import * as khaModule from 'kha';

declare namespace kha.math {

export class Quaternion {

	constructor(x?:number, y?:number, z?:number, w?:number);
	values:Array<any>;
	slerp(t:number, q:khaModule.math.Quaternion):khaModule.math.Quaternion;
	rotated(b:khaModule.math.Quaternion):khaModule.math.Quaternion;
	scaled(scale:number):khaModule.math.Quaternion;
	scale(scale:number):void;
	matrix():Matrix4;
	get(index:number):number;
	set(index:number, value:number):void;
	x:number;
	y:number;
	z:number;
	w:number;
	length:number;
	get_x():number;
	set_x(value:number):number;
	get_y():number;
	set_y(value:number):number;
	get_z():number;
	set_z(value:number):number;
	get_w():number;
	set_w(value:number):number;
	get_length():number;
	set_length(length:number):number;
	addVector(vec:Vector3):khaModule.math.Quaternion;
	add(q:khaModule.math.Quaternion):khaModule.math.Quaternion;
	sub(q:khaModule.math.Quaternion):khaModule.math.Quaternion;
	mult(r:khaModule.math.Quaternion):khaModule.math.Quaternion;
	normalize():void;
	dot(q:khaModule.math.Quaternion):number;
	getEulerAngles(A1:number, A2:number, A3:number, S?:number, D?:number):Vector3;
	static fromAxisAngle(axis:Vector3, radians:number):khaModule.math.Quaternion;
	static AXIS_X:number;
	static AXIS_Y:number;
	static AXIS_Z:number;


}

}

export default kha.math.Quaternion;