import get from "lodash/get";

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
  return `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${get(
    card,
    "multiverse_ids[0]"
  )}&type=card`;
};
