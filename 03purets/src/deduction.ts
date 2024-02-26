interface circle {
  kind: "circle";
  radius: number;
}

interface square {
  kind: "square";
  side: number;
}

interface rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = circle | square;

function getTrueshade(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}
