import React, { Component } from "react";
import { Button, ButtonGroup, Col, Row, Spinner } from "react-bootstrap";
import Dialog from "react-bootstrap-dialog";
import CytoscapeComponent from "react-cytoscapejs";
import debounce from "lodash/debounce";
import store from "store";

import { getSetting } from "../../util/settings.js";
import { shuffle } from "../../mtg/deck.js";

import { SYBHelmet } from "./Helmet";
import { canStar } from "../formats/formats";
import { cytoStyle } from "./Cyto";
import {
  DoubleFaceButton,
  LoyaltyButtonGroup
} from "../../components/magic/Buttons.js";

const circleLayout = { name: "circle", nodeDimensionsIncludeLabels: true };
const gridLayout = { name: "grid", nodeDimensionsIncludeLabels: true, rows: 2 };
const TARGET_OFFSET = 2;

export class SYB extends Component {
  state = {
    playerCount: 4,
    playerTargets: 1,
    targets: null,
    loadingDirection: false,
    cySet: false,
    labels: { 0: "J" },
    showTurnEdges: true,
    starTurn: false,
    showScrewEdges: true
  };

  cy = null;
  dialog = null;

  componentDidMount = () => {
    const playerCount = store.get("syb-playerCount") || 4;
    const playerTargets = store.get("syb-playerTargets") || 1;
    const targets = store.get("syb-targets") || null;
    const tableShape = store.get("syb-tableShape") || "circle";
    const labels = store.get("syb-labels") || { 0: "J" };
    this.setState({
      playerCount,
      playerTargets,
      targets,
      tableShape,
      labels
    });
  };

  generateNodes() {
    const { playerCount, labels } = this.state;
    const players = Array.from(Array(playerCount).keys());
    return players.map(p => {
      const label = labels[p] || p;
      return { data: { id: `player-${p}`, label, type: "triangle-tee" } };
    });
  }

