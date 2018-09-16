import {default as Reflect} from "./../../Reflect";
import * as khaModule from 'kha';

declare namespace kha._Assets {

export class ImageList {

	constructor();
	get(name:string):khaModule.Image;
	names:Array<any>;


}

}

export default kha._Assets.ImageList;