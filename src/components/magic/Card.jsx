import cn from "classnames";
import React, { useCallback, useState } from "react";
import { Button, Card, Col, ListGroup, Modal, Row } from "react-bootstrap";
import { Textfit } from "react-textfit";
import { useSettings } from "../../hooks/useSettings";
import blankFront from "../../images/blank-front.png";
import {
  CLASSIC_BACK,
  hasCustomProperty,
  rotatedLayout,
  scryfallImageURL,
} from "../../mtg/card.js";
import { createMarkup } from "../../util/createMarkup";
import { reactToBool } from "../../util/react";
import { CardInputProp } from "./CardInputProp";
import { CardLinks } from "./CardLinks";
import { CardText } from "./CardText";
import { Counter } from "./Counter";
import { EmDashIcon } from "./Icons";
import { RandomChoice } from "./RandomChoice";
import { RandomToken } from "./RandomToken";
import { CoinFlip } from "./coin/CoinFlip";
import "./planes.scss";

export const MtgCard = React.forwardRef(
  (
    {
      listDisplay,
      card,
      displayActions,
      children,
      back = CLASSIC_BACK,
      displayChildrenBelow = true,
      displayHikeErrata = false,
      displayTextWhenRotated = false,
      displayTypeLine = false,
    },
    ref
  ) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const { displayImages } = useSettings();

    const toggleModal = useCallback(() => {
      console.log("Toggle Modal");
      setModalOpen((isOpen) => !isOpen);
    }, [setModalOpen]);

    const toggleFullScreen = useCallback(() => {
      console.log("Toggle FullScreen");
      setFullscreen((isFullscreen) => !isFullscreen);
    }, [setFullscreen]);

    const emptyChildren = !reactToBool(children);

    const hasCounters = hasCustomProperty("counter", card);
    const errata = displayHikeErrata && hasCustomProperty("errata", card);
    const token = hasCustomProperty("token", card);
    const phenomenon =
      displayHikeErrata && hasCustomProperty("phenomenon", card);
    const chaosomenon =
      displayHikeErrata && hasCustomProperty("chaosomenon", card);
    const chaosX = hasCustomProperty("chaos_x", card);
    const hasCoinFlip = hasCustomProperty("coin-flip", card);
    const hasRandomChoice = hasCustomProperty("random-choices", card);
    const hasInputPrompt = hasCustomProperty("input", card);
    const hasRandomToken = hasCustomProperty("random-token", card);
    const urlProp = hasCustomProperty("url", card);

    const isRotated = rotatedLayout(card);

    const text = CardText({
      card,
      showText: displayTextWhenRotated && isRotated,
    });

    const isBlank = card?.show_blank;
    const imageURI = card
      ? isBlank
        ? blankFront
        : scryfallImageURL(card)
      : back;

    const counter = displayActions && hasCounters && <Counter card={card} />;
    const coinFlip = displayActions && hasCoinFlip && <CoinFlip card={card} />;
    const inputPrompt = displayActions && hasInputPrompt && (
      <CardInputProp card={card} />
    );
    const randomChoice = displayActions && hasRandomChoice && (
      <RandomChoice card={card} />
    );
    const randomToken = displayActions && hasRandomToken && (
      <RandomToken card={card} />
    );

    const hasOverlayAbility =
      hasCounters ||
      hasCoinFlip ||
      hasRandomChoice ||
      hasRandomToken ||
      hasInputPrompt;

    const renderAbilities = () => (
      <>
        {counter}
        {coinFlip}
        {inputPrompt}
        {randomChoice}
        {randomToken}
      </>
    );

    const renderBody = () => {
      const hasBody = !!text;

      return (
        hasBody && (
          <Card text="light" bg="black">
            <Card.Body>{text}</Card.Body>
          </Card>
        )
      );
    };

    const RulesDivider = () => (
      <hr className="border-top border-dark mx-3 py-0" />
    );
    const RulesText = ({ children }) => (
      <>
        <Card.Text>{children}</Card.Text>
        <RulesDivider />
      </>
    );

    const renderAdditionalProps = () => {
      const hasChildren = !emptyChildren && displayChildrenBelow;
      const hasErrata = !!errata;
      const hasToken = !!token;
      const hasChaosX = !!chaosX;
      const hasUrl = !!urlProp;
      const isPhenomenon = !!phenomenon;
      const isChaosomenon = !!chaosomenon;
      const errataHtml = createMarkup(errata?.text);

      return (
        (hasChildren ||
          hasErrata ||
          hasToken ||
          hasChaosX ||
          hasUrl ||
          isPhenomenon ||
          isChaosomenon) && (
          <Card text="light" bg="black">
            <Card.Body className="px-1">
              {hasChildren && children}
              <RulesDivider />
              {isPhenomenon && (
                <RulesText>
                  <i className="ss ss-fw ss-2x ss-timeshifted ss-grad ss-fut mx-2"></i>
                  Phenomenon <EmDashIcon />
                  Planes Hike away after encountering this.
                </RulesText>
              )}
              {chaosomenon && (
                <RulesText>
                  <i className="ms ms-fw ms-2x ss-timeshifted ss-grad ms-phenomenon mx-2"></i>
                  Chaosomenon <EmDashIcon />
                  Chaos Hike away after triggering this.
                </RulesText>
              )}
              {hasToken && (
                <RulesText>
                  <i className="ms ms-fw ms-2x ss-uncommon ss-grad ms-token"></i>
                  <EmDashIcon />
                  Create{" "}
                  <strong>
                    {token.count} {card.name}
                  </strong>{" "}
                  Token
                </RulesText>
              )}
              {hasChaosX && (
                <RulesText>
                  <i className="ss ss-fw ss-2x ss-timeshifted ss-grad ss-plc"></i>
                  Chaos <i className="ms ms-x"></i> <EmDashIcon />
                  {chaosX.text}
                </RulesText>
              )}
              {hasUrl && (
                <RulesText>
                  <a href={urlProp.url} target="_blank" rel="noreferrer">
                    <Button variant="outline-info">
                      <i className="fa fa-link mr-2"></i>
                      {urlProp.text}
                    </Button>
                  </a>
                </RulesText>
              )}
              {hasErrata && (
                <Card.Text
                  className="h5 fst-italic"
                  dangerouslySetInnerHTML={{ __html: errataHtml }}
                ></Card.Text>
              )}
            </Card.Body>
          </Card>
        )
      );
    };

    const renderCardImage = ({ scaled } = { scaled: true }) => (
      <div className={cn("card_image__outer", { rotated: isRotated })}>
        <div className={cn("card_image__inner", { rotated: isRotated })}>
          <Card.Img
            variant="top"
            width="100%"
            src={imageURI}
            className={cn("card_image", {
              rotated: isRotated,
              scaled: scaled,
            })}
          />
        </div>
      </div>
    );

    const renderImage = ({ scaled } = { scaled: true }) => {
      if (displayImages) {
        return (
          <>
            {renderCardImage()}

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
                {renderCardImage({ scaled })}
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
              className="text-body text-start position-absolute d-flex align-items-center noselect"
              style={{
                top: "4%",
                left: "7%",
                fontSize: "clamp(10px, 3vw, 22px)",
                height: "5%",
                width: "90%",
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
                fontSize: "clamp(10px, 3vw, 30px)",
              }}
            >
              <Textfit mode="multi" style={{ height: "100%" }} max={30}>
                <span dangerouslySetInnerHTML={{ __html: card.oracle_html }} />
              </Textfit>
            </div>
            <div
              className="text-body position-absolute d-flex justify-content-center align-items-center noselect"
              style={{
                bottom: "10.5%",
                width: "100%",
                fontSize: "clamp(10px, 3vw, 22px)",
                marginLeft: "-1.25rem",
                height: "5%",
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
              "counter-overlay": emptyChildren && hasOverlayAbility,
              "d-flex align-items-center justify-content-center":
                emptyChildren && hasOverlayAbility,
            })}
          >
            <Card.Title className={cn("text-center", { "h-100": isBlank })}>
              {hasOverlayAbility && renderAbilities()}
              {renderCustomText()}
              {!isBlank && children}
            </Card.Title>
          </Card.ImgOverlay>
        );
      } else {
        return (
          <Card.Body className="text-center pb-0">
            {hasOverlayAbility && renderAbilities()}
            {renderCustomText()}
            {!isBlank && children}
          </Card.Body>
        );
      }
    };

    if (listDisplay) {
      return (
        <div ref={ref}>
          <ListGroup.Item variant="dark" onClick={toggleModal}>
            <Row>
              <Col>{card.name}</Col>
              {displayTypeLine && (
                <Col className="fst-italic">{card.type_line}</Col>
              )}
            </Row>
          </ListGroup.Item>
          <Modal
            show={modalOpen}
            onHide={toggleModal}
            size="md"
            backdrop={true}
            dialogClassName="modal-content-no-border"
          >
            <Modal.Body className="p-0" centered="true">
              <Card bg="black" text="light" className={"mtg-standard-card"}>
                {renderImage({ scaled: false })}
                {renderComponents()}
              </Card>
              {children}
            </Modal.Body>
          </Modal>
        </div>
      );
    } else {
      return (
        <div ref={ref}>
          <Card bg="black" text="light" className={"mtg-standard-card"}>
            {renderImage()}
            {renderComponents()}
            <CardLinks card={card} />
          </Card>
          {renderAdditionalProps()}
          {renderBody()}
        </div>
      );
    }
  }
);
