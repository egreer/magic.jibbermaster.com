import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  CardFooter,
  ListGroupItem,
  Modal,
  ModalBody,
  Button
} from "reactstrap";
import { gathererImageURL } from "../../mtg/card";
import back from "../../images/planechase-back.jpg";

import "./planes.scss";

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
        <Card inverse>
          <CardBody>
            {this.renderImage()}
            {this.renderText()}
          </CardBody>
          <CardFooter>{this.renderActions()}</CardFooter>
        </Card>
      );
    }
  }

  renderActions() {
    const { card } = this.props;
    if (card) {
      return (
        <a
          href={card.related_uris["gatherer"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatherer
        </a>
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
        <CardImg top width="100%" src={this.imageURI()} className="mtg-card" />
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