  generateEdges() {
    const {
      targets,
      playerTargets,
      playerCount,
      showTurnEdges,
      starTurn,
      showScrewEdges
    } = this.state;

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
                  label: `Edge from ${player} to ${target}`
                },
                classes: "screw"
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
              label: `Turn from ${i} to ${target}`
            },
            classes: "turn"
          };
        })
      : [];

    return screwEdges.concat(turnEdges);
  }

  regenerateOrder(c) {
    const { playerCount } = this.state;
    const players = Array.from(Array(c || playerCount).keys());
    const targets = store.set("syb-targets", shuffle(players));
    this.setState({ targets });
  }

  handleCy(cy) {
    const layout = this.isSquare() ? gridLayout : circleLayout;
    const SELECT_THRESHOLD = 100;

    // Refresh Layout if needed
    const refreshLayout = debounce(() => {
      cy.layout(layout).run();
    }, SELECT_THRESHOLD);

    const nodeClick = debounce(e => {
      const clickedNode = e.target;
      this.setLabel(clickedNode.id().split("-")[1]);
    }, SELECT_THRESHOLD);

    if (!this.state.cySet) {
      cy.on("add remove", () => {
        refreshLayout();
      });

      cy.nodes().on("tap click", nodeClick);

      cy.on("mouseover touchstart", "node", function(e) {
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

      cy.on("mouseout touchend", "node", function(e) {
        cy.elements().removeClass(
          "semitransparent highlight incoming outgoing"
        );
      });

      this.setState({ cySet: true });
    }
    this.cy = cy;
  }

  setLabel(number) {
    console.log("Setting label", number);
    this.dialog.show({
      title: "Who is this?",
      bsSize: "sm",
      actions: [
        Dialog.CancelAction(),
        Dialog.OKAction(a => {
          const { labels } = this.state;
          labels[number] = a.value;
          store.set("syb-labels", labels);
          this.setState({ labels });
        })
      ],
      prompt: Dialog.TextPrompt({ initialValue: number })
    });
  }

  renderCyto() {
    const layout = this.isSquare() ? gridLayout : circleLayout;
    const elements = {
      nodes: this.generateNodes(),
      edges: this.generateEdges()
    };
    const stylesheet = cytoStyle({ square: this.isSquare() });

    return (
      <CytoscapeComponent
        cy={cy => this.handleCy(cy)}
        elements={CytoscapeComponent.normalizeElements(elements)}
        style={{ width: "100vw", height: "100vh" }}
        className={"flex-grow"}
        stylesheet={stylesheet}
        userPanningEnabled={false}
        layout={layout}
      />
    );
  }

  removeListeners() {
    this.cy.removeListener("add remove");
    this.cy
      .nodes()
      .removeListener("click tap touchstart touchend mouseover mouseout");
    this.setState({ cySet: false });
  }

  isSquare() {
    const { tableShape } = this.state;
    return false && tableShape === "square";
  }

  incrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set("syb-playerCount", playerCount + 1);
    this.adjustTargetCount(newPlayerCount);
    this.regenerateOrder(newPlayerCount);
    this.removeListeners();
    this.setState({ playerCount: newPlayerCount });
  }

  decrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set(
      "syb-playerCount",
      Math.max(playerCount - 1, 1)
    );
    this.adjustTargetCount(newPlayerCount);
    this.regenerateOrder(newPlayerCount);
    this.removeListeners();
    this.setState({ playerCount: newPlayerCount });
  }

  adjustTargetCount(playerCount) {
    const { playerTargets } = this.state;
    const newPlayerTargets = Math.min(
      playerTargets,
      Math.max(playerCount - TARGET_OFFSET, 1)
    );
    if (playerTargets !== newPlayerTargets) {
      this.setState({ playerTargets: newPlayerTargets });
    }
  }

  incrementTargetCount() {
    const { playerCount, playerTargets } = this.state;
    const newPlayerTargets = store.set(
      "syb-playerTargets",
      Math.min(playerTargets + 1, playerCount)
    );
    this.regenerateOrder(playerCount, newPlayerTargets);
    this.removeListeners();
    this.setState({ playerTargets: newPlayerTargets });
  }

  decrementTargetCount() {
    const { playerCount, playerTargets } = this.state;
    const newPlayerTargets = store.set(
      "syb-playerTargets",
      Math.max(playerTargets - 1, 1)
    );
    this.regenerateOrder(playerCount, newPlayerTargets);
    this.removeListeners();
    this.setState({ playerTargets: newPlayerTargets });
  }

  setTableShape(shape) {
    const tableShape = store.set("syb-tableShape", shape);
    this.setState({ tableShape });
  }

  whichWay = () => {
    const targets = store.set("syb-targets", null);
    this.setState({ loadingDirection: true, targets });

    setTimeout(() => {
      this.regenerateOrder();
      this.setState({ loadingDirection: false });
    }, 1500);
  };

  reset = async () => {
    this.setState({ loading: true });
    const playerCount = store.set("syb-playerCount", 4);
    const playerTargets = store.set("syb-playerTargets", 1);
    const targets = store.set("syb-targets", null);
    const tableShape = store.set("syb-tableShape", "circle");
    const labels = store.set("syb-labels", { 0: "J" });

    this.removeListeners();
    this.setState(
      {
        playerCount,
        playerTargets,
        targets,
        tableShape,
        labels
      },
      () => this.regenerateOrder(playerCount, playerTargets)
    );
  };

  render() {
    const {
      playerCount,
      playerTargets,
      tableShape,
      loadingDirection
    } = this.state;
    return (
      <div className="syb">
        <SYBHelmet />

        <Row className="my-4 text-center">
          <Col>
            <h1>{playerCount} Players</h1>
            <LoyaltyButtonGroup
              upProps={{
                onClick: () => {
                  this.incrementCount();
                }
              }}
              downProps={{
                disabled: playerCount <= 1,
                onClick: () => {
                  this.decrementCount();
                }
              }}
            />
          </Col>
          <Col>
            <h1>{playerTargets} Targets</h1>
            <LoyaltyButtonGroup
              upProps={{
                disabled: playerTargets >= playerCount - TARGET_OFFSET,
                onClick: () => {
                  this.incrementTargetCount();
                }
              }}
              downProps={{
                disabled: playerTargets <= 1,
                onClick: () => {
                  this.decrementTargetCount();
                }
              }}
            />
          </Col>
          {false && (
            <ButtonGroup>
              <Button
                active={tableShape === "circle"}
                onClick={() => this.setTableShape("circle")}
                variant="secondary"
              >
                <i className="ss ss-portal ss-2x" />
              </Button>
              <Button
                active={tableShape === "square"}
                onClick={() => this.setTableShape("square")}
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
            onClick={this.whichWay}
            block
            disabled={loadingDirection}
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
          {this.renderCyto()}
        </div>
        <Button onClick={this.reset} variant="danger" block>
          Reset
        </Button>

        {this.renderDevTools()}

        <Dialog
          ref={component => {
            this.dialog = component;
          }}
        />
      </div>
    );
  }

  toggleTurnEdges = () => {
    this.setState({ showTurnEdges: !this.state.showTurnEdges });
  };

  toggleScrewEdges = () => {
    this.setState({ showScrewEdges: !this.state.showScrewEdges });
  };

  toggleStarTurn = () => {
    this.setState({ starTurn: !this.state.starTurn });
  };

  renderDevTools = () => {
    const devTools = getSetting("devTools");
    if (devTools) {
      return (
        <div className="my-4">
          <h5 className="text-center noselect">Dev Tools</h5>
          <DoubleFaceButton
            text="Turn Edges"
            onClick={this.toggleTurnEdges}
            enabled={this.state.showTurnEdges}
          />
          <DoubleFaceButton
            text="Screw Edges"
            onClick={this.toggleScrewEdges}
            enabled={this.state.showScrewEdges}
          />
          <DoubleFaceButton
            text="Star Turn"
            onClick={this.toggleStarTurn}
            enabled={this.state.starTurn}
          />
        </div>
      );
    }
  };
}
