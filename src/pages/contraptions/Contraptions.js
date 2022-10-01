import concat from "lodash/concat";
import get from "lodash/get";
import set from "lodash/set";
import React, { useCallback, useRef, useState } from "react";
import { Button, Carousel, Col, Image, Row } from "react-bootstrap";
import Dialog from "react-bootstrap-dialog";
import { Helmet } from "react-helmet-async";
import uuidv4 from "uuid/v4";
import { CardTypeListModal } from "../../components/CardTypeListModal";
import { Confirm } from "../../components/Confirm";
import { LoyaltyButtonGroup } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { DeleteIcon } from "../../components/magic/Icons";
import { RandomCardModal } from "../../components/RandomCardModal";
import { useLocalState } from "../../hooks/useLocalState";
import contraptionBack from "../../images/contraption-back.jpg";
import { ASSEMBLE_PROP } from "../../util/additionalProps";
import { filterAPI, getAllContraptionsCards, internet } from "../../util/api";

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
  const [additionalCards, setAdditionalCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [labels, setLabels] = useLocalState("contraption-labels", {});

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
      let response = await internet.get(ASSEMBLE_PROP.url);
      let tokenCard = filterAPI(response.data);
      tokenCard.deck_card_id = uuidv4();
      console.log("Random Token", tokenCard);

      setAdditionalCards([tokenCard]);
      setRandomTokenModalOpen(true);
    };
    getToken();
  };

  const _randomTokenModalClose = useCallback(() => {
    dialog.current.show({
      title: "Which Sproket?",
      bsSize: "sm",
      actions: [
        Dialog.CancelAction(() => {
          setAdditionalCards([]);
          setRandomTokenModalOpen(false);
        }),
        Dialog.OKAction((a) => {
          const newSprokets = { ...sprokets };
          set(
            newSprokets,
            [`player${currentPlayer}`, `sproket${a.value}`],
            concat(
              get(
                newSprokets,
                [`player${currentPlayer}`, `sproket${a.value}`],
                []
              ),
              additionalCards
            )
          );
          setSprokets(newSprokets);

          setAdditionalCards([]);
          setRandomTokenModalOpen(false);
        }),
      ],
      prompt: Dialog.TextPrompt({ initialValue: 1 }),
    });
  }, [
    dialog,
    sprokets,
    setSprokets,
    additionalCards,
    setAdditionalCards,
    setRandomTokenModalOpen,
    currentPlayer,
  ]);

  const _selectContraptionModalOpen = () => {
    setSelectContraptionModalOpen(true);
  };

  const _hideSelectContraption = () => {
    setSelectContraptionModalOpen(false);
  };

  const _selectContraption = useCallback(
    ({ card }) => {
      dialog.current.show({
        title: "Which Sproket?",
        bsSize: "sm",
        actions: [
          Dialog.CancelAction(() => {
            _hideSelectContraption();
          }),
          Dialog.OKAction((a) => {
            const newSprokets = { ...sprokets };
            set(
              newSprokets,
              [`player${currentPlayer}`, `sproket${a.value}`],
              concat(
                get(
                  newSprokets,
                  [`player${currentPlayer}`, `sproket${a.value}`],
                  []
                ),
                [{ deck_card_id: uuidv4(), ...card }]
              )
            );
            setSprokets(newSprokets);

            _hideSelectContraption();
          }),
        ],
        prompt: Dialog.TextPrompt({ initialValue: 1 }),
      });
    },
    [currentPlayer, setSprokets, sprokets]
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
      [`player${player}`, `sproket${sproket}`],
      []
    );
    const filteredSproket = playerSproket.filter(
      (c) => c.deck_card_id !== card.deck_card_id
    );
    set(newSprokets, [`player${player}`, `sproket${sproket}`], filteredSproket);
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
    <div className="contraptions">
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
              className="my-5"
              style={{ minHeight: "1vh" }}
            >
              <h2 className="text-center mb-3" onClick={() => setLabel(player)}>
                {labels[player] || `Player ${playerLabel}`}
                <sup>
                  <i className="fa fa-edit ml-2 text-secondary fa-xs"></i>
                </sup>
              </h2>
              <Row className="my-3 mx-5">
                <Col sm={6} className="mb-3 mb-sm-2">
                  <Button
                    onClick={() => _randomTokenModalOpen(player)}
                    block
                    variant="primary"
                  >
                    Assemble Random Contraption
                  </Button>
                </Col>
                <Col sm={6} className="mb-3 mb-sm-2">
                  <Button
                    onClick={() => _selectContraptionModalOpen(player)}
                    block
                    variant="info"
                    className="h-100"
                  >
                    Assemble Select Contraption
                  </Button>
                </Col>
              </Row>
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
                  const playerSprokets = get(sprokets, [
                    `player${player}`,
                    `sproket${sproket}`,
                  ]);
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
          block: true,
          className: "my-3",
        }}
      />
      <RandomCardModal
        open={randomTokenModalOpen}
        additionalCards={additionalCards}
        onHide={_randomTokenModalClose}
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
      <Dialog
        ref={(component) => {
          dialog.current = component;
        }}
      />
    </div>
  );
};
