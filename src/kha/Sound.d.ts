import {default as Resource} from "./../kha/Resource";
import {default as BytesOutput} from "./../haxe/io/BytesOutput";
import {default as Reader} from "./../kha/audio2/ogg/vorbis/Reader";
import {default as Std} from "./../Std";
import * as khaModule from 'kha';

declare namespace kha {

export class Sound {

	constructor();
	compressedData:Bytes;
	uncompressedData:khaModule.arrays.Float32Array;
	uncompress(done:any):void;
	unload():void;


}

}

export default kha.Sound;