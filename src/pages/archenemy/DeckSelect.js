import React from "react";
import { Button, Card } from "react-bootstrap";
import { DeckCardTitle } from "./DeckCardTitle";
import { Prebuilts } from "./Prebuilts";
import { CustomDeckBuilder } from "./CustomDeckBuilder";

export const DeckSelect = ({ schemes, onSelectDeck }) => (
  <>
    <Card className="noselect">
      <Card.Body>
        <DeckCardTitle name={"All Schemes"} />
        <Button
          block
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
