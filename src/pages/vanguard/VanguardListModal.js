import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import pluralize from "pluralize";
import { MtgCard } from "../../components/magic/Card";
import { getAllVanguardCards } from "../../util/api";

export const VanguardListModal = ({
  onHide,
  onSelect,
  open,
  randomTokenProps,
}) => {
  const [avatars, setAvatars] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getAvatars = async () => {
      setAvatars(await getAllVanguardCards());
    };
    getAvatars();
  }, [setAvatars]);

  const filteredAvatars = avatars.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase() || "")
  );

  if (avatars && open) {
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
            <i className={`flip-x ${randomTokenProps.symbol}`} />
            {randomTokenProps.text}
            <i className={randomTokenProps.symbol} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Search..."
            value={search}
            onChange={(a) => setSearch(a.target.value)}
          />
          <p className="text-right text-light">
            {pluralize("Match", filteredAvatars?.length ?? 0, true)}
          </p>
          <Row>
            {filteredAvatars?.map((card) => (
              <Col md={6} key={card.id}>
                <MtgCard card={card} displayChildrenBelow={false}>
                  <Button
                    onClick={() => onSelect({ card })}
                    variant="primary"
                    size="lg"
                    className="btn-translucent"
                  >
                    <h2 className="mb-0">
                      <i className={"ss ss-van ss-2x ss-grad ss-mythic mx-2"} />
                      <span className="mx-2 d-none d-md-inline">Select</span>
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
