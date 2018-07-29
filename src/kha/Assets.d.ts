import {default as ImageList} from "./../kha/_Assets/ImageList";
import {default as SoundList} from "./../kha/_Assets/SoundList";
import {default as BlobList} from "./../kha/_Assets/BlobList";
import {default as FontList} from "./../kha/_Assets/FontList";
import {default as VideoList} from "./../kha/_Assets/VideoList";
import {default as Type} from "./../Type";
import {default as StringTools} from "./../StringTools";
import {default as HxOverrides} from "./../HxOverrides";
import {default as Reflect} from "./../Reflect";
import {default as LoaderImpl} from "./../kha/LoaderImpl";
import {default as Log} from "./../haxe/Log";
import * as khaModule from 'kha';

declare namespace kha {

export class Assets {

	static images:ImageList;
	static sounds:SoundList;
	static blobs:BlobList;
	static fonts:FontList;
	static videos:VideoList;
	static progress:number;
	static loadEverything(callback:any, filter?:any, uncompressSoundsFilter?:any, failed?:any):void;
	static loadImage(name:any, done:any, failed?:any, pos?:any):void;
	static loadImageFromPath(path:any, readable:any, done:any, failed?:any, pos?:any):void;
	static imageFormats:Array<any>;
	static get_imageFormats():Array<any>;
	static loadBlob(name:any, done:any, failed?:any, pos?:any):void;
	static loadBlobFromPath(path:any, done:any, failed?:any, pos?:any):void;
	static loadSound(name:any, done:any, failed?:any, pos?:any):void;
	static loadSoundFromPath(path:any, done:any, failed?:any, pos?:any):void;
	static soundFormats:Array<any>;
	static get_soundFormats():Array<any>;
	static loadFont(name:any, done:any, failed?:any, pos?:any):void;
	static loadFontFromPath(path:any, done:any, failed?:any, pos?:any):void;
	static fontFormats:Array<any>;
	static get_fontFormats():Array<any>;
	static loadVideo(name:any, done:any, failed?:any, pos?:any):void;
	static loadVideoFromPath(path:any, done:any, failed?:any, pos?:any):void;
	static videoFormats:Array<any>;
	static get_videoFormats():Array<any>;
	static reporter(custom:any, pos?:any):;


}

}

export default kha.Assets;