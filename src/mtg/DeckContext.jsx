import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalState } from "../hooks/useLocalState";
import { shuffleArray } from "../util/shuffleArray";

export const DeckContext = React.createContext({});
export const useDeckContext = () => useContext(DeckContext);

export const DeckProvider = ({ prefix = null, children }) => {
  const [deck, setDeck] = useLocalState(`${prefix}-deck`, []);
  const [isInit, setInit] = useLocalState(`${prefix}-deck-init`, false);
  const [history, setHistory] = useLocalState(`${prefix}-history`, []);

  const initDeck = (cards, reset = false) => {
    if (!isInit || deck.length === 0 || reset) {
      console.log(`Creating New ${prefix} Deck`);
      const clonedCards = cards?.map((card) => {
        return {
          // Add Deck Card Id so that each card in the deck has a unique value
          deck_card_id: uuidv4(),
          // Clone all the cards so that we aren't modifying original objects
          ...card,
        };
      });
      const newDeck = clonedCards && shuffleArray(clonedCards);
      setDeck(newDeck);
      resetHistory();
      setInit(true);
    }
  };

  const reInit = () => {
    setDeck([]);
    setInit(false);
    resetHistory();
  };

  const moveCard = (from, to) => {
    deck.splice(to, 0, deck.splice(from, 1)[0]);
    setDeck([...deck]);
  };

  const drawCard = () => {
    const card = deck?.shift();
    setDeck([...deck]);
    if (card) {
      updateHistory(card);
    }
    return card;
  };

  const updateHistory = (card) => {
    setHistory([card, ...history]);
  };

  const resetHistory = () => {
    setHistory([]);
  };

  const undoDraw = () => {
    const card = history.shift();
    if (card) {
      addCardsToTop([card]);
    }
    setHistory([...history]);
    const lastCard = history[0];
    return lastCard;
  };

  const addCardsToTop = (topCards) => {
    setDeck((prevDeck) => [...topCards, ...prevDeck]);
  };

  const addCardsToBottom = (bottomCards) => {
    setDeck((prevDeck) => [...prevDeck, ...bottomCards]);
  };

  const findCard = (card) => {
    return findCardByDeckCardId(card.deck_card_id);
  };

  const findCardByDeckCardId = (deckCardId) => {
    return deck.find((c) => c.deck_card_id === deckCardId);
  };

  const findAndPutOnTop = (deckCardId) => {
    const tmpCard = findCardByDeckCardId(deckCardId);

    if (tmpCard) {
      removeCards([tmpCard]);
      addCardsToTop([tmpCard]);
    }
  };

  const findAndPutOnBottom = (deckCardId) => {
    const tmpCard = findCardByDeckCardId(deckCardId);

    if (tmpCard) {
      removeCards([tmpCard]);
      addCardsToBottom([tmpCard]);
    }
  };

  const removeCards = (cardsToRemove) => {
    setDeck((prevDeck) => {
      const filteredDeck = [...prevDeck].filter(
        (c) => !cardsToRemove.find((r) => r.deck_card_id === c.deck_card_id)
      );
      return filteredDeck;
    });
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
        isInit,
        reInit,
        deck,
        history,
        initDeck,
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
        shuffle,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
