import React, { Component } from "react";
import { Button } from "reactstrap";
import { getCounterType } from "../../mtg/card.js";
export class Counter extends Component {
  state = {
    counters: {}
  };

  incrementCounter = () => {
    const { card } = this.props;
    const { counters } = this.state;
    counters[card.id] = this.counterCount() + 1;
    this.setState({ counters });
  };

  counterCount = () => {
    const { card } = this.props;
    const { counters } = this.state;
    return counters[card.id] || 0;
  };

  componentWillUnmount() {
    this.setState({ counters: {} });
  }

  render() {
    const { card } = this.props;
    const type = getCounterType(card);
    return (
      <div>
        {this.counterCount()}
        <Button onClick={this.incrementCounter}>Add {type} Counter</Button>
      </div>
    );
  }
}
