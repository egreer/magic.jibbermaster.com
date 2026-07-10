import cn from "classnames";
import { useRef, useState } from "react";
import "./coin.scss";

const animationDuration = 2000;

export const CoinFlip = ({ start = "heads", style = {} }) => {
  const [side, setSide] = useState(start);
  const [flipping, setFlipping] = useState(false);

  const timeoutRef = useRef(null);

  const coinToss = () => {
    setFlipping(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setFlipping(false);
      setSide(Math.random() < 0.5 ? "heads" : "tails");
    }, animationDuration);
  };

  return (
    <div
      className={cn("coin", !flipping && side, { flipping })}
      onClick={coinToss}
      onKeyUp={(event) => ["Enter"].includes(event.key) && coinToss()}
      role="button"
      tabIndex={0}
      style={style}
    >
      <div className="side side-heads mtg-bg-timeshifted mtg-grad">
        <i className="ss ss-fw ss-thb ss-3x"></i>
      </div>
      <div className="side side-tails mtg-bg-rare mtg-grad">
        <i className="ss ss-fw ss-wot ss-3x"></i>
      </div>
    </div>
  );
};
