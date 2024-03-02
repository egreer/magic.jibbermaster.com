export const TAGS = [
  {
    name: "2 Headed Giant",
    defaultEnabled: true,
    description:
      "2 players are on a team  with a shared life total and take their turn together. (Rules 810.*)",
  },
  {
    name: "Archenemy",
    defaultEnabled: false,
    description:
      "3 players band together to take out the 4th member of the group who is supported by a deck of devious Schemes. (Rules 904.*)",
  },
  {
    name: "Assassin",
    defaultEnabled: false,
    description:
      "Players are dealt a face down card to indicate their hidden target",
  },
  {
    name: "Attack 1",
    defaultEnabled: true,
    description:
      "Scope down the game so players can only attack their neighbors, last one standing wins. (Rules 803.*)",
  },
  {
    name: "Chode Mode",
    defaultEnabled: false,
    description:
      "Players begin at 5 life, last player standing wins in this aggressive free for all",
  },
  {
    name: "Deck Swaps",
    defaultEnabled: true,
    description: "Players randomly swap decks to shake up multiple formats",
  },
  {
    name: "EDH",
    defaultEnabled: true,
    description:
      "Elder Dragon Highlander or Commander is played with a 100 card singleton deck. (Rules 903.*)",
  },
  {
    name: "Emperor",
    defaultEnabled: true,
    description:
      "Teams are formed of 3 or more players using a limited range of influence to take out the opposing emperor. (Rules 809.*)",
  },
  {
    name: "Free for All",
    defaultEnabled: true,
    description:
      "Everyone is out for themselves and last one standing wins. (Rules 806.*)",
  },
  {
    name: "Hike Mode",
    defaultEnabled: true,
    description: "Let the Lord of Chaos rule in this planechase variant.",
  },
  {
    name: "Normal",
    defaultEnabled: true,
    description: "60+ card kitchen table magic or format of choice",
  },
  {
    name: "Pentacle",
    defaultEnabled: true,
    description: "Players try to take out the two people across from them.",
  },
  {
    name: "Planechase",
    defaultEnabled: true,
    description: "Players play with a central deck of planes. (Rules 901.*)",
  },
  {
    name: "Range 1",
    defaultEnabled: false,
    description:
      "Scope down the game so players can only interact with their neighbors, last one standing wins. (Rules 801.*)",
  },
  {
    name: "SYB",
    defaultEnabled: true,
    description:
      "Players each try to take out their assigned target while defending themselves from 1 other person.",
  },
  {
    name: "SYB Multi",
    defaultEnabled: true,
    description:
      "Players each try to take out multiple assigned targets while defending themselves from the same number.",
  },
  {
    name: "Secret Partners",
    defaultEnabled: true,
    description:
      "Players are dealt face down cards to denote the team they are on in secret so you never know your ally.",
  },
  {
    name: "Star",
    defaultEnabled: false,
    description:
      "The turn order changes to run in a star pattern while players try to take out their targets first.",
  },
  {
    name: "Teams",
    defaultEnabled: true,
    description:
      "Teams are formed and players operate independently but win together. (Rules 811.*)",
  },
  {
    name: "Vanguard",
    defaultEnabled: true,
    description:
      "Players select a Vanguard card to lead their deck to victory. (Rules 902.*)",
  },
];

export const CHAOS_TAGS = ["Hike Mode", "Planechase", "Vanguard", "Chode Mode"];

const canAny = (p) => true;
const canEven = (p) => p % 2 === 0;
const canOdd = (p) => p % 2 === 1;
const can2Hg = (p) => p > 2 && canEven(p);
const canFreeForAll = (p) => p > 2;
const canEmperor = (p) => p >= 6 && p % 3 === 0;
const canSecretPartner = (p) => p >= 6 && canEven(p);
const canRange1 = (p) => p > 3;
const canSYBMulti = (p) => p >= 4;
const canPentacle = (p) => p >= 5;
export const canStar = (p) => p >= 5 && canOdd(p);
const canTeams = (p) => p > 2 && canEven(p);

