import { useEffect, useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  ButtonGroup,
  Card,
  ListGroup,
} from "react-bootstrap";
import { CloseAccordionButton } from "../../components/CloseAccordionButton";
import { LoyaltyButtonGroup } from "../../components/magic/Buttons";
import { Scheme } from "../../components/magic/Scheme";
import { DeckCardTitle } from "./DeckCardTitle";
import { DecklistButton } from "./DecklistButton";
import { DeckListControls } from "./DecklistControls";

export const CustomDeckBuilder = ({ schemes, onSelectDeck }) => {
  const [customDeck, setCustomDeck] = useState([]);
  const deckName = "Custom Deck";

  useEffect(() => {
    const newCustomDeck = schemes.map((scheme) => {
      return { ...scheme, count: 0 };
    });
    setCustomDeck(newCustomDeck);
  }, [schemes, setCustomDeck]);

  const customDeckSize = () => {
    const reducer = (a, b) => a + b;
    return customDeck.map((c) => c.count).reduce(reducer, 0);
  };

  const resetCustomDeck = () => {
    customDeck.forEach((c) => (c.count = 0));
    setCustomDeck([...customDeck]);
  };

  const incrementCount = (card) => {
    customDeck.forEach((c) => {
      if (c.id === card.id) {
        c.count += 1;
        c.count = Math.min(c.count, 2);
      }
    });
    setCustomDeck([...customDeck]);
  };

  const decrementCount = (card) => {
    customDeck.forEach((c) => {
      if (c.id === card.id) {
        c.count -= 1;
        c.count = Math.max(c.count, 0);
      }
    });
    setCustomDeck([...customDeck]);
  };

  const cardListItems = customDeck.map((card) => (
    <ListGroup.Item key={card.id} variant="dark" className="noselect">
      <Scheme card={card} />
      <div className="text-center">
        <h1>
          <Badge pill bg={card.count > 0 ? "success" : "dark"}>
            x{card.count}
          </Badge>
        </h1>
        <LoyaltyButtonGroup
          downProps={{
            disabled: card.count <= 0,
            onClick: () => decrementCount(card),
            title: `Decrease ${card.name} Quantity`,
          }}
          upProps={{
            disabled: card.count >= 2,
            onClick: () => incrementCount(card),
            title: `Increase ${card.name} Quantity`,
          }}
        />
      </div>
    </ListGroup.Item>
  ));

  const eventKey = "custom-deck-toggle";

  return (
    <Accordion>
      <Accordion.Item eventKey={eventKey} className="border-0">
        <Card className="noselect" bg="black" text="light">
          <Card.Body>
            <DeckCardTitle name={deckName} />
            <DecklistButton eventKey={eventKey}>Build Custom</DecklistButton>
            <Accordion.Collapse eventKey="custom-deck-toggle">
              <>
                <DeckListControls
                  title={`Custom Deck Size: ${customDeckSize()}`}
                  deck={deckName}
                >
                  <ButtonGroup className="float-end">
                    <Button
                      variant="danger"
                      className="px-4"
                      onClick={resetCustomDeck}
                    >
                      Reset Cards
                    </Button>
                    <CloseAccordionButton
                      eventKey={eventKey}
                      variant="secondary"
                      className="px-4"
                    >
                      Close Custom Deck
                    </CloseAccordionButton>
                    <Button
                      variant="success"
                      className="px-4"
                      onClick={() => onSelectDeck("Custom", customDeck)}
                    >
                      Use Deck
                    </Button>
                  </ButtonGroup>
                </DeckListControls>
                <ListGroup>{cardListItems}</ListGroup>
              </>
            </Accordion.Collapse>
            <Button
              className="fill-100"
              variant="success"
              onClick={() => onSelectDeck("Custom", customDeck)}
            >
              Use Custom Deck
            </Button>
          </Card.Body>
        </Card>
      </Accordion.Item>
    </Accordion>
  );
};
