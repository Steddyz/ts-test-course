type TypeUser = {
  name: string;
  age: number;
};

type TypeAdress = {
  city: string;
  countrie: string;
};

const user: TypeUser = {
  age: 24,
  name: "Steddy",
};

const adress: TypeAdress = {
  city: "Moscow",
  countrie: "Ru",
};

let common: TypeUser & TypeAdress;

common = {
  ...user,
  ...adress,
};
