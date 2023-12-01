import { useState } from "react";
import "../styles/Display.css";

function Display({output,opStr, memoryVal}) {
  return (
    <>
      <div id="display-container">
        <div id="display-header">
          <div id="memory-container">{memoryVal === undefined ? "M" : memoryVal}</div>
          <div id="process-container">{opStr}</div>
        </div>
        <div id="output-container">{output}</div>
      </div>
    </>
  );
}

export default Display;
