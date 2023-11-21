import { useState, useEffect } from "react";
import "./App.css";
import ButtonGrid from "./components/ButtonGrid";
import Display from "./components/Display";
import CheckNumLength from "./utilities/CheckNumLength";
// import Calc from "./utilities/Calc";

function App() {
  const [currButton, setcurrButton] = useState({ type: "number", value: 0 });
  const [opArr, setOpArr] = useState([{ type: "number", value: 0 }]);

  // Function that gets current button from ButtonGrid
  const getCurrButton = (button) => {
    setcurrButton(button);
  };

  // Function that manages operations array
  const manageOpArr = () => {
    const newArr = [...opArr];
    const arrLen = newArr.length;
    if (newArr[arrLen - 1].type === "number" && currButton.type === "number") {
      newArr[arrLen - 1].value = newArr[arrLen - 1].value * 10 + currButton.value;
      if (CheckNumLength(newArr[arrLen - 1].value) <= 10) {
        setOpArr(newArr);
      }
    }
    else if(newArr[arrLen - 1].type === "number" && currButton.type === "operator"){
      newArr.push({type:"operator",value:currButton.value});
      setOpArr(newArr);
    }
    else if(newArr[arrLen - 1].type === "operator" && currButton.type === "operator"){
      newArr[arrLen - 1].value = currButton.value;
      setOpArr(newArr);
    }
    else if(newArr[arrLen - 1].type === "operator" && currButton.type === "number"){
      newArr.push({type:"number",value:currButton.value});
      setOpArr(newArr);
    }
  };

  // State for current display
  const [dispArr, setdispArr] = useState([0]);

  // Call manageOpArr when currButton state changes
  useEffect(manageOpArr, [currButton]);

  // Call setdisplay when currButton state changes

  // Function that invokes manageOpArr whenever the setcurrValue changes

  return (
    <>
      <div id="wrapper">
        <Display />
        <ButtonGrid getCurrButton={getCurrButton} />
      </div>
    </>
  );
}

export default App;
