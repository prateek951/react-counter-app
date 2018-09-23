import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {

  howManyCounters = () => {
    if(this.props.counters.length){
      return(
        <h1>Showing {this.props.counters.length} results</h1>
      );
    }else {
      return(
        <h1>There are no counters left!</h1>
      )
    }
    
  }
  handleDelete = id => {
    this.props.handleDelete(id);
  };
  handleIncrement = counter => {
    this.props.handleIncrement(counter);
  };
  handleDecrement = counter => {
    this.props.handleDecrement(counter);
  };
  handleAllReset = () => {
    this.props.handleAllReset();
  };
  handleReset = counter => {
    this.props.handleReset(counter);
  };

  render() {
    const { counters } = this.props;
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
