import {default as Reflect} from "./../../Reflect";
import * as khaModule from 'kha';

declare namespace kha._Assets {

export class VideoList {

	constructor();
	get(name:any):khaModule.Video;
	names:Array<any>;


}

}

export default kha._Assets.VideoList;