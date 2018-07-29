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

	constructor(canvas:any);
	myColor:khaModule.Color;
	
	projectionMatrix:FastMatrix4;
	imagePainter:ImageShaderPainter;
	coloredPainter:ColoredShaderPainter;
	textPainter:TextShaderPainter;
	canvas:khaModule.Canvas;
	g:Graphics;
	setProjection():void;
	drawImage(img:any, x:any, y:any):void;
	drawScaledSubImage(img:any, sx:any, sy:any, sw:any, sh:any, dx:any, dy:any, dw:any, dh:any):void;
	get_color():khaModule.Color;
	set_color(color:any):khaModule.Color;
	drawRect(x:any, y:any, width:any, height:any, strength?:any):void;
	fillRect(x:any, y:any, width:any, height:any):void;
	drawString(text:any, x:any, y:any):void;
	drawCharacters(text:any, start:any, length:any, x:any, y:any):void;
	get_font():khaModule.Font;
	set_font(font:any):khaModule.Font;
	set_fontSize(value:any):number;
	drawLine(x1:any, y1:any, x2:any, y2:any, strength?:any):void;
	fillTriangle(x1:any, y1:any, x2:any, y2:any, x3:any, y3:any):void;
	
	get_imageScaleQuality():ImageScaleQuality;
	set_imageScaleQuality(value:any):ImageScaleQuality;
	
	get_mipmapScaleQuality():ImageScaleQuality;
	set_mipmapScaleQuality(value:any):ImageScaleQuality;
	setPipeline(pipeline:any):void;
	scissor(x:any, y:any, width:any, height:any):void;
	disableScissor():void;
	begin(clear?:any, clearColor?:any):void;
	clear(color?:any):void;
	flush():void;
	end():void;
	drawVideoInternal(video:any, x:any, y:any, width:any, height:any):void;
	drawVideo(video:any, x:any, y:any, width:any, height:any):void;
	static videoPipeline:PipelineState;
	static upperPowerOfTwo(v:any):number;
	static createImageVertexStructure():VertexStructure;
	static createImagePipeline(structure:any):PipelineState;
	static createColoredVertexStructure():VertexStructure;
	static createColoredPipeline(structure:any):PipelineState;
	static createTextVertexStructure():VertexStructure;
	static createTextPipeline(structure:any):PipelineState;


}

}

export default kha.graphics4.Graphics2;