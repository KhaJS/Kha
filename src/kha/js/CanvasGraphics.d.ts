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
	
	begin(clear?:any, clearColor?:any):void;
	clear(color?:any):void;
	end():void;
	drawImage(img:any, x:any, y:any):void;
	drawScaledSubImage(image:any, sx:any, sy:any, sw:any, sh:any, dx:any, dy:any, dw:any, dh:any):void;
	set_color(color:any):Color_Impl_;
	get_color():Color_Impl_;
	get_imageScaleQuality():ImageScaleQuality;
	set_imageScaleQuality(value:any):ImageScaleQuality;
	drawRect(x:any, y:any, width:any, height:any, strength?:any):void;
	fillRect(x:any, y:any, width:any, height:any):void;
	drawArc(cx:any, cy:any, radius:any, sAngle:any, eAngle:any, strength?:any, ccw?:any):void;
	drawCircle(cx:any, cy:any, radius:any, strength?:any):void;
	_drawArc(cx:any, cy:any, radius:any, sAngle:any, eAngle:any, strength:any, ccw:any):void;
	fillArc(cx:any, cy:any, radius:any, sAngle:any, eAngle:any, ccw?:any):void;
	fillCircle(cx:any, cy:any, radius:any):void;
	bakedQuadCache:AlignedQuad;
	drawString(text:any, x:any, y:any):void;
	set_font(font:any):Font;
	get_font():Font;
	drawLine(x1:any, y1:any, x2:any, y2:any, strength?:any):void;
	fillTriangle(x1:any, y1:any, x2:any, y2:any, x3:any, y3:any):void;
	scissor(x:any, y:any, width:any, height:any):void;
	disableScissor():void;
	drawVideo(video:any, x:any, y:any, width:any, height:any):void;
	setTransformation(transformation:any):void;
	static instance:khaModule.js.CanvasGraphics;
	static stringWidth(font:any, text:any):number;


}

}

export default kha.js.CanvasGraphics;