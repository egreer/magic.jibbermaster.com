import React, { useEffect, useState } from "react";
import {
  Accordion,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  ListGroup
} from "react-bootstrap";
import { Scheme } from "../../components/magic/Scheme";
import { LoyaltyButtonGroup } from "../../components/magic/Buttons";
import { DeckCardTitle } from "./DeckCardTitle";

export const CustomDeckBuilder = ({ schemes, onSelectDeck }) => {
  const [customDeck, setCustomDeck] = useState([]);
  const deckName = "Custom Deck";

  // TODO Verify
  useEffect(() => {
    const newCustomDeck = schemes.map(scheme => {
      return { ...scheme, count: 0 };
    });
    setCustomDeck(newCustomDeck);
  }, [schemes, setCustomDeck]);

  const customDeckSize = () => {
    const reducer = (a, b) => a + b;
    return customDeck.map(c => c.count).reduce(reducer, 0);
  };

  const resetCustomDeck = () => {
    customDeck.forEach(c => (c.count = 0));
    setCustomDeck([...customDeck]);
  };

  const incrementCount = card => {
    customDeck.forEach(c => {
      if (c.id === card.id) {
        c.count += 1;
        c.count = Math.min(c.count, 2);
      }
    });
    setCustomDeck([...customDeck]);
  };

  const decrementCount = card => {
    customDeck.forEach(c => {
      if (c.id === card.id) {
        c.count -= 1;
        c.count = Math.max(c.count, 0);
      }
    });
    setCustomDeck([...customDeck]);
  };

  const cardListItems = customDeck.map(card => (
    <ListGroup.Item key={card.id} variant="dark" className="noselect">
      <Scheme card={card} />
      <div className="text-center">
        <h1>
          <Badge pill variant={card.count > 0 ? "success" : "dark"}>
            x{card.count}
          </Badge>
        </h1>
        <LoyaltyButtonGroup
          downProps={{
            disabled: card.count <= 0,
            onClick: () => decrementCount(card)
          }}
          upProps={{
            disabled: card.count >= 2,
            onClick: () => incrementCount(card)
          }}
        />
      </div>
    </ListGroup.Item>
  ));

  return (
    <Accordion>
      <Card className="noselect">
        <Card.Body>
          <DeckCardTitle name={deckName} />
          <Accordion.Toggle
            as={Button}
            block
            eventKey="custom-deck-toggle"
            variant="secondary"
          >
            Build Custom
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="custom-deck-toggle">
            <>
              <div className="fixed-top mt-1 ml-1 text-left">
                <Alert variant="info" className="clearfix">
                  <h4 className="float-left">
                    Custom Deck Size: {customDeckSize()}
                  </h4>
                  <ButtonGroup className="float-right">
                    <Button variant="danger" onClick={resetCustomDeck}>
                      Reset
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => onSelectDeck("Custom", customDeck)}
                    >
                      Use Deck
                    </Button>
                  </ButtonGroup>
                </Alert>
              </div>

              <ListGroup>{cardListItems}</ListGroup>
            </>
          </Accordion.Collapse>
          <Button
            block
            variant="success"
            onClick={() => onSelectDeck("Custom", customDeck)}
          >
            Use Custom Deck
          </Button>
        </Card.Body>
      </Card>
    </Accordion>
  );
};
