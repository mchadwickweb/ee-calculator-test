import { useState } from "react";

import "./Calculator.css";

export const calculateExpression = (
  storedOperand,
  currentOperand,
  operation
) => {
  const store = parseFloat(storedOperand);
  const current = parseFloat(currentOperand);
  switch (operation) {
    case "/":
      return store / current;
    case "*":
      return store * current;
    case "+":
      return store + current;
    case "-":
      return store - current;
    default:
      break;
  }
};

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState("");
  const [storedOperand, setStoredOperand] = useState("");
  const [operation, setOperation] = useState("");

  const updateCurrentOperand = (value) => {
    if (value === "." && currentOperand.includes(".")) return;
    setCurrentOperand(() => currentOperand.toString().concat(value));
  };

  const updateOperation = (value) => {
    if (!currentOperand) return;
    setStoredOperand(currentOperand);
    setCurrentOperand("");
    setOperation(value);
  };

  const clearAll = () => {
    setCurrentOperand("");
    setStoredOperand("");
    setOperation("");
  };

  const deleteValue = () =>
    setCurrentOperand(currentOperand.toString().slice(0, -1));

  const calculate = () => {
    const calculatedValue = calculateExpression(
      storedOperand,
      currentOperand,
      operation
    );
    setStoredOperand("");
    setCurrentOperand(calculatedValue);
    setOperation("");
  };

  return (
    <>
      <div className="calc">
        <header className="calc-expression">
          <div
            className="calc-expression__stored"
            data-testid="stored-expression"
          >{`${storedOperand} ${operation}`}</div>
          <div
            className="calc-expression__current"
            data-testid="current-expression"
          >
            {currentOperand}
          </div>
        </header>
        <div className="calc-operations">
          <div className="calc-operations__operands">
            <button
              className="dark calc-grid-span-2"
              onClick={() => clearAll()}
            >
              AC
            </button>
            <button className="dark" onClick={() => deleteValue()}>
              DEL
            </button>

            <button onClick={() => updateCurrentOperand("1")}>1</button>
            <button onClick={() => updateCurrentOperand("2")}>2</button>
            <button onClick={() => updateCurrentOperand("3")}>3</button>
            <button onClick={() => updateCurrentOperand("4")}>4</button>
            <button onClick={() => updateCurrentOperand("5")}>5</button>
            <button onClick={() => updateCurrentOperand("6")}>6</button>
            <button onClick={() => updateCurrentOperand("7")}>7</button>
            <button onClick={() => updateCurrentOperand("8")}>8</button>
            <button onClick={() => updateCurrentOperand("9")}>9</button>
            <button
              className="calc-grid-span-2"
              onClick={() => updateCurrentOperand("0")}
            >
              0
            </button>
            <button onClick={() => updateCurrentOperand(".")}>.</button>
          </div>
          <div className="calc-operations__actions">
            <button className="brand" onClick={() => updateOperation("/")}>
              &#247;
            </button>
            <button className="brand" onClick={() => updateOperation("*")}>
              &#215;
            </button>
            <button className="brand" onClick={() => updateOperation("+")}>
              +
            </button>
            <button className="brand" onClick={() => updateOperation("-")}>
              -
            </button>
            <button className="brand" onClick={() => calculate()}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
