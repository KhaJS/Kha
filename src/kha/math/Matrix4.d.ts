import {default as Vector3} from "./../../kha/math/Vector3";
import * as khaModule from 'kha';

declare namespace kha.math {

export class Matrix4 {

	constructor(_00:number, _10:number, _20:number, _30:number, _01:number, _11:number, _21:number, _31:number, _02:number, _12:number, _22:number, _32:number, _03:number, _13:number, _23:number, _33:number);
	_00:number;
	_10:number;
	_20:number;
	_30:number;
	_01:number;
	_11:number;
	_21:number;
	_31:number;
	_02:number;
	_12:number;
	_22:number;
	_32:number;
	_03:number;
	_13:number;
	_23:number;
	_33:number;
	static width:number;
	static height:number;
	static orthogonalProjection(left:number, right:number, bottom:number, top:number, zn:number, zf:number):khaModule.math.Matrix4;
	static perspectiveProjection(fovY:number, aspect:number, zn:number, zf:number):khaModule.math.Matrix4;
	static lookAt(eye:Vector3, at:Vector3, up:Vector3):khaModule.math.Matrix4;


}

}

export default kha.math.Matrix4;