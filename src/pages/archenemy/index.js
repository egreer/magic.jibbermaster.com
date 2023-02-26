import pluralize from "pluralize";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Container, Fade } from "react-bootstrap";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import { ActionButton } from "../../components/game/ActionButton";
import { Deck } from "../../components/game/Deck";
import { History } from "../../components/game/History";
import { Loading } from "../../components/Loading";
import { Scheme } from "../../components/magic/Scheme";
import { useLocalState } from "../../hooks/useLocalState";
import { useDeckContext } from "../../mtg/DeckContext";
import { useGameContext } from "../../mtg/GameContext";
import { getAllArchenemyCards } from "../../util/api.js";
import { AbandonButton } from "./AbandonButton";
import { DeckSelect } from "./DeckSelect";
import { ArchenemyHelmet } from "./Helmet";

const Jumbotron = ({ children }) => (
  <div className="my-4 p-5 bg-primary text-white rounded bg-danger text-center">
    {children}
  </div>
);

export const Archenemy = () => {
  const [loading, setLoading] = useState(true);
  const [schemes, setSchemes] = useState([]);
  const [deckSelection, setDeckSelection] = useState(true);

  const game = useGameContext();
  const currentCard = game.currentCard;
  const ongoingSchemes = game.additionalCards;

  const deck = useDeckContext();

  const [abandonedOngoing, setAbandonedOnGoing] = useLocalState(
    `archenemy-abandonedOngoing`,
    false
  );

  const fetchSchemes = useCallback(async () => {
    const newSchemes = await getAllArchenemyCards();
    setSchemes(newSchemes);
    setLoading(false);
  }, [setSchemes, setLoading]);

  useEffect(() => {
    if (schemes && schemes.length <= 0) {
      fetchSchemes();
    }
  }, [schemes, fetchSchemes]);

  useEffect(() => {
    setDeckSelection(!deck.isInit);
  }, [deck.isInit]);

  const scheme = () => {
    if (currentCard) {
      if (currentCard.type_line === "Ongoing Scheme") {
        ongoingSchemes.push(currentCard);
      }
    }
    const newCard = deck.drawCard() ?? null;
    game.setCurrentCard(newCard);
    game.setAdditionalCards(ongoingSchemes);
    game.setCurrentCard(newCard);
    setAbandonedOnGoing(false);
  };

  const reset = async () => {
    setLoading(true);
    fetchSchemes();
    deck.reInit();
    game.reset();
    setAbandonedOnGoing(false);
    setLoading(false);
    setDeckSelection(true);
  };

  const undo = async () => {
    const lastCard = deck.undoDraw();
    if (lastCard) {
      game.setCurrentCard(lastCard);
      setAbandonedOnGoing(false);
    }
  };

  const renderGamePlay = () => {
    const history = deck.history;

    return (
      <>
        <ActionButton
          text="Scheme"
          onClick={scheme}
          disabled={loading}
          icon={<i className="ss ss-arc ss-3x mx-2" />}
        />

        {loading ? (
          <Loading className="text-muted" />
        ) : (
          <div className="pt-2 mb-2 mtg-scheme-card">
            {abandonedOngoing ? (
              <Jumbotron className="bg-danger text-center" fluid>
                <Container fluid>
                  <h1>Current Scheme Has Been Foiled!</h1>
                </Container>
              </Jumbotron>
            ) : currentCard ? (
              <Fade key={currentCard?.deck_card_id} timeout={100}>
                <Scheme card={currentCard} displayActions={true}>
                  <AbandonButton card={currentCard} onClick={abandonScheme} />
                </Scheme>
              </Fade>
            ) : (
              <Scheme />
            )}
          </div>
        )}

        {renderOngoingSchemes()}

        <History history={history} CardType={Scheme} />

        <p className="text-center my-3 noselect">
          There are {pluralize("card", deck?.deck?.length ?? 0, true)}{" "}
          remaining.
        </p>
        <Confirm
          onConfirm={reset}
          headerText="Reset Schemes?"
          triggerText="Reset"
          confirmText="Reset"
          confirmVariant="danger"
          triggerButtonParams={{ variant: "danger", className: "w-100" }}
        />
      </>
    );
  };

  const renderOngoingSchemes = () => {
    if (ongoingSchemes && ongoingSchemes.length > 0) {
      return (
        <>
          <Alert variant="info" className="text-center">
            <h5>Ongoing Schemes</h5>
          </Alert>
          <div className="d-flex justify-content-center flex-wrap mtg-scheme-card">
            {ongoingSchemes.map((c) => (
              <React.Fragment key={c.deck_card_id}>
                <Scheme card={c} displayActions={true}>
                  <AbandonButton card={c} onClick={abandonScheme} />
                </Scheme>
              </React.Fragment>
            ))}
          </div>
        </>
      );
    }
  };

  const abandonScheme = (card) => {
    if (currentCard?.deck_card_id === card.deck_card_id) {
      console.log("Abandon Current Scheme", card);
      game.clearCurrentCard();
      setAbandonedOnGoing(true);
    } else {
      console.log("Abandon Scheme", card);
      const newOngoing = ongoingSchemes.filter(
        (s) => s.deck_card_id !== card.deck_card_id
      );
      game.setAdditionalCards(newOngoing);
    }
  };

  const selectDeck = (name, cards) => {
    console.log(`Selected ${name}`, cards);

    const newCards = name === "All" ? cards : [];
    cards.forEach((c) => {
      for (let i = 0; i < c.count; i++) {
        newCards.push(c);
      }
    });
    deck.initDeck(newCards, true);
  };

  return (
    <Container className="archenemy" fluid>
      <ArchenemyHelmet schemes={schemes} />
      {loading ? (
        <Loading className="text-muted" />
      ) : deckSelection ? (
        <DeckSelect
          schemes={schemes}
          onSelectDeck={(name, cards) => selectDeck(name, cards)}
        />
      ) : (
        renderGamePlay()
      )}
      <DevTools>
        <Button onClick={undo} variant="warning">
          Undo
        </Button>
        <Deck CardType={Scheme} />
      </DevTools>
    </Container>
  );
};
