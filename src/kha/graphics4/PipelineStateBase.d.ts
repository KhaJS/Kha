import {default as CullMode} from "./../../kha/graphics4/CullMode";
import {default as CompareMode} from "./../../kha/graphics4/CompareMode";
import {default as StencilAction} from "./../../kha/graphics4/StencilAction";
import {default as BlendingFactor} from "./../../kha/graphics4/BlendingFactor";
import {default as BlendingOperation} from "./../../kha/graphics4/BlendingOperation";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class PipelineStateBase {

	constructor();
	inputLayout:Array<any>;
	vertexShader:khaModule.graphics4.VertexShader;
	fragmentShader:khaModule.graphics4.FragmentShader;
	geometryShader:khaModule.graphics4.GeometryShader;
	tessellationControlShader:khaModule.graphics4.TessellationControlShader;
	tessellationEvaluationShader:khaModule.graphics4.TessellationEvaluationShader;
	
	depthWrite:boolean;
	
	
	
	
	
	stencilReferenceValue:number;
	stencilReadMask:number;
	stencilWriteMask:number;
	
	
	
	
	
	
	colorWriteMask:boolean;
	colorWriteMaskRed:boolean;
	colorWriteMaskGreen:boolean;
	colorWriteMaskBlue:boolean;
	colorWriteMaskAlpha:boolean;
	set_colorWriteMask(value:boolean):boolean;
	conservativeRasterization:boolean;


}

}

export default kha.graphics4.PipelineStateBase;