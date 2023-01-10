const stringArray: string[] = ["foo", "bar"];

let cars: {
  make: string;
  model: string;
  year: number;
}[];

let carAttributes: [string, string, number] = ["Honda", "Civic", 2002];

const [make, model, year] = carAttributes;

carAttributes = [2002, "Toyota", "Corolla"]; // Mismatch with type definition

const numPair: [number, number] = [4, 2, 5]; // Mismatch assignment with shape
numPair.push(1);
