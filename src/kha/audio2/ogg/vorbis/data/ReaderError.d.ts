
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class ReaderError {

	constructor(type:khaModule.audio2.ogg.vorbis.data.ReaderErrorType, message?:any, posInfos?:any);
	
	message:string;
	


}

}

export default kha.audio2.ogg.vorbis.data.ReaderError;