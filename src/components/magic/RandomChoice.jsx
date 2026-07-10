import Case from "case";
import sampleSize from "lodash/sampleSize";
import { useRef, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { hasCustomProperty } from "../../mtg/card";
import { AbilityIcon } from "../../util/createMarkup";

const animationDuration = 2000;

export const RandomChoice = ({ card, style = {} }) => {
  const [choices, setChoices] = useState(null);
  const [choosing, setChoosing] = useState(false);

  const timeoutRef = useRef(null);

  const property = hasCustomProperty("random-choices", card);
  const randomChoice = () => {
    setChoosing(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setChoosing(false);
      const selections = sampleSize(property.choices, property.count);
      setChoices(selections);
    }, animationDuration);
  };

  const renderChoices = () =>
    choices?.map((c, i) => {
      return (
        <div key={i}>
          {Case.title(c)}
          <AbilityIcon ability={c} className="mx-2"></AbilityIcon>
        </div>
      );
    });

  return (
    <div style={style}>
      <h3 className="text-shadow noselect">
        {choosing ? (
          <Spinner size="lg" animation="grow" variant="primary">
            <span className="sr-only">Choosing...</span>
          </Spinner>
        ) : (
          renderChoices()
        )}
      </h3>
      <Button
        onClick={randomChoice}
        variant="dark"
        size="lg"
        className="btn-translucent"
        disabled={choosing}
      >
        <h3 className="mb-0">{choosing ? "Choosing" : "Choose Random"}</h3>
      </Button>
    </div>
  );
};
