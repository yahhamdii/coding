import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div className="card">
        <div id="value"> counter {this.state.count}</div>
        <button id="increment" onClick={this.increment}>
          Increment
        </button>
        <button id="decrement" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
