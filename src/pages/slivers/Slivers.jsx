import Case from "case";
import compact from "lodash/compact";
import numeralPrefix from "numeral-prefix";
import pluralize from "pluralize";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  Accordion,
  AccordionContext,
  Badge,
  Button,
  Card,
  Col,
  Fade,
  Form,
  InputGroup,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import {
  DoubleFaceButton,
  LoyaltyButtonGroup,
} from "../../components/magic/Buttons";
import { MtgCard } from "../../components/magic/Card";
import { UpdatedBanner } from "../../components/magic/UpdatedBanner";
import { PageContainer } from "../../components/PageContainer";
import { useLocalState } from "../../hooks/useLocalState";
import { hasCustomProperty } from "../../mtg/card";
import { ABILITY_STACKS_PROP } from "../../util/additionalProps";
import { getAllSliversCards } from "../../util/api";
import { AbilityIcon } from "../../util/createMarkup";

const sliverProps = {
  "Battle Sliver": [ABILITY_STACKS_PROP],
  "Blade Sliver": [ABILITY_STACKS_PROP],
  "Bonesplitter Sliver": [ABILITY_STACKS_PROP],
  "Brood Sliver": [ABILITY_STACKS_PROP],
  "Cleaving Sliver": [ABILITY_STACKS_PROP],
  "Constricting Sliver": [ABILITY_STACKS_PROP],
  "Diffusion Sliver": [ABILITY_STACKS_PROP],
  "Dormant Sliver": [ABILITY_STACKS_PROP],
  "Essence Sliver": [ABILITY_STACKS_PROP],
  "First Sliver's Chosen": [ABILITY_STACKS_PROP],
  "Frenzy Sliver": [ABILITY_STACKS_PROP],
  "Fungus Sliver": [ABILITY_STACKS_PROP],
  "Harmonic Sliver": [ABILITY_STACKS_PROP],
  "Lavabelly Sliver": [ABILITY_STACKS_PROP],
  "Leeching Sliver": [ABILITY_STACKS_PROP],
  "Lymph Sliver": [ABILITY_STACKS_PROP],
  "Megantic Sliver": [ABILITY_STACKS_PROP],
  "Mesmeric Sliver": [ABILITY_STACKS_PROP],
  "Might Sliver": [ABILITY_STACKS_PROP],
  "Muscle Sliver": [ABILITY_STACKS_PROP],
  "Opaline Sliver": [ABILITY_STACKS_PROP],
  "Plague Sliver": [ABILITY_STACKS_PROP],
  "Plated Sliver": [ABILITY_STACKS_PROP],
  "Predatory Sliver": [ABILITY_STACKS_PROP],
  "Sedge Sliver": [ABILITY_STACKS_PROP],
  "Sidewinder Sliver": [ABILITY_STACKS_PROP],
  "Sinew Sliver": [ABILITY_STACKS_PROP],
  "Slivdrazi Monstrosity": [ABILITY_STACKS_PROP],
  "Sliver Legion": [ABILITY_STACKS_PROP],
  "Sliv-Mizzet, Hivemind": [ABILITY_STACKS_PROP],
  "Spined Sliver": [ABILITY_STACKS_PROP],
  "Spiteful Sliver": [ABILITY_STACKS_PROP],
  "Steelform Sliver": [ABILITY_STACKS_PROP],
  "Synapse Sliver": [ABILITY_STACKS_PROP],
  "Tempered Sliver": [ABILITY_STACKS_PROP],
  "The First Sliver": [ABILITY_STACKS_PROP],
  "Thorncaster Sliver": [ABILITY_STACKS_PROP],
  "Vampiric Sliver": [ABILITY_STACKS_PROP],
  "Virulent Sliver": [ABILITY_STACKS_PROP],
  "Ward Sliver": [ABILITY_STACKS_PROP],
  "Watcher Sliver": [ABILITY_STACKS_PROP],
};

