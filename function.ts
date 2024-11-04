type TypeNameReturn = {
  name: string;
};

function getName(name: string): TypeNameReturn {
  return { name };
}

type TypeNameFunction = (name: string) => TypeNameReturn;

const getNameArrow: TypeNameFunction = (name) => {
  return { name };
};

const getNumber = (...numbers: number[]) => {
  return numbers;
};

// overloads
function getCar(name: string): string;
function getCar(name: string, price: number): string;

function getCar(name: string, price?: number) {
  return price ? `Модель: ${name}, Цена${price}$` : `Модель: ${name}`;
}

const Car1 = getCar("merc");
const Car2 = getCar("chevrole camaro", 15000);
