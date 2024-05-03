import noop from "lodash/noop";
import React from "react";
import ReactDice from "react-dice-complete";
import "./planar-die.scss";

export const AttractionDie = ({ rollDone = noop }) => {
  return (
    <div className="attraction">
      <ReactDice
        numDice={1}
        rollDone={(r) => rollDone(r)}
        defaultRoll={1}
        outline={true}
        outlineColor="#808080"
        dotColor="#FFFFFF"
        faceColor="0"
      />
    </div>
  );
};
