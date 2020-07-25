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
  Container,
  UncontrolledCollapse
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
  storeCurrentDeck,
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
    abandonedOngoing: false,
    deckSelection: true,
    customDeck: null
  };

  componentDidMount = async () => {
    const schemes = await getAllArchenemyCards();
    const deck = getCurrentDeck("archenemy");
    // TODO switch to selecting deck
    // const deck = getCurrentDeck("archenemy");
    const currentCard = getCurrentCard("archenemy");
    const ongoingSchemes = getAdditionalCards("archenemy") || [];
    const abandonedOngoing = !!store.get("archenemy-abandonedOngoing");
    const customDeck = JSON.parse(JSON.stringify(schemes));
    customDeck.forEach(c => (c.count = 0));
    this.setState({
      currentCard,
      deck,
      loading: false,
      ongoingSchemes,
      schemes,
      abandonedOngoing,
      deckSelection: !deck,
      customDeck
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
    const deck = null;
    storeCurrentDeck("archenemy", deck);
    const currentCard = setCurrentCard("archenemy", null);
    const ongoingSchemes = setAdditionalCards("archenemy", []);
    const abandonedOngoing = store.set("archenemy-abandonedOngoing", false);
    const customDeck = JSON.parse(JSON.stringify(schemes));
    customDeck.forEach(c => (c.count = 0));
    this.setState({
      schemes,
      loading: false,
      deck,
      currentCard,
      ongoingSchemes,
      abandonedOngoing,
      deckSelection: true,
      customDeck
    });
  };

  undo = async () => {
    const currentCard = undoDraw("archenemy");
    this.refreshDeck();
    this.setState({ currentCard });
  };
  // TODO Cards with same id
  render() {
    const { loading, schemes, deckSelection } = this.state;

    return (
      <div className="archenemy">
        <ArchenemyHelmet schemes={schemes} />
        {loading ? (
          <Loading className="text-muted" />
        ) : deckSelection ? (
          this.renderDeckSelect()
        ) : (
          this.renderGamePlay()
        )}
        {this.renderDevTools()}
      </div>
    );
  }

  renderGamePlay() {
    const { loading, deck, currentCard, abandonedOngoing } = this.state;

    return (
      <>
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
          <div className="pt-2 mb-2 d-flex justify-content-center">
            {abandonedOngoing ? (
              <Jumbotron className="bg-danger text-center" fluid>
                <Container fluid>
                  <h1>Current Scheme Has Been Foiled!</h1>
                </Container>
              </Jumbotron>
            ) : currentCard ? (
              <Fade key={currentCard.deck_card_id} timeout={100}>
                <Scheme card={currentCard} renderActions="true">
                  {this.renderAbandon(currentCard)}
                </Scheme>
              </Fade>
            ) : (
              <Scheme />
            )}
          </div>
        )}

        {this.renderOngoingSchemes()}

        {this.renderHistory()}
        <p className="text-center my-3 noselect">
          There are {deck ? deck.length : 0} cards remaining.
        </p>
        <Button onClick={this.reset} color="danger" block>
          Reset
        </Button>
      </>
    );
  }

  renderDeckSelect() {
    const { schemes } = this.state;
    return (
      <>
        <Card className="noselect">
          <CardBody>
            <CardTitle>
              <h3 className="text-center">All Schemes</h3>
            </CardTitle>
            <Button
              block
              color="success"
              onClick={() => this.selectDeck("All", schemes)}
            >
              Use All
            </Button>
          </CardBody>
        </Card>
        {this.renderPrebuilts()}
        {this.renderBuildCustomDeck()}
      </>
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
              <React.Fragment key={c.deck_card_id}>
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
    if (currentCard.deck_card_id === card.deck_card_id) {
      console.log("Abandon Current Scheme", card);
      setCurrentCard("archenemy", null);
      const abandonedOngoing = store.set("archenemy-abandonedOngoing", true);
      this.setState({ currentCard: null, abandonedOngoing });
    } else {
      console.log("Abandon Scheme", card);
      let newOngoing = ongoingSchemes.filter(
        s => s.deck_card_id !== card.deck_card_id
      );
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
                <Scheme card={p} key={p.deck_card_id} listDisplay={true} />
              ))}
            </ListGroup>
          )}
        </Fade>
      </div>
    );
  };

  selectDeck(name, cards) {
    console.log(`Selected ${name}`, cards);

    const newCards = name === "All" ? cards : [];
    cards.forEach(c => {
      for (let i = 0; i < c.count; i++) {
        newCards.push(c);
      }
    });

    const deck = getOrCreateCurrentDeck("archenemy", newCards, true);
    this.setState({
      deck,
      deckSelection: false
    });
  }

  incrementCount(card) {
    const { customDeck } = this.state;
    customDeck.forEach(c => {
      if (c.id === card.id) {
        c.count += 1;
        c.count = Math.min(c.count, 2);
      }
    });
    this.setState({ customDeck });
  }

  decrementCount(card) {
    const { customDeck } = this.state;
    customDeck.forEach(c => {
      if (c.id === card.id) {
        c.count -= 1;
        c.count = Math.max(c.count, 0);
      }
    });
    this.setState({ customDeck });
  }

  customDeckSize() {
    const { customDeck } = this.state;
    const reducer = (a, b) => a + b;
    return customDeck.map(c => c.count).reduce(reducer, 0);
  }

  resetCustomDeck = () => {
    const { customDeck } = this.state;
    customDeck.forEach(c => (c.count = 0));
    this.setState({ customDeck });
  };

  renderBuildCustomDeck() {
    const { customDeck } = this.state;

    const cardListIems = customDeck.map(card => (
      <ListGroupItem key={card.id} color="dark" className="noselect">
        <Scheme card={card} />
        <div className="text-center">
          <h1>x{card.count}</h1>
          <ButtonGroup>
            <Button
              disabled={card.count <= 0}
              onClick={() => this.decrementCount(card)}
            >
              <i className="ms ms-loyalty-down ms-loyalty-1 ms-2x" />
            </Button>
            <Button
              disabled={card.count >= 2}
              onClick={() => this.incrementCount(card)}
            >
              <i className="ms ms-loyalty-up ms-loyalty-1 ms-2x" />
            </Button>
          </ButtonGroup>
        </div>
      </ListGroupItem>
    ));

    return (
      <>
        <Card className="noselect">
          <CardBody>
            <CardTitle>
              <h3 className="text-center">Custom Deck</h3>
            </CardTitle>
            <Button block id="custom-deck-toggle">
              Build Custom
            </Button>
            <UncontrolledCollapse toggler="custom-deck-toggle">
              <div className="fixed-top mt-1 ml-1 text-left">
                <Alert color="info" className="clearfix">
                  <h4 className="float-left">
                    Custom Deck Size: {this.customDeckSize()}
                  </h4>
                  <ButtonGroup className="float-right">
                    <Button color="danger" onClick={this.resetCustomDeck}>
                      Reset
                    </Button>
                    <Button
                      color="success"
                      onClick={() => this.selectDeck("Custom", customDeck)}
                    >
                      Use Deck
                    </Button>
                  </ButtonGroup>
                </Alert>
              </div>

              <ListGroup>{cardListIems}</ListGroup>
            </UncontrolledCollapse>
            <Button
              block
              color="success"
              onClick={() => this.selectDeck("Custom", customDeck)}
            >
              Use Deck
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }

  renderPrebuilts() {
    const { schemes } = this.state;
    const prebuilts = getDeckList();
    const prebuiltItems = prebuilts.map((prebuilt, i) => {
      const cardList = getCardList(prebuilt, schemes);
      const cardListIems = cardList.map((card, i) => (
        <ListGroupItem key={i} color="dark">
          <Scheme card={card} />
          <h1 className="text-center">x{card.count}</h1>
        </ListGroupItem>
      ));
      return (
        <Card key={i}>
          <CardBody>
            <CardTitle>
              <h3 className="text-center">{prebuilt}</h3>
            </CardTitle>
            <Button block id={`prebuilt-${i}`}>
              Decklist
            </Button>
            <UncontrolledCollapse toggler={`#prebuilt-${i}`}>
              <ListGroup>{cardListIems}</ListGroup>
            </UncontrolledCollapse>
            <Button
              block
              color="success"
              onClick={() => this.selectDeck(prebuilt, cardList)}
            >
              Use Deck
            </Button>
          </CardBody>
        </Card>
      );
    });

    return <>{prebuiltItems}</>;
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
          {showDeck && deck && (
            <>
              <Button onClick={this.toggleDeckImages} block>
                {showDeckImages ? "Hide" : "Show"} Full Card
              </Button>
              <ListGroup>
                {deck.map((p, i) => (
                  <React.Fragment key={p.deck_card_id}>
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
                                findAndPutOnTop("archenemy", p.deck_card_id)
                              )
                            }
                          >
                            <i className="ms ms-untap ms-2x ss-mythic ss-grad" />
                          </Button>
                          <Button
                            disabled={i === deck.length - 1}
                            onClick={() =>
                              this.manipulateDeck(
                                findAndPutOnBottom("archenemy", p.deck_card_id)
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
