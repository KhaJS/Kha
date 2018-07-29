import {default as PipelineStateBase} from "./../../kha/graphics4/PipelineStateBase";
import {default as SystemImpl} from "./../../kha/SystemImpl";
import {default as VertexData} from "./../../kha/graphics4/VertexData";
import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import {default as ConstantLocation} from "./../../kha/js/graphics4/ConstantLocation";
import {default as TextureUnit} from "./../../kha/js/graphics4/TextureUnit";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class PipelineState extends kha_graphics4_PipelineStateBase {

	constructor();
	
	textures:Array<any>;
	textureValues:Array<any>;
	delete():void;
	compile():void;
	set():void;
	compileShader(shader:any):void;
	getConstantLocation(name:any):ConstantLocation;
	getTextureUnit(name:any):TextureUnit;
	findTexture(name:any):number;


}

}

export default kha.graphics4.PipelineState;