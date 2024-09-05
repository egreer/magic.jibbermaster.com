import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { MtgCard } from "../../components/magic/Card";

export const PickHikePlaneModal = ({
  pickPlaneCards,
  pickChaosCards,
  open,
  onHide,
  onSelect,
}) => {
  if (pickPlaneCards && open) {
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
        <Modal.Body className="d-grid gap-0 bg-dark">
          {pickPlaneCards.map((planeCard, i) => {
            const chaosCard = pickChaosCards[i];

            return (
              <React.Fragment key={planeCard.deck_card_id}>
                <Row className="my-4 text-center">
                  <Col xs={6}>
                    <i className="ms ms-planeswalker ms-4x ms-mechanic mb-3" />
                    <MtgCard
                      card={planeCard}
                      displayTextWhenRotated={true}
                      displayHikeErrata={true}
                    />
                  </Col>
                  <Col xs={6}>
                    <i className="ms ms-chaos ms-4x ms-mechanic mb-3" />
                    <MtgCard
                      card={chaosCard}
                      displayTextWhenRotated={true}
                      displayHikeErrata={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Button
                    onClick={() => onSelect(planeCard, chaosCard)}
                    variant="primary"
                    className="btn-translucent"
                    size="lg"
                  >
                    <i className="ms ms-planeswalker mx-2" />
                    <span className="mx-2">Planeswalk</span>
                  </Button>
                </Row>
              </React.Fragment>
            );
          })}
        </Modal.Body>
      </Modal>
    );
  }

  return null;
};
