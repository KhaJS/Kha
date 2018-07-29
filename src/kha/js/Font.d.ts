import {default as Resource} from "./../../kha/Resource";
import {default as IntMap} from "./../../haxe/ds/IntMap";
import {default as Browser} from "./../../js/Browser";
import {default as Boot} from "./../../js/Boot";
import {default as CanvasImage} from "./../../kha/CanvasImage";
import {default as BytesBlob} from "./../../kha/internal/BytesBlob";
import * as khaModule from 'kha';

declare namespace kha.js {

export class Font {

	constructor(blob:any);
	kravur:khaModule.Kravur;
	images:Map;
	height(fontSize:any):number;
	width(fontSize:any, str:any):number;
	widthOfCharacters(fontSize:any, characters:any, start:any, length:any):number;
	baseline(fontSize:any):number;
	getImage(fontSize:any, color:any, glyphs?:any):;
	unload():void;
	static fromBytes(bytes:any):khaModule.js.Font;


}

}

export default kha.js.Font;