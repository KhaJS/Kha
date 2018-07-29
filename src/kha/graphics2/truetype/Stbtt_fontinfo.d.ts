
import * as khaModule from 'kha';

declare namespace kha.graphics2.truetype {

export class Stbtt_fontinfo {

	constructor();
	
	fontstart:number;
	numGlyphs:number;
	loca:number;
	head:number;
	glyf:number;
	hhea:number;
	hmtx:number;
	kern:number;
	index_map:number;
	indexToLocFormat:number;


}

}

export default kha.graphics2.truetype.Stbtt_fontinfo;