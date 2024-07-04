import concat from "lodash/concat";
import get from "lodash/get";
import set from "lodash/set";
import React, { useCallback, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Image,
  Modal,
  ModalBody,
  Row,
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { v4 as uuidv4 } from "uuid";
import { CardTypeListModal } from "../../components/CardTypeListModal";
import { Confirm } from "../../components/Confirm";
import { ConfirmForm } from "../../components/ConfirmForm";
import { RandomCardModal } from "../../components/RandomCardModal";
import { LoyaltyButtonGroup } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { DeleteIcon } from "../../components/magic/Icons";
import { UpdatedBanner } from "../../components/magic/UpdatedBanner";
import { useLocalState } from "../../hooks/useLocalState";
import contraptionBack from "../../images/contraption-back.jpg";
import { ASSEMBLE_PROP } from "../../util/additionalProps";
import { fetchRandomCard, getAllContraptionsCards } from "../../util/api";

const DEFAULT_PLAYER_COUNT = 5;
const MAX_SPROKETS = 3;

export const Contraptions = () => {
  const [playerCount, setPlayerCount] = useLocalState(
    "contraption-playerCount",
    DEFAULT_PLAYER_COUNT
  );
  const [sprokets, setSprokets] = useLocalState("contraption-sprokets", {});
  const [randomTokenModalOpen, setRandomTokenModalOpen] = useState(false);
  const [selectContraptionModalOpen, setSelectContraptionModalOpen] =
    useState(false);
  const [selectSproketModalOpen, setSelectSproketModalOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [labels, setLabels] = useLocalState("contraption-labels", {});
  const [currentCard, setCurrentCard] = useState(null);

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
      const tokenCard = await fetchRandomCard(ASSEMBLE_PROP.url);
      setCurrentCard(tokenCard);
      setRandomTokenModalOpen(true);
    };
    getToken();
  };

  const _randomTokenModalClose = useCallback(() => {
    setRandomTokenModalOpen(false);
    setSelectSproketModalOpen(true);
  }, [setRandomTokenModalOpen, setSelectSproketModalOpen]);

  const _hideRandomTokenModal = () => setRandomTokenModalOpen(false);

  const _selectContraptionModalOpen = () => {
    setSelectContraptionModalOpen(true);
  };

  const _hideSelectContraption = () => {
    setSelectContraptionModalOpen(false);
  };

  const _selectContraption = useCallback(
    ({ card }) => {
      setCurrentCard(card);
      setSelectContraptionModalOpen(false);
      setSelectSproketModalOpen(true);
    },
    [setCurrentCard, setSelectContraptionModalOpen, setSelectSproketModalOpen]
  );

  const selectSproket = useCallback(
    ({ card, sproket }) => {
      const newSprokets = { ...sprokets };
      set(
        newSprokets,
        `player${currentPlayer}.sproket${sproket}`,
        concat(
          get(newSprokets, `player${currentPlayer}.sproket${sproket}`, []),
          [{ deck_card_id: uuidv4(), ...card }]
        )
      );
      setSprokets(newSprokets);
      setSelectSproketModalOpen(false);
      setCurrentCard(null);
    },
    [
      currentPlayer,
      setSprokets,
      sprokets,
      setCurrentCard,
      setSelectSproketModalOpen,
    ]
  );

  const incrementPlayerCount = useCallback(() => {
    const newPlayerCount = playerCount + 1;
    setPlayerCount(newPlayerCount);
  }, [playerCount, setPlayerCount]);

  const decrementPlayerCount = useCallback(() => {
    const newPlayerCount = Math.max(playerCount - 1, 1);
    setSprokets((s) => {
      const newSprokets = { ...s };
      delete newSprokets[`player${newPlayerCount}`];
      return newSprokets;
    });

    setCurrentPlayer((c) => Math.min(c, newPlayerCount - 1));
    setPlayerCount(newPlayerCount);
  }, [setCurrentPlayer, playerCount, setPlayerCount, setSprokets]);

  const unsproket = ({ card, sproket, player }) => {
    const newSprokets = { ...sprokets };
    const playerSproket = get(
      newSprokets,
      `player${player}.sproket${sproket}`,
      []
    );
    const filteredSproket = playerSproket.filter(
      (c) => c.deck_card_id !== card.deck_card_id
    );
    set(newSprokets, `player${player}.sproket${sproket}`, filteredSproket);
    setSprokets(newSprokets);
  };

  const reset = async () => {
    setSprokets({});
    setLabels({});
    setPlayerCount(DEFAULT_PLAYER_COUNT);
  };

  const carouselSelect = (selectedIndex) => {
    setCurrentPlayer(selectedIndex);
  };

  return (
    <Container className="contraptions" fluid>
      <Helmet title="Contraptions" />
      <Row className="my-4 text-center">
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
      <Carousel
        activeIndex={currentPlayer}
        onSelect={carouselSelect}
        interval={null}
        touch={false}
      >
        {[...Array(playerCount)].map((_v, player) => {
          const playerLabel = player + 1;
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
                      onClick={_randomTokenModalOpen}
                      variant="primary"
                      className="fill-100"
                    >
                      Assemble Random Contraption
                    </Button>
                  </Col>
                  <Col sm={6} className="mb-3 mb-sm-2">
                    <Button
                      onClick={_selectContraptionModalOpen}
                      variant="info"
                      className="fill-100"
                    >
                      Assemble Select Contraption
                    </Button>
                  </Col>
                </Row>
              </Container>
              <Row className="my-3">
                <Col md={{ span: 8, offset: 2 }}>
                  <Image
                    fluid
                    src={contraptionBack}
                    alt="Contraption Back"
                    className="px-4"
                  ></Image>
                </Col>
              </Row>
              <Row>
                {[...Array(MAX_SPROKETS)].map((_v, s) => {
                  const sproket = s + 1;
                  const playerSprokets = get(
                    sprokets,
                    `player${currentPlayer}.sproket${sproket}`
                  );
                  return (
                    <Col md={4} key={`${player}-${sproket}`} className="my-3">
                      <h3 className="text-center sticky-top bg-dark">{`Sprocket ${sproket}`}</h3>
                      {playerSprokets?.map((card) => (
                        <React.Fragment key={card.deck_card_id}>
                          <MtgCard card={card} displayChildrenBelow={false}>
                            <Button
                              onClick={() =>
                                unsproket({ card, player, sproket })
                              }
                              variant="danger"
                              size="lg"
                              className="btn-translucent mb-2"
                            >
                              <DeleteIcon />
                            </Button>
                          </MtgCard>
                        </React.Fragment>
                      ))}
                      {playerSprokets?.length ? (
                        ""
                      ) : (
                        <p className="text-center">None</p>
                      )}
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Confirm
        onConfirm={reset}
        headerText="Reset Sprokets?"
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
        additionalCards={[currentCard]}
        onHide={_hideRandomTokenModal}
        close={_randomTokenModalClose}
        randomTokenProps={ASSEMBLE_PROP}
        closeText="Assemble Contraption"
      />
      <CardTypeListModal
        open={selectContraptionModalOpen}
        onHide={_hideSelectContraption}
        onSelect={_selectContraption}
        randomTokenProps={ASSEMBLE_PROP}
        fetchCards={getAllContraptionsCards}
      />
      <Modal
        show={selectSproketModalOpen}
        dialogClassName="bg-secondary"
        backdrop={true}
      >
        <Modal.Header className="justify-content-center text-white noselect">
          <Modal.Title>Which Sproket?</Modal.Title>
        </Modal.Header>
        <ModalBody className="d-flex justify-content-evenly">
          {[...Array(MAX_SPROKETS)].map((v, s) => {
            const sproket = s + 1;
            return (
              <Button
                variant="primary"
                size="lg"
                key={`sproket-${sproket}`}
                onClick={() => selectSproket({ sproket, card: currentCard })}
              >
                <i className="fas fa-fw fa-cog mx-1"></i>
                <span className="mx-1">{sproket}</span>
              </Button>
            );
          })}
        </ModalBody>
      </Modal>

      <UpdatedBanner setName="Unstable" symbol="ust" rarity="uncommon" />

      <ConfirmForm
        open={openConfirm}
        headerText="Who is this?"
        initialValue={confirmInitialValue()}
        onConfirm={confirmPersonLabel}
        onClose={closeConfirmModal}
      ></ConfirmForm>
    </Container>
  );
};
