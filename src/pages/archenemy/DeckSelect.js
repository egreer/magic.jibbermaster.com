import React from "react";
import { Button, Card } from "react-bootstrap";
import { CustomDeckBuilder } from "./CustomDeckBuilder";
import { DeckCardTitle } from "./DeckCardTitle";
import { Prebuilts } from "./Prebuilts";

export const DeckSelect = ({ schemes, onSelectDeck }) => (
  <>
    <Card className="noselect" bg="black" text="white">
      <Card.Body>
        <DeckCardTitle name={"All Schemes"} />
        <Button
          className="fill-100"
          variant="success"
          onClick={() => onSelectDeck("All", schemes)}
        >
          Use All
        </Button>
      </Card.Body>
    </Card>
    <Prebuilts schemes={schemes} onSelectDeck={onSelectDeck} />
    <CustomDeckBuilder schemes={schemes} onSelectDeck={onSelectDeck} />
  </>
);
