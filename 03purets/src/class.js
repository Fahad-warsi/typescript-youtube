var rectangle = /** @class */ (function () {
    function rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    return rectangle;
}());
var myrectangle = new rectangle(4, 5);
console.log(myrectangle);
