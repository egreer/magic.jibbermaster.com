import React, { useCallback, useRef, useState } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import get from "lodash/get";
import set from "lodash/set";
import { LoyaltyButtonGroup } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { useLocalState } from "../../hooks/useLocalState";
import { filterAPI, internet } from "../../util/api";
import { RandomCardModal } from "../../components/RandomCardModal";
import Dialog from "react-bootstrap-dialog";
import uuidv4 from "uuid/v4";
import { Confirm } from "../../components/Confirm";
import { VanguardListModal } from "./VanguardListModal";
import { AVATAR_PROP } from "../../util/additionalProps";
import { DeleteIcon } from "../../components/magic/Icons";

const DEFAULT_PLAYER_COUNT = 5;

export const Vanguard = () => {
  const [playerCount, setPlayerCount] = useLocalState(
    "vanguard-playerCount",
    DEFAULT_PLAYER_COUNT
  );
  const [avatars, setAvatars] = useLocalState("vanguard-avatars", {});
  const [randomTokenModalOpen, setRandomTokenModalOpen] = useState(false);
  const [selectAvatarModalOpen, setSelectAvatarModalOpen] = useState(false);
  const [additionalCard, setAdditionalCard] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [labels, setLabels] = useLocalState("vanguard-labels", {});

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

  const _randomTokenModalOpen = () => {
    const getToken = async () => {
      let response = await internet.get(AVATAR_PROP.url);
      let tokenCard = filterAPI(response.data);
      tokenCard.deck_card_id = uuidv4();
      console.log("Random Token", tokenCard);

      setAdditionalCard(tokenCard);
      setRandomTokenModalOpen(true);
    };
    getToken();
  };

  const _randomTokenModalClose = useCallback(() => {
    const newAvatars = { ...avatars };
    set(newAvatars, `player${currentPlayer}`, additionalCard);
    setAvatars(newAvatars);

    setAdditionalCard(null);
    // setCurrentPlayer(null);
    setRandomTokenModalOpen(false);
  }, [
    avatars,
    setAvatars,
    additionalCard,
    setAdditionalCard,
    setRandomTokenModalOpen,
    currentPlayer,
    // setCurrentPlayer,
  ]);

  const _selectAvatarModalOpen = () => {
    setSelectAvatarModalOpen(true);
  };

  const _hideSelectVanguard = () => {
    setSelectAvatarModalOpen(false);
  };

  const _selectVanguard = useCallback(
    ({ card }) => {
      const newAvatars = { ...avatars };
      set(newAvatars, `player${currentPlayer}`, {
        deck_card_id: uuidv4(),
        ...card,
      });
      setAvatars(newAvatars);

      _hideSelectVanguard();
    },
    [avatars, setAvatars, currentPlayer]
  );

  const removeAvatar = useCallback(
    ({ player }) => {
      setAvatars((v) => {
        const newAvatars = { ...v };
        delete newAvatars[`player${player}`];
        return newAvatars;
      });
    },
    [setAvatars]
  );

  const incrementPlayerCount = () => {
    setPlayerCount((p) => p + 1);
  };

  const decrementPlayerCount = useCallback(() => {
    const newPlayerCount = Math.max(playerCount - 1, 1);
    removeAvatar({ player: newPlayerCount });
    setCurrentPlayer((c) => Math.min(c, newPlayerCount - 1));
    setPlayerCount(newPlayerCount);
  }, [setPlayerCount, playerCount, removeAvatar]);

  const reset = async () => {
    setAvatars({});
    setLabels({});
    setPlayerCount(DEFAULT_PLAYER_COUNT);
  };

  const carouselSelect = (selectedIndex) => {
    setCurrentPlayer(selectedIndex);
  };

  return (
    <div className="vanguard">
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
          const card = get(avatars, `player${player}`);
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
                    onClick={() => _randomTokenModalOpen()}
                    block
                    variant="primary"
                  >
                    Random Avatar
                  </Button>
                </Col>
                <Col sm={6} className="mb-3 mb-sm-2">
                  <Button
                    onClick={() => _selectAvatarModalOpen()}
                    block
                    variant="info"
                    className="h-100"
                  >
                    Select Avatar
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col key={player} className="my-3" lg={{ span: 8, offset: 2 }}>
                  {card ? (
                    <React.Fragment key={card.deck_card_id}>
                      <MtgCard
                        card={card}
                        displayChildrenBelow={false}
                      ></MtgCard>
                      <Button
                        onClick={() => removeAvatar({ player })}
                        block
                        variant="danger"
                        size="lg"
                        className="btn-translucent mb-2 my-2"
                      >
                        <DeleteIcon />
                      </Button>
                    </React.Fragment>
                  ) : (
                    <p className="text-center">None</p>
                  )}
                </Col>
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Confirm
        onConfirm={reset}
        headerText="Reset Vanguard?"
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
        additionalCards={[additionalCard]}
        onHide={_randomTokenModalClose}
        close={_randomTokenModalClose}
        randomTokenProps={AVATAR_PROP}
        closeText="Summon Avatar"
      />
      <VanguardListModal
        open={selectAvatarModalOpen}
        onHide={_hideSelectVanguard}
        onSelect={_selectVanguard}
        randomTokenProps={AVATAR_PROP}
      />
      <Dialog
        ref={(component) => {
          dialog.current = component;
        }}
      />
    </div>
  );
};
