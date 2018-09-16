import {default as Graphics} from "./../../kha/graphics2/Graphics";
import {default as Boot} from "./../../js/Boot";
import {default as CanvasImage} from "./../../kha/CanvasImage";
import {default as ImageScaleQuality} from "./../../kha/graphics2/ImageScaleQuality";
import {default as HxOverrides} from "./../../HxOverrides";
import {default as Font} from "./../../kha/js/Font";
import {default as Video} from "./../../kha/js/Video";
import {default as AlignedQuad} from "./../../kha/AlignedQuad";
import {default as Color_Impl_} from "./../../kha/_Color/Color_Impl_";
import * as khaModule from 'kha';

declare namespace kha.js {

export class CanvasGraphics extends kha_graphics2_Graphics {

	constructor(canvas:any);
	
	webfont:Font;
	myColor:Color_Impl_;
	
	begin(clear?:boolean, clearColor?:any):void;
	clear(color?:any):void;
	end():void;
	drawImage(img:Image, x:number, y:number):void;
	drawScaledSubImage(image:Image, sx:number, sy:number, sw:number, sh:number, dx:number, dy:number, dw:number, dh:number):void;
	set_color(color:Color_Impl_):Color_Impl_;
	get_color():Color_Impl_;
	get_imageScaleQuality():ImageScaleQuality;
	set_imageScaleQuality(value:ImageScaleQuality):ImageScaleQuality;
	drawRect(x:number, y:number, width:number, height:number, strength?:number):void;
	fillRect(x:number, y:number, width:number, height:number):void;
	drawArc(cx:number, cy:number, radius:number, sAngle:number, eAngle:number, strength?:number, ccw?:boolean):void;
	drawCircle(cx:number, cy:number, radius:number, strength?:number):void;
	_drawArc(cx:number, cy:number, radius:number, sAngle:number, eAngle:number, strength:number, ccw:boolean):void;
	fillArc(cx:number, cy:number, radius:number, sAngle:number, eAngle:number, ccw?:boolean):void;
	fillCircle(cx:number, cy:number, radius:number):void;
	bakedQuadCache:AlignedQuad;
	drawString(text:string, x:number, y:number):void;
	set_font(font:Font):Font;
	get_font():Font;
	drawLine(x1:number, y1:number, x2:number, y2:number, strength?:number):void;
	fillTriangle(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number):void;
	scissor(x:number, y:number, width:number, height:number):void;
	disableScissor():void;
	drawVideo(video:Video, x:number, y:number, width:number, height:number):void;
	setTransformation(transformation:khaModule.math.FastMatrix3):void;
	static instance:khaModule.js.CanvasGraphics;
	static stringWidth(font:Font, text:string):number;


}

}

export default kha.js.CanvasGraphics;