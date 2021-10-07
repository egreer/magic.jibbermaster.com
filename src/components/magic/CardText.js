import React from "react";
import { Card } from "react-bootstrap";
import { useSettings } from "../../hooks/useSettings";

export const CardText = ({ card, showText = false }) => {
  const { displayText } = useSettings();

  if (showText || displayText) {
    if (card) {
      const html =
        card.oracle_html ||
        card.oracle_text ||
        card.card_faces?.map((f) => f.oracle_text).join("<br/>");
      return (
        <>
          <Card.Title>
            <h5>{card.name}</h5>
          </Card.Title>
          <Card.Subtitle>{card.type_line}</Card.Subtitle>
          <Card.Text dangerouslySetInnerHTML={{ __html: html }} />
        </>
      );
    } else {
      return <Card.Title>None</Card.Title>;
    }
  }

  return null;
};
