interface shape {
  getArea(): number;
}

class rectangle implements shape {
  public constructor(private length: number, private width: number) {}
  public getArea(): number {
    return this.length * this.width;
  }
}

class Square extends rectangle {
  public constructor(width: number) {
    super(width, width);
  }
}

const myrectangle = new rectangle(4, 5);
myrectangle.getArea();
console.log(myrectangle.getArea());

const mysq = new Square(20);
console.log(mysq.getArea());

export {};
