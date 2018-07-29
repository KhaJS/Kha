import {default as HaxeError} from "./../../../js/_Boot/HaxeError";
import {default as HxOverrides} from "./../../../HxOverrides";
import {default as Stbtt_vertex} from "./../../../kha/graphics2/truetype/Stbtt_vertex";
import {default as Std} from "./../../../Std";
import {default as Stbtt_temp_glyph_h_metrics} from "./../../../kha/graphics2/truetype/Stbtt_temp_glyph_h_metrics";
import {default as Stbtt_temp_font_v_metrics} from "./../../../kha/graphics2/truetype/Stbtt_temp_font_v_metrics";
import {default as Stbtt_temp_rect} from "./../../../kha/graphics2/truetype/Stbtt_temp_rect";
import {default as Stbtt__active_edge} from "./../../../kha/graphics2/truetype/Stbtt__active_edge";
import {default as Stbtt__edge} from "./../../../kha/graphics2/truetype/Stbtt__edge";
import {default as Stbtt__point} from "./../../../kha/graphics2/truetype/Stbtt__point";
import {default as VectorOfIntPointer} from "./../../../kha/graphics2/truetype/VectorOfIntPointer";
import {default as Stbtt__bitmap} from "./../../../kha/graphics2/truetype/Stbtt__bitmap";
import {default as BytesBlob} from "./../../../kha/internal/BytesBlob";
import {default as Stbtt_fontinfo} from "./../../../kha/graphics2/truetype/Stbtt_fontinfo";
import * as khaModule from 'kha';

declare namespace kha.graphics2.truetype {

export class StbTruetype {

