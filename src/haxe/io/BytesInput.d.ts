import {default as Input} from "./../../haxe/io/Input";
import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as Eof} from "./../../haxe/io/Eof";
import {default as Error} from "./../../haxe/io/Error";
import * as khaModule from 'kha';

declare namespace haxe.io {

export class BytesInput extends haxe_io_Input {

	constructor(b:any, pos?:any, len?:any);
	b:;
	pos:number;
	len:number;
	totlen:number;
	position:number;
	length:number;
	get_length():number;
	set_position(p:any):number;
	readByte():number;
	readBytes(buf:any, pos:any, len:any):number;


}

}

export default haxe.io.BytesInput;