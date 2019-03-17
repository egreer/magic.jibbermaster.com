import React, { Component } from "react";
import { PlanechaseHelmet } from "./Helmet";
import {
  getCurrentDeck,
  getOrCreateCurrentDeck,
  drawCard,
  undoDraw,
  revealCards,
  addCardsToBottom,
  removeCards,
  shuffle,
  addCardsToTop
} from "../../mtg/deck.js";
import {
  getCurrentCard,
  setCurrentCard,
  hasCustomProperty,
  setRevealedCards,
  getRevealedCards
} from "../../mtg/card.js";
import { getAllPlanechaseCards } from "../../util/api.js";
import { Loading } from "../../components/Loading";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Counter } from "../../components/magic/Counter";

export class Planechase extends Component {
  state = {
    loading: false,
    planes: null,
    deck: null,
    currentCard: null,
    counters: 0,
    revealedCards: [],
    tripleChaosModalOpen: false,
    scryModalOpen: false,
    planeswalkDisabled: false
  };

  componentDidMount = async () => {
    const planes = await getAllPlanechaseCards();
    const deck = getOrCreateCurrentDeck("planechase", planes);
    const currentCard = getCurrentCard("planechase");
    const revealedCards = getRevealedCards("planechase") || [];
    this.setState({ planes, loading: false, deck, currentCard, revealedCards });
  };

  planeswalk = () => {
    const currentCard = drawCard("planechase");
    setCurrentCard("planechase", currentCard);
    if (hasCustomProperty("two-planes", currentCard)) {
      const revealedCards = revealCards("planechase", 2, true);
      removeCards("planechase", revealedCards);
      setRevealedCards("planechase", revealedCards);
      this.setState({ revealedCards });
    }

    if (hasCustomProperty("top-5", currentCard)) {
      const revealedCards = revealCards("planechase", 5, true);
      removeCards("planechase", revealedCards);
      setRevealedCards("planechase", revealedCards);
      this.setState({ revealedCards, planeswalkDisabled: true });
    }

    const deck = getCurrentDeck("planechase");
    this.setState({ currentCard, deck, counters: 0 });
  };

  reset = async () => {
    this.setState({ loading: true });
    const planes = await getAllPlanechaseCards();
    const deck = getOrCreateCurrentDeck("planechase", planes, true);
    const currentCard = setCurrentCard("planechase", null);
    this.setState({ planes, loading: false, deck, currentCard });
  };

  undo = async () => {
    const currentCard = undoDraw("planechase");
    const deck = getCurrentDeck("planechase");
    this.setState({ deck, currentCard });
  };

  triggerChaos = () => {
    const { currentCard } = this.state;
    console.log("Choas Triggered");
    if (hasCustomProperty("triple-chaos", currentCard)) {
      const revealedCards = revealCards("planechase", 3, true);
      removeCards("planechase", revealedCards);
      const shuffledCards = shuffle(revealedCards.slice());
      addCardsToBottom("planechase", shuffledCards);
      const deck = getCurrentDeck("planechase");
      setRevealedCards("planechase", revealCards);
      this.setState({ revealedCards, tripleChaosModalOpen: true, deck });
    }

    if (hasCustomProperty("scry-1", currentCard)) {
      const revealedCards = revealCards("planechase", 1, false);
      removeCards("planechase", revealedCards);
      setRevealedCards("planechase", revealCards);
      this.setState({ revealedCards, scryModalOpen: true });
    }
  };

  render() {
    const { loading, deck, currentCard, planeswalkDisabled } = this.state;
    // TODO: Two Planes
    // TODO: 5 Pick 1
    return (
      <div className="App">
        <PlanechaseHelmet />
        <header className="App-header">
          <p>Planechase</p>
          <Button
            onClick={this.planeswalk}
            color="primary"
            disabled={planeswalkDisabled}
          >
            Planeswalk
          </Button>
          <Button onClick={this.reset} color="danger">
            Reset
          </Button>
          <Button onClick={this.undo} color="warning">
            Undo
          </Button>
          {loading ? (
            <Loading className="text-muted" />
          ) : (
            <div>{currentCard ? currentCard.name : "None"}</div>
          )}
          <hr />
          {this.renderTwoPlanes()}
          {this.renderFivePlanes()}
          {this.renderChaos()}
          {this.renderCounter(currentCard)}
          {this.renderTripleChaosModal()}
          {this.renderScryModal()}
          <hr />
          {loading ? (
            <Loading className="text-muted" />
          ) : (
            <div>{deck && this.renderPlanes()}</div>
          )}
          <p>There are {deck ? deck.length : 0} cards remaining.</p>
        </header>
      </div>
    );
  }

  renderChaos() {
    const { currentCard } = this.state;
    const hasChaos = hasCustomProperty("chaos-trigger", currentCard);
    if (hasChaos) {
      return <Button onClick={this.triggerChaos}>Trigger Chaos</Button>;
    }
  }

