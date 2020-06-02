import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <div>
          <Ball number={3} />
          <Ball number={2} />
          <Ball number={4} />
          <Ball number={5} />
        </div>
        <button>Generate</button>
      </div>
    );
  }
}

export default Lottery;
