"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tom = {
    name: "Tom",
    city: "Munich",
    age: 33,
    printDetails: function () {
        console.log(this.name + " - " + this.city);
    },
    add: function (a, b) {
        return a + b;
    }
};
tom.printDetails();
console.log(tom.add(tom.age, 1));
