import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Fade,
  ListGroup
} from "react-bootstrap";
import { useDeckContext } from "../../mtg/DeckContext";
import {
  LoyaltyButtonGroup,
  TapButtonGroup,
  TenthEditionButton
} from "../magic/Buttons";

export const Deck = ({ CardType, name = "" }) => {
  const [showDeck, setShowDeck] = useState(false);
  const [showDeckImages, setShowDeckImages] = useState(false);
  const context = useDeckContext();
  const deck = context.deck;

  return (
    <div className="my-2">
      <Button onClick={() => setShowDeck(!showDeck)} variant="secondary" block>
        {showDeck ? "Hide" : "Show"} {name} Deck
      </Button>
      <Fade in={showDeck}>
        <div>
          {showDeck && (
            <>
              <Button
                onClick={() => setShowDeckImages(!showDeckImages)}
                variant="secondary"
                block
              >
                {showDeckImages ? "Hide" : "Show"} Full Card
              </Button>
              <ListGroup>
                {deck.map((card, i) => (
                  <React.Fragment key={card.deck_card_id}>
                    <CardType card={card} listDisplay={!showDeckImages} />
                    <ListGroup.Item className="text-center justify-content-center d-flex">
                      <ButtonToolbar>
                        <LoyaltyButtonGroup
                          reverse
                          downProps={{
                            disabled: i === deck.length - 1,
                            onClick: () => context.moveCard(i, i + 1)
                          }}
                          upProps={{
                            disabled: i === 0,
                            onClick: () => context.moveCard(i, i - 1)
                          }}
                        />
                        <TapButtonGroup
                          className="ml-2"
                          unTapProps={{
                            disabled: i === 0,
                            onClick: () =>
                              context.findAndPutOnTop(card.deck_card_id)
                          }}
                          tapProps={{
                            disabled: i === deck.length - 1,
                            onClick: () =>
                              context.findAndPutOnBottom(card.deck_card_id)
                          }}
                        />

                        <ButtonGroup className="ml-2">
                          <TenthEditionButton
                            onClick={() => context.removeCards([card])}
                          />
                        </ButtonGroup>
                      </ButtonToolbar>
                    </ListGroup.Item>
                  </React.Fragment>
                ))}
              </ListGroup>
            </>
          )}
        </div>
      </Fade>
    </div>
  );
};
