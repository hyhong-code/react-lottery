import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <div>
          <Ball />
          <Ball />
          <Ball />
          <Ball />
        </div>
        <button>Generate</button>
      </div>
    );
  }
}

export default Lottery;
