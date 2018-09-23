import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      {
        id: 3,
        value: 0
      },
      { id: 4, value: 0 }
    ]
  };
  howManyCounters = () => {
    if(this.state.counters.length){
      return(
        <h1>Showing {this.state.counters.length} results</h1>
      );
    }else {
      return(
        <h1>There are no counters left!</h1>
      )
    }
    
  }
  handleDelete = id => {
    console.log("Event handler called");
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    console.log("[Counters] inside the handleIncrement method");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = Object.assign({}, counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    console.log("[Counters] inside the handleDecrement method");
    const counters = this.state.counters.slice();
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };
  handleAllReset = () => {
    console.log('[Counters] inside the handleAllReset method');
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleReset = counter => {
    const counters = [...this.state.counters];
    const ctrindex = counters.indexOf(counter);
    counters[ctrindex] = Object.assign({}, counter);
    counters[ctrindex].value = 0;
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        {this.howManyCounters()}
        {counters.length !== 0 && (<button onClick={this.handleAllReset} className="btn btn-primary sm-2">
          Reset All Counters
        </button>)}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleAllReset={this.handleAllReset}
            handleReset={this.handleReset}
            counter={counter}
          >

          </Counter>
        ))}
      </div>
    );
  }
}
