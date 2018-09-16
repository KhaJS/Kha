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

	constructor(g4:Graphics);
	projectionMatrix:khaModule.math.FastMatrix4;
	bilinear:boolean;
	bilinearMipmaps:boolean;
	g:Graphics;
	myPipeline:khaModule.graphics4.PipelineState;
	projectionLocation:khaModule.graphics4.ConstantLocation;
	textureLocation:khaModule.graphics4.TextureUnit;
	pipeline:khaModule.graphics4.PipelineState;
	
	
	get_pipeline():khaModule.graphics4.PipelineState;
	set_pipeline(pipe:khaModule.graphics4.PipelineState):khaModule.graphics4.PipelineState;
	setProjection(projectionMatrix:khaModule.math.FastMatrix4):void;
	initBuffers():void;
	setRectVertices(bottomleftx:khaModule.FastFloat, bottomlefty:khaModule.FastFloat, topleftx:khaModule.FastFloat, toplefty:khaModule.FastFloat, toprightx:khaModule.FastFloat, toprighty:khaModule.FastFloat, bottomrightx:khaModule.FastFloat, bottomrighty:khaModule.FastFloat):void;
	setRectTexCoords(left:khaModule.FastFloat, top:khaModule.FastFloat, right:khaModule.FastFloat, bottom:khaModule.FastFloat):void;
	setRectColor(r:khaModule.FastFloat, g:khaModule.FastFloat, b:khaModule.FastFloat, a:khaModule.FastFloat):void;
	drawBuffer():void;
	setBilinearFilter(bilinear:boolean):void;
	setBilinearMipmapFilter(bilinear:boolean):void;
	drawImage(img:khaModule.Image, bottomleftx:khaModule.FastFloat, bottomlefty:khaModule.FastFloat, topleftx:khaModule.FastFloat, toplefty:khaModule.FastFloat, toprightx:khaModule.FastFloat, toprighty:khaModule.FastFloat, bottomrightx:khaModule.FastFloat, bottomrighty:khaModule.FastFloat, opacity:khaModule.FastFloat, color:khaModule.Color):void;
	drawImage2(img:khaModule.Image, sx:khaModule.FastFloat, sy:khaModule.FastFloat, sw:khaModule.FastFloat, sh:khaModule.FastFloat, bottomleftx:khaModule.FastFloat, bottomlefty:khaModule.FastFloat, topleftx:khaModule.FastFloat, toplefty:khaModule.FastFloat, toprightx:khaModule.FastFloat, toprighty:khaModule.FastFloat, bottomrightx:khaModule.FastFloat, bottomrighty:khaModule.FastFloat, opacity:khaModule.FastFloat, color:khaModule.Color):void;
	drawImageScale(img:khaModule.Image, sx:khaModule.FastFloat, sy:khaModule.FastFloat, sw:khaModule.FastFloat, sh:khaModule.FastFloat, left:khaModule.FastFloat, top:khaModule.FastFloat, right:khaModule.FastFloat, bottom:khaModule.FastFloat, opacity:khaModule.FastFloat, color:khaModule.Color):void;
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