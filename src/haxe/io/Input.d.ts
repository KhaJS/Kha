import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as Error} from "./../../haxe/io/Error";
import {default as Boot} from "./../../js/Boot";
import {default as Eof} from "./../../haxe/io/Eof";
import {default as Bytes} from "./../../haxe/io/Bytes";
import * as khaModule from 'kha';

declare namespace haxe.io {

export class Input {

	bigEndian:boolean;
	readByte():number;
	readBytes(s:any, pos:any, len:any):number;
	readFullBytes(s:any, pos:any, len:any):void;
	read(nbytes:any):Bytes;
	readInt32():number;
	readString(len:any):string;


}

}

export default haxe.io.Input;