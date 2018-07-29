import {default as Reflect} from "./../Reflect";
import {default as StringTools} from "./../StringTools";
import {default as HdrFormat} from "./../kha/internal/HdrFormat";
import {default as Image} from "./../kha/Image";
import {default as Bytes} from "./../haxe/io/Bytes";
import {default as TextureFormat} from "./../kha/graphics4/TextureFormat";
import {default as Usage} from "./../kha/graphics4/Usage";
import {default as Browser} from "./../js/Browser";
import {default as SystemImpl} from "./../kha/SystemImpl";
import {default as WebAudioSound} from "./../kha/js/WebAudioSound";
import {default as MobileWebAudioSound} from "./../kha/js/MobileWebAudioSound";
import {default as Sound} from "./../kha/js/Sound";
import {default as Video} from "./../kha/js/Video";
import {default as BytesBlob} from "./../kha/internal/BytesBlob";
import {default as Kravur} from "./../kha/Kravur";
import * as khaModule from 'kha';

declare namespace kha {

export class LoaderImpl {

	static getImageFormats():Array<any>;
	static loadImageFromDescription(desc:any, done:any, failed:any):void;
	static getSoundFormats():Array<any>;
	static loadSoundFromDescription(desc:any, done:any, failed:any):void;
	static getVideoFormats():Array<any>;
	static loadVideoFromDescription(desc:any, done:any, failed:any):void;
	static loadRemote(desc:any, done:any, failed:any):void;
	static loadBlobFromDescription(desc:any, done:any, failed:any):void;
	static loadFontFromDescription(desc:any, done:any, failed:any):void;


}

}

export default kha.LoaderImpl;