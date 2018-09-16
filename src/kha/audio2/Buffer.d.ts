
import * as khaModule from 'kha';

declare namespace kha.audio2 {

export class Buffer {

	constructor(size:number, channels:number, samplesPerSecond:number);
	channels:number;
	samplesPerSecond:number;
	data:khaModule.arrays.Float32Array;
	size:number;
	readLocation:number;
	writeLocation:number;


}

}

export default kha.audio2.Buffer;