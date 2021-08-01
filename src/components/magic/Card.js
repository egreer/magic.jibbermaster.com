import React from "react";
import { Card } from "react-bootstrap";
import { useSettings } from "../../hooks/useSettings";

export const CardText = ({ card }) => {
  const settings = useSettings();

  if (settings.displayText) {
    if (card) {
      return (
        <>
          <Card.Title>
            <h5>{card.name}</h5>
          </Card.Title>
          <Card.Subtitle>{card.type_line}</Card.Subtitle>
          <Card.Text dangerouslySetInnerHTML={card.oracle_html} />
        </>
      );
    } else {
      return <Card.Title>None</Card.Title>;
    }
  }

  return null;
};
