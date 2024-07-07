import React, { useState } from "react";

const Addition = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        const res = parseFloat(num1) + parseFloat(num2);
        setResult(res.toString());
    }
    return(
        <div>
            <h2>Additional</h2>
            <input type="number" placeholder="Enter First Number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" placeholder="Enter Second Number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <button onClick={handleCalculate}>Result</button>
            <p>Result: {result}</p>
        </div>
    )
}

const Subtraction = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const handleCalculate = () => {
      const res = parseFloat(num1) - parseFloat(num2);
      setResult(res.toString());
    };
  
    return (
      <div>
        <h2>Вычитание</h2>
        <input
          type="number"
          placeholder="Enter First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleCalculate}>Result</button>
        <p>Result: {result}</p>
      </div>
    );
  };
  
  const Multiplication = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const handleCalculate = () => {
      const res = parseFloat(num1) * parseFloat(num2);
      setResult(res.toString());
    };
  
    return (
      <div>
        <h2>Multiplice</h2>
        <input
          type="number"
          placeholder="Enter First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleCalculate}>Result</button>
        <p>Result: {result}</p>
      </div>
    );
  };
  
  const Division = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const handleCalculate = () => {
      if (num2 !== '0') {
        const res = parseFloat(num1) / parseFloat(num2);
        setResult(res.toString());
      } else {
        alert('Error');
      }
    };
  
    return (
      <div>
        <h2>Division</h2>
        <input
          type="number"
          placeholder="Enter First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleCalculate}>Result</button>
        <p>Result: {result}</p>
      </div>
    );
  };
  
  const Calculator = () => {
    return (
      <div>
        <Addition />
        <Subtraction />
        <Multiplication />
        <Division />
      </div>
    );
  };
  
  export default Calculator;