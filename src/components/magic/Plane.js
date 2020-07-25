import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  CardFooter,
  ListGroupItem,
  Modal,
  ModalBody
} from "reactstrap";
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
          <ListGroupItem color="dark" onClick={this.toggleModal}>
            <div>{card.name}</div>
          </ListGroupItem>
          <Modal
            isOpen={this.state.modalOpen}
            toggle={this.toggleModal}
            size="md"
            backdrop={true}
            contentClassName="bg-secondary"
          >
            <ModalBody className="p-0" centered="true">
              <Plane card={card} />
              {children}
            </ModalBody>
          </Modal>
        </>
      );
    } else {
      return (
        <Card inverse className="mtg-plane-card">
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

    return hasBody && <CardBody>{text}</CardBody>;
  }

  renderCounter() {
    const { card, renderActions } = this.props;
    const displayImages = getSetting("displayImages");
    const hasCounters = hasCustomProperty("counter", card);
    if (renderActions && hasCounters) {
      if (displayImages) {
        return (
          <div onDoubleClick={this.toggleFullScreen}>
            <CardImgOverlay className="text-center plane-overlay counter-overlay">
              <CardTitle className="text-center">
                <Counter card={card} />
              </CardTitle>
            </CardImgOverlay>
          </div>
        );
      } else {
        return (
          <CardBody className="text-center pb-0">
            <Counter card={card} />
          </CardBody>
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
            <CardImgOverlay className="text-center plane-overlay child-overlay">
              <CardTitle className="text-center">{children}</CardTitle>
            </CardImgOverlay>
          </div>
        );
      } else {
        return <CardBody className="text-center pb-0">{children}</CardBody>;
      }
    }
  }

  renderActions() {
    const { card } = this.props;
    const displayGatherer = getSetting("displayGatherer");
    if (displayGatherer && card) {
      return (
        <CardFooter>
          <a
            href={card.related_uris["gatherer"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatherer
          </a>
        </CardFooter>
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
            <CardTitle>
              <h5>{card.name}</h5>
            </CardTitle>
            <CardSubtitle>{card.type_line}</CardSubtitle>
            <CardText dangerouslySetInnerHTML={card.oracle_html} />
          </>
        );
      } else {
        return <CardTitle>None</CardTitle>;
      }
    }
  }

  renderCardImage = () => (
    <CardImg
      top
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
            isOpen={this.state.fullscreen}
            toggle={this.toggleFullScreen}
            backdrop={true}
            contentClassName="bg-transparent"
            centered={true}
            modalClassName="modal-content-full"
          >
            <ModalBody
              className="p-0"
              centered="true"
              onClick={this.toggleFullScreen}
            >
              {this.renderCardImage()}
            </ModalBody>
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
