// Class: kha.network.Network

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function haxe_Log() {return require("./../../haxe/Log");}

// Constructor

var Network = function(url,port,errorCallback,closeCallback) {
	this.open = false;
	var _gthis = this;
	this.socket = new WebSocket("ws://" + url + ":" + port);
	this.socket.onerror = function(error) {
		(haxe_Log().default).trace("Network error.",{ fileName : "Network.hx", lineNumber : 14, className : "kha.network.Network", methodName : "new"});
		errorCallback();
	};
	this.socket.binaryType = "arraybuffer";
	this.socket.onopen = function() {
		_gthis.open = true;
	};
	this.socket.onclose = function(event) {
		(haxe_Log().default).trace("Network connection closed. " + Network.webSocketCloseReason(event.code) + " (" + event.reason + ").",{ fileName : "Network.hx", lineNumber : 22, className : "kha.network.Network", methodName : "new"});
		closeCallback();
	};
}

// Meta

Network.__name__ = ["kha","network","Network"];
Network.prototype = {
	send: function(bytes,mandatory) {
		if(this.open) {
			this.socket.send(bytes.getData());
		}
	},
	listen: function(listener) {
		this.socket.onmessage = function(message) {
			var tmp = (haxe_io_Bytes().default).ofData(message.data);
			listener(tmp);
		};
	}
};
Network.prototype.__class__ = Network.prototype.constructor = $hxClasses["kha.network.Network"] = Network;

// Init



// Statics

Network.webSocketCloseReason = function(code) {
	switch(code) {
	case 1000:
		return "Normal Closure";
	case 1001:
		return "Going Away";
	case 1002:
		return "Protocol error";
	case 1003:
		return "Unsupported Data";
	case 1005:
		return "No Status Rcvd";
	case 1006:
		return "Abnormal Closure";
	case 1007:
		return "Invalid frame";
	case 1008:
		return "Policy Violation";
	case 1009:
		return "Message Too Big";
	case 1010:
		return "Mandatory Ext.";
	case 1011:
		return "Internal Server Error";
	case 1015:
		return "TLS handshake";
	default:
		return "";
	}
}


// Export

exports.default = Network;