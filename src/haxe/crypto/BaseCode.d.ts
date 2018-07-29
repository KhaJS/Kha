import {default as Std} from "./../../Std";
import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import * as khaModule from 'kha';

declare namespace haxe.crypto {

export class BaseCode {

	constructor(base:any);
	base:Bytes;
	nbits:number;
	encodeBytes(b:any):Bytes;


}

}

export default haxe.crypto.BaseCode;