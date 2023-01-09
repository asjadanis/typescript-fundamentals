let age = 12; // Type inference

// age = "asdas"; // Type mismatch

const literalType = 6; // type resolves to 6 -> immutable value type -> cannot be reassigned. (Literal Type)

const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
// let endTime; // TS can't determine the type of endtime -> resolves to any
let endTime: Date;

setTimeout(() => {
  endTime = new Date();
}, RANDOM_WAIT_TIME);
