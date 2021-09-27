import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import { ActionButton } from "../../components/game/ActionButton";
import { Deck } from "../../components/game/Deck";
import { History } from "../../components/game/History";
import { Loading } from "../../components/Loading";
import { DoubleFaceButton } from "../../components/magic/Buttons";
// import { PlanarDie } from "../../components/magic/planar-die/PlanarDie";
import { MtgCard } from "../../components/magic/Card";
import { useLocalState } from "../../hooks/useLocalState";
import { DeckProvider, useDeckContext } from "../../mtg/DeckContext";
import { useGameContext } from "../../mtg/GameContext";
import { ChaosButton } from "../planechase/ChaosButton";
import { CurrentDie } from "./Die";
import { HikeHelmet } from "./Helmet";
import { Rules } from "./Rules";
import { CHAOS, CUSTOM_CHAOS } from "./data/chaos";
import { CUSTOM_PLANES, PLANES } from "./data/planes";
import { getOrCreateCurrentDeck, drawCard } from "../../mtg/deck";
import { hasCustomProperty } from "../../mtg/card";
import { filterAPI, internet } from "../../util/api";
import { RandomTokenModal } from "./RandomTokenModal";

const PRE_CHAOS = "hike-chaos";

export const Hike = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [chaosCards, setChaosCards] = useState([]);
  const [currentChaosCard, setCurrentChaosCard] = useLocalState(
    "hikemode-chaos-current",
    null
  );
  // const [showPlanarDie, setShowPlanarDie] = useLocalState("planar-die", true);
  const [showAllEffect, setShowAllEffect] = useLocalState(
    "hike-all-effects",
    false
  );
  const [showAllCustom, setShowAllCustom] = useLocalState(
    "hike-all-custom",
    false
  );
  const [showRules, setShowRules] = useLocalState("hike-show-rules", true);
  const [randomTokenModalOpen, setRandomTokenModalOpen] = useState(false);
  const [randomTokenProps, setRandomTokenProps] = useState(null);
  // TODOs:
  // mobile testing
  // Hike mode in SYB selector
  // Reset planes / Chaos on empty
  // Hike Die
  // Coin Flipper link

  const game = useGameContext();
  const { currentCard } = game;

  const deck = useDeckContext();
  const history = deck.history;

  const fetchCards = useCallback(() => {
    const planes = [...PLANES];
    const chaos = [...CHAOS];
    setCards(planes);
    setChaosCards(chaos);
    getOrCreateCurrentDeck(PRE_CHAOS, chaos);
    setLoading(false);
  }, [setCards, setLoading]);

  useEffect(() => {
    if (cards && cards.length <= 0) {
      fetchCards();
    }
  }, [cards, fetchCards]);

  useEffect(() => {
    if (cards && cards.length > 0 && !deck.isInit) {
      deck.initDeck(cards, true);
    }
  }, [cards, deck]);

  const planeswalk = () => {
    const newCard = deck.drawCard();
    game.setCurrentCard(newCard ?? null);
  };

  const chaosWalk = () => {
    const newCard = drawCard(PRE_CHAOS);
    setCurrentChaosCard(newCard ?? null);
  };

  const planesAndChaosWalk = () => {
    planeswalk();
    chaosWalk();
  };

  const triggerChaos = c => {
    console.log("Chaos Triggered");
    const randomTokenProp = hasCustomProperty(
      "random-token",
      c || currentChaosCard
    );
    if (!!randomTokenProp) {
      console.log("fetching random token");
      const getToken = async () => {
        let response = await internet.get(randomTokenProp.url);
        let tokenCard = filterAPI(response.data);
        console.log("Random Token", tokenCard);

        game.setAdditionalCards([tokenCard]);
        setRandomTokenProps(randomTokenProp);
        setRandomTokenModalOpen(true);
      };
      getToken();
    }
  };

  const _randomTokenModalClose = () => {
    game.clearAdditionalCards();
    setRandomTokenProps(null);
    setRandomTokenModalOpen(false);
  };

  const reset = () => {
    console.log("Resetting");
    setLoading(true);
    setCurrentChaosCard(null);
    fetchCards();
    deck.reInit();
    game.reset();
    getOrCreateCurrentDeck(PRE_CHAOS, [...CHAOS], true);
    setLoading(false);
  };

  const undo = () => {
    console.log("🚀 TODO: ~ file: index.js ~ line 23 ~ undo ~ undo");
  };

  // TODO: Chaos Card
  return (
    <div className="hikemode">
      <HikeHelmet cards={cards.concat(chaosCards)} />
      <Row className="my-4 text-center">
        <Col>
          <h1>Hike Mode</h1>
        </Col>
      </Row>
      <ActionButton
        text="Hike Hike"
        onClick={planesAndChaosWalk}
        disabled={loading}
        className="btn-translucent"
        icon={<i className="ms ms-planeswalker ms-2x mx-2" />}
      >
        <Button
          onClick={planeswalk}
          className="btn-translucent my-3"
          variant="info"
          disabled={loading}
          block
        >
          <i className="ss ss-fw ss-2x ss-fut mx-2" />
          <span className="mx-2 d-none d-md-inline">Planes Hike</span>
        </Button>
        <Button
          onClick={chaosWalk}
          className="btn-translucent my-3"
          variant="warning"
          disabled={loading}
          block
        >
          <i className="ms ms-fw ms-2x ms-phenomenon mx-2" />
          <span className="mx-2 d-none d-md-inline">Chaos Hike</span>
        </Button>
      </ActionButton>

      <Row className="mb-4 text-center">
        {loading ? (
          <Loading className="text-muted" />
        ) : currentCard ? (
          <>
            <div className="col-6">
              <i className="ms ms-planeswalker ms-4x ms-mechanic mb-3" />
              <MtgCard card={currentCard} displayActions="true">
                <ChaosButton card={currentCard} onClick={triggerChaos} />
              </MtgCard>
            </div>
            <div className="col-6">
              <i className="ms ms-chaos ms-4x ms-mechanic mb-3" />
              <MtgCard
                card={currentChaosCard}
                displayActions="true"
                altBack={true}
              >
                <ChaosButton card={currentChaosCard} onClick={triggerChaos} />
              </MtgCard>
            </div>
          </>
        ) : (
          <>
            <Col sm={6}>
              <MtgCard />
            </Col>
            <Col sm={6}>
              <MtgCard altBack={true} />
            </Col>
          </>
        )}
      </Row>

      <CurrentDie showAllEffect={showAllEffect} />

      {showRules && <Rules />}
      {showAllCustom && (
        <Row className="mb-4 text-center">
          {[...CUSTOM_PLANES, ...CUSTOM_CHAOS].map((c, i) => {
            return (
              <div className="col-6 mb-2" key={i}>
                <MtgCard card={c} displayActions="true">
                  <ChaosButton card={c} onClick={() => triggerChaos(c)} />
                </MtgCard>
              </div>
            );
          })}
        </Row>
      )}

      <RandomTokenModal
        open={randomTokenModalOpen}
        additionalCards={game.additionalCards}
        onHide={_randomTokenModalClose}
        chaosClick={c => triggerChaos(c)}
        close={_randomTokenModalClose}
        randomTokenProps={randomTokenProps}
      />

      <History history={history} CardType={MtgCard} />
      <p className="text-center my-3 noselect">
        There are {deck.deck ? deck.deck.length : 0} cards remaining.
      </p>
      <Confirm
        onConfirm={reset}
        headerText="Reset Cards?"
        triggerText="Reset"
        confirmText="Reset"
        confirmVariant="danger"
        triggerButtonParams={{ variant: "danger", block: true }}
      />
      <DevTools>
        <Button onClick={undo} variant="warning" block>
          Undo
        </Button>
        <Deck CardType={MtgCard} name="Plane" />
        <DeckProvider
          prefix={PRE_CHAOS}
          key={currentChaosCard?.id ?? currentChaosCard?.name}
        >
          <Deck CardType={MtgCard} name="Chaos" />
        </DeckProvider>
        {/* <DoubleFaceButton
          text="Planar Die"
          onClick={() => setShowPlanarDie(!showPlanarDie)}
          enabled={showPlanarDie}
        /> */}
        <DoubleFaceButton
          text="All Effects"
          onClick={() => setShowAllEffect(!showAllEffect)}
          enabled={showAllEffect}
        />
        <DoubleFaceButton
          text="All Custom"
          onClick={() => setShowAllCustom(!showAllCustom)}
          enabled={showAllCustom}
        />
        <DoubleFaceButton
          text="Show Rules"
          onClick={() => setShowRules(!showRules)}
          enabled={showRules}
        />
      </DevTools>
      {/* TODO: Swap Planar Die */}
      {/* {showPlanarDie && (
        <div className="position-fixed" style={{ bottom: "5px", right: "5px" }}>
          <PlanarDie rollDone={face => console.log(`Rolled: ${face}`)} />
        </div>
      )} */}
    </div>
  );
};
