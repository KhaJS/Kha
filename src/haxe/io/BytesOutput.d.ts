import {default as Output} from "./../../haxe/io/Output";
import {default as BytesBuffer} from "./../../haxe/io/BytesBuffer";
import * as khaModule from 'kha';

declare namespace haxe.io {

export class BytesOutput extends haxe_io_Output {

	constructor();
	b:BytesBuffer;
	length:number;
	writeByte(c:any):void;
	writeBytes(buf:any, pos:any, len:any):number;
	getBytes():Bytes;


}

}

export default haxe.io.BytesOutput;