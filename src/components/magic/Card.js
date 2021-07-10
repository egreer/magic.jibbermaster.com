import React from "react";
import { Card } from "react-bootstrap";
import { getSetting } from "../../util/settings.js";

export const CardText = ({ card }) => {
  const displayText = getSetting("displayText");
  if (displayText) {
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
