import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Plane } from "../../components/magic/Plane";
import { ChaosButton } from "./ChaosButton";

export const TripleChaosModal = ({
  open,
  revealedCards,
  onHide,
  chaosClick,
  close,
}) => {
  if (revealedCards && open) {
    const revealedPlanes = revealedCards.filter(
      (c) => c.type_line.search("Plane") >= 0
    );
    return (
      <Modal
        show={!!open}
        onHide={onHide}
        size="md"
        backdrop={true}
        dialogClassName="bg-secondary"
      >
        <Modal.Header className="flex-column text-center text-white noselect">
          <div className="modal-title h5 mx-auto">
            <i className="ms ms-chaos mr-1" />
            <i className="ms ms-chaos mr-1" />
            <i className="ms ms-chaos mr-1" />
            <span className="mx-1">Triple Chaos</span>
            <i className="ms ms-chaos ml-1" />
            <i className="ms ms-chaos ml-1" />
            <i className="ms ms-chaos ml-1" />
          </div>
          <div className="mx-auto">
            <small className="text-center">You Pick Order</small>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center">
          {revealedPlanes.map((c) => (
            <React.Fragment key={c.deck_card_id}>
              <Plane card={c}>
                <ChaosButton card={c} onClick={(c) => chaosClick(c)} />
              </Plane>
            </React.Fragment>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="info"
            className="w-100"
            aria-label="Close"
            onClick={close}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return null;
};
