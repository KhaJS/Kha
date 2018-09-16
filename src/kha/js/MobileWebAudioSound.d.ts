import {default as Sound} from "./../../kha/Sound";
import {default as Bytes} from "./../../haxe/io/Bytes";
import {default as MobileWebAudio} from "./../../kha/js/MobileWebAudio";
import * as khaModule from 'kha';

declare namespace kha.js {

export class MobileWebAudioSound extends kha_Sound {

	constructor(filename:string, done:any, failed:any);
	
	uncompress(done:any):void;


}

}

export default kha.js.MobileWebAudioSound;