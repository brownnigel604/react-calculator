"use strict";
import StrToNum from "./StrToNum";
import ArrSize from "./ArrSize";
// Function that creates the current operations display string
const OpsStr = (opArr) => {
  let oprnd1 = StrToNum(opArr[0]);
  let oprtr = typeof opArr[1] !== "undefined" ? opArr[1] : "";
  let oprnd2 = (typeof opArr[2] !== "undefined")&&( opArr[2] !== "-") ? StrToNum(opArr[2]) : "";
  if(oprtr==="-" && oprnd2<0){
    oprnd2 = `(${oprnd2})`;
  }
  console.log(oprnd1.toString() + " " + oprtr + " " + oprnd2.toString());
  return oprnd1.toString() + " " + oprtr + " " + oprnd2.toString();
};

export default OpsStr;
