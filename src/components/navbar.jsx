import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    const { ctrslength } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Counter</a>
        <p> Counters: {ctrslength}</p>
      </nav>
    )
  }
}

export default Navbar;