
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class Graphics {

	
	begin(additionalRenderTargets?:any):void;
	beginFace(face:any):void;
	beginEye(eye:any):void;
	end():void;
	vsynced():boolean;
	refreshRate():number;
	clear(color?:any, depth?:any, stencil?:any):void;
	viewport(x:any, y:any, width:any, height:any):void;
	scissor(x:any, y:any, width:any, height:any):void;
	disableScissor():void;
	setVertexBuffer(vertexBuffer:any):void;
	setVertexBuffers(vertexBuffers:any):void;
	setIndexBuffer(indexBuffer:any):void;
	setTexture(unit:any, texture:any):void;
	setTextureDepth(unit:any, texture:any):void;
	setTextureArray(unit:any, texture:any):void;
	setVideoTexture(unit:any, texture:any):void;
	setImageTexture(unit:any, texture:any):void;
	setTextureParameters(texunit:any, uAddressing:any, vAddressing:any, minificationFilter:any, magnificationFilter:any, mipmapFilter:any):void;
	setTexture3DParameters(texunit:any, uAddressing:any, vAddressing:any, wAddressing:any, minificationFilter:any, magnificationFilter:any, mipmapFilter:any):void;
	setCubeMap(unit:any, cubeMap:any):void;
	setCubeMapDepth(unit:any, cubeMap:any):void;
	renderTargetsInvertedY():boolean;
	instancedRenderingAvailable():boolean;
	setPipeline(pipeline:any):void;
	setBool(location:any, value:any):void;
	setInt(location:any, value:any):void;
	setFloat(location:any, value:any):void;
	setFloat2(location:any, value1:any, value2:any):void;
	setFloat3(location:any, value1:any, value2:any, value3:any):void;
	setFloat4(location:any, value1:any, value2:any, value3:any, value4:any):void;
	setFloats(location:any, floats:any):void;
	setVector2(location:any, value:any):void;
	setVector3(location:any, value:any):void;
	setVector4(location:any, value:any):void;
	setMatrix(location:any, value:any):void;
	setMatrix3(location:any, value:any):void;
	drawIndexedVertices(start?:any, count?:any):void;
	drawIndexedVerticesInstanced(instanceCount:any, start?:any, count?:any):void;
	flush():void;


}

}

export default kha.graphics4.Graphics;