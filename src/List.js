// Class: List

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function _$List_ListNode() {return require("./_List/ListNode");}
function _$List_ListIterator() {return require("./_List/ListIterator");}

// Constructor

var List = function() {
	this.length = 0;
}

// Meta

List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = new (_$List_ListNode().default)(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	},
	iterator: function() {
		return new (_$List_ListIterator().default)(this.h);
	}
};
List.prototype.__class__ = List.prototype.constructor = $hxClasses["List"] = List;

// Init



// Statics




// Export

exports.default = List;