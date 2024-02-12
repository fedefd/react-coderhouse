import { useState } from "react";

useState;

const Counter = () => {
  const [counter, funcionDelCounter] = useState(0); // [variable, funcion]

  // console.log ( x [0] ) // [variable, funcion]

  console.log(counter);

  const sumar = () => {
    funcionDelCounter(counter + 1);
  };
  const restar = () => {
    funcionDelCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h4> {counter} </h4>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default Counter;
