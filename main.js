let form = document.querySelector(".form");
let cars = [];
let staticID = 0;
let mark = document.querySelector(".marka").value;
let mod = document.querySelector(".model").value;
let yea = document.querySelector(".year").value;
let description = document.querySelector(".desc").value;
let checkbox = document.querySelector(".checkbox").clicked;

class Car {
  constructor(marka, model, year, desc, isNew) {
    marka = mark;
    model = mod;
    year = yea;
    desc = description;
    isNew = checkbox;
    staticID++;
  }
}
let btn = document.querySelector(".btn");
btn.addEventListener(
  "click",
  (function(){cars.push(new Car(mark, mod, yea, description, checkbox))})
);
console.log({ cars });
