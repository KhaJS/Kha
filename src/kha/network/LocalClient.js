// Class: kha.network.LocalClient

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
function kha_network_Client() {return require("./../../kha/network/Client");}

// Constructor

var LocalClient = function(id) {
	this.myId = id;
}

// Meta

LocalClient.__name__ = ["kha","network","LocalClient"];
LocalClient.__interfaces__ = [(kha_network_Client().default)];
LocalClient.prototype = {
	send: function(bytes,mandatory) {
	},
	receive: function(receiver) {
	},
	onClose: function(close) {
	},
	get_controllers: function() {
		return null;
	},
	get_id: function() {
		return this.myId;
	}
};
LocalClient.prototype.__class__ = LocalClient.prototype.constructor = $hxClasses["kha.network.LocalClient"] = LocalClient;

// Init



// Statics




// Export

exports.default = LocalClient;