import React, { Component } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardTitle,
  Fade,
  ListGroup,
  ListGroupItem,
  Jumbotron,
  Container
} from "reactstrap";
import store from "store";

import { ArchenemyHelmet } from "./Helmet";
import { getDeckList, getCardList } from "../../mtg/prebuilt-decks";
import { getAllArchenemyCards } from "../../util/api.js";
import { Scheme } from "../../components/magic/Scheme";
import { Loading } from "../../components/Loading";
import { getSetting } from "../../util/settings.js";

import {
  getCurrentDeck,
  getOrCreateCurrentDeck,
  drawCard,
  undoDraw,
  removeCards,
  getHistory,
  findAndPutOnBottom,
  findAndPutOnTop,
  moveCard
} from "../../mtg/deck.js";
import {
  getCurrentCard,
  setCurrentCard,
  hasCustomProperty,
  setAdditionalCards,
  getAdditionalCards
} from "../../mtg/card.js";

export class Archenemy extends Component {
  state = {
    loading: true,
    deck: null,
    currentCard: null,
    ongoingSchemes: [],
    schemes: [],
    showHistory: false,
    showDeck: false,
    showDeckImages: false,
    abandonedOngoing: false
  };

  componentDidMount = async () => {
    const schemes = await getAllArchenemyCards();
    const deck = getOrCreateCurrentDeck("archenemy", schemes);
    // TODO switch to selecting deck
    // const deck = getCurrentDeck("archenemy");
    const currentCard = getCurrentCard("archenemy");
    const ongoingSchemes = getAdditionalCards("archenemy") || [];
    const abandonedOngoing = !!store.get("archenemy-abandonedOngoing");
    this.setState({
      currentCard,
      deck,
      loading: false,
      ongoingSchemes,
      schemes,
      abandonedOngoing
    });
  };

  refreshDeck = () => {
    const deck = getCurrentDeck("archenemy");
    this.setState({ deck });
  };

  scheme = () => {
    const { currentCard, ongoingSchemes } = this.state;
    if (currentCard) {
      if (currentCard.type_line === "Ongoing Scheme") {
        ongoingSchemes.push(currentCard);
      }
    }
    const newCard = drawCard("archenemy");
    setCurrentCard("archenemy", newCard);
    setAdditionalCards("archenemy", ongoingSchemes);
    this.refreshDeck();
    this.setState({
      currentCard: newCard,
      ongoingSchemes,
      abandonedOngoing: store.set("archenemy-abandonedOngoing", false)
    });
  };

  reset = async () => {
    this.setState({ loading: true });
    // TODO reset to deck selection
    const schemes = await getAllArchenemyCards();
    const deck = getOrCreateCurrentDeck("archenemy", schemes, true);
    const currentCard = setCurrentCard("archenemy", null);
    const ongoingSchemes = setAdditionalCards("archenemy", []);
    const abandonedOngoing = store.set("archenemy-abandonedOngoing", false);
    this.setState({
      schemes,
      loading: false,
      deck,
      currentCard,
      ongoingSchemes,
      abandonedOngoing
    });
  };

  undo = async () => {
    const currentCard = undoDraw("archenemy");
    this.refreshDeck();
    this.setState({ currentCard });
  };
  // TODO Cards with same id
  render() {
    const {
      loading,
      deck,
      schemes,
      currentCard,
      abandonedOngoing
    } = this.state;

    return (
      <div className="archenemy">
        <ArchenemyHelmet schemes={schemes} />
        <div className="fixed-top mt-1 ml-1 w-25 text-left">
          <Button
            onClick={this.scheme}
            className="mb-2"
            color="success"
            disabled={loading}
            block
          >
            <i className="ss ss-arc ss-3x mx-2" />
            <span className="mx-2 d-none d-md-inline">Scheme</span>
          </Button>
        </div>
        {loading ? (
          <Loading className="text-muted" />
        ) : (
          <div className="mb-2 d-flex justify-content-center">
            {abandonedOngoing ? (
              <Jumbotron className="bg-danger text-center" fluid>
                <Container fluid>
                  <h1>Current Scheme Has Been Foiled!</h1>
                </Container>
              </Jumbotron>
            ) : currentCard ? (
              <Scheme card={currentCard} renderActions="true">
                {this.renderAbandon(currentCard)}
              </Scheme>
            ) : (
              <Scheme />
            )}
          </div>
        )}

        {this.renderOngoingSchemes()}

        <Button onClick={this.reset} color="danger" block>
          Reset
        </Button>
        <p className="text-center my-3 noselect">
          There are {deck ? deck.length : 0} cards remaining.
        </p>
        {this.renderHistory()}
        {this.renderDevTools()}

        {this.renderPrebuilts()}
      </div>
    );
  }

  renderOngoingSchemes() {
    const { ongoingSchemes } = this.state;
    if (ongoingSchemes && ongoingSchemes.length > 0) {
      return (
        <>
          <Alert color="info" className="text-center">
            <h5>Ongoing Schemes</h5>
          </Alert>
          <div className="d-flex justify-content-center flex-wrap ">
            {ongoingSchemes.map(c => (
              <React.Fragment key={c.id}>
                <Scheme card={c} renderActions="true">
                  {this.renderAbandon(c)}
                </Scheme>
              </React.Fragment>
            ))}
          </div>
        </>
      );
    }
  }

