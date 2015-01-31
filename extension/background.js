(function() {
'use strict';
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		var lib = details.url.replace(/http[s]?:\/\/ajax.googleapis.com/g, "");
		var newurl = "http://www.matrixcv.com/googleapis" + lib;
		//var newurl = "http://ajax.useso.com" + lib;
		//console.log(lib);
		return {redirectUrl: newurl};
	},
	{urls: ["*://ajax.googleapis.com/ajax/libs/*.js", "*://ajax.googleapis.com/ajax/libs/*.css"]},
	["blocking"]);
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		var lib = details.url.replace(/http[s]?:\/\/fonts.googleapis.com/g, "");
		var newurl = "http://fonts.useso.com" + lib;
		//console.log(lib);
		return {redirectUrl: newurl};
	},
	{urls: ["http://fonts.googleapis.com/*"]},
	["blocking"]);

})();

