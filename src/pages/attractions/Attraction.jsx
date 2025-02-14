import concat from "lodash/concat";
import get from "lodash/get";
import set from "lodash/set";
import pluralize from "pluralize";
import React, { useCallback, useState } from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { v4 as uuidv4 } from "uuid";
import { CardTypeListModal } from "../../components/CardTypeListModal";
import { Confirm } from "../../components/Confirm";
import { ConfirmForm } from "../../components/ConfirmForm";
import { PlayerHeader } from "../../components/PlayerHeader";
import { RandomCardModal } from "../../components/RandomCardModal";
import { LoyaltyButtonGroup } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { DeleteIcon } from "../../components/magic/Icons";
import { UpdatedBanner } from "../../components/magic/UpdatedBanner";
import { AttractionDie } from "../../components/magic/planar-die/AttractionDie";
import { useLocalState } from "../../hooks/useLocalState";
import attractionBack from "../../images/attraction-back.jpg";
import { ATTRACTION_PROP } from "../../util/additionalProps";
import { fetchRandomCard, getAllAttractionsCards } from "../../util/api";

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

  const [openConfirm, setOpenConfirm] = useState(false);
  const [confirmPerson, setConfirmPerson] = useState(null);

  const setLabel = useCallback(
    (person) => {
      setConfirmPerson(person);
      setOpenConfirm(true);
    },
    [setConfirmPerson, setOpenConfirm]
  );

  const confirmInitialValue = useCallback(
    () => labels[confirmPerson] || "",
    [labels, confirmPerson]
  );

  const closeConfirmModal = useCallback(() => {
    setOpenConfirm(false);
    setConfirmPerson(null);
  }, [setOpenConfirm, setConfirmPerson]);

  const confirmPersonLabel = useCallback(
    (value) => {
      labels[confirmPerson] = value;
      setLabels({ ...labels });
      closeConfirmModal();
    },
    [labels, confirmPerson, closeConfirmModal, setLabels]
  );

  const _randomTokenModalOpen = () => {
    const getToken = async () => {
      const tokenCard = await fetchRandomCard(ATTRACTION_PROP.url);
      setAdditionalCards([tokenCard]);
      setRandomTokenModalOpen(true);
    };
    getToken();
  };

  const _hideRandomTokenModal = () => setRandomTokenModalOpen(false);

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
    <Container className="attractions" fluid>
      <Helmet title="Attractions" />
      <Row className="my-5 text-center">
        <Col>
          <h1>{playerCount} Players</h1>
          <LoyaltyButtonGroup
            upProps={{
              onClick: incrementPlayerCount,
              title: "Increase Player Count",
            }}
            downProps={{
              disabled: playerCount <= 1,
              onClick: decrementPlayerCount,
              title: "Decrease Player Count",
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
          const playerAttractions = get(attractions, `player${player}`);

          return (
            <Carousel.Item
              key={player}
              className="text-center my-4"
              style={{ minHeight: "1vh" }}
            >
              <PlayerHeader
                setLabel={setLabel}
                player={player}
                labels={labels}
              />
              <Container>
                <Row className="my-3 mx-5">
                  <Col sm={6} className="mb-3 mb-sm-2">
                    <Button
                      onClick={() => _randomTokenModalOpen()}
                      className="fill-100"
                      variant="primary"
                    >
                      {ATTRACTION_PROP.action} Random {ATTRACTION_PROP.type}
                    </Button>
                  </Col>
                  <Col sm={6} className="mb-3 mb-sm-2">
                    <Button
                      onClick={() => _selectAttractionModalOpen(player)}
                      className="fill-100"
                      variant="info"
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
                    <Col className="d-flex flex-column  justify-content-center mx-5">
                      <p className="text-center">None</p>
                      <Image
                        fluid
                        src={attractionBack}
                        alt="Attraction Back"
                        className="mtg-card"
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
          className: "my-3 w-100",
        }}
      />
      <RandomCardModal
        open={randomTokenModalOpen}
        additionalCards={additionalCards}
        onHide={_hideRandomTokenModal}
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

      <ConfirmForm
        open={openConfirm}
        headerText="Who is this?"
        initialValue={confirmInitialValue()}
        onConfirm={confirmPersonLabel}
        onClose={closeConfirmModal}
      ></ConfirmForm>

      <div className="position-fixed" style={{ bottom: "5px", right: "5px" }}>
        <AttractionDie rollDone={(r) => console.log(`Rolled: ${r}`)} />
      </div>
      <UpdatedBanner setName="Unfinity" symbol="unf" rarity="foil" />
    </Container>
  );
};
