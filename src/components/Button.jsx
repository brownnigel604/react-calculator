import { useState } from "react";
import "../styles/Button.css";

function Button({ type, className, text, value,buttonClickHandler }) {
  return (
    <>
      <button
        type={type}
        className={className}
        value={value}
        onClick = {()=>{buttonClickHandler({type:type,value:value})}}
      >{text}</button>
    </>
  );
}

export default Button;
