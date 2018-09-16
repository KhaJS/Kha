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
	static readBuf(buf:UInt8Array):number;
	static readBufOffset(buf:UInt8Array, offset:number, length:number):number;
	static readPixelsRaw(buffer:UInt8Array, data:UInt8Array, offset:number, numpixels:number):void;
	static readPixelsRawRLE(buffer:UInt8Array, data:UInt8Array, offset:number, scanline_width:number, num_scanlines:number):void;
	static readLine():string;
	static parse(bytes:any):any;


}

}

export default kha.internal.HdrFormat;