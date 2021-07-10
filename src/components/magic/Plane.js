import React, { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import { gathererImageURL } from "../../mtg/card";
import back from "../../images/planechase-back.jpg";
import { Counter } from "./Counter";
import "./planes.scss";

import { hasCustomProperty } from "../../mtg/card.js";
import { getSetting } from "../../util/settings.js";
import { CardText } from "./Card";

export const Plane = ({ listDisplay, card, displayActions, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const toggleModal = () => {
    console.log("Toggle Modal");
    setModalOpen(isOpen => !isOpen);
  };

  const toggleFullScreen = () => {
    console.log("Toggle FullScreen");
    setFullscreen(isFullscreen => !isFullscreen);
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
          <div onDoubleClick={toggleFullScreen}>
            <Card.ImgOverlay className="text-center plane-overlay counter-overlay">
              <Card.Title className="text-center">
                <Counter card={card} />
              </Card.Title>
            </Card.ImgOverlay>
          </div>
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
          <div onDoubleClick={toggleFullScreen}>
            <Card.ImgOverlay className="text-center plane-overlay child-overlay">
              <Card.Title className="text-center">{children}</Card.Title>
            </Card.ImgOverlay>
          </div>
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

  const renderCardImage = () => (
    <Card.Img
      variant="top"
      width="100%"
      src={imageURI()}
      className="mtg-card mtg-card-plane"
    />
  );

  const renderImage = () => {
    const displayImages = getSetting("displayImages");
    if (displayImages) {
      return (
        <>
          <div onDoubleClick={toggleFullScreen}>{renderCardImage()}</div>
          <Modal
            show={fullscreen}
            onHide={toggleFullScreen}
            backdrop={true}
            dialogClassName="modal-content-full bg-transparent"
            centered={true}
          >
            <Modal.Body
              className="p-0"
              centered="true"
              onClick={toggleFullScreen}
            >
              {renderCardImage()}
            </Modal.Body>
          </Modal>
        </>
      );
    }
  };

  const imageURI = () => {
    if (card) {
      // Use   Scryfall and rotate or use Gatherer
      // scryfall (rotated) card.image_uris["border_crop"]
      return gathererImageURL(card);
    } else {
      return back;
    }
  };

  if (listDisplay) {
    return (
      <>
        <ListGroup.Item variant="dark" onClick={toggleModal}>
          <div>{card.name}</div>
        </ListGroup.Item>
        <Modal
          show={modalOpen}
          onHide={toggleModal}
          size="md"
          backdrop={true}
          dialogClassName="modal-content-no-border"
        >
          <Modal.Body className="p-0" centered="true">
            <Plane card={card} />
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    return (
      <Card bg="black" text="light" className="mtg-plane-card">
        {renderImage()}
        {renderCounter()}
        {renderChildren()}
        {renderBody()}
        {renderActions()}
      </Card>
    );
  }
};
