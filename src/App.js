import React from "react";
import CounterState from "./components/counterState";
import CounterHook from "./components/counterHook";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Counter usando el estado</h2>
      <CounterState />
      <CounterHook />
    </div>
  );
}

export default App;
