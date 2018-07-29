import {default as VertexElement} from "./../../kha/graphics4/VertexElement";
import {default as Type} from "./../../Type";
import * as khaModule from 'kha';

declare namespace kha.graphics4 {

export class VertexStructure {

	constructor();
	elements:Array<any>;
	instanced:boolean;
	add(name:any, data:any):void;
	size():number;
	byteSize():number;
	dataByteSize(data:any):number;
	get(index:any):VertexElement;


}

}

export default kha.graphics4.VertexStructure;