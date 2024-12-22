import { useState } from "react";
import './calculator.css'

interface CProps {
    calc : string;
}

const Calculator = ({calc} : CProps ) => {
  const [input, setInput] = useState<string>(""); 
  const [result, setResult] = useState<string>("");

  const numberClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setInput(input.concat(e.currentTarget.name)); }

  const answer = (): void => {
       setResult(eval(input).toString());
    
  }
  
  return (
    <div className="container">
    <div className="calculator">
       <div> <h1> {calc} {input} = {result}</h1></div>
    <div className="buttons">
      <button name="1" onClick={numberClick}>1</button>
      <button name="2" onClick={numberClick}>2</button>
      <button name="3" onClick={numberClick}>3</button>
      <button name="4" onClick={numberClick}>4</button>
      <button name="5" onClick={numberClick}>5</button>
      <button name="6" onClick={numberClick}>6</button>
      <button name="7" onClick={numberClick}>7</button>
      <button name="8" onClick={numberClick}>8</button>
      <button name="9" onClick={numberClick}>9</button>
      <button name="0" onClick={numberClick}>0</button>
      <button name="+" onClick={numberClick}>+</button>
      <button name="-" onClick={numberClick}>-</button>
      <button name="=" onClick={answer}>=</button>
    </div>
    </div>
    </div>
  );
};

export default Calculator;
