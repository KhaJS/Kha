import {default as Reflect} from "./../../Reflect";
import * as khaModule from 'kha';

declare namespace kha._Assets {

export class FontList {

	constructor();
	get(name:any):khaModule.Font;
	names:Array<any>;


}

}

export default kha._Assets.FontList;