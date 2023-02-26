import pluralize from "pluralize";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import { Deck } from "../../components/game/Deck";
import { History } from "../../components/game/History";
import { Loading } from "../../components/Loading";
import { DoubleFaceButton } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { RandomCardModal } from "../../components/RandomCardModal";
import { useLocalState } from "../../hooks/useLocalState";
import { ARENA_BACK, hasCustomProperty } from "../../mtg/card";
import { drawCard, getOrCreateCurrentDeck } from "../../mtg/deck";
import { DeckProvider, useDeckContext } from "../../mtg/DeckContext";
import { useGameContext } from "../../mtg/GameContext";
import { addAdditionalProperties } from "../../util/additionalProps";
import {
  filterAPI,
  getAllHikeModeChaosCards,
  getAllHikeModePlaneCards,
  internet,
} from "../../util/api";
import { ChaosButton } from "../planechase/ChaosButton";
import { CUSTOM_CHAOS } from "./data/chaos";
import { CUSTOM_PLANES } from "./data/planes";
import { CurrentDie } from "./Die";
import { HikeHelmet } from "./Helmet";
import { Rules } from "./Rules";

const PRE_CHAOS = "hike-chaos";

const customPlanes = CUSTOM_PLANES.map((c) => addAdditionalProperties(c));
const customChaos = CUSTOM_CHAOS.map((c) => addAdditionalProperties(c));

