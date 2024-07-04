import Case from "case";
import sampleSize from "lodash/sampleSize";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { hasCustomProperty } from "../../mtg/card";
import { AbilityIcon } from "../../util/createMarkup";

export const RandomChoice = ({ card, style = {} }) => {
  const [choices, setChoices] = useState(null);
  const [choosing, setChoosing] = useState(false);

  var timeoutId,
    animationDuration = 2000;

  const property = hasCustomProperty("random-choices", card);
  const randomChoice = () => {
    setChoosing(true);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
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
