import {default as ImageScaleQuality} from "./../../kha/graphics2/ImageScaleQuality";
import {default as FastMatrix3} from "./../../kha/math/FastMatrix3";
import * as khaModule from 'kha';

declare namespace kha.graphics2 {

export class Graphics {

	constructor();
	begin(clear?:boolean, clearColor?:any):void;
	end():void;
	flush():void;
	clear(color?:any):void;
	drawImage(img:Image, x:khaModule.FastFloat, y:khaModule.FastFloat):void;
	drawSubImage(img:Image, x:khaModule.FastFloat, y:khaModule.FastFloat, sx:khaModule.FastFloat, sy:khaModule.FastFloat, sw:khaModule.FastFloat, sh:khaModule.FastFloat):void;
	drawScaledImage(img:Image, dx:khaModule.FastFloat, dy:khaModule.FastFloat, dw:khaModule.FastFloat, dh:khaModule.FastFloat):void;
	drawScaledSubImage(image:Image, sx:khaModule.FastFloat, sy:khaModule.FastFloat, sw:khaModule.FastFloat, sh:khaModule.FastFloat, dx:khaModule.FastFloat, dy:khaModule.FastFloat, dw:khaModule.FastFloat, dh:khaModule.FastFloat):void;
	drawRect(x:number, y:number, width:number, height:number, strength?:number):void;
	fillRect(x:number, y:number, width:number, height:number):void;
	drawString(text:string, x:number, y:number):void;
	drawCharacters(text:Array<any>, start:number, length:number, x:number, y:number):void;
	drawLine(x1:number, y1:number, x2:number, y2:number, strength?:number):void;
	drawVideo(video:khaModule.Video, x:number, y:number, width:number, height:number):void;
	fillTriangle(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number):void;
	
	
	get_imageScaleQuality():ImageScaleQuality;
	set_imageScaleQuality(value:ImageScaleQuality):ImageScaleQuality;
	get_mipmapScaleQuality():ImageScaleQuality;
	set_mipmapScaleQuality(value:ImageScaleQuality):ImageScaleQuality;
	color:khaModule.Color;
	get_color():khaModule.Color;
	set_color(color:khaModule.Color):khaModule.Color;
	
	get_font():khaModule.Font;
	set_font(font:khaModule.Font):khaModule.Font;
	fontSize:number;
	get_fontSize():number;
	set_fontSize(value:number):number;
	transformation:FastMatrix3;
	pushTransformation(transformation:FastMatrix3):void;
	popTransformation():FastMatrix3;
	get_transformation():FastMatrix3;
	set_transformation(transformation:FastMatrix3):FastMatrix3;
	translation(tx:khaModule.FastFloat, ty:khaModule.FastFloat):FastMatrix3;
	translate(tx:khaModule.FastFloat, ty:khaModule.FastFloat):void;
	pushTranslation(tx:khaModule.FastFloat, ty:khaModule.FastFloat):void;
	rotation(angle:khaModule.FastFloat, centerx:khaModule.FastFloat, centery:khaModule.FastFloat):FastMatrix3;
	rotate(angle:khaModule.FastFloat, centerx:khaModule.FastFloat, centery:khaModule.FastFloat):void;
	pushRotation(angle:khaModule.FastFloat, centerx:khaModule.FastFloat, centery:khaModule.FastFloat):void;
	opacity:number;
	pushOpacity(opacity:number):void;
	popOpacity():number;
	get_opacity():number;
	set_opacity(opacity:number):number;
	scissor(x:number, y:number, width:number, height:number):void;
	disableScissor():void;
	pipe:khaModule.graphics4.PipelineState;
	pipeline:khaModule.graphics4.PipelineState;
	get_pipeline():khaModule.graphics4.PipelineState;
	set_pipeline(pipeline:khaModule.graphics4.PipelineState):khaModule.graphics4.PipelineState;
	transformations:Array<any>;
	opacities:Array<any>;
	myFontSize:number;
	setTransformation(transformation:FastMatrix3):void;
	setOpacity(opacity:number):void;
	setPipeline(pipeline:khaModule.graphics4.PipelineState):void;
	static fontGlyphs:Array<any>;


}

}

export default kha.graphics2.Graphics;