import {default as Resource} from "./../kha/Resource";
import {default as Canvas} from "./../kha/Canvas";
import {default as TextureFormat} from "./../kha/graphics4/TextureFormat";
import {default as Usage} from "./../kha/graphics4/Usage";
import {default as SystemImpl} from "./../kha/SystemImpl";
import {default as CanvasImage} from "./../kha/CanvasImage";
import {default as WebGLImage} from "./../kha/WebGLImage";
import {default as Base64} from "./../haxe/crypto/Base64";
import {default as Boot} from "./../js/Boot";
import {default as Browser} from "./../js/Browser";
import * as khaModule from 'kha';

declare namespace kha {

export class Image {

	isOpaque(x:number, y:number):boolean;
	at(x:number, y:number):khaModule.Color;
	unload():void;
	lock(level?:number):any;
	unlock():void;
	getPixels():any;
	generateMipmaps(levels:number):void;
	setMipmaps(mipmaps:Array<any>):void;
	setDepthStencilFrom(image:Image):void;
	clear(x:number, y:number, z:number, width:number, height:number, depth:number, color:khaModule.Color):void;
	width:number;
	get_width():number;
	height:number;
	get_height():number;
	depth:number;
	get_depth():number;
	realWidth:number;
	get_realWidth():number;
	realHeight:number;
	get_realHeight():number;
	g1:Graphics;
	get_g1():Graphics;
	g2:Graphics;
	get_g2():Graphics;
	g4:Graphics;
	get_g4():Graphics;
	static create(width:number, height:number, format?:any, usage?:any):Image;
	static create3D(width:number, height:number, depth:number, format?:any, usage?:any):Image;
	static createRenderTarget(width:number, height:number, format?:any, depthStencil?:khaModule.graphics4.DepthStencilFormat, antiAliasingSamples?:number, contextId?:number):Image;
	static fromImage(image:any, readable:boolean):Image;
	static fromBytes(bytes:any, width:number, height:number, format?:any, usage?:any):Image;
	static fromBytes3D(bytes:any, width:number, height:number, depth:number, format?:any, usage?:any):Image;
	static fromEncodedBytes(bytes:any, fileExtention:string, doneCallback:any, errorCallback:any, readable?:boolean):void;
	static fromVideo(video:khaModule.js.Video):Image;
	static maxSize:number;
	static get_maxSize():number;
	static nonPow2Supported:boolean;
	static get_nonPow2Supported():boolean;


}

}

export default kha.Image;