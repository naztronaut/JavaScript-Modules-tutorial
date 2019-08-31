/*
	main.js
	Title: JavaScript Modules Tutorial
	Author: Nazmus
	URL: https://www.easyprogramming.net
	Github: https://github.com/naztronaut/

	Top level module
*/

import * as texts from './textModule.js';
import {twiceRadius, current, powerOfFive as pof} from './numberModule.js';

document.querySelector('#funnyText').innerText = texts.funnyCase(document.querySelector('#funnyText').innerText);

document.querySelector('#trimAll').innerText = texts.trimAll(document.querySelector('#trimAll').innerText);

document.querySelector('#areaCircle').innerText = twiceRadius(5);

document.querySelector('#current').innerText = current;

document.querySelector('#powerOfFive').innerText = pof(10);