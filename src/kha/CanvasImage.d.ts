import {default as Image} from "./../kha/Image";
import {default as Graphics1} from "./../kha/graphics2/Graphics1";
import {default as Browser} from "./../js/Browser";
import {default as CanvasGraphics} from "./../kha/js/CanvasGraphics";
import {default as Std} from "./../Std";
import {default as Color_Impl_} from "./../kha/_Color/Color_Impl_";
import {default as SystemImpl} from "./../kha/SystemImpl";
import {default as Bytes} from "./../haxe/io/Bytes";
import {default as TextureFormat} from "./../kha/graphics4/TextureFormat";
import * as khaModule from 'kha';

declare namespace kha {

export class CanvasImage extends kha_Image {

	constructor(width:number, height:number, format:TextureFormat, renderTarget:boolean);
	
	video:any;
	
	myWidth:number;
	myHeight:number;
	
	renderTarget:boolean;
	
	graphics1:Graphics;
	g2canvas:CanvasGraphics;
	get_g1():Graphics;
	get_g2():Graphics;
	get_g4():Graphics;
	get_width():number;
	get_height():number;
	get_realWidth():number;
	get_realHeight():number;
	isOpaque(x:number, y:number):boolean;
	at(x:number, y:number):Color_Impl_;
	createImageData():void;
	
	createTexture():void;
	set(stage:number):void;
	bytes:Bytes;
	lock(level?:number):Bytes;
	unlock():void;
	unload():void;
	
	static init():void;
	static upperPowerOfTwo(v:number):number;


}

}

export default kha.CanvasImage;