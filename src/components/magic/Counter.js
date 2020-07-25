import React, { useState } from "react";
import { Button } from "reactstrap";
import { getCounterType } from "../../mtg/card.js";

export const Counter = ({ card }) => {
  const [counter, setCounter] = useState(0);
  const type = getCounterType(card);
  return (
    <div>
      <h1 className="text-shadow noselect">{counter}</h1>
      <Button
        onClick={() => setCounter(counter + 1)}
        color="dark"
        size="lg"
        className="btn-translucent"
      >
        <h3 className="mb-0">Add {type} Counter</h3>
      </Button>
    </div>
  );
};
