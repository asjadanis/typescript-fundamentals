function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let message = `${car.make}, ${car.model}, ${car.year}`;

  // typeguards at runtime for optionals
  if (typeof car.chargeVoltage !== "undefined") {
    message += car.chargeVoltage;
  }

  console.log(message);
}

printCar({
  make: "Toyota",
  model: "Corolla",
  year: 2008,
});

printCar({
  make: "Toyota",
  model: "Corolla",
  year: 2008,
  color: "Red", // violates the shape
});

const myCar2 = {
  make: "Toyota",
  model: "Corolla",
  year: 2008,
  color: "Red",
};

printCar(myCar2);
