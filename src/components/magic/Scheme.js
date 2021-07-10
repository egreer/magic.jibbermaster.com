import React, { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import back from "../../images/archenemy-back.jpg";
import { Counter } from "./Counter";
import "./planes.scss";

import { hasCustomProperty } from "../../mtg/card.js";
import { getSetting } from "../../util/settings.js";
import { CardText } from "./Card";

export const Scheme = ({ listDisplay, card, displayActions, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(isOpen => !isOpen);
  };

  const renderBody = () => {
    const text = CardText({ card });
    const hasBody = !!text;

    return hasBody && <Card.Body>{text}</Card.Body>;
  };

  const renderCounter = () => {
    const displayImages = getSetting("displayImages");
    const hasCounters = hasCustomProperty("counter", card);
    if (displayActions && hasCounters) {
      if (displayImages) {
        return (
          <Card.ImgOverlay className="text-center scheme-overlay counter-overlay">
            <Card.Title className="text-center pt-5 mt-sm-5">
              <Counter card={card} />
            </Card.Title>
          </Card.ImgOverlay>
        );
      } else {
        return (
          <Card.Body className="text-center pb-0">
            <Counter card={card} />
          </Card.Body>
        );
      }
    }
  };

  const renderChildren = () => {
    const displayImages = getSetting("displayImages");
    if (children) {
      if (displayImages) {
        return (
          <Card.ImgOverlay className="text-center scheme-overlay child-overlay">
            <Card.Title className="text-center pt-5 mt-sm-5">
              {children}
            </Card.Title>
          </Card.ImgOverlay>
        );
      } else {
        return <Card.Body className="text-center pb-0">{children}</Card.Body>;
      }
    }
  };

  const renderActions = () => {
    const displayGatherer = getSetting("displayGatherer");
    if (displayGatherer && card) {
      return (
        <Card.Footer>
          <Card.Link
            href={card.related_uris["gatherer"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatherer
          </Card.Link>
        </Card.Footer>
      );
    }
  };

  const renderImage = () => {
    const displayImages = getSetting("displayImages");
    if (displayImages) {
      return (
        <Card.Img
          variant="top"
          width="100%"
          src={imageURI()}
          className="mtg-card mtg-card-scheme"
        />
      );
    }
  };

  const imageURI = () => {
    if (card) {
      return card.image_uris["large"];
    } else {
      return back;
    }
  };

  if (listDisplay) {
    return (
      <>
        <ListGroup.Item variant="dark" onClick={toggleModal}>
          {card.name}
        </ListGroup.Item>
        <Modal
          show={modalOpen}
          onHide={toggleModal}
          size="md"
          backdrop={true}
          dialogClassName="modal-content-no-border"
        >
          <Modal.Body className="p-0" centered="true">
            <Scheme card={card} />
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    return (
      <Card bg="black" text="light" className="mtg-scheme-card">
        {renderImage()}
        {renderCounter()}
        {renderChildren()}
        {renderBody()}
        {renderActions()}
      </Card>
    );
  }
};
