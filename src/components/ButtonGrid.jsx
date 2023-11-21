import { useState, useEffect } from "react";
import "../styles/ButtonGrid.css";
import calculatorButtons from "../../data/calculatorButtons";
import Button from "./Button";

function ButtonGrid({ getCurrButton }) {
    const [currButton, setcurrButton] = useState({ type: "number", value: 0 });

    const buttonClickHandler = (button) => {
        setcurrButton(button);
        getCurrButton(button);
    };

    return (
        <>
            <div id="button-grid">
                {calculatorButtons.map((button, index) => {
                    return (
                        <Button
                            key={index}
                            type={button.type}
                            className={button.className}
                            text={button.text}
                            value={button.value}
                            buttonClickHandler={buttonClickHandler}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ButtonGrid;
