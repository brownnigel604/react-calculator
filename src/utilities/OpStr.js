"use strict"
import StrToNum from "./StrToNum";
import ArrSize from "./ArrSize";

const OpsStr=(opArr)=>{
    const oprnd1 = StrToNum(opArr[0]);
    const oprtr = (typeof opArr[1] !== "undefined")?opArr[1]:"";
    const oprnd2 = (typeof opArr[2] !== "undefined")?StrToNum(opArr[2]):"";
    console.log(oprnd1.toString() + " " + oprtr + " " + oprnd2.toString());
    return oprnd1.toString() + " " + oprtr + " " + oprnd2.toString();
}

export default OpsStr;