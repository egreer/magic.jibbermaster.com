import React, { Component } from "react";
import { Alert, Button, Fade, Jumbotron, Container } from "react-bootstrap";
import store from "store";

import { ArchenemyHelmet } from "./Helmet";
import { getAllArchenemyCards } from "../../util/api.js";
import { Scheme } from "../../components/magic/Scheme";
import { Confirm } from "../../components/Confirm";
import { Loading } from "../../components/Loading";

import {
  getCurrentCard,
  setCurrentCard,
  setAdditionalCards,
  getAdditionalCards
} from "../../mtg/card.js";
import { DeckContext } from "../../mtg/DeckContext";
import { History } from "../../components/game/History";
import { Deck } from "../../components/game/Deck";
import { DevTools } from "../../components/DevTools";
import { ActionButton } from "../../components/game/ActionButton";
import { AbandonButton } from "./AbandonButton";
import { DeckSelect } from "./DeckSelect";

export class Archenemy extends Component {
  state = {
    loading: true,
    currentCard: null,
    ongoingSchemes: [],
    schemes: [],
    abandonedOngoing: false,
    deckSelection: true
  };

  componentDidMount = async () => {
    const schemes = await getAllArchenemyCards();
    const currentCard = getCurrentCard("archenemy");
    const ongoingSchemes = getAdditionalCards("archenemy") || [];
    const abandonedOngoing = !!store.get("archenemy-abandonedOngoing");

    this.setState({
      currentCard,
      loading: false,
      ongoingSchemes,
      schemes,
      abandonedOngoing,
      deckSelection: !this.context.isInit
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
    const schemes = await getAllArchenemyCards();
    this.context.reInit();
    const currentCard = setCurrentCard("archenemy", null);
    const ongoingSchemes = setAdditionalCards("archenemy", []);
    const abandonedOngoing = store.set("archenemy-abandonedOngoing", false);

    this.setState({
      schemes,
      loading: false,
      currentCard,
      ongoingSchemes,
      abandonedOngoing,
      deckSelection: true
    });
  };

  undo = async () => {
    const currentCard = this.context.undoDraw();
    this.setState({ currentCard });
  };

  render() {
    const { loading, schemes, deckSelection } = this.state;

    return (
      <div className="archenemy">
        <ArchenemyHelmet schemes={schemes} />
        {loading ? (
          <Loading className="text-muted" />
        ) : deckSelection ? (
          <DeckSelect
            schemes={schemes}
            onSelectDeck={(name, cards) => this.selectDeck(name, cards)}
          />
        ) : (
          this.renderGamePlay()
        )}
        <DevTools>
          <Button onClick={this.undo} variant="warning" block>
            Undo
          </Button>
          <Deck CardType={Scheme} />
        </DevTools>
      </div>
    );
  }

  renderGamePlay() {
    const { loading, currentCard, abandonedOngoing } = this.state;
    const deck = this.context.deck;
    const history = this.context.history;

    return (
      <>
        <ActionButton
          text="Scheme"
          onClick={this.scheme}
          disabled={loading}
          icon={<i className="ss ss-arc ss-3x mx-2" />}
        />

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
                  <AbandonButton
                    card={currentCard}
                    onClick={this.abandonScheme}
                  />
                </Scheme>
              </Fade>
            ) : (
              <Scheme />
            )}
          </div>
        )}

        {this.renderOngoingSchemes()}

        <History history={history} CardType={Scheme} />

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
                  <AbandonButton card={c} onClick={this.abandonScheme} />
                </Scheme>
              </React.Fragment>
            ))}
          </div>
        </>
      );
    }
  }

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
}

Archenemy.contextType = DeckContext;
