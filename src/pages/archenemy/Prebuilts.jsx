import {
  Accordion,
  Badge,
  Button,
  ButtonGroup,
  Card,
  ListGroup,
} from "react-bootstrap";
import { CloseAccordionButton } from "../../components/CloseAccordionButton";
import { Scheme } from "../../components/magic/Scheme";
import { getCardList, getDeckList } from "../../mtg/prebuilt-decks";
import { DeckCardTitle } from "./DeckCardTitle";
import { DecklistButton } from "./DecklistButton";
import { DeckListControls } from "./DecklistControls";

export const Prebuilts = ({ schemes, onSelectDeck }) => {
  const prebuilts = getDeckList();
  const prebuiltItems = prebuilts.map((prebuilt, i) => {
    const cardList = getCardList(prebuilt, schemes);
    const cardListItems = cardList.map((card, i) => (
      <ListGroup.Item key={i} variant="dark">
        <Scheme card={card} />
        <h1 className="text-center">
          <Badge pill bg={card.count > 0 ? "success" : "dark"}>
            x{card.count}
          </Badge>
        </h1>
      </ListGroup.Item>
    ));
    const eventKey = `prebuilt-${i}`;

    return (
      <Accordion key={i}>
        <Accordion.Item eventKey={eventKey} className="border-0">
          <Card bg="black" text="light">
            <Card.Body>
              <DeckCardTitle name={prebuilt} />
              <DecklistButton eventKey={eventKey}>Decklist</DecklistButton>
              <Accordion.Collapse eventKey={eventKey}>
                <>
                  <DeckListControls title={prebuilt} deck={prebuilt}>
                    <ButtonGroup>
                      <CloseAccordionButton
                        eventKey={eventKey}
                        variant="secondary"
                        className="px-4"
                      >
                        Close Decklist
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
                onClick={() => onSelectDeck(prebuilt, cardList)}
              >
                Use Deck
              </Button>
            </Card.Body>
          </Card>
        </Accordion.Item>
      </Accordion>
    );
  });

  return <>{prebuiltItems}</>;
};
