import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Plane } from "../../components/magic/Plane";

export const ScryModal = ({ scryCards, open, onScryTop, onScryBottom }) => {
  if (scryCards && open) {
    return (
      <Modal
        show={!!open}
        size="md"
        dialogClassName="bg-secondary"
        variant="secondary"
        backdrop="static"
      >
        <Modal.Header className="justify-content-center text-white noselect">
          <Modal.Title>
            <i className="ms ms-chaos mx-4" />
            Scry Card
            <i className="ms ms-chaos mx-4" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-grid gap-0">
          <Button variant="info" onClick={onScryTop}>
            Top
          </Button>
          {scryCards.map((c) => (
            <Plane card={c} key={c.deck_card_id} />
          ))}
          <Button variant="info" onClick={onScryBottom}>
            Bottom
          </Button>
        </Modal.Body>
      </Modal>
    );
  }

  return null;
};
