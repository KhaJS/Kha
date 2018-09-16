import {default as Std} from "./../Std";
import {default as HxOverrides} from "./../HxOverrides";
import {default as Image} from "./../kha/Image";
import {default as TextureFormat} from "./../kha/graphics4/TextureFormat";
import * as khaModule from 'kha';

declare namespace kha {

export class KravurImage {

	constructor(size:number, ascent:number, descent:number, lineGap:number, width:number, height:number, chars:any, pixels:khaModule.Blob);
	mySize:number;
	chars:any;
	texture:Image;
	width:number;
	height:number;
	baseline:number;
	getTexture():Image;
	getBakedQuad(q:khaModule.AlignedQuad, char_index:number, xpos:number, ypos:number):khaModule.AlignedQuad;
	getCharWidth(charIndex:number):number;
	getHeight():number;
	stringWidth(string:string):number;
	charactersWidth(characters:Array<any>, start:number, length:number):number;
	getBaselinePosition():number;
	static gaps:Array<any>;


}

}

export default kha.KravurImage;