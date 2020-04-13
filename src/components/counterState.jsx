import React, { Component } from "react";

class CounterState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleCounter = (value) => {
    this.setState({ count: value });
  };
  render() {
    return (
      <div>
        <p>El contador está en: {this.state.count}</p>
        <button onClick={() => this.handleCounter(this.state.count + 1)}>
          +1
        </button>
        <button onClick={() => this.handleCounter(this.state.count - 1)}>
          -1
        </button>
      </div>
    );
  }
}

export default CounterState;
