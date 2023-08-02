import Fruits from "./global";

class Apple extends Fruits{
  public smel: string;

  constructor(smel: string) {
    super("apple", "green");
    this.smel = smel;
  }

  getSmel(): string {
    return this.smel + " " + this.color;
  }
}

export default function windowOnloadHandler() : void {
  window.addEventListener('load', () => {
    let test = new Apple("no-smel");
    console.log(test.smel);
    console.log(test.getName.call(spy));
    console.log(test.getSmel());
    
  });
}

let spy: {
  name: string;
  age: number;
}

spy = {
  name: "John Doe",
  age: 32,
}

// class Chel {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getAge() : number {
//     return this.age;
//   }
// }

