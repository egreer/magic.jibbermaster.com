import store from "store";

export const getCurrentCard = prefix => {
  return store.get(`${prefix}-currentCard`);
};

export const setCurrentCard = (prefix, card) => {
  return store.set(`${prefix}-currentCard`, card);
};

export const getRevealedCards = prefix => {
  return store.get(`${prefix}-revealedCards`);
};

export const setRevealedCards = (prefix, cards) => {
  return store.set(`${prefix}-revealedCards`, cards);
};

export const getAdditionalCards = prefix => {
  return store.get(`${prefix}-additionalCards`);
};

export const setAdditionalCards = (prefix, cards) => {
  return store.set(`${prefix}-additionalCards`, cards);
};

export const getScryCards = prefix => {
  return store.get(`${prefix}-scryCards`);
};

export const setScryCards = (prefix, cards) => {
  return store.set(`${prefix}-scryCards`, cards);
};

export const hasCustomProperty = (property, card) => {
  return card && card.customProperties.find(p => p.name === property);
};

export const getCounterType = card => {
  const property = card.customProperties.find(p => p.name === "counter");
  return property.type;
};

export const gathererImageURL = card => {
  return `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${
    card.multiverse_ids[0]
  }&type=card`;
};
