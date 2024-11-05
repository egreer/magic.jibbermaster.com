import get from "lodash/get";
import archenemyBack from "../images/archenemy-back.png";
import arenaBack from "../images/arena-back.png";
import bountyBack from "../images/bounty-back.jpg";
import classicBack from "../images/classic-back.png";
import planechaseBack from "../images/planechase-back.png";

export const hasCustomProperty = (property, card) => {
  return card && card?.customProperties?.find((p) => p.name === property);
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

export const scryfallImageURL = (card, face = 0) =>
  get(card, "image_uris.border_crop") ||
  get(card, `card_faces.${face}.image_uris.border_crop`);
export const scryfallOracleText = (card, face = 0) =>
  get(card, "oracle_text") || get(card, `card_faces.${face}.oracle_text`);

export const ARCHENEMY_BACK = archenemyBack;
export const ARENA_BACK = arenaBack;
export const BOUNTY_BACK = bountyBack;
export const CLASSIC_BACK = classicBack;
export const PLANECHASE_BACK = planechaseBack;
