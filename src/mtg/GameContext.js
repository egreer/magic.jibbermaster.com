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
  const [scryCards, setScryCards] = useLocalState(`${prefix}-scryCards`, []);

  const clearCurrentCard = () => setCurrentCard(null);
  const clearRevealedCards = () => setRevealedCards([]);
  const clearAdditionalCards = () => setAdditionalCards([]);
  const clearScryCards = () => setScryCards([]);
  const reset = () => {
    clearCurrentCard();
    clearRevealedCards();
    clearAdditionalCards();
    clearScryCards();
  };

  return (
    <GameContext.Provider
      value={{
        prefix,
        currentCard,
        revealedCards,
        additionalCards,
        scryCards,
        setCurrentCard,
        setRevealedCards,
        setAdditionalCards,
        setScryCards,
        clearCurrentCard,
        clearRevealedCards,
        clearAdditionalCards,
        clearScryCards,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
