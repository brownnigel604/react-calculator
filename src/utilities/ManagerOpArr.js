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
          opArr[0] = CheckNumLength(opArr[0] + newVal.toString());
          result = StrToNum(opArr[0]);
          break;
        case "operator":
          opArr[1] = newVal;
          result = StrToNum(opArr[0]);
          break;
        case "enter":
          result = StrToNum(opArr[0]);
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              opArr[0] = "";
              result = 0;
              break;
            case "Clear":
              opArr[0] = "";
              result = 0;
              break;
          }
          break;
        case "memory":
          switch (newVal) {
            case "Memory Save":
              setMemoryVal(StrToNum(opArr[0]));
              result = StrToNum(opArr[0]);
              break;
            case "Memory Clear":
              setMemoryVal(0);
              result = StrToNum(opArr[0]);
              break;
            case "Memory Recall":
              result = StrToNum(memoryVal);
              opArr[0] = StrToNum(memoryVal);
              break;
            case "Memory Subtract":
              result = StrToNum(opArr[0]) - StrToNum(memoryVal);
              opArr[0] = result;
              break;
            case "Memory Addition":
              result = StrToNum(opArr[0]) + StrToNum(memoryVal);
              opArr[0] = result;
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
        default:
          break;
      }
      break;
    case 2:
      switch (newType) {
        case "number":
          opArr[2] = newVal.toString();
          result = StrToNum(opArr[2]);
          break;
        case "operator":
          opArr[1] = newVal;
          result = opArr[1];
          break;
        case "enter":
          result = StrToNum(opArr[0]);
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              opArr[0] = "";
              opArr[1] = undefined;
              result = 0;
              break;
            case "Clear":
              opArr[2] = undefined;
              result = StrToNum(opArr[0]);
              break;
          }
          break;
        case "memory":
          switch (newVal) {
            case "Memory Save":
              setMemoryVal(StrToNum(opArr[2]));
              result = StrToNum(opArr[2]);
              break;
            case "Memory Clear":
              setMemoryVal(0);
              result = StrToNum(opArr[0]);
              break;
            case "Memory Recall":
              switch (opArr[1]) {
                case "+":
                  result = StrToNum(memoryVal) + StrToNum(opArr[0]);
                  opArr[0] = result;
                  break;
                case "-":
                  result = StrToNum(opArr[0]) - StrToNum(memoryVal);
                  opArr[0] = result;
                  break;
                case "*":
                  result = StrToNum(memoryVal) * StrToNum(opArr[0]);
                  opArr[0] = result;
                  break;
                case "/":
                  result = StrToNum(opArr[0]) / StrToNum(memoryVal);
                  opArr[0] = result;
                  break;
              }
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
        default:
          break;
      }
      break;
    case 3:
      switch (newType) {
        case "number":
          opArr[2] = CheckNumLength(opArr[2] + newVal.toString());
          result = StrToNum(opArr[2]);
          break;
        case "operator":
          result = Calc(StrToNum(opArr[0]), opArr[1], StrToNum(opArr[2]));
          opArr[0] = result.toString();
          opArr[1] = newVal;
          opArr[2] = undefined;
          break;
        case "enter":
          result = Calc(StrToNum(opArr[0]), opArr[1], StrToNum(opArr[2]));
          opArr[0] = result.toString();
          opArr[1] = undefined;
          opArr[2] = undefined;
          break;
        case "clear":
          switch (newVal) {
            case "All Clear":
              opArr[0] = "";
              opArr[1] = undefined;
              opArr[2] = undefined;
              result = 0;
              break;
            case "Clear":
              opArr[2] = undefined;
              result = StrToNum(opArr[0]);
              break;
          }
          break;
        case "memory":
          switch (newVal) {
            case "Memory Save":
              setMemoryVal(StrToNum(opArr[2]));
              result = StrToNum(opArr[2]);
              break;
            case "Memory Clear":
              setMemoryVal(0);
              result = StrToNum(opArr[0]);
              break;
            case "Memory Recall":
              result = StrToNum(memoryVal);
              opArr[0] = StrToNum(memoryVal);
              break;
            case "Memory Subtract":
              result = StrToNum(opArr[0]) - StrToNum(memoryVal);
              opArr[0] = result;
              break;
            case "Memory Addition":
              result = StrToNum(opArr[0]) + StrToNum(memoryVal);
              opArr[0] = result;
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
