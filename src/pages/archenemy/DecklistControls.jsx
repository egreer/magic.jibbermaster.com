import { Alert } from "react-bootstrap";
import { DeckIcon } from "./DeckIcon";

export const DeckListControls = ({
  variant = "info",
  title,
  deck,
  children,
}) => {
  return (
    <div className="fixed-top mt-1 ml-1 text-start">
      <Alert variant={variant} className="clearfix">
        <h4 className="float-start">
          <DeckIcon name={deck}></DeckIcon>
          {title}
        </h4>
        <div className="float-end">{children}</div>
      </Alert>
    </div>
  );
};
