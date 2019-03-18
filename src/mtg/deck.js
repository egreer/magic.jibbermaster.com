import store from "store";

export const getOrCreateCurrentDeck = (prefix, cards, reset = false) => {
  let deck = getCurrentDeck(prefix);
  if (!deck || reset) {
    console.log(`Creating New ${prefix} Deck`);
    deck = shuffle(cards);
    store.set(`${prefix}-history`, []);
    storeCurrentDeck(prefix, deck);
  }
  return deck;
};

export const getCurrentDeck = prefix => {
  return store.get(`${prefix}-deck`);
};

export const storeCurrentDeck = (prefix, deck) => {
  return store.set(`${prefix}-deck`, deck);
};

export const drawCard = prefix => {
  const deck = getCurrentDeck(prefix);
  const card = deck.shift();
  updateHistory(prefix, card);
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

export const undoDraw = prefix => {
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

export const deckSize = prefix => {
  return getCurrentDeck(prefix).length;
};

export const findCard = (prefix, card) => {
  return findCardById(prefix, card.id);
};

export const findCardById = (prefix, cardId) => {
  const deck = getCurrentDeck(prefix);
  return deck.find(c => c.id === cardId);
};

export const findAndPutOnTop = (prefix, cardId) => {
  const tmpCard = findCardById(cardId);

  if (tmpCard) {
    removeCards(prefix, [tmpCard]);
    addCardsToTop(prefix, [tmpCard]);
  }
};

export const findAndPutOnBottom = (prefix, cardId) => {
  const tmpCard = findCardById(cardId);

  if (tmpCard) {
    removeCards(prefix, [tmpCard]);
    addCardsToBottom(prefix, [tmpCard]);
  }
};

export const removeCards = (prefix, cardsToRemove) => {
  const deck = getCurrentDeck(prefix);
  const filteredDeck = deck.filter(
    c => !cardsToRemove.find(r => r.id === c.id)
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

export const shuffle = array => {
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

// 	function showHistory(){
// 		foreach( $_SESSION[ $this->prefix . 'history'] as $card){
// 			echo Card::displayHoverCardName($card, '', 'card');
// 		}
//
// 	}
//
// 	function showRemainingCards(){
// 		foreach(  $_SESSION[ $this->prefix . 'deck'] as $card){
// 		 echo Card::displayHoverCardName($card, $classes='');
// 		}
// 	}