	static STBTT_assert(value:any):void;
	static STBTT_POINT_SIZE(x:any):number;
	static STBTT_vmove:number;
	static STBTT_vline:number;
	static STBTT_vcurve:number;
	static STBTT_MACSTYLE_DONTCARE:number;
	static STBTT_MACSTYLE_BOLD:number;
	static STBTT_MACSTYLE_ITALIC:number;
	static STBTT_MACSTYLE_UNDERSCORE:number;
	static STBTT_MACSTYLE_NONE:number;
	static STBTT_PLATFORM_ID_UNICODE:number;
	static STBTT_PLATFORM_ID_MAC:number;
	static STBTT_PLATFORM_ID_ISO:number;
	static STBTT_PLATFORM_ID_MICROSOFT:number;
	static STBTT_UNICODE_EID_UNICODE_1_0:number;
	static STBTT_UNICODE_EID_UNICODE_1_1:number;
	static STBTT_UNICODE_EID_ISO_10646:number;
	static STBTT_UNICODE_EID_UNICODE_2_0_BMP:number;
	static STBTT_UNICODE_EID_UNICODE_2_0_FULL:number;
	static STBTT_MS_EID_SYMBOL:number;
	static STBTT_MS_EID_UNICODE_BMP:number;
	static STBTT_MS_EID_SHIFTJIS:number;
	static STBTT_MS_EID_UNICODE_FULL:number;
	static STBTT_MAC_EID_ROMAN:number;
	static STBTT_MAC_EID_ARABIC:number;
	static STBTT_MAC_EID_JAPANESE:number;
	static STBTT_MAC_EID_HEBREW:number;
	static STBTT_MAC_EID_CHINESE_TRAD:number;
	static STBTT_MAC_EID_GREEK:number;
	static STBTT_MAC_EID_KOREAN:number;
	static STBTT_MAC_EID_RUSSIAN:number;
	static STBTT_MS_LANG_ENGLISH:number;
	static STBTT_MS_LANG_ITALIAN:number;
	static STBTT_MS_LANG_CHINESE:number;
	static STBTT_MS_LANG_JAPANESE:number;
	static STBTT_MS_LANG_DUTCH:number;
	static STBTT_MS_LANG_KOREAN:number;
	static STBTT_MS_LANG_FRENCH:number;
	static STBTT_MS_LANG_RUSSIAN:number;
	static STBTT_MS_LANG_GERMAN:number;
	static STBTT_MS_LANG_SPANISH:number;
	static STBTT_MS_LANG_HEBREW:number;
	static STBTT_MS_LANG_SWEDISH:number;
	static STBTT_MAC_LANG_ENGLISH:number;
	static STBTT_MAC_LANG_JAPANESE:number;
	static STBTT_MAC_LANG_ARABIC:number;
	static STBTT_MAC_LANG_KOREAN:number;
	static STBTT_MAC_LANG_DUTCH:number;
	static STBTT_MAC_LANG_RUSSIAN:number;
	static STBTT_MAC_LANG_FRENCH:number;
	static STBTT_MAC_LANG_SPANISH:number;
	static STBTT_MAC_LANG_GERMAN:number;
	static STBTT_MAC_LANG_SWEDISH:number;
	static STBTT_MAC_LANG_HEBREW:number;
	static STBTT_MAC_LANG_CHINESE_SIMPLIFIED:number;
	static STBTT_MAC_LANG_ITALIAN:number;
	static STBTT_MAC_LANG_CHINESE_TRAD:number;
	static STBTT_MAX_OVERSAMPLE:number;
	static STBTT_RASTERIZER_VERSION:number;
	static ttBYTE(p:any, pos?:any):khaModule.graphics2.truetype.Stbtt_uint8;
	static ttCHAR(p:any, pos?:any):khaModule.graphics2.truetype.Stbtt_int8;
	static ttUSHORT(p:any, pos?:any):khaModule.graphics2.truetype.Stbtt_uint16;
	static ttSHORT(p:any, pos?:any):khaModule.graphics2.truetype.Stbtt_int16;
	static ttULONG(p:any, pos?:any):khaModule.graphics2.truetype.Stbtt_uint32;
	static ttLONG(p:any, pos?:any):khaModule.graphics2.truetype.Stbtt_int32;
	static ttFixed(p:any, pos?:any):khaModule.graphics2.truetype.Stbtt_int32;
	static stbtt_tag4(p:any, pos:any, c0:any, c1:any, c2:any, c3:any):boolean;
	static stbtt_tag(p:any, pos:any, str:any):boolean;
	static stbtt__isfont(font:any):boolean;
	static stbtt__find_table(data:any, fontstart:any, tag:any):khaModule.graphics2.truetype.Stbtt_uint32;
	static stbtt_GetFontOffsetForIndex(font_collection:any, index:any):number;
	static stbtt_InitFont(info:any, data:any, fontstart:any):boolean;
	static stbtt_FindGlyphIndex(info:any, unicode_codepoint:any):number;
	static stbtt_GetCodepointShape(info:any, unicode_codepoint:any):Vector;
	static stbtt_setvertex(v:any, type:any, x:any, y:any, cx:any, cy:any):void;
	static stbtt__GetGlyfOffset(info:any, glyph_index:any):number;
	static stbtt_GetGlyphBox(info:any, glyph_index:any, rect:any):boolean;
	static stbtt_GetCodepointBox(info:any, codepoint:any, rect:any):boolean;
	static stbtt_IsGlyphEmpty(info:any, glyph_index:any):boolean;
	static stbtt__close_shape(vertices:any, num_vertices:any, was_off:any, start_off:any, sx:any, sy:any, scx:any, scy:any, cx:any, cy:any):number;
	static copyVertices(from:any, to:any, offset:any, count:any):void;
	static stbtt_GetGlyphShape(info:any, glyph_index:any):Vector;
	static stbtt_GetGlyphHMetrics(info:any, glyph_index:any):Stbtt_temp_glyph_h_metrics;
	static stbtt_GetGlyphKernAdvance(info:any, glyph1:any, glyph2:any):number;
	static stbtt_GetCodepointKernAdvance(info:any, ch1:any, ch2:any):number;
	static stbtt_GetCodepointHMetrics(info:any, codepoint:any):Stbtt_temp_glyph_h_metrics;
	static stbtt_GetFontVMetrics(info:any):Stbtt_temp_font_v_metrics;
	static stbtt_GetFontBoundingBox(info:any):Stbtt_temp_rect;
	static stbtt_ScaleForPixelHeight(info:any, height:any):number;
	static stbtt_ScaleForMappingEmToPixels(info:any, pixels:any):number;
	static stbtt_GetGlyphBitmapBoxSubpixel(font:any, glyph:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any):Stbtt_temp_rect;
	static stbtt_GetGlyphBitmapBox(font:any, glyph:any, scale_x:any, scale_y:any):Stbtt_temp_rect;
	static stbtt_GetCodepointBitmapBoxSubpixel(font:any, codepoint:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any):Stbtt_temp_rect;
	static stbtt_GetCodepointBitmapBox(font:any, codepoint:any, scale_x:any, scale_y:any):Stbtt_temp_rect;
	static stbtt__new_active(e:any, eIndex:any, off_x:any, start_point:any):Stbtt__active_edge;
	static stbtt__handle_clipped_edge(scanline:any, scanlineIndex:any, x:any, e:any, x0:any, y0:any, x1:any, y1:any):void;
	static stbtt__fill_active_edges_new(scanline:any, scanline_fill:any, scanline_fillIndex:any, len:any, e:any, y_top:any):void;
	static stbtt__rasterize_sorted_edges(result:any, e:any, n:any, vsubsample:any, off_x:any, off_y:any):void;
	static STBTT__COMPARE(a:any, b:any):boolean;
	static stbtt__sort_edges_ins_sort(p:any, n:any):void;
	static stbtt__sort_edges_quicksort(p:any, pIndex:any, n:any):void;
	static stbtt__sort_edges(p:any, n:any):void;
	static stbtt__rasterize(result:any, pts:any, wcount:any, windings:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any, off_x:any, off_y:any, invert:any):void;
	static stbtt__add_point(points:any, n:any, x:any, y:any):void;
	static stbtt__tesselate_curve(points:any, num_points:any, x0:any, y0:any, x1:any, y1:any, x2:any, y2:any, objspace_flatness_squared:any, n:any):number;
	static stbtt_FlattenCurves(vertices:any, num_verts:any, objspace_flatness:any, contour_lengths:any, num_contours:any):Vector;
	static stbtt_Rasterize(result:any, flatness_in_pixels:any, vertices:any, num_verts:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any, x_off:any, y_off:any, invert:any):void;
	static stbtt_GetGlyphBitmapSubpixel(info:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any, glyph:any, region:any):Blob;
	static stbtt_GetGlyphBitmap(info:any, scale_x:any, scale_y:any, glyph:any, region:any):Blob;
	static stbtt_MakeGlyphBitmapSubpixel(info:any, output:any, output_offset:any, out_w:any, out_h:any, out_stride:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any, glyph:any):void;
	static stbtt_MakeGlyphBitmap(info:any, output:any, output_offset:any, out_w:any, out_h:any, out_stride:any, scale_x:any, scale_y:any, glyph:any):void;
	static stbtt_GetCodepointBitmapSubpixel(info:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any, codepoint:any, region:any):Blob;
	static stbtt_MakeCodepointBitmapSubpixel(info:any, output:any, output_offset:any, out_w:any, out_h:any, out_stride:any, scale_x:any, scale_y:any, shift_x:any, shift_y:any, codepoint:any):void;
	static stbtt_GetCodepointBitmap(info:any, scale_x:any, scale_y:any, codepoint:any, region:any):Blob;
	static stbtt_MakeCodepointBitmap(info:any, output:any, output_offset:any, out_w:any, out_h:any, out_stride:any, scale_x:any, scale_y:any, codepoint:any):void;
	static stbtt_BakeFontBitmap(data:any, offset:any, pixel_height:any, pixels:any, pw:any, ph:any, chars:any, chardata:any):number;
	static stbtt_GetBakedQuad(chardata:any, pw:any, ph:any, char_index:any, xpos:any, ypos:any, q:any, opengl_fillrule:any):void;


}

}

export default kha.graphics2.truetype.StbTruetype;