import React, { Component } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import { gathererImageURL } from "../../mtg/card";
import back from "../../images/planechase-back.jpg";
import { Counter } from "./Counter";
import "./planes.scss";

import { hasCustomProperty } from "../../mtg/card.js";
import { getSetting } from "../../util/settings.js";

export class Plane extends Component {
  state = {
    modalOpen: false,
    fullscreen: false
  };

  toggleModal = () => {
    console.log("Toggle Modal");
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  toggleFullScreen = () => {
    console.log("Toggle FullScreen");
    this.setState({ fullscreen: !this.state.fullscreen });
  };

  render() {
    const { listDisplay, card, children } = this.props;
    if (listDisplay) {
      return (
        <>
          <ListGroup.Item variant="dark" onClick={this.toggleModal}>
            <div>{card.name}</div>
          </ListGroup.Item>
          <Modal
            show={this.state.modalOpen}
            onHide={this.toggleModal}
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
          {this.renderImage()}
          {this.renderCounter()}
          {this.renderChildren()}
          {this.renderBody()}
          {this.renderActions()}
        </Card>
      );
    }
  }

  renderBody() {
    const text = this.renderText();
    const hasBody = text;

    return hasBody && <Card.Body>{text}</Card.Body>;
  }

  renderCounter() {
    const { card, renderActions } = this.props;
    const displayImages = getSetting("displayImages");
    const hasCounters = hasCustomProperty("counter", card);
    if (renderActions && hasCounters) {
      if (displayImages) {
        return (
          <div onDoubleClick={this.toggleFullScreen}>
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
  }

  renderChildren() {
    const { children } = this.props;
    const displayImages = getSetting("displayImages");
    if (children) {
      if (displayImages) {
        return (
          <div onDoubleClick={this.toggleFullScreen}>
            <Card.ImgOverlay className="text-center plane-overlay child-overlay">
              <Card.Title className="text-center">{children}</Card.Title>
            </Card.ImgOverlay>
          </div>
        );
      } else {
        return <Card.Body className="text-center pb-0">{children}</Card.Body>;
      }
    }
  }

  renderActions() {
    const { card } = this.props;
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
  }

  renderText() {
    const { card } = this.props;
    const displayText = getSetting("displayText");
    if (displayText) {
      if (card) {
        return (
          <>
            <Card.Title>
              <h5>{card.name}</h5>
            </Card.Title>
            <Card.Subtitle>{card.type_line}</Card.Subtitle>
            <Card.Text dangerouslySetInnerHTML={card.oracle_html} />
          </>
        );
      } else {
        return <Card.Title>None</Card.Title>;
      }
    }
  }

  renderCardImage = () => (
    <Card.Img
      variant="top"
      width="100%"
      src={this.imageURI()}
      className="mtg-card mtg-card-plane"
    />
  );

  renderImage() {
    const displayImages = getSetting("displayImages");
    if (displayImages) {
      return (
        <>
          <div onDoubleClick={this.toggleFullScreen}>
            {this.renderCardImage()}
          </div>
          <Modal
            show={this.state.fullscreen}
            onHide={this.toggleFullScreen}
            backdrop={true}
            dialogClassName="modal-content-full bg-transparent"
            centered={true}
          >
            <Modal.Body
              className="p-0"
              centered="true"
              onClick={this.toggleFullScreen}
            >
              {this.renderCardImage()}
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }

  imageURI() {
    const { card } = this.props;
    if (card) {
      // Use   Scryfall and rotate or use Gatherer
      // scryfall (rotated) card.image_uris["border_crop"]
      return gathererImageURL(card);
    } else {
      return back;
    }
  }
}
