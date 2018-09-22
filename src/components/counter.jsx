import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };
  handleIncrement = () => this.setState({ count: this.state.count + 1 });

  handleDecrement = () => {
    const { count } = this.state;
    if (count === 0) {
      return;
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  handleReset = () => this.setState({ count: 0 });

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : "Decrement";
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  getBadgeClasses = () => {
        let classes = "badge m-2 p-2 badge-";
        classes += (this.state.count === 0) ? "danger" : "success";
        return classes;
  }
  render() {
    //JSX expressions must have one parent element
    //   React.createElement('div')
    const { count, imageUrl } = this.state;
    
    return (
      <div>
        <div className="text-center">
          <h1 style={this.styles} className={this.getBadgeClasses()}>
            {count}
          </h1>
        </div>
        <img src={imageUrl} alt="" />
        <h1 className="text-center">Hello World</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleDecrement}
        >
          {this.formatCount()}
        </button>
        <button className="btn btn-primary btn-sm" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }

    getBadgeClasses(count) {
        let classes = "badge m-2 p-2 badge-";
        classes += (count === 0) ? "danger" : "success";
        return classes;
    }
}

export default Counter;
