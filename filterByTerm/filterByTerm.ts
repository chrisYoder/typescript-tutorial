import { ILink } from '../interfaces/interfaces'; 

type ILinks = Array<ILink>;

function filterByTerm(
	input: ILinks, 
	searchTerm: string,
	lookUpKey: string = 'url'
) : ILinks {
	if(!searchTerm) throw Error("searchTerm cannot be empty");
	if(!input.length) throw Error("input cannot be empty");
	const regex = new RegExp(searchTerm, 'i');
	return input
	.filter(function(arrayElement) { 
		return arrayElement[lookUpKey].match(regex);
	})
	// .toString();
}

const obj1: ILink = { url: "string1" };
const obj2: ILink = { url: "string2" };
const obj3: ILink = { url: "java" };

const arrOfLinks: Array<ILink> = [obj1, obj2, obj3];

const term: string = 'java';

console.log(filterByTerm(arrOfLinks, term));




