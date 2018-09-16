import {default as SystemImpl} from "./../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class VertexShader {

	constructor(sources:Array<any>, files:Array<any>);
	sources:Array<any>;
	
	
	files:Array<any>;
	delete():void;
	static fromSource(source:string):khaModule.graphics4.VertexShader;


}

}

export default kha.graphics4.VertexShader;