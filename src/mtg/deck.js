import store from "store/dist/store.modern";
import uuidv4 from "uuid/v4";

export const moveCard = (prefix, from, to) => {
  const deck = getCurrentDeck(prefix);
  deck.splice(to, 0, deck.splice(from, 1)[0]);
  storeCurrentDeck(prefix, deck);
};

export const getOrCreateCurrentDeck = (prefix, cards, reset = false) => {
  let deck = getCurrentDeck(prefix);
  if (!deck || reset) {
    console.log(`Creating New ${prefix} Deck`);
    // Clone all the cards so that we aren't modifying original objects
    const clonedCard = JSON.parse(JSON.stringify(cards));
    // Add Deck Card Id so that each card in the deck has a unique value
    clonedCard.forEach((c) => (c.deck_card_id = uuidv4()));
    deck = shuffle(clonedCard);
    store.set(`${prefix}-history`, []);
    storeCurrentDeck(prefix, deck);
  }
  return deck;
};

export const getCurrentDeck = (prefix) => {
  return store.get(`${prefix}-deck`);
};

export const storeCurrentDeck = (prefix, deck) => {
  return store.set(`${prefix}-deck`, deck);
};

export const drawCard = (prefix) => {
  const deck = getCurrentDeck(prefix);
  const card = deck?.shift();
  if (card) {
    updateHistory(prefix, card);
  }
  storeCurrentDeck(prefix, deck);
  return card;
};

export const updateHistory = (prefix, card) => {
  const history = store.get(`${prefix}-history`);
  history.push(card);
  store.set(`${prefix}-history`, history);
};

export const getHistory = (prefix, card) => {
  return store.get(`${prefix}-history`);
};

export const undoDraw = (prefix) => {
  const history = store.get(`${prefix}-history`);
  const card = history.pop();
  if (card) {
    addCardsToTop(prefix, [card]);
  }
  store.set(`${prefix}-history`, history);
  return history[history.length - 1];
};

export const addCardsToTop = (prefix, topCards) => {
  const deck = getCurrentDeck(prefix);
  storeCurrentDeck(prefix, topCards.concat(deck));
};

export const addCardsToBottom = (prefix, bottomCards) => {
  const deck = getCurrentDeck(prefix);
  storeCurrentDeck(prefix, deck.concat(bottomCards));
};

export const deckSize = (prefix) => {
  return getCurrentDeck(prefix).length;
};

export const findCard = (prefix, card) => {
  return findCardByDeckCardId(prefix, card.deck_card_id);
};

export const findCardByDeckCardId = (prefix, deckCardId) => {
  const deck = getCurrentDeck(prefix);
  return deck.find((c) => c.deck_card_id === deckCardId);
};

export const findAndPutOnTop = (prefix, deckCardId) => {
  const tmpCard = findCardByDeckCardId(prefix, deckCardId);

  if (tmpCard) {
    removeCards(prefix, [tmpCard]);
    addCardsToTop(prefix, [tmpCard]);
  }
};

export const findAndPutOnBottom = (prefix, deckCardId) => {
  const tmpCard = findCardByDeckCardId(prefix, deckCardId);

  if (tmpCard) {
    removeCards(prefix, [tmpCard]);
    addCardsToBottom(prefix, [tmpCard]);
  }
};

export const removeCards = (prefix, cardsToRemove) => {
  const deck = getCurrentDeck(prefix);
  const filteredDeck = deck.filter(
    (c) => !cardsToRemove.find((r) => r.deck_card_id === c.deck_card_id)
  );
  storeCurrentDeck(prefix, filteredDeck);
};

export const revealCards = (prefix, numReveal, onlyPlanes = false) => {
  const revealedCards = [];
  const deck = getCurrentDeck(prefix);
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

export const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
