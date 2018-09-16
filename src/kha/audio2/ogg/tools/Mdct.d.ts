import {default as MathTools} from "./../../../../kha/audio2/ogg/tools/MathTools";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.tools {

export class Mdct {

	static inverseTransform(buffer:any, n:number, a:any, b:any, c:any, bitReverse:any):void;
	static step3Iter0Loop(n:number, e:any, i_off:number, k_off:number, a:any):void;
	static step3InnerRLoop(lim:number, e:any, d0:number, k_off:number, a:any, k1:number):void;
	static step3InnerSLoop(n:number, e:any, i_off:number, k_off:number, a:any, aOffset0:number, aOffset1:number, k0:number):void;
	static iter54(e:any, zOffset:number):void;
	static step3InnerSLoopLd654(n:number, e:any, i_off:number, a:any, baseN:number):void;


}

}

export default kha.audio2.ogg.tools.Mdct;