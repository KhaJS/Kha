import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as Error} from "./../../haxe/io/Error";
import {default as FPHelper} from "./../../haxe/io/FPHelper";
import * as khaModule from 'kha';

declare namespace haxe.io {

export class Output {

	bigEndian:boolean;
	writeByte(c:any):void;
	writeBytes(s:any, pos:any, len:any):number;
	write(s:any):void;
	writeFloat(x:any):void;
	writeInt32(x:any):void;


}

}

export default haxe.io.Output;