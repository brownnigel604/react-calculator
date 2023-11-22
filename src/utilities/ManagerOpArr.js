"use strict";
import CheckNumLength from "./CheckNumLength";
import Calc from "./Calc";
import ArrSize from "./ArrSize";
import OpsStr from "./OpStr";
import StrToNum from "./StrToNum";

function ManageOpArr(opArr, button) {
    const arrSize = ArrSize(opArr);
    const newType = button.type;
    const newVal = button.value;
    let result = 0;
    switch (arrSize) {
        case 1:
            switch (newType) {
                case "number":
                    opArr[0] = opArr[0] + newVal.toString();
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
                            break;
                    }
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
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 3:
            switch (newType) {
                case "number":
                    opArr[2] = opArr[2] + newVal.toString();
                    result = StrToNum(opArr[2]);
                    break;
                case "operator":
                    break;
                case "enter":
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
                            break;
                    }
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
