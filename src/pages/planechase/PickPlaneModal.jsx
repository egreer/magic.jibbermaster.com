import { Button, Modal } from "react-bootstrap";
import { Plane } from "../../components/magic/Plane";

export const PickPlaneModal = ({ pickCards, open, onHide, onSelect }) => {
  if (pickCards && open) {
    return (
      <Modal
        show={!!open}
        size="lg"
        dialogClassName="bg-secondary"
        variant="secondary"
        backdrop={true}
        onHide={onHide}
      >
        <Modal.Header className="justify-content-center text-white noselect">
          <Modal.Title>
            <i className="ms ms-planeswalker mx-2" />
            Pick a Plane to Planeswalk To
            <i className="ms ms-planeswalker mx-2" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-grid gap-0">
          {pickCards.map((c) => (
            <Plane card={c} key={c.deck_card_id}>
              <Button
                onClick={() => onSelect(c)}
                variant="primary"
                className="btn-translucent"
                size="lg"
              >
                <i className="ms ms-planeswalker mx-2" />
                <span className="mx-2">Planeswalk</span>
              </Button>
            </Plane>
          ))}
        </Modal.Body>
      </Modal>
    );
  }

  return null;
};
