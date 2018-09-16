import {default as Resource} from "./../../kha/Resource";
import {default as IntMap} from "./../../haxe/ds/IntMap";
import {default as Browser} from "./../../js/Browser";
import {default as Boot} from "./../../js/Boot";
import {default as CanvasImage} from "./../../kha/CanvasImage";
import {default as BytesBlob} from "./../../kha/internal/BytesBlob";
import * as khaModule from 'kha';

declare namespace kha.js {

export class Font {

	constructor(blob:Blob);
	kravur:khaModule.Kravur;
	images:Map;
	height(fontSize:number):number;
	width(fontSize:number, str:string):number;
	widthOfCharacters(fontSize:number, characters:Array<any>, start:number, length:number):number;
	baseline(fontSize:number):number;
	getImage(fontSize:number, color:khaModule.Color, glyphs?:any):any;
	unload():void;
	static fromBytes(bytes:Bytes):khaModule.js.Font;


}

}

export default kha.js.Font;