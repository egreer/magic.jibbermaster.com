import React, { Component } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import Dialog from "react-bootstrap-dialog";
import CytoscapeComponent from "react-cytoscapejs";
import debounce from "lodash/debounce";
import store from "store";

import { getSetting } from "../../util/settings.js";
import { shuffle } from "../../mtg/deck.js";

import { DoubleFaceIcon } from "../../components/magic/DoubleFaceIcon";

import { SYBHelmet } from "./Helmet";

const circleLayout = { name: "circle", nodeDimensionsIncludeLabels: true };
const gridLayout = { name: "grid", nodeDimensionsIncludeLabels: true, rows: 2 };

export class SYB extends Component {
  state = {
    playerCount: 4,
    targets: null,
    loadingDirection: false,
    cySet: false,
    labels: { 0: "J" },
    showTurnEdges: true
  };

  cy = null;
  dialog = null;

  componentDidMount = () => {
    const playerCount = store.get("syb-playerCount") || 4;
    const targets = store.get("syb-targets") || null;
    const tableShape = store.get("syb-tableShape") || "circle";
    const labels = store.get("syb-labels") || { 0: "J" };
    this.setState({
      playerCount,
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
    const { targets, showTurnEdges } = this.state;

    return !targets
      ? []
      : targets
          .map((player, i) => {
            const targetIndex = i + 1 >= targets.length ? 0 : i + 1;
            const target = targets[targetIndex];
            // const playerContent = this.renderPlayer(player, target, playerCount);
            return {
              data: {
                source: `player-${player}`,
                target: `player-${target}`,
                label: `Edge from ${player} to ${target}`
              },
              classes: "screw"
            };
          })
          .concat(
            showTurnEdges
              ? targets.map((_, i) => {
                  const target = i + 1 >= targets.length ? 0 : i + 1;
                  return {
                    data: {
                      source: `player-${i}`,
                      target: `player-${target}`,
                      label: `Turn from ${i} to ${target}`
                    },
                    classes: "turn"
                  };
                })
              : []
          );
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
    const stylesheet = [
      {
        selector: "node",
        style: {
          padding: "50%",
          width: "50%",
          height: "50%",
          "background-color": "#17a2b8",
          "text-valign": "center",
          "text-halign": "center",
          content: "data(label)"
        }
      },
      {
        selector: "node[label]",
        style: {
          label: "data(label)",
          "font-size": "2em",
          color: "white"
        }
      },
      {
        selector: ".screw",
        style: {
          width: "5%",
          "curve-style": this.isSquare() ? "unbundled-bezier" : "straight",
          "target-arrow-shape": "triangle ",
          "arrow-scale": 2.5,
          "target-arrow-color": "#FF4444",
          "line-fill": "linear-gradient",
          "line-gradient-stop-colors": ["#17a2b8", "#FF4444"],
          "z-index": 2
        }
      },
      {
        selector: ".turn",
        style: {
          width: "2%",
          "curve-style": "unbundled-bezier",
          "control-point-distances": [-20, -25, -20],
          "control-point-weights": [0.25, 0.5, 0.75],
          "target-arrow-shape": "vee ",
          "line-style": "dashed",
          "arrow-scale": 1.5,
          "target-arrow-color": "#707070",
          "line-color": "#707070",
          opacity: 0.5,
          "z-index": 1
        }
      }
    ];

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
    this.cy.removeListener("add");
    this.cy.removeListener("remove");
    this.cy.nodes().removeListener("click");
    this.cy.nodes().removeListener("tap");
    this.setState({ cySet: false });
  }

  isSquare() {
    const { tableShape } = this.state;
    return false && tableShape === "square";
  }

  incrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set("syb-playerCount", playerCount + 1);
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
    this.regenerateOrder(newPlayerCount);
    this.removeListeners();
    this.setState({ playerCount: newPlayerCount });
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
    const targets = store.set("syb-targets", null);
    const tableShape = store.set("syb-tableShape", "circle");
    const labels = store.set("syb-labels", { 0: "J" });

    this.removeListeners();
    this.setState(
      {
        playerCount,
        targets,
        tableShape,
        labels
      },
      () => this.regenerateOrder(playerCount)
    );
  };

  render() {
    const { playerCount, tableShape, loadingDirection } = this.state;
    return (
      <div className="syb">
        <SYBHelmet />
        <div className="my-4">
          <div className="text-center">
            <h1>{playerCount} Players</h1>
            <ButtonGroup>
              <Button
                disabled={playerCount <= 1}
                onClick={() => this.decrementCount()}
                variant="secondary"
              >
                <i className="ms ms-loyalty-down ms-loyalty-1 ms-2x" />
              </Button>
              <Button onClick={() => this.incrementCount()} variant="secondary">
                <i className="ms ms-loyalty-up ms-loyalty-1 ms-2x" />
              </Button>
            </ButtonGroup>
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
          </div>
        </div>
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

  renderDevTools = () => {
    const devTools = getSetting("devTools");
    if (devTools) {
      return (
        <div className="my-4">
          <h5 className="text-center noselect">Dev Tools</h5>
          <Button onClick={this.toggleTurnEdges} block variant="secondary">
            <span className="mr-2">Turn Edges</span>
            <DoubleFaceIcon
              enabled={this.state.showTurnEdges}
              backdrop={true}
            />
          </Button>
        </div>
      );
    }
  };
}
