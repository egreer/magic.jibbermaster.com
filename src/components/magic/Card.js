import React, { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import { Textfit } from "react-textfit";
import classicBack from "../../images/classic-back.jpg";
import arenaBack from "../../images/arena-back.png";
import blankFront from "../../images/blank-front.png";
import { Counter } from "./Counter";
import "./planes.scss";

import { hasCustomProperty, rotatedLayout } from "../../mtg/card.js";
import { CardText } from "./CardText";
import cn from "classnames";
import { useSettings } from "../../hooks/useSettings";
import { createMarkup } from "../../util/api";

export const MtgCard = ({
  listDisplay,
  card,
  displayActions,
  children,
  altBack = false
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const settings = useSettings();
  const { displayImages, displayGatherer } = settings;

  const hasCounters = hasCustomProperty("counter", card);
  const errata = hasCustomProperty("errata", card);
  const token = hasCustomProperty("token", card);
  const phenomenon = hasCustomProperty("phenomenon", card);
  const chaosomenon = hasCustomProperty("chaosomenon", card);
  const emptyChildren = children?.type === null;

  const back = altBack ? arenaBack : classicBack;
  const cardStyle = rotatedLayout(card)
    ? { transform: "rotate(90deg) scale(0.7) translate(-50%)" }
    : {};
  const isBlank = card?.show_blank;
  const imageURI = card
    ? isBlank
      ? blankFront
      : card.image_uris.border_crop
    : back;

  const counter = displayActions && hasCounters && <Counter card={card} />;

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

    return (
      hasBody && (
        <Card>
          <Card.Body>{text}</Card.Body>
        </Card>
      )
    );
  };

  const renderAdditionalProps = () => {
    const hasErrata = !!errata;
    const hasToken = !!token;
    const isPhenomenon = !!phenomenon;
    const isChaosomenon = !!chaosomenon;
    const errataHtml = createMarkup(errata?.text);

    return (
      (hasErrata || hasToken || isPhenomenon || isChaosomenon) && (
        <Card>
          <Card.Body>
            {isPhenomenon && (
              <Card.Text className="h5 font-italic">
                <i className="ss ss-fw ss-2x ss-fut mx-2"></i>Phenomenon -
                Planes Hike away after encountering this.
              </Card.Text>
            )}
            {chaosomenon && (
              <Card.Text className="h5 font-italic">
                <i className="ms ms-fw ms-2x ms-phenomenon mx-2"></i>Chaosomenon
                - Chaos Hike away after triggering this.
              </Card.Text>
            )}
            {hasToken && (
              <Card.Text className="h5 font-italic">
                Create {token.count} {card.name} Token
              </Card.Text>
            )}
            {hasErrata && (
              <Card.Text
                className="h5 font-italic"
                dangerouslySetInnerHTML={{ __html: errataHtml }}
              ></Card.Text>
            )}
          </Card.Body>
        </Card>
      )
    );
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

  const renderCardImage = () => (
    <Card.Img
      variant="top"
      width="100%"
      src={imageURI}
      className="mtg-card mtg-card-card no-border"
      style={cardStyle}
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

  const renderCustomText = () => {
    return (
      isBlank && (
        <>
          <div
            className="text-body text-left position-absolute d-flex align-items-center noselect"
            style={{
              top: "4%",
              left: "7%",
              fontSize: "clamp(10px, 3vw, 22px)",
              height: "5%",
              width: "90%"
            }}
          >
            <div className="text-nowrap">{card.name}</div>
          </div>
          <div
            className="h-100 noselect"
            style={{
              paddingTop: "12%",
              paddingLeft: "4%",
              paddingRight: "4%",
              paddingBottom: "22%",
              fontSize: "clamp(10px, 3vw, 30px)"
            }}
          >
            <Textfit mode="multi" style={{ height: "100%" }} max={30}>
              {card.oracle_text}
            </Textfit>
          </div>
          <div
            className="text-body position-absolute d-flex justify-content-center align-items-center noselect"
            style={{
              bottom: "10.5%",
              width: "100%",
              fontSize: "clamp(10px, 3vw, 22px)",
              marginLeft: "-1.25rem",
              height: "5%"
            }}
          >
            <div>{card.type_line}</div>
          </div>
        </>
      )
    );
  };

  const renderComponents = () => {
    if (displayImages) {
      return (
        <Card.ImgOverlay
          className={cn("text-center card-overlay", {
            "child-overlay": !emptyChildren && !isBlank,
            "counter-overlay": emptyChildren && hasCounters
          })}
        >
          <Card.Title className={cn("text-center", { "h-100": isBlank })}>
            {counter}
            {renderCustomText()}
            {children}
          </Card.Title>
        </Card.ImgOverlay>
      );
    } else {
      return (
        <Card.Body className="text-center pb-0">
          {counter}
          {renderCustomText()}
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
            <Card card={card} />
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Card bg="black" text="light" className="mtg-standard-card">
          {renderImage()}
          {renderComponents()}
          {renderActions()}
        </Card>
        {renderAdditionalProps()}
        {renderBody()}
      </>
    );
  }
};
