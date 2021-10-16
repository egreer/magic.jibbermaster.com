import React from "react";
import { Button } from "react-bootstrap";
import { DeleteIcon } from "../../components/magic/Icons.js";
import { hasCustomProperty } from "../../mtg/card.js";

export const AbandonButton = ({ card, onClick }) => {
  const isOngoing = card.type_line === "Ongoing Scheme";
  if (isOngoing && !hasCustomProperty("unabandonable", card)) {
    return (
      <Button
        onClick={() => onClick(card)}
        variant="danger"
        size="lg"
        className="btn-translucent"
      >
        <h2 className="mb-0">
          <DeleteIcon />
          <span className="mx-2 d-none d-md-inline">Abandon Scheme</span>
        </h2>
      </Button>
    );
  }
  return null;
};
