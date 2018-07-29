import {default as MathTools} from "./../../../../kha/audio2/ogg/tools/MathTools";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.tools {

export class Mdct {

	static inverseTransform(buffer:any, n:any, a:any, b:any, c:any, bitReverse:any):void;
	static step3Iter0Loop(n:any, e:any, i_off:any, k_off:any, a:any):void;
	static step3InnerRLoop(lim:any, e:any, d0:any, k_off:any, a:any, k1:any):void;
	static step3InnerSLoop(n:any, e:any, i_off:any, k_off:any, a:any, aOffset0:any, aOffset1:any, k0:any):void;
	static iter54(e:any, zOffset:any):void;
	static step3InnerSLoopLd654(n:any, e:any, i_off:any, a:any, baseN:any):void;


}

}

export default kha.audio2.ogg.tools.Mdct;