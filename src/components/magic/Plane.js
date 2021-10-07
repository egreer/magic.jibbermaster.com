import React, { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import ReactDOMServer from "react-dom/server";
import { gathererImageURL } from "../../mtg/card";
import back from "../../images/planechase-back.jpg";
import { Counter } from "./Counter";
import "./planes.scss";

import { hasCustomProperty } from "../../mtg/card.js";
import { CardText } from "./CardText";
import cn from "classnames";
import { useSettings } from "../../hooks/useSettings";
import { CardLinks } from "./CardLinks";

export const Plane = ({ listDisplay, card, displayActions, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const { displayImages } = useSettings();

  const hasCounters = hasCustomProperty("counter", card);
  const emptyChildren = !Boolean(ReactDOMServer.renderToStaticMarkup(children));

  // Use Scryfall and rotate or use Gatherer
  // scryfall (rotated) card.image_uris["border_crop"]
  const imageURI = card ? gathererImageURL(card) : back;

  const counter = displayActions && hasCounters && <Counter card={card} />;

  const toggleModal = () => {
    console.log("Toggle Modal");
    setModalOpen((isOpen) => !isOpen);
  };

  const toggleFullScreen = () => {
    console.log("Toggle FullScreen");
    setFullscreen((isFullscreen) => !isFullscreen);
  };

  const renderBody = () => {
    const text = CardText({ card });
    const hasBody = !!text;

    return hasBody && <Card.Body>{text}</Card.Body>;
  };

  const renderCardImage = () => (
    <Card.Img
      variant="top"
      width="100%"
      src={imageURI}
      className="mtg-card mtg-card-plane"
    />
  );

  const renderImage = () => {
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

  const renderComponents = () => {
    if (displayImages) {
      return (
        <Card>
          <Card.ImgOverlay
            className={cn("text-center plane-overlay", {
              "child-overlay": !emptyChildren,
              "counter-overlay": emptyChildren && hasCounters,
            })}
          >
            <Card.Title className="text-center">
              {counter}
              {children}
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
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
        {renderComponents()}
        {renderBody()}
        <CardLinks card={card} />
      </Card>
    );
  }
};
