type TypeIsString<T> = T extends string ? "yes" : "no";

type Type1 = TypeIsString<number>;
type Type2 = TypeIsString<string>;

type TypeBrand = "merc" | "bmw" | "gtr";
type TypePrice = "$10000" | "$100" | "$50000";

type TypeCar = `${TypeBrand} ${TypePrice}`;

const car52: TypeCar = "bmw $100";

type User = {
  name: string;
  age: number;
  car?: { color: string };
};

interface User2 {
  name: string;
  age: number;
  car?: { color: string };
}

const o9: User2 = {
  name: "steddy",
  age: 52,
};

const o10: User2 = {
  name: "steddy",
  age: 52,
  car: { color: "red" },
};

const o11: string[] = ["52", "52", "52"];
const o12: Array<string> = ["52", "52", "52"];

type O13_Config = {
  status: string;
};

type O13_GetMoreInfo = {
  data: number;
};

type O13 = {
  name: string;
  age: number;
  hasJob: boolean;
  getMoreInfo?: (config: O13_Config) => O13_GetMoreInfo | null;
};

// const o13: O13[] = [
//   {
//     name: "Steddy",
//     age: 52,
//     hasJob: true,
//     getMoreInfo: (config) => {
//       if (config.status === "ok") {
//         return { data: 5252525252 };
//       }
//       return null;
//     },
//   },
//   {
//     name: "NeSteddy",
//     age: 25,
//     hasJob: false,
//   },
// ];

// function o14(config): { data: number } | null | undefined {
//   if (config.status === "ok") {
//     return { data: 5252525252 };
//   } else if (config.status === "false") {
//     return undefined;
//   }
//   return null;
// }

// function o15(config): string | number {
//   if (config.status === "ok") {
//     return "525252";
//   }
//   return 5252;
// }

// const age = o15();

// if (typeof age === "string") {
//   age.charAt(192);
// } else if (typeof age === "number") {
//   age.toFixed(2);
// }

// interface Test1 {
//   name: string;
// }

// interface Test1 {
//   age: number;
// }

// const wqedsazxc: Test1 = {
//   name: "steddy",
//   age: 52,
// };

type O15_Car = {
  color: string;
  speed: number;
  left: boolean;
};

type O16_User = {
  name: string;
  age: number;
};

// чтобы не дублировать код

type O16_User2 = O15_Car & O16_User;

interface O16_User3 extends O15_Car, O16_User {}

// literal

function o18(status: "ok" | "error") {
  if (status === "ok") {
  } else if (status === "error") {
  }
  return null;
}

// o18("ok");

// Кастование типов (as unknown as)

// @ts-ignore
const o18Result: boolean = o18("ok");

const o18Result2: any = o18("ok");

const o18Result3 = o18("ok") as unknown as boolean;

const one = [] as unknown as boolean;
const two = {} as unknown as boolean;
(two as unknown as { name: string }).name;
(one as unknown as ["1", "2", "3"])[1];
