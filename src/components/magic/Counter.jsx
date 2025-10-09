import { useState } from "react";
import { Button } from "react-bootstrap";
import { hasCustomProperty } from "../../mtg/card.js";

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
    case "Charge":
      return icon({ ms: "ms-counter-charge" });
    case "Death":
      return icon({ ms: "ms-counter-skull" });
    case "Doom":
      return icon({ ms: "ms-counter-doom" });
    case "Eruption":
    case "Pressure":
      return icon({ ms: "ms-counter-mining" });
    case "Exposure":
      return icon({ fa: "fa fa-fw fa-radiation" });
    case "Flame":
      return icon({ ms: "ms-counter-flame" });
    case "Fold":
      return icon({ ms: "ms-ability-read-ahead" });
    case "Fun":
      return icon({ ms: "ms-counter-vortex", verticalAlign: "bottom" });
    case "Scroll":
      return icon({ ms: "ms-counter-lore", verticalAlign: "bottom" });
    case "Time":
      return icon({ ms: "ms-counter-time" });
    default:
      return null;
  }
};

export const Counter = ({ card, style = {} }) => {
  const [counter, setCounter] = useState(card?.counter || 0);
  const { type, max, reset } = hasCustomProperty("counter", card);

  const disabled = max && counter >= max;

  const incrementCounter = () => {
    if (!disabled) {
      card.counter = counter + 1; //eslint-disable-line react-hooks/immutability
      setCounter(counter + 1);
    }
  };

  const resetCounters = () => {
    card.counter = 0; //eslint-disable-line react-hooks/immutability
    setCounter(0);
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
        disabled={disabled}
      >
        <h3 className="mb-0">Add {type} Counter</h3>
      </Button>
      {reset && (
        <div>
          <Button
            onClick={resetCounters}
            variant="danger"
            size="lg"
            className="btn-translucent"
          >
            <h3 className="mb-0">Remove Counters</h3>
          </Button>
        </div>
      )}
    </div>
  );
};
