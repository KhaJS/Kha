import {default as Image} from "./../kha/Image";
import {default as Graphics1} from "./../kha/graphics2/Graphics1";
import {default as Graphics2} from "./../kha/js/graphics4/Graphics2";
import {default as Graphics} from "./../kha/js/graphics4/Graphics";
import {default as Std} from "./../Std";
import {default as Color_Impl_} from "./../kha/_Color/Color_Impl_";
import {default as SystemImpl} from "./../kha/SystemImpl";
import {default as Type} from "./../Type";
import {default as TextureFormat} from "./../kha/graphics4/TextureFormat";
import {default as Log} from "./../haxe/Log";
import {default as Boot} from "./../js/Boot";
import {default as Bytes} from "./../haxe/io/Bytes";
import {default as Browser} from "./../js/Browser";
import * as khaModule from 'kha';

declare namespace kha {

export class WebGLImage extends kha_Image {

	constructor(width:any, height:any, format:any, renderTarget:any, depthStencilFormat:any, samples:any);
	
	video:;
	
	myWidth:number;
	myHeight:number;
	
	renderTarget:boolean;
	samples:number;
	
	
	
	
	graphics1:Graphics;
	graphics2:Graphics;
	graphics4:Graphics;
	depthStencilFormat:khaModule.graphics4.DepthStencilFormat;
	get_g1():Graphics;
	get_g2():Graphics;
	get_g4():Graphics;
	get_width():number;
	get_height():number;
	get_realWidth():number;
	get_realHeight():number;
	isOpaque(x:any, y:any):boolean;
	at(x:any, y:any):Color_Impl_;
	createImageData():void;
	createTexture():void;
	initDepthStencilBuffer(depthStencilFormat:any):void;
	set(stage:any):void;
	setDepth(stage:any):void;
	setDepthStencilFrom(image:any):void;
	bytesToArray(bytes:any):;
	bytes:Bytes;
	lock(level?:any):Bytes;
	unlock():void;
	pixels:;
	getPixels():Bytes;
	unload():void;
	generateMipmaps(levels:any):void;
	setMipmaps(mipmaps:any):void;
	
	static GL_RGBA16F:number;
	static GL_RGBA32F:number;
	static GL_R16F:number;
	static GL_R32F:number;
	static GL_RED:number;
	static GL_DEPTH_COMPONENT24:number;
	static GL_DEPTH24_STENCIL8:number;
	static GL_DEPTH32F_STENCIL8:number;
	static canvas:;
	static init():void;
	static upperPowerOfTwo(v:any):number;
	static formatByteSize(format:any):number;


}

}

export default kha.WebGLImage;