import { addAdditionalProperties } from "../../../util/api";

// Curated and Truncated Scryfall API Results
export const CUSTOM_CHAOS = [
  {
    name: "Hike Timeout",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player suspend all creatures with time counters equal to their mana value.",
    show_blank: true
  },
  {
    name: "Hike Handout",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player reveals their hand and suspends all nonland cards with time counters equal to mana value, with minimum of 1.",
    show_blank: true
  },
  {
    name: "Hikey Turvy",
    type_line: "Plane - Hike",
    oracle_text: "Randomly change the game mode. (Reasonable Switches only)",
    show_blank: true
  },
  {
    name: "Sqwak Thy Neighbor",
    type_line: "Plane - Hike",
    oracle_text:
      "All players randomly change positions at the table. You now play the Hand, Library, Graveyard, Life Total, et all of the new position",
    show_blank: true
  },
  {
    name: "Hike's Cliffside Market",
    type_line: "Plane - Hike",
    oracle_text: "Randomly redistribute life totals.",
    show_blank: true
  },
  {
    name: "The Hike Millining",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player mills 10, then exiles three cards at random from their graveyard. Players may put any lands exiled this way into play, and may cast any spells exiled this way without paying their mana cost. Any player with no cards left in their library then shuffles their graveyard into their library.",
    show_blank: true
  },
  {
    name: "Hike's Great Ax",
    type_line: "Plane - Hike",
    oracle_text: "Re-randomize the d12 Hike die effects",
    show_blank: true
  },
  {
    name: "Sproket Sproket",
    type_line: "Plane - UnHike",
    oracle_text: "Assemble a Contraption",
    show_blank: true
  }
];

