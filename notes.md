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

## Typing Variables
* the more types that you give typescript the more robust it will become
* the more you help typescript understand the intent of your code the more you will be fine later.

## Extending Interfaces
* when you have two interfaces that are almost the same then you can extend the latter to have the same fields as the former.
* essentially you are borrowing properties defined in the first interfaces
* this is similar to how you can extend classes

## Indexing
* we can enter a dynamic search key allowin gus to filter any object key
* [index: string] : string;
	* allows us to access any key of an object through an index of type string.
* [index: string] : string | number | undefined
	* this syntax is called a union type and basically allows for a variable to have several different types without using any. 
	
## Return types for functions
* We can set what data type we expect a function to return a particular data type.
* In the example, we declared that the filterByTerm function should return an array but when we add the .toString() method to the end of the return statement we broke the function (returned [object, object]) and would not compile because it said that a string is not assignable to type 'ILink[]'

## Type Aliases vs interfaces

* an interface in Typescript is the shape of something typically a complex object
* a type alias can be used to create a custom data type

## More on Interfaces and Objects
* Objects are most containers for key/value pairs and can contain functions
* When an Object contains a function the function has access to the "host" object through the keyword "this"
* void is a useful return value for functions that don't return anything at all--such as console.logging something

## Classes
### General
* Extending classes using this format: `class derivedClass extends baseClass`
	* derivedClasses are aka subclasses
	* baseClasses are aka superclasses
* each subclass constructor function must call `super()` which will call the constructor function of the super class and must be used before the keyword `this` in the subclass constructor function.
* `super.move(distanceInMeters)` is calling the move method on the superclass Animal in the particular example. In general, you can use `super` to get the methods of the superclass.

### Public v Private v Protected
* Public by default
	* all members of a class are public by default. However, you can still explicitly declare them as public.
* Private
	* the class member cannot be accessed from outside its containing class
	* Typescript is a structural type system 
		* when we compare two different types, if the types of all members are compatilbe then we say the types themselves are compatible
		* when comparing private and protected members then both members being compared must be private or protected.
* Protected
	* members declared protected can still be accessed by subclasses
* Readonly
	* readonly properties must be initialized at their declaration or in the constructor
	* so you can use these but you can't change them
* Parameter properties
	* we can create and initialize a member in one replace
	* can be used on all modifiers
* accessors
	* getters/setters are a way of intercepting accesses to a member of an object giving finer-grained control over how a member is accessed on each object
