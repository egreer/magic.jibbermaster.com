import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { hasCustomProperty } from "../../mtg/card";
import { fetchRandomCard } from "../../util/api";
import { ConfirmForm } from "../ConfirmForm";
import { RandomCardModal } from "../RandomCardModal";

export const RandomToken = ({ card, style = {} }) => {
  const [randomTokenModalOpen, setRandomTokenModalOpen] = useState(false);
  const [additionalCard, setAdditionalCard] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);

  const property = hasCustomProperty("random-token", card);
  const { needsInput, prompt, action, url, text } = property;

  const _randomTokenModalOpen = (tokenUrl) => {
    const getToken = async () => {
      const tokenCard = await fetchRandomCard(tokenUrl);
      setAdditionalCard(tokenCard);
      setRandomTokenModalOpen(true);
    };
    getToken();
  };

  const _actionClick = () => {
    if (needsInput) {
      openConfirmModal();
    } else {
      _randomTokenModalOpen(url);
    }
  };

  const onConfirm = useCallback(
    (input) => {
      const newURL = url.replace("<<X>>", input);
      _randomTokenModalOpen(newURL);
    },
    [url]
  );

  const closeConfirmModal = useCallback(() => {
    setOpenConfirm(false);
  }, [setOpenConfirm]);

  const openConfirmModal = useCallback(() => {
    setOpenConfirm(true);
  }, [setOpenConfirm]);

  const _randomTokenModalClose = useCallback(() => {
    setAdditionalCard(null);
    setRandomTokenModalOpen(false);
  }, [setAdditionalCard, setRandomTokenModalOpen]);

  return (
    <div style={style}>
      <Button
        onClick={_actionClick}
        variant="dark"
        size="lg"
        className="btn-translucent"
      >
        <h3 className="mb-0">{text}</h3>
      </Button>
      {needsInput && (
        <ConfirmForm
          open={openConfirm}
          headerText={prompt?.long}
          confirmText={action}
          onConfirm={onConfirm}
          onClose={closeConfirmModal}
        ></ConfirmForm>
      )}
      <RandomCardModal
        open={randomTokenModalOpen}
        additionalCards={[additionalCard]}
        onHide={_randomTokenModalClose}
        close={_randomTokenModalClose}
        randomTokenProps={property}
      />
    </div>
  );
};
