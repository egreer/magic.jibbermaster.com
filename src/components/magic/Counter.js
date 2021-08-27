import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getCounterType } from "../../mtg/card.js";

export const CounterIcon = ({ type, className = "", style = {} }) => {
  const icon = (ms, verticalAlign = "initial") => (
    <i
      className={`ms mm-fw ${ms} ${className}`}
      style={{ verticalAlign, ...style }}
    ></i>
  );

  switch (type) {
    case "Doom":
      return icon("ms-counter-doom");
    case "Scroll":
      return icon("ms-counter-lore", "bottom");
    case "Charge":
      return icon("ms-counter-charge");
    case "Pressure":
      return icon("ms-counter-mining");
    case "Flame":
      return icon("ms-counter-flame");
    case "Fun":
      return icon("ms-counter-vortex", "bottom");
    default:
      return null;
  }
};

export const Counter = ({ card }) => {
  const [counter, setCounter] = useState(card?.counter || 0);
  const type = getCounterType(card);
  const incrementCounter = () => {
    card.counter = counter + 1;
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1 className="text-shadow noselect">
        {counter} <CounterIcon type={type} />
      </h1>
      <Button
        onClick={incrementCounter}
        variant="dark"
        size="lg"
        className="btn-translucent"
      >
        <h3 className="mb-0">Add {type} Counter</h3>
      </Button>
    </div>
  );
};
