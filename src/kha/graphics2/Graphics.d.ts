import {default as ImageScaleQuality} from "./../../kha/graphics2/ImageScaleQuality";
import {default as FastMatrix3} from "./../../kha/math/FastMatrix3";
import * as khaModule from 'kha';

declare namespace kha.graphics2 {

export class Graphics {

	constructor();
	begin(clear?:any, clearColor?:any):void;
	end():void;
	flush():void;
	clear(color?:any):void;
	drawImage(img:any, x:any, y:any):void;
	drawSubImage(img:any, x:any, y:any, sx:any, sy:any, sw:any, sh:any):void;
	drawScaledImage(img:any, dx:any, dy:any, dw:any, dh:any):void;
	drawScaledSubImage(image:any, sx:any, sy:any, sw:any, sh:any, dx:any, dy:any, dw:any, dh:any):void;
	drawRect(x:any, y:any, width:any, height:any, strength?:any):void;
	fillRect(x:any, y:any, width:any, height:any):void;
	drawString(text:any, x:any, y:any):void;
	drawCharacters(text:any, start:any, length:any, x:any, y:any):void;
	drawLine(x1:any, y1:any, x2:any, y2:any, strength?:any):void;
	drawVideo(video:any, x:any, y:any, width:any, height:any):void;
	fillTriangle(x1:any, y1:any, x2:any, y2:any, x3:any, y3:any):void;
	
	
	get_imageScaleQuality():ImageScaleQuality;
	set_imageScaleQuality(value:any):ImageScaleQuality;
	get_mipmapScaleQuality():ImageScaleQuality;
	set_mipmapScaleQuality(value:any):ImageScaleQuality;
	color:khaModule.Color;
	get_color():khaModule.Color;
	set_color(color:any):khaModule.Color;
	
	get_font():khaModule.Font;
	set_font(font:any):khaModule.Font;
	fontSize:number;
	get_fontSize():number;
	set_fontSize(value:any):number;
	transformation:FastMatrix3;
	pushTransformation(transformation:any):void;
	popTransformation():FastMatrix3;
	get_transformation():FastMatrix3;
	set_transformation(transformation:any):FastMatrix3;
	translation(tx:any, ty:any):FastMatrix3;
	translate(tx:any, ty:any):void;
	pushTranslation(tx:any, ty:any):void;
	rotation(angle:any, centerx:any, centery:any):FastMatrix3;
	rotate(angle:any, centerx:any, centery:any):void;
	pushRotation(angle:any, centerx:any, centery:any):void;
	opacity:number;
	pushOpacity(opacity:any):void;
	popOpacity():number;
	get_opacity():number;
	set_opacity(opacity:any):number;
	scissor(x:any, y:any, width:any, height:any):void;
	disableScissor():void;
	pipe:khaModule.graphics4.PipelineState;
	pipeline:khaModule.graphics4.PipelineState;
	get_pipeline():khaModule.graphics4.PipelineState;
	set_pipeline(pipeline:any):khaModule.graphics4.PipelineState;
	transformations:Array<any>;
	opacities:Array<any>;
	myFontSize:number;
	setTransformation(transformation:any):void;
	setOpacity(opacity:any):void;
	setPipeline(pipeline:any):void;
	static fontGlyphs:Array<any>;


}

}

export default kha.graphics2.Graphics;