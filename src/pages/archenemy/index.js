import React, { Component } from "react";
import {
  Accordion,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Fade,
  ListGroup,
  Jumbotron,
  Container
} from "react-bootstrap";
import store from "store";

import { ArchenemyHelmet } from "./Helmet";
import { getDeckList, getCardList } from "../../mtg/prebuilt-decks";
import { getAllArchenemyCards } from "../../util/api.js";
import { Scheme } from "../../components/magic/Scheme";
import { Confirm } from "../../components/Confirm";
import { Loading } from "../../components/Loading";
import { getSetting } from "../../util/settings.js";

import {
  getCurrentCard,
  setCurrentCard,
  hasCustomProperty,
  setAdditionalCards,
  getAdditionalCards
} from "../../mtg/card.js";
import {
  LoyaltyButtonGroup,
  TapButtonGroup,
  TenthEditionButton
} from "../../components/magic/Buttons";
import { DeckContext } from "../../mtg/DeckContext";

export class Archenemy extends Component {
  state = {
    loading: true,
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
    // TODO switch to selecting deck
    // const deck = getCurrentDeck("archenemy");
    const currentCard = getCurrentCard("archenemy");
    const ongoingSchemes = getAdditionalCards("archenemy") || [];
    const abandonedOngoing = !!store.get("archenemy-abandonedOngoing");
    const customDeck = schemes.map(scheme => {
      return { ...scheme, count: 0 };
    });
    this.setState({
      currentCard,
      loading: false,
      ongoingSchemes,
      schemes,
      abandonedOngoing,
      deckSelection: !this.context.isInit,
      customDeck
    });
  };

  scheme = () => {
    const { currentCard, ongoingSchemes } = this.state;

    if (currentCard) {
      if (currentCard.type_line === "Ongoing Scheme") {
        ongoingSchemes.push(currentCard);
      }
    }
    const newCard = this.context.drawCard();
    setCurrentCard("archenemy", newCard);
    setAdditionalCards("archenemy", ongoingSchemes);
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
    this.context.reInit();
    const currentCard = setCurrentCard("archenemy", null);
    const ongoingSchemes = setAdditionalCards("archenemy", []);
    const abandonedOngoing = store.set("archenemy-abandonedOngoing", false);
    const customDeck = schemes.map(scheme => {
      return { ...scheme, count: 0 };
    });
    this.setState({
      schemes,
      loading: false,
      currentCard,
      ongoingSchemes,
      abandonedOngoing,
      deckSelection: true,
      customDeck
    });
  };

  undo = async () => {
    const currentCard = this.context.undoDraw();
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
    const { loading, currentCard, abandonedOngoing } = this.state;
    const deck = this.context.deck;
    return (
      <>
        <div className="fixed-top mt-1 ml-1 w-25 text-left">
          <Button
            onClick={this.scheme}
            className="mb-2"
            variant="success"
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
                <Scheme card={currentCard} displayActions="true">
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
        <Confirm
          onConfirm={this.reset}
          headerText="Reset Schemes?"
          triggerText="Reset"
          confirmText="Reset"
          confirmVariant="danger"
          triggerButtonParams={{ variant: "danger", block: true }}
        />
      </>
    );
  }

