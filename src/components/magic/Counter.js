import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getCounterType } from "../../mtg/card.js";

export const Counter = ({ card }) => {
  const [counter, setCounter] = useState(card?.counter || 0);
  const type = getCounterType(card);
  const incrementCounter = () => {
    card.counter = counter + 1;
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1 className="text-shadow noselect">{counter}</h1>
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
