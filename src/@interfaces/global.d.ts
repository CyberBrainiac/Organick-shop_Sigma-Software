// Declare global types, interfaces, or other declarations here
declare interface MyCustomInterface {
  // ...
}
// Declare global functions here
declare function myGlobalFunction(): void;

// Declare global class here
declare class Fruits {
  constructor(name: string, color: string);
  getName(): string;
  getColor(): string;
}

/**Now i can include this file like: import Fruits from "./global"; */