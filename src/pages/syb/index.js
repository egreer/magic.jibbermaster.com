import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import CytoscapeComponent from "react-cytoscapejs";
import debounce from "lodash/debounce";
import store from "store";

import { shuffle } from "../../mtg/deck.js";

import { SYBHelmet } from "./Helmet";

const circleLayout = { name: "circle", nodeDimensionsIncludeLabels: true };
const gridLayout = { name: "grid", nodeDimensionsIncludeLabels: true, rows: 2 };

export class SYB extends Component {
  state = {
    playerCount: 4,
    targets: null
  };
  componentDidMount = () => {
    const playerCount = store.get("syb-playerCount") || 4;
    const targets = store.get("syb-targets") || null;
    const tableShape = store.get("syb-tableShape") || "circle";
    this.setState({
      playerCount,
      targets,
      tableShape
    });
  };

  generateNodes() {
    const { playerCount } = this.state;
    const players = Array.from(Array(playerCount).keys());
    return players.map(p => {
      const label = p === 0 ? "J" : p;
      return { data: { id: `player-${p}`, label, type: "triangle-tee" } };
    });
  }

  generateEdges() {
    const { targets } = this.state;

    return !targets
      ? []
      : targets.map((player, i) => {
          const targetIndex = i + 1 >= targets.length ? 0 : i + 1;
          const target = targets[targetIndex];
          // const playerContent = this.renderPlayer(player, target, playerCount);
          return {
            data: {
              source: `player-${player}`,
              target: `player-${target}`,
              label: `Edge from ${player} to ${target}`
            }
          };
        });
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

    cy.on("add remove", () => {
      refreshLayout();
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
        selector: "edge",
        style: {
          width: "5%",
          "curve-style": this.isSquare() ? "unbundled-bezier" : "straight",
          "target-arrow-shape": "triangle "
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
        panningEnabled={false}
        layout={layout}
      />
    );
  }

  isSquare() {
    const { tableShape } = this.state;
    return false && tableShape === "square";
  }

  incrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set("syb-playerCount", playerCount + 1);
    this.regenerateOrder(newPlayerCount);
    this.setState({ playerCount: newPlayerCount });
  }

  decrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set(
      "syb-playerCount",
      Math.max(playerCount - 1, 1)
    );
    this.regenerateOrder(newPlayerCount);
    this.setState({ playerCount: newPlayerCount });
  }

  setTableShape(shape) {
    const tableShape = store.set("syb-tableShape", shape);
    this.setState({ tableShape });
  }

  render() {
    const { playerCount, tableShape } = this.state;
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
              >
                <i className="ms ms-loyalty-down ms-loyalty-1 ms-2x" />
              </Button>
              <Button onClick={() => this.incrementCount()}>
                <i className="ms ms-loyalty-up ms-loyalty-1 ms-2x" />
              </Button>
            </ButtonGroup>
            {false && (
              <ButtonGroup>
                <Button
                  active={tableShape === "circle"}
                  onClick={() => this.setTableShape("circle")}
                >
                  <i className="ss ss-portal ss-2x" />
                </Button>
                <Button
                  active={tableShape === "square"}
                  onClick={() => this.setTableShape("square")}
                >
                  <i className="ss ss-bfz ss-2x" />
                </Button>
              </ButtonGroup>
            )}
          </div>
        </div>
        <div className="text-center my-2">
          <Button color="danger" onClick={() => this.regenerateOrder()}>
            Which way are we screwing?
          </Button>
        </div>
        <div className="d-flex">{this.renderCyto()}</div>
      </div>
    );
  }
}
