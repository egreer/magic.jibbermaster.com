import pluralize from "pluralize";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { MtgCard } from "../../components/magic/Card";
import { getAllAttractionsCards } from "../../util/api";

export const AttractionListModal = ({
  onHide,
  onSelect,
  open,
  randomTokenProps,
}) => {
  const [attractions, setAttractions] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getAttractions = async () => {
      setAttractions(await getAllAttractionsCards());
    };
    getAttractions();
  }, [setAttractions]);

  const filteredAttractions = attractions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase() || "")
  );

  if (attractions && open) {
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
            {pluralize("Match", filteredAttractions?.length ?? 0, true)}
          </p>
          <Row>
            {filteredAttractions?.map((card) => (
              <Col md={6} key={card.id}>
                <MtgCard card={card} displayChildrenBelow={false}>
                  <Button
                    onClick={() => onSelect({ card })}
                    variant="primary"
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
