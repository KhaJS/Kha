import {default as VertexBuffer} from "./../../kha/graphics4/VertexBuffer";
import {default as Usage} from "./../../kha/graphics4/Usage";
import {default as IndexBuffer} from "./../../kha/graphics4/IndexBuffer";
import {default as TextureAddressing} from "./../../kha/graphics4/TextureAddressing";
import {default as TextureFilter} from "./../../kha/graphics4/TextureFilter";
import {default as MipMapFilter} from "./../../kha/graphics4/MipMapFilter";
import {default as Graphics2} from "./../../kha/graphics4/Graphics2";
import {default as BlendingFactor} from "./../../kha/graphics4/BlendingFactor";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class ImageShaderPainter {

	constructor(g4:any);
	projectionMatrix:khaModule.math.FastMatrix4;
	bilinear:boolean;
	bilinearMipmaps:boolean;
	g:Graphics;
	myPipeline:khaModule.graphics4.PipelineState;
	projectionLocation:khaModule.graphics4.ConstantLocation;
	textureLocation:khaModule.graphics4.TextureUnit;
	pipeline:khaModule.graphics4.PipelineState;
	
	
	get_pipeline():khaModule.graphics4.PipelineState;
	set_pipeline(pipe:any):khaModule.graphics4.PipelineState;
	setProjection(projectionMatrix:any):void;
	initBuffers():void;
	setRectVertices(bottomleftx:any, bottomlefty:any, topleftx:any, toplefty:any, toprightx:any, toprighty:any, bottomrightx:any, bottomrighty:any):void;
	setRectTexCoords(left:any, top:any, right:any, bottom:any):void;
	setRectColor(r:any, g:any, b:any, a:any):void;
	drawBuffer():void;
	setBilinearFilter(bilinear:any):void;
	setBilinearMipmapFilter(bilinear:any):void;
	drawImage(img:any, bottomleftx:any, bottomlefty:any, topleftx:any, toplefty:any, toprightx:any, toprighty:any, bottomrightx:any, bottomrighty:any, opacity:any, color:any):void;
	drawImage2(img:any, sx:any, sy:any, sw:any, sh:any, bottomleftx:any, bottomlefty:any, topleftx:any, toplefty:any, toprightx:any, toprighty:any, bottomrightx:any, bottomrighty:any, opacity:any, color:any):void;
	drawImageScale(img:any, sx:any, sy:any, sw:any, sh:any, left:any, top:any, right:any, bottom:any, opacity:any, color:any):void;
	end():void;
	static shaderPipeline:khaModule.graphics4.PipelineState;
	static structure:khaModule.graphics4.VertexStructure;
	static bufferSize:number;
	static vertexSize:number;
	static bufferIndex:number;
	static rectVertexBuffer:VertexBuffer;
	static rectVertices:khaModule.arrays.Float32Array;
	static indexBuffer:IndexBuffer;
	static lastTexture:khaModule.Image;
	static initShaders():void;


}

}

export default kha.graphics4.ImageShaderPainter;