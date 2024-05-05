import debounce from "lodash/debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import Dialog from "react-bootstrap-dialog";
import CytoscapeComponent from "react-cytoscapejs";
import { Confirm } from "../../components/Confirm";
import { DevTools } from "../../components/DevTools";
import {
  DoubleFaceButton,
  LoyaltyButtonGroup,
} from "../../components/magic/Buttons";
import { useLocalState } from "../../hooks/useLocalState";
import { shuffleArray } from "../../util/shuffleArray";
import { canStar } from "../formats/formats";
import { cytoStyle } from "./Cyto";
import { SYBHelmet } from "./Helmet";

const TABLE_SHAPE_SQUARE = "square";
const TABLE_SHAPE_CIRCLE = "circle";
const DEFAULT_TABLE_SHAPE = TABLE_SHAPE_CIRCLE;
const TARGET_OFFSET = 2;
const DEFAULT_PLAYER_COUNT = 4;
const DEFAULT_PLAYER_TARGETS = 1;
const DEFAULT_LABELS = { 0: "J" };

const circleLayout = { name: "circle", nodeDimensionsIncludeLabels: true };
const gridLayout = { name: "grid", nodeDimensionsIncludeLabels: true, rows: 2 };

export const SYB = () => {
  const [playerCount, setPlayerCount] = useLocalState(
    "syb-playerCount",
    DEFAULT_PLAYER_COUNT
  );
  const [playerTargets, setPlayerTargets] = useLocalState(
    "syb-playerTargets",
    DEFAULT_PLAYER_TARGETS
  );
  const [targets, setTargets] = useLocalState("syb-targets", null);
  const [labels, setLabels] = useLocalState("syb-labels", DEFAULT_LABELS);
  const [tableShape, setTableShape] = useLocalState(
    "syb-tableShape",
    DEFAULT_TABLE_SHAPE
  );

  // Dev Controls: These may only need to be setState
  const [showTurnEdges, setShowTurnEdges] = useLocalState(
    "syb-showTurnEdges",
    true
  );
  const [starTurn, setStarTurn] = useLocalState("syb-starTurn", false);
  const [showScrewEdges, setShowScrewEdges] = useLocalState(
    "syb-showScrewEdges",
    true
  );

  const [cySet, setCySet] = useState(false);
  const [loadingDirection, setLoadingDirection] = useState(false);

  const cyContainer = useRef(null);
  const dialog = useRef(null);

  useEffect(() => {
    cyContainer.current.nodes().each((d) => {
      const currentLabel = d.data("label");
      const playerNumber = d.id().split("-")[1];
      const newLabel = labels[playerNumber] || currentLabel;
      if (currentLabel !== newLabel) {
        d.data("label", newLabel);
      }
    });
  }, [cyContainer, labels]);

  const generateNodes = () => {
    const players = Array.from(Array(playerCount).keys());
    return players.map((p) => {
      const label = labels[p] || p;
      return { data: { id: `player-${p}`, label, type: "triangle-tee" } };
    });
  };

  const generateEdges = () => {
    if (!targets) return [];

    const screwEdges = showScrewEdges
      ? targets.flatMap((player, i) => {
          return Array(playerTargets)
            .fill(1)
            .map((_, b) => {
              const targetIndex = (i + b + 1) % playerCount;
              const target = targets[targetIndex];
              return {
                data: {
                  source: `player-${player}`,
                  target: `player-${target}`,
                  label: `Edge from ${player} to ${target}`,
                },
                classes: "screw",
              };
            });
        })
      : [];

    const turnEdges = showTurnEdges
      ? targets.map((_, i) => {
          const starNum = i + 2;
          const starTurnTarget =
            starNum > targets.length
              ? 1
              : starNum >= targets.length
                ? 0
                : starNum;
          const normalTurnTarget = i + 1 >= targets.length ? 0 : i + 1;
          const target =
            starTurn && canStar(targets.length)
              ? starTurnTarget
              : normalTurnTarget;
          return {
            data: {
              source: `player-${i}`,
              target: `player-${target}`,
              label: `Turn from ${i} to ${target}`,
            },
            classes: "turn",
          };
        })
      : [];

    return screwEdges.concat(turnEdges);
  };

  const regenerateOrder = (c) => {
    const players = Array.from(Array(c || playerCount).keys());
    setTargets(shuffleArray(players));
  };

  const handleCy = (cy) => {
    const layout = isSquare() ? gridLayout : circleLayout;
    const SELECT_THRESHOLD = 100;

    // Refresh Layout if needed
    const refreshLayout = debounce(() => {
      cy.layout(layout).run();
    }, SELECT_THRESHOLD);

    const nodeClick = debounce((e) => {
      const clickedNode = e.target;
      setLabel(clickedNode.id().split("-")[1]);
    }, SELECT_THRESHOLD);

    if (!cySet) {
      cy.on("add remove", () => {
        refreshLayout();
      });

      cy.nodes().on("tap click", nodeClick);

      cy.on("mouseover touchstart", "node", function (e) {
        let sel = e.target;

        sel.addClass("highlight");

        const incomers = sel.incomers(".screw");
        const allIncomers = incomers.union(incomers.sources());
        allIncomers.addClass("highlight incoming");

        const outgoers = sel.outgoers(".screw");
        const allOutgoers = outgoers.union(outgoers.targets());
        allOutgoers.addClass("highlight outgoing");

        cy.elements()
          .difference(allOutgoers.union(allIncomers))
          .not(sel)
          .addClass("semitransparent");
      });

      cy.on("mouseout touchend", "node", function (e) {
        cy.elements().removeClass(
          "semitransparent highlight incoming outgoing"
        );
      });

      setCySet(true);
    }
    cyContainer.current = cy;
  };

  const setLabel = useCallback(
    (number) => {
      console.log("Setting label", number);
      dialog.current.show({
        title: "Who is this?",
        bsSize: "sm",
        actions: [
          Dialog.CancelAction(),
          Dialog.OKAction((a) => {
            labels[number] = a.value;
            setLabels({ ...labels });
          }),
        ],
        prompt: Dialog.TextPrompt({ initialValue: labels[number] || number }),
      });
    },
    [dialog, labels, setLabels]
  );

  const renderCyto = () => {
    const layout = isSquare() ? gridLayout : circleLayout;
    const elements = {
      nodes: generateNodes(),
      edges: generateEdges(),
    };
    const stylesheet = cytoStyle({ square: isSquare() });

    return (
      <CytoscapeComponent
        cy={(cy) => handleCy(cy)}
        elements={CytoscapeComponent.normalizeElements(elements)}
        style={{ width: "100vw", height: "100vh" }}
        className={"flex-grow"}
        stylesheet={stylesheet}
        userPanningEnabled={false}
        layout={layout}
      />
    );
  };

  const removeListeners = () => {
    cyContainer.current.removeListener("add remove");
    cyContainer.current
      .nodes()
      .removeListener("click tap touchstart touchend mouseover mouseout");
    setCySet(false);
  };

  const isSquare = () => {
    return false && tableShape === TABLE_SHAPE_SQUARE;
  };

  const incrementCount = () => {
    const newPlayerCount = playerCount + 1;
    adjustTargetCount(newPlayerCount);
    regenerateOrder(newPlayerCount);
    removeListeners();
    setPlayerCount(newPlayerCount);
  };

  const decrementCount = () => {
    const newPlayerCount = Math.max(playerCount - 1, 1);
    adjustTargetCount(newPlayerCount);
    regenerateOrder(newPlayerCount);
    removeListeners();
    setPlayerCount(newPlayerCount);
  };

  const adjustTargetCount = (playerCount) => {
    const newPlayerTargets = Math.min(
      playerTargets,
      Math.max(playerCount - TARGET_OFFSET, 1)
    );
    if (playerTargets !== newPlayerTargets) {
      setPlayerTargets(newPlayerTargets);
    }
  };

  const incrementTargetCount = () => {
    const newPlayerTargets = Math.min(playerTargets + 1, playerCount);
    regenerateOrder(playerCount, newPlayerTargets);
    removeListeners();
    setPlayerTargets(newPlayerTargets);
  };

  const decrementTargetCount = () => {
    const newPlayerTargets = Math.max(playerTargets - 1, 1);
    regenerateOrder(playerCount, newPlayerTargets);
    removeListeners();
    setPlayerTargets(newPlayerTargets);
  };

  const whichWay = () => {
    setTargets(null);
    setLoadingDirection(true);

    setTimeout(() => {
      regenerateOrder();
      setLoadingDirection(false);
    }, 1500);
  };

  const reset = async () => {
    setPlayerCount(DEFAULT_PLAYER_COUNT);
    setPlayerTargets(DEFAULT_PLAYER_TARGETS);
    setTargets(null);
    setTableShape(DEFAULT_TABLE_SHAPE);
    setLabels(DEFAULT_LABELS);
    removeListeners();
    regenerateOrder(DEFAULT_PLAYER_COUNT, DEFAULT_PLAYER_TARGETS);
  };

  return (
    <Container className="syb" fluid>
      <SYBHelmet />

      <Row className="my-4 text-center">
        <Col>
          <h1>{playerCount} Players</h1>
          <LoyaltyButtonGroup
            upProps={{
              onClick: incrementCount,
            }}
            downProps={{
              disabled: playerCount <= 1,
              onClick: decrementCount,
            }}
          />
        </Col>
        <Col>
          <h1>{playerTargets} Targets</h1>
          <LoyaltyButtonGroup
            upProps={{
              disabled: playerTargets >= playerCount - TARGET_OFFSET,
              onClick: incrementTargetCount,
            }}
            downProps={{
              disabled: playerTargets <= 1,
              onClick: decrementTargetCount,
            }}
          />
        </Col>
        {false && (
          <ButtonGroup>
            <Button
              active={tableShape === TABLE_SHAPE_CIRCLE}
              onClick={() => setTableShape(TABLE_SHAPE_CIRCLE)}
              variant="secondary"
            >
              <i className="ss ss-portal ss-2x" />
            </Button>
            <Button
              active={tableShape === TABLE_SHAPE_SQUARE}
              onClick={() => setTableShape(TABLE_SHAPE_SQUARE)}
              variant="secondary"
            >
              <i className="ss ss-bfz ss-2x" />
            </Button>
          </ButtonGroup>
        )}
      </Row>
      <div className="text-center my-2">
        <Button
          variant="danger"
          onClick={whichWay}
          disabled={loadingDirection}
          className="w-100"
        >
          {loadingDirection ? "Calculating..." : "Which way are we screwing?"}
        </Button>
      </div>
      <div className="d-flex">
        {loadingDirection && (
          <div
            className="position-absolute w-75 text-center"
            style={{ top: "45%", left: "0%" }}
          >
            <Spinner
              variant="danger"
              animation="grow"
              className="position-absolute"
              style={{ width: "10rem", height: "10rem" }}
            />
          </div>
        )}
        {renderCyto()}
      </div>

      <Confirm
        onConfirm={reset}
        headerText="Reset Targets?"
        triggerText="Reset"
        confirmText="Reset"
        confirmVariant="danger"
        triggerButtonParams={{ variant: "danger", className: "w-100" }}
      />

      <DevTools>
        <DoubleFaceButton
          text="Turn Edges"
          onClick={() => setShowTurnEdges(!showTurnEdges)}
          enabled={showTurnEdges}
        />
        <DoubleFaceButton
          text="Screw Edges"
          onClick={() => setShowScrewEdges(!showScrewEdges)}
          enabled={showScrewEdges}
        />
        <DoubleFaceButton
          text="Star Turn"
          onClick={() => setStarTurn(!starTurn)}
          enabled={starTurn}
        />
      </DevTools>

      <Dialog
        ref={(component) => {
          dialog.current = component;
        }}
      />
    </Container>
  );
};
