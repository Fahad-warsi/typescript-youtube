function getTrueshade(shape) {
    if (shape.kind === "Circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
console.log(getTrueshade(3));
