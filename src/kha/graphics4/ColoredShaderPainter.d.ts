import {default as VertexBuffer} from "./../../kha/graphics4/VertexBuffer";
import {default as Usage} from "./../../kha/graphics4/Usage";
import {default as IndexBuffer} from "./../../kha/graphics4/IndexBuffer";
import {default as Graphics2} from "./../../kha/graphics4/Graphics2";
import {default as BlendingFactor} from "./../../kha/graphics4/BlendingFactor";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class ColoredShaderPainter {

	constructor(g4:Graphics);
	projectionMatrix:khaModule.math.FastMatrix4;
	g:Graphics;
	myPipeline:khaModule.graphics4.PipelineState;
	projectionLocation:khaModule.graphics4.ConstantLocation;
	pipeline:khaModule.graphics4.PipelineState;
	
	
	get_pipeline():khaModule.graphics4.PipelineState;
	set_pipeline(pipe:khaModule.graphics4.PipelineState):khaModule.graphics4.PipelineState;
	setProjection(projectionMatrix:khaModule.math.FastMatrix4):void;
	initBuffers():void;
	setRectVertices(bottomleftx:number, bottomlefty:number, topleftx:number, toplefty:number, toprightx:number, toprighty:number, bottomrightx:number, bottomrighty:number):void;
	setRectColors(opacity:khaModule.FastFloat, color:khaModule.Color):void;
	setTriVertices(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number):void;
	setTriColors(opacity:khaModule.FastFloat, color:khaModule.Color):void;
	drawBuffer(trisDone:boolean):void;
	drawTriBuffer(rectsDone:boolean):void;
	fillRect(opacity:khaModule.FastFloat, color:khaModule.Color, bottomleftx:number, bottomlefty:number, topleftx:number, toplefty:number, toprightx:number, toprighty:number, bottomrightx:number, bottomrighty:number):void;
	fillTriangle(opacity:khaModule.FastFloat, color:khaModule.Color, x1:number, y1:number, x2:number, y2:number, x3:number, y3:number):void;
	endTris(rectsDone:boolean):void;
	endRects(trisDone:boolean):void;
	end():void;
	static shaderPipeline:khaModule.graphics4.PipelineState;
	static structure:khaModule.graphics4.VertexStructure;
	static bufferSize:number;
	static bufferIndex:number;
	static rectVertexBuffer:VertexBuffer;
	static rectVertices:khaModule.arrays.Float32Array;
	static indexBuffer:IndexBuffer;
	static triangleBufferSize:number;
	static triangleBufferIndex:number;
	static triangleVertexBuffer:VertexBuffer;
	static triangleVertices:khaModule.arrays.Float32Array;
	static triangleIndexBuffer:IndexBuffer;
	static initShaders():void;


}

}

export default kha.graphics4.ColoredShaderPainter;