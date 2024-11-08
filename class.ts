class Car {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `${this.name} - ${this.price}$`;
  }
}

class Bus extends Car {
  constructor(name: string, price: number) {
    super(name, price);
  }

  getTest(): string {
    return this.getInfo();
  }
}

new Car("GTR", 500000).getInfo();
