import React, { Component } from "react";
import { Alert, Button, Fade } from "react-bootstrap";
import { PlanechaseHelmet } from "./Helmet";
import { shuffleArray } from "../../mtg/deck.js";
import {
  getCurrentCard,
  setCurrentCard,
  hasCustomProperty,
  setRevealedCards,
  getRevealedCards,
  setAdditionalCards,
  getAdditionalCards,
  setScryCards,
  getScryCards
} from "../../mtg/card.js";
import { getAllPlanechaseCards } from "../../util/api.js";
import { Loading } from "../../components/Loading";
import { Confirm } from "../../components/Confirm";
import { Plane } from "../../components/magic/Plane";
import { PlanarDie } from "../../components/magic/planar-die/PlanarDie";
import { DoubleFaceButton } from "../../components/magic/Buttons";
import { DeckContext } from "../../mtg/DeckContext";
import { History } from "../../components/game/History";
import { Deck } from "../../components/game/Deck";
import { DevTools } from "../../components/DevTools";
import { ActionButton } from "../../components/game/ActionButton";
import { ScryModal } from "./ScryModal";
import { ChaosButton } from "./ChaosButton";
import { TripleChaosModal } from "./TripleChaosModal";

export class Planechase extends Component {
  state = {
    loading: false,
    planes: [],
    currentCard: null,
    revealedCards: [],
    additionalCards: [],
    scryCards: [],
    tripleChaosModalOpen: false,
    scryModalOpen: false,
    planeswalkDisabled: false,
    showPlanarDie: true
  };

  componentDidMount = async () => {
    const planes = await getAllPlanechaseCards();
    this.context.initDeck(planes);
    const currentCard = getCurrentCard("planechase");
    const revealedCards = getRevealedCards("planechase") || [];
    const scryCards = getScryCards("planechase") || [];
    const additionalCards = getAdditionalCards("planechase");
    const planeswalkDisabled = !!hasCustomProperty("top-5", currentCard);
    const scryModalOpen =
      scryCards.length > 0 && !!hasCustomProperty("scry-1", currentCard);
    this.setState({
      planes,
      loading: false,
      currentCard,
      revealedCards,
      additionalCards,
      scryCards,
      planeswalkDisabled,
      scryModalOpen
    });
  };

  planeswalk = () => {
    const currentCard = this.context.drawCard();
    setCurrentCard("planechase", currentCard);
    let revealedCards = [];
    let additionalCards = [];
    if (hasCustomProperty("two-planes", currentCard)) {
      revealedCards = this.context.revealCards(2, true);
      this.context.removeCards(revealedCards);
      const revealedPlanes = revealedCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      const revealedPhenomenon = revealedCards.filter(
        c => c.type_line.search("Phenomenon") >= 0
      );
      revealedPlanes.forEach(c => this.context.updateHistory(c));
      this.context.addCardsToBottom(revealedPhenomenon);
      revealedCards = [];
      additionalCards = revealedPlanes;
    }

    if (hasCustomProperty("top-5", currentCard)) {
      revealedCards = this.context.revealCards(5, true);
      this.context.removeCards(revealedCards);
      this.setState({ planeswalkDisabled: true });
    }

    setRevealedCards("planechase", revealedCards);
    setAdditionalCards("planechase", additionalCards);
    this.setState({ currentCard, revealedCards, additionalCards });
  };

  reset = async () => {
    this.setState({ loading: true });
    const planes = await getAllPlanechaseCards();
    this.context.initDeck(planes, true);
    const currentCard = setCurrentCard("planechase", null);
    const revealedCards = setRevealedCards("planechase", []);
    const scryCards = setScryCards("planechase", []);
    const additionalCards = setAdditionalCards("planechase", []);
    this.setState({
      planes,
      loading: false,
      currentCard,
      revealedCards,
      scryCards,
      additionalCards,
      planeswalkDisabled: false,
      scryModalOpen: false
    });
  };

  undo = async () => {
    const currentCard = this.context.undoDraw();
    this.setState({ currentCard });
  };

  triggerChaos = card => {
    const { scryCards } = this.state;
    console.log("Chaos Triggered");
    if (hasCustomProperty("triple-chaos", card)) {
      const newRevealedCards = this.context.revealCards(3, true);
      this.context.removeCards(newRevealedCards);
      const shuffledCards = shuffleArray(newRevealedCards.slice());
      this.context.addCardsToBottom(shuffledCards);
      setRevealedCards("planechase", newRevealedCards);
      this.setState({
        revealedCards: newRevealedCards,
        tripleChaosModalOpen: true
      });
    }

    if (hasCustomProperty("scry-1", card)) {
      if (!scryCards || scryCards.length === 0) {
        const newScryCards = this.context.revealCards(1, false);
        this.context.removeCards(newScryCards);
        setScryCards("planechase", newScryCards);
        this.setState({ scryCards: newScryCards });
      }
      this.setState({ scryModalOpen: true });
    }
  };

