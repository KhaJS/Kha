import {default as Resource} from "./../../kha/Resource";
import {default as Bytes} from "./../../haxe/io/Bytes";
import * as khaModule from 'kha';

declare namespace kha.internal {

export class BytesBlob {

	constructor(bytes:any);
	bytes:Bytes;
	sub(start:any, length:any):khaModule.Blob;
	length:number;
	get_length():number;
	writeU8(position:any, value:any):void;
	readU8(position:any):number;
	readS8(position:any):number;
	readU16BE(position:any):number;
	readU16LE(position:any):number;
	readU32LE(position:any):number;
	readU32BE(position:any):number;
	readS16BE(position:any):number;
	readS16LE(position:any):number;
	readS32LE(position:any):number;
	readS32BE(position:any):number;
	readF32LE(position:any):number;
	readF32BE(position:any):number;
	toString():string;
	readUtf8Char(position:any):number;
	readUtf8Block(buffer:any, position:any):string;
	readUtf8String():string;
	toBytes():Bytes;
	unload():void;
	static bufferSize:number;
	static fromBytes(bytes:any):khaModule.Blob;
	static alloc(size:any):khaModule.Blob;
	static readF32(i:any):number;
	static bit(value:any, position:any):boolean;
	static toText(chars:any, length:any):string;


}

}

export default kha.internal.BytesBlob;