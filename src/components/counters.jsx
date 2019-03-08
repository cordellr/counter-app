import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //this handleIncrement method helps maintain single source of truth principle
  handleIncrement = counter => {
    //spread operator clones state.counters array
    const counters = [...this.state.counters];
    //finds index of counter object passed
    const index = counters.indexOf(counter);
    //spread operator clones indexed object
    counters[index] = { ...counter };
    //increases value of cloned object
    counters[index].value++;
    //sets state of new counters array
    this.setState({ counters });
  };

  //handler for delete event called from counter.jsx click event
  //passes id of counter to be deleted
  //creates a new arrary, does not directly update state
  handleDelete = counterID => {
    //filters for all counters without passed ID
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  render() {
    //values from counters state are passed to counter component
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
