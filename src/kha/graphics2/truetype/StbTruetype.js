// Class: kha.graphics2.truetype.StbTruetype

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $import = require("./../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function HxOverrides() {return require("./../../../HxOverrides");}
function kha_graphics2_truetype_Stbtt_$vertex() {return require("./../../../kha/graphics2/truetype/Stbtt_vertex");}
function Std() {return require("./../../../Std");}
function kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics() {return require("./../../../kha/graphics2/truetype/Stbtt_temp_glyph_h_metrics");}
function kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics() {return require("./../../../kha/graphics2/truetype/Stbtt_temp_font_v_metrics");}
function kha_graphics2_truetype_Stbtt_$temp_$rect() {return require("./../../../kha/graphics2/truetype/Stbtt_temp_rect");}
function kha_graphics2_truetype_Stbtt_$_$active_$edge() {return require("./../../../kha/graphics2/truetype/Stbtt__active_edge");}
function kha_graphics2_truetype_Stbtt_$_$edge() {return require("./../../../kha/graphics2/truetype/Stbtt__edge");}
function kha_graphics2_truetype_Stbtt_$_$point() {return require("./../../../kha/graphics2/truetype/Stbtt__point");}
function kha_graphics2_truetype_VectorOfIntPointer() {return require("./../../../kha/graphics2/truetype/VectorOfIntPointer");}
function kha_graphics2_truetype_Stbtt_$_$bitmap() {return require("./../../../kha/graphics2/truetype/Stbtt__bitmap");}
function kha_internal_BytesBlob() {return require("./../../../kha/internal/BytesBlob");}
function kha_graphics2_truetype_Stbtt_$fontinfo() {return require("./../../../kha/graphics2/truetype/Stbtt_fontinfo");}

// Constructor

var StbTruetype = function(){}

// Meta

StbTruetype.__name__ = ["kha","graphics2","truetype","StbTruetype"];
StbTruetype.prototype = {
	
};
StbTruetype.prototype.__class__ = StbTruetype.prototype.constructor = $hxClasses["kha.graphics2.truetype.StbTruetype"] = StbTruetype;

// Init



// Statics

StbTruetype.STBTT_assert = function(value) {
	if(!value) {
		throw new (js__$Boot_HaxeError().default)("Error");
	}
}
StbTruetype.STBTT_POINT_SIZE = function(x) {
	return -x;
}
StbTruetype.ttBYTE = function(p,pos) {
	if(pos == null) {
		pos = 0;
	}
	return p.readU8(pos);
}
StbTruetype.ttCHAR = function(p,pos) {
	if(pos == null) {
		pos = 0;
	}
	var n = p.readU8(pos);
	if(n >= 128) {
		return n - 256;
	}
	return n;
}
StbTruetype.ttUSHORT = function(p,pos) {
	if(pos == null) {
		pos = 0;
	}
	var ch1 = p.readU8(pos);
	var ch2 = p.readU8(pos + 1);
	return ch2 | ch1 << 8;
}
StbTruetype.ttSHORT = function(p,pos) {
	if(pos == null) {
		pos = 0;
	}
	var ch1 = p.readU8(pos);
	var ch2 = p.readU8(pos + 1);
	var n = ch2 | ch1 << 8;
	if((n & 32768) != 0) {
		return n - 65536;
	}
	return n;
}
StbTruetype.ttULONG = function(p,pos) {
	if(pos == null) {
		pos = 0;
	}
	return StbTruetype.ttLONG(p,pos);
}
StbTruetype.ttLONG = function(p,pos) {
	if(pos == null) {
		pos = 0;
	}
	var ch1 = p.readU8(pos);
	var ch2 = p.readU8(pos + 1);
	var ch3 = p.readU8(pos + 2);
	var ch4 = p.readU8(pos + 3);
	return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
}
StbTruetype.ttFixed = function(p,pos) {
	if(pos == null) {
		pos = 0;
	}
	return StbTruetype.ttLONG(p,pos);
}
StbTruetype.stbtt_tag4 = function(p,pos,c0,c1,c2,c3) {
	if(p.readU8(pos) == c0 && p.readU8(pos + 1) == c1 && p.readU8(pos + 2) == c2) {
		return p.readU8(pos + 3) == c3;
	} else {
		return false;
	}
}
StbTruetype.stbtt_tag = function(p,pos,str) {
	return StbTruetype.stbtt_tag4(p,pos,(HxOverrides().default).cca(str,0),(HxOverrides().default).cca(str,1),(HxOverrides().default).cca(str,2),(HxOverrides().default).cca(str,3));
}
StbTruetype.stbtt__isfont = function(font) {
	if(StbTruetype.stbtt_tag4(font,0,(HxOverrides().default).cca("1",0),0,0,0)) {
		return true;
	}
	if(StbTruetype.stbtt_tag(font,0,"typ1")) {
		return true;
	}
	if(StbTruetype.stbtt_tag(font,0,"OTTO")) {
		return true;
	}
	if(StbTruetype.stbtt_tag4(font,0,0,1,0,0)) {
		return true;
	}
	return false;
}
StbTruetype.stbtt__find_table = function(data,fontstart,tag) {
	var num_tables = StbTruetype.ttUSHORT(data,fontstart + 4);
	var tabledir = fontstart + 12;
	var _g1 = 0;
	var _g = num_tables;
	while(_g1 < _g) {
		var i = _g1++;
		var loc = tabledir + 16 * i;
		if(StbTruetype.stbtt_tag(data,loc,tag)) {
			return StbTruetype.ttULONG(data,loc + 8);
		}
	}
	return 0;
}
StbTruetype.stbtt_GetFontOffsetForIndex = function(font_collection,index) {
	if(StbTruetype.stbtt__isfont(font_collection)) {
		if(index == 0) {
			return 0;
		} else {
			return -1;
		}
	}
	if(StbTruetype.stbtt_tag(font_collection,0,"ttcf")) {
		if(StbTruetype.ttULONG(font_collection,4) == 65536 || StbTruetype.ttULONG(font_collection,4) == 131072) {
			var n = StbTruetype.ttLONG(font_collection,8);
			if(index >= n) {
				return -1;
			}
			return StbTruetype.ttULONG(font_collection,12 + index * 4);
		}
	}
	return -1;
}
StbTruetype.stbtt_InitFont = function(info,data,fontstart) {
	var cmap;
	var t;
	var numTables;
	info.data = data;
	info.fontstart = fontstart;
	cmap = StbTruetype.stbtt__find_table(data,fontstart,"cmap");
	info.loca = StbTruetype.stbtt__find_table(data,fontstart,"loca");
	info.head = StbTruetype.stbtt__find_table(data,fontstart,"head");
	info.glyf = StbTruetype.stbtt__find_table(data,fontstart,"glyf");
	info.hhea = StbTruetype.stbtt__find_table(data,fontstart,"hhea");
	info.hmtx = StbTruetype.stbtt__find_table(data,fontstart,"hmtx");
	info.kern = StbTruetype.stbtt__find_table(data,fontstart,"kern");
	if(cmap == 0 || info.loca == 0 || info.head == 0 || info.glyf == 0 || info.hhea == 0 || info.hmtx == 0) {
		return false;
	}
	t = StbTruetype.stbtt__find_table(data,fontstart,"maxp");
	if(t != 0) {
		info.numGlyphs = StbTruetype.ttUSHORT(data,t + 4);
	} else {
		info.numGlyphs = 65535;
	}
	numTables = StbTruetype.ttUSHORT(data,cmap + 2);
	info.index_map = 0;
	var _g1 = 0;
	var _g = numTables;
	while(_g1 < _g) {
		var i = _g1++;
		var encoding_record = cmap + 4 + 8 * i;
		var _g2 = StbTruetype.ttUSHORT(data,encoding_record);
		switch(_g2) {
		case 0:
			info.index_map = cmap + StbTruetype.ttULONG(data,encoding_record + 4);
			break;
		case 3:
			var _g21 = StbTruetype.ttUSHORT(data,encoding_record + 2);
			switch(_g21) {
			case 1:case 10:
				info.index_map = cmap + StbTruetype.ttULONG(data,encoding_record + 4);
				break;
			}
			break;
		}
	}
	if(info.index_map == 0) {
		return false;
	}
	info.indexToLocFormat = StbTruetype.ttUSHORT(data,info.head + 50);
	return true;
}
StbTruetype.stbtt_FindGlyphIndex = function(info,unicode_codepoint) {
	var data = info.data;
	var index_map = info.index_map;
	var format = StbTruetype.ttUSHORT(data,index_map);
	if(format == 0) {
		var bytes = StbTruetype.ttUSHORT(data,index_map + 2);
		if(unicode_codepoint < bytes - 6) {
			return StbTruetype.ttBYTE(data,index_map + 6 + unicode_codepoint);
		}
		return 0;
	} else if(format == 6) {
		var first = StbTruetype.ttUSHORT(data,index_map + 6);
		var count = StbTruetype.ttUSHORT(data,index_map + 8);
		if(unicode_codepoint >= first && unicode_codepoint < first + count) {
			return StbTruetype.ttUSHORT(data,index_map + 10 + (unicode_codepoint - first) * 2);
		}
		return 0;
	} else if(format == 2) {
		StbTruetype.STBTT_assert(false);
		return 0;
	} else if(format == 4) {
		var segcount = StbTruetype.ttUSHORT(data,index_map + 6) >> 1;
		var searchRange = StbTruetype.ttUSHORT(data,index_map + 8) >> 1;
		var entrySelector = StbTruetype.ttUSHORT(data,index_map + 10);
		var rangeShift = StbTruetype.ttUSHORT(data,index_map + 12) >> 1;
		var endCount = index_map + 14;
		var search = endCount;
		if(unicode_codepoint > 65535) {
			return 0;
		}
		if(unicode_codepoint >= StbTruetype.ttUSHORT(data,search + rangeShift * 2)) {
			search += rangeShift * 2;
		}
		search -= 2;
		while(entrySelector != 0) {
			var end;
			searchRange >>= 1;
			end = StbTruetype.ttUSHORT(data,search + searchRange * 2);
			if(unicode_codepoint > end) {
				search += searchRange * 2;
			}
			--entrySelector;
		}
		search += 2;
		var offset;
		var start;
		var item = search - endCount >> 1;
		StbTruetype.STBTT_assert(unicode_codepoint <= StbTruetype.ttUSHORT(data,endCount + 2 * item));
		start = StbTruetype.ttUSHORT(data,index_map + 14 + segcount * 2 + 2 + 2 * item);
		if(unicode_codepoint < start) {
			return 0;
		}
		offset = StbTruetype.ttUSHORT(data,index_map + 14 + segcount * 6 + 2 + 2 * item);
		if(offset == 0) {
			return unicode_codepoint + StbTruetype.ttSHORT(data,index_map + 14 + segcount * 4 + 2 + 2 * item);
		}
		return StbTruetype.ttUSHORT(data,offset + (unicode_codepoint - start) * 2 + index_map + 14 + segcount * 6 + 2 + 2 * item);
	} else if(format == 12 || format == 13) {
		var ngroups = StbTruetype.ttULONG(data,index_map + 12);
		var low;
		var high;
		low = 0;
		high = ngroups;
		while(low < high) {
			var mid = low + (high - low >> 1);
			var start_char = StbTruetype.ttULONG(data,index_map + 16 + mid * 12);
			var end_char = StbTruetype.ttULONG(data,index_map + 16 + mid * 12 + 4);
			if(unicode_codepoint < start_char) {
				high = mid;
			} else if(unicode_codepoint > end_char) {
				low = mid + 1;
			} else {
				var start_glyph = StbTruetype.ttULONG(data,index_map + 16 + mid * 12 + 8);
				if(format == 12) {
					return start_glyph + unicode_codepoint - start_char;
				} else {
					return start_glyph;
				}
			}
		}
		return 0;
	}
	StbTruetype.STBTT_assert(false);
	return 0;
}
StbTruetype.stbtt_GetCodepointShape = function(info,unicode_codepoint) {
	return StbTruetype.stbtt_GetGlyphShape(info,StbTruetype.stbtt_FindGlyphIndex(info,unicode_codepoint));
}
StbTruetype.stbtt_setvertex = function(v,type,x,y,cx,cy) {
	v.type = type;
	v.x = x;
	v.y = y;
	v.cx = cx;
	v.cy = cy;
}
StbTruetype.stbtt__GetGlyfOffset = function(info,glyph_index) {
	var g1;
	var g2;
	if(glyph_index >= info.numGlyphs) {
		return -1;
	}
	if(info.indexToLocFormat >= 2) {
		return -1;
	}
	if(info.indexToLocFormat == 0) {
		g1 = info.glyf + StbTruetype.ttUSHORT(info.data,info.loca + glyph_index * 2) * 2;
		g2 = info.glyf + StbTruetype.ttUSHORT(info.data,info.loca + glyph_index * 2 + 2) * 2;
	} else {
		g1 = info.glyf + StbTruetype.ttULONG(info.data,info.loca + glyph_index * 4);
		g2 = info.glyf + StbTruetype.ttULONG(info.data,info.loca + glyph_index * 4 + 4);
	}
	if(g1 == g2) {
		return -1;
	} else {
		return g1;
	}
}
StbTruetype.stbtt_GetGlyphBox = function(info,glyph_index,rect) {
	var g = StbTruetype.stbtt__GetGlyfOffset(info,glyph_index);
	if(g < 0) {
		return false;
	}
	rect.x0 = StbTruetype.ttSHORT(info.data,g + 2);
	rect.y0 = StbTruetype.ttSHORT(info.data,g + 4);
	rect.x1 = StbTruetype.ttSHORT(info.data,g + 6);
	rect.y1 = StbTruetype.ttSHORT(info.data,g + 8);
	return true;
}
StbTruetype.stbtt_GetCodepointBox = function(info,codepoint,rect) {
	return StbTruetype.stbtt_GetGlyphBox(info,StbTruetype.stbtt_FindGlyphIndex(info,codepoint),rect);
}
StbTruetype.stbtt_IsGlyphEmpty = function(info,glyph_index) {
	var numberOfContours;
	var g = StbTruetype.stbtt__GetGlyfOffset(info,glyph_index);
	if(g < 0) {
		return true;
	}
	numberOfContours = StbTruetype.ttSHORT(info.data,g);
	return numberOfContours == 0;
}
StbTruetype.stbtt__close_shape = function(vertices,num_vertices,was_off,start_off,sx,sy,scx,scy,cx,cy) {
	if(start_off) {
		if(was_off) {
			StbTruetype.stbtt_setvertex(vertices[num_vertices++],3,cx + scx >> 1,cy + scy >> 1,cx,cy);
		}
		StbTruetype.stbtt_setvertex(vertices[num_vertices++],3,sx,sy,scx,scy);
	} else if(was_off) {
		StbTruetype.stbtt_setvertex(vertices[num_vertices++],3,sx,sy,cx,cy);
	} else {
		StbTruetype.stbtt_setvertex(vertices[num_vertices++],2,sx,sy,0,0);
	}
	return num_vertices;
}
StbTruetype.copyVertices = function(from,to,offset,count) {
	var _g1 = 0;
	var _g = count;
	while(_g1 < _g) {
		var i = _g1++;
		to[offset + i] = from[i];
	}
}
StbTruetype.stbtt_GetGlyphShape = function(info,glyph_index) {
	var numberOfContours;
	var endPtsOfContours;
	var data = info.data;
	var vertices = null;
	var num_vertices = 0;
	var g = StbTruetype.stbtt__GetGlyfOffset(info,glyph_index);
	if(g < 0) {
		return null;
	}
	numberOfContours = StbTruetype.ttSHORT(data,g);
	if(numberOfContours > 0) {
		var flags = 0;
		var flagcount;
		var ins;
		var j = 0;
		var m;
		var n;
		var next_move = 0;
		var off = 0;
		var was_off = false;
		var start_off = false;
		var x;
		var y;
		var cx;
		var cy;
		var sx;
		var sy;
		var scx;
		var scy;
		var points;
		var pointsIndex = 0;
		endPtsOfContours = data.sub(g + 10,data.get_length() - (g + 10));
		ins = StbTruetype.ttUSHORT(data,g + 10 + numberOfContours * 2);
		points = data.sub(g + 10 + numberOfContours * 2 + 2 + ins,data.get_length() - (g + 10 + numberOfContours * 2 + 2 + ins));
		n = 1 + StbTruetype.ttUSHORT(endPtsOfContours,numberOfContours * 2 - 2);
		m = n + 2 * numberOfContours;
		var this1 = new Array(m);
		vertices = this1;
		if(vertices == null) {
			return null;
		} else {
			var _g1 = 0;
			var _g = vertices.length;
			while(_g1 < _g) {
				var i = _g1++;
				vertices[i] = new (kha_graphics2_truetype_Stbtt_$vertex().default)();
			}
		}
		next_move = 0;
		flagcount = 0;
		off = m - n;
		var _g11 = 0;
		var _g2 = n;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(flagcount == 0) {
				flags = points.readU8(pointsIndex++);
				if((flags & 8) != 0) {
					flagcount = points.readU8(pointsIndex++);
				}
			} else {
				--flagcount;
			}
			vertices[off + i1].type = flags;
		}
		x = 0;
		var _g12 = 0;
		var _g3 = n;
		while(_g12 < _g3) {
			var i2 = _g12++;
			flags = vertices[off + i2].type;
			if((flags & 2) != 0) {
				var dx = points.readU8(pointsIndex++);
				x += (flags & 16) != 0 ? dx : -dx;
			} else if((flags & 16) == 0) {
				var value;
				var ch1 = points.readU8(pointsIndex);
				var ch2 = points.readU8(pointsIndex + 1);
				var n1 = ch2 | ch1 << 8;
				if((n1 & 32768) != 0) {
					value = n1 - 65536;
				} else {
					value = n1;
				}
				x += value;
				pointsIndex += 2;
			}
			vertices[off + i2].x = x;
		}
		y = 0;
		var _g13 = 0;
		var _g4 = n;
		while(_g13 < _g4) {
			var i3 = _g13++;
			flags = vertices[off + i3].type;
			if((flags & 4) != 0) {
				var dy = points.readU8(pointsIndex++);
				y += (flags & 32) != 0 ? dy : -dy;
			} else if((flags & 32) == 0) {
				var value1;
				var ch11 = points.readU8(pointsIndex);
				var ch21 = points.readU8(pointsIndex + 1);
				var n2 = ch21 | ch11 << 8;
				if((n2 & 32768) != 0) {
					value1 = n2 - 65536;
				} else {
					value1 = n2;
				}
				y += value1;
				pointsIndex += 2;
			}
			vertices[off + i3].y = y;
		}
		num_vertices = 0;
		scy = 0;
		scx = scy;
		cy = scx;
		cx = cy;
		sy = cx;
		sx = sy;
		var i4 = 0;
		while(i4 < n) {
			flags = vertices[off + i4].type;
			x = vertices[off + i4].x;
			y = vertices[off + i4].y;
			if(next_move == i4) {
				if(i4 != 0) {
					num_vertices = StbTruetype.stbtt__close_shape(vertices,num_vertices,was_off,start_off,sx,sy,scx,scy,cx,cy);
				}
				start_off = (flags & 1) == 0;
				if(start_off) {
					scx = x;
					scy = y;
					if((vertices[off + i4 + 1].type & 1) == 0) {
						sx = x + vertices[off + i4 + 1].x >> 1;
						sy = y + vertices[off + i4 + 1].y >> 1;
					} else {
						sx = vertices[off + i4 + 1].x;
						sy = vertices[off + i4 + 1].y;
						++i4;
					}
				} else {
					sx = x;
					sy = y;
				}
				StbTruetype.stbtt_setvertex(vertices[num_vertices++],1,sx,sy,0,0);
				was_off = false;
				next_move = 1 + StbTruetype.ttUSHORT(endPtsOfContours,j * 2);
				++j;
			} else if((flags & 1) == 0) {
				if(was_off) {
					StbTruetype.stbtt_setvertex(vertices[num_vertices++],3,cx + x >> 1,cy + y >> 1,cx,cy);
				}
				cx = x;
				cy = y;
				was_off = true;
			} else {
				if(was_off) {
					StbTruetype.stbtt_setvertex(vertices[num_vertices++],3,x,y,cx,cy);
				} else {
					StbTruetype.stbtt_setvertex(vertices[num_vertices++],2,x,y,0,0);
				}
				was_off = false;
			}
			++i4;
		}
		num_vertices = StbTruetype.stbtt__close_shape(vertices,num_vertices,was_off,start_off,sx,sy,scx,scy,cx,cy);
	} else if(numberOfContours == -1) {
		var more = 1;
		var comp = data.sub(g + 10,data.get_length() - (g + 10));
		var compIndex = 0;
		num_vertices = 0;
		vertices = null;
		while(more != 0) {
			var flags1;
			var gidx;
			var comp_num_verts = 0;
			var i5;
			var comp_verts = null;
			var tmp = null;
			var mtx0 = 1;
			var mtx1 = 0;
			var mtx2 = 0;
			var mtx3 = 1;
			var mtx4 = 0;
			var mtx5 = 0;
			var m1;
			var n3;
			flags1 = StbTruetype.ttSHORT(comp,compIndex);
			compIndex += 2;
			gidx = StbTruetype.ttSHORT(comp,compIndex);
			compIndex += 2;
			if((flags1 & 2) != 0) {
				if((flags1 & 1) != 0) {
					mtx4 = StbTruetype.ttSHORT(comp,compIndex);
					compIndex += 2;
					mtx5 = StbTruetype.ttSHORT(comp,compIndex);
					compIndex += 2;
				} else {
					mtx4 = StbTruetype.ttCHAR(comp,compIndex);
					++compIndex;
					mtx5 = StbTruetype.ttCHAR(comp,compIndex);
					++compIndex;
				}
			} else {
				StbTruetype.STBTT_assert(false);
			}
			if((flags1 & 8) != 0) {
				mtx3 = StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				mtx0 = mtx3;
				compIndex += 2;
				mtx2 = 0;
				mtx1 = mtx2;
			} else if((flags1 & 64) != 0) {
				mtx0 = StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx2 = 0;
				mtx1 = mtx2;
				mtx3 = StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
			} else if((flags1 & 128) != 0) {
				mtx0 = StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx1 = StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx2 = StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
				mtx3 = StbTruetype.ttSHORT(comp,compIndex) / 16384.0;
				compIndex += 2;
			}
			m1 = Math.sqrt(mtx0 * mtx0 + mtx1 * mtx1);
			n3 = Math.sqrt(mtx2 * mtx2 + mtx3 * mtx3);
			comp_verts = StbTruetype.stbtt_GetGlyphShape(info,gidx);
			if(comp_verts == null) {
				comp_num_verts = 0;
			} else {
				comp_num_verts = comp_verts.length;
			}
			if(comp_num_verts > 0) {
				var _g14 = 0;
				var _g5 = comp_num_verts;
				while(_g14 < _g5) {
					var i6 = _g14++;
					var v = comp_verts[i6];
					var x1;
					var y1;
					x1 = v.x;
					y1 = v.y;
					v.x = (Std().default)["int"](m1 * (mtx0 * x1 + mtx2 * y1 + mtx4));
					v.y = (Std().default)["int"](n3 * (mtx1 * x1 + mtx3 * y1 + mtx5));
					x1 = v.cx;
					y1 = v.cy;
					v.cx = (Std().default)["int"](m1 * (mtx0 * x1 + mtx2 * y1 + mtx4));
					v.cy = (Std().default)["int"](n3 * (mtx1 * x1 + mtx3 * y1 + mtx5));
				}
				var this2 = new Array(num_vertices + comp_num_verts);
				tmp = this2;
				if(tmp == null) {
					return null;
				}
				if(num_vertices > 0) {
					StbTruetype.copyVertices(vertices,tmp,0,num_vertices);
				}
				StbTruetype.copyVertices(comp_verts,tmp,num_vertices,comp_num_verts);
				vertices = tmp;
				num_vertices += comp_num_verts;
			}
			more = flags1 & 32;
		}
	} else if(numberOfContours < 0) {
		StbTruetype.STBTT_assert(false);
	}
	if(vertices == null) {
		return null;
	}
	StbTruetype.STBTT_assert(vertices.length >= num_vertices);
	if(num_vertices < vertices.length) {
		var this3 = new Array(num_vertices);
		var tmp1 = this3;
		StbTruetype.copyVertices(vertices,tmp1,0,num_vertices);
		return tmp1;
	} else {
		return vertices;
	}
}
StbTruetype.stbtt_GetGlyphHMetrics = function(info,glyph_index) {
	var numOfLongHorMetrics = StbTruetype.ttUSHORT(info.data,info.hhea + 34);
	var metrics = new (kha_graphics2_truetype_Stbtt_$temp_$glyph_$h_$metrics().default)();
	if(glyph_index < numOfLongHorMetrics) {
		metrics.advanceWidth = StbTruetype.ttSHORT(info.data,info.hmtx + 4 * glyph_index);
		metrics.leftSideBearing = StbTruetype.ttSHORT(info.data,info.hmtx + 4 * glyph_index + 2);
	} else {
		metrics.advanceWidth = StbTruetype.ttSHORT(info.data,info.hmtx + 4 * (numOfLongHorMetrics - 1));
		metrics.leftSideBearing = StbTruetype.ttSHORT(info.data,info.hmtx + 4 * numOfLongHorMetrics + 2 * (glyph_index - numOfLongHorMetrics));
	}
	return metrics;
}
StbTruetype.stbtt_GetGlyphKernAdvance = function(info,glyph1,glyph2) {
	var data = info.data.sub(info.kern,info.data.get_length() - info.kern);
	var needle;
	var straw;
	var l;
	var r;
	var m;
	if(info.kern == 0) {
		return 0;
	}
	if(StbTruetype.ttUSHORT(data,2) < 1) {
		return 0;
	}
	if(StbTruetype.ttUSHORT(data,8) != 1) {
		return 0;
	}
	l = 0;
	r = StbTruetype.ttUSHORT(data,10) - 1;
	needle = glyph1 << 16 | glyph2;
	while(l <= r) {
		m = l + r >> 1;
		straw = StbTruetype.ttULONG(data,18 + m * 6);
		if(needle < straw) {
			r = m - 1;
		} else if(needle > straw) {
			l = m + 1;
		} else {
			return StbTruetype.ttSHORT(data,22 + m * 6);
		}
	}
	return 0;
}
StbTruetype.stbtt_GetCodepointKernAdvance = function(info,ch1,ch2) {
	if(info.kern == 0) {
		return 0;
	}
	return StbTruetype.stbtt_GetGlyphKernAdvance(info,StbTruetype.stbtt_FindGlyphIndex(info,ch1),StbTruetype.stbtt_FindGlyphIndex(info,ch2));
}
StbTruetype.stbtt_GetCodepointHMetrics = function(info,codepoint) {
	return StbTruetype.stbtt_GetGlyphHMetrics(info,StbTruetype.stbtt_FindGlyphIndex(info,codepoint));
}
StbTruetype.stbtt_GetFontVMetrics = function(info) {
	var metrics = new (kha_graphics2_truetype_Stbtt_$temp_$font_$v_$metrics().default)();
	metrics.ascent = StbTruetype.ttSHORT(info.data,info.hhea + 4);
	metrics.descent = StbTruetype.ttSHORT(info.data,info.hhea + 6);
	metrics.lineGap = StbTruetype.ttSHORT(info.data,info.hhea + 8);
	return metrics;
}
StbTruetype.stbtt_GetFontBoundingBox = function(info) {
	var rect = new (kha_graphics2_truetype_Stbtt_$temp_$rect().default)();
	rect.x0 = StbTruetype.ttSHORT(info.data,info.head + 36);
	rect.y0 = StbTruetype.ttSHORT(info.data,info.head + 38);
	rect.x1 = StbTruetype.ttSHORT(info.data,info.head + 40);
	rect.y1 = StbTruetype.ttSHORT(info.data,info.head + 42);
	return rect;
}
StbTruetype.stbtt_ScaleForPixelHeight = function(info,height) {
	var fheight = StbTruetype.ttSHORT(info.data,info.hhea + 4) - StbTruetype.ttSHORT(info.data,info.hhea + 6);
	return height / fheight;
}
StbTruetype.stbtt_ScaleForMappingEmToPixels = function(info,pixels) {
	var unitsPerEm = StbTruetype.ttUSHORT(info.data,info.head + 18);
	return pixels / unitsPerEm;
}
StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel = function(font,glyph,scale_x,scale_y,shift_x,shift_y) {
	var rect = new (kha_graphics2_truetype_Stbtt_$temp_$rect().default)();
	if(!StbTruetype.stbtt_GetGlyphBox(font,glyph,rect)) {
		rect.x0 = 0;
		rect.y0 = 0;
		rect.x1 = 0;
		rect.y1 = 0;
	} else {
		var x0 = rect.x0;
		var x1 = rect.x1;
		var y0 = rect.y0;
		var y1 = rect.y1;
		rect.x0 = Math.floor(x0 * scale_x + shift_x);
		rect.y0 = Math.floor(-y1 * scale_y + shift_y);
		rect.x1 = Math.ceil(x1 * scale_x + shift_x);
		rect.y1 = Math.ceil(-y0 * scale_y + shift_y);
	}
	return rect;
}
StbTruetype.stbtt_GetGlyphBitmapBox = function(font,glyph,scale_x,scale_y) {
	return StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(font,glyph,scale_x,scale_y,0.0,0.0);
}
StbTruetype.stbtt_GetCodepointBitmapBoxSubpixel = function(font,codepoint,scale_x,scale_y,shift_x,shift_y) {
	return StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(font,StbTruetype.stbtt_FindGlyphIndex(font,codepoint),scale_x,scale_y,shift_x,shift_y);
}
StbTruetype.stbtt_GetCodepointBitmapBox = function(font,codepoint,scale_x,scale_y) {
	return StbTruetype.stbtt_GetCodepointBitmapBoxSubpixel(font,codepoint,scale_x,scale_y,0.0,0.0);
}
StbTruetype.stbtt__new_active = function(e,eIndex,off_x,start_point) {
	var z = new (kha_graphics2_truetype_Stbtt_$_$active_$edge().default)();
	var dxdy = (e[eIndex].x1 - e[eIndex].x0) / (e[eIndex].y1 - e[eIndex].y0);
	if(z == null) {
		return z;
	}
	z.fdx = dxdy;
	z.fdy = dxdy != 0.0 ? 1.0 / dxdy : 0.0;
	z.fx = e[eIndex].x0 + dxdy * (start_point - e[eIndex].y0);
	z.fx -= off_x;
	z.direction = e[eIndex].invert ? 1.0 : -1.0;
	z.sy = e[eIndex].y0;
	z.ey = e[eIndex].y1;
	z.next = null;
	return z;
}
StbTruetype.stbtt__handle_clipped_edge = function(scanline,scanlineIndex,x,e,x0,y0,x1,y1) {
	if(y0 == y1) {
		return;
	}
	StbTruetype.STBTT_assert(y0 < y1);
	StbTruetype.STBTT_assert(e.sy <= e.ey);
	if(y0 > e.ey) {
		return;
	}
	if(y1 < e.sy) {
		return;
	}
	if(y0 < e.sy) {
		x0 += (x1 - x0) * (e.sy - y0) / (y1 - y0);
		y0 = e.sy;
	}
	if(y1 > e.ey) {
		x1 += (x1 - x0) * (e.ey - y1) / (y1 - y0);
		y1 = e.ey;
	}
	if(x0 == x) {
		StbTruetype.STBTT_assert(x1 <= x + 1);
	} else if(x0 == x + 1) {
		StbTruetype.STBTT_assert(x1 >= x);
	} else if(x0 <= x) {
		StbTruetype.STBTT_assert(x1 <= x);
	} else if(x0 >= x + 1) {
		StbTruetype.STBTT_assert(x1 >= x + 1);
	} else {
		StbTruetype.STBTT_assert(x1 >= x && x1 <= x + 1);
	}
	if(x0 <= x && x1 <= x) {
		var _g = scanlineIndex + x;
		var _g1 = scanline;
		_g1[_g] = _g1[_g] + e.direction * (y1 - y0);
	} else if(!(x0 >= x + 1 && x1 >= x + 1)) {
		StbTruetype.STBTT_assert(x0 >= x && x0 <= x + 1 && x1 >= x && x1 <= x + 1);
		var _g2 = scanlineIndex + x;
		var _g11 = scanline;
		_g11[_g2] = _g11[_g2] + e.direction * (y1 - y0) * (1 - (x0 - x + (x1 - x)) / 2);
	}
}
StbTruetype.stbtt__fill_active_edges_new = function(scanline,scanline_fill,scanline_fillIndex,len,e,y_top) {
	var y_bottom = y_top + 1;
	while(e != null) {
		StbTruetype.STBTT_assert(e.ey >= y_top);
		if(e.fdx == 0) {
			var x0 = e.fx;
			if(x0 < len) {
				if(x0 >= 0) {
					StbTruetype.stbtt__handle_clipped_edge(scanline,0,(Std().default)["int"](x0),e,x0,y_top,x0,y_bottom);
					StbTruetype.stbtt__handle_clipped_edge(scanline_fill,scanline_fillIndex - 1,(Std().default)["int"](x0 + 1),e,x0,y_top,x0,y_bottom);
				} else {
					StbTruetype.stbtt__handle_clipped_edge(scanline_fill,scanline_fillIndex - 1,0,e,x0,y_top,x0,y_bottom);
				}
			}
		} else {
			var x01 = e.fx;
			var dx = e.fdx;
			var xb = x01 + dx;
			var x_top;
			var x_bottom;
			var sy0;
			var sy1;
			var dy = e.fdy;
			StbTruetype.STBTT_assert(e.sy <= y_bottom && e.ey >= y_top);
			if(e.sy > y_top) {
				x_top = x01 + dx * (e.sy - y_top);
				sy0 = e.sy;
			} else {
				x_top = x01;
				sy0 = y_top;
			}
			if(e.ey < y_bottom) {
				x_bottom = x01 + dx * (e.ey - y_top);
				sy1 = e.ey;
			} else {
				x_bottom = xb;
				sy1 = y_bottom;
			}
			if(x_top >= 0 && x_bottom >= 0 && x_top < len && x_bottom < len) {
				if((Std().default)["int"](x_top) == (Std().default)["int"](x_bottom)) {
					var height;
					var x = (Std().default)["int"](x_top);
					height = sy1 - sy0;
					StbTruetype.STBTT_assert(x >= 0 && x < len);
					var _g = x;
					var _g1 = scanline;
					_g1[_g] = _g1[_g] + e.direction * (1 - (x_top - x + (x_bottom - x)) / 2) * height;
					var _g2 = scanline_fillIndex + x;
					var _g11 = scanline_fill;
					_g11[_g2] = _g11[_g2] + e.direction * height;
				} else {
					var x1;
					var x11;
					var x2;
					var y_crossing;
					var step;
					var sign;
					var area;
					if(x_top > x_bottom) {
						var t;
						sy0 = y_bottom - (sy0 - y_top);
						sy1 = y_bottom - (sy1 - y_top);
						t = sy0;
						sy0 = sy1;
						sy1 = t;
						t = x_bottom;
						x_bottom = x_top;
						x_top = t;
						dx = -dx;
						dy = -dy;
						t = x01;
						x01 = xb;
						xb = t;
					}
					x11 = (Std().default)["int"](x_top);
					x2 = (Std().default)["int"](x_bottom);
					y_crossing = (x11 + 1 - x01) * dy + y_top;
					sign = e.direction;
					area = sign * (y_crossing - sy0);
					var _g3 = x11;
					var _g12 = scanline;
					_g12[_g3] = _g12[_g3] + area * (1 - (x_top - x11 + (x11 + 1 - x11)) / 2);
					step = sign * dy;
					var _g13 = x11 + 1;
					var _g4 = x2;
					while(_g13 < _g4) {
						var x3 = _g13++;
						var _g21 = x3;
						var _g31 = scanline;
						_g31[_g21] = _g31[_g21] + (area + step / 2);
						area += step;
					}
					y_crossing += dy * (x2 - (x11 + 1));
					StbTruetype.STBTT_assert(Math.abs(area) <= 1.01);
					var _g5 = x2;
					var _g14 = scanline;
					_g14[_g5] = _g14[_g5] + (area + sign * (1 - (x2 - x2 + (x_bottom - x2)) / 2) * (sy1 - y_crossing));
					var _g6 = scanline_fillIndex + x2;
					var _g15 = scanline_fill;
					_g15[_g6] = _g15[_g6] + sign * (sy1 - sy0);
				}
			} else {
				var _g16 = 0;
				var _g7 = len;
				while(_g16 < _g7) {
					var x4 = _g16++;
					var y0 = y_top;
					var x12 = x4;
					var x21 = x4 + 1;
					var x31 = xb;
					var y3 = y_bottom;
					var y1;
					var y2;
					y1 = (x4 - x01) / dx + y_top;
					y2 = (x4 + 1 - x01) / dx + y_top;
					if(x01 < x12 && x31 > x21) {
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x12,y1);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x21,y2);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x31,y3);
					} else if(x31 < x12 && x01 > x21) {
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x21,y2);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x12,y1);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x31,y3);
					} else if(x01 < x12 && x31 > x12) {
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x12,y1);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x31,y3);
					} else if(x31 < x12 && x01 > x12) {
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x12,y1);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x12,y1,x31,y3);
					} else if(x01 < x21 && x31 > x21) {
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x21,y2);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x31,y3);
					} else if(x31 < x21 && x01 > x21) {
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x21,y2);
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x21,y2,x31,y3);
					} else {
						StbTruetype.stbtt__handle_clipped_edge(scanline,0,x4,e,x01,y0,x31,y3);
					}
				}
			}
		}
		e = e.next;
	}
}
StbTruetype.stbtt__rasterize_sorted_edges = function(result,e,n,vsubsample,off_x,off_y) {
	var active = null;
	var y;
	var j = 0;
	var i;
	var scanline;
	var scanline2;
	var scanline2Index = 0;
	var eIndex = 0;
	if(result.w > 64) {
		var length = result.w * 2 + 1;
		var this1 = new Array(length);
		scanline = this1;
	} else {
		var this2 = new Array(129);
		scanline = this2;
	}
	scanline2 = scanline;
	scanline2Index = result.w;
	y = off_y;
	e[eIndex + n].y0 = off_y + result.h + 1;
	while(j < result.h) {
		var scan_y_top = y + 0.0;
		var scan_y_bottom = y + 1.0;
		var step_value;
		var step_parent;
		step_value = active;
		step_parent = null;
		var _g1 = 0;
		var _g = result.w;
		while(_g1 < _g) {
			var i1 = _g1++;
			scanline[i1] = 0;
		}
		var _g11 = 0;
		var _g2 = result.w + 1;
		while(_g11 < _g2) {
			var i2 = _g11++;
			scanline2[scanline2Index + i2] = 0;
		}
		while(step_value != null) {
			var z = step_value;
			if(z.ey <= scan_y_top) {
				if(step_parent == null) {
					active = z.next;
					step_value = z.next;
				} else {
					step_parent.next = z.next;
					step_value = z.next;
				}
				StbTruetype.STBTT_assert(z.direction != 0);
				z.direction = 0;
			} else {
				step_parent = step_value;
				step_value = step_value.next;
			}
		}
		while(e[eIndex].y0 <= scan_y_bottom) {
			if(e[eIndex].y0 != e[eIndex].y1) {
				var z1 = StbTruetype.stbtt__new_active(e,eIndex,off_x,scan_y_top);
				StbTruetype.STBTT_assert(z1.ey >= scan_y_top);
				z1.next = active;
				active = z1;
			}
			++eIndex;
		}
		if(active != null) {
			StbTruetype.stbtt__fill_active_edges_new(scanline,scanline2,scanline2Index + 1,result.w,active,scan_y_top);
		}
		var sum = 0;
		var _g12 = 0;
		var _g3 = result.w;
		while(_g12 < _g3) {
			var i3 = _g12++;
			var k;
			var m;
			sum += scanline2[scanline2Index + i3];
			k = scanline[i3] + sum;
			k = Math.abs(k) * 255.0 + 0.5;
			m = (Std().default)["int"](k);
			if(m > 255) {
				m = 255;
			}
			result.pixels.writeU8(result.pixels_offset + j * result.stride + i3,m);
		}
		step_parent = null;
		step_value = active;
		while(step_value != null) {
			var z2 = step_value;
			z2.fx += z2.fdx;
			step_parent = step_value;
			step_value = step_value.next;
		}
		++y;
		++j;
	}
}
StbTruetype.STBTT__COMPARE = function(a,b) {
	return a.y0 < b.y0;
}
StbTruetype.stbtt__sort_edges_ins_sort = function(p,n) {
	var i;
	var j;
	var _g1 = 1;
	var _g = n;
	while(_g1 < _g) {
		var i1 = _g1++;
		var t = p[i1];
		var a = t;
		j = i1;
		while(j > 0) {
			var b = p[j - 1];
			var c = StbTruetype.STBTT__COMPARE(a,b);
			if(!c) {
				break;
			}
			p[j] = p[j - 1];
			--j;
		}
		if(i1 != j) {
			p[j] = t;
		}
	}
}
StbTruetype.stbtt__sort_edges_quicksort = function(p,pIndex,n) {
	while(n > 12) {
		var t;
		var c01;
		var c12;
		var c;
		var m;
		var i;
		var j;
		m = n >> 1;
		c01 = StbTruetype.STBTT__COMPARE(p[pIndex],p[pIndex + m]);
		c12 = StbTruetype.STBTT__COMPARE(p[pIndex + m],p[pIndex + n - 1]);
		if(c01 != c12) {
			var z;
			c = StbTruetype.STBTT__COMPARE(p[pIndex],p[pIndex + n - 1]);
			if(c == c12) {
				z = 0;
			} else {
				z = n - 1;
			}
			t = p[pIndex + z];
			p[pIndex + z] = p[pIndex + m];
			p[pIndex + m] = t;
		}
		t = p[pIndex];
		p[pIndex] = p[pIndex + m];
		p[pIndex + m] = t;
		i = 1;
		j = n - 1;
		while(true) {
			while(StbTruetype.STBTT__COMPARE(p[pIndex + i],p[pIndex])) ++i;
			while(StbTruetype.STBTT__COMPARE(p[pIndex],p[pIndex + j])) --j;
			if(i >= j) {
				break;
			}
			t = p[pIndex + i];
			p[pIndex + i] = p[pIndex + j];
			p[pIndex + j] = t;
			++i;
			--j;
		}
		if(j < n - i) {
			StbTruetype.stbtt__sort_edges_quicksort(p,pIndex,j);
			pIndex += i;
			n -= i;
		} else {
			StbTruetype.stbtt__sort_edges_quicksort(p,pIndex + i,n - i);
			n = j;
		}
	}
}
StbTruetype.stbtt__sort_edges = function(p,n) {
	StbTruetype.stbtt__sort_edges_quicksort(p,0,n);
	StbTruetype.stbtt__sort_edges_ins_sort(p,n);
}
StbTruetype.stbtt__rasterize = function(result,pts,wcount,windings,scale_x,scale_y,shift_x,shift_y,off_x,off_y,invert) {
	var y_scale_inv = invert ? -scale_y : scale_y;
	var e;
	var n;
	var i;
	var j;
	var k;
	var m;
	var vsubsample = 1;
	var ptsIndex = 0;
	n = 0;
	var _g1 = 0;
	var _g = windings;
	while(_g1 < _g) {
		var i1 = _g1++;
		n += wcount[i1];
	}
	var this1 = new Array(n + 1);
	e = this1;
	if(e == null) {
		return;
	} else {
		var _g11 = 0;
		var _g2 = e.length;
		while(_g11 < _g2) {
			var i2 = _g11++;
			e[i2] = new (kha_graphics2_truetype_Stbtt_$_$edge().default)();
		}
	}
	n = 0;
	m = 0;
	var _g12 = 0;
	var _g3 = windings;
	while(_g12 < _g3) {
		var i3 = _g12++;
		var p = pts;
		var pIndex = ptsIndex + m;
		m += wcount[i3];
		j = wcount[i3] - 1;
		var _g31 = 0;
		var _g21 = wcount[i3];
		while(_g31 < _g21) {
			var k1 = _g31++;
			var a = k1;
			var b = j;
			if(p[pIndex + j].y == p[pIndex + k1].y) {
				j = k1;
				continue;
			}
			e[n].invert = false;
			if(invert ? p[pIndex + j].y > p[pIndex + k1].y : p[pIndex + j].y < p[pIndex + k1].y) {
				e[n].invert = true;
				a = j;
				b = k1;
			}
			e[n].x0 = p[pIndex + a].x * scale_x + shift_x;
			e[n].y0 = (p[pIndex + a].y * y_scale_inv + shift_y) * vsubsample;
			e[n].x1 = p[pIndex + b].x * scale_x + shift_x;
			e[n].y1 = (p[pIndex + b].y * y_scale_inv + shift_y) * vsubsample;
			++n;
			j = k1;
		}
	}
	StbTruetype.stbtt__sort_edges(e,n);
	StbTruetype.stbtt__rasterize_sorted_edges(result,e,n,vsubsample,off_x,off_y);
}
StbTruetype.stbtt__add_point = function(points,n,x,y) {
	if(points == null) {
		return;
	}
	points[n].x = x;
	points[n].y = y;
}
StbTruetype.stbtt__tesselate_curve = function(points,num_points,x0,y0,x1,y1,x2,y2,objspace_flatness_squared,n) {
	var mx = (x0 + 2 * x1 + x2) / 4;
	var my = (y0 + 2 * y1 + y2) / 4;
	var dx = (x0 + x2) / 2 - mx;
	var dy = (y0 + y2) / 2 - my;
	if(n > 16) {
		return 1;
	}
	if(dx * dx + dy * dy > objspace_flatness_squared) {
		StbTruetype.stbtt__tesselate_curve(points,num_points,x0,y0,(x0 + x1) / 2.0,(y0 + y1) / 2.0,mx,my,objspace_flatness_squared,n + 1);
		StbTruetype.stbtt__tesselate_curve(points,num_points,mx,my,(x1 + x2) / 2.0,(y1 + y2) / 2.0,x2,y2,objspace_flatness_squared,n + 1);
	} else {
		StbTruetype.stbtt__add_point(points,num_points.value,x2,y2);
		num_points.value += 1;
	}
	return 1;
}
StbTruetype.stbtt_FlattenCurves = function(vertices,num_verts,objspace_flatness,contour_lengths,num_contours) {
	var points = null;
	var num_points = 0;
	var objspace_flatness_squared = objspace_flatness * objspace_flatness;
	var i;
	var n = 0;
	var start = 0;
	var pass;
	var _g1 = 0;
	var _g = num_verts;
	while(_g1 < _g) {
		var i1 = _g1++;
		if(vertices[i1].type == 1) {
			++n;
		}
	}
	num_contours.value = n;
	if(n == 0) {
		return null;
	}
	var this1 = new Array(n);
	contour_lengths.value = this1;
	if(contour_lengths.value == null) {
		num_contours.value = 0;
		return null;
	}
	var _g2 = 0;
	while(_g2 < 2) {
		var pass1 = _g2++;
		var x = 0;
		var y = 0;
		if(pass1 == 1) {
			var this2 = new Array(num_points);
			points = this2;
			if(points == null) {
				contour_lengths.value = null;
				num_contours.value = 0;
				return null;
			} else {
				var _g21 = 0;
				var _g11 = points.length;
				while(_g21 < _g11) {
					var i2 = _g21++;
					points[i2] = new (kha_graphics2_truetype_Stbtt_$_$point().default)();
				}
			}
		}
		num_points = 0;
		n = -1;
		var _g22 = 0;
		var _g12 = num_verts;
		while(_g22 < _g12) {
			var i3 = _g22++;
			var _g3 = vertices[i3].type;
			switch(_g3) {
			case 1:
				if(n >= 0) {
					contour_lengths.value[n] = num_points - start;
				}
				++n;
				start = num_points;
				x = vertices[i3].x;
				y = vertices[i3].y;
				StbTruetype.stbtt__add_point(points,num_points++,x,y);
				break;
			case 2:
				x = vertices[i3].x;
				y = vertices[i3].y;
				StbTruetype.stbtt__add_point(points,num_points++,x,y);
				break;
			case 3:
				var num_points_reference = { value : num_points};
				StbTruetype.stbtt__tesselate_curve(points,num_points_reference,x,y,vertices[i3].cx,vertices[i3].cy,vertices[i3].x,vertices[i3].y,objspace_flatness_squared,0);
				num_points = num_points_reference.value;
				x = vertices[i3].x;
				y = vertices[i3].y;
				break;
			}
		}
		contour_lengths.value[n] = num_points - start;
	}
	return points;
}
StbTruetype.stbtt_Rasterize = function(result,flatness_in_pixels,vertices,num_verts,scale_x,scale_y,shift_x,shift_y,x_off,y_off,invert) {
	var scale = scale_x > scale_y ? scale_y : scale_x;
	var winding_count = 0;
	var winding_lengths = null;
	var winding_count_reference = { value : winding_count};
	var winding_lengths_reference = new (kha_graphics2_truetype_VectorOfIntPointer().default)();
	var windings = StbTruetype.stbtt_FlattenCurves(vertices,num_verts,flatness_in_pixels / scale,winding_lengths_reference,winding_count_reference);
	winding_count = winding_count_reference.value;
	winding_lengths = winding_lengths_reference.value;
	if(windings != null) {
		StbTruetype.stbtt__rasterize(result,windings,winding_lengths,winding_count,scale_x,scale_y,shift_x,shift_y,x_off,y_off,invert);
	}
}
StbTruetype.stbtt_GetGlyphBitmapSubpixel = function(info,scale_x,scale_y,shift_x,shift_y,glyph,region) {
	var ix0;
	var iy0;
	var ix1;
	var iy1;
	var gbm = new (kha_graphics2_truetype_Stbtt_$_$bitmap().default)();
	var vertices = StbTruetype.stbtt_GetGlyphShape(info,glyph);
	var num_verts = vertices.length;
	if(scale_x == 0) {
		scale_x = scale_y;
	}
	if(scale_y == 0) {
		if(scale_x == 0) {
			return null;
		}
		scale_y = scale_x;
	}
	var rect = StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(info,glyph,scale_x,scale_y,shift_x,shift_y);
	ix0 = rect.x0;
	iy0 = rect.y0;
	ix1 = rect.x1;
	iy1 = rect.y1;
	gbm.w = ix1 - ix0;
	gbm.h = iy1 - iy0;
	gbm.pixels = null;
	region.width = gbm.w;
	region.height = gbm.h;
	region.xoff = ix0;
	region.yoff = iy0;
	if(gbm.w != 0 && gbm.h != 0) {
		gbm.pixels = (kha_internal_BytesBlob().default).alloc(gbm.w * gbm.h);
		if(gbm.pixels != null) {
			gbm.stride = gbm.w;
			StbTruetype.stbtt_Rasterize(gbm,0.35,vertices,num_verts,scale_x,scale_y,shift_x,shift_y,ix0,iy0,true);
		}
	}
	return gbm.pixels;
}
StbTruetype.stbtt_GetGlyphBitmap = function(info,scale_x,scale_y,glyph,region) {
	return StbTruetype.stbtt_GetGlyphBitmapSubpixel(info,scale_x,scale_y,0.0,0.0,glyph,region);
}
StbTruetype.stbtt_MakeGlyphBitmapSubpixel = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,shift_x,shift_y,glyph) {
	var ix0 = 0;
	var iy0 = 0;
	var vertices = StbTruetype.stbtt_GetGlyphShape(info,glyph);
	var num_verts = vertices == null ? 0 : vertices.length;
	var gbm = new (kha_graphics2_truetype_Stbtt_$_$bitmap().default)();
	var rect = StbTruetype.stbtt_GetGlyphBitmapBoxSubpixel(info,glyph,scale_x,scale_y,shift_x,shift_y);
	ix0 = rect.x0;
	iy0 = rect.y0;
	gbm.pixels = output;
	gbm.pixels_offset = output_offset;
	gbm.w = out_w;
	gbm.h = out_h;
	gbm.stride = out_stride;
	if(gbm.w != 0 && gbm.h != 0) {
		StbTruetype.stbtt_Rasterize(gbm,0.35,vertices,num_verts,scale_x,scale_y,shift_x,shift_y,ix0,iy0,true);
	}
}
StbTruetype.stbtt_MakeGlyphBitmap = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,glyph) {
	StbTruetype.stbtt_MakeGlyphBitmapSubpixel(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,0.0,0.0,glyph);
}
StbTruetype.stbtt_GetCodepointBitmapSubpixel = function(info,scale_x,scale_y,shift_x,shift_y,codepoint,region) {
	return StbTruetype.stbtt_GetGlyphBitmapSubpixel(info,scale_x,scale_y,shift_x,shift_y,StbTruetype.stbtt_FindGlyphIndex(info,codepoint),region);
}
StbTruetype.stbtt_MakeCodepointBitmapSubpixel = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,shift_x,shift_y,codepoint) {
	StbTruetype.stbtt_MakeGlyphBitmapSubpixel(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,shift_x,shift_y,StbTruetype.stbtt_FindGlyphIndex(info,codepoint));
}
StbTruetype.stbtt_GetCodepointBitmap = function(info,scale_x,scale_y,codepoint,region) {
	return StbTruetype.stbtt_GetCodepointBitmapSubpixel(info,scale_x,scale_y,0.0,0.0,codepoint,region);
}
StbTruetype.stbtt_MakeCodepointBitmap = function(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,codepoint) {
	StbTruetype.stbtt_MakeCodepointBitmapSubpixel(info,output,output_offset,out_w,out_h,out_stride,scale_x,scale_y,0.0,0.0,codepoint);
}
StbTruetype.stbtt_BakeFontBitmap = function(data,offset,pixel_height,pixels,pw,ph,chars,chardata) {
	var scale;
	var x;
	var y;
	var bottom_y;
	var f = new (kha_graphics2_truetype_Stbtt_$fontinfo().default)();
	if(!StbTruetype.stbtt_InitFont(f,data,offset)) {
		return -1;
	}
	var _g1 = 0;
	var _g = pw * ph;
	while(_g1 < _g) {
		var i = _g1++;
		pixels.writeU8(i,0);
	}
	y = 1;
	x = y;
	bottom_y = 1;
	scale = StbTruetype.stbtt_ScaleForPixelHeight(f,pixel_height);
	var i1 = 0;
	var _g2 = 0;
	while(_g2 < chars.length) {
		var index = chars[_g2];
		++_g2;
		var advance;
		var lsb;
		var x0;
		var y0;
		var x1;
		var y1;
		var gw;
		var gh;
		var g = StbTruetype.stbtt_FindGlyphIndex(f,index);
		var metrics = StbTruetype.stbtt_GetGlyphHMetrics(f,g);
		advance = metrics.advanceWidth;
		lsb = metrics.leftSideBearing;
		var rect = StbTruetype.stbtt_GetGlyphBitmapBox(f,g,scale,scale);
		x0 = rect.x0;
		y0 = rect.y0;
		x1 = rect.x1;
		y1 = rect.y1;
		gw = x1 - x0;
		gh = y1 - y0;
		if(x + gw + 1 >= pw) {
			y = bottom_y;
			x = 1;
		}
		if(y + gh + 1 >= ph) {
			return -i1;
		}
		StbTruetype.STBTT_assert(x + gw < pw);
		StbTruetype.STBTT_assert(y + gh < ph);
		StbTruetype.stbtt_MakeGlyphBitmap(f,pixels,x + y * pw,gw,gh,pw,scale,scale,g);
		chardata[i1].x0 = x;
		chardata[i1].y0 = y;
		chardata[i1].x1 = x + gw;
		chardata[i1].y1 = y + gh;
		chardata[i1].xadvance = scale * advance;
		chardata[i1].xoff = x0;
		chardata[i1].yoff = y0;
		x = x + gw + 1;
		if(y + gh + 1 > bottom_y) {
			bottom_y = y + gh + 1;
		}
		++i1;
	}
	return bottom_y;
}
StbTruetype.stbtt_GetBakedQuad = function(chardata,pw,ph,char_index,xpos,ypos,q,opengl_fillrule) {
	var d3d_bias = opengl_fillrule ? 0 : -0.5;
	var ipw = 1.0 / pw;
	var iph = 1.0 / ph;
	var b = chardata[char_index];
	var round_x = Math.floor(xpos.value + b.xoff + 0.5);
	var round_y = Math.floor(ypos.value + b.yoff + 0.5);
	q.x0 = round_x + d3d_bias;
	q.y0 = round_y + d3d_bias;
	q.x1 = round_x + b.x1 - b.x0 + d3d_bias;
	q.y1 = round_y + b.y1 - b.y0 + d3d_bias;
	q.s0 = b.x0 * ipw;
	q.t0 = b.y0 * iph;
	q.s1 = b.x1 * ipw;
	q.t1 = b.y1 * iph;
	xpos.value += b.xadvance;
}
StbTruetype.STBTT_vmove = 1
StbTruetype.STBTT_vline = 2
StbTruetype.STBTT_vcurve = 3
StbTruetype.STBTT_MACSTYLE_DONTCARE = 0
StbTruetype.STBTT_MACSTYLE_BOLD = 1
StbTruetype.STBTT_MACSTYLE_ITALIC = 2
StbTruetype.STBTT_MACSTYLE_UNDERSCORE = 4
StbTruetype.STBTT_MACSTYLE_NONE = 8
StbTruetype.STBTT_PLATFORM_ID_UNICODE = 0
StbTruetype.STBTT_PLATFORM_ID_MAC = 1
StbTruetype.STBTT_PLATFORM_ID_ISO = 2
StbTruetype.STBTT_PLATFORM_ID_MICROSOFT = 3
StbTruetype.STBTT_UNICODE_EID_UNICODE_1_0 = 0
StbTruetype.STBTT_UNICODE_EID_UNICODE_1_1 = 1
StbTruetype.STBTT_UNICODE_EID_ISO_10646 = 2
StbTruetype.STBTT_UNICODE_EID_UNICODE_2_0_BMP = 3
StbTruetype.STBTT_UNICODE_EID_UNICODE_2_0_FULL = 4
StbTruetype.STBTT_MS_EID_SYMBOL = 0
StbTruetype.STBTT_MS_EID_UNICODE_BMP = 1
StbTruetype.STBTT_MS_EID_SHIFTJIS = 2
StbTruetype.STBTT_MS_EID_UNICODE_FULL = 10
StbTruetype.STBTT_MAC_EID_ROMAN = 0
StbTruetype.STBTT_MAC_EID_ARABIC = 4
StbTruetype.STBTT_MAC_EID_JAPANESE = 1
StbTruetype.STBTT_MAC_EID_HEBREW = 5
StbTruetype.STBTT_MAC_EID_CHINESE_TRAD = 2
StbTruetype.STBTT_MAC_EID_GREEK = 6
StbTruetype.STBTT_MAC_EID_KOREAN = 3
StbTruetype.STBTT_MAC_EID_RUSSIAN = 7
StbTruetype.STBTT_MS_LANG_ENGLISH = 1033
StbTruetype.STBTT_MS_LANG_ITALIAN = 1040
StbTruetype.STBTT_MS_LANG_CHINESE = 2052
StbTruetype.STBTT_MS_LANG_JAPANESE = 1041
StbTruetype.STBTT_MS_LANG_DUTCH = 1043
StbTruetype.STBTT_MS_LANG_KOREAN = 1042
StbTruetype.STBTT_MS_LANG_FRENCH = 1036
StbTruetype.STBTT_MS_LANG_RUSSIAN = 1049
StbTruetype.STBTT_MS_LANG_GERMAN = 1031
StbTruetype.STBTT_MS_LANG_SPANISH = 1033
StbTruetype.STBTT_MS_LANG_HEBREW = 1037
StbTruetype.STBTT_MS_LANG_SWEDISH = 1053
StbTruetype.STBTT_MAC_LANG_ENGLISH = 0
StbTruetype.STBTT_MAC_LANG_JAPANESE = 11
StbTruetype.STBTT_MAC_LANG_ARABIC = 12
StbTruetype.STBTT_MAC_LANG_KOREAN = 23
StbTruetype.STBTT_MAC_LANG_DUTCH = 4
StbTruetype.STBTT_MAC_LANG_RUSSIAN = 32
StbTruetype.STBTT_MAC_LANG_FRENCH = 1
StbTruetype.STBTT_MAC_LANG_SPANISH = 6
StbTruetype.STBTT_MAC_LANG_GERMAN = 2
StbTruetype.STBTT_MAC_LANG_SWEDISH = 5
StbTruetype.STBTT_MAC_LANG_HEBREW = 10
StbTruetype.STBTT_MAC_LANG_CHINESE_SIMPLIFIED = 33
StbTruetype.STBTT_MAC_LANG_ITALIAN = 3
StbTruetype.STBTT_MAC_LANG_CHINESE_TRAD = 19
StbTruetype.STBTT_MAX_OVERSAMPLE = 8
StbTruetype.STBTT_RASTERIZER_VERSION = 2

// Export

exports.default = StbTruetype;