import { Button } from "react-bootstrap";

export const ActionButton = ({ onClick, disabled, icon, text }) => (
  <div className="fixed-top mt-1 ml-1 w-25 text-left">
    <Button
      onClick={onClick}
      className="mb-2"
      variant="success"
      disabled={disabled}
      block
    >
      {icon}
      <span className="mx-2 d-none d-md-inline">{text}</span>
    </Button>
  </div>
);
