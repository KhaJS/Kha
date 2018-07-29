import {default as EReg} from "./../../EReg";
import {default as Log} from "./../../haxe/Log";
import {default as UInt8Array_Impl_} from "./../../haxe/io/_UInt8Array/UInt8Array_Impl_";
import {default as Std} from "./../../Std";
import * as khaModule from 'kha';

declare namespace kha.internal {

export class HdrFormat {

	constructor();
	static radiancePattern:EReg;
	static commentPattern:EReg;
	static gammaPattern:EReg;
	static exposurePattern:EReg;
	static formatPattern:EReg;
	static widthHeightPattern:EReg;
	static buffer:UInt8Array;
	static bufferLength:number;
	static fileOffset:number;
	static readBuf(buf:any):number;
	static readBufOffset(buf:any, offset:any, length:any):number;
	static readPixelsRaw(buffer:any, data:any, offset:any, numpixels:any):void;
	static readPixelsRawRLE(buffer:any, data:any, offset:any, scanline_width:any, num_scanlines:any):void;
	static readLine():string;
	static parse(bytes:any):;


}

}

export default kha.internal.HdrFormat;