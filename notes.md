# Typescript Tutorial For Beginners: The Missing Guide (2019) 

[Link to Tutorial](https://www.valentinog.com/blog/typescript/)

---

## What is Typescript

* typed superset of Javascript
* compiles down to Vanilla Javascript


## Why Typescript

* catch serious and silly mistakes in the code
* codebase will become wellstructured and almost self-documenting
* improved auto-completion

## Typescript Set Up
* `npm init -y`
	* to create an app
* `npm i typescript --save-dev` 
	* to add typescript as a dev dependency
* in package.json
	```
		"scripts": {
			"tsc": "tsc"
		}
	```
	* 	This allows us to easily run the Typescript compiler
* `npm run tsc -- --init`
	* generates config file for typescript
	*  replace all the original content with
		```json
			{ 
				"compilerOptions": {
					"target": "es5",
					"strict": true, 
					"noImplicitAny": true,
					"alwaysStrict": true
				}
			}
		```
		* target determines the desired Javascript version that Typescript will compile down to 
		* strict will have Typescript enforce the maximum level of type checks on the code
		* noImplicitAny will cause Typescript to complain when variables are not defined
		* alwaysStrict will cause Typescript to emit "use strict" at the top of very javascript file

## A couple of words on "types"
* the type "any" means that the variable can be any type
	
## Interfaces and Fields
*  interfaces help in shaping "models" across the application so that any developer can pick that model and conform to it when writing code
* failing to comply with the model will cause an error at compilation time
* we can make an interfaces fields optional with ?