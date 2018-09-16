import {default as VertexElement} from "./../../kha/graphics4/VertexElement";
import {default as Type} from "./../../Type";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class VertexStructure {

	constructor();
	elements:Array<any>;
	instanced:boolean;
	add(name:string, data:khaModule.graphics4.VertexData):void;
	size():number;
	byteSize():number;
	dataByteSize(data:khaModule.graphics4.VertexData):number;
	get(index:number):VertexElement;


}

}

export default kha.graphics4.VertexStructure;