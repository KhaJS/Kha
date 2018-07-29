import {default as UInt_Impl_} from "./../../../../_UInt/UInt_Impl_";
import {default as Std} from "./../../../../Std";
import {default as MathTools} from "./../../../../kha/audio2/ogg/tools/MathTools";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis {

export class VorbisTools {

	static EOP:number;
	static integerDivideTable:ds.Vector;
	static M__PI:number;
	static DIVTAB_NUMER:number;
	static DIVTAB_DENOM:number;
	static INVERSE_DB_TABLE:Array<any>;
	static assert(b:any, p?:any):void;
	static neighbors(x:any, n:any):;
	static floatUnpack(x:any):number;
	static bitReverse(n:any):UInt;
	static pointCompare(a:any, b:any):number;
	static uintAsc(a:any, b:any):number;
	static lookup1Values(entries:any, dim:any):number;
	static computeWindow(n:any, window:any):void;
	static square(f:any):number;
	static computeBitReverse(n:any, rev:any):void;
	static computeTwiddleFactors(n:any, af:any, bf:any, cf:any):void;
	static drawLine(output:any, x0:any, y0:any, x1:any, y1:any, n:any):void;
	static predictPoint(x:any, x0:any, x1:any, y0:any, y1:any):number;
	static emptyFloatVector(len:any):ds.Vector;
	static copyVector(source:any):ds.Vector;


}

}

export default kha.audio2.ogg.vorbis.VorbisTools;