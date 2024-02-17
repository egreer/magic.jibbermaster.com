import pluralize from "pluralize";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Container, Fade } from "react-bootstrap";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import { ActionButton } from "../../components/game/ActionButton";
import { Deck } from "../../components/game/Deck";
import { History } from "../../components/game/History";
import { Loading } from "../../components/Loading";
import { DoubleFaceButton } from "../../components/magic/Buttons";
import { DeleteIcon } from "../../components/magic/Icons";
import { PlanarDie } from "../../components/magic/planar-die/PlanarDie";
import { Plane } from "../../components/magic/Plane";
import { UpdatedBanner } from "../../components/magic/UpdatedBanner";
import { useLocalState } from "../../hooks/useLocalState";
import { hasCustomProperty } from "../../mtg/card.js";
import { useDeckContext } from "../../mtg/DeckContext";
import { useGameContext } from "../../mtg/GameContext";
import { getAllPlanechaseCards } from "../../util/api.js";
import { shuffleArray } from "../../util/shuffleArray";
import { ChaosButton } from "./ChaosButton";
import { PlanechaseHelmet } from "./Helmet";
import { MultiChaosModal } from "./MultiChaosModal";
import { ScryModal } from "./ScryModal";

export const Planechase = () => {
  const [loading, setLoading] = useState(true);
  const [planes, setPlanes] = useState([]);
  const [tripleChaosModalOpen, setTripleChaosModalOpen] = useState(false);
  const [scryModalOpen, setScryModalOpen] = useState(false);
  const [showPlanarDie, setShowPlanarDie] = useLocalState("planar-die", true);

  const game = useGameContext();
  const {
    currentCard,
    additionalCards,
    revealedCards,
    ongoingCards,
    scryCards,
  } = game;

  const deck = useDeckContext();
  const history = deck.history;

  const planeswalkDisabled = !!hasCustomProperty("top-5", currentCard);

  const fetchPlanes = useCallback(async () => {
    const newPlanes = await getAllPlanechaseCards();
    setPlanes([...newPlanes]);
    setLoading(false);
  }, [setPlanes, setLoading]);

  useEffect(() => {
    if (planes && planes.length <= 0) {
      fetchPlanes();
    }
  }, [planes, fetchPlanes]);

  useEffect(() => {
    if (planes?.length > 0 && !deck.isInit) {
      deck.initDeck(planes, true);
    }
  }, [planes, deck]);

  useEffect(() => {
    const open =
      scryCards.length > 0 && !!hasCustomProperty("scry-1", currentCard);
    if (open) {
      setScryModalOpen(open);
    }
  }, [setScryModalOpen, scryCards, currentCard]);

  useEffect(() => {
    const open =
      revealedCards.length > 0 &&
      !!hasCustomProperty("multi-chaos", currentCard);
    if (open) {
      setTripleChaosModalOpen(open);
    }
  }, [setTripleChaosModalOpen, revealedCards, currentCard]);

  const revealPlanes = (count) => {
    const newRevealedCards = deck.revealCards(count, true);
    deck.removeCards(newRevealedCards);
    const revealedPlanes = newRevealedCards.filter(
      (c) => c.type_line.search("Plane") >= 0
    );
    const revealedPhenomenon = newRevealedCards.filter(
      (c) => c.type_line.search("Phenomenon") >= 0
    );
    revealedPlanes.forEach((c) => deck.updateHistory(c));
    deck.addCardsToBottom(revealedPhenomenon);
    return revealedPlanes;
  };

  const planeswalk = ({ card }) => {
    const newCard = card ?? deck.drawCard() ?? null;
    game.setCurrentCard(newCard);
    let newRevealedCards = [];
    let newAdditionalCards = [];
    const multiplePlanesProperty = hasCustomProperty(
      "multiple-planes",
      newCard
    );
    if (multiplePlanesProperty) {
      newAdditionalCards = revealPlanes(multiplePlanesProperty.initial);
    }

    if (hasCustomProperty("top-5", newCard)) {
      newRevealedCards = deck.revealCards(5, true);
      deck.removeCards(newRevealedCards);
    }

    if (hasCustomProperty("ongoing", newCard)) {
      game.setOngoingCards([...ongoingCards, newCard]);
    }

    game.setRevealedCards(newRevealedCards);
    game.setAdditionalCards(newAdditionalCards);
  };

  const reset = async () => {
    setLoading(true);
    fetchPlanes();
    deck.reInit();
    game.reset();
    setLoading(false);
  };

  const undo = async () => {
    const lastCard = deck.undoDraw();
    game.reset();
    if (lastCard) {
      game.setCurrentCard(lastCard);
    }
  };

  const triggerChaos = (card) => {
    console.log("Chaos Triggered", card);
    const multiChaos = hasCustomProperty("multi-chaos", card);
    if (multiChaos) {
      const newRevealedCards = deck.revealCards(multiChaos.number, true);
      deck.removeCards(newRevealedCards);
      const shuffledCards = shuffleArray(newRevealedCards.slice());
      deck.addCardsToBottom(shuffledCards);
      game.setRevealedCards(newRevealedCards);
      setTripleChaosModalOpen(true);
    }

    if (hasCustomProperty("scry-1", card)) {
      if (!scryCards || scryCards.length === 0) {
        const newScryCards = deck.revealCards(1, false);
        deck.removeCards(newScryCards);
        game.setScryCards(newScryCards);
        setScryModalOpen(true);
      }
    }
    const multiplePlanesProperty = hasCustomProperty("multiple-planes", card);
    if (multiplePlanesProperty) {
      const revealedPlanes = revealPlanes(multiplePlanesProperty.revealNumber);
      game.setAdditionalCards([...additionalCards, ...revealedPlanes]);
    }
  };

  const renderMultiplePlanes = () => {
    if (hasCustomProperty("multiple-planes", currentCard)) {
      const revealedPlanes = additionalCards.filter(
        (c) => c.type_line.search("Plane") >= 0
      );
      return (
        revealedPlanes.length > 0 && (
          <div>
            <Alert variant="info" className="text-center mb-0">
              <i className="ms ms-planeswalker mx-2" />
              You Are On {revealedPlanes.length} Planes
              <i className="ms ms-planeswalker mx-2" />
            </Alert>
            {revealedPlanes.map((c) => (
              <React.Fragment key={c.deck_card_id}>
                <Plane card={c} displayActions={true}>
                  <ChaosButton card={c} onClick={triggerChaos} />
                </Plane>
              </React.Fragment>
            ))}
          </div>
        )
      );
    }
  };

  const selectPlane = (card) => {
    const restCards = revealedCards.filter(
      (c) => c.deck_card_id !== card.deck_card_id
    );
    const shuffledCards = shuffleArray(restCards.slice());
    deck.addCardsToBottom([...shuffledCards]);
    game.clearRevealedCards();
    setTimeout(() => planeswalk({ card }));
  };

  const renderFivePlanes = () => {
    if (hasCustomProperty("top-5", currentCard)) {
      console.log("Render 5 - Revealed Cards", revealedCards);
      const revealedPlanes = revealedCards.filter(
        (c) => c.type_line.search("Plane") >= 0
      );
      console.log("Render 5 - Revealed Planes", revealedPlanes);
      return (
        <div>
          <Alert variant="info" className="text-center mb-0">
            <i className="ms ms-planeswalker mx-2" />
            Pick a Plane to Planeswalk To
            <i className="ms ms-planeswalker mx-2" />
          </Alert>
          {revealedPlanes.map((c) => (
            <div key={c.deck_card_id}>
              <Plane card={c}>
                <Button
                  onClick={() => selectPlane(c)}
                  variant="primary"
                  className="btn-translucent"
                  size="lg"
                >
                  <i className="ms ms-planeswalker mx-2" />
                  <span className="mx-2">Planeswalk</span>
                </Button>
              </Plane>
            </div>
          ))}
        </div>
      );
    }
  };

  const abandonPlane = (card) => {
    console.log("Abandon Plane", card);
    const newOngoing = ongoingCards.filter(
      (s) => s.deck_card_id !== card.deck_card_id
    );
    game.setOngoingCards([...newOngoing]);
  };

  const renderOngoingPlanes = () => {
    const ongoing = ongoingCards?.filter(
      (s) => s.deck_card_id !== currentCard.deck_card_id
    );
    if (ongoing && ongoing.length > 0) {
      return (
        <>
          <Alert variant="info" className="text-center">
            <h5>Ongoing Planes</h5>
          </Alert>
          <div className="d-flex justify-content-center flex-wrap mtg-scheme-card">
            {ongoing.map((c) => (
              <div key={c.deck_card_id}>
                <Plane card={c}>
                  <Button
                    onClick={() => abandonPlane(c)}
                    variant="danger"
                    size="lg"
                    className="btn-translucent"
                  >
                    <h2 className="mb-0">
                      <DeleteIcon />
                      <span className="mx-2 d-none d-md-inline">
                        Abandon Plane
                      </span>
                    </h2>
                  </Button>
                </Plane>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  const _tripleChaosModalClose = () => {
    game.clearRevealedCards();
    setTripleChaosModalOpen(false);
  };

  const _scryTop = () => {
    deck.addCardsToTop(scryCards);
    console.log("Scry Top", scryCards);
    game.clearScryCards();
    setScryModalOpen(false);
  };

  const _scryBottom = () => {
    deck.addCardsToBottom(scryCards);
    console.log("Scry Bottom", scryCards);
    game.clearScryCards();
    setScryModalOpen(false);
  };

  return (
    <Container className="planechase" fluid>
      <PlanechaseHelmet planes={planes} />
      <ActionButton
        text="Planeswalk"
        onClick={planeswalk}
        disabled={planeswalkDisabled || loading}
        icon={<i className="ms ms-planeswalker ms-2x mx-2" />}
      />
      {loading ? (
        <Loading className="text-muted" />
      ) : (
        <div className="mb-2">
          {currentCard ? (
            <Fade key={currentCard.deck_card_id} timeout={100}>
              <Plane card={currentCard} displayActions={true}>
                <ChaosButton card={currentCard} onClick={triggerChaos} />
              </Plane>
            </Fade>
          ) : (
            <Plane />
          )}
        </div>
      )}
      {renderMultiplePlanes()}
      {renderFivePlanes()}
      {renderOngoingPlanes()}
      <MultiChaosModal
        open={tripleChaosModalOpen}
        revealedCards={revealedCards}
        onHide={_tripleChaosModalClose}
        chaosClick={(c) => triggerChaos(c)}
        close={_tripleChaosModalClose}
      />
      <ScryModal
        scryCards={scryCards}
        open={scryModalOpen}
        onScryTop={() => _scryTop()}
        onScryBottom={() => _scryBottom()}
      />
      <History history={history} CardType={Plane} />
      <p className="text-center my-3 noselect">
        There are {pluralize("card", deck?.deck?.length ?? 0, true)} remaining.
      </p>
      <Confirm
        onConfirm={reset}
        headerText="Reset Planes?"
        triggerText="Reset"
        confirmText="Reset"
        confirmVariant="danger"
        triggerButtonParams={{ variant: "danger", className: "w-100" }}
      />
      <DevTools>
        <Button onClick={undo} variant="warning">
          Undo
        </Button>
        <Deck CardType={Plane} />
        <DoubleFaceButton
          text="Planar Die"
          onClick={() => setShowPlanarDie(!showPlanarDie)}
          enabled={showPlanarDie}
        />
      </DevTools>
      {showPlanarDie && !planeswalkDisabled && (
        <div className="position-fixed" style={{ bottom: "5px", right: "5px" }}>
          <PlanarDie rollDone={(face) => console.log(`Rolled: ${face}`)} />
        </div>
      )}
      <UpdatedBanner setName="Dr. Who" symbol="who" rarity="rare" />
    </Container>
  );
};
