import React, { useState } from "react";
import './style.css'

const App = () => {

  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if(counter === 0){
      alert('Opa, chegou a zero, não é possível diminuir mais que isso!');
      return;
    }
    setCounter(counter - 1);
  };


  return(
    <div className="container">
      Contador
      <img src={require('./assets/counter.png')} className="img"/>
      <div className="counter">
        {counter}
      </div>
      <div className="buttons">
        <button className="increment"onClick={handleClick1}>Aumentar</button>
        <button className="decrement"onClick={handleClick2}>Diminuir</button>
      </div>
    </div>
  );
}

export default App;