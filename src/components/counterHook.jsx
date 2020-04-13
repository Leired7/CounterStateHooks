import React, { useState } from "react";

function CounterHook() {
  //Declares a new state variable, which we will cal "count"
  //Declares a setCount function that alows you to modify the count value
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>This counter use Hook {useState}</h2>
      <input
        type="number"
        placeholder="Select new count init: "
        value={count}
        onChange={(event) => setCount(Number(event.target.value))}
      ></input>
      <p>The counter is at: {count} </p>
      <button onClick={() => setCount(count + 1)}> +1</button>
      <button onClick={() => setCount(count - 1)}> -1 </button>
    </div>
  );
}

export default CounterHook;
