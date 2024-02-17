import get from "lodash/get";
import archenemyBack from "../images/archenemy-back.png";
import arenaBack from "../images/arena-back.png";
import classicBack from "../images/classic-back.png";
import planechaseBack from "../images/planechase-back.png";

export const hasCustomProperty = (property, card) => {
  return card && card?.customProperties?.find((p) => p.name === property);
};

export const getCounterType = (card) => {
  const property = card?.customProperties?.find((p) => p.name === "counter");
  return property?.type;
};

const ROTATED_LAYOUTS = ["planar", "split"];
export const rotatedLayout = (card) => ROTATED_LAYOUTS.includes(card?.layout);

export const gathererImageURL = (card) => {
  const multiverseId = get(card, "multiverse_ids[0]");
  return (
    multiverseId &&
    `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseId}&type=card`
  );
};

export const scryfallImageURL = (card) => get(card, "image_uris.border_crop");

export const ARENA_BACK = arenaBack;
export const CLASSIC_BACK = classicBack;
export const PLANECHASE_BACK = planechaseBack;
export const ARCHENEMY_BACK = archenemyBack;
