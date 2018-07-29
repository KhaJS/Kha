
import * as khaModule from 'kha';

declare namespace kha.simd {

export class Float32x4 {

	constructor(_0:any, _1:any, _2:any, _3:any);
	
	
	
	
	static create():khaModule.simd.Float32x4;
	static loadAllFast(t:any):khaModule.simd.Float32x4;
	static load(a:any, b:any, c:any, d:any):khaModule.simd.Float32x4;
	static loadFast(a:any, b:any, c:any, d:any):khaModule.simd.Float32x4;
	static get(t:any, index:any):number;
	static getFast(t:any, index:any):khaModule.FastFloat;
	static abs(t:any):khaModule.simd.Float32x4;
	static add(a:any, b:any):khaModule.simd.Float32x4;
	static div(a:any, b:any):khaModule.simd.Float32x4;
	static mul(a:any, b:any):khaModule.simd.Float32x4;
	static neg(t:any):khaModule.simd.Float32x4;
	static reciprocalApproximation(t:any):khaModule.simd.Float32x4;
	static reciprocalSqrtApproximation(t:any):khaModule.simd.Float32x4;
	static sub(a:any, b:any):khaModule.simd.Float32x4;
	static sqrt(t:any):khaModule.simd.Float32x4;


}

}

export default kha.simd.Float32x4;