  renderDeckSelect() {
    const { schemes } = this.state;
    const deckName = "All Schemes";
    return (
      <>
        <Card className="noselect">
          <Card.Body>
            {this.deckCardTitle(deckName)}
            <Button
              block
              variant="success"
              onClick={() => this.selectDeck("All", schemes)}
            >
              Use All
            </Button>
          </Card.Body>
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
          <Alert variant="info" className="text-center">
            <h5>Ongoing Schemes</h5>
          </Alert>
          <div className="d-flex justify-content-center flex-wrap ">
            {ongoingSchemes.map(c => (
              <React.Fragment key={c.deck_card_id}>
                <Scheme card={c} displayActions="true">
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
          <Button onClick={this.undo} variant="warning" block>
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
          variant="danger"
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
    const history = this.context.history;
    return (
      <div className="my-2">
        <Button onClick={this.toggleHistory} block variant="secondary">
          {showHistory ? "Hide" : "Show"} History
        </Button>
        <Fade in={showHistory}>
          <div>
            {showHistory && history && (
              <ListGroup>
                {history.map(p => (
                  <Scheme card={p} key={p.deck_card_id} listDisplay={true} />
                ))}
              </ListGroup>
            )}
          </div>
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

    const deck = this.context.initDeck(newCards, true);
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
    const deckName = "Custom Deck";

    const cardListItems = customDeck.map(card => (
      <ListGroup.Item key={card.id} variant="dark" className="noselect">
        <Scheme card={card} />
        <div className="text-center">
          <h1>
            <Badge pill variant={card.count > 0 ? "success" : "dark"}>
              x{card.count}
            </Badge>
          </h1>
          <LoyaltyButtonGroup
            downProps={{
              disabled: card.count <= 0,
              onClick: () => this.decrementCount(card)
            }}
            upProps={{
              disabled: card.count >= 2,
              onClick: () => this.incrementCount(card)
            }}
          />
        </div>
      </ListGroup.Item>
    ));

    return (
      <Accordion>
        <Card className="noselect">
          <Card.Body>
            {this.deckCardTitle(deckName)}
            <Accordion.Toggle
              as={Button}
              block
              eventKey="custom-deck-toggle"
              variant="secondary"
            >
              Build Custom
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="custom-deck-toggle">
              <>
                <div className="fixed-top mt-1 ml-1 text-left">
                  <Alert variant="info" className="clearfix">
                    <h4 className="float-left">
                      Custom Deck Size: {this.customDeckSize()}
                    </h4>
                    <ButtonGroup className="float-right">
                      <Button variant="danger" onClick={this.resetCustomDeck}>
                        Reset
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => this.selectDeck("Custom", customDeck)}
                      >
                        Use Deck
                      </Button>
                    </ButtonGroup>
                  </Alert>
                </div>

                <ListGroup>{cardListItems}</ListGroup>
              </>
            </Accordion.Collapse>
            <Button
              block
              variant="success"
              onClick={() => this.selectDeck("Custom", customDeck)}
            >
              Use Custom Deck
            </Button>
          </Card.Body>
        </Card>
      </Accordion>
    );
  }

  deckIcon(name, type = "ss-mythic ss-grad") {
    switch (name) {
      case "All Schemes":
        return <i className={`ss ${type} ss-lea`}></i>;
      case "Custom Deck":
        return <i className={`ss ${type} ss-chr`}></i>;
      case "Assemble the Doomsday Machine":
        return <i className={`ss ${type} ss-usg`}></i>;
      case "Scorch the World with Dragonfire":
        return <i className={`ss ${type} ss-scg`}></i>;
      case "Trample Civilization Underfoot":
        return <i className={`ss ${type} ss-c20`}></i>;
      case "Bring About the Undead Apocalypse":
        return <i className={`ss ${type} ss-pd3`}></i>;
      case "Archenemy Nicol Bolas":
        return <i className={`ss ${type} ss-hou`}></i>;
      default:
        return null;
    }
  }

  renderPrebuilts() {
    const { schemes } = this.state;
    const prebuilts = getDeckList();
    const prebuiltItems = prebuilts.map((prebuilt, i) => {
      const cardList = getCardList(prebuilt, schemes);
      const cardListItems = cardList.map((card, i) => (
        <ListGroup.Item key={i} variant="dark">
          <Scheme card={card} />
          <h1 className="text-center">
            <Badge pill variant={card.count > 0 ? "success" : "dark"}>
              x{card.count}
            </Badge>
          </h1>
        </ListGroup.Item>
      ));
      return (
        <Accordion key={i}>
          <Card>
            <Card.Body>
              {this.deckCardTitle(prebuilt)}
              <Accordion.Toggle
                as={Button}
                block
                eventKey={`prebuilt-${i}`}
                variant="secondary"
              >
                Decklist
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`prebuilt-${i}`}>
                <ListGroup>{cardListItems}</ListGroup>
              </Accordion.Collapse>
              <Button
                block
                variant="success"
                onClick={() => this.selectDeck(prebuilt, cardList)}
              >
                Use Deck
              </Button>
            </Card.Body>
          </Card>
        </Accordion>
      );
    });

    return <>{prebuiltItems}</>;
  }

  deckCardTitle = name => (
    <Card.Title className="d-flex">
      <div className="h3 text-center align-self-center">
        {this.deckIcon(name)}
      </div>
      <div className="flex-grow-1">
        <h3 className="text-center">{name}</h3>
      </div>
      <div className="h3 text-center align-self-center">
        {this.deckIcon(name)}
      </div>
    </Card.Title>
  );

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
        <Button onClick={this.toggleDeck} block variant="secondary">
          {showDeck ? "Hide" : "Show"} Deck
        </Button>
        <Fade in={showDeck}>
          <div>
            {showDeck && deck && (
              <>
                <Button
                  onClick={this.toggleDeckImages}
                  block
                  variant="secondary"
                >
                  {showDeckImages ? "Hide" : "Show"} Full Card
                </Button>
                <ListGroup>
                  {deck.map((p, i) => (
                    <React.Fragment key={p.deck_card_id}>
                      <Scheme card={p} listDisplay={!showDeckImages} />
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
}

Archenemy.contextType = DeckContext;
