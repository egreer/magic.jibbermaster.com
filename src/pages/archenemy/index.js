import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroupItem,
  ListGroup
} from "reactstrap";
import { ArchenemyHelmet } from "./Helmet";
import { getDeckList, getCardList } from "../../mtg/prebuilt-decks";

export class Archenemy extends Component {
  render() {
    return (
      <div className="App">
        <ArchenemyHelmet />
        Archenemy
        {this.renderPrebuilts()}
      </div>
    );
  }

  renderPrebuilts() {
    const prebuilts = getDeckList();
    const prebuiltItems = prebuilts.map((prebuilt, i) => {
      const cardList = getCardList(prebuilt);
      const cardListIems = cardList.map((card, i) => (
        <ListGroupItem key={i}>{card}</ListGroupItem>
      ));
      return (
        <Card key={i}>
          <CardBody>
            <CardTitle>{prebuilt}</CardTitle>
            <ListGroup>{cardListIems}</ListGroup>
          </CardBody>
        </Card>
      );
    });
    return <div>{prebuiltItems}</div>;
  }
}
