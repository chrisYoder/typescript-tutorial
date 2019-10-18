"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    var regex = new RegExp(searchTerm, 'i');
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
var obj1 = { url: "string1" };
var obj2 = { url: "string2" };
var obj3 = { url: "java" };
var arrOfLinks = [obj1, obj2, obj3];
var term = 'java';
console.log(filterByTerm(arrOfLinks, term));
