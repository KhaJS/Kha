import {default as VertexBuffer} from "./../../kha/graphics4/VertexBuffer";
import {default as Usage} from "./../../kha/graphics4/Usage";
import {default as IndexBuffer} from "./../../kha/graphics4/IndexBuffer";
import {default as Graphics2} from "./../../kha/graphics4/Graphics2";
import {default as BlendingFactor} from "./../../kha/graphics4/BlendingFactor";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class ColoredShaderPainter {

	constructor(g4:any);
	projectionMatrix:khaModule.math.FastMatrix4;
	g:Graphics;
	myPipeline:khaModule.graphics4.PipelineState;
	projectionLocation:khaModule.graphics4.ConstantLocation;
	pipeline:khaModule.graphics4.PipelineState;
	
	
	get_pipeline():khaModule.graphics4.PipelineState;
	set_pipeline(pipe:any):khaModule.graphics4.PipelineState;
	setProjection(projectionMatrix:any):void;
	initBuffers():void;
	setRectVertices(bottomleftx:any, bottomlefty:any, topleftx:any, toplefty:any, toprightx:any, toprighty:any, bottomrightx:any, bottomrighty:any):void;
	setRectColors(opacity:any, color:any):void;
	setTriVertices(x1:any, y1:any, x2:any, y2:any, x3:any, y3:any):void;
	setTriColors(opacity:any, color:any):void;
	drawBuffer(trisDone:any):void;
	drawTriBuffer(rectsDone:any):void;
	fillRect(opacity:any, color:any, bottomleftx:any, bottomlefty:any, topleftx:any, toplefty:any, toprightx:any, toprighty:any, bottomrightx:any, bottomrighty:any):void;
	fillTriangle(opacity:any, color:any, x1:any, y1:any, x2:any, y2:any, x3:any, y3:any):void;
	endTris(rectsDone:any):void;
	endRects(trisDone:any):void;
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