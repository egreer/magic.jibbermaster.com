import React, { useContext } from "react";
import { useLocalState } from "../hooks/useLocalState";

export const GameContext = React.createContext({});
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ prefix = null, children }) => {
  const [currentCard, setCurrentCard] = useLocalState(
    `${prefix}-currentCard`,
    null
  );
  const [revealedCards, setRevealedCards] = useLocalState(
    `${prefix}-revealedCards`,
    []
  );
  const [additionalCards, setAdditionalCards] = useLocalState(
    `${prefix}-additionalCards`,
    []
  );
  const [ongoingCards, setOngoingCards] = useLocalState(
    `${prefix}-ongoingCards`,
    []
  );
  const [scryCards, setScryCards] = useLocalState(`${prefix}-scryCards`, []);

  const clearCurrentCard = () => setCurrentCard(null);
  const clearRevealedCards = () => setRevealedCards([]);
  const clearAdditionalCards = () => setAdditionalCards([]);
  const clearOngoingCards = () => setOngoingCards([]);
  const clearScryCards = () => setScryCards([]);
  const reset = () => {
    clearCurrentCard();
    clearRevealedCards();
    clearAdditionalCards();
    clearOngoingCards();
    clearScryCards();
  };

  return (
    <GameContext.Provider
      value={{
        prefix,
        currentCard,
        revealedCards,
        additionalCards,
        ongoingCards,
        scryCards,
        setCurrentCard,
        setRevealedCards,
        setAdditionalCards,
        setOngoingCards,
        setScryCards,
        clearCurrentCard,
        clearRevealedCards,
        clearAdditionalCards,
        clearOngoingCards,
        clearScryCards,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
