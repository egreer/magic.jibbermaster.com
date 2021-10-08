import React, { useCallback, useEffect, useState } from "react";
import pluralize from "pluralize";
import {
  Accordion,
  Badge,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import {
  DoubleFaceButton,
  LoyaltyButtonGroup,
} from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { useLocalState } from "../../hooks/useLocalState";
import { hasCustomProperty } from "../../mtg/card";
import { ABILITIY_STACKS_PROP } from "../../util/additionalProps";
import { getAllSliversCards } from "../../util/api";

// ABILITIY_STACKS_PROP
const sliverProps = {
  "Battle Sliver": [ABILITIY_STACKS_PROP],
  "Blade Sliver": [ABILITIY_STACKS_PROP],
  "Bonesplitter Sliver": [ABILITIY_STACKS_PROP],
  "Brood Sliver": [ABILITIY_STACKS_PROP],
  "Cleaving Sliver": [ABILITIY_STACKS_PROP],
  "Constricting Sliver": [ABILITIY_STACKS_PROP],
  "Diffusion Sliver": [ABILITIY_STACKS_PROP],
  "Dormant Sliver": [ABILITIY_STACKS_PROP],
  "Essence Sliver": [ABILITIY_STACKS_PROP],
  "First Sliver's Chosen": [ABILITIY_STACKS_PROP],
  "Frenzy Sliver": [ABILITIY_STACKS_PROP],
  "Fungus Sliver": [ABILITIY_STACKS_PROP],
  "Harmonic Sliver": [ABILITIY_STACKS_PROP],
  "Lavabelly Sliver": [ABILITIY_STACKS_PROP],
  "Leeching Sliver": [ABILITIY_STACKS_PROP],
  "Lymph Sliver": [ABILITIY_STACKS_PROP],
  "Megantic Sliver": [ABILITIY_STACKS_PROP],
  "Mesmeric Sliver": [ABILITIY_STACKS_PROP],
  "Might Sliver": [ABILITIY_STACKS_PROP],
  "Muscle Sliver": [ABILITIY_STACKS_PROP],
  "Opaline Sliver": [ABILITIY_STACKS_PROP],
  "Plague Sliver": [ABILITIY_STACKS_PROP],
  "Plated Sliver": [ABILITIY_STACKS_PROP],
  "Predatory Sliver": [ABILITIY_STACKS_PROP],
  "Sedge Sliver": [ABILITIY_STACKS_PROP],
  "Sidewinder Sliver": [ABILITIY_STACKS_PROP],
  "Sinew Sliver": [ABILITIY_STACKS_PROP],
  "Slivdrazi Monstrosity": [ABILITIY_STACKS_PROP],
  "Sliver Legion": [ABILITIY_STACKS_PROP],
  "Sliv-Mizzet, Hivemind": [ABILITIY_STACKS_PROP],
  "Spined Sliver": [ABILITIY_STACKS_PROP],
  "Spiteful Sliver": [ABILITIY_STACKS_PROP],
  "Steelform Sliver": [ABILITIY_STACKS_PROP],
  "Synapse Sliver": [ABILITIY_STACKS_PROP],
  "Tempered Sliver": [ABILITIY_STACKS_PROP],
  "The First Sliver": [ABILITIY_STACKS_PROP],
  "Thorncaster Sliver": [ABILITIY_STACKS_PROP],
  "Vampiric Sliver": [ABILITIY_STACKS_PROP],
  "Virulent Sliver": [ABILITIY_STACKS_PROP],
  "Ward Sliver": [ABILITIY_STACKS_PROP],
  "Watcher Sliver": [ABILITIY_STACKS_PROP],
};

export const Slivers = () => {
  const [slivers, setSlivers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSlivers, setFilteredSlivers] = useState([]);
  const [activeOnly, setActiveOnly] = useState(false);
  const [sliverCounts, setSliverCounts] = useLocalState("sliver-counts", {});

  useEffect(() => {
    const getSlivers = async () => {
      const s = await getAllSliversCards();
      s.forEach(
        (s) =>
          (s.customProperties = s.customProperties.concat(
            sliverProps[s.name] ?? []
          ))
      );

      setSlivers(s);
    };
    getSlivers();
  }, [setSlivers]);

  const currentSliverCount = useCallback(
    ({ card }) => sliverCounts[card.id] || 0,
    [sliverCounts]
  );

  useEffect(() => {
    setFilteredSlivers(
      slivers.filter(
        (card) =>
          card.name.toLowerCase().includes(search.toLowerCase() || "") &&
          (activeOnly ? currentSliverCount({ card }) > 0 : true)
      )
    );
  }, [slivers, search, activeOnly, currentSliverCount, setFilteredSlivers]);

  const incrementSliverCount = useCallback(
    ({ card }) => {
      sliverCounts[card.id] = currentSliverCount({ card }) + 1;
      setSliverCounts({ ...sliverCounts });
    },
    [sliverCounts, setSliverCounts, currentSliverCount]
  );

  const decrementSliverCount = useCallback(
    ({ card }) => {
      sliverCounts[card.id] = Math.max(currentSliverCount({ card }) - 1, 0);
      setSliverCounts({ ...sliverCounts });
    },
    [sliverCounts, setSliverCounts, currentSliverCount]
  );

  const sliverById = (id) => slivers.find((c) => c.id === id);
  const abilities = useCallback(
    () => Object.entries(sliverCounts),
    [sliverCounts]
  );

  console.log(
    "🚀 ~ file: Slivers.js ~ line 115 ~ Slivers ~ abilities",
    abilities
  );

  const SliverCard = useCallback(
    ({ card }) => {
      const count = currentSliverCount({ card });
      return (
        <Col xs="6" md="4" className="my-2">
          <MtgCard card={card} displayChildrenBelow={false} />
          <div className="text-center">
            <h1>
              <Badge pill variant={count > 0 ? "success" : "dark"}>
                x{count}
              </Badge>
            </h1>
            <LoyaltyButtonGroup
              upProps={{
                onClick: () => incrementSliverCount({ card }),
              }}
              downProps={{
                disabled: count < 1,
                onClick: () => decrementSliverCount({ card }),
              }}
            />
          </div>
        </Col>
      );
    },
    [currentSliverCount, incrementSliverCount, decrementSliverCount]
  );

  return (
    <div className="slivers">
      <div className="mb-3">
        <h1 className="text-center">Sliver Abilities</h1>
        <Accordion defaultActiveKey="0">
          {Object.entries(sliverCounts).map(([key, value]) => {
            if (value > 0) {
              const card = sliverById(key);

              const abilityStacks = hasCustomProperty("ability-stacks", card);
              return (
                card &&
                card.oracle_html && (
                  <Card
                    key={`ability-${card.id}`}
                    text="light"
                    bg="dark"
                    border="secondary"
                  >
                    <Accordion.Toggle as={Card.Header} eventKey={card.id}>
                      <Row>
                        <Col xs={1}>
                          {!!abilityStacks && (
                            <Badge variant="success">{`${value} x `}</Badge>
                          )}
                        </Col>
                        <Col>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: card.oracle_html,
                            }}
                          ></span>
                        </Col>
                      </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={card.id}>
                      <Card.Body>
                        <SliverCard card={card} />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )
              );
            }
            return null;
          })}
        </Accordion>
      </div>
      <InputGroup>
        <Form.Control
          placeholder="Search..."
          value={search}
          onChange={(a) => setSearch(a.target.value)}
        />
        <InputGroup.Append>
          <DoubleFaceButton
            onClick={() => {
              setActiveOnly(!activeOnly);
            }}
            enabled={activeOnly}
            text="Only Active"
            highlight
          />
        </InputGroup.Append>
      </InputGroup>
      <Form.Text>
        {pluralize("Match", filteredSlivers?.length ?? 0, true)}
      </Form.Text>

      <Row>
        {filteredSlivers?.map((card) => (
          <SliverCard card={card} key={`col-${card.id}`} />
        ))}
      </Row>
    </div>
  );
};
