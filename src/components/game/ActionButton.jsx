import { Button } from "react-bootstrap";

export const ActionButton = ({
  onClick,
  disabled,
  icon,
  text,
  children,
  ...rest
}) => (
  <div className="fixed-top mt-1 ml-1 w-25 text-start">
    <Button
      onClick={onClick}
      className="mb-2 w-100"
      variant="success"
      disabled={disabled}
      aria-label={text}
      {...rest}
    >
      {icon}
      <span className="mx-2 d-none d-md-inline">{text}</span>
    </Button>
    {children}
  </div>
);
