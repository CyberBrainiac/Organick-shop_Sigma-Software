class Fruits {
  private name: string;
  protected color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    this.getName = this.getName.bind(this);
  }

  getName(): string {
    return this.name;
  }

  // getColor(): string {
  //   return this.color;
  // }
}

export default Fruits;