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
  getHistory,
  findAndPutOnBottom,
  findAndPutOnTop,
  moveCard
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
  Fade,
  ListGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem
} from "reactstrap";
import { getSetting } from "../../util/settings.js";

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
    showHistory: false,
    showDeck: false
  };

  componentDidMount = async () => {
    const planes = await getAllPlanechaseCards();
    const deck = getOrCreateCurrentDeck("planechase", planes);
    const currentCard = getCurrentCard("planechase");
    const revealedCards = getRevealedCards("planechase") || [];
    const planeswalkDisabled = !!hasCustomProperty("top-5", currentCard);
    const scryModalOpen =
      revealedCards.length > 0 && !!hasCustomProperty("scry-1", currentCard);
    this.setState({
      planes,
      loading: false,
      deck,
      currentCard,
      revealedCards,
      planeswalkDisabled,
      scryModalOpen
    });
  };

  refreshDeck = () => {
    const deck = getCurrentDeck("planechase");
    this.setState({ deck });
  };

  planeswalk = () => {
    const currentCard = drawCard("planechase");
    setCurrentCard("planechase", currentCard);
    let revealedCards = [];
    if (hasCustomProperty("two-planes", currentCard)) {
      revealedCards = revealCards("planechase", 2, true);
      removeCards("planechase", revealedCards);
    }

    if (hasCustomProperty("top-5", currentCard)) {
      revealedCards = revealCards("planechase", 5, true);
      removeCards("planechase", revealedCards);
      this.setState({ planeswalkDisabled: true });
    }

    setRevealedCards("planechase", revealedCards);
    this.refreshDeck();
    this.setState({ currentCard, counters: 0, revealedCards });
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
    this.refreshDeck();
    this.setState({ currentCard });
  };

  triggerChaos = () => {
    const { currentCard, revealedCards } = this.state;
    console.log("Chaos Triggered");
    if (hasCustomProperty("triple-chaos", currentCard)) {
      const newRevealedCards = revealCards("planechase", 3, true);
      removeCards("planechase", newRevealedCards);
      const shuffledCards = shuffle(newRevealedCards.slice());
      addCardsToBottom("planechase", shuffledCards);
      this.refreshDeck();
      setRevealedCards("planechase", newRevealedCards);
      this.setState({
        revealedCards: newRevealedCards,
        tripleChaosModalOpen: true
      });
    }

    if (hasCustomProperty("scry-1", currentCard)) {
      console.log("revealed cards", revealedCards);
      if (!revealedCards || revealedCards.length === 0) {
        const newRevealedCards = revealCards("planechase", 1, false);
        removeCards("planechase", newRevealedCards);
        setRevealedCards("planechase", newRevealedCards);
        this.setState({ revealedCards: newRevealedCards });
      }
      this.setState({ scryModalOpen: true });
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
          <div className="mb-2">
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
        <p className="text-center my-3">
          There are {deck ? deck.length : 0} cards remaining.
        </p>
        {this.renderHistory()}
        {this.renderDevTools()}
      </div>
    );
  }

  renderDevTools = () => {
    const devTools = getSetting("devTools");
    if (devTools) {
      return (
        <div className="my-4 text-center">
          <h5>Dev Tools</h5>
          <Button onClick={this.undo} color="warning" block>
            Undo
          </Button>
          {this.renderDeck()}
        </div>
      );
    }
  };

  toggleDeck = () => {
    this.setState({ showDeck: !this.state.showDeck });
  };

  manipulateDeck = () => {
    this.refreshDeck();
  };

  renderDeck = () => {
    const { showDeck } = this.state;
    const deck = getCurrentDeck("planechase");
    return (
      <div className="my-2">
        <Button onClick={this.toggleDeck} block>
          {showDeck ? "Hide" : "Show"} Deck
        </Button>
        <Fade in={showDeck}>
          {showDeck && (
            <ListGroup>
              {deck.map((p, i) => (
                <React.Fragment key={p.id}>
                  <Plane card={p} listDisplay={true} />
                  <ListGroupItem>
                    <Button
                      disabled={i === 0}
                      onClick={() =>
                        this.manipulateDeck(moveCard("planechase", i, i - 1))
                      }
                    >
                      Up
                    </Button>
                    <Button
                      disabled={i === deck.length - 1}
                      onClick={() =>
                        this.manipulateDeck(moveCard("planechase", i, i + 1))
                      }
                    >
                      Down
                    </Button>
                    <Button
                      disabled={i === 0}
                      onClick={() =>
                        this.manipulateDeck(findAndPutOnTop("planechase", p.id))
                      }
                    >
                      Top
                    </Button>
                    <Button
                      disabled={i === deck.length - 1}
                      onClick={() =>
                        this.manipulateDeck(
                          findAndPutOnBottom("planechase", p.id)
                        )
                      }
                    >
                      Botom
                    </Button>
                    <Button
                      color="danger"
                      onClick={() =>
                        this.manipulateDeck(removeCards("planechase", [p]))
                      }
                    >
                      Remove
                    </Button>
                  </ListGroupItem>
                </React.Fragment>
              ))}
            </ListGroup>
          )}
        </Fade>
      </div>
    );
  };

  toggleHistory = () => {
    this.setState({ showHistory: !this.state.showHistory });
  };

  renderHistory = () => {
    const { showHistory } = this.state;
    const history = getHistory("planechase");
    return (
      <div className="my-2">
        <Button onClick={this.toggleHistory} block>
          {showHistory ? "Hide" : "Show"} History
        </Button>
        <Fade in={showHistory}>
          {showHistory && (
            <ListGroup>
              {history.reverse().map(p => (
                <Plane card={p} key={p.id} listDisplay={true} />
              ))}
            </ListGroup>
          )}
        </Fade>
      </div>
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
      const revealedPlanes = revealedCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      // TODO chaos Add to history etc
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
            <div key={c.id}>
              <Plane card={c}>
                <Button
                  onClick={() => this.selectPlane(c)}
                  color="primary"
                  className="btn-translucent"
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
          size="md"
          backdrop={true}
          contentClassName="bg-secondary"
        >
          <ModalHeader className="justify-content-center text-center text-white">
            <div>
              <i className="ms ms-chaos mr-1" />
              <i className="ms ms-chaos mr-1" />
              <i className="ms ms-chaos mr-1" />
              <span className="mx-1">Triple Chaos</span>
              <i className="ms ms-chaos ml-1" />
              <i className="ms ms-chaos ml-1" />
              <i className="ms ms-chaos ml-1" />
            </div>
            <div>
              <small className="text-center">You Pick Order</small>
            </div>
          </ModalHeader>
          <ModalBody className="text-center">
            {revealedPlanes.map(c => (
              <Plane card={c} key={c.id} />
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              color="info"
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
    this.refreshDeck();
    setRevealedCards("planechase", []);
    this.setState({ revealedCards: [], scryModalOpen: false });
  };

  _scryBottom = () => {
    const { revealedCards } = this.state;
    addCardsToBottom("planechase", revealedCards);
    console.log("Scry Bottom", revealedCards);
    this.refreshDeck();
    setRevealedCards("planechase", []);
    this.setState({ revealedCards: [], scryModalOpen: false });
  };

  renderScryModal = () => {
    const { revealedCards, scryModalOpen } = this.state;
    if (revealedCards && scryModalOpen) {
      return (
        <Modal
          isOpen={!!scryModalOpen}
          size="md"
          contentClassName="bg-secondary"
        >
          <ModalHeader className="justify-content-center text-white">
            <i className="ms ms-chaos mx-4" />
            Scry Card
            <i className="ms ms-chaos mx-4" />
          </ModalHeader>
          <ModalBody>
            <Button color="info" block onClick={this._scryTop}>
              Top
            </Button>
            {revealedCards.map(c => (
              <Plane card={c} key={c.id} />
            ))}
            <Button color="info" block onClick={this._scryBottom}>
              Bottom
            </Button>
          </ModalBody>
        </Modal>
      );
    }
  };
}
