/*
	textModule.js
	Title: JavaScript Modules Tutorial
	Author: Nazmus
	URL: https://www.easyprogramming.net
	Github: https://github.com/naztronaut/

	Text module with named export at the bottom
*/

function funnyCase(text) {
    let funnyText = '';
    
    text.split('').map( (t, i) => {
        funnyText +=
        (i%2 === 0) ? t.toUpperCase() : t.toLowerCase();
    });
    return funnyText;
}

function trimAll(text) {
    let trimmed = text.replace(/\u00a0/g,'');
    return trimmed;
}

export {funnyCase, trimAll};