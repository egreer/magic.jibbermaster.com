import React, { Component } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import back from "../../images/archenemy-back.jpg";
import { Counter } from "./Counter";
import "./planes.scss";

import { hasCustomProperty } from "../../mtg/card.js";
import { getSetting } from "../../util/settings.js";

export class Scheme extends Component {
  state = {
    modalOpen: false
  };

  toggleModal = () => {
    console.log("Toggle Modal");
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const { listDisplay, card, children } = this.props;
    if (listDisplay) {
      return (
        <>
          <ListGroup.Item variant="dark" onClick={this.toggleModal}>
            {card.name}
          </ListGroup.Item>
          <Modal
            show={this.state.modalOpen}
            onHide={this.toggleModal}
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
  }

  renderChildren() {
    const { children } = this.props;
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

  renderImage() {
    const displayImages = getSetting("displayImages");
    if (displayImages) {
      return (
        <Card.Img
          variant="top"
          width="100%"
          src={this.imageURI()}
          className="mtg-card mtg-card-scheme"
        />
      );
    }
  }

  imageURI() {
    const { card } = this.props;
    if (card) {
      return card.image_uris["large"];
    } else {
      return back;
    }
  }
}
