import { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";

const DialogForm = ({ initialValue, setValue, title, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onSubmit?.();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        title={title}
        autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
        value={initialValue}
        onChange={(a) => {
          setValue(a.target.value);
        }}
      />
    </Form>
  );
};

export const ConfirmForm = ({
  open,
  onConfirm,
  onClose,
  initialValue,
  headerText = "Confirm?",
  confirmText = "Save",
  confirmVariant = "primary",
  ...props
}) => {
  const [value, setValue] = useState(initialValue || "");

  const close = (confirm) => {
    if (confirm) {
      onConfirm?.(value);
    }

    setValue("");
    onClose?.();
  };

  const header = (
    <Modal.Header className="justify-content-center">
      <Modal.Title>{headerText}</Modal.Title>
    </Modal.Header>
  );

  return (
    <Modal
      show={open}
      onHide={close}
      animation={true}
      contentClassName="bg-dark text-light noselect"
      {...props}
    >
      {header}
      <Modal.Body>
        <DialogForm
          initialValue={value}
          title={headerText}
          setValue={setValue}
          onSubmit={() => close(true)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Col>
          <Button
            variant="secondary"
            onClick={() => close(false)}
            className="w-100"
          >
            Close
          </Button>
        </Col>
        <Col>
          <Button
            variant={confirmVariant}
            onClick={() => close(true)}
            className="w-100"
          >
            {confirmText}
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};
