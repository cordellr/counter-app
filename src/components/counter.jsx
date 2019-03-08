import React, { Component } from "react";

class Counter extends Component {
  state = {
    // this.props.value is passed values initialized in counters.jsx
    value: this.props.counter.value
    //tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  //changed to arrow function to inhereit 'this' keyword
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  //if tags array has 0 items, returns paragraph. Otherwise maps list items dynamically.
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {" "}
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    this.state.value === 0 ? (classes += "warning") : (classes += "primary");
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
