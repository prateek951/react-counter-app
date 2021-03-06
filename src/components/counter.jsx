import React, { Component } from "react";

class Counter extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  // handleIncrement = () => {
  //   console.log("[counter] Inside the handleIncrement method");
  //   const { count } = this.state;
  //   this.setState({ count: count + 1 });
  // };
  // handleDecrement = () => {
  //   const { count } = this.state;
  //   console.log("[counter] Inside the handleDecrement method");
  //   if (count === 0) {
  //     return;
  //   } else {
  //     this.setState({ count: count - 1 });
  //   }
  // };
  // handleReset = () => {
  //   console.log("[counter] Inside the handleReset method");
  //   this.setState({ count: 0 });
  // };
  handleIncrement = () => {
    this.props.handleIncrement(this.props.counter);
  }
  handleDecrement = () => {
    this.props.handleDecrement(this.props.counter);
  } 
  handleAllReset = () => {
    this.props.handleAllReset();
  }
  onDelete = () => this.props.handleDelete(this.props.counter.id);
  formatCount = () => {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : "Decrement";
  };
  handleReset = () => {
    this.props.handleReset(this.props.counter);
  }
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  renderTags = () => {
    const { tags } = this.state;
    return tags && tags.length !== 0 ? (
      tags.map((tag, index) => <li key={index}>{tag}</li>)
    ) : (
      <p>There are no tags in the list!</p>
    );
  };

  render() {
    //JSX expressions must have one parent element
    //   React.createElement('div')
    const { imageUrl, tags } = this.state;
    const count = this.props.counter.value;
    const { id } = this.props.counter;
    console.log("[Counter] Counters => Props => Counter", this.props);
    return (
      <div>
        <div className="text-center">
          <h4>Counter #{id}</h4>
          <h1 style={this.styles} className={this.getBadgeClasses(count)}>
            {count}
          </h1>
        </div>
        <img src={imageUrl} alt="" />
        <h1 className="text-center">Hello World</h1>
        <ul>
          {tags.length === 0 && "Please create a new tag"}
          {this.renderTags()}
        </ul>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleDecrement}
          disabled={this.props.counter.value === 0 ? true : false}
        >
          {this.formatCount()}
        </button>
        <button className="btn btn-primary btn-sm" onClick={this.handleReset}>
          Reset
        </button>
        <button onClick={this.onDelete} className="btn btn-danger btn-sm">Delete</button>
      </div>
    );
  }

  getBadgeClasses(count) {
    let classes = "badge m-2 p-2 badge-";
    classes += count === 0 ? "danger" : "success";
    return classes;
  }
}

export default Counter;
