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
  addCardsToTop,
  getHistory
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
import { Plane } from "../../components/magic/Plane";
import {
  Alert,
  Button,
  ListGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Counter } from "../../components/magic/Counter";

export class Planechase extends Component {
  state = {
    loading: false,
    planes: [],
    deck: null,
    currentCard: null,
    counters: 0,
    revealedCards: [],
    tripleChaosModalOpen: false,
    scryModalOpen: false,
    planeswalkDisabled: false,
    showHistory: false
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
    const {
      loading,
      planes,
      deck,
      currentCard,
      planeswalkDisabled
    } = this.state;

    return (
      <div className="planechase">
        <PlanechaseHelmet planes={planes} />
        <div className="fixed-top mt-1 ml-1 w-25 text-left">
          <Button
            onClick={this.planeswalk}
            className="mb-2"
            color="success"
            disabled={planeswalkDisabled || loading}
            block
          >
            <i className="ms ms-planeswalker ms-2x mx-2" />
            <span className="mx-2 d-none d-md-inline">Planeswalk</span>
          </Button>
          {this.renderChaos()}
        </div>

        {loading ? (
          <Loading className="text-muted" />
        ) : (
          <div>
            {currentCard ? (
              <Plane card={currentCard} renderActions="true" />
            ) : (
              <Plane />
            )}
          </div>
        )}
        {this.renderTwoPlanes()}
        {this.renderFivePlanes()}
        {this.renderTripleChaosModal()}
        {this.renderScryModal()}
        <Button onClick={this.reset} color="danger" block>
          Reset
        </Button>
        <Button onClick={this.undo} color="warning" block>
          Undo
        </Button>
        <p>There are {deck ? deck.length : 0} cards remaining.</p>
        {this.renderHistory()}
      </div>
    );
  }

  toggleHistory = () => {
    this.setState({ showHistory: !this.state.showHistory });
  };

  renderHistory = () => {
    const { showHistory } = this.state;
    const history = getHistory("planechase");
    return (
      <>
        <Button onClick={this.toggleHistory} block>
          {showHistory ? "Hide" : "Show"} History
        </Button>
        <ListGroup>
          {showHistory &&
            history &&
            history.map(p => <Plane card={p} key={p.id} listDisplay={true} />)}
        </ListGroup>
      </>
    );
  };

  renderChaos() {
    const { currentCard } = this.state;
    const hasChaos = hasCustomProperty("chaos-trigger", currentCard);
    if (hasChaos) {
      return (
        <Button onClick={this.triggerChaos} color="info" block>
          <i className="ms ms-chaos ms-2x mx-2" />
          <span className="mx-2 d-none d-md-inline">Trigger Chaos</span>
        </Button>
      );
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
          <Alert color="info" className="text-center mb-0">
            <i className="ms ms-planeswalker mx-2" />
            You Are On Both Planes
            <i className="ms ms-planeswalker mx-2" />
          </Alert>
          {revealedPlanes.map(c => (
            <Plane card={c} key={c.id} renderActions="true" />
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
          <Alert color="info" className="text-center mb-0">
            <i className="ms ms-planeswalker mx-2" />
            Pick a Plane to Planeswalk To
            <i className="ms ms-planeswalker mx-2" />
          </Alert>
          {revealedPlanes.map(c => (
            <div>
              <Plane card={c} />
              <Button block onClick={() => this.selectPlane(c)}>
                <i className="ms ms-planeswalker mx-2" />
                <span className="mx-2">{c.name}</span>
              </Button>
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
              <i className="ms ms-chaos sm-margin" />
              <i className="ms ms-chaos sm-margin" />
              <i className="ms ms-chaos sm-margin" />
              Triple Chaos - You Pick Order
              <i className="ms ms-chaos sm-margin" />
              <i className="ms ms-chaos sm-margin" />
              <i className="ms ms-chaos sm-margin" />
            </h1>
            {revealedPlanes.map(c => (
              <Plane card={c} />
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
            <i className="ms ms-chaos sm-margin" />
            Scry Card
            <i className="ms ms-chaos sm-margin" />
          </ModalHeader>
          <ModalBody>
            <Button color="secondary" block onClick={this._scryTop}>
              Top
            </Button>
            {revealedCards.map(c => (
              <Plane card={c} />
            ))}
            <Button color="secondary" block onClick={this._scryBottom}>
              Bottom
            </Button>
          </ModalBody>
        </Modal>
      );
    }
  };
}
