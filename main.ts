interface ICar {
  id: number;
  name: string;
  price: number;
  yearBuild: number;
}

interface ICarCreate extends Omit<ICar, "id"> {}
interface ICarId extends Pick<ICar, "id"> {}
interface IOptionalCar extends Partial<ICar> {}
interface IReadOnlyCar extends Readonly<ICar> {}
interface IRequiredCar extends Required<ICar> {}

type TypeCarRecord = Record<"name" | "price", string | number>;

type TypeGetName = () => string;
type Return = ReturnType<TypeGetName>;

type coincidence = Extract<"steddy" | "issues", "max" | "steddy">;
type excludeCar = Exclude<"steddy" | "issues", "max" | "steddy">;
type NotNull = NonNullable<number | string | undefined | null>;