  renderDevTools = () => {
    const devTools = getSetting("devTools");
    if (devTools) {
      return (
        <div className="my-4">
          <h5 className="text-center noselect">Dev Tools</h5>
          <Button onClick={this.undo} color="warning" block>
            Undo
          </Button>
          {this.renderDeck()}
        </div>
      );
    }
  };

  abandonScheme = card => {
    const { ongoingSchemes, currentCard } = this.state;
    if (currentCard.id === card.id) {
      console.log("Abandon Current Scheme", card);
      setCurrentCard("archenemy", null);
      const abandonedOngoing = store.set("archenemy-abandonedOngoing", true);
      this.setState({ currentCard: null, abandonedOngoing });
    } else {
      console.log("Abandon Scheme", card);
      let newOngoing = ongoingSchemes.filter(s => s.id !== card.id);
      setAdditionalCards("archenemy", newOngoing);
      this.setState({ ongoingSchemes: newOngoing });
    }
  };

  renderAbandon(card) {
    const isOngoing = card.type_line === "Ongoing Scheme";
    if (isOngoing && !hasCustomProperty("unabandonable", card)) {
      return (
        <Button
          onClick={() => this.abandonScheme(card)}
          color="danger"
          size="lg"
          className="btn-translucent"
        >
          <h2 className="mb-0">
            <i className="ss ss-bok ss-2x ss-grad ss-rare mx-2" />
            <span className="mx-2 d-none d-md-inline">Abandon Scheme</span>
          </h2>
        </Button>
      );
    }
  }

  toggleHistory = () => {
    this.setState({ showHistory: !this.state.showHistory });
  };

  renderHistory = () => {
    const { showHistory } = this.state;
    const history = getHistory("archenemy");
    return (
      <div className="my-2">
        <Button onClick={this.toggleHistory} block>
          {showHistory ? "Hide" : "Show"} History
        </Button>
        <Fade in={showHistory}>
          {showHistory && history && (
            <ListGroup>
              {history.reverse().map(p => (
                <Scheme card={p} key={p.id} listDisplay={true} />
              ))}
            </ListGroup>
          )}
        </Fade>
      </div>
    );
  };

  renderPrebuilts() {
    const prebuilts = getDeckList();
    const prebuiltItems = prebuilts.map((prebuilt, i) => {
      const cardList = getCardList(prebuilt);
      const cardListIems = cardList.map((card, i) => (
        <ListGroupItem key={i}>{card}</ListGroupItem>
      ));
      return (
        <Card key={i}>
          <CardBody>
            <CardTitle>{prebuilt}</CardTitle>
            <ListGroup className="text-dark">{cardListIems}</ListGroup>
          </CardBody>
        </Card>
      );
    });
    return <div>{prebuiltItems}</div>;
  }

  toggleDeck = () => {
    this.setState({ showDeck: !this.state.showDeck });
  };

  toggleDeckImages = () => {
    this.setState({ showDeckImages: !this.state.showDeckImages });
  };

  manipulateDeck = () => {
    this.refreshDeck();
  };

  renderDeck = () => {
    const { deck, showDeck, showDeckImages } = this.state;
    return (
      <div className="my-2">
        <Button onClick={this.toggleDeck} block>
          {showDeck ? "Hide" : "Show"} Deck
        </Button>
        <Fade in={showDeck}>
          {showDeck && (
            <>
              <Button onClick={this.toggleDeckImages} block>
                {showDeckImages ? "Hide" : "Show"} Full Card
              </Button>
              <ListGroup>
                {deck.map((p, i) => (
                  <React.Fragment key={p.id}>
                    <Scheme card={p} listDisplay={!showDeckImages} />
                    <ListGroupItem className="text-center justify-content-center d-flex">
                      <ButtonToolbar>
                        <ButtonGroup>
                          <Button
                            disabled={i === 0}
                            onClick={() =>
                              this.manipulateDeck(
                                moveCard("archenemy", i, i - 1)
                              )
                            }
                          >
                            <i className="ms ms-loyalty-up ms-loyalty-1 ms-2x" />
                          </Button>
                          <Button
                            disabled={i === deck.length - 1}
                            onClick={() =>
                              this.manipulateDeck(
                                moveCard("archenemy", i, i + 1)
                              )
                            }
                          >
                            <i className="ms ms-loyalty-down ms-loyalty-1 ms-2x" />
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup className="ml-2">
                          <Button
                            disabled={i === 0}
                            onClick={() =>
                              this.manipulateDeck(
                                findAndPutOnTop("archenemy", p.id)
                              )
                            }
                          >
                            <i className="ms ms-untap ms-2x ss-mythic ss-grad" />
                          </Button>
                          <Button
                            disabled={i === deck.length - 1}
                            onClick={() =>
                              this.manipulateDeck(
                                findAndPutOnBottom("archenemy", p.id)
                              )
                            }
                          >
                            <i className="ms ms-tap ms-2x ss-mythic ss-grad" />
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup className="ml-2">
                          <Button
                            color="danger"
                            onClick={() =>
                              this.manipulateDeck(removeCards("archenemy", [p]))
                            }
                          >
                            <i className="ss ss-x ss-10e ss-rare ss-grad ss-2x" />
                          </Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                    </ListGroupItem>
                  </React.Fragment>
                ))}
              </ListGroup>
            </>
          )}
        </Fade>
      </div>
    );
  };
}
