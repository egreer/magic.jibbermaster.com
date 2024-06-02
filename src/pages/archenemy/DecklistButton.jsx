import { CloseAccordionButton } from "../../components/CloseAccordionButton";

export const DecklistButton = ({ children, eventKey }) => {
  return (
    <CloseAccordionButton
      variant="secondary"
      className="fill-100"
      eventKey={eventKey}
    >
      {children}
    </CloseAccordionButton>
  );
};
