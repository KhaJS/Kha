import {default as UInt_Impl_} from "./../../../../_UInt/UInt_Impl_";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.tools {

export class Crc32 {

	static POLY:UInt;
	static table:ds.Vector;
	static init():void;
	static update(crc:any, byte:any):UInt;


}

}

export default kha.audio2.ogg.tools.Crc32;