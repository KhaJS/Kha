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
	beginFace(face:number):void;
	beginEye(eye:number):void;
	end():void;
	flush():void;
	vsynced():boolean;
	refreshRate():number;
	clear(color?:any, depth?:any, stencil?:any):void;
	viewport(x:number, y:number, width:number, height:number):void;
	scissor(x:number, y:number, width:number, height:number):void;
	disableScissor():void;
	renderTargetsInvertedY():boolean;
	setDepthMode(write:boolean, mode:CompareMode):void;
	setBlendingMode(source:BlendingFactor, destination:BlendingFactor, operation:khaModule.graphics4.BlendingOperation, alphaSource:BlendingFactor, alphaDestination:BlendingFactor, alphaOperation:khaModule.graphics4.BlendingOperation):void;
	createVertexBuffer(vertexCount:number, structure:khaModule.graphics4.VertexStructure, usage:khaModule.graphics4.Usage, canRead?:boolean):VertexBuffer;
	setVertexBuffer(vertexBuffer:VertexBuffer):void;
	setVertexBuffers(vertexBuffers:Array<any>):void;
	createIndexBuffer(indexCount:number, usage:khaModule.graphics4.Usage, canRead?:boolean):IndexBuffer;
	setIndexBuffer(indexBuffer:IndexBuffer):void;
	setTexture(stage:TextureUnit, texture:Image):void;
	setTextureDepth(stage:TextureUnit, texture:Image):void;
	setTextureArray(unit:TextureUnit, texture:Image):void;
	setVideoTexture(unit:TextureUnit, texture:Video):void;
	setImageTexture(unit:TextureUnit, texture:Image):void;
	setTextureParameters(texunit:TextureUnit, uAddressing:khaModule.graphics4.TextureAddressing, vAddressing:khaModule.graphics4.TextureAddressing, minificationFilter:TextureFilter, magnificationFilter:TextureFilter, mipmapFilter:khaModule.graphics4.MipMapFilter):void;
	setTexture3DParameters(texunit:TextureUnit, uAddressing:khaModule.graphics4.TextureAddressing, vAddressing:khaModule.graphics4.TextureAddressing, wAddressing:khaModule.graphics4.TextureAddressing, minificationFilter:TextureFilter, magnificationFilter:TextureFilter, mipmapFilter:khaModule.graphics4.MipMapFilter):void;
	setCubeMap(stage:TextureUnit, cubeMap:CubeMap):void;
	setCubeMapDepth(stage:TextureUnit, cubeMap:CubeMap):void;
	setCullMode(mode:khaModule.graphics4.CullMode):void;
	setPipeline(pipe:khaModule.graphics4.PipelineState):void;
	setBool(location:ConstantLocation, value:boolean):void;
	setInt(location:ConstantLocation, value:number):void;
	setFloat(location:ConstantLocation, value:khaModule.FastFloat):void;
	setFloat2(location:ConstantLocation, value1:khaModule.FastFloat, value2:khaModule.FastFloat):void;
	setFloat3(location:ConstantLocation, value1:khaModule.FastFloat, value2:khaModule.FastFloat, value3:khaModule.FastFloat):void;
	setFloat4(location:ConstantLocation, value1:khaModule.FastFloat, value2:khaModule.FastFloat, value3:khaModule.FastFloat, value4:khaModule.FastFloat):void;
	setFloats(location:ConstantLocation, values:khaModule.arrays.Float32Array):void;
	setVector2(location:ConstantLocation, value:khaModule.math.FastVector2):void;
	setVector3(location:ConstantLocation, value:khaModule.math.FastVector3):void;
	setVector4(location:ConstantLocation, value:khaModule.math.FastVector4):void;
	matrixCache:khaModule.arrays.Float32Array;
	setMatrix(location:ConstantLocation, matrix:khaModule.math.FastMatrix4):void;
	matrix3Cache:khaModule.arrays.Float32Array;
	setMatrix3(location:ConstantLocation, matrix:khaModule.math.FastMatrix3):void;
	drawIndexedVertices(start?:number, count?:number):void;
	convertStencilAction(action:StencilAction):number;
	setStencilParameters(compareMode:CompareMode, bothPass:StencilAction, depthFail:StencilAction, stencilFail:StencilAction, referenceValue:number, readMask?:number, writeMask?:number):void;
	drawIndexedVerticesInstanced(instanceCount:number, start?:number, count?:number):void;
	instancedRenderingAvailable():boolean;
	static getBlendFunc(factor:BlendingFactor):number;
	static getBlendOp(op:khaModule.graphics4.BlendingOperation):number;


}

}

export default kha.js.graphics4.Graphics;