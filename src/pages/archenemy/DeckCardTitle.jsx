import { Card } from "react-bootstrap";
import { DeckIcon } from "./DeckIcon";

export const DeckCardTitle = ({ name }) => (
  <Card.Title className="d-flex">
    <div className="h3 text-center align-self-center">
      <DeckIcon name={name}></DeckIcon>
    </div>
    <div className="flex-grow-1">
      <h3 className="text-center">{name}</h3>
    </div>
    <div className="h3 text-center align-self-center">
      <DeckIcon name={name}></DeckIcon>
    </div>
  </Card.Title>
);
