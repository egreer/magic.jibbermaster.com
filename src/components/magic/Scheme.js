import React, { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import back from "../../images/archenemy-back.jpg";
import { Counter } from "./Counter";
import "./planes.scss";

import { hasCustomProperty } from "../../mtg/card.js";
import { CardText } from "./Card";
import cn from "classnames";
import { useSettings } from "../../hooks/useSettings";

export const Scheme = ({ listDisplay, card, displayActions, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const settings = useSettings();
  const { displayImages, displayGatherer } = settings;

  const hasCounters = hasCustomProperty("counter", card);
  const emptyChildren = children?.type === null;

  const imageURI = card?.image_uris["large"] || back;

  const counter = displayActions && hasCounters && <Counter card={card} />;

  const image = displayImages && (
    <Card.Img
      variant="top"
      width="100%"
      src={imageURI}
      className="mtg-card mtg-card-scheme"
    />
  );
  const toggleModal = () => {
    setModalOpen(isOpen => !isOpen);
  };

  const renderBody = () => {
    const text = CardText({ card });
    const hasBody = !!text;

    return hasBody && <Card.Body>{text}</Card.Body>;
  };

  const renderActions = () => {
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

  const renderComponents = () => {
    if (displayImages) {
      return (
        <Card.ImgOverlay
          className={cn("text-center scheme-overlay", {
            "child-overlay": !emptyChildren,
            "counter-overlay": emptyChildren && hasCounters
          })}
        >
          <Card.Title className="text-center pt-5 mt-sm-5">
            {counter}
            {children}
          </Card.Title>
        </Card.ImgOverlay>
      );
    } else {
      return (
        <Card.Body className="text-center pb-0">
          {counter}
          {children}
        </Card.Body>
      );
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
        {image}
        {renderComponents()}
        {renderBody()}
        {renderActions()}
      </Card>
    );
  }
};
