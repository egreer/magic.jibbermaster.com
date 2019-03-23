import React, { Component } from "react";
import { Button } from "reactstrap";
import { getCounterType } from "../../mtg/card.js";
export class Counter extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { card } = this.props;
    const { counter } = this.state;
    const type = getCounterType(card);
    return (
      <div>
        <h1 className="text-shadow noselect">{counter}</h1>
        <Button
          onClick={this.incrementCounter}
          color="dark"
          size="lg"
          className="btn-translucent"
        >
          <h3 className="mb-0">Add {type} Counter</h3>
        </Button>
      </div>
    );
  }
}
