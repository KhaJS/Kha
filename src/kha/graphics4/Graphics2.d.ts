import {default as Graphics} from "./../../kha/graphics2/Graphics";
import {default as Std} from "./../../Std";
import {default as Framebuffer} from "./../../kha/Framebuffer";
import {default as FastMatrix4} from "./../../kha/math/FastMatrix4";
import {default as Image} from "./../../kha/Image";
import {default as FastVector2} from "./../../kha/math/FastVector2";
import {default as ImageScaleQuality} from "./../../kha/graphics2/ImageScaleQuality";
import {default as VertexStructure} from "./../../kha/graphics4/VertexStructure";
import {default as VertexData} from "./../../kha/graphics4/VertexData";
import {default as PipelineState} from "./../../kha/graphics4/PipelineState";
import {default as Shaders} from "./../../kha/Shaders";
import {default as BlendingFactor} from "./../../kha/graphics4/BlendingFactor";
import {default as ImageShaderPainter} from "./../../kha/graphics4/ImageShaderPainter";
import {default as ColoredShaderPainter} from "./../../kha/graphics4/ColoredShaderPainter";
import {default as TextShaderPainter} from "./../../kha/graphics4/TextShaderPainter";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class Graphics2 extends kha_graphics2_Graphics {

	constructor(canvas:khaModule.Canvas);
	myColor:khaModule.Color;
	
	projectionMatrix:FastMatrix4;
	imagePainter:ImageShaderPainter;
	coloredPainter:ColoredShaderPainter;
	textPainter:TextShaderPainter;
	canvas:khaModule.Canvas;
	g:Graphics;
	setProjection():void;
	drawImage(img:Image, x:khaModule.FastFloat, y:khaModule.FastFloat):void;
	drawScaledSubImage(img:Image, sx:khaModule.FastFloat, sy:khaModule.FastFloat, sw:khaModule.FastFloat, sh:khaModule.FastFloat, dx:khaModule.FastFloat, dy:khaModule.FastFloat, dw:khaModule.FastFloat, dh:khaModule.FastFloat):void;
	get_color():khaModule.Color;
	set_color(color:khaModule.Color):khaModule.Color;
	drawRect(x:number, y:number, width:number, height:number, strength?:number):void;
	fillRect(x:number, y:number, width:number, height:number):void;
	drawString(text:string, x:number, y:number):void;
	drawCharacters(text:Array<any>, start:number, length:number, x:number, y:number):void;
	get_font():khaModule.Font;
	set_font(font:khaModule.Font):khaModule.Font;
	set_fontSize(value:number):number;
	drawLine(x1:number, y1:number, x2:number, y2:number, strength?:number):void;
	fillTriangle(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number):void;
	
	get_imageScaleQuality():ImageScaleQuality;
	set_imageScaleQuality(value:ImageScaleQuality):ImageScaleQuality;
	
	get_mipmapScaleQuality():ImageScaleQuality;
	set_mipmapScaleQuality(value:ImageScaleQuality):ImageScaleQuality;
	setPipeline(pipeline:PipelineState):void;
	scissor(x:number, y:number, width:number, height:number):void;
	disableScissor():void;
	begin(clear?:boolean, clearColor?:any):void;
	clear(color?:any):void;
	flush():void;
	end():void;
	drawVideoInternal(video:khaModule.Video, x:number, y:number, width:number, height:number):void;
	drawVideo(video:khaModule.Video, x:number, y:number, width:number, height:number):void;
	static videoPipeline:PipelineState;
	static upperPowerOfTwo(v:number):number;
	static createImageVertexStructure():VertexStructure;
	static createImagePipeline(structure:VertexStructure):PipelineState;
	static createColoredVertexStructure():VertexStructure;
	static createColoredPipeline(structure:VertexStructure):PipelineState;
	static createTextVertexStructure():VertexStructure;
	static createTextPipeline(structure:VertexStructure):PipelineState;


}

}

export default kha.graphics4.Graphics2;