const SOURCE_COLOR = "#17a2b8";
const TARGET_COLOR = "#FF4444";

export const cytoStyle = ({ square } = { square: false }) => [
  {
    selector: "node",
    style: {
      padding: "50%",
      width: "50%",
      height: "50%",
      "background-color": SOURCE_COLOR,
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
      "curve-style": square ? "unbundled-bezier" : "straight",
      "target-arrow-shape": "triangle ",
      "arrow-scale": 2.5,
      "target-arrow-color": TARGET_COLOR,
      "line-fill": "linear-gradient",
      "line-gradient-stop-colors": [SOURCE_COLOR, TARGET_COLOR],
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
  },
  {
    selector: "node.highlight",
    style: {
      "background-color": "#218838",
      "border-color": "#218838",
      "border-width": "2px"
    }
  },
  {
    selector: "node.highlight.incoming",
    style: {
      "background-color": SOURCE_COLOR,
      "border-color": SOURCE_COLOR,
      "border-width": "2px"
    }
  },
  {
    selector: "node.highlight.outgoing",
    style: {
      "background-color": TARGET_COLOR,
      "border-color": TARGET_COLOR,
      "border-width": "2px"
    }
  },
  {
    selector: "node.highlight.outgoing.incoming",
    style: {
      "border-color": SOURCE_COLOR,
      "border-width": "2px"
    }
  },
  {
    selector: "node.semitransparent",
    style: { opacity: "0.5" }
  },
  {
    selector: "edge.highlight",
    style: {
      "curve-style": "unbundled-bezier"
    }
  },
  {
    selector: "edge.highlight.incoming",
    style: {
      "curve-style": "unbundled-bezier",
      "target-arrow-color": SOURCE_COLOR,
      "line-gradient-stop-colors": [SOURCE_COLOR, SOURCE_COLOR],
      "z-index": 3
    }
  },
  {
    selector: "edge.highlight.outgoing",
    style: {
      "target-arrow-color": TARGET_COLOR,
      "line-gradient-stop-colors": [TARGET_COLOR, TARGET_COLOR],
      "z-index": 4
    }
  },
  {
    selector: "edge.semitransparent",
    style: { opacity: "0.2" }
  }
];
