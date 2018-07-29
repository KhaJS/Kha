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

	constructor(g4:any);
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
	set_pipeline(pipe:any):khaModule.graphics4.PipelineState;
	setProjection(projectionMatrix:any):void;
	initBuffers():void;
	setRectVertices(bottomleftx:any, bottomlefty:any, topleftx:any, toplefty:any, toprightx:any, toprighty:any, bottomrightx:any, bottomrighty:any):void;
	setRectTexCoords(left:any, top:any, right:any, bottom:any):void;
	setRectColors(opacity:any, color:any):void;
	drawBuffer():void;
	setBilinearFilter(bilinear:any):void;
	setFont(font:any):void;
	text:string;
	startString(text:any):void;
	charCodeAt(position:any):number;
	stringLength():number;
	endString():void;
	bakedQuadCache:AlignedQuad;
	drawString(text:any, opacity:any, color:any, x:any, y:any, transformation:any, fontGlyphs:any):void;
	drawCharacters(text:any, start:any, length:any, opacity:any, color:any, x:any, y:any, transformation:any, fontGlyphs:any):void;
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
	static findIndex(charcode:any, fontGlyphs:any):number;


}

}

export default kha.graphics4.TextShaderPainter;