import pluralize from "pluralize";
import { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import { ActionButton } from "../../components/game/ActionButton";
import { Deck } from "../../components/game/Deck";
import { History } from "../../components/game/History";
import { Jumbotron } from "../../components/Jumbotron";
import { Loading } from "../../components/Loading";
import { Bounty } from "../../components/magic/Bounty";
import {
  DoubleFaceButton,
  LoyaltyButtonGroup,
} from "../../components/magic/Buttons";
import { UpdatedBanner } from "../../components/magic/UpdatedBanner";
import { PageContainer } from "../../components/PageContainer";
import { useLocalState } from "../../hooks/useLocalState";
import { useDeckContext } from "../../mtg/DeckContext";
import { useGameContext } from "../../mtg/GameContext";
import { getAllBountiesCards } from "../../util/api";
import { Rules } from "./Rules";

const bountyText = (bountyLevel) => {
  switch (bountyLevel) {
    case 1:
      return "1. Create a Treasure Token.";
    case 2:
      return "2. Create Two Treasure Tokens.";
    case 3:
      return "3. Create Two Treasure Tokens OR Draw a Card.";
    case 4:
      return "4 (MAX). Create Two Treasure Tokens AND Draw a Card.";
    default:
      return "None";
  }
};

export const Bounties = () => {
  const [loading, setLoading] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [bounties, setBounties] = useState([]);
  const [claimedBounty, setClaimedBounty] = useLocalState(
    `bounty-claimedBounty`,
    false
  );
  const [bountyLevel, setBountyLevel] = useLocalState(`bounty-bountyLevel`, 0);

  const game = useGameContext();
  const currentCard = game.currentCard;

  const deck = useDeckContext();
  const history = deck.history;

  const fetchBounties = useCallback(async () => {
    setLoading(true);
    try {
      const newBounties = await getAllBountiesCards();
      setBounties(newBounties);
    } catch (e) {
      console.log("Hike Fetch Card Load Error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBounties();
  }, [fetchBounties]);

  useEffect(() => {
    if (bounties && bounties.length <= 0 && !loading) {
      fetchBounties();
    }
  }, [bounties, loading, fetchBounties]);

  useEffect(() => {
    if (bounties?.length > 0 && !deck.isInit) {
      deck.initDeck(bounties, true);
    }
  }, [bounties, deck]);

  const reset = async () => {
    setLoading(true);
    fetchBounties();
    deck.reInit();
    game.reset();
    setClaimedBounty(false);
    setLoading(false);
    setBountyLevel(1);
  };

  const undo = async () => {
    const lastCard = deck.undoDraw();
    if (lastCard) {
      game.setCurrentCard(lastCard);
    }
  };

  const revealBounty = () => {
    const newCard = deck.drawCard() ?? null;
    game.setCurrentCard(newCard);
    setClaimedBounty(false);
    setBountyLevel(1);
  };

  const claimBounty = () => {
    game.clearCurrentCard();
    setClaimedBounty(true);
    setBountyLevel(0);
  };

  const incrementCount = () => setBountyLevel(Math.min(bountyLevel + 1, 4));
  const decrementCount = () => setBountyLevel(Math.max(bountyLevel - 1, 1));

  return (
    <PageContainer className="bounties">
      <Helmet title="Bounties" />
      <ActionButton
        text="Reveal Bounty"
        onClick={revealBounty}
        disabled={loading}
        icon={<i className="ss ss-otj ss-3x mx-2" />}
      />
      {loading ? (
        <Loading className="text-muted" />
      ) : (
        <div className="pt-2 mb-2 mtg-scheme-card">
          {claimedBounty ? (
            <Jumbotron className="bg-danger text-center" fluid>
              <Container fluid>
                <h1>Current Bounty Has Been Claimed!</h1>
              </Container>
            </Jumbotron>
          ) : currentCard ? (
            <Bounty card={currentCard} />
          ) : (
            <Bounty />
          )}
        </div>
      )}
      <Row className="my-4 text-center">
        <Col>
          <div className="text-center">
            <h1>Reward</h1>
            <h2>{bountyText(bountyLevel)}</h2>
            <LoyaltyButtonGroup
              className="my-4"
              upProps={{
                disabled: bountyLevel >= 4 || !currentCard,
                onClick: incrementCount,
                title: "Increase Bounty Level",
              }}
              downProps={{
                disabled: bountyLevel <= 1,
                onClick: decrementCount,
                title: "Decrease Bounty Level",
              }}
            />
          </div>
          <Button
            onClick={claimBounty}
            variant="primary"
            size="lg"
            disabled={loading}
            className="w-100 my-4"
          >
            <i className="ss ss-otj ss-2x mx-2" />
            Claim Bounty
            <i className="ss ss-otj ss-2x mx-2" />
          </Button>
        </Col>
      </Row>

      <History history={history} CardType={Bounty} />
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
        headerText="Reset Bounties?"
        triggerText="Reset"
        confirmText="Reset"
        confirmVariant="danger"
        triggerButtonParams={{ variant: "danger", className: "w-100 my-3" }}
      />
      <DevTools>
        <Button onClick={undo} variant="warning">
          Undo
        </Button>
        <Deck CardType={Bounty} />
      </DevTools>
      <UpdatedBanner setName="Outlaws of Thunder Junction" symbol="otj" />
    </PageContainer>
  );
};
