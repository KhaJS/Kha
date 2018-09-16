import {default as Resource} from "./../../kha/Resource";
import {default as Canvas} from "./../../kha/Canvas";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import {default as Type} from "./../../Type";
import {default as TextureFormat} from "./../../kha/graphics4/TextureFormat";
import {default as Graphics} from "./../../kha/js/graphics4/Graphics";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class CubeMap {

	constructor(size:number, format:TextureFormat, renderTarget:boolean, depthStencilFormat:khaModule.graphics4.DepthStencilFormat);
	myWidth:number;
	myHeight:number;
	
	renderTarget:boolean;
	depthStencilFormat:khaModule.graphics4.DepthStencilFormat;
	graphics4:Graphics;
	
	
	
	isDepthAttachment:boolean;
	createTexture():void;
	initDepthStencilBuffer(depthStencilFormat:khaModule.graphics4.DepthStencilFormat):void;
	set(stage:number):void;
	setDepth(stage:number):void;
	unload():void;
	lock(level?:number):any;
	unlock():void;
	width:number;
	get_width():number;
	height:number;
	get_height():number;
	g1:Graphics;
	get_g1():Graphics;
	g2:Graphics;
	get_g2():Graphics;
	g4:Graphics;
	get_g4():Graphics;
	static GL_RGBA16F:number;
	static GL_RGBA32F:number;
	static GL_R16F:number;
	static GL_R32F:number;
	static GL_DEPTH_COMPONENT24:number;
	static GL_DEPTH24_STENCIL8:number;
	static GL_DEPTH32F_STENCIL8:number;
	static createRenderTarget(size:number, format?:any, depthStencil?:any, contextId?:number):khaModule.graphics4.CubeMap;


}

}

export default kha.graphics4.CubeMap;