import cn from "classnames";
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { DoubleFaceIcon } from "./DoubleFaceIcon";

export const LoyaltyDownButton = (props) => (
  <Button {...props} variant="secondary">
    <i className="ms ms-loyalty-down ms-loyalty-1 ms-2x" />
  </Button>
);
export const LoyaltyUpButton = (props) => (
  <Button {...props} variant="secondary">
    <i className="ms ms-loyalty-up ms-loyalty-1 ms-2x" />
  </Button>
);

export const LoyaltyButtonGroup = ({
  upProps,
  downProps,
  reverse,
  ...props
}) => (
  <ButtonGroup {...props}>
    {reverse ? (
      <>
        <LoyaltyUpButton {...upProps} />
        <LoyaltyDownButton {...downProps} />
      </>
    ) : (
      <>
        <LoyaltyDownButton {...downProps} />
        <LoyaltyUpButton {...upProps} />
      </>
    )}
  </ButtonGroup>
);

export const UnTapButton = (props) => (
  <Button {...props} variant="secondary">
    <i className="ms ms-untap ms-2x ss-mythic ss-grad" />
  </Button>
);

export const TapButton = (props) => (
  <Button {...props} variant="secondary">
    <i className="ms ms-tap ms-2x ss-mythic ss-grad" />
  </Button>
);

export const TapButtonGroup = ({ unTapProps, tapProps, reverse, ...props }) => (
  <ButtonGroup {...props}>
    {reverse ? (
      <>
        <TapButton {...tapProps} />
        <UnTapButton {...unTapProps} />
      </>
    ) : (
      <>
        <UnTapButton {...unTapProps} />
        <TapButton {...tapProps} />
      </>
    )}
  </ButtonGroup>
);

export const DoubleFaceButton = ({
  enabled,
  text,
  highlight = false,
  ...props
}) => (
  <Button
    {...props}
    className={cn("w-100", props?.className)}
    variant={highlight && enabled ? "info" : "secondary"}
  >
    <span className="mr-2">{text}</span>
    <DoubleFaceIcon enabled={enabled} backdrop />
  </Button>
);

export const DoubleFaceHighlightButton = ({ enabled, text, ...props }) => (
  <Button
    size="sm"
    className="w-100"
    {...props}
    variant={enabled ? "info" : "secondary"}
  >
    <div className="float-start">
      <DoubleFaceIcon enabled={enabled} invert />
    </div>
    <div className="d-inline">{text}</div>
  </Button>
);

export const TenthEditionButton = (props) => (
  <Button variant="danger" {...props}>
    <i className="ss ss-x ss-10e ss-rare ss-grad ss-2x" />
  </Button>
);
