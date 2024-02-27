"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}
class Square extends rectangle {
    constructor(width) {
        super(width, width);
    }
}
const myrectangle = new rectangle(4, 5);
myrectangle.getArea();
console.log(myrectangle.getArea());
const mysq = new Square(20);
console.log(mysq.getArea());
