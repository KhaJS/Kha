import {default as FastVector3} from "./../../kha/math/FastVector3";
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastMatrix4 {

	constructor(_00:khaModule.FastFloat, _10:khaModule.FastFloat, _20:khaModule.FastFloat, _30:khaModule.FastFloat, _01:khaModule.FastFloat, _11:khaModule.FastFloat, _21:khaModule.FastFloat, _31:khaModule.FastFloat, _02:khaModule.FastFloat, _12:khaModule.FastFloat, _22:khaModule.FastFloat, _32:khaModule.FastFloat, _03:khaModule.FastFloat, _13:khaModule.FastFloat, _23:khaModule.FastFloat, _33:khaModule.FastFloat);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	static width:number;
	static height:number;
	static fromMatrix4(m:khaModule.math.Matrix4):khaModule.math.FastMatrix4;
	static orthogonalProjection(left:khaModule.FastFloat, right:khaModule.FastFloat, bottom:khaModule.FastFloat, top:khaModule.FastFloat, zn:khaModule.FastFloat, zf:khaModule.FastFloat):khaModule.math.FastMatrix4;
	static perspectiveProjection(fovY:khaModule.FastFloat, aspect:khaModule.FastFloat, zn:khaModule.FastFloat, zf:khaModule.FastFloat):khaModule.math.FastMatrix4;
	static lookAt(eye:FastVector3, at:FastVector3, up:FastVector3):khaModule.math.FastMatrix4;


}

}

export default kha.math.FastMatrix4;