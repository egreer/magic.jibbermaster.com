import { Card } from "react-bootstrap";

const deckIcon = (name, type = "ss-mythic ss-grad") => {
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
};
export const DeckCardTitle = ({ name }) => (
  <Card.Title className="d-flex">
    <div className="h3 text-center align-self-center">{deckIcon(name)}</div>
    <div className="flex-grow-1">
      <h3 className="text-center">{name}</h3>
    </div>
    <div className="h3 text-center align-self-center">{deckIcon(name)}</div>
  </Card.Title>
);
