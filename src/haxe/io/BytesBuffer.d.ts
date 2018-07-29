import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as Error} from "./../../haxe/io/Error";
import {default as Bytes} from "./../../haxe/io/Bytes";
import * as khaModule from 'kha';

declare namespace haxe.io {

export class BytesBuffer {

	constructor();
	b:Array<any>;
	length:number;
	addByte(byte:any):void;
	addBytes(src:any, pos:any, len:any):void;
	getBytes():Bytes;


}

}

export default haxe.io.BytesBuffer;