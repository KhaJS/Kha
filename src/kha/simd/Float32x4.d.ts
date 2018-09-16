
import * as khaModule from 'kha';

declare namespace kha.simd {

export class Float32x4 {

	constructor(_0:khaModule.FastFloat, _1:khaModule.FastFloat, _2:khaModule.FastFloat, _3:khaModule.FastFloat);
	
	
	
	
	static create():khaModule.simd.Float32x4;
	static loadAllFast(t:khaModule.FastFloat):khaModule.simd.Float32x4;
	static load(a:number, b:number, c:number, d:number):khaModule.simd.Float32x4;
	static loadFast(a:khaModule.FastFloat, b:khaModule.FastFloat, c:khaModule.FastFloat, d:khaModule.FastFloat):khaModule.simd.Float32x4;
	static get(t:khaModule.simd.Float32x4, index:number):number;
	static getFast(t:khaModule.simd.Float32x4, index:number):khaModule.FastFloat;
	static abs(t:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static add(a:khaModule.simd.Float32x4, b:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static div(a:khaModule.simd.Float32x4, b:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static mul(a:khaModule.simd.Float32x4, b:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static neg(t:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static reciprocalApproximation(t:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static reciprocalSqrtApproximation(t:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static sub(a:khaModule.simd.Float32x4, b:khaModule.simd.Float32x4):khaModule.simd.Float32x4;
	static sqrt(t:khaModule.simd.Float32x4):khaModule.simd.Float32x4;


}

}

export default kha.simd.Float32x4;