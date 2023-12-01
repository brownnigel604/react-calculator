import IsSafeInteger from "./IsSafeInteger";

const Calc = (a, op, b) => {
    // console logs for debugging
    console.log(`operand 1 ${a}`);
    console.log(`operator ${op}`);
    console.log(`operand 2 ${a}`);
  let result;
  if (op === "+") {
    result = a + b;
  } else if (op === "-") {
    result = a - b;
  } else if (op === "*") {
    result = a * b;
  } else if (op === "/") {
    if (b === 0) {
      return "Error";
    }
    result = a / b;
  }
//   Check if the result is within the safe integer range
  if (!IsSafeInteger(result)) {
    return "Error";
  }

  return result;
};

export default Calc;
