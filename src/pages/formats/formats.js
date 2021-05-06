export const TAGS = [
  {
    name: "Chode Mode",
    defaultEnabled: true
  },
  {
    name: "Deck Swaps",
    defaultEnabled: false
  },
  {
    name: "Planechase",
    defaultEnabled: true
  },
  {
    name: "EDH",
    defaultEnabled: true
  },
  {
    name: "2 Headed Giant",
    defaultEnabled: true
  },
  {
    name: "SYB",
    defaultEnabled: true
  },
  {
    name: "Range 1",
    defaultEnabled: true
  },
  {
    name: "Free for All",
    defaultEnabled: true
  },
  {
    name: "Pentacle",
    defaultEnabled: true
  },
  {
    name: "Secret Partners",
    defaultEnabled: true
  },
  {
    name: "Archenemy",
    defaultEnabled: true
  },
  {
    name: "Emperor",
    defaultEnabled: true
  },
  {
    name: "Teams",
    defaultEnabled: false
  },
  {
    name: "Star",
    defaultEnabled: false
  }
];

const canAny = p => true;
const canEven = p => p % 2 === 0;
const can2Hg = p => p > 2 && canEven(p);
const canFreeForAll = p => p > 2;
const canEmperor = p => p >= 6 && p % 3 === 0;
const canSecretPartner = p => p >= 6 && canEven(p);
const canRange1 = p => p > 3;
const canPentacle = p => p >= 5;
const canStar = p => p >= 5;
const canTeams = p => p > 2 && canEven(p);

export const FORMATS = [
  {
    id: 1,
    name: "Chode Mode",
    initial: 0.5,
    tags: ["Chode Mode"],
    players: canAny
  },
  {
    id: 2,
    name: "Planechase ",
    initial: 0.5,
    tags: ["Planechase"],
    players: canAny
  },
  {
    id: 3,
    name: "Planechase EDH",
    initial: 0.5,
    tags: ["Planechase", "EDH"],
    players: canAny
  },
  {
    id: 4,
    name: "EDH Free for All",
    initial: 0.5,
    tags: ["EDH", "Free for All"],
    players: canFreeForAll
  },
  {
    id: 5,
    name: "EDH SYB",
    initial: 0.5,
    tags: ["EDH", "SYB"],
    showSwaps: true,
    players: canAny
  },
  {
    id: 6,
    name: "EDH SYB Deck Swaps",
    displayName: "EDH SYB",
    initial: 0,
    tags: ["EDH", "SYB", "Deck Swaps"],
    showSwaps: true,
    players: canAny
  },
  {
    id: 7,
    name: "EDH Emperor",
    initial: 0.5,
    tags: ["EDH", "Emperor"],
    showSwaps: true,
    players: canEmperor
  },
  {
    id: 8,
    name: "EDH Emperor Deck Swaps",
    displayName: "EDH Emperor",
    initial: 0,
    tags: ["EDH", "Emperor", "Deck Swaps"],
    showSwaps: true,
    players: canEmperor
  },
  {
    id: 9,
    name: "2 Headed Giant SYB",
    initial: 0.5,
    tags: ["2 Headed Giant"],
    players: can2Hg
  },
  {
    id: 10,
    name: "2 Headed Giant Free for All",
    initial: 0.5,
    tags: ["2 Headed Giant", "Free for All"],
    players: p => can2Hg(p) && canFreeForAll(p) && p > 4
  },
  {
    id: 11,
    name: "Emperor",
    initial: 0.5,
    tags: ["Emperor"],
    showSwaps: true,
    players: canEmperor
  },
  {
    id: 12,
    name: "Emperor Deck Swaps",
    displayName: "Emperor",
    initial: 0,
    tags: ["Emperor", "Deck Swaps"],
    showSwaps: true,
    players: canEmperor
  },
  {
    id: 13,
    name: "Range 1",
    initial: 0.5,
    tags: ["Range 1"],
    players: canRange1
  },
  {
    id: 14,
    name: "Free for All",
    initial: 0.5,
    tags: ["Free for All"],
    players: canFreeForAll
  },
  {
    id: 15,
    name: "SYB",
    initial: 0.5,
    tags: ["SYB"],
    showSwaps: true,
    players: canAny
  },
  {
    id: 16,
    name: "SYB Deck Swaps",
    displayName: "SYB",
    initial: 0.5,
    tags: ["SYB", "Deck Swaps"],
    showSwaps: true,
    players: canAny
  },
  {
    id: 17,
    name: "Secret Partners",
    initial: 0.5,
    tags: ["Secret Partners"],
    showSwaps: true,
    players: canSecretPartner
  },
  {
    id: 18,
    name: "Secret Partners Deck Swaps",
    displayName: "Secret Partners",
    initial: 0.5,
    tags: ["Secret Partners", "Deck Swaps"],
    showSwaps: true,
    players: canSecretPartner
  },
  {
    id: 19,
    name: "EDH Secret Partners",
    initial: 0.5,
    tags: ["EDH", "Secret Partners"],
    showSwaps: true,
    players: canSecretPartner
  },
  {
    id: 20,
    name: "EDH Secret Partners Deck Swaps",
    displayName: "EDH Secret Partners",
    initial: 0,
    tags: ["EDH", "Secret Partners", "Deck Swaps"],
    showSwaps: true,
    players: canSecretPartner
  },
  {
    id: 21,
    name: "EDH Pentacle",
    initial: 0.5,
    tags: ["EDH", "Pentacle"],
    showSwaps: true,
    players: canPentacle
  },
  {
    id: 22,
    name: "EDH Pentacle Deck Swaps",
    displayName: "EDH Pentacle",
    initial: 0,
    tags: ["EDH", "Pentacle", "Deck Swaps"],
    players: canPentacle
  },
  {
    id: 23,
    name: "Pentacle",
    initial: 0.5,
    tags: ["Pentacle"],
    showSwaps: true,
    players: canPentacle
  },
  {
    id: 24,
    name: "Pentacle Deck Swaps",
    displayName: "Pentacle",
    initial: 0.5,
    tags: ["Pentacle", "Deck Swaps"],
    showSwaps: true,
    players: canPentacle
  },
  {
    id: 25,
    name: "Archenemy",
    initial: 0.5,
    tags: ["Archenemy"],
    players: p => p === 4
  },
  {
    id: 26,
    name: "EDH 2 Headed Giant SYB",
    initial: 0.1,
    tags: ["EDH", "2 Headed Giant"],
    players: can2Hg
  },
  {
    id: 27,
    name: "EDH 2 Headed Giant FFA",
    initial: 0.1,
    tags: ["EDH", "2 Headed Giant", "Free for All"],
    players: p => can2Hg(p) && canFreeForAll(p) && p > 4
  },
  {
    id: 28,
    name: "EDH Range 1",
    initial: 0.5,
    tags: ["EDH", "Range 1"],
    players: canRange1
  },
  {
    id: 29,
    name: "Teams",
    initial: 0.5,
    tags: ["Teams"],
    players: canTeams
  },
  {
    id: 30,
    name: "EDH Teams",
    initial: 0.5,
    tags: ["Teams", "EDH"],
    players: canTeams
  },
  {
    id: 31,
    name: "Star",
    initial: 0.5,
    tags: ["Star"],
    players: canStar
  },
  {
    id: 32,
    name: "EDH Star",
    initial: 0.5,
    tags: ["Star", "EDH"],
    players: canStar
  }
];
