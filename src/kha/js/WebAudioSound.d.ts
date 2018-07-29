import {default as Sound} from "./../../kha/Sound";
import {default as Audio} from "./../../kha/audio2/Audio";
import {default as Browser} from "./../../js/Browser";
import {default as Bytes} from "./../../haxe/io/Bytes";
import * as khaModule from 'kha';

declare namespace kha.js {

export class WebAudioSound extends kha_Sound {

	constructor(filename:any, done:any, failed:any);
	superUncompress(done:any):void;
	uncompress(done:any):void;


}

}

export default kha.js.WebAudioSound;