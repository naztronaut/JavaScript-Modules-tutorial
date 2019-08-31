/*
	numberModule.js
	Title: JavaScript Modules Tutorial
	Author: Nazmus
	URL: https://www.easyprogramming.net
	Github: https://github.com/naztronaut/

	Number module with individual exports
*/

export const current = 100;

export function twiceRadius(rad) {
    return 2 * (Math.PI * rad * rad);
}

export function powerOfFive(num) {
    return Math.pow(num, 5);
}