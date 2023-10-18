import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MtgCard } from "./magic/Card";

export const RandomCardModal = ({
  additionalCards,
  onHide,
  close,
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
            <i className={`flip-x ${randomTokenProps.symbol} mx-1 mx-md-4`} />
            {randomTokenProps.text}
            <i className={`${randomTokenProps.symbol} mx-1 mx-md-4`} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {additionalCards.map((c) => (
            <MtgCard card={c} key={c.id} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="info"
            className="w-100"
            aria-label="Close"
            onClick={close}
          >
            {closeText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return null;
};
