import {
  addAdditionalProperties,
  filterAPI,
  CHAOSOMENON_PROP,
  errataProp,
  urlProp,
  CHAOS_ONCE_PROP,
  CHAOS_PLAYER_CHOICE_PROP,
  CHAOS_MAX_PROP,
  randomTokenProp,
  CHAOS_TRIGGER_PROP
} from "../../../util/api";

// Curated and Truncated Scryfall API Results
export const CUSTOM_CHAOS = [
  {
    name: "Hike Timeout",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player suspend all creatures with time counters equal to their mana value.",
    show_blank: true,
    customProperties: [CHAOSOMENON_PROP, CHAOS_ONCE_PROP]
  },
  {
    name: "Hike Handout",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player reveals their hand and suspends all nonland cards with time counters equal to mana value, with minimum of 1.",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP]
  },
  {
    name: "Hikey Turvy",
    type_line: "Plane - Hike",
    oracle_text: "Randomly change the game mode. (Reasonable Switches only)",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP]
  },
  {
    name: "Sqwak Thy Neighbor",
    type_line: "Plane - Hike",
    oracle_text:
      "All players randomly change positions at the table. You now play the Hand, Library, Graveyard, Life Total, et all of the new position",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP]
  },
  {
    name: "Hike's Cliffside Market",
    type_line: "Plane - Hike",
    oracle_text: "Randomly redistribute life totals.",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP]
  },
  {
    name: "The Hike Millining",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player mills 10, then exiles three cards at random from their graveyard. Players may put any lands exiled this way into play, and may cast any spells exiled this way without paying their mana cost. Any player with no cards left in their library then shuffles their graveyard into their library.",
    show_blank: true,
    customProperties: [CHAOS_PLAYER_CHOICE_PROP]
  },
  {
    name: "Sproket Sproket",
    type_line: "Plane - UnHike",
    oracle_text: "Assemble a Contraption",
    show_blank: true,
    customProperties: [
      CHAOS_TRIGGER_PROP,
      randomTokenProp({
        text: "Assemble a Contraption",
        symbol: "ss ss-ust ss-rare ss-grad ss-2x mx-4",
        url:
          "https://api.scryfall.com/cards/random?q=t%3Acontraption%20include%3Aextras"
      })
    ]
  },
  {
    name: "Gather Party",
    type_line: "Plane - Faerûn",
    oracle_text:
      "Draw 1 card plus 1 additional card for each creature in your party.",
    show_blank: true,
    customProperties: [
      errataProp(
        "(Your party consists of up to one each of Cleric, Rogue, Warrior, and Wizard.)"
      ),
      CHAOS_PLAYER_CHOICE_PROP
    ]
  },
  {
    name: "Summon Goatdrazi",
    type_line: "Plane - Goatdrazi",
    oracle_text:
      "Create a tapped 0/1 White Goat with Annihilator 4, this creature doesn't untap during your untap step, and {8}: Untap all Goats you control",
    show_blank: true,
    customProperties: [CHAOS_MAX_PROP]
  },
  {
    name: "Y'All Start In a Tavern",
    type_line: "Plane - Faerûn",
    oracle_text:
      "Choose a D&D Class that you have played as a PC with at least one other player, create a token of the corresponding class.",
    show_blank: true,
    customProperties: [
      urlProp({
        url:
          "https://scryfall.com/search?q=t%3Aclass&unique=cards&as=grid&order=name",
        text: "Classes"
      }),
      CHAOS_ONCE_PROP
    ]
  },
  {
    name: "Shaken, not Stirred",
    type_line: "Plane - 007",
    oracle_text:
      "Create a 3/2 colorless legendary Eldrazi token named 'Sheweena, Martini Princess of the Night'.",
    show_blank: true,
    customProperties: [CHAOS_MAX_PROP]
  },
  {
    name: "Double Trouble",
    type_line: "Plane - Hike",
    oracle_text:
      "Until end of turn, whenever you cast a nonlegenday spell, you may copy it",
    show_blank: true,
    customProperties: [
      CHAOS_PLAYER_CHOICE_PROP,
      urlProp({
        text: "Lithoform Engine",
        url: "https://scryfall.com/card/znr/245/lithoform-engine"
      })
    ]
  },
  {
    name: "New Ones are Less Fun",
    type_line: "Plane - Hike",
    oracle_text: "Each player creates a random Sliver token",
    show_blank: true,
    customProperties: [
      CHAOS_TRIGGER_PROP,
      randomTokenProp({
        text: "Create A Token",
        symbol: "ms ms-token ss-rare ss-grad ms-2x mx-4",
        url:
          "https://api.scryfall.com/cards/random?q=t%3Asliver%20t%3Acreature%20include%3Aextras"
      })
    ]
  },
  {
    name: "Stangg and Friends",
    type_line: "Plane - Hike",
    oracle_text: "Create a random Legandary Creature token",
    show_blank: true,
    customProperties: [
      CHAOS_TRIGGER_PROP,
      randomTokenProp({
        text: "Create A Token",
        symbol: "ms ms-token ss-rare ss-grad ms-2x mx-4",
        url:
          "https://api.scryfall.com/cards/random?q=t%3Alegend%20t%3Acreature%20include%3Aextras"
      })
    ]
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
    id: "caff117f-844b-4d11-a104-930d7f238114",
    oracle_id: "34515b16-c9a4-4f98-8c77-416a7a523407",
    multiverse_ids: [489712],
    name: "Wrath of God",
    uri: "https://api.scryfall.com/cards/caff117f-844b-4d11-a104-930d7f238114",
    scryfall_uri:
      "https://scryfall.com/card/sld/185/wrath-of-god?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/a/caff117f-844b-4d11-a104-930d7f238114.jpg?1619122768",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/a/caff117f-844b-4d11-a104-930d7f238114.jpg?1619122768",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/a/caff117f-844b-4d11-a104-930d7f238114.jpg?1619122768",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/a/caff117f-844b-4d11-a104-930d7f238114.png?1619122768",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/a/caff117f-844b-4d11-a104-930d7f238114.jpg?1619122768",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/a/caff117f-844b-4d11-a104-930d7f238114.jpg?1619122768"
    },
    mana_cost: "{2}{W}{W}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text: "Destroy all creatures. They can't be regenerated.",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/664e6656-36a3-4635-9f33-9f8901afd397/rulings",
    artist: "Jermaine Rogers",
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
  },
  {
    object: "card",
    id: "ce427213-4ce5-478e-83d8-fe80ec446a58",
    oracle_id: "499dceab-1890-49c8-b35d-b059a1dc950f",
    multiverse_ids: [509639],
    name: "Stuffy Doll",
    uri: "https://api.scryfall.com/cards/ce427213-4ce5-478e-83d8-fe80ec446a58",
    scryfall_uri:
      "https://scryfall.com/card/tsr/274/stuffy-doll?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/e/ce427213-4ce5-478e-83d8-fe80ec446a58.jpg?1619399126",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/e/ce427213-4ce5-478e-83d8-fe80ec446a58.jpg?1619399126",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/e/ce427213-4ce5-478e-83d8-fe80ec446a58.jpg?1619399126",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/e/ce427213-4ce5-478e-83d8-fe80ec446a58.png?1619399126",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/e/ce427213-4ce5-478e-83d8-fe80ec446a58.jpg?1619399126",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/e/ce427213-4ce5-478e-83d8-fe80ec446a58.jpg?1619399126"
    },
    mana_cost: "{5}",
    cmc: 5,
    type_line: "Artifact Creature — Construct",
    oracle_text:
      "Indestructible\nAs Stuffy Doll enters the battlefield, choose a player.\nWhenever Stuffy Doll is dealt damage, it deals that much damage to the chosen player.\n{T}: Stuffy Doll deals 1 damage to itself.",
    colors: [],
    color_identity: [],
    rulings_uri:
      "https://api.scryfall.com/cards/ce427213-4ce5-478e-83d8-fe80ec446a58/rulings",
    artist: "Dave Allsop",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=509639"
    }
  },
  {
    object: "card",
    id: "86c336d2-cc14-4b74-a6f9-aab7a084d0de",
    oracle_id: "4f5a7b65-b7f4-4bad-acfd-35edfb8f86a7",
    multiverse_ids: [88969],
    name: "Phytohydra",
    uri: "https://api.scryfall.com/cards/86c336d2-cc14-4b74-a6f9-aab7a084d0de",
    scryfall_uri: "https://scryfall.com/card/rav/218/phytohydra?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/6/86c336d2-cc14-4b74-a6f9-aab7a084d0de.jpg?1598917218",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/6/86c336d2-cc14-4b74-a6f9-aab7a084d0de.jpg?1598917218",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/6/86c336d2-cc14-4b74-a6f9-aab7a084d0de.jpg?1598917218",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/6/86c336d2-cc14-4b74-a6f9-aab7a084d0de.png?1598917218",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/6/86c336d2-cc14-4b74-a6f9-aab7a084d0de.jpg?1598917218",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/6/86c336d2-cc14-4b74-a6f9-aab7a084d0de.jpg?1598917218"
    },
    mana_cost: "{2}{G}{W}{W}",
    cmc: 5,
    type_line: "Creature — Plant Hydra",
    oracle_text:
      "If damage would be dealt to Phytohydra, put that many +1/+1 counters on it instead.",
    colors: ["G", "W"],
    color_identity: ["G", "W"],
    rulings_uri:
      "https://api.scryfall.com/cards/86c336d2-cc14-4b74-a6f9-aab7a084d0de/rulings",
    artist: "Jim Murray",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=88969"
    }
  },
  {
    object: "card",
    id: "ad98e518-4ec9-403e-a978-217244262c8f",
    oracle_id: "5a20113c-7ea8-4edf-af9f-148ccd326a88",
    multiverse_ids: [442015],
    name: "Nyx-Fleece Ram",
    uri: "https://api.scryfall.com/cards/ad98e518-4ec9-403e-a978-217244262c8f",
    scryfall_uri:
      "https://scryfall.com/card/a25/26/nyx-fleece-ram?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/d/ad98e518-4ec9-403e-a978-217244262c8f.jpg?1562439724",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/d/ad98e518-4ec9-403e-a978-217244262c8f.jpg?1562439724",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/d/ad98e518-4ec9-403e-a978-217244262c8f.jpg?1562439724",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/d/ad98e518-4ec9-403e-a978-217244262c8f.png?1562439724",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/d/ad98e518-4ec9-403e-a978-217244262c8f.jpg?1562439724",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/d/ad98e518-4ec9-403e-a978-217244262c8f.jpg?1562439724"
    },
    mana_cost: "{1}{W}",
    cmc: 2,
    type_line: "Enchantment Creature — Sheep",
    oracle_text: "At the beginning of your upkeep, you gain 1 life.",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/ad98e518-4ec9-403e-a978-217244262c8f/rulings",
    artist: "Terese Nielsen",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=442015"
    }
  },
  {
    object: "card",
    id: "747788b4-42ab-4e3e-bdbe-eb5040432db1",
    oracle_id: "714f12f5-fe9a-4c8a-9929-2b9f554480cd",
    multiverse_ids: [479441],
    name: "Boomstacker",
    uri: "https://api.scryfall.com/cards/747788b4-42ab-4e3e-bdbe-eb5040432db1",
    scryfall_uri: "https://scryfall.com/card/und/49/boomstacker?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/7/4/747788b4-42ab-4e3e-bdbe-eb5040432db1.jpg?1583965622",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/4/747788b4-42ab-4e3e-bdbe-eb5040432db1.jpg?1583965622",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/7/4/747788b4-42ab-4e3e-bdbe-eb5040432db1.jpg?1583965622",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/7/4/747788b4-42ab-4e3e-bdbe-eb5040432db1.png?1583965622",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/4/747788b4-42ab-4e3e-bdbe-eb5040432db1.jpg?1583965622",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/4/747788b4-42ab-4e3e-bdbe-eb5040432db1.jpg?1583965622"
    },
    mana_cost: "{2}{R}",
    cmc: 3,
    type_line: "Creature — Goblin Artificer",
    oracle_text:
      "As Boomstacker enters the battlefield and whenever it attacks, stack two dice on top of it. (All dice must be stacked vertically, one on top of another.)\nBoomstacker gets +1/+1 for each die in its stack.\nBoomstacker attacks each combat if able.\nWhen the stack falls, sacrifice Boomstacker.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/747788b4-42ab-4e3e-bdbe-eb5040432db1/rulings",
    artist: "Jesper Ejsing",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=479441"
    }
  },
  {
    object: "card",
    id: "8d6e31cb-98c5-4145-bdef-666f3cea7eab",
    oracle_id: "8dcfa697-5350-43b9-896f-c5eefcc3893a",
    multiverse_ids: [208295],
    name: "Goldenglow Moth",
    uri: "https://api.scryfall.com/cards/8d6e31cb-98c5-4145-bdef-666f3cea7eab",
    scryfall_uri:
      "https://scryfall.com/card/m11/15/goldenglow-moth?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/d/8d6e31cb-98c5-4145-bdef-666f3cea7eab.jpg?1562467775",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/d/8d6e31cb-98c5-4145-bdef-666f3cea7eab.jpg?1562467775",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/d/8d6e31cb-98c5-4145-bdef-666f3cea7eab.jpg?1562467775",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/d/8d6e31cb-98c5-4145-bdef-666f3cea7eab.png?1562467775",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/d/8d6e31cb-98c5-4145-bdef-666f3cea7eab.jpg?1562467775",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/d/8d6e31cb-98c5-4145-bdef-666f3cea7eab.jpg?1562467775"
    },
    mana_cost: "{W}",
    cmc: 1,
    type_line: "Creature — Insect",
    oracle_text:
      "Flying\nWhenever Goldenglow Moth blocks, you may gain 4 life.",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/8d6e31cb-98c5-4145-bdef-666f3cea7eab/rulings",
    artist: "Howard Lyon",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=208295"
    }
  },
  {
    object: "card",
    id: "963f45d7-ce84-47af-ae1c-727172a31f0f",
    oracle_id: "b3122a15-c7ab-40f1-9632-f5fbc4484c59",
    multiverse_ids: [122070],
    name: "Karplusan Minotaur",
    uri: "https://api.scryfall.com/cards/963f45d7-ce84-47af-ae1c-727172a31f0f",
    scryfall_uri:
      "https://scryfall.com/card/csp/86/karplusan-minotaur?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/6/963f45d7-ce84-47af-ae1c-727172a31f0f.jpg?1593275262",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/6/963f45d7-ce84-47af-ae1c-727172a31f0f.jpg?1593275262",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/6/963f45d7-ce84-47af-ae1c-727172a31f0f.jpg?1593275262",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/6/963f45d7-ce84-47af-ae1c-727172a31f0f.png?1593275262",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/6/963f45d7-ce84-47af-ae1c-727172a31f0f.jpg?1593275262",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/6/963f45d7-ce84-47af-ae1c-727172a31f0f.jpg?1593275262"
    },
    mana_cost: "{2}{R}{R}",
    cmc: 4,
    type_line: "Creature — Minotaur Warrior",
    oracle_text:
      "Cumulative upkeep—Flip a coin. (At the beginning of your upkeep, put an age counter on this permanent, then sacrifice it unless you pay its upkeep cost for each age counter on it.)\nWhenever you win a coin flip, Karplusan Minotaur deals 1 damage to any target.\nWhenever you lose a coin flip, Karplusan Minotaur deals 1 damage to any target of an opponent's choice.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/963f45d7-ce84-47af-ae1c-727172a31f0f/rulings",
    artist: "Wayne England",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=122070"
    }
  },
  {
    object: "card",
    id: "e7b44893-e6d1-48d0-ba69-06b9569e1e38",
    oracle_id: "5bf49f39-b3d5-4148-8dc2-b5b5011769d2",
    multiverse_ids: [517599],
    name: "Adventurous Impulse",
    uri: "https://api.scryfall.com/cards/e7b44893-e6d1-48d0-ba69-06b9569e1e38",
    scryfall_uri:
      "https://scryfall.com/card/sta/49/adventurous-impulse?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/7/e7b44893-e6d1-48d0-ba69-06b9569e1e38.jpg?1623961535",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/7/e7b44893-e6d1-48d0-ba69-06b9569e1e38.jpg?1623961535",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/7/e7b44893-e6d1-48d0-ba69-06b9569e1e38.jpg?1623961535",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/7/e7b44893-e6d1-48d0-ba69-06b9569e1e38.png?1623961535",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/7/e7b44893-e6d1-48d0-ba69-06b9569e1e38.jpg?1623961535",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/7/e7b44893-e6d1-48d0-ba69-06b9569e1e38.jpg?1623961535"
    },
    mana_cost: "{G}",
    cmc: 1,
    type_line: "Sorcery",
    oracle_text:
      "Look at the top three cards of your library. You may reveal a creature or land card from among them and put it into your hand. Put the rest on the bottom of your library in any order.",
    colors: ["G"],
    color_identity: ["G"],
    rulings_uri:
      "https://api.scryfall.com/cards/e7b44893-e6d1-48d0-ba69-06b9569e1e38/rulings",
    artist: "Minttu Hynninen",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=517599"
    }
  },
  {
    object: "card",
    id: "de4b9a07-6631-477a-8c77-3b04f211439d",
    oracle_id: "27ca27f0-95a5-4292-b30b-1db3e9d639f8",
    multiverse_ids: [435336],
    name: "Commune with Dinosaurs",
    uri: "https://api.scryfall.com/cards/de4b9a07-6631-477a-8c77-3b04f211439d",
    scryfall_uri:
      "https://scryfall.com/card/xln/181/commune-with-dinosaurs?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/e/de4b9a07-6631-477a-8c77-3b04f211439d.jpg?1562565270",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/e/de4b9a07-6631-477a-8c77-3b04f211439d.jpg?1562565270",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/e/de4b9a07-6631-477a-8c77-3b04f211439d.jpg?1562565270",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/e/de4b9a07-6631-477a-8c77-3b04f211439d.png?1562565270",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/e/de4b9a07-6631-477a-8c77-3b04f211439d.jpg?1562565270",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/e/de4b9a07-6631-477a-8c77-3b04f211439d.jpg?1562565270"
    },
    mana_cost: "{G}",
    cmc: 1,
    type_line: "Sorcery",
    oracle_text:
      "Look at the top five cards of your library. You may reveal a Dinosaur or land card from among them and put it into your hand. Put the rest on the bottom of your library in any order.",
    colors: ["G"],
    color_identity: ["G"],
    rulings_uri:
      "https://api.scryfall.com/cards/de4b9a07-6631-477a-8c77-3b04f211439d/rulings",
    artist: "Jonathan Kuo",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=435336"
    }
  },
  {
    object: "card",
    id: "641b21e1-9188-4bc3-96e8-cda2acbc5ed5",
    oracle_id: "cac55e46-b730-4569-b92c-a4b5922fc20c",
    multiverse_ids: [],
    name: "Time Spiral",
    uri: "https://api.scryfall.com/cards/641b21e1-9188-4bc3-96e8-cda2acbc5ed5",
    scryfall_uri:
      "https://scryfall.com/card/prm/62221/time-spiral?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/4/641b21e1-9188-4bc3-96e8-cda2acbc5ed5.jpg?1562545256",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/4/641b21e1-9188-4bc3-96e8-cda2acbc5ed5.jpg?1562545256",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/4/641b21e1-9188-4bc3-96e8-cda2acbc5ed5.jpg?1562545256",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/4/641b21e1-9188-4bc3-96e8-cda2acbc5ed5.png?1562545256",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/4/641b21e1-9188-4bc3-96e8-cda2acbc5ed5.jpg?1562545256",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/4/641b21e1-9188-4bc3-96e8-cda2acbc5ed5.jpg?1562545256"
    },
    mana_cost: "{4}{U}{U}",
    cmc: 6,
    type_line: "Sorcery",
    oracle_text:
      "Exile Time Spiral. Each player shuffles their hand and graveyard into their library, then draws seven cards. You untap up to six lands.",
    colors: ["U"],
    color_identity: ["U"],
    rulings_uri:
      "https://api.scryfall.com/cards/641b21e1-9188-4bc3-96e8-cda2acbc5ed5/rulings",
    artist: "Clint Cearley"
  },
  {
    object: "card",
    id: "ac067eb8-427f-4bfa-b392-0bb41ac8370e",
    oracle_id: "de21b90f-a268-46d6-b977-d5b0856176f3",
    multiverse_ids: [15771],
    name: "Goblin Festival",
    uri: "https://api.scryfall.com/cards/ac067eb8-427f-4bfa-b392-0bb41ac8370e",
    scryfall_uri:
      "https://scryfall.com/card/uds/83/goblin-festival?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/c/ac067eb8-427f-4bfa-b392-0bb41ac8370e.jpg?1562444742",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/c/ac067eb8-427f-4bfa-b392-0bb41ac8370e.jpg?1562444742",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/c/ac067eb8-427f-4bfa-b392-0bb41ac8370e.jpg?1562444742",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/c/ac067eb8-427f-4bfa-b392-0bb41ac8370e.png?1562444742",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/c/ac067eb8-427f-4bfa-b392-0bb41ac8370e.jpg?1562444742",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/c/ac067eb8-427f-4bfa-b392-0bb41ac8370e.jpg?1562444742"
    },
    mana_cost: "{1}{R}",
    cmc: 2,
    type_line: "Enchantment",
    oracle_text:
      "{2}: Goblin Festival deals 1 damage to any target. Flip a coin. If you lose the flip, choose one of your opponents. That player gains control of Goblin Festival.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/ac067eb8-427f-4bfa-b392-0bb41ac8370e/rulings",
    artist: "Jeff Laubenstein",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=15771"
    }
  },
  {
    object: "card",
    id: "36f0fd37-eb34-418d-b136-03d816c93034",
    oracle_id: "fbdffef0-9119-4650-9f92-58e8a664db6f",
    multiverse_ids: [522206],
    name: "Goblin Traprunner",
    uri: "https://api.scryfall.com/cards/36f0fd37-eb34-418d-b136-03d816c93034",
    scryfall_uri:
      "https://scryfall.com/card/mh2/130/goblin-traprunner?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/3/6/36f0fd37-eb34-418d-b136-03d816c93034.jpg?1626096723",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/6/36f0fd37-eb34-418d-b136-03d816c93034.jpg?1626096723",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/3/6/36f0fd37-eb34-418d-b136-03d816c93034.jpg?1626096723",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/3/6/36f0fd37-eb34-418d-b136-03d816c93034.png?1626096723",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/6/36f0fd37-eb34-418d-b136-03d816c93034.jpg?1626096723",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/6/36f0fd37-eb34-418d-b136-03d816c93034.jpg?1626096723"
    },
    mana_cost: "{3}{R}",
    cmc: 4,
    type_line: "Creature — Goblin",
    oracle_text:
      "Whenever Goblin Traprunner attacks, flip three coins. For each flip you win, create a 1/1 red Goblin creature token that's tapped and attacking.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/36f0fd37-eb34-418d-b136-03d816c93034/rulings",
    artist: "Craig J Spearing",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=522206"
    }
  },
  {
    object: "card",
    id: "4a57766e-8966-4e14-b78f-48ecb5d889c1",
    oracle_id: "59b2a90e-542f-4fb0-b290-ac79dc2892a4",
    multiverse_ids: [456233],
    name: "Stitch in Time",
    uri: "https://api.scryfall.com/cards/4a57766e-8966-4e14-b78f-48ecb5d889c1",
    scryfall_uri:
      "https://scryfall.com/card/gk1/43/stitch-in-time?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/a/4a57766e-8966-4e14-b78f-48ecb5d889c1.jpg?1541002887",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4a57766e-8966-4e14-b78f-48ecb5d889c1.jpg?1541002887",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a57766e-8966-4e14-b78f-48ecb5d889c1.jpg?1541002887",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4a57766e-8966-4e14-b78f-48ecb5d889c1.png?1541002887",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/a/4a57766e-8966-4e14-b78f-48ecb5d889c1.jpg?1541002887",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/a/4a57766e-8966-4e14-b78f-48ecb5d889c1.jpg?1541002887"
    },
    mana_cost: "{1}{U}{R}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text:
      "Flip a coin. If you win the flip, take an extra turn after this one.",
    colors: ["R", "U"],
    color_identity: ["R", "U"],
    rulings_uri:
      "https://api.scryfall.com/cards/4a57766e-8966-4e14-b78f-48ecb5d889c1/rulings",
    artist: "Jon Foster",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=456233"
    }
  },
  {
    object: "card",
    id: "593aa59a-4025-4df8-9f27-188fc7712fde",
    oracle_id: "c735077a-fae8-4c5f-a5bf-35969696460c",
    multiverse_ids: [527502],
    name: "You Meet in a Tavern",
    uri: "https://api.scryfall.com/cards/593aa59a-4025-4df8-9f27-188fc7712fde",
    scryfall_uri:
      "https://scryfall.com/card/afr/215/you-meet-in-a-tavern?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/9/593aa59a-4025-4df8-9f27-188fc7712fde.jpg?1627708684",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/9/593aa59a-4025-4df8-9f27-188fc7712fde.jpg?1627708684",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/9/593aa59a-4025-4df8-9f27-188fc7712fde.jpg?1627708684",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/9/593aa59a-4025-4df8-9f27-188fc7712fde.png?1627708684",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/9/593aa59a-4025-4df8-9f27-188fc7712fde.jpg?1627708684",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/9/593aa59a-4025-4df8-9f27-188fc7712fde.jpg?1627708684"
    },
    mana_cost: "{2}{G}{G}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text:
      "Choose one —\n• Form a Party — Look at the top five cards of your library. You may reveal any number of creature cards from among them and put them into your hand. Put the rest on the bottom of your library in a random order.\n• Start a Brawl — Creatures you control get +2/+2 until end of turn.",
    colors: ["G"],
    color_identity: ["G"],
    rulings_uri:
      "https://api.scryfall.com/cards/593aa59a-4025-4df8-9f27-188fc7712fde/rulings",
    artist: "Zoltan Boros",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=527502"
    }
  },
  {
    object: "card",
    id: "d00850e4-6be3-4246-ae45-c0e990e6d6e1",
    oracle_id: "81674138-08d0-4126-9e6d-27f6e7dd2403",
    multiverse_ids: [485447],
    name: "Tavern Swindler",
    uri: "https://api.scryfall.com/cards/d00850e4-6be3-4246-ae45-c0e990e6d6e1",
    scryfall_uri:
      "https://scryfall.com/card/m21/124/tavern-swindler?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/0/d00850e4-6be3-4246-ae45-c0e990e6d6e1.jpg?1594736401",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/0/d00850e4-6be3-4246-ae45-c0e990e6d6e1.jpg?1594736401",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/0/d00850e4-6be3-4246-ae45-c0e990e6d6e1.jpg?1594736401",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/0/d00850e4-6be3-4246-ae45-c0e990e6d6e1.png?1594736401",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/0/d00850e4-6be3-4246-ae45-c0e990e6d6e1.jpg?1594736401",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/0/d00850e4-6be3-4246-ae45-c0e990e6d6e1.jpg?1594736401"
    },
    mana_cost: "{1}{B}",
    cmc: 2,
    type_line: "Creature — Human Rogue",
    oracle_text:
      "{T}, Pay 3 life: Flip a coin. If you win the flip, you gain 6 life.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/d00850e4-6be3-4246-ae45-c0e990e6d6e1/rulings",
    artist: "Cynthia Sheppard",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=485447"
    }
  },
  {
    object: "card",
    id: "6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6",
    oracle_id: "d96763a0-6a6e-4520-899a-468b4bb307c8",
    multiverse_ids: [270743],
    name: "Mass Mutiny",
    uri: "https://api.scryfall.com/cards/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6",
    scryfall_uri: "https://scryfall.com/card/pc2/48/mass-mutiny?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/d/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6.jpg?1575571749",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/d/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6.jpg?1575571749",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/d/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6.jpg?1575571749",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/d/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6.png?1575571749",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/d/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6.jpg?1575571749",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/d/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6.jpg?1575571749"
    },
    mana_cost: "{3}{R}{R}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "For each opponent, gain control of up to one target creature that player controls until end of turn. Untap those creatures. They gain haste until end of turn.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6/rulings",
    artist: "Carl Critchlow",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=270743"
    }
  },
  {
    object: "card",
    id: "b34f0ac1-6894-4761-b62c-b85d927acf09",
    oracle_id: "7e6c7b57-bd6a-4ac8-bcab-c3a879f479c2",
    multiverse_ids: [522228],
    name: "Chatterstorm",
    uri: "https://api.scryfall.com/cards/b34f0ac1-6894-4761-b62c-b85d927acf09",
    scryfall_uri:
      "https://scryfall.com/card/mh2/152/chatterstorm?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/b/3/b34f0ac1-6894-4761-b62c-b85d927acf09.jpg?1631126059",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/3/b34f0ac1-6894-4761-b62c-b85d927acf09.jpg?1631126059",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/b/3/b34f0ac1-6894-4761-b62c-b85d927acf09.jpg?1631126059",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/b/3/b34f0ac1-6894-4761-b62c-b85d927acf09.png?1631126059",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/3/b34f0ac1-6894-4761-b62c-b85d927acf09.jpg?1631126059",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/3/b34f0ac1-6894-4761-b62c-b85d927acf09.jpg?1631126059"
    },
    mana_cost: "{1}{G}",
    cmc: 2,
    type_line: "Sorcery",
    oracle_text:
      "Create a 1/1 green Squirrel creature token.\nStorm (When you cast this spell, copy it for each spell cast before it this turn.)",
    colors: ["G"],
    color_identity: ["G"],
    rulings_uri:
      "https://api.scryfall.com/cards/b34f0ac1-6894-4761-b62c-b85d927acf09/rulings",
    artist: "Milivoj Ćeran",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=522228"
    }
  },
  {
    object: "card",
    id: "e4581455-5fa1-4c96-96b3-e9e9654f5a28",
    oracle_id: "298fd21f-8ac8-49a4-8ed6-689576ff4241",
    multiverse_ids: [439525],
    name: "Urza, Academy Headmaster",
    uri: "https://api.scryfall.com/cards/e4581455-5fa1-4c96-96b3-e9e9654f5a28",
    scryfall_uri:
      "https://scryfall.com/card/ust/136/urza-academy-headmaster?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.png?1572374174",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/4/e4581455-5fa1-4c96-96b3-e9e9654f5a28.jpg?1572374174"
    },
    mana_cost: "{W}{U}{B}{R}{G}",
    cmc: 5,
    type_line: "Legendary Planeswalker — Urza",
    oracle_text:
      "+1: Head to AskUrza.com and click +1.\n−1: Head to AskUrza.com and click -1.\n−6: Head to AskUrza.com and click -6.",
    colors: ["B", "G", "R", "U", "W"],
    color_identity: ["B", "G", "R", "U", "W"],
    rulings_uri:
      "https://api.scryfall.com/cards/e4581455-5fa1-4c96-96b3-e9e9654f5a28/rulings",
    artist: "Terese Nielsen",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=439525"
    }
  },
  {
    object: "card",
    id: "f4ad826d-c7e6-4dfd-991f-15d75b87d504",
    oracle_id: "d57d1988-5962-4df9-8342-cf04233fd6c7",
    multiverse_ids: [407630],
    name: "Zada's Commando",
    uri: "https://api.scryfall.com/cards/f4ad826d-c7e6-4dfd-991f-15d75b87d504",
    scryfall_uri:
      "https://scryfall.com/card/ogw/120/zadas-commando?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/4/f4ad826d-c7e6-4dfd-991f-15d75b87d504.jpg?1562944232",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/4/f4ad826d-c7e6-4dfd-991f-15d75b87d504.jpg?1562944232",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/4/f4ad826d-c7e6-4dfd-991f-15d75b87d504.jpg?1562944232",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/4/f4ad826d-c7e6-4dfd-991f-15d75b87d504.png?1562944232",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/4/f4ad826d-c7e6-4dfd-991f-15d75b87d504.jpg?1562944232",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/4/f4ad826d-c7e6-4dfd-991f-15d75b87d504.jpg?1562944232"
    },
    mana_cost: "{1}{R}",
    cmc: 2,
    type_line: "Creature — Goblin Archer Ally",
    oracle_text:
      "First strike\nCohort — {T}, Tap an untapped Ally you control: Zada's Commando deals 1 damage to target opponent or planeswalker.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/f4ad826d-c7e6-4dfd-991f-15d75b87d504/rulings",
    artist: "Zack Stella",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=407630"
    }
  },
  {
    object: "card",
    id: "9b255d34-04fa-4d3b-9fc1-8f980ef1f054",
    oracle_id: "d011153e-d12a-4eb1-b105-64729e37be12",
    multiverse_ids: [407541],
    name: "Ondu War Cleric",
    uri: "https://api.scryfall.com/cards/9b255d34-04fa-4d3b-9fc1-8f980ef1f054",
    scryfall_uri:
      "https://scryfall.com/card/ogw/31/ondu-war-cleric?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/b/9b255d34-04fa-4d3b-9fc1-8f980ef1f054.jpg?1562926300",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/b/9b255d34-04fa-4d3b-9fc1-8f980ef1f054.jpg?1562926300",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/b/9b255d34-04fa-4d3b-9fc1-8f980ef1f054.jpg?1562926300",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/b/9b255d34-04fa-4d3b-9fc1-8f980ef1f054.png?1562926300",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/b/9b255d34-04fa-4d3b-9fc1-8f980ef1f054.jpg?1562926300",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/b/9b255d34-04fa-4d3b-9fc1-8f980ef1f054.jpg?1562926300"
    },
    mana_cost: "{1}{W}",
    cmc: 2,
    type_line: "Creature — Human Cleric Ally",
    oracle_text:
      "Cohort — {T}, Tap an untapped Ally you control: You gain 2 life.",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/9b255d34-04fa-4d3b-9fc1-8f980ef1f054/rulings",
    artist: "Ben Maier",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=407541"
    }
  },
  {
    object: "card",
    id: "f8da7312-91e8-4f8d-84ef-6888360b3718",
    oracle_id: "b1385b03-cb4b-4812-857f-7421f1df39af",
    multiverse_ids: [517559],
    name: "Revitalize",
    uri: "https://api.scryfall.com/cards/f8da7312-91e8-4f8d-84ef-6888360b3718",
    scryfall_uri: "https://scryfall.com/card/sta/9/revitalize?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/8/f8da7312-91e8-4f8d-84ef-6888360b3718.jpg?1623592231",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/8/f8da7312-91e8-4f8d-84ef-6888360b3718.jpg?1623592231",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/8/f8da7312-91e8-4f8d-84ef-6888360b3718.jpg?1623592231",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/8/f8da7312-91e8-4f8d-84ef-6888360b3718.png?1623592231",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/8/f8da7312-91e8-4f8d-84ef-6888360b3718.jpg?1623592231",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/8/f8da7312-91e8-4f8d-84ef-6888360b3718.jpg?1623592231"
    },
    mana_cost: "{1}{W}",
    cmc: 2,
    type_line: "Instant",
    oracle_text: "You gain 3 life.\nDraw a card.",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/f8da7312-91e8-4f8d-84ef-6888360b3718/rulings",
    artist: "Justin Hernandez & Alexis Hernandez",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=517559"
    }
  },
  {
    object: "card",
    id: "789196df-143d-4a60-a8e4-5bdcfdfd7ba8",
    oracle_id: "c207aaee-0b67-4520-ad02-2c289228be2a",
    multiverse_ids: [430684],
    name: "Through the Breach",
    uri: "https://api.scryfall.com/cards/789196df-143d-4a60-a8e4-5bdcfdfd7ba8",
    scryfall_uri:
      "https://scryfall.com/card/mp2/49/through-the-breach?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/7/8/789196df-143d-4a60-a8e4-5bdcfdfd7ba8.jpg?1562919185",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/8/789196df-143d-4a60-a8e4-5bdcfdfd7ba8.jpg?1562919185",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/7/8/789196df-143d-4a60-a8e4-5bdcfdfd7ba8.jpg?1562919185",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/7/8/789196df-143d-4a60-a8e4-5bdcfdfd7ba8.png?1562919185",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/8/789196df-143d-4a60-a8e4-5bdcfdfd7ba8.jpg?1562919185",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/8/789196df-143d-4a60-a8e4-5bdcfdfd7ba8.jpg?1562919185"
    },
    mana_cost: "{4}{R}",
    cmc: 5,
    type_line: "Instant — Arcane",
    oracle_text:
      "You may put a creature card from your hand onto the battlefield. That creature gains haste. Sacrifice that creature at the beginning of the next end step.\nSplice onto Arcane {2}{R}{R} (As you cast an Arcane spell, you may reveal this card from your hand and pay its splice cost. If you do, add this card's effects to that spell.)",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/789196df-143d-4a60-a8e4-5bdcfdfd7ba8/rulings",
    artist: "Darek Zabrocki",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=430684"
    }
  },
  {
    object: "card",
    id: "857c2b6c-cfdf-4c88-a334-2937cb7db603",
    oracle_id: "a2976426-108b-43a6-ab04-f71afac79893",
    multiverse_ids: [39929],
    name: "Tempting Wurm",
    uri: "https://api.scryfall.com/cards/857c2b6c-cfdf-4c88-a334-2937cb7db603",
    scryfall_uri:
      "https://scryfall.com/card/ons/291/tempting-wurm?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/5/857c2b6c-cfdf-4c88-a334-2937cb7db603.jpg?1562926442",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/5/857c2b6c-cfdf-4c88-a334-2937cb7db603.jpg?1562926442",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/5/857c2b6c-cfdf-4c88-a334-2937cb7db603.jpg?1562926442",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/5/857c2b6c-cfdf-4c88-a334-2937cb7db603.png?1562926442",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/5/857c2b6c-cfdf-4c88-a334-2937cb7db603.jpg?1562926442",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/5/857c2b6c-cfdf-4c88-a334-2937cb7db603.jpg?1562926442"
    },
    mana_cost: "{1}{G}",
    cmc: 2,
    type_line: "Creature — Wurm",
    oracle_text:
      "When Tempting Wurm enters the battlefield, each opponent may put any number of artifact, creature, enchantment, and/or land cards from their hand onto the battlefield.",
    colors: ["G"],
    color_identity: ["G"],
    rulings_uri:
      "https://api.scryfall.com/cards/857c2b6c-cfdf-4c88-a334-2937cb7db603/rulings",
    artist: "Bob Petillo",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=39929"
    }
  },
  {
    object: "card",
    id: "56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0",
    oracle_id: "ea152809-85a2-4fde-8251-3b1f267e4443",
    multiverse_ids: [135271],
    name: "Lord of the Pit",
    uri: "https://api.scryfall.com/cards/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0",
    scryfall_uri:
      "https://scryfall.com/card/10e/154/lord-of-the-pit?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0.jpg?1562548003",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0.jpg?1562548003",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0.jpg?1562548003",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0.png?1562548003",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0.jpg?1562548003",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0.jpg?1562548003"
    },
    mana_cost: "{4}{B}{B}{B}",
    cmc: 7,
    type_line: "Creature — Demon",
    oracle_text:
      "Flying, trample\nAt the beginning of your upkeep, sacrifice a creature other than Lord of the Pit. If you can't, Lord of the Pit deals 7 damage to you.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0/rulings",
    artist: "Michael Sutfin",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=135271"
    }
  },
  {
    object: "card",
    id: "c3387cfc-2dbe-409e-bfc7-b399f05a817d",
    oracle_id: "2eaee808-b72a-4950-ab4f-ab8e8d12f838",
    multiverse_ids: [502326],
    name: "Profane Transfusion",
    uri: "https://api.scryfall.com/cards/c3387cfc-2dbe-409e-bfc7-b399f05a817d",
    scryfall_uri:
      "https://scryfall.com/card/cmr/653/profane-transfusion?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/3/c3387cfc-2dbe-409e-bfc7-b399f05a817d.jpg?1608918627",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/3/c3387cfc-2dbe-409e-bfc7-b399f05a817d.jpg?1608918627",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/3/c3387cfc-2dbe-409e-bfc7-b399f05a817d.jpg?1608918627",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/3/c3387cfc-2dbe-409e-bfc7-b399f05a817d.png?1608918627",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/3/c3387cfc-2dbe-409e-bfc7-b399f05a817d.jpg?1608918627",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/3/c3387cfc-2dbe-409e-bfc7-b399f05a817d.jpg?1608918627"
    },
    mana_cost: "{6}{B}{B}{B}",
    cmc: 9,
    type_line: "Sorcery",
    oracle_text:
      "Two target players exchange life totals. You create an X/X colorless Horror artifact creature token, where X is the difference between those players' life totals.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/c3387cfc-2dbe-409e-bfc7-b399f05a817d/rulings",
    artist: "Vincent Proce",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=502326"
    }
  },
  {
    object: "card",
    id: "1ee97c64-39ab-4967-a7e4-3fc5e793d534",
    oracle_id: "aef874fa-93c0-4f86-8b0d-dc24ec51467d",
    multiverse_ids: [135270],
    name: "Beacon of Unrest",
    uri: "https://api.scryfall.com/cards/1ee97c64-39ab-4967-a7e4-3fc5e793d534",
    scryfall_uri:
      "https://scryfall.com/card/10e/129/beacon-of-unrest?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/1/e/1ee97c64-39ab-4967-a7e4-3fc5e793d534.jpg?1562544734",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/e/1ee97c64-39ab-4967-a7e4-3fc5e793d534.jpg?1562544734",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/1/e/1ee97c64-39ab-4967-a7e4-3fc5e793d534.jpg?1562544734",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/1/e/1ee97c64-39ab-4967-a7e4-3fc5e793d534.png?1562544734",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/e/1ee97c64-39ab-4967-a7e4-3fc5e793d534.jpg?1562544734",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/e/1ee97c64-39ab-4967-a7e4-3fc5e793d534.jpg?1562544734"
    },
    mana_cost: "{3}{B}{B}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "Put target artifact or creature card from a graveyard onto the battlefield under your control. Shuffle Beacon of Unrest into its owner's library.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/1ee97c64-39ab-4967-a7e4-3fc5e793d534/rulings",
    artist: "Alan Pollack",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=135270"
    }
  },
  {
    object: "card",
    id: "c30c41aa-4c83-489f-84db-d53634d43ea2",
    oracle_id: "b919cca5-88c0-4104-b54e-49644fbf78a5",
    multiverse_ids: [],
    name: "Door to Nothingness",
    uri: "https://api.scryfall.com/cards/c30c41aa-4c83-489f-84db-d53634d43ea2",
    scryfall_uri:
      "https://scryfall.com/card/plist/251/door-to-nothingness?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/3/c30c41aa-4c83-489f-84db-d53634d43ea2.jpg?1599767081",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/3/c30c41aa-4c83-489f-84db-d53634d43ea2.jpg?1599767081",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/3/c30c41aa-4c83-489f-84db-d53634d43ea2.jpg?1599767081",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/3/c30c41aa-4c83-489f-84db-d53634d43ea2.png?1599767081",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/3/c30c41aa-4c83-489f-84db-d53634d43ea2.jpg?1599767081",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/3/c30c41aa-4c83-489f-84db-d53634d43ea2.jpg?1599767081"
    },
    mana_cost: "{5}",
    cmc: 5,
    type_line: "Artifact",
    oracle_text:
      "Door to Nothingness enters the battlefield tapped.\n{W}{W}{U}{U}{B}{B}{R}{R}{G}{G}, {T}, Sacrifice Door to Nothingness: Target player loses the game.",
    colors: [],
    color_identity: ["B", "G", "R", "U", "W"],
    rulings_uri:
      "https://api.scryfall.com/cards/c30c41aa-4c83-489f-84db-d53634d43ea2/rulings",
    artist: "Puddnhead"
  },
  {
    object: "card",
    id: "bfeb1145-3729-481e-a314-c325ed2f2a35",
    oracle_id: "cfd61b53-83c6-4886-8503-ddcb92dc7f85",
    multiverse_ids: [397418],
    name: "Mogg Infestation",
    uri: "https://api.scryfall.com/cards/bfeb1145-3729-481e-a314-c325ed2f2a35",
    scryfall_uri:
      "https://scryfall.com/card/tpr/146/mogg-infestation?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/b/f/bfeb1145-3729-481e-a314-c325ed2f2a35.jpg?1562431289",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/f/bfeb1145-3729-481e-a314-c325ed2f2a35.jpg?1562431289",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/b/f/bfeb1145-3729-481e-a314-c325ed2f2a35.jpg?1562431289",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/b/f/bfeb1145-3729-481e-a314-c325ed2f2a35.png?1562431289",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/f/bfeb1145-3729-481e-a314-c325ed2f2a35.jpg?1562431289",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/f/bfeb1145-3729-481e-a314-c325ed2f2a35.jpg?1562431289"
    },
    mana_cost: "{3}{R}{R}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "Destroy all creatures target player controls. For each creature that died this way, that player creates two 1/1 red Goblin creature tokens.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/bfeb1145-3729-481e-a314-c325ed2f2a35/rulings",
    artist: "Pete Venters",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=397418"
    }
  },
  {
    object: "card",
    id: "6d0a3996-5a03-481b-9bda-15c6f6e5f9c4",
    oracle_id: "07a0cba9-8768-4fd9-a3d5-b0f83b4bf8e8",
    multiverse_ids: [517586],
    name: "Chaos Warp",
    uri: "https://api.scryfall.com/cards/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4",
    scryfall_uri: "https://scryfall.com/card/sta/36/chaos-warp?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/d/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4.jpg?1623890270",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/d/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4.jpg?1623890270",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/d/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4.jpg?1623890270",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/d/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4.png?1623890270",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/d/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4.jpg?1623890270",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/d/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4.jpg?1623890270"
    },
    mana_cost: "{2}{R}",
    cmc: 3,
    type_line: "Instant",
    oracle_text:
      "The owner of target permanent shuffles it into their library, then reveals the top card of their library. If it's a permanent card, they put it onto the battlefield.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/6d0a3996-5a03-481b-9bda-15c6f6e5f9c4/rulings",
    artist: "Anato Finnstark",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=517586"
    }
  },
  {
    object: "card",
    id: "11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8",
    oracle_id: "5089ec1a-f881-4d55-af14-5d996171203b",
    multiverse_ids: [],
    name: "Black Lotus",
    uri: "https://api.scryfall.com/cards/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8",
    scryfall_uri:
      "https://scryfall.com/card/ovnt/2017NA/black-lotus?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/1/1/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8.jpg?1562898593",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/1/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8.jpg?1562898593",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/1/1/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8.jpg?1562898593",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/1/1/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8.png?1562898593",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/1/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8.jpg?1562898593",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8.jpg?1562898593"
    },
    mana_cost: "{0}",
    cmc: 0,
    type_line: "Artifact",
    oracle_text: "{T}, Sacrifice Black Lotus: Add three mana of any one color.",
    colors: [],
    color_identity: [],
    rulings_uri:
      "https://api.scryfall.com/cards/11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8/rulings",
    artist: "Steven Belledin"
  },
  {
    object: "card",
    id: "49f6a537-fa85-44ab-a853-7a32812a4b32",
    oracle_id: "85eafa00-51df-4070-9b2d-247457ba3364",
    multiverse_ids: [495636],
    name: "Relic Robber",
    uri: "https://api.scryfall.com/cards/49f6a537-fa85-44ab-a853-7a32812a4b32",
    scryfall_uri:
      "https://scryfall.com/card/znr/351/relic-robber?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/9/49f6a537-fa85-44ab-a853-7a32812a4b32.jpg?1608942777",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/9/49f6a537-fa85-44ab-a853-7a32812a4b32.jpg?1608942777",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/9/49f6a537-fa85-44ab-a853-7a32812a4b32.jpg?1608942777",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/9/49f6a537-fa85-44ab-a853-7a32812a4b32.png?1608942777",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/9/49f6a537-fa85-44ab-a853-7a32812a4b32.jpg?1608942777",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/9/49f6a537-fa85-44ab-a853-7a32812a4b32.jpg?1608942777"
    },
    mana_cost: "{2}{R}",
    cmc: 3,
    type_line: "Creature — Goblin Rogue",
    oracle_text:
      'Haste\nWhenever Relic Robber deals combat damage to a player, that player creates a 0/1 colorless Goblin Construct artifact creature token with "This creature can\'t block" and "At the beginning of your upkeep, this creature deals 1 damage to you."',
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/49f6a537-fa85-44ab-a853-7a32812a4b32/rulings",
    artist: "Slawomir Maniak",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=495636"
    }
  },
  {
    object: "card",
    id: "a168b953-eac4-472e-ac74-598febb05f83",
    oracle_id: "38872730-0fd1-414e-8015-29d1bc649913",
    multiverse_ids: [107099],
    name: "Poisonbelly Ogre",
    uri: "https://api.scryfall.com/cards/a168b953-eac4-472e-ac74-598febb05f83",
    scryfall_uri:
      "https://scryfall.com/card/gpt/57/poisonbelly-ogre?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/1/a168b953-eac4-472e-ac74-598febb05f83.jpg?1593272248",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/1/a168b953-eac4-472e-ac74-598febb05f83.jpg?1593272248",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/1/a168b953-eac4-472e-ac74-598febb05f83.jpg?1593272248",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/1/a168b953-eac4-472e-ac74-598febb05f83.png?1593272248",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/1/a168b953-eac4-472e-ac74-598febb05f83.jpg?1593272248",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/1/a168b953-eac4-472e-ac74-598febb05f83.jpg?1593272248"
    },
    mana_cost: "{4}{B}",
    cmc: 5,
    type_line: "Creature — Ogre Warrior",
    oracle_text:
      "Whenever another creature enters the battlefield, its controller loses 1 life.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/a168b953-eac4-472e-ac74-598febb05f83/rulings",
    artist: "Zoltan Boros & Gabor Szikszai",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=107099"
    }
  },
  {
    object: "card",
    id: "96b6b2e1-c3e6-464c-8a13-b15deb34e862",
    oracle_id: "5f15125e-ae89-471e-b055-226a783bc7c1",
    multiverse_ids: [417765],
    name: "Aetherflux Reservoir",
    uri: "https://api.scryfall.com/cards/96b6b2e1-c3e6-464c-8a13-b15deb34e862",
    scryfall_uri:
      "https://scryfall.com/card/kld/192/aetherflux-reservoir?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.png?1576382939",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939"
    },
    mana_cost: "{4}",
    cmc: 4,
    type_line: "Artifact",
    oracle_text:
      "Whenever you cast a spell, you gain 1 life for each spell you've cast this turn.\nPay 50 life: Aetherflux Reservoir deals 50 damage to any target.",
    colors: [],
    color_identity: [],
    rulings_uri:
      "https://api.scryfall.com/cards/96b6b2e1-c3e6-464c-8a13-b15deb34e862/rulings",
    artist: "Cliff Childs",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=417765"
    }
  },
  {
    object: "card",
    id: "c38c9120-ac20-4f81-b8d8-9d490cc2a913",
    oracle_id: "7a4cc57b-9f85-446c-9ca0-98c72b9bb732",
    multiverse_ids: [],
    name: "Happily Ever After",
    uri: "https://api.scryfall.com/cards/c38c9120-ac20-4f81-b8d8-9d490cc2a913",
    scryfall_uri:
      "https://scryfall.com/card/eld/337/happily-ever-after?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/3/c38c9120-ac20-4f81-b8d8-9d490cc2a913.jpg?1572370218",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/3/c38c9120-ac20-4f81-b8d8-9d490cc2a913.jpg?1572370218",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/3/c38c9120-ac20-4f81-b8d8-9d490cc2a913.jpg?1572370218",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/3/c38c9120-ac20-4f81-b8d8-9d490cc2a913.png?1572370218",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/3/c38c9120-ac20-4f81-b8d8-9d490cc2a913.jpg?1572370218",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/3/c38c9120-ac20-4f81-b8d8-9d490cc2a913.jpg?1572370218"
    },
    mana_cost: "{2}{W}",
    cmc: 3,
    type_line: "Enchantment",
    oracle_text:
      "When Happily Ever After enters the battlefield, each player gains 5 life and draws a card.\nAt the beginning of your upkeep, if there are five colors among permanents you control, there are six or more card types among permanents you control and/or cards in your graveyard, and your life total is greater than or equal to your starting life total, you win the game.",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/c38c9120-ac20-4f81-b8d8-9d490cc2a913/rulings",
    artist: "Matt Stewart"
  },
  {
    object: "card",
    id: "d4ac76c0-54ce-41b2-9000-e21eecaf7e99",
    oracle_id: "4e92c705-19c2-42df-ad12-808d272c505e",
    multiverse_ids: [509388],
    name: "Knight of the Holy Nimbus",
    uri: "https://api.scryfall.com/cards/d4ac76c0-54ce-41b2-9000-e21eecaf7e99",
    scryfall_uri:
      "https://scryfall.com/card/tsr/23/knight-of-the-holy-nimbus?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/4/d4ac76c0-54ce-41b2-9000-e21eecaf7e99.jpg?1619393032",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/4/d4ac76c0-54ce-41b2-9000-e21eecaf7e99.jpg?1619393032",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/4/d4ac76c0-54ce-41b2-9000-e21eecaf7e99.jpg?1619393032",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/4/d4ac76c0-54ce-41b2-9000-e21eecaf7e99.png?1619393032",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/4/d4ac76c0-54ce-41b2-9000-e21eecaf7e99.jpg?1619393032",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/4/d4ac76c0-54ce-41b2-9000-e21eecaf7e99.jpg?1619393032"
    },
    mana_cost: "{W}{W}",
    cmc: 2,
    type_line: "Creature — Human Rebel Knight",
    oracle_text:
      "Flanking (Whenever a creature without flanking blocks this creature, the blocking creature gets -1/-1 until end of turn.)\nIf Knight of the Holy Nimbus would be destroyed, regenerate it. (Tap it, remove it from combat, and heal all damage on it.)\n{2}: Knight of the Holy Nimbus can't be regenerated this turn. Only your opponents may activate this ability.",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/d4ac76c0-54ce-41b2-9000-e21eecaf7e99/rulings",
    artist: "Wayne England",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=509388"
    }
  },
  {
    object: "card",
    id: "db490f74-977f-476d-b8ee-da7b0a98b4c4",
    oracle_id: "fb8e43f2-41d5-4ffb-a61e-940477749e00",
    multiverse_ids: [500930],
    name: "Sharktocrab",
    uri: "https://api.scryfall.com/cards/db490f74-977f-476d-b8ee-da7b0a98b4c4",
    scryfall_uri:
      "https://scryfall.com/card/cmr/450/sharktocrab?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/b/db490f74-977f-476d-b8ee-da7b0a98b4c4.jpg?1608917684",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/b/db490f74-977f-476d-b8ee-da7b0a98b4c4.jpg?1608917684",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/b/db490f74-977f-476d-b8ee-da7b0a98b4c4.jpg?1608917684",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/b/db490f74-977f-476d-b8ee-da7b0a98b4c4.png?1608917684",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/b/db490f74-977f-476d-b8ee-da7b0a98b4c4.jpg?1608917684",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/b/db490f74-977f-476d-b8ee-da7b0a98b4c4.jpg?1608917684"
    },
    mana_cost: "{2}{G}{U}",
    cmc: 4,
    type_line: "Creature — Shark Octopus Crab",
    oracle_text:
      "{2}{G}{U}: Adapt 1. (If this creature has no +1/+1 counters on it, put a +1/+1 counter on it.)\nWhenever one or more +1/+1 counters are put on Sharktocrab, tap target creature an opponent controls. That creature doesn't untap during its controller's next untap step.",
    colors: ["G", "U"],
    color_identity: ["G", "U"],
    rulings_uri:
      "https://api.scryfall.com/cards/db490f74-977f-476d-b8ee-da7b0a98b4c4/rulings",
    artist: "Jehan Choo",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=500930"
    }
  },
  {
    object: "card",
    id: "3e304424-4a50-43bb-aee0-e9f960583aac",
    oracle_id: "7747804f-ca49-4a68-b508-b94b27c52b0f",
    multiverse_ids: [420628],
    name: "Cruel Entertainment",
    uri: "https://api.scryfall.com/cards/3e304424-4a50-43bb-aee0-e9f960583aac",
    scryfall_uri:
      "https://scryfall.com/card/c16/11/cruel-entertainment?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/3/e/3e304424-4a50-43bb-aee0-e9f960583aac.jpg?1562396529",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/e/3e304424-4a50-43bb-aee0-e9f960583aac.jpg?1562396529",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/3/e/3e304424-4a50-43bb-aee0-e9f960583aac.jpg?1562396529",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/3/e/3e304424-4a50-43bb-aee0-e9f960583aac.png?1562396529",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/e/3e304424-4a50-43bb-aee0-e9f960583aac.jpg?1562396529",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/e/3e304424-4a50-43bb-aee0-e9f960583aac.jpg?1562396529"
    },
    mana_cost: "{6}{B}",
    cmc: 7,
    type_line: "Sorcery",
    oracle_text:
      "Choose target player and another target player. The first player controls the second player during the second player's next turn, and the second player controls the first player during the first player's next turn.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/3e304424-4a50-43bb-aee0-e9f960583aac/rulings",
    artist: "David Palumbo",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=420628"
    }
  },
  {
    object: "card",
    id: "813995f5-e49a-431d-8a3a-8ec569844e11",
    oracle_id: "d5b131c7-29d4-4745-95e3-70bdf9bf54b3",
    multiverse_ids: [442099],
    name: "Triskaidekaphobia",
    uri: "https://api.scryfall.com/cards/813995f5-e49a-431d-8a3a-8ec569844e11",
    scryfall_uri:
      "https://scryfall.com/card/a25/110/triskaidekaphobia?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/1/813995f5-e49a-431d-8a3a-8ec569844e11.jpg?1562437529",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/1/813995f5-e49a-431d-8a3a-8ec569844e11.jpg?1562437529",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/1/813995f5-e49a-431d-8a3a-8ec569844e11.jpg?1562437529",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/1/813995f5-e49a-431d-8a3a-8ec569844e11.png?1562437529",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/1/813995f5-e49a-431d-8a3a-8ec569844e11.jpg?1562437529",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/1/813995f5-e49a-431d-8a3a-8ec569844e11.jpg?1562437529"
    },
    mana_cost: "{3}{B}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      "At the beginning of your upkeep, choose one —\n• Each player with exactly 13 life loses the game, then each player gains 1 life.\n• Each player with exactly 13 life loses the game, then each player loses 1 life.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/813995f5-e49a-431d-8a3a-8ec569844e11/rulings",
    artist: "Willian Murai",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=442099"
    }
  },
  {
    object: "card",
    id: "1bff641e-aad3-414f-ad5b-8d32c734efa9",
    oracle_id: "45a8c126-5396-4736-a37e-460a50706a98",
    multiverse_ids: [],
    name: "Escape to the Wilds",
    uri: "https://api.scryfall.com/cards/1bff641e-aad3-414f-ad5b-8d32c734efa9",
    scryfall_uri:
      "https://scryfall.com/card/eld/379/escape-to-the-wilds?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/1/b/1bff641e-aad3-414f-ad5b-8d32c734efa9.jpg?1571458669",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/b/1bff641e-aad3-414f-ad5b-8d32c734efa9.jpg?1571458669",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/1/b/1bff641e-aad3-414f-ad5b-8d32c734efa9.jpg?1571458669",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/1/b/1bff641e-aad3-414f-ad5b-8d32c734efa9.png?1571458669",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/b/1bff641e-aad3-414f-ad5b-8d32c734efa9.jpg?1571458669",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/b/1bff641e-aad3-414f-ad5b-8d32c734efa9.jpg?1571458669"
    },
    mana_cost: "{3}{R}{G}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "Exile the top five cards of your library. You may play cards exiled this way until the end of your next turn.\nYou may play an additional land this turn.",
    colors: ["G", "R"],
    color_identity: ["G", "R"],
    rulings_uri:
      "https://api.scryfall.com/cards/1bff641e-aad3-414f-ad5b-8d32c734efa9/rulings",
    artist: "Chris Ostrowski"
  },
  {
    object: "card",
    id: "3c2f72f7-69e1-4944-98ad-66d88ee2d727",
    oracle_id: "f73bf7c5-e43d-4684-8588-2fb400f2ca31",
    multiverse_ids: [],
    name: "Dubious Challenge",
    uri: "https://api.scryfall.com/cards/3c2f72f7-69e1-4944-98ad-66d88ee2d727",
    scryfall_uri:
      "https://scryfall.com/card/pkld/152s/dubious-challenge?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/3/c/3c2f72f7-69e1-4944-98ad-66d88ee2d727.jpg?1562907148",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/c/3c2f72f7-69e1-4944-98ad-66d88ee2d727.jpg?1562907148",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/3/c/3c2f72f7-69e1-4944-98ad-66d88ee2d727.jpg?1562907148",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/3/c/3c2f72f7-69e1-4944-98ad-66d88ee2d727.png?1562907148",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/c/3c2f72f7-69e1-4944-98ad-66d88ee2d727.jpg?1562907148",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/c/3c2f72f7-69e1-4944-98ad-66d88ee2d727.jpg?1562907148"
    },
    mana_cost: "{3}{G}",
    cmc: 4,
    type_line: "Sorcery",
    oracle_text:
      "Look at the top ten cards of your library, exile up to two creature cards from among them, then shuffle. Target opponent may choose one of the exiled cards and put it onto the battlefield under their control. Put the rest onto the battlefield under your control.",
    colors: ["G"],
    color_identity: ["G"],
    rulings_uri:
      "https://api.scryfall.com/cards/3c2f72f7-69e1-4944-98ad-66d88ee2d727/rulings",
    artist: "Scott Murphy"
  },
  {
    object: "card",
    id: "c543e785-2c6b-4347-a9c3-25940bbadcff",
    oracle_id: "252d9b25-45a1-40ca-b563-4cdefc791a44",
    multiverse_ids: [],
    name: "Allure of the Unknown",
    uri: "https://api.scryfall.com/cards/c543e785-2c6b-4347-a9c3-25940bbadcff",
    scryfall_uri:
      "https://scryfall.com/card/thb/332/allure-of-the-unknown?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/5/c543e785-2c6b-4347-a9c3-25940bbadcff.jpg?1593858835",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/5/c543e785-2c6b-4347-a9c3-25940bbadcff.jpg?1593858835",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c543e785-2c6b-4347-a9c3-25940bbadcff.jpg?1593858835",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/5/c543e785-2c6b-4347-a9c3-25940bbadcff.png?1593858835",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/5/c543e785-2c6b-4347-a9c3-25940bbadcff.jpg?1593858835",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/5/c543e785-2c6b-4347-a9c3-25940bbadcff.jpg?1593858835"
    },
    mana_cost: "{3}{B}{R}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "Reveal the top six cards of your library. An opponent exiles a nonland card from among them, then you put the rest into your hand. That opponent may cast the exiled card without paying its mana cost.",
    colors: ["B", "R"],
    color_identity: ["B", "R"],
    rulings_uri:
      "https://api.scryfall.com/cards/c543e785-2c6b-4347-a9c3-25940bbadcff/rulings",
    artist: "Seb McKinnon"
  }
];

export const NORMAL_CHAOS = BASE_CHAOS.map(card =>
  addAdditionalProperties(filterAPI(card))
);

export const CHAOS = [...CUSTOM_CHAOS, ...NORMAL_CHAOS];
