// interface user {
//   readonly dbId: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   freeTrail(): string;
//   getcoupon(couponName: string, value: number): any;
// }

// const fahad: user = {
//   dbId: 4,
//   email: "fhd@gmail.com",
//   userId: 233,
//   freeTrail: () => {
//     return "started trail....!!";
//   },
//   getcoupon: (name: "hitesh", val = 12345) => {
//     console.log(name, val);
//   },
// };

// console.log(fahad);
// console.log(fahad.getcoupon("ali", 3));

// interface user {
//   readonly dbId: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   freeTrail(): string;
//   couponCode(couponName: string, value: number): string;
// }

// let fhd: user = {
//   dbId: 555,
//   email: "fhd@gmail.com",
//   userId: 555,
//   freeTrail: (): string => {
//     return "started free trail";
//   },
//   couponCode: (name: "hitesh", value: 10): string => {
//     return "10 - off";
//   },
// };
// console.log(fhd);

interface arearectangle {
  height: number;
  width: number;
  calcArea(height: number, width: number): number;
}

interface colorrectangle extends arearectangle {
  color: string;
}

let area: colorrectangle = {
  height: 2,
  width: 2,
  color: "yellow",
  calcArea: (height: 2, width: 2): number => {
    return 2 * 2;
  },
};

console.log(area);

export {};
