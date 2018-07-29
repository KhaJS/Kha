
import * as khaModule from 'kha';

declare namespace kha.graphics2.truetype {

export class Stbtt_pack_range {

	font_size:number;
	first_unicode_codepoint_in_range:number;
	array_of_unicode_codepoints:ds.Vector;
	num_chars:number;
	chardata_for_range:khaModule.graphics2.truetype.Stbtt_packedchar;
	h_oversample:number;
	v_oversample:number;


}

}

export default kha.graphics2.truetype.Stbtt_pack_range;