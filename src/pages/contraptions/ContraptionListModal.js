import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MtgCard } from "../../components/magic/Card";
import { getAllContraptionsCards } from "../../util/api";

export const ContraptionListModal = ({
  onHide,
  onSelect,
  open,
  randomTokenProps,
}) => {
  const [contraptions, setContraptions] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getContraps = async () => {
      setContraptions(await getAllContraptionsCards());
    };
    getContraps();
  }, [setContraptions]);

  const filteredContraps = contraptions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase() || "")
  );

  if (contraptions && open) {
    return (
      <Modal
        show={!!open}
        onHide={onHide}
        size="lg"
        dialogClassName="bg-secondary"
        variant="secondary"
        backdrop={true}
      >
        <Modal.Header className="justify-content-center text-white noselect">
          <Modal.Title>
            <i className={randomTokenProps.symbol} />
            {randomTokenProps.text}
            <i className={randomTokenProps.symbol} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Search..."
            value={search}
            onChange={(a) => setSearch(a.target.value)}
          />
          <p className="text-right text-light">
            {filteredContraps?.length} Matches
          </p>
          {filteredContraps?.map((card) => (
            <MtgCard card={card} key={card.id} displayChildrenBelow={false}>
              <Button
                onClick={() => onSelect({ card })}
                variant="primary"
                size="lg"
                className="btn-translucent"
              >
                <h2 className="mb-0">
                  <i className="ss ss-ust ss-2x ss-grad ss-rare mx-2" />
                  <span className="mx-2 d-none d-md-inline">Assemble</span>
                </h2>
              </Button>
            </MtgCard>
          ))}
        </Modal.Body>
      </Modal>
    );
  }

  return null;
};
