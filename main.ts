type TypeIsString<T> = T extends string ? "yes" : "no";

type Type1 = TypeIsString<number>;
type Type2 = TypeIsString<string>;

type TypeBrand = "merc" | "bmw" | "gtr";
type TypePrice = "$10000" | "$100" | "$50000";

type TypeCar = `${TypeBrand} ${TypePrice}`;

const car52: TypeCar = "bmw $100";