const BASE_CHAOS = [
  {
    object: "card",
    id: "aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e",
    oracle_id: "50a228a2-c8b6-4416-b0ab-417926a9b9b6",
    multiverse_ids: [190187],
    mtgo_foil_id: 33080,
    name: "Warp World",
    uri: "https://api.scryfall.com/cards/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e",
    scryfall_uri: "https://scryfall.com/card/m10/163/warp-world?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/a/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e.jpg?1561991614",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/a/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e.jpg?1561991614",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/a/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e.jpg?1561991614",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/a/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e.png?1561991614",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/a/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e.jpg?1561991614",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/a/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e.jpg?1561991614"
    },
    mana_cost: "{5}{R}{R}{R}",
    cmc: 8,
    type_line: "Sorcery",
    oracle_text:
      "Each player shuffles all permanents they own into their library, then reveals that many cards from the top of their library. Each player puts all artifact, creature, and land cards revealed this way onto the battlefield, then does the same for enchantment cards, then puts all cards revealed this way that weren't put onto the battlefield on the bottom of their library.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e/rulings",
    artist: "Ron Spencer",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=190187"
    }
  },
  {
    object: "card",
    id: "c9e8ad32-a701-4b77-bb7e-0e440e4072da",
    oracle_id: "230ee0b4-eb75-457f-b171-72d585cfb5aa",
    multiverse_ids: [45395],
    mtgo_foil_id: 19174,
    name: "Thieves' Auction",
    uri: "https://api.scryfall.com/cards/c9e8ad32-a701-4b77-bb7e-0e440e4072da",
    scryfall_uri:
      "https://scryfall.com/card/8ed/227/thieves-auction?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/9/c9e8ad32-a701-4b77-bb7e-0e440e4072da.jpg?1562935558",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/9/c9e8ad32-a701-4b77-bb7e-0e440e4072da.jpg?1562935558",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/9/c9e8ad32-a701-4b77-bb7e-0e440e4072da.jpg?1562935558",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/9/c9e8ad32-a701-4b77-bb7e-0e440e4072da.png?1562935558",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/9/c9e8ad32-a701-4b77-bb7e-0e440e4072da.jpg?1562935558",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/9/c9e8ad32-a701-4b77-bb7e-0e440e4072da.jpg?1562935558"
    },
    mana_cost: "{4}{R}{R}{R}",
    cmc: 7,
    type_line: "Sorcery",
    oracle_text:
      "Exile all nontoken permanents. Starting with you, each player chooses one of the exiled cards and puts it onto the battlefield tapped under their control. Repeat this process until all cards exiled this way have been chosen.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/c9e8ad32-a701-4b77-bb7e-0e440e4072da/rulings",
    artist: "Kevin Murphy",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=45395"
    }
  },
  {
    object: "card",
    id: "2b61fa9d-3f69-4632-be0e-09924ca88501",
    oracle_id: "35fe3c61-8eaa-465d-ac34-63efda72fef2",
    multiverse_ids: [220300],
    mtgo_foil_id: 41476,
    name: "Scrambleverse",
    uri: "https://api.scryfall.com/cards/2b61fa9d-3f69-4632-be0e-09924ca88501",
    scryfall_uri:
      "https://scryfall.com/card/m12/153/scrambleverse?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/2/b/2b61fa9d-3f69-4632-be0e-09924ca88501.jpg?1562637075",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/b/2b61fa9d-3f69-4632-be0e-09924ca88501.jpg?1562637075",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/2/b/2b61fa9d-3f69-4632-be0e-09924ca88501.jpg?1562637075",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/2/b/2b61fa9d-3f69-4632-be0e-09924ca88501.png?1562637075",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/b/2b61fa9d-3f69-4632-be0e-09924ca88501.jpg?1562637075",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/b/2b61fa9d-3f69-4632-be0e-09924ca88501.jpg?1562637075"
    },
    mana_cost: "{6}{R}{R}",
    cmc: 8,
    type_line: "Sorcery",
    oracle_text:
      "For each nonland permanent, choose a player at random. Then each player gains control of each permanent for which they were chosen. Untap those permanents.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/2b61fa9d-3f69-4632-be0e-09924ca88501/rulings",
    flavor_text: "Sometimes a little chaos is in order.",
    artist: "Dan Scott",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=220300"
    }
  },
  {
    object: "card",
    id: "664e6656-36a3-4635-9f33-9f8901afd397",
    oracle_id: "34515b16-c9a4-4f98-8c77-416a7a523407",
    multiverse_ids: [489712],
    name: "Wrath of God",
    uri: "https://api.scryfall.com/cards/664e6656-36a3-4635-9f33-9f8901afd397",
    scryfall_uri:
      "https://scryfall.com/card/2xm/39/wrath-of-god?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/6/664e6656-36a3-4635-9f33-9f8901afd397.jpg?1598303688",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/6/664e6656-36a3-4635-9f33-9f8901afd397.jpg?1598303688",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/6/664e6656-36a3-4635-9f33-9f8901afd397.jpg?1598303688",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/6/664e6656-36a3-4635-9f33-9f8901afd397.png?1598303688",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/6/664e6656-36a3-4635-9f33-9f8901afd397.jpg?1598303688",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/6/664e6656-36a3-4635-9f33-9f8901afd397.jpg?1598303688"
    },
    mana_cost: "{2}{W}{W}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text: "Destroy all creatures. They can't be regenerated.",
    colors: ["W"],
    color_identity: ["W"],

    rulings_uri:
      "https://api.scryfall.com/cards/664e6656-36a3-4635-9f33-9f8901afd397/rulings",
    artist: "Kev Walker",
    preview: {
      source: "Wizards of the Coast",
      source_uri:
        "https://magic.wizards.com/en/articles/archive/card-preview/three-small-words-one-great-effect-2020-07-22",
      previewed_at: "2020-07-22"
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=489712"
    }
  },
  {
    object: "card",
    id: "4a7a420a-d924-422a-afd9-81a821ace048",
    oracle_id: "a8abd966-de7b-46a3-8ac7-8747ab35653a",
    multiverse_ids: [202558],
    mtgo_foil_id: 38637,
    name: "Wheel of Fortune",
    uri: "https://api.scryfall.com/cards/4a7a420a-d924-422a-afd9-81a821ace048",
    scryfall_uri:
      "https://scryfall.com/card/me4/140/wheel-of-fortune?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/a/4a7a420a-d924-422a-afd9-81a821ace048.jpg?1562912395",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4a7a420a-d924-422a-afd9-81a821ace048.jpg?1562912395",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a7a420a-d924-422a-afd9-81a821ace048.jpg?1562912395",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4a7a420a-d924-422a-afd9-81a821ace048.png?1562912395",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/a/4a7a420a-d924-422a-afd9-81a821ace048.jpg?1562912395",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/a/4a7a420a-d924-422a-afd9-81a821ace048.jpg?1562912395"
    },
    mana_cost: "{2}{R}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text: "Each player discards their hand, then draws seven cards.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/4a7a420a-d924-422a-afd9-81a821ace048/rulings",
    artist: "Daniel Gelon",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=202558"
    }
  },
  {
    object: "card",
    id: "81e57561-17d4-48db-8e40-f41019010bc9",
    oracle_id: "a54f0869-94c8-42af-9080-166efb9486a4",
    multiverse_ids: [],
    name: "Gamble",
    uri: "https://api.scryfall.com/cards/81e57561-17d4-48db-8e40-f41019010bc9",
    scryfall_uri: "https://scryfall.com/card/sld/188/gamble?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/1/81e57561-17d4-48db-8e40-f41019010bc9.jpg?1619122669",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/1/81e57561-17d4-48db-8e40-f41019010bc9.jpg?1619122669",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/1/81e57561-17d4-48db-8e40-f41019010bc9.jpg?1619122669",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/1/81e57561-17d4-48db-8e40-f41019010bc9.png?1619122669",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/1/81e57561-17d4-48db-8e40-f41019010bc9.jpg?1619122669",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/1/81e57561-17d4-48db-8e40-f41019010bc9.jpg?1619122669"
    },
    mana_cost: "{R}",
    cmc: 1,
    type_line: "Sorcery",
    oracle_text:
      "Search your library for a card, put that card into your hand, discard a card at random, then shuffle.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/81e57561-17d4-48db-8e40-f41019010bc9/rulings",
    artist: "Sam McKenzie",
    related_uris: {}
  },
  {
    object: "card",
    id: "e558a5bd-e8f9-477f-a514-1bf0708f4e9e",
    oracle_id: "fc1eb1c9-b22b-41a1-8b13-94a0e758db0f",
    multiverse_ids: [443019],
    name: "Haphazard Bombardment",
    uri: "https://api.scryfall.com/cards/e558a5bd-e8f9-477f-a514-1bf0708f4e9e",
    scryfall_uri:
      "https://scryfall.com/card/dom/131/haphazard-bombardment?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/5/e558a5bd-e8f9-477f-a514-1bf0708f4e9e.jpg?1562744520",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/5/e558a5bd-e8f9-477f-a514-1bf0708f4e9e.jpg?1562744520",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/5/e558a5bd-e8f9-477f-a514-1bf0708f4e9e.jpg?1562744520",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/5/e558a5bd-e8f9-477f-a514-1bf0708f4e9e.png?1562744520",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/5/e558a5bd-e8f9-477f-a514-1bf0708f4e9e.jpg?1562744520",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/5/e558a5bd-e8f9-477f-a514-1bf0708f4e9e.jpg?1562744520"
    },
    mana_cost: "{5}{R}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "When Haphazard Bombardment enters the battlefield, choose four nonenchantment permanents you don't control and put an aim counter on each of them.\nAt the beginning of your end step, if two or more permanents you don't control have an aim counter on them, destroy one of those permanents at random.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/e558a5bd-e8f9-477f-a514-1bf0708f4e9e/rulings",
    artist: "Jesper Ejsing",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=443019"
    }
  },
  {
    object: "card",
    id: "87e2ee71-293d-452b-89a5-b15990186f5b",
    oracle_id: "b01465ea-cab9-4a59-81a6-8db4648b89f4",
    multiverse_ids: [446044],
    name: "Last One Standing",
    uri: "https://api.scryfall.com/cards/87e2ee71-293d-452b-89a5-b15990186f5b",
    scryfall_uri:
      "https://scryfall.com/card/bbd/76/last-one-standing?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/7/87e2ee71-293d-452b-89a5-b15990186f5b.jpg?1562922467",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/7/87e2ee71-293d-452b-89a5-b15990186f5b.jpg?1562922467",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/7/87e2ee71-293d-452b-89a5-b15990186f5b.jpg?1562922467",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/7/87e2ee71-293d-452b-89a5-b15990186f5b.png?1562922467",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/7/87e2ee71-293d-452b-89a5-b15990186f5b.jpg?1562922467",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/7/87e2ee71-293d-452b-89a5-b15990186f5b.jpg?1562922467"
    },
    mana_cost: "{1}{B}{R}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text: "Choose a creature at random, then destroy the rest.",
    colors: ["B", "R"],
    color_identity: ["B", "R"],

    rulings_uri:
      "https://api.scryfall.com/cards/87e2ee71-293d-452b-89a5-b15990186f5b/rulings",
    flavor_text:
      "Some train all their lives for a shot at the title. Some just get really, really lucky.",
    artist: "Svetlin Velinov",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=446044"
    }
  },
  {
    object: "card",
    id: "5d24d153-a014-4524-a496-9fe1c41cbc2b",
    oracle_id: "30e5d70e-6547-483a-a4ab-4c2eed296543",
    multiverse_ids: [389648],
    mtgo_foil_id: 55046,
    name: "Raving Dead",
    uri: "https://api.scryfall.com/cards/5d24d153-a014-4524-a496-9fe1c41cbc2b",
    scryfall_uri: "https://scryfall.com/card/c14/29/raving-dead?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/d/5d24d153-a014-4524-a496-9fe1c41cbc2b.jpg?1561943479",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/d/5d24d153-a014-4524-a496-9fe1c41cbc2b.jpg?1561943479",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/d/5d24d153-a014-4524-a496-9fe1c41cbc2b.jpg?1561943479",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/d/5d24d153-a014-4524-a496-9fe1c41cbc2b.png?1561943479",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/d/5d24d153-a014-4524-a496-9fe1c41cbc2b.jpg?1561943479",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/d/5d24d153-a014-4524-a496-9fe1c41cbc2b.jpg?1561943479"
    },
    mana_cost: "{4}{B}",
    cmc: 5,
    type_line: "Creature — Zombie",
    oracle_text:
      "Deathtouch\nAt the beginning of combat on your turn, choose an opponent at random. Raving Dead attacks that player this combat if able.\nWhenever Raving Dead deals combat damage to a player, that player loses half their life, rounded down.",
    power: "2",
    toughness: "6",
    colors: ["B"],
    color_identity: ["B"],

    rulings_uri:
      "https://api.scryfall.com/cards/5d24d153-a014-4524-a496-9fe1c41cbc2b/rulings",
    artist: "Daarken",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=389648"
    }
  },
  {
    object: "card",
    id: "8ab16152-4617-4deb-b995-195e21f8f485",
    oracle_id: "eb107601-f4ff-4504-9e3f-3de63b0d9e6b",
    multiverse_ids: [74480],
    mtgo_foil_id: 21840,
    name: "Crack the Earth",
    uri: "https://api.scryfall.com/cards/8ab16152-4617-4deb-b995-195e21f8f485",
    scryfall_uri:
      "https://scryfall.com/card/bok/98/crack-the-earth?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/a/8ab16152-4617-4deb-b995-195e21f8f485.jpg?1593860605",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/a/8ab16152-4617-4deb-b995-195e21f8f485.jpg?1593860605",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/a/8ab16152-4617-4deb-b995-195e21f8f485.jpg?1593860605",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/a/8ab16152-4617-4deb-b995-195e21f8f485.png?1593860605",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/a/8ab16152-4617-4deb-b995-195e21f8f485.jpg?1593860605",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/a/8ab16152-4617-4deb-b995-195e21f8f485.jpg?1593860605"
    },
    mana_cost: "{R}",
    cmc: 1,
    type_line: "Sorcery — Arcane",
    oracle_text: "Each player sacrifices a permanent.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/8ab16152-4617-4deb-b995-195e21f8f485/rulings",
    flavor_text:
      '"As the war progressed, the destruction the kami caused became more widespread and less predictable."\n—*Observations of the Kami War*',
    artist: "Wayne Reynolds",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=74480"
    }
  },
  {
    object: "card",
    id: "aeb8d3fc-99e4-49dd-b1f1-bb479b361743",
    oracle_id: "7d359434-eb1b-478e-a745-10e2c564d89f",
    multiverse_ids: [420756],
    name: "Whims of the Fates",
    uri: "https://api.scryfall.com/cards/aeb8d3fc-99e4-49dd-b1f1-bb479b361743",
    scryfall_uri:
      "https://scryfall.com/card/c16/139/whims-of-the-fates?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/e/aeb8d3fc-99e4-49dd-b1f1-bb479b361743.jpg?1562415056",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/e/aeb8d3fc-99e4-49dd-b1f1-bb479b361743.jpg?1562415056",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/e/aeb8d3fc-99e4-49dd-b1f1-bb479b361743.jpg?1562415056",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/e/aeb8d3fc-99e4-49dd-b1f1-bb479b361743.png?1562415056",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/e/aeb8d3fc-99e4-49dd-b1f1-bb479b361743.jpg?1562415056",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/e/aeb8d3fc-99e4-49dd-b1f1-bb479b361743.jpg?1562415056"
    },
    mana_cost: "{5}{R}",
    cmc: 6,
    type_line: "Sorcery",
    oracle_text:
      "Starting with you, each player separates all permanents they control into three piles. Then each player chooses one of their piles at random and sacrifices those permanents. (Piles can be empty.)",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/aeb8d3fc-99e4-49dd-b1f1-bb479b361743/rulings",
    artist: "Seb McKinnon",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=420756"
    }
  },
  {
    object: "card",
    id: "e8f7c8ea-e9c1-4d78-972c-15c4014915a0",
    oracle_id: "ce1bf2c4-93d5-41e3-a450-6b95fad7dd21",
    multiverse_ids: [276194],
    mtgo_foil_id: 44226,
    name: "Tyrant of Discord",
    uri: "https://api.scryfall.com/cards/e8f7c8ea-e9c1-4d78-972c-15c4014915a0",
    scryfall_uri:
      "https://scryfall.com/card/avr/162/tyrant-of-discord?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/8/e8f7c8ea-e9c1-4d78-972c-15c4014915a0.jpg?1592709241",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/8/e8f7c8ea-e9c1-4d78-972c-15c4014915a0.jpg?1592709241",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/8/e8f7c8ea-e9c1-4d78-972c-15c4014915a0.jpg?1592709241",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/8/e8f7c8ea-e9c1-4d78-972c-15c4014915a0.png?1592709241",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/8/e8f7c8ea-e9c1-4d78-972c-15c4014915a0.jpg?1592709241",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/8/e8f7c8ea-e9c1-4d78-972c-15c4014915a0.jpg?1592709241"
    },
    mana_cost: "{4}{R}{R}{R}",
    cmc: 7,
    type_line: "Creature — Elemental",
    oracle_text:
      "When Tyrant of Discord enters the battlefield, target opponent chooses a permanent they control at random and sacrifices it. If a nonland permanent is sacrificed this way, repeat this process.",
    power: "7",
    toughness: "7",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/e8f7c8ea-e9c1-4d78-972c-15c4014915a0/rulings",
    artist: "Richard Wright",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=276194"
    }
  },
  {
    object: "card",
    id: "e27c6a13-d19f-44c5-9e68-0153a627b343",
    oracle_id: "85b8902f-2515-4ded-b28a-a83334f089f1",
    multiverse_ids: [420669],
    name: "Boompile",
    uri: "https://api.scryfall.com/cards/e27c6a13-d19f-44c5-9e68-0153a627b343",
    scryfall_uri: "https://scryfall.com/card/c16/52/boompile?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/2/e27c6a13-d19f-44c5-9e68-0153a627b343.jpg?1562423173",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/2/e27c6a13-d19f-44c5-9e68-0153a627b343.jpg?1562423173",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/2/e27c6a13-d19f-44c5-9e68-0153a627b343.jpg?1562423173",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/2/e27c6a13-d19f-44c5-9e68-0153a627b343.png?1562423173",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/2/e27c6a13-d19f-44c5-9e68-0153a627b343.jpg?1562423173",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/2/e27c6a13-d19f-44c5-9e68-0153a627b343.jpg?1562423173"
    },
    mana_cost: "{4}",
    cmc: 4,
    type_line: "Artifact",
    oracle_text:
      "{T}: Flip a coin. If you win the flip, destroy all nonland permanents.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/e27c6a13-d19f-44c5-9e68-0153a627b343/rulings",
    flavor_text:
      '"Fuses? We have more than enough! Now . . . which one was it?"\n—Flearan One-Eye, goblin engineer',
    artist: "Filip Burburan",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=420669"
    }
  },
  {
    object: "card",
    id: "a91376ed-5868-4887-8389-5ef5b9471786",
    oracle_id: "78497c54-7179-41b7-9454-7b915fd96cd5",
    multiverse_ids: [48073],
    mtgo_foil_id: 20086,
    name: "Fiery Gambit",
    uri: "https://api.scryfall.com/cards/a91376ed-5868-4887-8389-5ef5b9471786",
    scryfall_uri:
      "https://scryfall.com/card/mrd/90/fiery-gambit?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/9/a91376ed-5868-4887-8389-5ef5b9471786.jpg?1562153660",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/9/a91376ed-5868-4887-8389-5ef5b9471786.jpg?1562153660",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/9/a91376ed-5868-4887-8389-5ef5b9471786.jpg?1562153660",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/9/a91376ed-5868-4887-8389-5ef5b9471786.png?1562153660",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/9/a91376ed-5868-4887-8389-5ef5b9471786.jpg?1562153660",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/9/a91376ed-5868-4887-8389-5ef5b9471786.jpg?1562153660"
    },
    mana_cost: "{2}{R}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text:
      "Flip a coin until you lose a flip or choose to stop flipping. If you lose a flip, Fiery Gambit has no effect. If you win one or more flips, Fiery Gambit deals 3 damage to target creature. If you win two or more flips, Fiery Gambit deals 6 damage to each opponent. If you win three or more flips, draw nine cards and untap all lands you control.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/a91376ed-5868-4887-8389-5ef5b9471786/rulings",
    artist: "Scott M. Fischer",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=48073"
    }
  },
  {
    object: "card",
    id: "95b44933-6b0b-426a-97d4-7a7cf6ad1d65",
    oracle_id: "b6756608-a618-4e26-a090-ea8fc992def1",
    multiverse_ids: [4053],
    name: "Game of Chaos",
    uri: "https://api.scryfall.com/cards/95b44933-6b0b-426a-97d4-7a7cf6ad1d65",
    scryfall_uri:
      "https://scryfall.com/card/5ed/232/game-of-chaos?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/5/95b44933-6b0b-426a-97d4-7a7cf6ad1d65.jpg?1562592782",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/5/95b44933-6b0b-426a-97d4-7a7cf6ad1d65.jpg?1562592782",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/5/95b44933-6b0b-426a-97d4-7a7cf6ad1d65.jpg?1562592782",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/5/95b44933-6b0b-426a-97d4-7a7cf6ad1d65.png?1562592782",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/5/95b44933-6b0b-426a-97d4-7a7cf6ad1d65.jpg?1562592782",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/5/95b44933-6b0b-426a-97d4-7a7cf6ad1d65.jpg?1562592782"
    },
    mana_cost: "{R}{R}{R}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text:
      "Flip a coin. If you win the flip, you gain 1 life and target opponent loses 1 life, and you decide whether to flip again. If you lose the flip, you lose 1 life and that opponent gains 1 life, and that player decides whether to flip again. Double the life stakes with each flip.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/95b44933-6b0b-426a-97d4-7a7cf6ad1d65/rulings",
    artist: "Thomas Gianni",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=4053"
    }
  },
  {
    object: "card",
    id: "740b85ff-61a3-4de0-a055-60daad13ac2a",
    oracle_id: "a2f5a5fd-14dc-48e8-bdb0-984a83288023",
    multiverse_ids: [25682],
    mtgo_foil_id: 15669,
    name: "Mana Clash",
    uri: "https://api.scryfall.com/cards/740b85ff-61a3-4de0-a055-60daad13ac2a",
    scryfall_uri: "https://scryfall.com/card/7ed/202/mana-clash?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/7/4/740b85ff-61a3-4de0-a055-60daad13ac2a.jpg?1562240562",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/4/740b85ff-61a3-4de0-a055-60daad13ac2a.jpg?1562240562",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/7/4/740b85ff-61a3-4de0-a055-60daad13ac2a.jpg?1562240562",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/7/4/740b85ff-61a3-4de0-a055-60daad13ac2a.png?1562240562",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/4/740b85ff-61a3-4de0-a055-60daad13ac2a.jpg?1562240562",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/4/740b85ff-61a3-4de0-a055-60daad13ac2a.jpg?1562240562"
    },
    mana_cost: "{R}",
    cmc: 1,
    type_line: "Sorcery",
    oracle_text:
      "You and target opponent each flip a coin. Mana Clash deals 1 damage to each player whose coin comes up tails. Repeat this process until both players' coins come up heads on the same flip.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/740b85ff-61a3-4de0-a055-60daad13ac2a/rulings",
    artist: "Larry Elmore",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=25682"
    }
  },
  {
    object: "card",
    id: "052b743a-456d-49c3-881e-4f30c7645fa5",
    oracle_id: "e07a7c75-b7b7-4c2d-bd7d-5f056cde871d",
    multiverse_ids: [19721],
    mtgo_foil_id: 13102,
    name: "Puppet's Verdict",
    uri: "https://api.scryfall.com/cards/052b743a-456d-49c3-881e-4f30c7645fa5",
    scryfall_uri:
      "https://scryfall.com/card/mmq/208/puppets-verdict?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/0/5/052b743a-456d-49c3-881e-4f30c7645fa5.jpg?1562378946",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/5/052b743a-456d-49c3-881e-4f30c7645fa5.jpg?1562378946",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/0/5/052b743a-456d-49c3-881e-4f30c7645fa5.jpg?1562378946",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/0/5/052b743a-456d-49c3-881e-4f30c7645fa5.png?1562378946",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/5/052b743a-456d-49c3-881e-4f30c7645fa5.jpg?1562378946",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/5/052b743a-456d-49c3-881e-4f30c7645fa5.jpg?1562378946"
    },
    mana_cost: "{1}{R}{R}",
    cmc: 3,
    type_line: "Instant",
    oracle_text:
      "Flip a coin. If you win the flip, destroy all creatures with power 2 or less. If you lose the flip, destroy all creatures with power 3 or greater.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/052b743a-456d-49c3-881e-4f30c7645fa5/rulings",
    flavor_text: '"What was heads again?"\n—Mercadian magistrate',
    artist: "Edward P. Beard, Jr.",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=19721"
    }
  },
  {
    object: "card",
    id: "4e3c30c7-c52e-41a0-b7c2-21d39c05160b",
    oracle_id: "03a4b997-4738-41a9-933f-e1f765e3a75a",
    multiverse_ids: [457343],
    name: "Rakdos, the Showstopper",
    uri: "https://api.scryfall.com/cards/4e3c30c7-c52e-41a0-b7c2-21d39c05160b",
    scryfall_uri:
      "https://scryfall.com/card/rna/199/rakdos-the-showstopper?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/e/4e3c30c7-c52e-41a0-b7c2-21d39c05160b.jpg?1584831753",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/e/4e3c30c7-c52e-41a0-b7c2-21d39c05160b.jpg?1584831753",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/e/4e3c30c7-c52e-41a0-b7c2-21d39c05160b.jpg?1584831753",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/e/4e3c30c7-c52e-41a0-b7c2-21d39c05160b.png?1584831753",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/e/4e3c30c7-c52e-41a0-b7c2-21d39c05160b.jpg?1584831753",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/e/4e3c30c7-c52e-41a0-b7c2-21d39c05160b.jpg?1584831753"
    },
    mana_cost: "{4}{B}{R}",
    cmc: 6,
    type_line: "Legendary Creature — Demon",
    oracle_text:
      "Flying, trample\nWhen Rakdos, the Showstopper enters the battlefield, flip a coin for each creature that isn't a Demon, Devil, or Imp. Destroy each creature whose coin comes up tails.",
    power: "6",
    toughness: "6",
    colors: ["B", "R"],
    color_identity: ["B", "R"],

    rulings_uri:
      "https://api.scryfall.com/cards/4e3c30c7-c52e-41a0-b7c2-21d39c05160b/rulings",
    watermark: "rakdos",
    flavor_text: '"Entertain me."',
    artist: "Viktor Titov",
    frame_effects: ["legendary"],
    preview: {
      source: "Sean Plott (Day9TV)",
      source_uri: "https://twitter.com/day9tv/status/1080871410006781952",
      previewed_at: "2019-01-03"
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=457343"
    }
  },
  {
    object: "card",
    id: "11f68867-a46c-447f-9061-2bc4dbdde206",
    oracle_id: "1b95970c-e7eb-41c4-a8d2-9889b64b3c63",
    multiverse_ids: [376441],
    mtgo_foil_id: 51385,
    name: "Order of Succession",
    uri: "https://api.scryfall.com/cards/11f68867-a46c-447f-9061-2bc4dbdde206",
    scryfall_uri:
      "https://scryfall.com/card/c13/52/order-of-succession?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/1/1/11f68867-a46c-447f-9061-2bc4dbdde206.jpg?1562898700",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/1/11f68867-a46c-447f-9061-2bc4dbdde206.jpg?1562898700",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/1/1/11f68867-a46c-447f-9061-2bc4dbdde206.jpg?1562898700",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/1/1/11f68867-a46c-447f-9061-2bc4dbdde206.png?1562898700",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/1/11f68867-a46c-447f-9061-2bc4dbdde206.jpg?1562898700",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/11f68867-a46c-447f-9061-2bc4dbdde206.jpg?1562898700"
    },
    mana_cost: "{3}{U}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text:
      "Choose left or right. Starting with you and proceeding in the chosen direction, each player chooses a creature controlled by the next player in that direction. Each player gains control of the creature they chose.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/11f68867-a46c-447f-9061-2bc4dbdde206/rulings",
    flavor_text: '"Long live . . . me."',
    artist: "Magali Villeneuve",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=376441"
    }
  },
  {
    object: "card",
    id: "1c77925b-0944-4b2b-b389-42bf17907b34",
    oracle_id: "026b7221-0caf-4c8b-8c1b-e7de836797b7",
    multiverse_ids: [446898],
    name: "Mirrorweave",
    uri: "https://api.scryfall.com/cards/1c77925b-0944-4b2b-b389-42bf17907b34",
    scryfall_uri:
      "https://scryfall.com/card/cm2/162/mirrorweave?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/1/c/1c77925b-0944-4b2b-b389-42bf17907b34.jpg?1562272856",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/c/1c77925b-0944-4b2b-b389-42bf17907b34.jpg?1562272856",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/1/c/1c77925b-0944-4b2b-b389-42bf17907b34.jpg?1562272856",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/1/c/1c77925b-0944-4b2b-b389-42bf17907b34.png?1562272856",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/c/1c77925b-0944-4b2b-b389-42bf17907b34.jpg?1562272856",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/c/1c77925b-0944-4b2b-b389-42bf17907b34.jpg?1562272856"
    },
    mana_cost: "{2}{W/U}{W/U}",
    cmc: 4,
    type_line: "Instant",
    oracle_text:
      "Each other creature becomes a copy of target nonlegendary creature until end of turn.",
    colors: ["U", "W"],
    color_identity: ["U", "W"],

    rulings_uri:
      "https://api.scryfall.com/cards/1c77925b-0944-4b2b-b389-42bf17907b34/rulings",
    flavor_text:
      '"Those who are different are untrustworthy, unpredictable. Put your safety in the hands of your own kind."\n—Bowen, Barrenton guardcaptain',
    artist: "Jim Pavelec",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=446898"
    }
  },
  {
    object: "card",
    id: "f9cff40b-9cae-47d0-8df4-c287a17a33e4",
    oracle_id: "7d075b8a-a606-4590-b52b-b4ef3a9e342f",
    multiverse_ids: [378420],
    mtgo_foil_id: 51796,
    name: "Perplexing Chimera",
    uri: "https://api.scryfall.com/cards/f9cff40b-9cae-47d0-8df4-c287a17a33e4",
    scryfall_uri:
      "https://scryfall.com/card/bng/48/perplexing-chimera?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/9/f9cff40b-9cae-47d0-8df4-c287a17a33e4.jpg?1593091744",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/9/f9cff40b-9cae-47d0-8df4-c287a17a33e4.jpg?1593091744",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/9/f9cff40b-9cae-47d0-8df4-c287a17a33e4.jpg?1593091744",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/9/f9cff40b-9cae-47d0-8df4-c287a17a33e4.png?1593091744",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/9/f9cff40b-9cae-47d0-8df4-c287a17a33e4.jpg?1593091744",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/9/f9cff40b-9cae-47d0-8df4-c287a17a33e4.jpg?1593091744"
    },
    mana_cost: "{4}{U}",
    cmc: 5,
    type_line: "Enchantment Creature — Chimera",
    oracle_text:
      "Whenever an opponent casts a spell, you may exchange control of Perplexing Chimera and that spell. If you do, you may choose new targets for the spell. (If the spell becomes a permanent, you control that permanent.)",
    power: "3",
    toughness: "3",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/f9cff40b-9cae-47d0-8df4-c287a17a33e4/rulings",
    artist: "Tyler Jacobson",
    frame_effects: ["nyxtouched"],
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=378420"
    }
  },
  {
    object: "card",
    id: "b0937274-d5cb-4790-8c10-804f537c5581",
    oracle_id: "69e1a166-02f7-43f8-b099-dbb01034370c",
    multiverse_ids: [191098],
    mtgo_foil_id: 32872,
    name: "Sphinx Ambassador",
    uri: "https://api.scryfall.com/cards/b0937274-d5cb-4790-8c10-804f537c5581",
    scryfall_uri:
      "https://scryfall.com/card/m10/73/sphinx-ambassador?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/b/0/b0937274-d5cb-4790-8c10-804f537c5581.jpg?1561992164",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/0/b0937274-d5cb-4790-8c10-804f537c5581.jpg?1561992164",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/b/0/b0937274-d5cb-4790-8c10-804f537c5581.jpg?1561992164",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/b/0/b0937274-d5cb-4790-8c10-804f537c5581.png?1561992164",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/0/b0937274-d5cb-4790-8c10-804f537c5581.jpg?1561992164",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/0/b0937274-d5cb-4790-8c10-804f537c5581.jpg?1561992164"
    },
    mana_cost: "{5}{U}{U}",
    cmc: 7,
    type_line: "Creature — Sphinx",
    oracle_text:
      "Flying\nWhenever Sphinx Ambassador deals combat damage to a player, search that player's library for a card, then that player chooses a card name. If you searched for a creature card that doesn't have that name, you may put it onto the battlefield under your control. Then that player shuffles.",
    power: "5",
    toughness: "5",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/b0937274-d5cb-4790-8c10-804f537c5581/rulings",
    artist: "Jim Murray",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=191098"
    }
  },
  {
    object: "card",
    id: "16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f",
    oracle_id: "3a30089d-cd2d-49be-9b06-7a2454117692",
    multiverse_ids: [450638],
    name: "Aminatou, the Fateshifter",
    uri: "https://api.scryfall.com/cards/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f",
    scryfall_uri:
      "https://scryfall.com/card/c18/37/aminatou-the-fateshifter?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/1/6/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f.jpg?1592710241",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/6/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f.jpg?1592710241",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/1/6/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f.jpg?1592710241",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/1/6/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f.png?1592710241",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/6/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f.jpg?1592710241",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/6/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f.jpg?1592710241"
    },
    mana_cost: "{W}{U}{B}",
    cmc: 3,
    type_line: "Legendary Planeswalker — Aminatou",
    oracle_text:
      "+1: Draw a card, then put a card from your hand on top of your library.\n−1: Exile another target permanent you own, then return it to the battlefield under your control.\n−6: Choose left or right. Each player gains control of all nonland permanents other than Aminatou, the Fateshifter controlled by the next player in the chosen direction.\nAminatou, the Fateshifter can be your commander.",
    loyalty: "3",
    colors: ["B", "U", "W"],
    color_identity: ["B", "U", "W"],

    rulings_uri:
      "https://api.scryfall.com/cards/16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f/rulings",
    artist: "Seb McKinnon",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=450638"
    }
  },
  {
    object: "card",
    id: "05939f15-2d95-47df-b66f-131c3e7ea95f",
    oracle_id: "506714a8-b9c2-443a-a9e8-ef9130e674ba",
    multiverse_ids: [88803],
    mtgo_foil_id: 22207,
    name: "Choice of Damnations",
    uri: "https://api.scryfall.com/cards/05939f15-2d95-47df-b66f-131c3e7ea95f",
    scryfall_uri:
      "https://scryfall.com/card/sok/62/choice-of-damnations?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/0/5/05939f15-2d95-47df-b66f-131c3e7ea95f.jpg?1562492064",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/5/05939f15-2d95-47df-b66f-131c3e7ea95f.jpg?1562492064",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/0/5/05939f15-2d95-47df-b66f-131c3e7ea95f.jpg?1562492064",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/0/5/05939f15-2d95-47df-b66f-131c3e7ea95f.png?1562492064",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/5/05939f15-2d95-47df-b66f-131c3e7ea95f.jpg?1562492064",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/5/05939f15-2d95-47df-b66f-131c3e7ea95f.jpg?1562492064"
    },
    mana_cost: "{5}{B}",
    cmc: 6,
    type_line: "Sorcery — Arcane",
    oracle_text:
      "Target opponent chooses a number. You may have that player lose that much life. If you don't, that player sacrifices all but that many permanents.",
    colors: ["B"],
    color_identity: ["B"],

    rulings_uri:
      "https://api.scryfall.com/cards/05939f15-2d95-47df-b66f-131c3e7ea95f/rulings",
    flavor_text:
      '"Life is a series of choices between bad and worse."\n—Toshiro Umezawa',
    artist: "Tim Hildebrandt",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=88803"
    }
  },
  {
    object: "card",
    id: "f18f2832-07c5-47be-8966-b250fb997f78",
    oracle_id: "70d4f764-fca1-477a-9b0f-bbfcc1f7dfb1",
    multiverse_ids: [43573],
    mtgo_foil_id: 18783,
    name: "Dimensional Breach",
    uri: "https://api.scryfall.com/cards/f18f2832-07c5-47be-8966-b250fb997f78",
    scryfall_uri:
      "https://scryfall.com/card/scg/9/dimensional-breach?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/1/f18f2832-07c5-47be-8966-b250fb997f78.jpg?1562536853",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/1/f18f2832-07c5-47be-8966-b250fb997f78.jpg?1562536853",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/1/f18f2832-07c5-47be-8966-b250fb997f78.jpg?1562536853",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/1/f18f2832-07c5-47be-8966-b250fb997f78.png?1562536853",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/1/f18f2832-07c5-47be-8966-b250fb997f78.jpg?1562536853",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/1/f18f2832-07c5-47be-8966-b250fb997f78.jpg?1562536853"
    },
    mana_cost: "{5}{W}{W}",
    cmc: 7,
    type_line: "Sorcery",
    oracle_text:
      "Exile all permanents. For as long as any of those cards remain exiled, at the beginning of each player's upkeep, that player returns one of the exiled cards they own to the battlefield.",
    colors: ["W"],
    color_identity: ["W"],

    rulings_uri:
      "https://api.scryfall.com/cards/f18f2832-07c5-47be-8966-b250fb997f78/rulings",
    artist: "Dave Dorman",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=43573"
    }
  },
  {
    object: "card",
    id: "ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f",
    oracle_id: "af471455-6b9f-4c14-bb90-a74a44ecd247",
    multiverse_ids: [470598],
    name: "Aeon Engine",
    uri: "https://api.scryfall.com/cards/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f",
    scryfall_uri: "https://scryfall.com/card/c19/52/aeon-engine?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/a/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f.jpg?1568003750",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/a/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f.jpg?1568003750",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/a/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f.jpg?1568003750",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/a/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f.png?1568003750",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/a/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f.jpg?1568003750",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/a/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f.jpg?1568003750"
    },
    mana_cost: "{5}",
    cmc: 5,
    type_line: "Artifact",
    oracle_text:
      "Aeon Engine enters the battlefield tapped.\n{T}, Exile Aeon Engine: Reverse the game's turn order. (For example, if play had proceeded clockwise around the table, it now goes counterclockwise.)",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f/rulings",
    flavor_text:
      '"Paradox? Eh, we\'ll worry about that yesterday."\n—Edorin, the Timesmith',
    artist: "Ralph Horsley",
    preview: {
      source: "EDHREC",
      source_uri: "https://articles.edhrec.com/commander-2019-preview-card/",
      previewed_at: "2019-08-08"
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=470598"
    }
  },
  {
    object: "card",
    id: "61e7984b-8c20-4867-8045-4fb52cd6e2d4",
    oracle_id: "68f34b1c-e06b-4859-b7c0-62148341e38c",
    multiverse_ids: [484883],
    name: "Nascent Metamorph",
    uri: "https://api.scryfall.com/cards/61e7984b-8c20-4867-8045-4fb52cd6e2d4",
    scryfall_uri:
      "https://scryfall.com/card/c20/36/nascent-metamorph?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/1/61e7984b-8c20-4867-8045-4fb52cd6e2d4.jpg?1591319461",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/1/61e7984b-8c20-4867-8045-4fb52cd6e2d4.jpg?1591319461",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/1/61e7984b-8c20-4867-8045-4fb52cd6e2d4.jpg?1591319461",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/1/61e7984b-8c20-4867-8045-4fb52cd6e2d4.png?1591319461",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/1/61e7984b-8c20-4867-8045-4fb52cd6e2d4.jpg?1591319461",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/1/61e7984b-8c20-4867-8045-4fb52cd6e2d4.jpg?1591319461"
    },
    mana_cost: "{1}{U}",
    cmc: 2,
    type_line: "Creature — Shapeshifter",
    oracle_text:
      "Whenever Nascent Metamorph attacks or blocks, target opponent reveals cards from the top of their library until they reveal a creature card. Nascent Metamorph becomes a copy of that card until end of turn. Then that player puts all cards revealed this way on the bottom of their library in a random order.",
    power: "1",
    toughness: "1",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/61e7984b-8c20-4867-8045-4fb52cd6e2d4/rulings",
    artist: "Brian Valeza",
    preview: {
      source: "Commander Central",
      source_uri: "https://twitter.com/CMDRCentral/status/1246498406157168640",
      previewed_at: "2020-04-04"
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=484883"
    }
  },
  {
    object: "card",
    id: "6d16da68-85f6-4d54-9751-9cf046f5e99a",
    oracle_id: "4608c663-e088-40ca-a915-b6e39253eb98",
    multiverse_ids: [75340],
    mtgo_foil_id: 21933,
    name: "Pain's Reward",
    uri: "https://api.scryfall.com/cards/6d16da68-85f6-4d54-9751-9cf046f5e99a",
    scryfall_uri:
      "https://scryfall.com/card/sok/85/pains-reward?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/d/6d16da68-85f6-4d54-9751-9cf046f5e99a.jpg?1562494206",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/d/6d16da68-85f6-4d54-9751-9cf046f5e99a.jpg?1562494206",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/d/6d16da68-85f6-4d54-9751-9cf046f5e99a.jpg?1562494206",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/d/6d16da68-85f6-4d54-9751-9cf046f5e99a.png?1562494206",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/d/6d16da68-85f6-4d54-9751-9cf046f5e99a.jpg?1562494206",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/d/6d16da68-85f6-4d54-9751-9cf046f5e99a.jpg?1562494206"
    },
    mana_cost: "{2}{B}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text:
      "Each player may bid life. You start the bidding with a bid of any number. In turn order, each player may top the high bid. The bidding ends if the high bid stands. The high bidder loses life equal to the high bid and draws four cards.",
    colors: ["B"],
    color_identity: ["B"],

    rulings_uri:
      "https://api.scryfall.com/cards/6d16da68-85f6-4d54-9751-9cf046f5e99a/rulings",
    artist: "Matt Cavotta",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=75340"
    }
  },
  {
    object: "card",
    id: "7a58c77f-7c15-44f4-8011-6046482a2d08",
    oracle_id: "c6861c50-d336-4352-a76d-ec22a86ec09e",
    multiverse_ids: [457236],
    name: "Amplifire",
    uri: "https://api.scryfall.com/cards/7a58c77f-7c15-44f4-8011-6046482a2d08",
    scryfall_uri: "https://scryfall.com/card/rna/92/amplifire?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/7/a/7a58c77f-7c15-44f4-8011-6046482a2d08.jpg?1584830780",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/a/7a58c77f-7c15-44f4-8011-6046482a2d08.jpg?1584830780",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/7/a/7a58c77f-7c15-44f4-8011-6046482a2d08.jpg?1584830780",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/7/a/7a58c77f-7c15-44f4-8011-6046482a2d08.png?1584830780",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/a/7a58c77f-7c15-44f4-8011-6046482a2d08.jpg?1584830780",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/a/7a58c77f-7c15-44f4-8011-6046482a2d08.jpg?1584830780"
    },
    mana_cost: "{2}{R}{R}",
    cmc: 4,
    type_line: "Creature — Elemental",
    oracle_text:
      "At the beginning of your upkeep, reveal cards from the top of your library until you reveal a creature card. Until your next turn, Amplifire's base power becomes twice that card's power and its base toughness becomes twice that card's toughness. Put the revealed cards on the bottom of your library in a random order.",
    power: "1",
    toughness: "1",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/7a58c77f-7c15-44f4-8011-6046482a2d08/rulings",
    artist: "Dan Scott",
    preview: {
      source: "Thundermo",
      source_uri: "https://twitter.com/Thundermo_HK/status/1080709562158796802",
      previewed_at: "2019-01-03"
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=457236"
    }
  },
  {
    object: "card",
    id: "31a8954f-467d-4eb9-8a48-d25bae9529b8",
    oracle_id: "8d0213d7-9e25-49d2-93fa-1d346cb2e869",
    multiverse_ids: [420858],
    name: "Akroan Horse",
    uri: "https://api.scryfall.com/cards/31a8954f-467d-4eb9-8a48-d25bae9529b8",
    scryfall_uri:
      "https://scryfall.com/card/c16/241/akroan-horse?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/3/1/31a8954f-467d-4eb9-8a48-d25bae9529b8.jpg?1562394382",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/1/31a8954f-467d-4eb9-8a48-d25bae9529b8.jpg?1562394382",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/3/1/31a8954f-467d-4eb9-8a48-d25bae9529b8.jpg?1562394382",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/3/1/31a8954f-467d-4eb9-8a48-d25bae9529b8.png?1562394382",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/1/31a8954f-467d-4eb9-8a48-d25bae9529b8.jpg?1562394382",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/1/31a8954f-467d-4eb9-8a48-d25bae9529b8.jpg?1562394382"
    },
    mana_cost: "{4}",
    cmc: 4,
    type_line: "Artifact Creature — Horse",
    oracle_text:
      "Defender\nWhen Akroan Horse enters the battlefield, an opponent gains control of it.\nAt the beginning of your upkeep, each opponent creates a 1/1 white Soldier creature token.",
    power: "0",
    toughness: "4",
    colors: [],
    color_identity: [],
    all_parts: [
      {
        object: "related_card",
        id: "31a8954f-467d-4eb9-8a48-d25bae9529b8",
        component: "combo_piece",
        name: "Akroan Horse",
        type_line: "Artifact Creature — Horse",
        uri:
          "https://api.scryfall.com/cards/31a8954f-467d-4eb9-8a48-d25bae9529b8"
      },
      {
        object: "related_card",
        id: "0a47f751-52f1-4042-85dd-ea222e5d969d",
        component: "token",
        name: "Soldier",
        type_line: "Token Creature — Soldier",
        uri:
          "https://api.scryfall.com/cards/0a47f751-52f1-4042-85dd-ea222e5d969d"
      }
    ],

    rulings_uri:
      "https://api.scryfall.com/cards/31a8954f-467d-4eb9-8a48-d25bae9529b8/rulings",
    artist: "Seb McKinnon",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=420858"
    }
  },
  {
    object: "card",
    id: "c390e074-bd30-4564-a39a-176af7df79f4",
    oracle_id: "e2998b41-0822-4e9c-b8b1-f47c400176e9",
    multiverse_ids: [97092],
    mtgo_foil_id: 24036,
    name: "Walking Archive",
    uri: "https://api.scryfall.com/cards/c390e074-bd30-4564-a39a-176af7df79f4",
    scryfall_uri:
      "https://scryfall.com/card/dis/169/walking-archive?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/3/c390e074-bd30-4564-a39a-176af7df79f4.jpg?1593274060",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/3/c390e074-bd30-4564-a39a-176af7df79f4.jpg?1593274060",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/3/c390e074-bd30-4564-a39a-176af7df79f4.jpg?1593274060",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/3/c390e074-bd30-4564-a39a-176af7df79f4.png?1593274060",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/3/c390e074-bd30-4564-a39a-176af7df79f4.jpg?1593274060",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/3/c390e074-bd30-4564-a39a-176af7df79f4.jpg?1593274060"
    },
    mana_cost: "{3}",
    cmc: 3,
    type_line: "Artifact Creature — Golem",
    oracle_text:
      "Defender (This creature can't attack.)\nWalking Archive enters the battlefield with a +1/+1 counter on it.\nAt the beginning of each player's upkeep, that player draws a card for each +1/+1 counter on Walking Archive.\n{2}{W}{U}: Put a +1/+1 counter on Walking Archive.",
    power: "1",
    toughness: "1",
    colors: [],
    color_identity: ["U", "W"],

    rulings_uri:
      "https://api.scryfall.com/cards/c390e074-bd30-4564-a39a-176af7df79f4/rulings",
    watermark: "azorius",
    artist: "Heather Hudson",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=97092"
    }
  },
  {
    object: "card",
    id: "f61ea59a-1db0-4e6b-bcde-19787c76a49b",
    oracle_id: "b8b51a29-a2be-4b97-a73c-ea512d3d5622",
    multiverse_ids: [113512],
    mtgo_foil_id: 25618,
    name: "Norin the Wary",
    uri: "https://api.scryfall.com/cards/f61ea59a-1db0-4e6b-bcde-19787c76a49b",
    scryfall_uri:
      "https://scryfall.com/card/tsp/171/norin-the-wary?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/6/f61ea59a-1db0-4e6b-bcde-19787c76a49b.jpg?1562946915",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/6/f61ea59a-1db0-4e6b-bcde-19787c76a49b.jpg?1562946915",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/6/f61ea59a-1db0-4e6b-bcde-19787c76a49b.jpg?1562946915",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/6/f61ea59a-1db0-4e6b-bcde-19787c76a49b.png?1562946915",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/6/f61ea59a-1db0-4e6b-bcde-19787c76a49b.jpg?1562946915",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/6/f61ea59a-1db0-4e6b-bcde-19787c76a49b.jpg?1562946915"
    },
    mana_cost: "{R}",
    cmc: 1,
    type_line: "Legendary Creature — Human Warrior",
    oracle_text:
      "When a player casts a spell or a creature attacks, exile Norin the Wary. Return it to the battlefield under its owner's control at the beginning of the next end step.",
    power: "2",
    toughness: "1",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/f61ea59a-1db0-4e6b-bcde-19787c76a49b/rulings",
    flavor_text: '"I have a bad feeling about this."',
    artist: "Heather Hudson",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=113512"
    }
  },
  {
    object: "card",
    id: "b7153854-c548-48de-b9e2-72b7d9397563",
    oracle_id: "6f858405-dfe4-4ca2-b2e3-80ce8cda5522",
    multiverse_ids: [270806],
    mtgo_foil_id: 43784,
    name: "Vulshok Sorcerer",
    uri: "https://api.scryfall.com/cards/b7153854-c548-48de-b9e2-72b7d9397563",
    scryfall_uri:
      "https://scryfall.com/card/ddi/50/vulshok-sorcerer?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/b/7/b7153854-c548-48de-b9e2-72b7d9397563.jpg?1581708504",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/7/b7153854-c548-48de-b9e2-72b7d9397563.jpg?1581708504",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/b/7/b7153854-c548-48de-b9e2-72b7d9397563.jpg?1581708504",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/b/7/b7153854-c548-48de-b9e2-72b7d9397563.png?1581708504",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/7/b7153854-c548-48de-b9e2-72b7d9397563.jpg?1581708504",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/7/b7153854-c548-48de-b9e2-72b7d9397563.jpg?1581708504"
    },
    mana_cost: "{1}{R}{R}",
    cmc: 3,
    type_line: "Creature — Human Shaman",
    oracle_text: "Haste\n{T}: Vulshok Sorcerer deals 1 damage to any target.",
    power: "1",
    toughness: "1",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/b7153854-c548-48de-b9e2-72b7d9397563/rulings",
    flavor_text:
      "Vulshok sorcerers train by leaping into electrified storm clouds. Dead or alive, they come back down with smiles on their faces.",
    artist: "rk post",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=270806"
    }
  },
  {
    object: "card",
    id: "a2a31bc7-cb98-4199-b0dc-3f496e9f9dca",
    oracle_id: "5fa4607a-6731-4599-80f3-19d6097b4b28",
    multiverse_ids: [109730],
    mtgo_foil_id: 26066,
    name: "Serrated Arrows",
    uri: "https://api.scryfall.com/cards/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca",
    scryfall_uri:
      "https://scryfall.com/card/tsb/114/serrated-arrows?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/2/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca.jpg?1562781476",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/2/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca.jpg?1562781476",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/2/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca.jpg?1562781476",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/2/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca.png?1562781476",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/2/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca.jpg?1562781476",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/2/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca.jpg?1562781476"
    },
    mana_cost: "{4}",
    cmc: 4,
    type_line: "Artifact",
    oracle_text:
      "Serrated Arrows enters the battlefield with three arrowhead counters on it.\nAt the beginning of your upkeep, if there are no arrowhead counters on Serrated Arrows, sacrifice it.\n{T}, Remove an arrowhead counter from Serrated Arrows: Put a -1/-1 counter on target creature.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/a2a31bc7-cb98-4199-b0dc-3f496e9f9dca/rulings",
    artist: "David A. Cherry",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=109730"
    }
  },
  {
    object: "card",
    id: "9c3f633f-538c-4581-b3cc-9285ed6bc4fe",
    oracle_id: "dea8c725-455e-4668-877a-df388fe22255",
    multiverse_ids: [3454],
    mtgo_foil_id: 7054,
    name: "Illicit Auction",
    uri: "https://api.scryfall.com/cards/9c3f633f-538c-4581-b3cc-9285ed6bc4fe",
    scryfall_uri:
      "https://scryfall.com/card/mir/183/illicit-auction?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/c/9c3f633f-538c-4581-b3cc-9285ed6bc4fe.jpg?1562720936",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/c/9c3f633f-538c-4581-b3cc-9285ed6bc4fe.jpg?1562720936",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/c/9c3f633f-538c-4581-b3cc-9285ed6bc4fe.jpg?1562720936",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/c/9c3f633f-538c-4581-b3cc-9285ed6bc4fe.png?1562720936",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/c/9c3f633f-538c-4581-b3cc-9285ed6bc4fe.jpg?1562720936",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/c/9c3f633f-538c-4581-b3cc-9285ed6bc4fe.jpg?1562720936"
    },
    mana_cost: "{3}{R}{R}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "Each player may bid life for control of target creature. You start the bidding with a bid of 0. In turn order, each player may top the high bid. The bidding ends if the high bid stands. The high bidder loses life equal to the high bid and gains control of the creature. (This effect lasts indefinitely.)",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/9c3f633f-538c-4581-b3cc-9285ed6bc4fe/rulings",
    artist: "Scott Kirschner",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=3454"
    }
  },
  {
    object: "card",
    id: "c0da6c46-e4f4-40bd-87d2-14154707131b",
    oracle_id: "9be5ca70-6fc2-4a7a-853e-cf5c810846aa",
    multiverse_ids: [476208],
    name: "Interplanar Brushwagg",
    uri: "https://api.scryfall.com/cards/c0da6c46-e4f4-40bd-87d2-14154707131b",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/79/interplanar-brushwagg?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/0/c0da6c46-e4f4-40bd-87d2-14154707131b.jpg?1582679913",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/0/c0da6c46-e4f4-40bd-87d2-14154707131b.jpg?1582679913",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/0/c0da6c46-e4f4-40bd-87d2-14154707131b.jpg?1582679913",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/0/c0da6c46-e4f4-40bd-87d2-14154707131b.png?1582679913",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/0/c0da6c46-e4f4-40bd-87d2-14154707131b.jpg?1582679913",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/0/c0da6c46-e4f4-40bd-87d2-14154707131b.jpg?1582679913"
    },
    mana_cost: "{3}{G}",
    cmc: 4,
    type_line: "Creature — Brushwagg",
    oracle_text:
      "Interplanar (This creature enters onto the interplanar battlefield. Players can't control creatures on the interplanar battlefield.)\nVigilance, haste\nWhenever a player attacks with a creature with power 4 or greater, Interplanar Brushwagg also attacks the player or planeswalker that creature is attacking.",
    power: "6",
    toughness: "4",
    colors: ["G"],
    color_identity: ["G"],

    rulings_uri:
      "https://api.scryfall.com/cards/c0da6c46-e4f4-40bd-87d2-14154707131b/rulings",
    artist: "John Penick",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476208"
    }
  },
  {
    object: "card",
    id: "a734f1d9-17a1-4dea-bdec-b070ababe31d",
    oracle_id: "69909846-94f9-4b2c-918f-274ba2aa4279",
    multiverse_ids: [476233],
    name: "Wrath of Sod",
    uri: "https://api.scryfall.com/cards/a734f1d9-17a1-4dea-bdec-b070ababe31d",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/103/wrath-of-sod?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/7/a734f1d9-17a1-4dea-bdec-b070ababe31d.jpg?1584375794",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/7/a734f1d9-17a1-4dea-bdec-b070ababe31d.jpg?1584375794",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/7/a734f1d9-17a1-4dea-bdec-b070ababe31d.jpg?1584375794",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/7/a734f1d9-17a1-4dea-bdec-b070ababe31d.png?1584375794",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/7/a734f1d9-17a1-4dea-bdec-b070ababe31d.jpg?1584375794",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/7/a734f1d9-17a1-4dea-bdec-b070ababe31d.jpg?1584375794"
    },
    mana_cost: "{2}{G}{W}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text:
      'Put a manabond counter on all creatures. (They lose all other abilities and become lands with "{T}: Add one mana of this card\'s color.")',
    colors: ["G", "W"],
    color_identity: ["G", "W"],
    produced_mana: ["B", "G", "R", "U", "W"],

    rulings_uri:
      "https://api.scryfall.com/cards/a734f1d9-17a1-4dea-bdec-b070ababe31d/rulings",
    artist: "Chad Kanotz",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476233"
    }
  },
  {
    object: "card",
    id: "7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9",
    oracle_id: "e51d8b31-17f6-417b-a9f5-f5da5ec534dd",
    multiverse_ids: [],
    name: "Naughty // Nice",
    uri: "https://api.scryfall.com/cards/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9",
    scryfall_uri:
      "https://scryfall.com/card/hho/12/naughty-nice?utm_source=api",
    layout: "split",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/7/e/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9.jpg?1617521514",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/e/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9.jpg?1617521514",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/7/e/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9.jpg?1617521514",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/7/e/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9.png?1617521514",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/e/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9.jpg?1617521514",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/e/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9.jpg?1617521514"
    },
    mana_cost: "{1}{B}{B} // {1}{W}{W}",
    cmc: 6,
    type_line: "Sorcery // Sorcery",
    colors: ["B", "W"],
    color_identity: ["B", "W"],
    card_faces: [
      {
        object: "card_face",
        name: "Naughty",
        mana_cost: "{1}{B}{B}",
        type_line: "Sorcery",
        oracle_text:
          "Search another target player's library for a card and put that card into your hand. Then shuffle that player's library.",
        artist: "Greg Staples"
      },
      {
        object: "card_face",
        name: "Nice",
        mana_cost: "{1}{W}{W}",
        type_line: "Sorcery",
        oracle_text:
          "Search your library for a card and put it into another target player's hand. Then shuffle your library.",
        artist: "Greg Staples"
      }
    ],

    rulings_uri:
      "https://api.scryfall.com/cards/7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9/rulings",
    artist: "Greg Staples"
  },
  {
    object: "card",
    id: "e177c12e-551a-4688-aa34-740f873dd37d",
    oracle_id: "d3c36e20-3c6c-423a-a9ba-8e8bd7b735e6",
    multiverse_ids: [],
    name: "Season's Beatings",
    uri: "https://api.scryfall.com/cards/e177c12e-551a-4688-aa34-740f873dd37d",
    scryfall_uri:
      "https://scryfall.com/card/hho/9/seasons-beatings?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/1/e177c12e-551a-4688-aa34-740f873dd37d.jpg?1593891206",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/1/e177c12e-551a-4688-aa34-740f873dd37d.jpg?1593891206",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/1/e177c12e-551a-4688-aa34-740f873dd37d.jpg?1593891206",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/1/e177c12e-551a-4688-aa34-740f873dd37d.png?1593891206",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/1/e177c12e-551a-4688-aa34-740f873dd37d.jpg?1593891206",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/1/e177c12e-551a-4688-aa34-740f873dd37d.jpg?1593891206"
    },
    mana_cost: "{R}{R}{R}{R}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text:
      "Family gathering — Each creature target player controls deals damage equal to its power to another random creature that player controls.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/e177c12e-551a-4688-aa34-740f873dd37d/rulings",
    flavor_text:
      "Arriving home, he suddenly longed for the bloodsoaked battlefields behind him.",
    artist: "Kev Walker",
    related_uris: {}
  },
  {
    object: "card",
    id: "af171b8b-05cd-4a05-ae0b-6e80935addab",
    oracle_id: "b91d2680-e6f4-490f-bd78-3162a4c270aa",
    multiverse_ids: [],
    name: "Evil Presents",
    uri: "https://api.scryfall.com/cards/af171b8b-05cd-4a05-ae0b-6e80935addab",
    scryfall_uri:
      "https://scryfall.com/card/hho/8/evil-presents?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/f/af171b8b-05cd-4a05-ae0b-6e80935addab.jpg?1607653909",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/f/af171b8b-05cd-4a05-ae0b-6e80935addab.jpg?1607653909",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/f/af171b8b-05cd-4a05-ae0b-6e80935addab.jpg?1607653909",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/f/af171b8b-05cd-4a05-ae0b-6e80935addab.png?1607653909",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/f/af171b8b-05cd-4a05-ae0b-6e80935addab.jpg?1607653909",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/f/af171b8b-05cd-4a05-ae0b-6e80935addab.jpg?1607653909"
    },
    mana_cost: "{2}{B}{B}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text:
      "Put a creature card from your hand into play under target opponent's control. That creature attacks each turn if able... and always attacks its controller.",
    colors: ["B"],
    color_identity: ["B"],

    rulings_uri:
      "https://api.scryfall.com/cards/af171b8b-05cd-4a05-ae0b-6e80935addab/rulings",
    flavor_text: "'Tis better to give than to receive.",
    artist: "Paul Bonner",
    related_uris: {}
  },
  {
    object: "card",
    id: "ba72c564-0ca6-4f52-b19a-175646965291",
    oracle_id: "e717c42b-3177-42e1-83c1-11da11d62aa5",
    multiverse_ids: [],
    name: "Gifts Given",
    uri: "https://api.scryfall.com/cards/ba72c564-0ca6-4f52-b19a-175646965291",
    scryfall_uri: "https://scryfall.com/card/hho/7/gifts-given?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/b/a/ba72c564-0ca6-4f52-b19a-175646965291.jpg?1610394040",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/a/ba72c564-0ca6-4f52-b19a-175646965291.jpg?1610394040",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/b/a/ba72c564-0ca6-4f52-b19a-175646965291.jpg?1610394040",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/b/a/ba72c564-0ca6-4f52-b19a-175646965291.png?1610394040",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/a/ba72c564-0ca6-4f52-b19a-175646965291.jpg?1610394040",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/a/ba72c564-0ca6-4f52-b19a-175646965291.jpg?1610394040"
    },
    mana_cost: "{3}{U}",
    cmc: 4,
    type_line: "Instant",
    oracle_text:
      "Search target opponent's library for four cards with different names and reveal them. That player chooses two of those cards. Put the chosen cards into the player's graveyard and the rest into your hand. Then that player shuffles their library.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/ba72c564-0ca6-4f52-b19a-175646965291/rulings",
    flavor_text: '"Thanks! You shouldn\'t have."',
    artist: "Jason Chan",
    related_uris: {}
  },
  {
    object: "card",
    id: "6cbda4a6-e01b-4df2-aee9-b6f14336b85f",
    oracle_id: "d61cd9f1-a0ea-42d0-8afa-2cf62c80ec4d",
    multiverse_ids: [],
    name: "Decorated Knight // Present Arms",
    uri: "https://api.scryfall.com/cards/6cbda4a6-e01b-4df2-aee9-b6f14336b85f",
    scryfall_uri:
      "https://scryfall.com/card/hho/19/decorated-knight-present-arms?utm_source=api",
    layout: "adventure",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/c/6cbda4a6-e01b-4df2-aee9-b6f14336b85f.jpg?1577374934",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/c/6cbda4a6-e01b-4df2-aee9-b6f14336b85f.jpg?1577374934",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/c/6cbda4a6-e01b-4df2-aee9-b6f14336b85f.jpg?1577374934",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/c/6cbda4a6-e01b-4df2-aee9-b6f14336b85f.png?1577374934",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/c/6cbda4a6-e01b-4df2-aee9-b6f14336b85f.jpg?1577374934",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/c/6cbda4a6-e01b-4df2-aee9-b6f14336b85f.jpg?1577374934"
    },
    mana_cost: "{3}{U} // {2}{U}",
    cmc: 4,
    type_line: "Creature — Human Knight // Sorcery — Adventure",
    power: "3",
    toughness: "3",
    colors: ["U"],
    color_identity: ["U"],
    card_faces: [
      {
        object: "card_face",
        name: "Decorated Knight",
        mana_cost: "{3}{U}",
        type_line: "Creature — Human Knight",
        oracle_text:
          "Whenever Decorated Knight attacks, draw a card from your original deck if it's outside the game.",
        power: "3",
        toughness: "3",
        artist: "Zoltan Boros"
      },
      {
        object: "card_face",
        name: "Present Arms",
        mana_cost: "{2}{U}",
        type_line: "Sorcery — Adventure",
        oracle_text:
          "Exchange your library with another deck you own from outside the game. Shuffle your library.",
        artist: "Zoltan Boros"
      }
    ],

    rulings_uri:
      "https://api.scryfall.com/cards/6cbda4a6-e01b-4df2-aee9-b6f14336b85f/rulings",
    artist: "Zoltan Boros",
    related_uris: {}
  },
  {
    object: "card",
    id: "830d5f87-1c8b-414a-a91e-4805f5bdca54",
    oracle_id: "ef2ca5fc-aadb-4490-98b0-fa34d9554c27",
    multiverse_ids: [439404],
    name: "Oddly Uneven",
    uri: "https://api.scryfall.com/cards/830d5f87-1c8b-414a-a91e-4805f5bdca54",
    scryfall_uri:
      "https://scryfall.com/card/ust/15/oddly-uneven?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/3/830d5f87-1c8b-414a-a91e-4805f5bdca54.jpg?1562922623",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/3/830d5f87-1c8b-414a-a91e-4805f5bdca54.jpg?1562922623",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/3/830d5f87-1c8b-414a-a91e-4805f5bdca54.jpg?1562922623",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/3/830d5f87-1c8b-414a-a91e-4805f5bdca54.png?1562922623",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/3/830d5f87-1c8b-414a-a91e-4805f5bdca54.jpg?1562922623",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/3/830d5f87-1c8b-414a-a91e-4805f5bdca54.jpg?1562922623"
    },
    mana_cost: "{3}{W}{W}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "Choose one —\n• Destroy each creature with an odd number of words in its name. (Hyphenated words are one word.)\n• Destroy each creature with an even number of words in its name.",
    colors: ["W"],
    color_identity: ["W"],

    rulings_uri:
      "https://api.scryfall.com/cards/830d5f87-1c8b-414a-a91e-4805f5bdca54/rulings",
    flavor_text: "The odds are good, but the goods are odd.",
    artist: "Ben Wootten",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=439404"
    }
  },
  {
    object: "card",
    id: "aea8ab0f-6898-4312-9989-915d6357515f",
    oracle_id: "15232fee-094f-4a6b-9511-c8e2e7a8c520",
    multiverse_ids: [9761],
    name: "Gerrymandering",
    uri: "https://api.scryfall.com/cards/aea8ab0f-6898-4312-9989-915d6357515f",
    scryfall_uri:
      "https://scryfall.com/card/ugl/59/gerrymandering?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/e/aea8ab0f-6898-4312-9989-915d6357515f.jpg?1562799140",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/e/aea8ab0f-6898-4312-9989-915d6357515f.jpg?1562799140",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/e/aea8ab0f-6898-4312-9989-915d6357515f.jpg?1562799140",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/e/aea8ab0f-6898-4312-9989-915d6357515f.png?1562799140",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/e/aea8ab0f-6898-4312-9989-915d6357515f.jpg?1562799140",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/e/aea8ab0f-6898-4312-9989-915d6357515f.jpg?1562799140"
    },
    mana_cost: "{2}{G}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text:
      "Exile all lands. Give each player a number of those cards chosen at random equal to the number of those cards the player controlled. Each player returns those cards to the battlefield under their control.",
    colors: ["G"],
    color_identity: ["G"],
    rulings_uri:
      "https://api.scryfall.com/cards/aea8ab0f-6898-4312-9989-915d6357515f/rulings",
    artist: "Doug Chaffee"
  }
];

export const NORMAL_CHAOS = BASE_CHAOS.map(card =>
  addAdditionalProperties(card)
);

export const CHAOS = [...CUSTOM_CHAOS, ...NORMAL_CHAOS];
