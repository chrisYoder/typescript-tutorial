class Animal {
	private name: string;
	public constructor(theName: string) {
		this.name = theName;
	}
	
	public move(distanceInMeters: number = 0): void {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}


class Rhino extends Animal {
	constructor () {
		super("Rhino");
	}
}



let animal = new Animal('goat');
let rhino = new Rhino();


animal = rhino; //true because rhino and animal share the private side of their shape
// animal = employee; //will return an error because while they have the same shape they are two seperate classes and do not share the private side of their shape.

// new Animal("cat").name;  //Error: 'name' is private.
class Dog extends Animal { 
	bark() {
		console.log("Woof! Woof!");
	}
}

const dog = new Dog('Rex');
dog.move(5);
dog.bark();

class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	
	move (distanceInMeters = 5) {
		console.log('Slithering');
		super.move(distanceInMeters);
	}
}

class Horse extends Animal {
	constructor(name: string) {
		super(name);
	}
	
	move(distanceInMeters = 45) {
		console.log("Galloping");
		super.move(distanceInMeters);
	}
}

let sam = new Snake("Sammy the Pythin");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move();


class Person {
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
}

class Employee extends Person {
	private department: string;
	constructor(name: string, department: string) {
		super(name);
		this.department = department;
	}
	
	public getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}`;
	}
	
	public displayName() {
		return `${this.name}`;
	}
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); //so while I can use this.name within the Employee class as it is a subclass of Person I cannot use it outside the class.
console.log(howard.displayName());


class Octopus { 
	
	readonly numberOfLegs: number = 8;
	constructor(readonly name: string) {
		
	}
}

let dad = new Octopus("Man with the 8 strong legs"); //I am setting this at its initialization but I won't be able to change it after

// dad.name = "man with the 3 piece suit"; // this will return an error
console.log(dad.name); // I can call them

const fullNameMaxLength: number = 10;
class Minion { 
	private _fullName: string;
	constructor(){}
	get fullName(): string {
		return this._fullName;
	}
	
	set fullName(newName: string) {
		if(newName && newName.length > fullNameMaxLength) {
			throw new Error("fullName has a max length of " + fullNameMaxLength);
		}
		
		this._fullName = newName;
	}
}

let minion = new Minion();
minion.fullName = 'Bob Smith';

if (minion.fullName) {
	console.log(minion.fullName);
}