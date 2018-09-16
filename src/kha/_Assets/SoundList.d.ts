import {default as Reflect} from "./../../Reflect";
import * as khaModule from 'kha';

declare namespace kha._Assets {

export class SoundList {

	constructor();
	get(name:string):khaModule.Sound;
	names:Array<any>;


}

}

export default kha._Assets.SoundList;