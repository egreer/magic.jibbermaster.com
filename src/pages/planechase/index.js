import React, { Component } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Fade,
  ListGroup,
  Modal
} from "react-bootstrap";
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
import { getSetting } from "../../util/settings.js";
import { PlanarDie } from "../../components/magic/planar-die/PlanarDie";
import {
  DoubleFaceButton,
  LoyaltyButtonGroup,
  TapButtonGroup,
  TenthEditionButton
} from "../../components/magic/Buttons";
import { DeckContext } from "../../mtg/DeckContext";

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
    showHistory: false,
    showDeck: false,
    showDeckImages: false,
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
      showPlanarDie
    } = this.state;

    const deck = this.context.deck;

    return (
      <div className="planechase">
        <PlanechaseHelmet planes={planes} />
        <div className="fixed-top mt-1 ml-1 w-25 text-left">
          <Button
            onClick={this.planeswalk}
            className="mb-2"
            variant="success"
            disabled={planeswalkDisabled || loading}
            block
          >
            <i className="ms ms-planeswalker ms-2x mx-2" />
            <span className="mx-2 d-none d-md-inline">Planeswalk</span>
          </Button>
        </div>
        {loading ? (
          <Loading className="text-muted" />
        ) : (
          <div className="mb-2">
            {currentCard ? (
              <Fade key={currentCard.deck_card_id} timeout={100}>
                <Plane card={currentCard} renderActions="true">
                  {this.renderChaos(currentCard)}
                </Plane>
              </Fade>
            ) : (
              <Plane />
            )}
          </div>
        )}
        {this.renderTwoPlanes()}
        {this.renderFivePlanes()}
        {this.renderTripleChaosModal()}
        {this.renderScryModal()}
        {this.renderHistory()}
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
        {this.renderDevTools()}
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

  renderDevTools = () => {
    const devTools = getSetting("devTools");
    if (devTools) {
      return (
        <div className="my-4">
          <h5 className="text-center noselect">Dev Tools</h5>
          <Button onClick={this.undo} variant="warning" block>
            Undo
          </Button>
          {this.renderDeck()}
          <DoubleFaceButton
            text="Planar Die"
            onClick={this.togglePlanarDie}
            enabled={this.state.showPlanarDie}
          />
        </div>
      );
    }
  };

  togglePlanarDie = () => {
    this.setState({ showPlanarDie: !this.state.showPlanarDie });
  };

  toggleDeck = () => {
    this.setState({ showDeck: !this.state.showDeck });
  };

  toggleDeckImages = () => {
    this.setState({ showDeckImages: !this.state.showDeckImages });
  };

  renderDeck = () => {
    const { showDeck, showDeckImages } = this.state;
    const deck = this.context.deck;
    return (
      <div className="my-2">
        <Button onClick={this.toggleDeck} variant="secondary" block>
          {showDeck ? "Hide" : "Show"} Deck
        </Button>
        <Fade in={showDeck}>
          <div>
            {showDeck && (
              <>
                <Button
                  onClick={this.toggleDeckImages}
                  variant="secondary"
                  block
                >
                  {showDeckImages ? "Hide" : "Show"} Full Card
                </Button>
                <ListGroup>
                  {deck.map((p, i) => (
                    <React.Fragment key={p.deck_card_id}>
                      <Plane card={p} listDisplay={!showDeckImages} />
                      <ListGroup.Item className="text-center justify-content-center d-flex">
                        <ButtonToolbar>
                          <LoyaltyButtonGroup
                            reverse
                            downProps={{
                              disabled: i === deck.length - 1,
                              onClick: () => this.context.moveCard(i, i + 1)
                            }}
                            upProps={{
                              disabled: i === 0,
                              onClick: () => this.context.moveCard(i, i - 1)
                            }}
                          />
                          <TapButtonGroup
                            className="ml-2"
                            unTapProps={{
                              disabled: i === 0,
                              onClick: () =>
                                this.context.findAndPutOnTop(p.deck_card_id)
                            }}
                            tapProps={{
                              disabled: i === deck.length - 1,
                              onClick: () =>
                                this.context.findAndPutOnBottom(p.deck_card_id)
                            }}
                          />

                          <ButtonGroup className="ml-2">
                            <TenthEditionButton
                              onClick={() => this.context.removeCards([p])}
                            />
                          </ButtonGroup>
                        </ButtonToolbar>
                      </ListGroup.Item>
                    </React.Fragment>
                  ))}
                </ListGroup>
              </>
            )}
          </div>
        </Fade>
      </div>
    );
  };

  toggleHistory = () => {
    this.setState({ showHistory: !this.state.showHistory });
  };

  renderHistory = () => {
    const { showHistory } = this.state;
    const history = this.context.history;
    return (
      <div className="my-2">
        <Button onClick={this.toggleHistory} variant="secondary" block>
          {showHistory ? "Hide" : "Show"} History
        </Button>
        <Fade in={showHistory}>
          <div>
            {showHistory && history && (
              <ListGroup>
                {history.map(p => (
                  <Plane card={p} key={p.deck_card_id} listDisplay={true} />
                ))}
              </ListGroup>
            )}
          </div>
        </Fade>
      </div>
    );
  };

  renderChaos(card) {
    const hasChaos = hasCustomProperty("chaos-trigger", card);
    if (hasChaos) {
      return (
        <Button
          onClick={() => this.triggerChaos(card)}
          variant="info"
          size="lg"
          className="btn-translucent"
        >
          <i className="ms ms-chaos ms-2x mx-2" />
          <span className="mx-2 d-none d-md-inline">Trigger Chaos</span>
        </Button>
      );
    }
  }

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
              <Plane card={c} renderActions="true">
                {this.renderChaos(c)}
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

  renderTripleChaosModal() {
    const { revealedCards, tripleChaosModalOpen } = this.state;
    if (revealedCards && tripleChaosModalOpen) {
      const revealedPlanes = revealedCards.filter(
        c => c.type_line.search("Plane") >= 0
      );
      return (
        <Modal
          show={!!tripleChaosModalOpen}
          onHide={this._tripleChaosModalToggle}
          size="md"
          backdrop={true}
          dialogClassName="bg-secondary"
        >
          <Modal.Header className="flex-column text-center text-white noselect">
            <div className="modal-title h5 mx-auto">
              <i className="ms ms-chaos mr-1" />
              <i className="ms ms-chaos mr-1" />
              <i className="ms ms-chaos mr-1" />
              <span className="mx-1">Triple Chaos</span>
              <i className="ms ms-chaos ml-1" />
              <i className="ms ms-chaos ml-1" />
              <i className="ms ms-chaos ml-1" />
            </div>
            <div className="mx-auto">
              <small className="text-center">You Pick Order</small>
            </div>
          </Modal.Header>
          <Modal.Body className="text-center">
            {revealedPlanes.map(c => (
              <React.Fragment key={c.deck_card_id}>
                <Plane card={c}>{this.renderChaos(c)}</Plane>
              </React.Fragment>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="info"
              block
              aria-label="Close"
              onClick={this._tripleChaosModalClose}
            >
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

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

  renderScryModal = () => {
    const { scryCards, scryModalOpen } = this.state;
    if (scryCards && scryModalOpen) {
      return (
        <Modal
          show={!!scryModalOpen}
          size="md"
          dialogClassName="bg-secondary"
          variant="secondary"
          backdrop="static"
        >
          <Modal.Header className="justify-content-center text-white noselect">
            <Modal.Title>
              <i className="ms ms-chaos mx-4" />
              Scry Card
              <i className="ms ms-chaos mx-4" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="info" block onClick={this._scryTop}>
              Top
            </Button>
            {scryCards.map(c => (
              <Plane card={c} key={c.deck_card_id} />
            ))}
            <Button variant="info" block onClick={this._scryBottom}>
              Bottom
            </Button>
          </Modal.Body>
        </Modal>
      );
    }
  };
}

Planechase.contextType = DeckContext;
