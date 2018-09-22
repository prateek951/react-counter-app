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

  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map(counter => <Counter key={counter.id} count={counter.value}>
            <h4>Counter #{counter.id}</h4>
        </Counter>)}
      </div>
    );
  }
}