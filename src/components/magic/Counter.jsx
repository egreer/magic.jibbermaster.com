import { useState } from "react";
import { Button } from "react-bootstrap";
import { getCounterType } from "../../mtg/card.js";

export const CounterIcon = ({ type, className = "", style = {} }) => {
  const icon = ({ ms, verticalAlign = "initial", fa }) => {
    const iconClass = fa ? `fa fa-fw ${fa}` : `ms mm-fw ${ms}`;
    return (
      <i
        className={`${iconClass} ${className}`}
        style={{ verticalAlign, ...style }}
      ></i>
    );
  };

  switch (type) {
    case "Death":
      return icon({ ms: "ms-counter-skull" });
    case "Doom":
      return icon({ ms: "ms-counter-doom" });
    case "Exposure":
      return icon({ fa: "fa fa-fw fa-radiation" });
    case "Scroll":
      return icon({ ms: "ms-counter-lore", verticalAlign: "bottom" });
    case "Charge":
      return icon({ ms: "ms-counter-charge" });
    case "Eruption":
    case "Pressure":
      return icon({ ms: "ms-counter-mining" });
    case "Flame":
      return icon({ ms: "ms-counter-flame" });
    case "Fun":
      return icon({ ms: "ms-counter-vortex", verticalAlign: "bottom" });
    default:
      return null;
  }
};

export const Counter = ({ card, style = {} }) => {
  const [counter, setCounter] = useState(card?.counter || 0);
  const type = getCounterType(card);
  const incrementCounter = () => {
    card.counter = counter + 1;
    setCounter(counter + 1);
  };
  return (
    <div style={style}>
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
