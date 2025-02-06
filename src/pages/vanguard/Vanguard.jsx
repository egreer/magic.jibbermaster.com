import get from "lodash/get";
import set from "lodash/set";
import React, { useCallback, useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
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
import { useLocalState } from "../../hooks/useLocalState";
import { AVATAR_PROP } from "../../util/additionalProps";
import { fetchRandomCard, getAllVanguardCards } from "../../util/api";

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
      const tokenCard = await fetchRandomCard(AVATAR_PROP.url);
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

  const _hideRandomTokenModal = () => setRandomTokenModalOpen(false);

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
    <Container className="vanguard" fluid>
      <Helmet title="Vanguard" />
      <Row className="my-4 text-center">
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
      <Carousel
        activeIndex={currentPlayer}
        onSelect={carouselSelect}
        interval={null}
        touch={false}
      >
        {[...Array(playerCount)].map((_v, player) => {
          const card = get(avatars, `player${player}`);
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
              ></PlayerHeader>
              <Row className="my-3 mx-5">
                <Col sm={6} className="mb-3 mb-sm-2">
                  <Button
                    onClick={() => _randomTokenModalOpen()}
                    variant="primary"
                    className="fill-100"
                  >
                    Random Avatar
                  </Button>
                </Col>
                <Col sm={6} className="mb-3 mb-sm-2">
                  <Button
                    onClick={() => _selectAvatarModalOpen()}
                    variant="info"
                    className="fill-100"
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
                        displayActions={true}
                      ></MtgCard>
                      <Button
                        onClick={() => removeAvatar({ player })}
                        variant="danger"
                        size="lg"
                        className="btn-translucent mb-2 my-2 w-100"
                        title="Remove Vanguard Avatar"
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
          className: "my-3 w-100",
        }}
      />
      <RandomCardModal
        open={randomTokenModalOpen}
        additionalCards={[additionalCard]}
        onHide={_hideRandomTokenModal}
        close={_randomTokenModalClose}
        randomTokenProps={AVATAR_PROP}
        closeText="Summon Avatar"
      />
      <CardTypeListModal
        open={selectAvatarModalOpen}
        onHide={_hideSelectVanguard}
        onSelect={_selectVanguard}
        randomTokenProps={AVATAR_PROP}
        fetchCards={getAllVanguardCards}
      />

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
