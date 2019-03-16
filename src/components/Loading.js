import React, { Component } from "react";

export class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dotsCount: props.start || 0
    };
  }

  componentDidMount() {
    const { interval = 500 } = this.props;

    this.dotsInterval = setInterval(() => {
      this.setState({ dotsCount: this.state.dotsCount + 1 });
    }, interval);
  }

  componentWillUnmount() {
    clearInterval(this.dotsInterval);
  }

  getDotString(count, max, char = ".") {
    let numDots = count % (max + 1);
    let dots = "";

    for (let i = 0; i < numDots; i++) {
      dots += char;
    }

    return dots;
  }

  render() {
    const { label = "Loading", className, numDots = 3 } = this.props;
    const { dotsCount } = this.state;
    let dots = this.getDotString(dotsCount, numDots, ".");
    let classes = `loading-dots ${className}`;

    return (
      <span className={classes}>
        {label}
        {dots}
      </span>
    );
  }
}
