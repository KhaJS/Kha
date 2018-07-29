import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as BaseCode} from "./../../haxe/crypto/BaseCode";
import * as khaModule from 'kha';

declare namespace haxe.crypto {

export class Base64 {

	static CHARS:string;
	static BYTES:Bytes;
	static encode(bytes:any, complement?:any):string;


}

}

export default haxe.crypto.Base64;