let obj = {
  name: "priyanshu",
  age: 20,
  class: 5,
};

console.log(obj);

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created..");
  }
  eat() {
    console.log("animla eat");
  }
  live() {
    console.log("animla live");
  }
}

class newanimal extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("hi i'm new class");
  }
  eat() {
    console.log("i'm also eats"); //overridden
    super.eat()
  }
}

let a = new Animal("happy");
console.log(a);
let l = new newanimal("lion");
console.log(l);


