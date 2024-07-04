import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { hasCustomProperty } from "../../mtg/card";
import { ConfirmForm } from "../ConfirmForm";

export const CardInputProp = ({ card, style = {} }) => {
  const [value, setValue] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);

  const onConfirm = useCallback(
    (input) => {
      setValue(input);
    },
    [setValue]
  );

  const closeConfirmModal = useCallback(() => {
    setOpenConfirm(false);
  }, [setOpenConfirm]);

  const openConfirmModal = useCallback(() => {
    setOpenConfirm(true);
  }, [setOpenConfirm]);

  const property = hasCustomProperty("input", card);

  return (
    <div style={style}>
      {value && (
        <h3 className="text-shadow noselect">
          <span className="mx-2">{value}</span>
          {property?.type}
        </h3>
      )}
      <Button
        onClick={openConfirmModal}
        variant="dark"
        size="lg"
        className="btn-translucent"
      >
        <h3 className="mb-0">{property.prompt?.short}</h3>
      </Button>
      <ConfirmForm
        open={openConfirm}
        headerText={property.prompt?.long}
        confirmText={property.action}
        onConfirm={onConfirm}
        onClose={closeConfirmModal}
      ></ConfirmForm>
    </div>
  );
};
