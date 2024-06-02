import { Button, useAccordionButton } from "react-bootstrap";

export const CloseAccordionButton = ({ children, eventKey, ...props }) => {
  const closeAccordion = useAccordionButton(eventKey);
  return (
    <Button onClick={closeAccordion} {...props}>
      {children}
    </Button>
  );
};
