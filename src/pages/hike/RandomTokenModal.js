import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MtgCard } from "../../components/magic/Card";

export const RandomTokenModal = ({
  additionalCards,
  onHide,
  open,
  randomTokenProps,
  closeText = "Done",
}) => {
  if (additionalCards && open && randomTokenProps) {
    return (
      <Modal
        show={!!open}
        onHide={onHide}
        size="md"
        dialogClassName="bg-secondary"
        variant="secondary"
        backdrop={true}
      >
        <Modal.Header className="justify-content-center text-white noselect">
          <Modal.Title>
            <i className={randomTokenProps.symbol} />
            {randomTokenProps.text}
            <i className={randomTokenProps.symbol} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {additionalCards.map((c) => (
            <MtgCard card={c} key={c.id} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" block aria-label="Close" onClick={onHide}>
            {closeText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return null;
};
