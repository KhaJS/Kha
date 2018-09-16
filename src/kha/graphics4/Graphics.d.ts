
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class Graphics {

	
	begin(additionalRenderTargets?:any):void;
	beginFace(face:number):void;
	beginEye(eye:number):void;
	end():void;
	vsynced():boolean;
	refreshRate():number;
	clear(color?:any, depth?:any, stencil?:any):void;
	viewport(x:number, y:number, width:number, height:number):void;
	scissor(x:number, y:number, width:number, height:number):void;
	disableScissor():void;
	setVertexBuffer(vertexBuffer:khaModule.graphics4.VertexBuffer):void;
	setVertexBuffers(vertexBuffers:Array<any>):void;
	setIndexBuffer(indexBuffer:khaModule.graphics4.IndexBuffer):void;
	setTexture(unit:khaModule.graphics4.TextureUnit, texture:khaModule.Image):void;
	setTextureDepth(unit:khaModule.graphics4.TextureUnit, texture:khaModule.Image):void;
	setTextureArray(unit:khaModule.graphics4.TextureUnit, texture:khaModule.Image):void;
	setVideoTexture(unit:khaModule.graphics4.TextureUnit, texture:khaModule.Video):void;
	setImageTexture(unit:khaModule.graphics4.TextureUnit, texture:khaModule.Image):void;
	setTextureParameters(texunit:khaModule.graphics4.TextureUnit, uAddressing:khaModule.graphics4.TextureAddressing, vAddressing:khaModule.graphics4.TextureAddressing, minificationFilter:khaModule.graphics4.TextureFilter, magnificationFilter:khaModule.graphics4.TextureFilter, mipmapFilter:khaModule.graphics4.MipMapFilter):void;
	setTexture3DParameters(texunit:khaModule.graphics4.TextureUnit, uAddressing:khaModule.graphics4.TextureAddressing, vAddressing:khaModule.graphics4.TextureAddressing, wAddressing:khaModule.graphics4.TextureAddressing, minificationFilter:khaModule.graphics4.TextureFilter, magnificationFilter:khaModule.graphics4.TextureFilter, mipmapFilter:khaModule.graphics4.MipMapFilter):void;
	setCubeMap(unit:khaModule.graphics4.TextureUnit, cubeMap:khaModule.graphics4.CubeMap):void;
	setCubeMapDepth(unit:khaModule.graphics4.TextureUnit, cubeMap:khaModule.graphics4.CubeMap):void;
	renderTargetsInvertedY():boolean;
	instancedRenderingAvailable():boolean;
	setPipeline(pipeline:khaModule.graphics4.PipelineState):void;
	setBool(location:khaModule.graphics4.ConstantLocation, value:boolean):void;
	setInt(location:khaModule.graphics4.ConstantLocation, value:number):void;
	setFloat(location:khaModule.graphics4.ConstantLocation, value:khaModule.FastFloat):void;
	setFloat2(location:khaModule.graphics4.ConstantLocation, value1:khaModule.FastFloat, value2:khaModule.FastFloat):void;
	setFloat3(location:khaModule.graphics4.ConstantLocation, value1:khaModule.FastFloat, value2:khaModule.FastFloat, value3:khaModule.FastFloat):void;
	setFloat4(location:khaModule.graphics4.ConstantLocation, value1:khaModule.FastFloat, value2:khaModule.FastFloat, value3:khaModule.FastFloat, value4:khaModule.FastFloat):void;
	setFloats(location:khaModule.graphics4.ConstantLocation, floats:khaModule.arrays.Float32Array):void;
	setVector2(location:khaModule.graphics4.ConstantLocation, value:khaModule.math.FastVector2):void;
	setVector3(location:khaModule.graphics4.ConstantLocation, value:khaModule.math.FastVector3):void;
	setVector4(location:khaModule.graphics4.ConstantLocation, value:khaModule.math.FastVector4):void;
	setMatrix(location:khaModule.graphics4.ConstantLocation, value:khaModule.math.FastMatrix4):void;
	setMatrix3(location:khaModule.graphics4.ConstantLocation, value:khaModule.math.FastMatrix3):void;
	drawIndexedVertices(start?:number, count?:number):void;
	drawIndexedVerticesInstanced(instanceCount:number, start?:number, count?:number):void;
	flush():void;


}

}

export default kha.graphics4.Graphics;