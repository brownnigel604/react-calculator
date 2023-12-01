"use strict";
import CheckNumLength from "./CheckNumLength";
import Calc from "./Calc";
import ArrSize from "./ArrSize";
import OpsStr from "./OpStr";
import StrToNum from "./StrToNum";

function ManageOpArr(opArr, button, memoryVal, setMemoryVal) {
  const arrSize = ArrSize(opArr);
  const newType = button.type;
  const newVal = button.value;
  let result = 0;
  switch (arrSize) {
    case 1:
      switch (newType) {
        case "number":
          // Append the new value to the existing number (if string has decimal already ignore then)
          opArr[0] = (opArr[0].includes(".")&&newVal===".")?opArr[0]:CheckNumLength(opArr[0] + newVal.toString());
          result = StrToNum(opArr[0]);
          break;
        case "operator":
          // Update the operator
          opArr[1] = newVal;
          result = StrToNum(opArr[0]);
          break;
        case "enter":
          // Do nothing, Just return the current result
          result = StrToNum(opArr[0]);
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              // Clear everything
              opArr[0] = "";
              result = 0;
              break;
            case "Clear":
              // Clear the current entry
              opArr[0] = "";
              result = 0;
              break;
          }
          break;
        case "memory":
          switch (newVal) {
            case "Memory Save":
              // Save the latest operand to memory
              setMemoryVal(StrToNum(opArr[0]));
              result = StrToNum(opArr[0]);
              break;
            case "Memory Clear":
              // Clear memory
              setMemoryVal();
              result = StrToNum(opArr[0]);
              break;
            case "Memory Recall":
              // Recall from memory if there is something there
              opArr[0] =
                memoryVal === undefined ? opArr[0] : memoryVal.toString();
              result = StrToNum(opArr[0]);
              break;
            case "Memory Subtract":
              // Subtract memory val from last operand
              opArr[0] =
                memoryVal === undefined
                  ? opArr[0]
                  : (StrToNum(opArr[0]) - StrToNum(memoryVal)).toString();
              result = StrToNum(opArr[0]);
              break;
            case "Memory Addition":
              // Add memory val to last operand
              opArr[0] =
                memoryVal === undefined
                  ? opArr[0]
                  : (StrToNum(opArr[0]) + StrToNum(memoryVal)).toString();
              result = StrToNum(opArr[0]);
              break;
          }
          break;
        case "sign":
          // Add "-" if it does not exist; if it does remove it
          opArr[0] =
            opArr[0].charAt(0) === "-"
              ? opArr[0].substring(1, opArr[0].length)
              : "-" + opArr[0];
          result = StrToNum(opArr[0]);
          break;
        case "square":
          // just square the number :)
          opArr[0] = (StrToNum(opArr[0]) * StrToNum(opArr[0])).toString();
          result = StrToNum(opArr[0]);
          break;
        case "percentage":
          // just divide by 100 :)
          opArr[0] = (StrToNum(opArr[0]) / 100).toString();
          result = StrToNum(opArr[0]);
          break;
        case "sqrt":
          // If number is positive sqrt, else do nothing
          opArr[0] =
            StrToNum(opArr[0]) >= 0
              ? Math.sqrt(StrToNum(opArr[0])).toString()
              : opArr[0];
          result = StrToNum(opArr[0]);
          break;
        default:
          break;
      }
      break;
    case 2:
      switch (newType) {
        case "number":
          // Append the new value to the existing number
          opArr[2] = newVal.toString();
          result = StrToNum(opArr[2]);
          break;
        case "operator":
          // Update the operator
          opArr[1] = newVal;
          result = StrToNum(opArr[0]);
          break;
        case "enter":
          // Do nothing
          result = StrToNum(opArr[0]);
          break;
        case "clear":
          switch (newVal) {
            // Clear everything
            case "All Clear":
              opArr[0] = "";
              opArr[1] = undefined;
              result = 0;
              break;
            case "Clear":
              // Clear operator
              opArr[1] = undefined;
              result = StrToNum(opArr[0]);
              break;
          }
          break;
        case "memory":
          switch (newVal) {
            // Save latest operand to memory
            case "Memory Save":
              setMemoryVal(StrToNum(opArr[0]));
              result = StrToNum(opArr[0]);
              break;
            case "Memory Clear":
              setMemoryVal();
              result = StrToNum(opArr[0]);
              break;
            case "Memory Recall":
              switch (opArr[1]) {
                case "+":
                  // Add memory recalled number to latest operand and clear operator (if memoryVal exists)
                  opArr[0] = memoryVal
                    ? (memoryVal + StrToNum(opArr[0])).toString()
                    : opArr[0];
                  opArr[1] = memoryVal ? undefined : opArr[1];
                  result = StrToNum(opArr[0]);
                  break;
                case "-":
                  // Subtract recalled number from latest operand and clear operator (if memoryVal exists)
                  opArr[0] = memoryVal
                    ? (StrToNum(opArr[0]) - memoryVal).toString()
                    : opArr[0];
                  opArr[1] = memoryVal ? undefined : opArr[1];
                  result = StrToNum(opArr[0]);
                  break;
                case "*":
                  // multiply recalled number with latest operand and clear operator (if memoryVal exists)
                  opArr[0] = memoryVal
                    ? (StrToNum(opArr[0]) * memoryVal).toString()
                    : opArr[0];
                  opArr[1] = memoryVal ? undefined : opArr[1];
                  result = StrToNum(opArr[0]);
                  break;
                case "/":
                  // divide latest operand by memoryval and clear operator (if memoryVal exists)
                  opArr[0] = memoryVal
                    ? (StrToNum(opArr[0]) / memoryVal).toString()
                    : opArr[0];
                  opArr[1] = memoryVal ? undefined : opArr[1];
                  result = StrToNum(opArr[0]);
                  break;
                default:
                  result = StrToNum(opArr[0]);
                  break;
              }
              break;
            default:
              result = StrToNum(opArr[0]);
              break;
          }
          break;
        case "sign":
          // Initialise oppArr[2] and Add "-" as the only char in oppArr[2]
          opArr[2] = "-";
          result = StrToNum(opArr[0]);
          break;
        case "square":
          // Assume the user wants a number and initialise opArr[0] to empty string
          opArr[2] = "0";
          result = StrToNum(opArr[2]);
          break;
        case "percentage":
          /// Assume the user wants a number and initialise opArr[0] to empty string
          opArr[2] = "0";
          result = StrToNum(opArr[2]);
          break;
        case "sqrt":
          /// Assume the user wants a number and initialise opArr[0] to empty string
          opArr[2] = "0";
          result = StrToNum(opArr[2]);
          break;
        default:
          break;
      }
      break;
    case 3:
      switch (newType) {
        // Append the new value to the existing number
        case "number":
          // Append the new value to the existing number (if string has decimal already ignore then)
          opArr[2] = (opArr[2].includes(".")&&newVal===".")?opArr[2]:CheckNumLength(opArr[2] + newVal.toString());
          result = StrToNum(opArr[2]);
          break;
        case "operator":
          // Execute previous operation and start a new one with the new operator
          result = Calc(StrToNum(opArr[0]), opArr[1], StrToNum(opArr[2]));
          opArr[0] = result.toString();
          opArr[1] = newVal;
          opArr[2] = undefined;
          break;
        case "enter":
          // Execute previous operation
          result = Calc(StrToNum(opArr[0]), opArr[1], StrToNum(opArr[2]));
          opArr[0] = result.toString();
          opArr[1] = undefined;
          opArr[2] = undefined;
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              // Clear everything
              opArr[0] = "";
              opArr[1] = undefined;
              opArr[2] = undefined;
              result = 0;
              break;
            case "Clear":
              // Clear second operand only
              opArr[2] = undefined;
              result = StrToNum(opArr[0]);
              break;
          }
          break;
        case "memory":
          switch (newVal) {
            case "Memory Save":
              // Save operand 2 to memory
              setMemoryVal(StrToNum(opArr[2]));
              result = StrToNum(opArr[2]);
              break;
            case "Memory Clear":
              // Clear memory
              setMemoryVal();
              result = StrToNum(opArr[2]);
              break;
            case "Memory Recall":
              // Recall from memory if there is something there
              opArr[2] =
                memoryVal === undefined ? opArr[2] : memoryVal.toString();
              result = StrToNum(opArr[2]);
              break;
            case "Memory Subtract":
              // Subtract memory val from last operand
              opArr[2] =
                memoryVal === undefined
                  ? opArr[2]
                  : (StrToNum(opArr[2]) - StrToNum(memoryVal)).toString();
              result = StrToNum(opArr[2]);
              break;
            case "Memory Addition":
              // Add memory val to last operand
              opArr[2] =
                memoryVal === undefined
                  ? opArr[2]
                  : (StrToNum(opArr[2]) + StrToNum(memoryVal)).toString();
              result = StrToNum(opArr[2]);
              break;
          }
          break;
        case "sign":
          // Add "-" if it does not exist; if it does remove it
          opArr[2] =
            opArr[2].charAt(0) === "-"
              ? opArr[2].substring(1, opArr[2].length)
              : "-" + opArr[2];
          // If this results in an empty string (i.e. if sign of an empty values is changed again), make it undefined
          opArr[2] = opArr[2] === "" ? undefined : opArr[2];
          // If opArr[2]===undefined, result will be opArr[0]
          result =
            opArr[2] === undefined ? StrToNum(opArr[0]) : StrToNum(opArr[2]);
          break;
        case "square":
          // just square the number :)
          opArr[2] = (StrToNum(opArr[2]) * StrToNum(opArr[2])).toString();
          result = StrToNum(opArr[2]);
          break;
        case "percentage":
          // just divide by 100 :)
          opArr[2] = (StrToNum(opArr[2]) / 100).toString();
          result = StrToNum(opArr[2]);
          break;
        case "sqrt":
          // If number is positive sqrt, else do nothing
          opArr[2] =
            StrToNum(opArr[2]) >= 0
              ? Math.sqrt(StrToNum(opArr[2])).toString()
              : opArr[2];
          result = StrToNum(opArr[2]);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return [result, OpsStr(opArr)];
}

export default ManageOpArr;
