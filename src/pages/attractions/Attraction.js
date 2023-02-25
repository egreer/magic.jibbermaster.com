import concat from "lodash/concat";
import get from "lodash/get";
import set from "lodash/set";
import pluralize from "pluralize";
import React, { useCallback, useRef, useState } from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Dialog from "react-bootstrap-dialog";
import { Helmet } from "react-helmet-async";
import uuidv4 from "uuid/v4";
import { CardTypeListModal } from "../../components/CardTypeListModal";
import { Confirm } from "../../components/Confirm";
import { LoyaltyButtonGroup } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { DeleteIcon } from "../../components/magic/Icons";
import { AttractionDie } from "../../components/magic/planar-die/AttractionDie";
import { RandomCardModal } from "../../components/RandomCardModal";
import { useLocalState } from "../../hooks/useLocalState";
import attractionBack from "../../images/attraction-back.jpg";
import { ATTRACTION_PROP } from "../../util/additionalProps";
import { filterAPI, getAllAttractionsCards, internet } from "../../util/api";

const DEFAULT_PLAYER_COUNT = 5;

export const Attractions = () => {
  const [playerCount, setPlayerCount] = useLocalState(
    "attraction-playerCount",
    DEFAULT_PLAYER_COUNT
  );
  const [attractions, setAttractions] = useLocalState(
    "attraction-attractions",
    {}
  );
  const [randomTokenModalOpen, setRandomTokenModalOpen] = useState(false);
  const [selectAttractionModalOpen, setSelectAttractionModalOpen] =
    useState(false);
  const [additionalCards, setAdditionalCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [labels, setLabels] = useLocalState("attraction-labels", {});

  const dialog = useRef(null);

  const setLabel = useCallback(
    (number) => {
      console.log("Setting label", number);
      dialog.current.show({
        title: "Who is this?",
        bsSize: "sm",
        actions: [
          Dialog.CancelAction(),
          Dialog.OKAction((a) => {
            console.log(`Setting label ${a.value}`);
            labels[number] = a.value;
            setLabels({ ...labels });
          }),
        ],
        prompt: Dialog.TextPrompt({ initialValue: labels[number] || number }),
      });
    },
    [dialog, labels, setLabels]
  );

  const _randomTokenModalOpen = (player) => {
    const getToken = async () => {
      let response = await internet.get(ATTRACTION_PROP.url);
      let tokenCard = filterAPI(response.data);
      tokenCard.deck_card_id = uuidv4();
      console.log("Random Token", tokenCard);

      setAdditionalCards([tokenCard]);
      setRandomTokenModalOpen(true);
    };
    getToken();
  };

  const _randomTokenModalClose = useCallback(() => {
    const newAttractions = { ...attractions };
    set(
      newAttractions,
      `player${currentPlayer}`,
      concat(get(newAttractions, `player${currentPlayer}`, []), additionalCards)
    );
    setAttractions(newAttractions);

    setAdditionalCards([]);
    setRandomTokenModalOpen(false);
  }, [
    attractions,
    setAttractions,
    additionalCards,
    setAdditionalCards,
    setRandomTokenModalOpen,
    currentPlayer,
  ]);

  const _selectAttractionModalOpen = () => {
    setSelectAttractionModalOpen(true);
  };

  const _hideSelectAttraction = () => {
    setSelectAttractionModalOpen(false);
  };

  const _selectAttraction = useCallback(
    ({ card }) => {
      const newAttractions = { ...attractions };
      set(
        newAttractions,
        `player${currentPlayer}`,
        concat(get(newAttractions, `player${currentPlayer}`, []), [
          { deck_card_id: uuidv4(), ...card },
        ])
      );
      setAttractions(newAttractions);

      _hideSelectAttraction();
    },
    [currentPlayer, setAttractions, attractions]
  );

  const incrementPlayerCount = useCallback(() => {
    const newPlayerCount = playerCount + 1;
    setPlayerCount(newPlayerCount);
  }, [playerCount, setPlayerCount]);

  const decrementPlayerCount = useCallback(() => {
    const newPlayerCount = Math.max(playerCount - 1, 1);
    setAttractions((a) => {
      const newAttractions = { ...a };
      delete newAttractions[`player${newPlayerCount}`];
      return newAttractions;
    });

    setCurrentPlayer((c) => Math.min(c, newPlayerCount - 1));
    setPlayerCount(newPlayerCount);
  }, [setCurrentPlayer, playerCount, setPlayerCount, setAttractions]);

  const closeAttraction = ({ card, player }) => {
    const newAttractions = { ...attractions };
    const playerAttractions = get(newAttractions, `player${player}`, []);
    const filteredAttraction = playerAttractions.filter(
      (c) => c.deck_card_id !== card.deck_card_id
    );
    set(newAttractions, `player${player}`, filteredAttraction);
    setAttractions(newAttractions);
  };

  const reset = async () => {
    setAttractions({});
    setLabels({});
    setPlayerCount(DEFAULT_PLAYER_COUNT);
  };

  const carouselSelect = (selectedIndex) => {
    setCurrentPlayer(selectedIndex);
  };

  return (
    <div className="attractions">
      <Helmet title="Attractions" />
      <Row className="my-5 text-center">
        <Col>
          <h1>{playerCount} Players</h1>
          <LoyaltyButtonGroup
            upProps={{
              onClick: incrementPlayerCount,
            }}
            downProps={{
              disabled: playerCount <= 1,
              onClick: decrementPlayerCount,
            }}
          />
        </Col>
      </Row>
      <Row className="my-3"></Row>
      <Carousel
        activeIndex={currentPlayer}
        onSelect={carouselSelect}
        interval={null}
        touch={false}
      >
        {[...Array(playerCount)].map((_v, player) => {
          const playerLabel = player + 1;
          const playerAttractions = get(attractions, `player${player}`);

          return (
            <Carousel.Item
              key={player}
              className="my-4"
              style={{ minHeight: "1vh" }}
            >
              <h2 className="text-center mb-5" onClick={() => setLabel(player)}>
                {labels[player] || `Player ${playerLabel}`}
                <sup>
                  <i className="fa fa-edit ml-2 text-secondary fa-xs"></i>
                </sup>
              </h2>
              <Container>
                <Row className="my-3 mx-5">
                  <Col sm={6} className="mb-3 mb-sm-2">
                    <Button
                      onClick={() => _randomTokenModalOpen(player)}
                      block
                      variant="primary"
                    >
                      {ATTRACTION_PROP.action} Random {ATTRACTION_PROP.type}
                    </Button>
                  </Col>
                  <Col sm={6} className="mb-3 mb-sm-2">
                    <Button
                      onClick={() => _selectAttractionModalOpen(player)}
                      block
                      variant="info"
                      className="h-100"
                    >
                      {ATTRACTION_PROP.action} Select {ATTRACTION_PROP.type}
                    </Button>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col sm={12}>
                    <h3 className="text-center sticky-top bg-dark">{`${
                      ATTRACTION_PROP.action
                    } ${pluralize(ATTRACTION_PROP.type)}`}</h3>
                  </Col>
                  {playerAttractions?.map((card) => (
                    <Col sm={6} key={card.deck_card_id} className="my-3">
                      <React.Fragment>
                        <MtgCard card={card} displayChildrenBelow={false}>
                          <Button
                            onClick={() => closeAttraction({ card, player })}
                            variant="danger"
                            size="lg"
                            className="btn-translucent mb-2"
                          >
                            <DeleteIcon />
                          </Button>
                        </MtgCard>
                      </React.Fragment>
                    </Col>
                  ))}
                  {playerAttractions?.length ? (
                    ""
                  ) : (
                    <Col className="d-flex justify-content-center">
                      <p>None</p>
                      <Image
                        fluid
                        src={attractionBack}
                        alt="Attraction Back"
                        className="mx-5 mtg-card"
                      ></Image>
                    </Col>
                  )}
                </Row>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Confirm
        onConfirm={reset}
        headerText={`Reset ${pluralize(ATTRACTION_PROP.type)}?`}
        triggerText="Reset"
        confirmText="Reset"
        confirmVariant="danger"
        triggerButtonParams={{
          variant: "danger",
          block: true,
          className: "my-3",
        }}
      />
      <RandomCardModal
        open={randomTokenModalOpen}
        additionalCards={additionalCards}
        onHide={_randomTokenModalClose}
        close={_randomTokenModalClose}
        randomTokenProps={ATTRACTION_PROP}
        closeText={ATTRACTION_PROP.text}
      />
      <CardTypeListModal
        open={selectAttractionModalOpen}
        onHide={_hideSelectAttraction}
        onSelect={_selectAttraction}
        randomTokenProps={ATTRACTION_PROP}
        fetchCards={getAllAttractionsCards}
      />
      <Dialog
        ref={(component) => {
          dialog.current = component;
        }}
      />

      <div className="position-fixed" style={{ bottom: "5px", right: "5px" }}>
        <AttractionDie rollDone={(r) => console.log(`Rolled: ${r}`)} />
      </div>
    </div>
  );
};
