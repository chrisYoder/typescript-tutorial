"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var animal = new Animal('goat');
var rhino = new Rhino();
animal = rhino; //true because rhino and animal share the private side of their shape
// animal = employee; //will return an error because while they have the same shape they are two seperate classes and do not share the private side of their shape.
// new Animal("cat").name;  //Error: 'name' is private.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog('Rex');
dog.move(5);
dog.bark();
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Pythin");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    Employee.prototype.displayName = function () {
        return "" + this.name;
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); //so while I can use this.name within the Employee class as it is a subclass of Person I cannot use it outside the class.
console.log(howard.displayName());
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs"); //I am setting this at its initialization but I won't be able to change it after
// dad.name = "man with the 3 piece suit"; // this will return an error
console.log(dad.name); // I can call them
var fullNameMaxLength = 10;
var Minion = /** @class */ (function () {
    function Minion() {
    }
    Object.defineProperty(Minion.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Minion;
}());
var minion = new Minion();
minion.fullName = 'Bob Smith';
if (minion.fullName) {
    console.log(minion.fullName);
}
