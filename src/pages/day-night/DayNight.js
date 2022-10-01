import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DoubleFaceButton } from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { useLocalState } from "../../hooks/useLocalState";
import { fetchCard } from "../../util/api";

export const DayNight = () => {
  const [nightTime, setNightTime] = useLocalState("day-night", false);
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetch = async () =>
      setCard(await fetchCard("dc26e13b-7a0f-4e7f-8593-4f22234f4517"));
    fetch();
  }, [setCard]);

  const toggle = (
    <DoubleFaceButton
      enabled={!nightTime}
      onClick={() => setNightTime(!nightTime)}
      text={nightTime ? "Nightbound" : "Daybound"}
      highlight={true}
      className="my-3"
    />
  );

  return (
    <Container>
      <Row>
        <Col sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
          {toggle}
          {card &&
            (nightTime ? (
              <MtgCard card={card.card_faces[1]} />
            ) : (
              <MtgCard card={card.card_faces[0]} />
            ))}
          {toggle}
        </Col>
      </Row>
    </Container>
  );
};