  render() {
    const {
      loading,
      planes,
      currentCard,
      planeswalkDisabled,
      showPlanarDie,
      scryCards,
      scryModalOpen,
      tripleChaosModalOpen,
      revealedCards
    } = this.state;

    const deck = this.context.deck;
    const history = this.context.history;

    return (
      <div className="planechase">
        <PlanechaseHelmet planes={planes} cardType={Plane} />
        <ActionButton
          text="Planeswalk"
          onClick={this.planeswalk}
          disabled={planeswalkDisabled || loading}
          icon={<i className="ms ms-planeswalker ms-2x mx-2" />}
        />
        {loading ? (
          <Loading className="text-muted" />
        ) : (
          <div className="mb-2">
            {currentCard ? (
              <Fade key={currentCard.deck_card_id} timeout={100}>
                <Plane card={currentCard} displayActions="true">
                  <ChaosButton card={currentCard} onClick={this.triggerChaos} />
                </Plane>
              </Fade>
            ) : (
              <Plane />
            )}
          </div>
        )}
        {this.renderTwoPlanes()}
        {this.renderFivePlanes()}

        <TripleChaosModal
          open={tripleChaosModalOpen}
          revealedCards={revealedCards}
          onHide={this._tripleChaosModalToggle}
          chaosClick={c => this.triggerChaos(c)}
          close={this._tripleChaosModalClose}
        />

        <ScryModal
          scryCards={scryCards}
          open={scryModalOpen}
          onScryTop={() => this._scryTop()}
          onScryBottom={() => this._scryBottom()}
        />
        <History history={history} CardType={Plane} />
        <p className="text-center my-3 noselect">
          There are {deck ? deck.length : 0} cards remaining.
        </p>
        <Confirm
          onConfirm={this.reset}
          headerText="Reset Planes?"
          triggerText="Reset"
          confirmText="Reset"
          confirmVariant="danger"
          triggerButtonParams={{ variant: "danger", block: true }}
        />
        <DevTools>
          <Button onClick={this.undo} variant="warning" block>
            Undo
          </Button>
          <Deck CardType={Plane} />
          <DoubleFaceButton
            text="Planar Die"
            onClick={this.togglePlanarDie}
            enabled={this.state.showPlanarDie}
          />
        </DevTools>
        {showPlanarDie && !planeswalkDisabled && (
          <div
            className="position-fixed"
            style={{ bottom: "5px", right: "5px" }}
          >
            <PlanarDie rollDone={face => console.log(`Rolled: ${face}`)} />
          </div>
        )}
      </div>
    );
  }

  togglePlanarDie = () => {
    this.setState({ showPlanarDie: !this.state.showPlanarDie });
  };

  renderTwoPlanes() {
    const { currentCard, additionalCards } = this.state;
    if (hasCustomProperty("two-planes", currentCard)) {
      const revealedPlanes = additionalCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      return (
        <div>
          <Alert variant="info" className="text-center mb-0">
            <i className="ms ms-planeswalker mx-2" />
            You Are On Both Planes
            <i className="ms ms-planeswalker mx-2" />
          </Alert>
          {revealedPlanes.map(c => (
            <React.Fragment key={c.deck_card_id}>
              <Plane card={c} displayActions="true">
                <ChaosButton card={c} onClick={this.triggerChaos} />
              </Plane>
            </React.Fragment>
          ))}
        </div>
      );
    }
  }

  selectPlane = card => {
    const { revealedCards } = this.state;
    this.context.removeCards(revealedCards);
    this.context.addCardsToTop([card]);
    const restCards = revealedCards.filter(
      c => c.deck_card_id !== card.deck_card_id
    );
    const shuffledCards = shuffleArray(restCards.slice());
    this.context.addCardsToBottom(shuffledCards);
    setRevealedCards("planechase", []);
    this.setState({ planeswalkDisabled: false, revealedCards: [] });
    setTimeout(this.planeswalk);
  };

  renderFivePlanes() {
    const { currentCard, revealedCards } = this.state;
    if (hasCustomProperty("top-5", currentCard)) {
      console.log("Render 5 - Revealed Cards", revealedCards);
      const revealedPlanes = revealedCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      console.log("Render 5 - Revealed Planes", revealedPlanes);
      return (
        <div>
          <Alert variant="info" className="text-center mb-0">
            <i className="ms ms-planeswalker mx-2" />
            Pick a Plane to Planeswalk To
            <i className="ms ms-planeswalker mx-2" />
          </Alert>
          {revealedPlanes.map(c => (
            <div key={c.deck_card_id}>
              <Plane card={c}>
                <Button
                  onClick={() => this.selectPlane(c)}
                  variant="primary"
                  className="btn-translucent"
                  size="lg"
                >
                  <i className="ms ms-planeswalker mx-2" />
                  <span className="mx-2">Planeswalk</span>
                </Button>
              </Plane>
            </div>
          ))}
        </div>
      );
    }
  }

  _tripleChaosModalClose = () => {
    setRevealedCards("planechase", []);
    this.setState({
      tripleChaosModalOpen: false,
      revealedCards: []
    });
  };

  _tripleChaosModalToggle = () => {
    if (this.state.tripleChaosModalOpen) {
      this._tripleChaosModalClose();
    }
  };

  _scryModalClose = () => {
    setScryCards("planechase", []);
    this.setState({
      scryModalOpen: false,
      scryCards: []
    });
  };

  _scryTop = () => {
    const { scryCards } = this.state;
    this.context.addCardsToTop(scryCards);
    console.log("Scry Top", scryCards);
    setScryCards("planechase", []);
    this.setState({ scryCards: [], scryModalOpen: false });
  };

  _scryBottom = () => {
    const { scryCards } = this.state;
    this.context.addCardsToBottom(scryCards);
    console.log("Scry Bottom", scryCards);
    setScryCards("planechase", []);
    this.setState({ scryCards: [], scryModalOpen: false });
  };
}

Planechase.contextType = DeckContext;
