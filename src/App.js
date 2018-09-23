import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
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
  handleIncrement = counter => {
    console.log("[Counters] inside the handleIncrement method");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = Object.assign({}, counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = id => {
    console.log("Event handler called");
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  }
  handleDecrement = counter => {
    console.log("[App] inside the handleDecrement method");
    const counters = this.state.counters.slice();
    const index = counters.indexOf(counter);
    counters[index] = Object.assign({}, counter);
    if (counters[index].value !== 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };
  handleAllReset = () => {
    console.log("[Counters] inside the handleAllReset method");
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
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Navbar ctrslength={this.state.counters.length}/>
          <main className="container">
            <Counters
              counters={this.state.counters}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
              handleAllReset={this.handleAllReset}
              handleReset={this.handleReset}
              handleDelete={this.handleDelete}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
