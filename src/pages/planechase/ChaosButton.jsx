import { Button } from "react-bootstrap";
import { hasCustomProperty } from "../../mtg/card.js";

export const ChaosButton = ({ card, onClick }) => {
  const hasChaos = hasCustomProperty("chaos-trigger", card);
  if (hasChaos) {
    return (
      <Button
        onClick={() => onClick(card)}
        variant="info"
        size="lg"
        className="btn-translucent"
      >
        <i className="ms ms-chaos ms-2x mx-2" />
        <span className="mx-2 d-none d-md-inline">Trigger Chaos</span>
      </Button>
    );
  }
  return null;
};
