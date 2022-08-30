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
    var vidlink = window.location.href;
	vidlink = vidlink.slice(vidlink.lastIndexOf('-') + 1 );
	open(`https://i.giphy.com/${vidlink}.gif`, "newwindow");
	console.log(vidlink);
}

function registerEvents() {
    $("#downloadImage").on("click", function() {
		getImageSrc();
	});
}
