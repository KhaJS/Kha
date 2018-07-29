import {default as Resource} from "./../kha/Resource";
import {default as Graphics} from "./../kha/graphics2/Graphics";
import {default as KravurImage} from "./../kha/KravurImage";
import {default as Stbtt_bakedchar} from "./../kha/graphics2/truetype/Stbtt_bakedchar";
import {default as BytesBlob} from "./../kha/internal/BytesBlob";
import {default as StbTruetype} from "./../kha/graphics2/truetype/StbTruetype";
import {default as Stbtt_fontinfo} from "./../kha/graphics2/truetype/Stbtt_fontinfo";
import {default as Std} from "./../Std";
import {default as IntMap} from "./../haxe/ds/IntMap";
import * as khaModule from 'kha';

declare namespace kha {

export class Kravur {

	constructor(blob:any);
	oldGlyphs:Array<any>;
	
	images:Map;
	_get(fontSize:any, glyphs?:any):KravurImage;
	height(fontSize:any):number;
	width(fontSize:any, str:any):number;
	widthOfCharacters(fontSize:any, characters:any, start:any, length:any):number;
	baseline(fontSize:any):number;
	unload():void;
	static fromBytes(bytes:any):Kravur;


}

}

export default kha.Kravur;