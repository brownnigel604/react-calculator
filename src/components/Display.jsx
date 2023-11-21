import { useState } from "react";
import "../styles/Display.css";

function Display() {
  return (
    <>
      <div id="display-container">
        <div id="display-header">
          <div id="memory-container">M</div>
          <div id="process-container"></div>
        </div>
        <div id="output-container">0</div>
      </div>
    </>
  );
}

export default Display;
