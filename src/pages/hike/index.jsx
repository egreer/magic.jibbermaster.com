import pluralize from "pluralize";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import { Loading } from "../../components/Loading";
import { PageContainer } from "../../components/PageContainer";
import { RandomCardModal } from "../../components/RandomCardModal";
import { Deck } from "../../components/game/Deck";
import { History } from "../../components/game/History";
import { DoubleFaceButton } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { useLocalState } from "../../hooks/useLocalState";
import { DeckProvider, useDeckContext } from "../../mtg/DeckContext";
import { useGameContext } from "../../mtg/GameContext";
import { ARENA_BACK, hasCustomProperty } from "../../mtg/card";
import {
  addCardsToBottom,
  addCardsToTop,
  drawCard,
  getOrCreateCurrentDeck,
  removeCards,
  revealCards,
} from "../../mtg/deck";
import { addAdditionalProperties } from "../../util/additionalProps";
import {
  filterAPI,
  getAllHikeModeChaosCards,
  getAllHikeModePlaneCards,
  internet,
} from "../../util/api";
import { shuffleArray } from "../../util/shuffleArray";
import { ChaosButton } from "../planechase/ChaosButton";
import { CurrentDie } from "./Die";
import { HikeHelmet } from "./Helmet";
import { PickHikePlaneModal } from "./PickHikePlaneModal";
import { Rules } from "./Rules";
import { CUSTOM_CHAOS } from "./data/chaos";
import { CUSTOM_PLANES } from "./data/planes";

const PRE_CHAOS = "hike-chaos";

const customPlanes = CUSTOM_PLANES.map((c) => addAdditionalProperties(c));
const customChaos = CUSTOM_CHAOS.map((c) => addAdditionalProperties(c));

export const Hike = () => {
  const [loading, setLoading] = useState(false);
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
  const [pickPlaneModalOpen, setPickPlaneModalOpen] = useState(false);

  // TODOs:
  // Hike Die
  // Coin Flipper link
  const die = useRef();
  const game = useGameContext();
  const { currentCard, scryCards, additionalCards } = game;

  const deck = useDeckContext();
  const history = deck.history;

  const fetchCards = useCallback(async () => {
    setLoading(true);
    try {
      const hikePLanes = getAllHikeModePlaneCards();
      const hikeChaos = getAllHikeModeChaosCards();

      const planes = [...customPlanes, ...(await hikePLanes)];
      const chaos = [...customChaos, ...(await hikeChaos)];
      setCards(planes);
      setChaosCards(chaos);
      getOrCreateCurrentDeck(PRE_CHAOS, chaos);
      setLoading(false);
    } catch (e) {
      console.log("Hike Fetch Card Load Error", e);
    } finally {
      setLoading(false);
    }
  }, []);

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

  const planeshift = useCallback(
    ({ card } = { card: null }) => {
      const newCard = card ?? deck.drawCard() ?? null;
      game.setCurrentCard(newCard);
    },
    [deck, game]
  );

  const chaosshift = useCallback(
    ({ card } = { card: null }) => {
      const newCard = card ?? drawCard(PRE_CHAOS) ?? null;
      setCurrentChaosCard(newCard);
    },
    [setCurrentChaosCard]
  );

  const planeswalk = useCallback(
    ({ planeCard, chaosCard } = { planeCard: null, chaosCard: null }) => {
      planeshift({ card: planeCard });
      chaosshift({ card: chaosCard });
    },
    [planeshift, chaosshift]
  );

  const triggerChaos = (c) => {
    console.log("Chaos Triggered");
    const randomTokenProp = hasCustomProperty(
      "random-token",
      c || currentChaosCard
    );
    if (randomTokenProp) {
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

  const scryAndPlaneswalk = () => {
    const newScryCards = deck.revealCards(2, false);
    const newChaosScryCards = revealCards(PRE_CHAOS, 2, false);
    deck.removeCards(newScryCards);
    removeCards(PRE_CHAOS, newChaosScryCards);
    game.setScryCards(newScryCards);
    game.setAdditionalCards(newChaosScryCards);
    setPickPlaneModalOpen(true);
  };

  const _pickPlaneModalClose = () => {
    deck.addCardsToTop(scryCards);
    addCardsToTop(PRE_CHAOS, additionalCards);
    game.clearScryCards();
    setPickPlaneModalOpen(false);
  };

  const _pickPlane = (planeCard, chaosCard) => {
    putToBottomExcept(scryCards, planeCard);
    putToBottomExcept(additionalCards, chaosCard, PRE_CHAOS);
    game.clearScryCards();
    game.clearAdditionalCards();
    setPickPlaneModalOpen(false);
    setTimeout(() => planeswalk({ planeCard, chaosCard }));
  };

  const putToBottomExcept = (cards, card, prefix = null) => {
    const restCards = cards.filter((c) => c.deck_card_id !== card.deck_card_id);
    const shuffledCards = shuffleArray(restCards.slice());
    prefix
      ? addCardsToBottom(prefix, [...shuffledCards])
      : deck.addCardsToBottom([...shuffledCards]);
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
    <PageContainer className="hikemode">
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
            title="Planeswalk - Changes current plane and chaos"
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
            title="Change Plane - Changes the current plane"
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
            title="Chaos Hike - Changes the current Chaos"
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
          <h3>All Custom</h3>
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

      <PickHikePlaneModal
        pickPlaneCards={scryCards}
        pickChaosCards={additionalCards}
        open={pickPlaneModalOpen}
        onHide={_pickPlaneModalClose}
        onSelect={_pickPlane}
      />

      <Button
        className="w-100"
        onClick={scryAndPlaneswalk}
        disabled={loading}
        icon={<i className="ms ms-planeswalker ms-2x mx-2" />}
      >
        <i className="ms ms-planeswalker mx-2" />
        <span>
          Scry Planeswalk - <em>Susan Foreman</em>
        </span>
        <i className="ss ss-who mx-2 " />
      </Button>

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
    </PageContainer>
  );
};
