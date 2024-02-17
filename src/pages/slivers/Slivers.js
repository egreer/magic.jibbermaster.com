import Case from "case";
import compact from "lodash/compact";
import numeralPrefix from "numeral-prefix";
import pluralize from "pluralize";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Fade,
  Form,
  InputGroup,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Confirm } from "../../components/Confirm";
import {
  DoubleFaceButton,
  LoyaltyButtonGroup,
} from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { UpdatedBanner } from "../../components/magic/UpdatedBanner";
import { useLocalState } from "../../hooks/useLocalState";
import { hasCustomProperty } from "../../mtg/card";
import { ABILITIY_STACKS_PROP } from "../../util/additionalProps";
import { getAllSliversCards } from "../../util/api";
import { AbilityIcon } from "../../util/createMarkup";

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

const AbilityHeader = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div
      className="py-1 px-2 bg-dark text-light border-secondary"
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
};

const parsedAbility = ({ card }) => {
  let allPlayers = false;
  let youControl = false;
  let stacks = false;
  let reminderText = null;
  let matchOrder = 10;
  const abilities = [];

  const words = card?.oracle_html?.split("<br />");
  words?.forEach((word) => {
    let parsed = false;

    // TODO Break on New line for checks
    let matches = word.match('All Slivers?(?: creatures)? have "(.*)"');
    if (!parsed && matches) {
      abilities.push(matches[1]);
      allPlayers = true;
      parsed = true;
      matchOrder = Math.min(3, matchOrder);
    }

    matches = word.match(
      /All Slivers?(?: creatures)? have (.+?)\.( <small><em>\(.*)?/
    );
    if (!parsed && matches) {
      abilities.push(Case.capital(matches[1]));
      allPlayers = true;
      reminderText = matches[2];
      parsed = true;
      matchOrder = Math.min(1, matchOrder);
    }

    matches = word.match(/All Slivers?(?: creatures)? get (.+?)\./);
    if (!parsed && matches) {
      abilities.push(matches[1]);
      allPlayers = true;
      stacks = true;
      parsed = true;
      matchOrder = Math.min(5, matchOrder);
    }

    matches = word.match('Slivers?(?: creatures)? you control have "(.*)"');
    if (!parsed && matches) {
      abilities.push(matches[1]);
      youControl = true;
      parsed = true;
      matchOrder = Math.min(4, matchOrder);
    }

    matches = word.match(
      /Slivers?(?: creatures)? you control have (.+?)\.( <small><em>\(.*)?/
    );
    if (!parsed && matches) {
      abilities.push(
        ...matches[1]?.split(" and ")?.map((m) => {
          let r = m.replace(/(^"|"$)/g, "");
          return r.includes(":") ? r : Case.sentence(r);
        })
      );
      youControl = true;
      reminderText = matches[2];
      parsed = true;
      matchOrder = Math.min(2, matchOrder);
    }

    matches = word.match(/Slivers?(?: creatures)? you control get (.+?)\./);
    if (!parsed && matches) {
      abilities.push(matches[1]);
      youControl = true;
      stacks = true;
      parsed = true;
      matchOrder = Math.min(6, matchOrder);
    }
    // When in doubt throw it on
    if (!parsed) {
      abilities.push(word);
    }
  });

  return {
    abilities,
    stacks,
    allPlayers,
    youControl,
    reminderText,
    matchOrder,
  };
};

const sliverName = (name, count) => {
  let newName = name.replace("Sliver", "").trim();
  newName = count > 1 ? numeralPrefix(count, `-${newName}`) : newName;
  return count > 0 ? newName : null;
};

export const Slivers = () => {
  const [slivers, setSlivers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSlivers, setFilteredSlivers] = useState([]);
  const [activeOnly, setActiveOnly] = useState(false);
  const [showFlavorText, setShowFlavorText] = useState(false);
  const [showName, setShowName] = useState(false);
  const [sliverCounts, setSliverCounts] = useLocalState("sliver-counts", {});

  useEffect(() => {
    const getSlivers = async () => {
      const s = await getAllSliversCards();
      s.forEach((card) => {
        card.customProperties = card.customProperties.concat(
          sliverProps[card.name] ?? []
        );
        card.parsedAbility = parsedAbility({ card });
      });

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

  const sliverById = useCallback(
    (id) => slivers.find((c) => c.id === id),
    [slivers]
  );

  const orderedSlivers = useMemo(() => {
    const s = Object.entries(sliverCounts).map(([key, count]) => {
      const card = sliverById(key);
      return {
        key,
        card,
        count,
      };
    });
    s.sort(
      (first, second) =>
        (first.card?.parsedAbility?.matchOrder || 10) -
        (second?.card?.parsedAbility?.matchOrder || 10)
    );
    return s;
  }, [sliverCounts, sliverById]);

  const reset = () => {
    setFilteredSlivers([]);
    setSearch("");
    setActiveOnly(false);
    setSliverCounts([]);
  };

  const SliverCard = useCallback(
    ({ card }) => {
      const count = currentSliverCount({ card });

      return (
        <Col xs="6" md="4" className="my-2">
          <MtgCard card={card} displayChildrenBelow={false} />
          <div className="text-center">
            <h1>
              <Badge pill bg={count > 0 ? "success" : "dark"}>
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
    <Container className="slivers" fluid>
      <Helmet title="Slivers" />
      <div className="d-grid gap-1">
        <h1 className="text-center">Sliver Calculator</h1>
        <Accordion defaultActiveKey="0">
          {orderedSlivers.map((group) => {
            const { card, count } = group;

            if (count > 0) {
              const abilityStacks = hasCustomProperty("ability-stacks", card);
              const { allPlayers, youControl, abilities, reminderText } =
                card?.parsedAbility || {};
              return (
                card &&
                card.oracle_html && (
                  <Accordion.Item
                    eventKey={card.id}
                    key={`ability-${card.id}`}
                    className="bg-dark text-light border-secondary"
                  >
                    <AbilityHeader eventKey={card.id}>
                      <Row>
                        <Col xs={1}>
                          {!!allPlayers && <Badge bg="primary">ALL</Badge>}
                          {!!youControl && <Badge bg="warning">YOU</Badge>}
                          {!youControl && !allPlayers && (
                            <Badge bg="secondary">* * *</Badge>
                          )}
                        </Col>
                        <Col xs={1}>
                          {!!abilityStacks && (
                            <Badge bg="success">{`${count} x `}</Badge>
                          )}
                        </Col>
                        <Col>
                          {abilities?.map((ability, index) => (
                            <div key={index}>
                              <AbilityIcon ability={ability} className="mr-2" />
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ability,
                                }}
                              ></span>
                            </div>
                          ))}
                          {reminderText && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: reminderText,
                              }}
                            ></div>
                          )}
                        </Col>
                      </Row>
                    </AbilityHeader>
                    <Accordion.Body>
                      <Card.Body>
                        <SliverCard card={card} />
                      </Card.Body>
                    </Accordion.Body>
                  </Accordion.Item>
                )
              );
            }
            return null;
          })}
        </Accordion>
        <Button
          onClick={() => setShowName(!showName)}
          variant="secondary"
          className="w-100"
        >
          {showName ? "Hide" : "Show"} Name
        </Button>
        <Fade in={showName}>
          <div className="fst-italic">
            {showName && (
              <>
                {Case.title(
                  compact(
                    orderedSlivers.map((group) => {
                      const { card, count } = group;
                      return card && count > 0
                        ? sliverName(card.name, count)
                        : null;
                    })
                  ).join(", ")
                )}
                <span> Sliver</span>
              </>
            )}
          </div>
        </Fade>
        <Button
          onClick={() => setShowFlavorText(!showFlavorText)}
          variant="secondary"
          className="w-100"
        >
          {showFlavorText ? "Hide" : "Show"} Flavor Text
        </Button>
        <Fade in={showFlavorText}>
          <div className="fst-italic">
            {showFlavorText &&
              orderedSlivers.map((group) => {
                const { card, count } = group;
                return card && count > 0 ? (
                  <div key={card.id}>{card.flavor_text}</div>
                ) : null;
              })}
          </div>
        </Fade>
      </div>

      <div className="my-5">
        <Confirm
          onConfirm={reset}
          headerText="Reset Slivers?"
          triggerText="Reset"
          confirmText="Reset"
          confirmVariant="danger"
          triggerButtonParams={{ variant: "danger", className: "w-100" }}
        />
      </div>

      <InputGroup>
        <Form.Control
          placeholder="Search..."
          value={search}
          onChange={(a) => setSearch(a.target.value)}
        />
        <div>
          <DoubleFaceButton
            onClick={() => {
              setActiveOnly(!activeOnly);
            }}
            enabled={activeOnly}
            text="Only Active"
            highlight
          />
        </div>
      </InputGroup>
      <Form.Text>
        {pluralize("Match", filteredSlivers?.length ?? 0, true)}
      </Form.Text>

      <Row>
        {filteredSlivers?.map((card) => (
          <SliverCard card={card} key={`col-${card.id}`} />
        ))}
      </Row>

      <UpdatedBanner
        setName="Modern Horizons 2"
        symbol="mh2"
        rarity="rare"
      ></UpdatedBanner>
    </Container>
  );
};
