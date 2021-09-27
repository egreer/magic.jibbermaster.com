import React, { useState } from "react";

import { Button, Col, Modal } from "react-bootstrap";

export const Confirm = ({
  onConfirm,
  triggerButtonParams,
  triggerText,
  headerText = "Confirm?",
  bodyText,
  confirmText = "Save",
  confirmVariant = "primary",
}) => {
  const [open, setOpen] = useState(false);
  const close = (confirmed) => {
    setOpen(false);
    if (confirmed) {
      onConfirm();
    }
  };

  const header = (
    <Modal.Header>
      <Modal.Title>{headerText}</Modal.Title>
    </Modal.Header>
  );

  const body = <Modal.Body>{bodyText || "Confirm?"}</Modal.Body>;

  return (
    <>
      <Modal
        show={open}
        onHide={close}
        animation={true}
        contentClassName="bg-dark text-light noselect"
      >
        {header}
        {bodyText && body}
        <Modal.Footer>
          <Col>
            <Button variant="secondary" onClick={() => close(false)} block>
              Close
            </Button>
          </Col>
          <Col>
            <Button variant={confirmVariant} onClick={() => close(true)} block>
              {confirmText}
            </Button>
          </Col>
        </Modal.Footer>
      </Modal>
      <Button onClick={() => setOpen(true)} {...triggerButtonParams}>
        {triggerText}
      </Button>
    </>
  );
};
