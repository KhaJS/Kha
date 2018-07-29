import {default as StringTools} from "./../StringTools";
import {default as Std} from "./../Std";
import {default as HxOverrides} from "./../HxOverrides";
import {default as HaxeError} from "./../js/_Boot/HaxeError";
import {default as Reflect} from "./../Reflect";
import {default as Type} from "./../Type";
import {default as ObjectMap} from "./../haxe/ds/ObjectMap";
import {default as StringMap} from "./../haxe/ds/StringMap";
import {default as List} from "./../List";
import {default as IntMap} from "./../haxe/ds/IntMap";
import {default as Bytes} from "./../haxe/io/Bytes";
import {default as DefaultResolver} from "./../haxe/_Unserializer/DefaultResolver";
import * as khaModule from 'kha';

declare namespace haxe {

export class Unserializer {

	constructor(buf:any);
	buf:string;
	pos:number;
	length:number;
	cache:Array<any>;
	scache:Array<any>;
	
	get(p:any):number;
	readDigits():number;
	readFloat():number;
	unserializeObject(o:any):void;
	unserializeEnum(edecl:any, tag:any):;
	unserialize():;
	
	static BASE64:string;
	static CODES:Array<any>;
	static initCodes():Array<any>;
	static run(v:any):;


}

}

export default haxe.Unserializer;