import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [input, setInput] = useState("")
  const [type, setType] = useState("prime")
  const [ans, setAns] = useState("")

  useEffect(() => {
    let checkValue = () => {
      if (input)
        setAns(type === "prime" ? isPrime(input) : isFibanacci(input))
    }

    checkValue()
  }, [input, type])

  let onChangeInput = ({ target }) => {
    if (target.value && target.value > -1) {
      let _value = parseFloat(target.value)
      setInput(parseInt(Math.round(_value)).toFixed())
    } else setInput(target.value ? 1 : target.value)
  }

  let onChangeSelect = ({ target }) => {
    setType(target.value)
  }

  let isPrime = num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return "false";
    return (num > 1).toString();
  }

  let isFibanacci = (num) => {
    num = parseInt(num)
    if (num < 2) return "true"
    var i;
    var fib = []

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; true; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      if (fib[i] === num) return "true"
      else if (fib[i] > num) return "false"
    }
  }

  return (
    <div className="main-col">
      <div className="col c1">
        <input type="number" onChange={onChangeInput} value={input} />
      </div>
      <div className="col c2">
        <select onChange={onChangeSelect} value={type}>
          <option value="prime">isPrime</option>
          <option value="fibanacci">IsFibanacci</option>
        </select>
      </div>
      <div className="col c3">
        {ans}
      </div>
    </div>
  );
}

export default App;
