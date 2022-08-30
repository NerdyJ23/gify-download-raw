// ==UserScript==
// @name         Giphy unfucker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gets you the actual Giphy source file
// @author       You
// @match        https://giphy.com/gifs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=giphy.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("[class ^= 'Navigation-sc']").append(`
	<div>
	    <button type="button" id="downloadImage"> Download the gif >:3 </button>
    </div>
	`);
    // Your code here...
	registerEvents();
})();

function getImageSrc() {
    const vidlink = $("video").attr('src');
	var window = open(vidlink, "newwindow");
	setTimeout(() => {
		console.log(window);
	}, 2000);
	/*fetch(vidlink)
	.then((response) => {
		return response.blob()
	})
	.then((blob) => {
		var reader = new FileReader();
		reader.readAsText(blob);

		reader.onloadend = function() {
			console.log(reader.result);
		}
	});*/
	console.log(vidlink);
}

function registerEvents() {
    $("#downloadImage").on("click", function() {
		getImageSrc();
	});
}
