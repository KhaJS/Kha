import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as Error} from "./../../haxe/io/Error";
import {default as StringTools} from "./../../StringTools";
import * as khaModule from 'kha';

declare namespace haxe.io {

export class Bytes {

	constructor(data:any);
	length:number;
	b:;
	data:;
	get(pos:any):number;
	set(pos:any, v:any):void;
	blit(pos:any, src:any, srcpos:any, len:any):void;
	sub(pos:any, len:any):io.Bytes;
	initData():void;
	getDouble(pos:any):number;
	getFloat(pos:any):number;
	setDouble(pos:any, v:any):void;
	setFloat(pos:any, v:any):void;
	getUInt16(pos:any):number;
	getInt32(pos:any):number;
	setInt32(pos:any, v:any):void;
	getString(pos:any, len:any):string;
	toString():string;
	getData():io.BytesData;
	static alloc(length:any):io.Bytes;
	static ofString(s:any):io.Bytes;
	static ofData(b:any):io.Bytes;


}

}

export default haxe.io.Bytes;