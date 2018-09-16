import {default as UInt_Impl_} from "./../../../../_UInt/UInt_Impl_";
import {default as Std} from "./../../../../Std";
import {default as MathTools} from "./../../../../kha/audio2/ogg/tools/MathTools";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis {

export class VorbisTools {

	static EOP:number;
	static integerDivideTable:any;
	static M__PI:number;
	static DIVTAB_NUMER:number;
	static DIVTAB_DENOM:number;
	static INVERSE_DB_TABLE:Array<any>;
	static assert(b:boolean, p?:any):void;
	static neighbors(x:any, n:number):any;
	static floatUnpack(x:UInt):number;
	static bitReverse(n:UInt):UInt;
	static pointCompare(a:khaModule.audio2.ogg.vorbis.data.IntPoint, b:khaModule.audio2.ogg.vorbis.data.IntPoint):number;
	static uintAsc(a:UInt, b:UInt):number;
	static lookup1Values(entries:number, dim:number):number;
	static computeWindow(n:number, window:any):void;
	static square(f:number):number;
	static computeBitReverse(n:number, rev:any):void;
	static computeTwiddleFactors(n:number, af:any, bf:any, cf:any):void;
	static drawLine(output:any, x0:number, y0:number, x1:number, y1:number, n:number):void;
	static predictPoint(x:number, x0:number, x1:number, y0:number, y1:number):number;
	static emptyFloatVector(len:number):any;
	static copyVector(source:any):any;


}

}

export default kha.audio2.ogg.vorbis.VorbisTools;