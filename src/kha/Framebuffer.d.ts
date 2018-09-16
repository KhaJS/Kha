import {default as Canvas} from "./../kha/Canvas";
import {default as System} from "./../kha/System";
import * as khaModule from 'kha';

declare namespace kha {

export class Framebuffer {

	constructor(windowId:number, g1:khaModule.graphics1.Graphics, g2:khaModule.graphics2.Graphics, g4:khaModule.graphics4.Graphics);
	windowId:number;
	graphics1:khaModule.graphics1.Graphics;
	graphics2:khaModule.graphics2.Graphics;
	graphics4:khaModule.graphics4.Graphics;
	init(g1:khaModule.graphics1.Graphics, g2:khaModule.graphics2.Graphics, g4:khaModule.graphics4.Graphics):void;
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