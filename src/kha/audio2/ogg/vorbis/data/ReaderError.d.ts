
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class ReaderError {

	constructor(type:any, message?:any, posInfos?:any);
	
	message:string;
	


}

}

export default kha.audio2.ogg.vorbis.data.ReaderError;