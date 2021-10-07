import React from "react";
import { Card } from "react-bootstrap";
import { useSettings } from "../../hooks/useSettings";

export const CardLinks = ({ card }) => {
  const { displayGatherer } = useSettings();

  const gathererUri = card?.related_uris?.gatherer;
  const scryfallUri = card?.scryfall_uri;

  if (displayGatherer && (gathererUri || scryfallUri)) {
    return (
      <Card>
        <Card.Footer>
          {gathererUri && (
            <Card.Link
              href={gathererUri}
              target="_blank"
              rel="noopener noreferrer"
              className="float-left"
            >
              Gatherer
            </Card.Link>
          )}
          {scryfallUri && (
            <Card.Link
              href={scryfallUri}
              target="_blank"
              rel="noopener noreferrer"
              className="float-right"
            >
              Scryfall
            </Card.Link>
          )}
        </Card.Footer>
      </Card>
    );
  }
  return null;
};
