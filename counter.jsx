//use fromsimple react snioets, in abbbreviation
import React, { Component } from "react";

export default class Counter extends Component {
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleDecrement()}
          className="btn btn-warning btn sm m-2"
        >
          Decrement
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

  formatCount() {
    //this.state --> const { count } = this.state;
    const { value } = this.state;
    const x = <span>Zero</span>;
    return value === 0 ? x : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

{
  /* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
<button className="btn btn-secondary btn-sm">Increment</button>

getBadgeClasses() {
  let classes = "badge m-2 badge-";
  classes += this.state.count === 0 ? "warning" : "primary";
  return classes;
}

formatCount() {
  //this.state --> const { count } = this.state;
  const { count } = this.state;
  const x = <span>Zero</span>;
  return count === 0 ? x : count;
}

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );*/
}
