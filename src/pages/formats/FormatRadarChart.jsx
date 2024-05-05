import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { CHAOS_TAGS, hasTags } from "./formats";

export const calculateRadarData = (formats) => {
  const weights = {
    edh: 0,
    normal: 0,
    targeted: 0,
    ffa: 0,
    team: 0,
    swap: 0,
    own: 0,
    chaos: 0,
    notChaos: 0,
  };

  formats.forEach((f) => {
    if (hasTags(f.tags, "EDH")) {
      weights["edh"] += f.weight;
    } else {
      weights["normal"] += f.weight;
    }

    if (hasTags(f.tags, "Deck Swaps")) {
      weights["swap"] += f.weight;
    } else {
      weights["own"] += f.weight;
    }

    if (hasTags(f.tags, CHAOS_TAGS)) {
      weights["chaos"] += f.weight;
    } else {
      weights["notChaos"] += f.weight;
    }

    if (hasTags(f.tags, ["SYB", "SYB Multi", "Pentacle", "Star"])) {
      weights["targeted"] += f.weight;
    } else if (
      hasTags(f.tags, [
        "Teams",
        "Secret Partners",
        "Emperor",
        "2 Headed Giant",
        "Archenemy",
      ])
    ) {
      weights["team"] += f.weight;
    } else {
      weights["ffa"] += f.weight;
    }
  });

  const styleTotal = weights["targeted"] + weights["team"] + weights["ffa"];
  return [
    {
      name: "Normal",
      weight: (
        (weights["normal"] / (weights["edh"] + weights["normal"])) *
        100
      ).toFixed(2),
      fullMark: 100,
    },
    {
      name: "EDH",
      weight: (
        (weights["edh"] / (weights["edh"] + weights["normal"])) *
        100
      ).toFixed(2),
      fullMark: 100,
    },

    {
      name: "FFA",
      weight: ((weights["ffa"] / styleTotal) * 100).toFixed(2),
      fullMark: 100,
    },
    {
      name: "Targeted",
      weight: ((weights["targeted"] / styleTotal) * 100).toFixed(2),
      fullMark: 100,
    },
    {
      name: "Team",
      weight: ((weights["team"] / styleTotal) * 100).toFixed(2),
      fullMark: 100,
    },
    {
      name: "Swap",
      weight: (
        (weights["swap"] / (weights["swap"] + weights["own"])) *
        100
      ).toFixed(2),
      fullMark: 100,
    },
    {
      name: "Chaos",
      weight: (
        (weights["chaos"] / (weights["chaos"] + weights["notChaos"])) *
        100
      ).toFixed(2),
      fullMark: 100,
    },
  ];
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export const FormatRadarChart = ({ data }) => {
  return (
    <div className="row mb-2 d-flex justify-content-center noselect">
      <ResponsiveContainer width={350} aspect={1}>
        <RadarChart outerRadius="75%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip
            allowEscapeViewBox={{ x: true, y: true }}
            content={<CustomTooltip />}
            formatter={(value, name, props) => [value, props.payload["name"]]}
          ></Tooltip>
          <Radar
            name="Formats"
            dataKey="weight"
            stroke="#dc3545"
            fill="#bb2d3b"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
