import noop from "lodash/noop";
import ReactDiceModule from "react-dice-complete";
import "./planar-die.scss";

// react-dice-complete's CJS bundle isn't unwrapped by Vite's dep
// pre-bundler, so the default import resolves to the { default } wrapper
// instead of the component itself. Unwrap it explicitly.
const ReactDice = ReactDiceModule?.default ?? ReactDiceModule;

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
