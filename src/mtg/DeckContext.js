import React, { useContext } from "react";
import uuidv4 from "uuid/v4";
import { useLocalStorage } from "../hooks/useLocalState";
import { shuffleArray } from "./deck";

export const DeckContext = React.createContext({});
export const useDeckContext = () => useContext(DeckContext);

export const DeckProvider = ({ prefix = null, children }) => {
  const [deck, setDeck] = useLocalStorage(`${prefix}-deck`, []);
  const [history, setHistory] = useLocalStorage(`${prefix}-history`, []);
  const save = () => setDeck(deck);

  const getOrCreateCurrentDeck = (cards, reset = false) => {
    if (deck.length === 0 || reset) {
      console.log(`Creating New ${prefix} Deck`);
      // Clone all the cards so that we aren't modifying original objects
      const clonedCard = JSON.parse(JSON.stringify(cards));
      // Add Deck Card Id so that each card in the deck has a unique value
      clonedCard.forEach(c => (c.deck_card_id = uuidv4()));
      setDeck(shuffleArray(clonedCard));
      resetHistory();
    }
    return deck;
  };

  const moveCard = (from, to) => {
    deck.splice(to, 0, deck.splice(from, 1)[0]);
    save();
  };

  const drawCard = () => {
    const card = deck.shift();
    if (card) {
      updateHistory(card);
    }
    save();
    return card;
  };

  const updateHistory = card => {
    setHistory(prevHistory => prevHistory.push(card));
  };

  const resetHistory = () => {
    setHistory([]);
  };
  const undoDraw = () => {
    const card = history.pop();
    if (card) {
      addCardsToTop([card]);
    }
    setHistory(history);
    return history[history.length - 1];
  };

  const addCardsToTop = topCards => {
    setDeck(prevDeck => topCards.concat(prevDeck));
  };

  const addCardsToBottom = bottomCards => {
    setDeck(prevDeck => prevDeck.concat(bottomCards));
  };

  const findCard = card => {
    return findCardByDeckCardId(card.deck_card_id);
  };

  const findCardByDeckCardId = deckCardId => {
    return deck.find(c => c.deck_card_id === deckCardId);
  };

  const findAndPutOnTop = deckCardId => {
    const tmpCard = findCardByDeckCardId(prefix, deckCardId);

    if (tmpCard) {
      removeCards([tmpCard]);
      addCardsToTop([tmpCard]);
    }
  };

  const findAndPutOnBottom = deckCardId => {
    const tmpCard = findCardByDeckCardId(deckCardId);

    if (tmpCard) {
      removeCards([tmpCard]);
      addCardsToBottom([tmpCard]);
    }
  };

  const removeCards = cardsToRemove => {
    const filteredDeck = deck.filter(
      c => !cardsToRemove.find(r => r.deck_card_id === c.deck_card_id)
    );

    setDeck(filteredDeck);
  };

  // TODO: Move this
  const revealCards = (numReveal, onlyPlanes = false) => {
    const revealedCards = [];
    const count = Math.min(deck.length, numReveal);

    let planes = 0;
    let tmpCount = count;
    for (let i = 0; i < tmpCount; i++) {
      revealedCards.push(deck[i]);

      if (onlyPlanes) {
        if (deck[i].type_line.search("Plane") >= 0) {
          planes++;
        }

        if (i === tmpCount - 1 && planes < count) {
          tmpCount++;
        }
      }
    }

    return revealedCards;
  };

  const shuffle = () => {
    setDeck(shuffleArray(deck));
  };

  return (
    <DeckContext.Provider
      value={{
        prefix,
        deck,
        history,
        getOrCreateCurrentDeck,
        save,
        moveCard,
        drawCard,
        updateHistory,
        resetHistory,
        undoDraw,
        addCardsToTop,
        addCardsToBottom,
        findCard,
        findCardByDeckCardId,
        findAndPutOnTop,
        findAndPutOnBottom,
        removeCards,
        revealCards,
        shuffle
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
