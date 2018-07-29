import {default as Reflect} from "./../../Reflect";
import * as khaModule from 'kha';

declare namespace kha._Assets {

export class BlobList {

	constructor();
	get(name:any):khaModule.Blob;
	names:Array<any>;


}

}

export default kha._Assets.BlobList;