export const hasTags = (tags, values) =>
  tags.some((t) => [].concat(values).includes(t));

export const FORMATS = [
  {
    name: "2 Headed Giant",
    initial: 0.5,
    tags: ["2 Headed Giant", "Normal"],
    players: can2Hg,
  },
  {
    name: "2 Headed Giant Free for All",
    initial: 0.5,
    tags: ["2 Headed Giant", "Free for All"],
    players: (p) => can2Hg(p) && canFreeForAll(p) && p > 4,
  },
  {
    name: "Archenemy",
    initial: 0.5,
    tags: ["Normal", "Archenemy"],
    players: (p) => p === 4,
  },
  {
    name: "Attack 1",
    initial: 0.1,
    tags: ["Normal", "Attack 1"],
    players: canRange1,
  },
  {
    name: "Chode Mode",
    initial: 0.75,
    tags: ["Normal", "Chode Mode"],
    players: canAny,
  },
  {
    name: "EDH 2 Headed Giant",
    initial: 0.5,
    tags: ["EDH", "2 Headed Giant"],
    players: can2Hg,
  },
  {
    name: "EDH 2 Headed Giant FFA",
    initial: 0.5,
    tags: ["EDH", "2 Headed Giant", "Free for All"],
    players: (p) => can2Hg(p) && canFreeForAll(p) && p > 4,
  },
  {
    name: "EDH Attack 1",
    initial: 0.1,
    tags: ["EDH", "Attack 1"],
    players: canRange1,
  },
  {
    name: "EDH Emperor",
    initial: 0.5,
    tags: ["EDH", "Emperor"],
    showSwaps: true,
    players: canEmperor,
  },
  {
    name: "EDH Emperor Deck Swaps",
    displayName: "EDH Emperor",
    initial: 0,
    tags: ["EDH", "Emperor", "Deck Swaps"],
    showSwaps: true,
    players: canEmperor,
  },
  {
    name: "EDH Free for All",
    initial: 0.5,
    tags: ["EDH", "Free for All"],
    players: canFreeForAll,
  },
  {
    name: "EDH Hike Mode",
    initial: 0.025,
    tags: ["EDH", "Hike Mode"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "EDH Hike Mode Deck Swaps",
    displayName: "EDH Hike Mode",
    initial: 0.025,
    tags: ["EDH", "Hike Mode", "Deck Swaps"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "EDH Pentacle",
    initial: 0.625,
    tags: ["EDH", "Pentacle"],
    showSwaps: true,
    players: canPentacle,
  },
  {
    name: "EDH Pentacle Deck Swaps",
    displayName: "EDH Pentacle",
    initial: 0.125,
    showSwaps: true,
    tags: ["EDH", "Pentacle", "Deck Swaps"],
    players: canPentacle,
  },
  {
    name: "EDH Range 1",
    initial: 0.5,
    tags: ["EDH", "Range 1"],
    players: canRange1,
  },
  {
    name: "EDH SYB",
    initial: 0.625,
    tags: ["EDH", "SYB"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "EDH SYB Deck Swaps",
    displayName: "EDH SYB",
    initial: 0.125,
    tags: ["EDH", "SYB", "Deck Swaps"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "EDH SYB Multi",
    initial: 0.315,
    tags: ["EDH", "SYB Multi"],
    showSwaps: true,
    players: (p) => canAny(p) && canSYBMulti(p),
  },
  {
    name: "EDH SYB Multi Deck Swaps",
    displayName: "EDH SYB Multi",
    initial: 0.06,
    tags: ["EDH", "SYB Multi", "Deck Swaps"],
    showSwaps: true,
    players: (p) => canAny(p) && canSYBMulti(p),
  },
  {
    name: "EDH Secret Partners",
    initial: 0.625,
    tags: ["EDH", "Secret Partners"],
    showSwaps: true,
    players: canSecretPartner,
  },
  {
    name: "EDH Secret Partners Deck Swaps",
    displayName: "EDH Secret Partners",
    initial: 0.125,
    tags: ["EDH", "Secret Partners", "Deck Swaps"],
    showSwaps: true,
    players: canSecretPartner,
  },
  {
    name: "EDH Star",
    initial: 0.5,
    tags: ["Star", "EDH"],
    players: canStar,
  },
  {
    name: "EDH Teams",
    initial: 0.5,
    tags: ["Teams", "EDH"],
    players: canTeams,
  },
  {
    name: "EDH Vanguard",
    displayName: " EDH Vanguard",
    initial: 0.1,
    tags: ["EDH", "Vanguard"],
    showSwaps: false,
    players: canAny,
  },
  {
    name: "Emperor",
    initial: 0.5,
    tags: ["Normal", "Emperor"],
    showSwaps: true,
    players: canEmperor,
  },
  {
    name: "Emperor Deck Swaps",
    displayName: "Emperor",
    initial: 0,
    tags: ["Normal", "Emperor", "Deck Swaps"],
    showSwaps: true,
    players: canEmperor,
  },
  {
    name: "Free for All",
    initial: 0.5,
    tags: ["Normal", "Free for All"],
    players: canFreeForAll,
  },
  {
    name: "Hike Mode",
    initial: 0.025,
    tags: ["Normal", "Hike Mode"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "Hike Mode Deck Swaps",
    displayName: "Hike Mode",
    initial: 0.025,
    tags: ["Normal", "Hike Mode", "Deck Swaps"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "Pentacle",
    initial: 0.5,
    tags: ["Normal", "Pentacle"],
    showSwaps: true,
    players: canPentacle,
  },
  {
    name: "Pentacle Deck Swaps",
    displayName: "Pentacle",
    initial: 0.25,
    tags: ["Normal", "Pentacle", "Deck Swaps"],
    showSwaps: true,
    players: canPentacle,
  },
  {
    name: "Planechase",
    initial: 0.2,
    tags: ["Normal", "Planechase"],
    players: canAny,
  },
  {
    name: "Planechase EDH",
    initial: 0.2,
    tags: ["Planechase", "EDH"],
    players: canAny,
  },
  {
    name: "Range 1",
    initial: 0.5,
    tags: ["Normal", "Range 1"],
    players: canRange1,
  },
  {
    name: "SYB",
    initial: 0.5,
    tags: ["Normal", "SYB"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "SYB Deck Swaps",
    displayName: "SYB",
    initial: 0.25,
    tags: ["Normal", "SYB", "Deck Swaps"],
    showSwaps: true,
    players: canAny,
  },
  {
    name: "SYB Multi",
    initial: 0.25,
    tags: ["Normal", "SYB Multi"],
    showSwaps: true,
    players: (p) => canAny(p) && canSYBMulti(p),
  },
  {
    name: "SYB Multi Deck Swaps",
    displayName: "SYB Multi",
    initial: 0.125,
    tags: ["Normal", "SYB Multi", "Deck Swaps"],
    showSwaps: true,
    players: (p) => canAny(p) && canSYBMulti(p),
  },
  {
    name: "Secret Partners",
    initial: 0.5,
    tags: ["Normal", "Secret Partners"],
    showSwaps: true,
    players: canSecretPartner,
  },
  {
    name: "Secret Partners Deck Swaps",
    displayName: "Secret Partners",
    initial: 0.5,
    tags: ["Normal", "Secret Partners", "Deck Swaps"],
    showSwaps: true,
    players: canSecretPartner,
  },
  {
    name: "Star",
    initial: 0.5,
    tags: ["Normal", "Star"],
    players: canStar,
  },
  {
    name: "Teams",
    initial: 0.5,
    tags: ["Normal", "Teams"],
    players: canTeams,
  },
  {
    name: "Vanguard",
    displayName: "Vanguard",
    initial: 0.1,
    tags: ["Normal", "Vanguard"],
    showSwaps: false,
    players: canAny,
  },
];
