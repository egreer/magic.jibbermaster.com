import cloneDeep from "lodash/cloneDeep";
import random from "lodash/random";
import { shuffleArray } from "../../../util/shuffleArray";

const PLANESWALK_FACE = {
  icon: "ms ms-fw ms-2x ss-timeshifted ss-grad ms-planeswalker",
  effect: "Planeswalk",
  tags: ["planeswalk"],
};

const SQUAK_FACE = {
  icon: "ss ss-fw ss-2x ss-uncommon ss-grad ss-stx",
  effect: "Squak!",
};

const CHAOS_FACE = {
  icon: "ms ms-fw ms-2x ss-mythic ms-chaos",
  effect: "Chaos",
};

const SPROUT_FACE = {
  icon: "ms ms-fw ms-2x text-success ms-counter-fungus",
  effect: "Sprout Sprout - Create a 1/1 green Saproling creature token",
};

const RERANDOM_FACE = {
  icon: "ss ss-fw ss-2x ss-timeshifted ss-grad ss-xren",
  effect: "Re-Randomize Hike Die & Planeswalk",
  tags: ["randomize", "planeswalk"],
};

const FACES = [
  {
    icon: "ss ss-fw ss-2x ss-timeshifted ss-grad ss-fut",
    effect: "Change Plane, Keep Chaos",
    tags: ["planeshift"],
  },
  {
    icon: "ms ms-fw ms-2x ss-timeshifted ss-grad ms-phenomenon",
    effect: "Change Chaos, Keep Plane",
    tags: ["chaosshift"],
  },
  {
    icon: "ss ss-fw ss-2x ss-foil ss-grad ss-h09",
    effect: "Re-Randomize Hike Die",
    tags: ["randomize"],
  },
  {
    icon: "ss ss-fw ss-2x ss-timeshifted ss-grad ss-fut",
    effect: "Re-Randomize Hike Die & Change Plane, Keep Chaos",
    tags: ["randomize", "planeshift"],
  },
  {
    icon: "ms ms-fw ms-2x ss-timeshifted ss-grad ms-phenomenon",
    effect: "Re-Randomize Hike Die & Change Chaos, Keep Plane",
    tags: ["randomize", "chaosshift"],
  },
  {
    icon: "ss ss-fw ss-2x ss-mythic ss-grad ss-plc",
    effect: "Chaos X Times *",
  },
  {
    icon: "ss ss-fw ss-2x ss-mythic ss-grad ss-pls",
    effect: "Chaos + Next 2 Chaos Abilities",
  },
  {
    icon: "ms ms-fw ms-2x ss-rare ss-grad ms-land",
    effect: "Add X Mana of Any Combination of Colors",
  },
  {
    icon: "ms ms-fw ms-2x ss-foil ss-grad ms-ability-d20",
    effect: "Roll 2 More Times",
  },
  {
    icon: "ss ss-fw ss-2x ss-grad ss-pd3",
    effect: "Roll a d6, you lose that much life",
  },
  {
    icon: "ss ss-fw ss-2x text-danger ss-pd2",
    effect: "Roll a d4, each opponent takes that much damage",
  },
  {
    icon: "ss ss-fw ss-2x ss-foil ss-shm",
    effect: "Each opponent loses 1 life, you gain that much life",
  },
  {
    icon: "ms ms-fw ms-2x ss-rare ss-grad ms-dfc-modal-back",
    effect: "Scry X",
  },
  {
    icon: "ms ms-fw ms-2x ss-rare ss-grad ms-ability-surveil",
    effect: "Mill X",
  },
  {
    icon: "ms ms-fw ms-2x ss-rare ss-grad ms-guild-selesnya",
    effect: "Populate X Times (Moar Tokens)",
  },
  {
    icon: "ss ss-fw ss-2x ss-rare ss-grad ss-arb",
    effect: "Cascade < X",
  },
  {
    icon: "ms ms-fw ms-2x ss-mythic ss-grad ms-scheme",
    effect: "Scheme",
  },
  {
    icon: "ms ms-fw ms-2x ss-rare ss-grad ms-ability-dungeon",
    effect: "Venture into the Dungeon up to X Times",
  },
  {
    icon: "ms ms-fw ms-2x ss-rare ss-grad ms-ability-proliferate",
    effect: "Proliferate X Times (Moar Counters)",
  },
  {
    icon: "ss ss-fw ss-2x ss-rare ss-grad ss-leg",
    effect: "Support X Times",
  },
];

export const ALL_FACES = [
  PLANESWALK_FACE,
  SQUAK_FACE,
  CHAOS_FACE,
  SPROUT_FACE,
  RERANDOM_FACE,
  ...FACES,
];

export const randFace = () => random(1, 12);

export const createDie = () => {
  const faces = [
    PLANESWALK_FACE,
    CHAOS_FACE,
    SPROUT_FACE,
    SQUAK_FACE,
    SQUAK_FACE,
    RERANDOM_FACE,
    ...shuffleArray(FACES).slice(0, 6),
  ];

  return cloneDeep(shuffleArray(faces)).reduce((result, v, k) => {
    v.effect = v.effect.replace("X", `${k + 1}`);
    result[k + 1] = v;
    return result;
  }, {});
};
