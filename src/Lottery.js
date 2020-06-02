import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = {
      // create empty slots for initial load
      nums: Array.from({ length: this.props.maxBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    const newNums = this.state.nums.map((num) => {
      return Math.floor(Math.random() * this.props.maxNum + 1);
    });
    this.setState({ nums: newNums });
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num) => (
            <Ball number={num} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
