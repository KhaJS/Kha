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

	isOpaque(x:any, y:any):boolean;
	at(x:any, y:any):khaModule.Color;
	unload():void;
	lock(level?:any):io.Bytes;
	unlock():void;
	getPixels():io.Bytes;
	generateMipmaps(levels:any):void;
	setMipmaps(mipmaps:any):void;
	setDepthStencilFrom(image:any):void;
	clear(x:any, y:any, z:any, width:any, height:any, depth:any, color:any):void;
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
	static create(width:any, height:any, format?:any, usage?:any):Image;
	static create3D(width:any, height:any, depth:any, format?:any, usage?:any):Image;
	static createRenderTarget(width:any, height:any, format?:any, depthStencil?:any, antiAliasingSamples?:any, contextId?:any):Image;
	static fromImage(image:any, readable:any):Image;
	static fromBytes(bytes:any, width:any, height:any, format?:any, usage?:any):Image;
	static fromBytes3D(bytes:any, width:any, height:any, depth:any, format?:any, usage?:any):Image;
	static fromEncodedBytes(bytes:any, fileExtention:any, doneCallback:any, errorCallback:any, readable?:any):void;
	static fromVideo(video:any):Image;
	static maxSize:number;
	static get_maxSize():number;
	static nonPow2Supported:boolean;
	static get_nonPow2Supported():boolean;


}

}

export default kha.Image;