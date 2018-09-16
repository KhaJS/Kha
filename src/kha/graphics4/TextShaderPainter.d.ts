import {default as VertexBuffer} from "./../../kha/graphics4/VertexBuffer";
import {default as Usage} from "./../../kha/graphics4/Usage";
import {default as IndexBuffer} from "./../../kha/graphics4/IndexBuffer";
import {default as TextureAddressing} from "./../../kha/graphics4/TextureAddressing";
import {default as TextureFilter} from "./../../kha/graphics4/TextureFilter";
import {default as MipMapFilter} from "./../../kha/graphics4/MipMapFilter";
import {default as Boot} from "./../../js/Boot";
import {default as Kravur} from "./../../kha/Kravur";
import {default as HxOverrides} from "./../../HxOverrides";
import {default as FastVector2} from "./../../kha/math/FastVector2";
import {default as Graphics2} from "./../../kha/graphics4/Graphics2";
import {default as AlignedQuad} from "./../../kha/AlignedQuad";
import {default as BlendingFactor} from "./../../kha/graphics4/BlendingFactor";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class TextShaderPainter {

	constructor(g4:Graphics);
	projectionMatrix:khaModule.math.FastMatrix4;
	font:Kravur;
	g:Graphics;
	myPipeline:khaModule.graphics4.PipelineState;
	projectionLocation:khaModule.graphics4.ConstantLocation;
	textureLocation:khaModule.graphics4.TextureUnit;
	pipeline:khaModule.graphics4.PipelineState;
	fontSize:number;
	bilinear:boolean;
	
	
	get_pipeline():khaModule.graphics4.PipelineState;
	set_pipeline(pipe:khaModule.graphics4.PipelineState):khaModule.graphics4.PipelineState;
	setProjection(projectionMatrix:khaModule.math.FastMatrix4):void;
	initBuffers():void;
	setRectVertices(bottomleftx:number, bottomlefty:number, topleftx:number, toplefty:number, toprightx:number, toprighty:number, bottomrightx:number, bottomrighty:number):void;
	setRectTexCoords(left:number, top:number, right:number, bottom:number):void;
	setRectColors(opacity:khaModule.FastFloat, color:khaModule.Color):void;
	drawBuffer():void;
	setBilinearFilter(bilinear:boolean):void;
	setFont(font:khaModule.Font):void;
	text:string;
	startString(text:string):void;
	charCodeAt(position:number):number;
	stringLength():number;
	endString():void;
	bakedQuadCache:AlignedQuad;
	drawString(text:string, opacity:khaModule.FastFloat, color:khaModule.Color, x:number, y:number, transformation:khaModule.math.FastMatrix3, fontGlyphs:Array<any>):void;
	drawCharacters(text:Array<any>, start:number, length:number, opacity:khaModule.FastFloat, color:khaModule.Color, x:number, y:number, transformation:khaModule.math.FastMatrix3, fontGlyphs:Array<any>):void;
	end():void;
	static shaderPipeline:khaModule.graphics4.PipelineState;
	static structure:khaModule.graphics4.VertexStructure;
	static bufferSize:number;
	static bufferIndex:number;
	static rectVertexBuffer:VertexBuffer;
	static rectVertices:khaModule.arrays.Float32Array;
	static indexBuffer:IndexBuffer;
	static lastTexture:khaModule.Image;
	static initShaders():void;
	static findIndex(charcode:number, fontGlyphs:Array<any>):number;


}

}

export default kha.graphics4.TextShaderPainter;