import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  render() {
    //React.Fragment gets rid of unnecessary outside div
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    this.state.count === 0 ? (classes += "warning") : (classes += "primary");
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
