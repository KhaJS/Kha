// Class: kha.audio2.ogg.vorbis.data.Comment

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $import = require("./../../../../../import_stub").default;
function Std() {return require("./../../../../../Std");}
function haxe_ds_StringMap() {return require("./../../../../../haxe/ds/StringMap");}

// Constructor

var Comment = function() {
	this.data = new (haxe_ds_StringMap().default)();
}

// Meta

Comment.__name__ = ["kha","audio2","ogg","vorbis","data","Comment"];
Comment.prototype = {
	get_title: function() {
		return this.getString("title");
	},
	get_loopStart: function() {
		return (Std().default).parseInt(this.getString("loopstart"));
	},
	get_loopLength: function() {
		return (Std().default).parseInt(this.getString("looplength"));
	},
	get_version: function() {
		return this.getString("version");
	},
	get_album: function() {
		return this.getString("album");
	},
	get_organization: function() {
		return this.getString("organization");
	},
	get_tracknumber: function() {
		return this.getString("tracknumber");
	},
	get_performer: function() {
		return this.getString("performer");
	},
	get_copyright: function() {
		return this.getString("copyright");
	},
	get_license: function() {
		return this.getString("license");
	},
	get_artist: function() {
		return this.getString("artist");
	},
	get_description: function() {
		return this.getString("description");
	},
	get_genre: function() {
		return this.getString("genre");
	},
	get_date: function() {
		return this.getString("date");
	},
	get_location: function() {
		return this.getString("location");
	},
	get_contact: function() {
		return this.getString("contact");
	},
	get_isrc: function() {
		return this.getString("isrc");
	},
	get_artists: function() {
		return this.getArray("artist");
	},
	add: function(key,value) {
		key = key.toLowerCase();
		if(this.data.exists(key)) {
			this.data.get(key).push(value);
		} else {
			var v = [value];
			this.data.set(key,v);
		}
	},
	getString: function(key) {
		key = key.toLowerCase();
		if(this.data.exists(key)) {
			return this.data.get(key)[0];
		} else {
			return null;
		}
	},
	getArray: function(key) {
		key = key.toLowerCase();
		if(this.data.exists(key)) {
			return this.data.get(key);
		} else {
			return null;
		}
	}
};
Comment.prototype.__class__ = Comment.prototype.constructor = $hxClasses["kha.audio2.ogg.vorbis.data.Comment"] = Comment;

// Init



// Statics




// Export

exports.default = Comment;