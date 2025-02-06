import { useCallback, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { DoubleFaceHighlightButton } from "../../components/magic/Buttons";
import { hasCustomProperty } from "../../mtg/card";
import { CustomDeckBuilder } from "./CustomDeckBuilder";
import { DeckCardTitle } from "./DeckCardTitle";
import { Prebuilts } from "./Prebuilts";

export const DeckSelect = ({ schemes, onSelectDeck }) => {
  const [commander, setCommander] = useState(true);
  const [sharedLife, setSharedLife] = useState(false);

  const useAll = useCallback(() => {
    const filteredSchemes =
      commander && !sharedLife
        ? schemes
        : schemes.filter(
            (s) =>
              !(
                (!commander && hasCustomProperty("commander", s)) ||
                (sharedLife && hasCustomProperty("shared-life", s))
              )
          );

    onSelectDeck("All", filteredSchemes);
  }, [commander, sharedLife, onSelectDeck, schemes]);

  return (
    <>
      <Card className="noselect" bg="black" text="white">
        <Card.Body>
          <DeckCardTitle name={"All Schemes"} />
          <Row className="mb-1">
            <Col>
              <DoubleFaceHighlightButton
                text="Commander"
                onClick={() => setCommander(!commander)}
                enabled={commander}
              />
            </Col>
            <Col>
              <DoubleFaceHighlightButton
                text="Shared Life"
                onClick={() => setSharedLife(!sharedLife)}
                enabled={sharedLife}
              />
            </Col>
          </Row>
          <Button className="fill-100" variant="success" onClick={useAll}>
            Use All
          </Button>
        </Card.Body>
      </Card>
      <Prebuilts schemes={schemes} onSelectDeck={onSelectDeck} />
      <CustomDeckBuilder schemes={schemes} onSelectDeck={onSelectDeck} />
    </>
  );
};
