import { useState } from "react";
import { Button, Fade, ListGroup } from "react-bootstrap";

export const History = ({ history, CardType }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="my-2">
      <Button
        onClick={() => setShowHistory(!showHistory)}
        variant="secondary"
        className="w-100"
      >
        {showHistory ? "Hide" : "Show"} History
      </Button>
      <Fade in={showHistory}>
        <div>
          {showHistory && history && (
            <ListGroup>
              {history.map((p) => (
                <CardType card={p} key={p.deck_card_id} listDisplay={true} />
              ))}
            </ListGroup>
          )}
        </div>
      </Fade>
    </div>
  );
};
