import React from "react";
import { Button, useAccordionButton } from "react-bootstrap";

export const DecklistButton = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Button variant="secondary" className="fill-100" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
};