const AbilityHeader = ({ children, eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey);

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      className="py-1 px-2 bg-dark text-light border-secondary"
      onClick={decoratedOnClick}
      onKeyUp={(event) => ["Enter"].includes(event.key) && decoratedOnClick()}
      aria-pressed={isCurrentEventKey}
      role="button"
      tabIndex={0}
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
  let matchOrder = 15;
  const abilities = [];

  const words = card?.oracle_html?.split("<br />");
  words?.forEach((word) => {
    let parsed = false;

    const addAbility = (ability, order) => {
      abilities.push(ability);
      parsed = true;
      matchOrder = Math.min(order, matchOrder);
    };

    let matches = word.match('All Slivers?(?: creatures)? have "(.*)"');
    if (!parsed && matches) {
      addAbility(matches[1], 3);
      allPlayers = true;
    }

    matches = word.match(
      /All Slivers?(?: creatures)? have (.+?)\.( <small><em>\(.*)?/
    );
    if (!parsed && matches) {
      addAbility(Case.capital(matches[1]), 1);
      allPlayers = true;
      reminderText = matches[2];
    }

    matches = word.match(/All Slivers?(?: creatures)? get (.+?)\./);
    if (!parsed && matches) {
      addAbility(matches[1], 9);
      allPlayers = true;
      stacks = true;
    }

    matches = word.match('Slivers?(?: creatures)? you control have "(.*)"');
    if (!parsed && matches) {
      addAbility(matches[1], 4);
      youControl = true;
    }

    matches = word.match(
      /Slivers?(?: creatures)? you control have (.+?)\.( <small><em>\(.*)?/
    );
    if (!parsed && matches) {
      abilities.push(
        ...(matches[1]?.split(" and ")?.map((m) => {
          let r = m.replace(/(^"|"$)/g, "");
          return r.includes(":") ? r : Case.sentence(r);
        }) || [])
      );
      youControl = true;
      reminderText = matches[2];
      parsed = true;
      matchOrder = Math.min(2, matchOrder);
    }

    matches = word.match(/Slivers?(?: creatures)? you control get (.+?)\./);
    if (!parsed && matches) {
      addAbility(matches[1], 10);
      youControl = true;
      stacks = true;
    }

    matches = word.match(
      /Whenever a Slivers?(?: creatures?)? you control (.*)/
    );
    if (!parsed && matches) {
      addAbility(word, 8);
      youControl = true;
    }

    matches = word.match(/Whenever a Slivers?(?: creatures?)?(.*)/);
    if (!parsed && matches) {
      addAbility(word, 7);
      allPlayers = true;
    }

    // When in doubt throw it on
    if (!parsed) {
      addAbility(word, 14);
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

const compareSlivers = (card1, card2) => {
  const abilityOrder =
    (card1?.parsedAbility?.matchOrder || 10) -
    (card2?.parsedAbility?.matchOrder || 10);
  const abilityNameOrder = (
    card1?.parsedAbility?.abilities?.[0] ?? ""
  ).localeCompare(card2?.parsedAbility?.abilities?.[0] ?? "");
  const nameOrder = (card1?.name ?? "").localeCompare(card2?.name ?? "");

  return [abilityOrder, abilityNameOrder, nameOrder].find((e) => e != 0) || 0;
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

  const incrementAllSliverCount = useCallback(
    () => slivers.forEach((card) => incrementSliverCount({ card })),
    [slivers, incrementSliverCount]
  );

  const decrementAllSliverCount = useCallback(
    () => slivers.forEach((card) => decrementSliverCount({ card })),
    [slivers, decrementSliverCount]
  );

  const sliverById = useCallback(
    (id) => slivers.find((c) => c.id === id),
    [slivers]
  );

  const orderedSlivers = useMemo(() => {
    const s = Object.entries(sliverCounts).map(([key, count]) => {
      const card = sliverById(key);
      return { key, card, count };
    });
    s.sort((first, second) => compareSlivers(first.card, second?.card));
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
                title: `Increase ${card.name} Count`,
              }}
              downProps={{
                disabled: count < 1,
                onClick: () => decrementSliverCount({ card }),
                title: `Decrease ${card.name} Count`,
              }}
            />
          </div>
        </Col>
      );
    },
    [currentSliverCount, incrementSliverCount, decrementSliverCount]
  );

  return (
    <PageContainer className="slivers">
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
                card && (
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
                          {abilities?.length ? (
                            abilities?.map((ability, index) => (
                              <div key={index}>
                                <AbilityIcon
                                  ability={ability}
                                  className="mr-2"
                                />
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ability,
                                  }}
                                ></span>
                              </div>
                            ))
                          ) : (
                            <span>None</span>
                          )}
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
          type="search"
          value={search}
          className="bg-dark text-light border"
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

      <DevTools>
        <div className="p-2 my-3 text-center border border-info rounded">
          <div className="mx-2 d-inline h5 p-0 align-middle">
            <strong>Sliver Count</strong>
          </div>
          <LoyaltyButtonGroup
            text="Increment All Slivers"
            upProps={{
              title: "Increase Slivers Count",
              onClick: incrementAllSliverCount,
            }}
            downProps={{
              title: "Decrease Slivers Count",
              onClick: decrementAllSliverCount,
            }}
          />
        </div>
      </DevTools>
      <UpdatedBanner
        setName="Mystery Booster 2"
        symbol="mb2"
        rarity="rare"
      ></UpdatedBanner>
    </PageContainer>
  );
};
