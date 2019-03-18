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

export class Plane extends Component {
  state = {
    modalOpen: false
  };

  toggleModal = () => {
    console.log("Toggle Modal");
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const { listDisplay, card } = this.props;
    if (listDisplay) {
      return (
        <>
          <ListGroupItem color="dark" onClick={this.toggleModal}>
            {card.name}
          </ListGroupItem>
          <Modal
            isOpen={this.state.modalOpen}
            toggle={this.toggleModal}
            size="md"
            backdrop={true}
          >
            <ModalBody className="p-0" centered="true">
              <Plane card={card} />
            </ModalBody>
          </Modal>
        </>
      );
    } else {
      return (
        <Card inverse className="mtg-plane-card">
          {this.renderImage()}

          <CardBody>
            {this.renderCounter()}
            {this.renderChildren()}
            {this.renderText()}
          </CardBody>
          {this.renderActions()}
        </Card>
      );
    }
  }

  renderCounter() {
    const { card, renderActions, hideImage } = this.props;
    const hasCounters = hasCustomProperty("counter", card);
    if (renderActions && hasCounters) {
      if (hideImage) {
        return (
          <div className="text-center">
            <Counter card={card} />
          </div>
        );
      } else {
        return (
          <CardImgOverlay className="text-center">
            <CardTitle className="text-center pt-5 mt-sm-5">
              <Counter card={card} />
            </CardTitle>
          </CardImgOverlay>
        );
      }
    }
  }

  renderChildren() {
    const { children, hideImage } = this.props;
    if (children) {
      if (hideImage) {
        return <div className="text-center">{children}</div>;
      } else {
        return (
          <CardImgOverlay className="text-center">
            <CardTitle className="text-center pt-5 mt-sm-5">
              {children}
            </CardTitle>
          </CardImgOverlay>
        );
      }
    }
  }

  renderActions() {
    const { card } = this.props;
    if (false && card) {
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
    const { card, displayText } = this.props;
    if (displayText) {
      if (card) {
        return (
          <>
            <CardTitle>{card.name}</CardTitle>
            <CardSubtitle>{card.type_line}</CardSubtitle>
            <CardText>{card.oracle_text}</CardText>
          </>
        );
      } else {
        return <CardTitle>None</CardTitle>;
      }
    }
  }

  renderImage() {
    const { hideImage } = this.props;
    if (!hideImage) {
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