export const Hike = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [chaosCards, setChaosCards] = useState([]);
  const [currentChaosCard, setCurrentChaosCard] = useLocalState(
    "hikemode-chaos-current",
    null
  );
  const [showAllEffect, setShowAllEffect] = useLocalState(
    "hike-all-effects",
    false
  );
  const [showAllCustom, setShowAllCustom] = useLocalState(
    "hike-all-custom",
    false
  );
  const [showRules, setShowRules] = useLocalState("hike-show-rules", false);
  const [randomTokenModalOpen, setRandomTokenModalOpen] = useState(false);
  const [randomTokenProps, setRandomTokenProps] = useState(null);
  // TODOs:
  // mobile testing
  // Reset planes / Chaos on empty
  // Hike Die
  // Coin Flipper link
  const die = useRef();
  const game = useGameContext();
  const { currentCard } = game;

  const deck = useDeckContext();
  const history = deck.history;

  const fetchCards = useCallback(async () => {
    const hikePLanes = getAllHikeModePlaneCards();
    const hikeChaos = getAllHikeModeChaosCards();

    const planes = [...customPlanes, ...(await hikePLanes)];
    const chaos = [...customChaos, ...(await hikeChaos)];
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

  const planeshift = useCallback(() => {
    const newCard = deck.drawCard();
    game.setCurrentCard(newCard ?? null);
  }, [deck, game]);

  const chaosshift = useCallback(() => {
    const newCard = drawCard(PRE_CHAOS);
    setCurrentChaosCard(newCard ?? null);
  }, [setCurrentChaosCard]);

  const planeswalk = useCallback(() => {
    planeshift();
    chaosshift();
  }, [planeshift, chaosshift]);

  const triggerChaos = (c) => {
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

  const reset = async () => {
    console.log("Resetting");
    setLoading(true);
    setCurrentChaosCard(null);
    fetchCards();
    deck.reInit();
    game.reset();
    die?.current?.regenDie();
    const hikeChaos = await getAllHikeModeChaosCards();
    getOrCreateCurrentDeck(PRE_CHAOS, [...customChaos, ...hikeChaos], true);
    setLoading(false);
  };

  const undo = () => {
    console.log("🚀 TODO: ~ file: index.js ~ line 23 ~ undo ~ undo");
  };

  const onDieClick = useCallback(
    ({ tags = [] }) => {
      if (tags?.includes("planeswalk")) {
        planeswalk();
      }
      if (tags?.includes("planeshift")) {
        planeshift();
      }
      if (tags?.includes("chaosshift")) {
        chaosshift();
      }
    },
    [planeswalk, planeshift, chaosshift]
  );

  // TODO: Chaos Card
  return (
    <Container className="hikemode" fluid>
      <HikeHelmet cards={cards.concat(chaosCards)} />
      <Row className="my-4 text-center">
        <Col>
          <h1 className="mtg-text-mythic mtg-grad">Hike Mode</h1>
        </Col>
      </Row>

      <CurrentDie
        ref={die}
        showAllEffect={showAllEffect}
        onClick={onDieClick}
      />

      <Row>
        <Col>
          <Button
            onClick={planeswalk}
            disabled={loading}
            className="btn-translucent my-3 w-100"
          >
            <i className="ms ms-planeswalker ms-2x mx-2" />
            <span className="mx-2 d-none d-sm-inline">Planeswalk</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Button
            onClick={planeshift}
            className="btn-translucent my-3  w-100"
            variant="info"
            disabled={loading}
          >
            <i className="ss ss-fw ss-2x ss-fut mx-2" />
            <span className="mx-2 d-none d-sm-inline">Planes Hike</span>
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            onClick={chaosshift}
            className="btn-translucent my-3  w-100"
            variant="warning"
            disabled={loading}
          >
            <i className="ms ms-fw ms-2x ms-phenomenon mx-2" />
            <span className="mx-2 d-none d-sm-inline">Chaos Hike</span>
          </Button>
        </Col>
      </Row>
      <Row className="mb-4 text-center">
        {loading ? (
          <Loading className="text-muted" />
        ) : currentCard ? (
          <>
            <Col xs={6}>
              <i className="ms ms-planeswalker ms-4x ms-mechanic mb-3" />
              <MtgCard
                card={currentCard}
                displayActions={true}
                displayTextWhenRotated={true}
                displayHikeErrata={true}
              >
                <ChaosButton card={currentCard} onClick={triggerChaos} />
              </MtgCard>
            </Col>
            <Col xs={6}>
              <i className="ms ms-chaos ms-4x ms-mechanic mb-3" />
              <MtgCard
                card={currentChaosCard}
                displayActions={true}
                back={ARENA_BACK}
                displayHikeErrata={true}
              >
                <ChaosButton card={currentChaosCard} onClick={triggerChaos} />
              </MtgCard>
            </Col>
          </>
        ) : (
          <>
            <Col xs={6}>
              <MtgCard />
            </Col>
            <Col xs={6}>
              <MtgCard back={ARENA_BACK} />
            </Col>
          </>
        )}
      </Row>
      <div id="end-actions" />

      {showAllCustom && (
        <Row className="mb-4 text-center">
          {[...customPlanes, ...customChaos].map((c, i) => {
            return (
              <div className="col-6 mb-2" key={i}>
                <MtgCard
                  card={c}
                  displayActions={true}
                  displayHikeErrata={true}
                >
                  <ChaosButton card={c} onClick={() => triggerChaos(c)} />
                </MtgCard>
              </div>
            );
          })}
        </Row>
      )}

      <RandomCardModal
        open={randomTokenModalOpen}
        additionalCards={game.additionalCards}
        onHide={_randomTokenModalClose}
        close={_randomTokenModalClose}
        randomTokenProps={randomTokenProps}
      />

      <History history={history} CardType={MtgCard} />
      <p className="text-center my-3 noselect">
        There are {pluralize("card", deck?.deck?.length ?? 0, true)} remaining.
      </p>

      <DoubleFaceButton
        text="Show Rules"
        onClick={() => setShowRules(!showRules)}
        enabled={showRules}
      />
      {showRules && <Rules />}

      <Confirm
        onConfirm={reset}
        headerText="Reset All The Things?"
        triggerText="Reset"
        confirmText="Reset"
        confirmVariant="danger"
        triggerButtonParams={{ variant: "danger", className: "w-100 my-4" }}
      />

      <DevTools>
        <Button onClick={undo} variant="warning">
          Undo
        </Button>
        <Deck CardType={MtgCard} name="Plane" />
        <DeckProvider
          prefix={PRE_CHAOS}
          key={currentChaosCard?.id ?? currentChaosCard?.name}
        >
          <Deck CardType={MtgCard} name="Chaos" />
        </DeckProvider>
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
      </DevTools>
    </Container>
  );
};
