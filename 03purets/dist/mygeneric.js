"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number = [];
const str = [];
function identifyOne(val) {
    return val;
}
function identifyTwo(val) {
    return val;
}
function identifyThree(val) {
    return val;
}
function identifyfour(val) {
    return val;
}
const four = identifyfour({ brand: "El-COrte", type: 105 });
// console.log(four);
function getSearchProduct(product) {
    //do some database operations.
    const myIndex = 4;
    return product[myIndex];
}
//arrow function in generic..
const getMoreSearchProduct = (product) => {
    //do some database operation
    const myIndex = 5;
    return product[myIndex];
};
let str2 = "fahad";
const myarray = [
    "Fahad",
    "Hameed",
    "Ahmed",
    "Amin",
    "Hassan",
    "Konain",
];
console.log(getSearchProduct(myarray));
function anotherfunction(valOne, ValTwo) {
    return {
        valOne,
        ValTwo,
    };
}
console.log(anotherfunction(2, { connection: true, name: "Fahad", password: 255255 }));
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const user = new sellable();
user.addToCart(4);
console.log(user);
