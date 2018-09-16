import {default as Resource} from "./../../kha/Resource";
import {default as Bytes} from "./../../haxe/io/Bytes";
import * as khaModule from 'kha';

declare namespace kha.internal {

export class BytesBlob {

	constructor(bytes:Bytes);
	bytes:Bytes;
	sub(start:number, length:number):khaModule.Blob;
	length:number;
	get_length():number;
	writeU8(position:number, value:number):void;
	readU8(position:number):number;
	readS8(position:number):number;
	readU16BE(position:number):number;
	readU16LE(position:number):number;
	readU32LE(position:number):number;
	readU32BE(position:number):number;
	readS16BE(position:number):number;
	readS16LE(position:number):number;
	readS32LE(position:number):number;
	readS32BE(position:number):number;
	readF32LE(position:number):number;
	readF32BE(position:number):number;
	toString():string;
	readUtf8Char(position:any):number;
	readUtf8Block(buffer:any, position:any):string;
	readUtf8String():string;
	toBytes():Bytes;
	unload():void;
	static bufferSize:number;
	static fromBytes(bytes:Bytes):khaModule.Blob;
	static alloc(size:number):khaModule.Blob;
	static readF32(i:number):number;
	static bit(value:number, position:number):boolean;
	static toText(chars:any, length:number):string;


}

}

export default kha.internal.BytesBlob;