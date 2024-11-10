function abc<T>(args: T): T {
  return args;
}

abc<number>(52);
abc<string>("52");

const abcArrow = <T>(args: T): T => {
  return args;
};

abcArrow<number>(5252);
abcArrow<string>("52arrow");

class Test<T> {
  private name: T;

  constructor(name: T) {
    this.name = name;
  }

  setName(): T {
    return this.name;
  }
}

new Test<string>("uoy");
new Test<number>(52);

interface IPair<K, V> {
  key: K;
  value: V;
}

const ipair52: IPair<string, number> = {
  key: "5252",
  value: 52,
};

const ipair25: IPair<number, string> = {
  key: 25,
  value: "2525",
};

//---

function getNameLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

getNameLength("zxc");
getNameLength([5, 2, 2]);

// or

type TypeLength = {
  length: number;
};

function getNameLength2<T extends TypeLength>(arg: T): number {
  return arg.length;
}

getNameLength2("cxz");
getNameLength2([2, 2, 5]);
