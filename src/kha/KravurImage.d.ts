import {default as Std} from "./../Std";
import {default as HxOverrides} from "./../HxOverrides";
import {default as Image} from "./../kha/Image";
import {default as TextureFormat} from "./../kha/graphics4/TextureFormat";
import * as khaModule from 'kha';

declare namespace kha {

export class KravurImage {

	constructor(size:any, ascent:any, descent:any, lineGap:any, width:any, height:any, chars:any, pixels:any);
	mySize:number;
	chars:ds.Vector;
	texture:Image;
	width:number;
	height:number;
	baseline:number;
	getTexture():Image;
	getBakedQuad(q:any, char_index:any, xpos:any, ypos:any):khaModule.AlignedQuad;
	getCharWidth(charIndex:any):number;
	getHeight():number;
	stringWidth(string:any):number;
	charactersWidth(characters:any, start:any, length:any):number;
	getBaselinePosition():number;
	static gaps:Array<any>;


}

}

export default kha.KravurImage;