import pluralize from "pluralize";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { MtgCard } from "./magic/Card";

export const CardTypeListModal = ({
  onHide,
  onSelect,
  open,
  randomTokenProps,
  fetchCards,
}) => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCards = async () => {
      setCards(await fetchCards());
    };
    getCards();
  }, [setCards, fetchCards]);

  const filteredCards = cards.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase() || "")
  );

  if (cards && open) {
    return (
      <Modal
        show={!!open}
        onHide={onHide}
        size="lg"
        dialogClassName="bg-secondary"
        variant="secondary"
        backdrop={true}
      >
        <Modal.Header className="justify-content-center text-white noselect">
          <Modal.Title>
            <i className={`flip-x ${randomTokenProps.symbol} mx-1 mx-md-4`} />
            {randomTokenProps.text}
            <i className={`${randomTokenProps.symbol} mx-1 mx-md-4`} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Search..."
            value={search}
            onChange={(a) => setSearch(a.target.value)}
          />
          <p className="text-right text-light">
            {pluralize("Match", filteredCards?.length ?? 0, true)}
          </p>
          <Row>
            {filteredCards?.map((card) => (
              <Col md={6} key={card.id}>
                <MtgCard card={card} displayChildrenBelow={false}>
                  <Button
                    onClick={() => onSelect({ card })}
                    variant="info"
                    size="lg"
                    className="btn-translucent"
                  >
                    <h2 className="mb-0">
                      <i className={`${randomTokenProps.symbol} mx-2`} />
                      <span className="mx-2 d-none d-md-inline">
                        {randomTokenProps.action}
                      </span>
                    </h2>
                  </Button>
                </MtgCard>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    );
  }

  return null;
};
