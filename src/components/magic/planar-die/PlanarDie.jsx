import noop from "lodash/noop";
import ReactDice from "react-dice-complete";
import "./planar-die.scss";

const translateRoll = (roll) => {
  switch (roll) {
    case 1:
      return "Planeswalk";
    case 6:
      return "Chaos";
    default:
      return "Blank";
  }
};

export const PlanarDie = ({ rollDone = noop }) => {
  return (
    <div className="planar">
      <ReactDice
        numDice={1}
        rollDone={(r) => rollDone(translateRoll(r))}
        defaultRoll={1}
        outline={true}
        outlineColor="#808080"
      />
    </div>
  );
};
