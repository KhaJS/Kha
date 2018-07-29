import {default as Canvas} from "./../kha/Canvas";
import {default as System} from "./../kha/System";
import * as khaModule from 'kha';

declare namespace kha {

export class Framebuffer {

	constructor(windowId:any, g1:any, g2:any, g4:any);
	windowId:number;
	graphics1:khaModule.graphics1.Graphics;
	graphics2:khaModule.graphics2.Graphics;
	graphics4:khaModule.graphics4.Graphics;
	init(g1:any, g2:any, g4:any):void;
	g1:khaModule.graphics1.Graphics;
	get_g1():khaModule.graphics1.Graphics;
	g2:khaModule.graphics2.Graphics;
	get_g2():khaModule.graphics2.Graphics;
	g4:khaModule.graphics4.Graphics;
	get_g4():khaModule.graphics4.Graphics;
	width:number;
	get_width():number;
	height:number;
	get_height():number;


}

}

export default kha.Framebuffer;