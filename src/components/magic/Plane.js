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
          {this.renderBody()}
          {this.renderActions()}
        </Card>
      );
    }
  }

  renderBody() {
    const counter = this.renderCounter();
    const children = this.renderChildren();
    const text = this.renderText();
    const hasBody = counter || children || text;

    return (
      hasBody && (
        <CardBody>
          {counter}
          {children}
          {text}
        </CardBody>
      )
    );
  }

  renderCounter() {
    const { card, renderActions } = this.props;
    const displayImages = getSetting("displayImages");
    const hasCounters = hasCustomProperty("counter", card);
    if (renderActions && hasCounters) {
      if (displayImages) {
        return (
          <CardImgOverlay className="text-center">
            <CardTitle className="text-center pt-5 mt-sm-5">
              <Counter card={card} />
            </CardTitle>
          </CardImgOverlay>
        );
      } else {
        return (
          <div className="text-center">
            <Counter card={card} />
          </div>
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
          <CardImgOverlay className="text-center">
            <CardTitle className="text-center pt-5 mt-sm-5">
              {children}
            </CardTitle>
          </CardImgOverlay>
        );
      } else {
        return <div className="text-center">{children}</div>;
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
            <CardTitle>{card.name}</CardTitle>
            <CardSubtitle>{card.type_line}</CardSubtitle>
            <CardText dangerouslySetInnerHTML={card.oracle_html} />
          </>
        );
      } else {
        return <CardTitle>None</CardTitle>;
      }
    }
  }

  renderImage() {
    const displayImages = getSetting("displayImages");
    if (displayImages) {
      return (
        <CardImg
          top
          width="100%"
          src={this.imageURI()}
          className="mtg-card mtg-card-plane"
        />
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
