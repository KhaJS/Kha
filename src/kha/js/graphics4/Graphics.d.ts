import {default as Graphics} from "./../../../kha/graphics4/Graphics";
import {default as Std} from "./../../../Std";
import {default as CubeMap} from "./../../../kha/graphics4/CubeMap";
import {default as Boot} from "./../../../js/Boot";
import {default as WebGLImage} from "./../../../kha/WebGLImage";
import {default as SystemImpl} from "./../../../kha/SystemImpl";
import {default as System} from "./../../../kha/System";
import {default as Type} from "./../../../Type";
import {default as BlendingFactor} from "./../../../kha/graphics4/BlendingFactor";
import {default as VertexBuffer} from "./../../../kha/graphics4/VertexBuffer";
import {default as IndexBuffer} from "./../../../kha/graphics4/IndexBuffer";
import {default as TextureUnit} from "./../../../kha/js/graphics4/TextureUnit";
import {default as Video} from "./../../../kha/js/Video";
import {default as TextureFilter} from "./../../../kha/graphics4/TextureFilter";
import {default as ConstantLocation} from "./../../../kha/js/graphics4/ConstantLocation";
import {default as CompareMode} from "./../../../kha/graphics4/CompareMode";
import {default as StencilAction} from "./../../../kha/graphics4/StencilAction";
import * as khaModule from 'kha';

declare namespace kha.js.graphics4 {

export class Graphics {

	constructor(renderTarget?:any);
	depthTest:boolean;
	depthMask:boolean;
	colorMaskRed:boolean;
	colorMaskGreen:boolean;
	colorMaskBlue:boolean;
	colorMaskAlpha:boolean;
	indicesCount:number;
	renderTarget:khaModule.Canvas;
	
	
	isCubeMap:boolean;
	isDepthAttachment:boolean;
	
	
	init():void;
	begin(additionalRenderTargets?:any):void;
	beginFace(face:any):void;
	beginEye(eye:any):void;
	end():void;
	flush():void;
	vsynced():boolean;
	refreshRate():number;
	clear(color?:any, depth?:any, stencil?:any):void;
	viewport(x:any, y:any, width:any, height:any):void;
	scissor(x:any, y:any, width:any, height:any):void;
	disableScissor():void;
	renderTargetsInvertedY():boolean;
	setDepthMode(write:any, mode:any):void;
	setBlendingMode(source:any, destination:any, operation:any, alphaSource:any, alphaDestination:any, alphaOperation:any):void;
	createVertexBuffer(vertexCount:any, structure:any, usage:any, canRead?:any):VertexBuffer;
	setVertexBuffer(vertexBuffer:any):void;
	setVertexBuffers(vertexBuffers:any):void;
	createIndexBuffer(indexCount:any, usage:any, canRead?:any):IndexBuffer;
	setIndexBuffer(indexBuffer:any):void;
	setTexture(stage:any, texture:any):void;
	setTextureDepth(stage:any, texture:any):void;
	setTextureArray(unit:any, texture:any):void;
	setVideoTexture(unit:any, texture:any):void;
	setImageTexture(unit:any, texture:any):void;
	setTextureParameters(texunit:any, uAddressing:any, vAddressing:any, minificationFilter:any, magnificationFilter:any, mipmapFilter:any):void;
	setTexture3DParameters(texunit:any, uAddressing:any, vAddressing:any, wAddressing:any, minificationFilter:any, magnificationFilter:any, mipmapFilter:any):void;
	setCubeMap(stage:any, cubeMap:any):void;
	setCubeMapDepth(stage:any, cubeMap:any):void;
	setCullMode(mode:any):void;
	setPipeline(pipe:any):void;
	setBool(location:any, value:any):void;
	setInt(location:any, value:any):void;
	setFloat(location:any, value:any):void;
	setFloat2(location:any, value1:any, value2:any):void;
	setFloat3(location:any, value1:any, value2:any, value3:any):void;
	setFloat4(location:any, value1:any, value2:any, value3:any, value4:any):void;
	setFloats(location:any, values:any):void;
	setVector2(location:any, value:any):void;
	setVector3(location:any, value:any):void;
	setVector4(location:any, value:any):void;
	matrixCache:khaModule.arrays.Float32Array;
	setMatrix(location:any, matrix:any):void;
	matrix3Cache:khaModule.arrays.Float32Array;
	setMatrix3(location:any, matrix:any):void;
	drawIndexedVertices(start?:any, count?:any):void;
	convertStencilAction(action:any):number;
	setStencilParameters(compareMode:any, bothPass:any, depthFail:any, stencilFail:any, referenceValue:any, readMask?:any, writeMask?:any):void;
	drawIndexedVerticesInstanced(instanceCount:any, start?:any, count?:any):void;
	instancedRenderingAvailable():boolean;
	static getBlendFunc(factor:any):number;
	static getBlendOp(op:any):number;


}

}

export default kha.js.graphics4.Graphics;