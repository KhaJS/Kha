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
	static loadImage(name:string, done:any, failed?:any, pos?:any):void;
	static loadImageFromPath(path:string, readable:boolean, done:any, failed?:any, pos?:any):void;
	static imageFormats:Array<any>;
	static get_imageFormats():Array<any>;
	static loadBlob(name:string, done:any, failed?:any, pos?:any):void;
	static loadBlobFromPath(path:string, done:any, failed?:any, pos?:any):void;
	static loadSound(name:string, done:any, failed?:any, pos?:any):void;
	static loadSoundFromPath(path:string, done:any, failed?:any, pos?:any):void;
	static soundFormats:Array<any>;
	static get_soundFormats():Array<any>;
	static loadFont(name:string, done:any, failed?:any, pos?:any):void;
	static loadFontFromPath(path:string, done:any, failed?:any, pos?:any):void;
	static fontFormats:Array<any>;
	static get_fontFormats():Array<any>;
	static loadVideo(name:string, done:any, failed?:any, pos?:any):void;
	static loadVideoFromPath(path:string, done:any, failed?:any, pos?:any):void;
	static videoFormats:Array<any>;
	static get_videoFormats():Array<any>;
	static reporter(custom:any, pos?:any):any;


}

}

export default kha.Assets;