import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //passes each counter object, sets value to zero, sets state
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
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

  handleSubtract = counter => {
    //spread operator clones state.counters array
    const counters = [...this.state.counters];
    //finds index of counter object passed
    const index = counters.indexOf(counter);
    //spread operator clones indexed object
    counters[index] = { ...counter };
    //increases value of cloned object
    counters[index].value--;
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
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onSubtract={this.handleSubtract}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