  renderCounter(card) {
    // const { currentCard, counters } = this.state;
    const hasCounters = hasCustomProperty("counter", card);
    if (hasCounters) {
      // const counterType = getCounterType(currentCard);
      return <Counter card={card} />;
    }
  }

  renderTwoPlanes() {
    const { currentCard, revealedCards } = this.state;
    if (hasCustomProperty("two-planes", currentCard)) {
      console.log(revealedCards);
      const revealedPlanes = revealedCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      // TODO Countes, chaos etc
      return (
        <div>
          <p>Your are on both planes</p>
          {revealedPlanes.map(c => (
            <p>
              {c.name}
              {this.renderCounter(c)}
            </p>
          ))}
        </div>
      );
    }
  }

  selectPlane = card => {
    const { revealedCards } = this.state;
    removeCards("planechase", revealedCards);
    addCardsToTop("planechase", [card]);
    const restCards = revealedCards.filter(c => c.id !== card.id);
    const shuffledCards = shuffle(restCards.slice());
    addCardsToBottom("planechase", shuffledCards);
    setRevealedCards("planechase", []);
    this.setState({ planeswalkDisabled: false, revealedCards: [] });
    this.planeswalk();
  };

  renderFivePlanes() {
    const { currentCard, revealedCards } = this.state;
    if (hasCustomProperty("top-5", currentCard)) {
      console.log(revealedCards);
      const revealedPlanes = revealedCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      console.log(revealedPlanes);
      // TODO Countes, chaos etc
      return (
        <div>
          <h1> Pick A Plane to Planeswalk To</h1>
          {revealedPlanes.map(c => (
            <div>
              <p onClick={() => this.selectPlane(c)}>{c.name}</p>
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

  renderTripleChaosModal() {
    const { revealedCards, tripleChaosModalOpen } = this.state;
    if (revealedCards && tripleChaosModalOpen) {
      // TODO filter only planes in revealed cards
      const revealedPlanes = revealedCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      return (
        <Modal
          isOpen={!!tripleChaosModalOpen}
          toggle={this._tripleChaosModalToggle}
          onClosed={this._tripleChaosModalClose}
          size="lg"
          backdrop={true}
        >
          <ModalHeader>{`Triple Chaos`}</ModalHeader>
          <ModalBody>
            <h1 className="text-center">
              <i className="mi mi-chaos sm-margin" />
              <i className="mi mi-chaos sm-margin" />
              <i className="mi mi-chaos sm-margin" />
              Triple Chaos - You Pick Order
              <i className="mi mi-chaos sm-margin" />
              <i className="mi mi-chaos sm-margin" />
              <i className="mi mi-chaos sm-margin" />
            </h1>
            {revealedPlanes.map(c => (
              <p>{c.name}</p>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              outline
              block
              aria-label="Close"
              onClick={this._tripleChaosModalClose}
            >
              Done
            </Button>
          </ModalFooter>
        </Modal>
      );
    }
  }

  _scryModalClose = () => {
    setRevealedCards("planechase", []);
    this.setState({
      scryModalOpen: false,
      revealedCards: []
    });
  };

  _scryTop = () => {
    const { revealedCards } = this.state;
    addCardsToTop("planechase", revealedCards);
    console.log("Scry Top", revealedCards);
    const deck = getCurrentDeck("planechase");
    setRevealedCards("planechase", []);
    this.setState({ revealedCards: [], scryModalOpen: false, deck });
  };

  _scryBottom = () => {
    const { revealedCards } = this.state;
    addCardsToBottom("planechase", revealedCards);
    console.log("Scry Bottom", revealedCards);
    const deck = getCurrentDeck("planechase");
    setRevealedCards("planechase", []);
    this.setState({ revealedCards: [], scryModalOpen: false, deck });
  };

  renderScryModal = () => {
    const { revealedCards, scryModalOpen } = this.state;
    if (revealedCards && scryModalOpen) {
      return (
        <Modal
          isOpen={!!scryModalOpen}
          onClosed={this._tripleChaosModalClose}
          size="lg"
        >
          <ModalHeader>
            <i className="mi mi-chaos sm-margin" />
            Scry Card
            <i className="mi mi-chaos sm-margin" />
          </ModalHeader>
          <ModalBody>
            <Button color="primary" block onClick={this._scryTop}>
              Top
            </Button>
            {revealedCards.map(c => (
              <p>{c.name}</p>
            ))}
            <Button color="secondary" block onClick={this._scryBottom}>
              Bottom
            </Button>
          </ModalBody>
        </Modal>
      );
    }
  };

  renderPlanes = () => {
    const { deck } = this.state;

    return deck.map(p => <p>{p.name}</p>);
  };
}
