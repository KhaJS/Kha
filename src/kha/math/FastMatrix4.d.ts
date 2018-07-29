import {default as FastVector3} from "./../../kha/math/FastVector3";
import * as khaModule from 'kha';

declare namespace kha.math {

export class FastMatrix4 {

	constructor(_00:any, _10:any, _20:any, _30:any, _01:any, _11:any, _21:any, _31:any, _02:any, _12:any, _22:any, _32:any, _03:any, _13:any, _23:any, _33:any);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	static width:number;
	static height:number;
	static fromMatrix4(m:any):khaModule.math.FastMatrix4;
	static orthogonalProjection(left:any, right:any, bottom:any, top:any, zn:any, zf:any):khaModule.math.FastMatrix4;
	static perspectiveProjection(fovY:any, aspect:any, zn:any, zf:any):khaModule.math.FastMatrix4;
	static lookAt(eye:any, at:any, up:any):khaModule.math.FastMatrix4;


}

}

export default kha.math.FastMatrix4;