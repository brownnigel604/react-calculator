"use strict"

const ArrSize = (arr) => {
    let size = 0;
    arr.forEach((item) => size = (typeof item !== "undefined") ? size + 1 : size);
    return size;
}

export default ArrSize;