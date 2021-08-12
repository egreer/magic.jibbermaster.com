import React from "react";
import { Accordion, Badge, Button, Card, ListGroup } from "react-bootstrap";
import { getDeckList, getCardList } from "../../mtg/prebuilt-decks";
import { Scheme } from "../../components/magic/Scheme";
import { DeckCardTitle } from "./DeckCardTitle";

export const Prebuilts = ({ schemes, onSelectDeck }) => {
  const prebuilts = getDeckList();
  const prebuiltItems = prebuilts.map((prebuilt, i) => {
    const cardList = getCardList(prebuilt, schemes);
    const cardListItems = cardList.map((card, i) => (
      <ListGroup.Item key={i} variant="dark">
        <Scheme card={card} />
        <h1 className="text-center">
          <Badge pill variant={card.count > 0 ? "success" : "dark"}>
            x{card.count}
          </Badge>
        </h1>
      </ListGroup.Item>
    ));
    return (
      <Accordion key={i}>
        <Card>
          <Card.Body>
            <DeckCardTitle name={prebuilt} />
            <Accordion.Toggle
              as={Button}
              block
              eventKey={`prebuilt-${i}`}
              variant="secondary"
            >
              Decklist
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`prebuilt-${i}`}>
              <ListGroup>{cardListItems}</ListGroup>
            </Accordion.Collapse>
            <Button
              block
              variant="success"
              onClick={() => onSelectDeck(prebuilt, cardList)}
            >
              Use Deck
            </Button>
          </Card.Body>
        </Card>
      </Accordion>
    );
  });

  return <>{prebuiltItems}</>;
};
