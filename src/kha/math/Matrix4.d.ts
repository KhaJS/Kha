import {default as Vector3} from "./../../kha/math/Vector3";
import * as khaModule from 'kha';

declare namespace kha.math {

export class Matrix4 {

	constructor(_00:any, _10:any, _20:any, _30:any, _01:any, _11:any, _21:any, _31:any, _02:any, _12:any, _22:any, _32:any, _03:any, _13:any, _23:any, _33:any);
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
	static orthogonalProjection(left:any, right:any, bottom:any, top:any, zn:any, zf:any):khaModule.math.Matrix4;
	static perspectiveProjection(fovY:any, aspect:any, zn:any, zf:any):khaModule.math.Matrix4;
	static lookAt(eye:any, at:any, up:any):khaModule.math.Matrix4;


}

}

export default kha.math.Matrix4;