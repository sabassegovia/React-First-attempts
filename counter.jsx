//use fromsimple react snioets, in abbbreviation
import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
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
    //this.props.counter --> const { count } = this.props.counter;
    const { value } = this.props.counter;
    const x = <span>Zero</span>;
    return value === 0 ? x : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

{
  /* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
<button className="btn btn-secondary btn-sm">Increment</button>

getBadgeClasses() {
  let classes = "badge m-2 badge-";
  classes += this.props.counter.count === 0 ? "warning" : "primary";
  return classes;
}

formatCount() {
  //this.props.counter --> const { count } = this.props.counter;
  const { count } = this.props.counter;
  const x = <span>Zero</span>;
  return count === 0 ? x : count;
}

  renderTags() {
    if (this.props.counter.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.props.counter.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );*/
}
