import {default as HaxeError} from "./../../../../../js/_Boot/HaxeError";
import {default as ReaderError} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderError";
import {default as ReaderErrorType} from "./../../../../../kha/audio2/ogg/vorbis/data/ReaderErrorType";
import {default as BytesOutput} from "./../../../../../haxe/io/BytesOutput";
import {default as BytesInput} from "./../../../../../haxe/io/BytesInput";
import {default as Comment} from "./../../../../../kha/audio2/ogg/vorbis/data/Comment";
import {default as Codebook} from "./../../../../../kha/audio2/ogg/vorbis/data/Codebook";
import {default as Floor} from "./../../../../../kha/audio2/ogg/vorbis/data/Floor";
import {default as Residue} from "./../../../../../kha/audio2/ogg/vorbis/data/Residue";
import {default as Mapping} from "./../../../../../kha/audio2/ogg/vorbis/data/Mapping";
import {default as Mode} from "./../../../../../kha/audio2/ogg/vorbis/data/Mode";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Header {

	constructor();
	maximumBitRate:;
	nominalBitRate:;
	minimumBitRate:;
	sampleRate:;
	channel:number;
	blocksize0:number;
	blocksize1:number;
	codebooks:ds.Vector;
	floorConfig:ds.Vector;
	residueConfig:ds.Vector;
	mapping:ds.Vector;
	modes:ds.Vector;
	comment:Comment;
	vendor:string;
	static PACKET_ID:number;
	static PACKET_COMMENT:number;
	static PACKET_SETUP:number;
	static read(decodeState:any):khaModule.audio2.ogg.vorbis.data.Header;


}

}

export default kha.audio2.ogg.vorbis.data.Header;