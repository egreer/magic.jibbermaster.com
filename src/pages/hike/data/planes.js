import { addAdditionalProperties, filterAPI } from "../../../util/api";

// Curated and Truncated Scryfall API Results
export const CUSTOM_PLANES = [
  {
    name: "Hike Clash",
    type_line: "Plane - Hike",
    oracle_text:
      'All spells gain "Clash with an opponent. If you win gain 5 life, draw a card, and create a 1/1 red Hikespawn creature token',
    show_blank: true
  },
  {
    name: "Hike Wall",
    type_line: "Plane - Hike",
    oracle_text:
      "Creatures with defender can attack as though they didn't have it, creatures without defender can't attack. All creatures assign combat damage based on their toughness.",
    show_blank: true
  },
  {
    name: "Nopalescence",
    type_line: "Plane - Hike",
    oracle_text:
      "All noncreature artifacts, planeswalkers, and enchantments lose all abilities and become X/X creatures where X is their mana value.",
    show_blank: true
  },
  {
    name: "Nopalescence",
    type_line: "Plane - Hike",
    oracle_text: "All creatures have haste and must attack each turn if able",
    show_blank: true
  }
];

export const BASE_PLANES = [
  {
    object: "card",
    id: "88d50518-5cfc-45de-a125-acabf97b8743",
    oracle_id: "f97e405d-4c24-4d4d-9e19-e349c073113c",
    multiverse_ids: [190556],
    name: "Hive Mind",
    uri: "https://api.scryfall.com/cards/88d50518-5cfc-45de-a125-acabf97b8743",
    scryfall_uri: "https://scryfall.com/card/m10/54/hive-mind?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/8/88d50518-5cfc-45de-a125-acabf97b8743.jpg?1561987505",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/8/88d50518-5cfc-45de-a125-acabf97b8743.jpg?1561987505",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/8/88d50518-5cfc-45de-a125-acabf97b8743.jpg?1561987505",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/8/88d50518-5cfc-45de-a125-acabf97b8743.png?1561987505",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/8/88d50518-5cfc-45de-a125-acabf97b8743.jpg?1561987505",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/8/88d50518-5cfc-45de-a125-acabf97b8743.jpg?1561987505"
    },
    mana_cost: "{5}{U}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "Whenever a player casts an instant or sorcery spell, each other player copies that spell. Each of those players may choose new targets for their copy.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/88d50518-5cfc-45de-a125-acabf97b8743/rulings",
    flavor_text:
      '"All consciousness is one, separated only by a thin veil of the physical."\n—Jace Beleren',
    artist: "Steve Argyle",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=190556"
    }
  },
  {
    object: "card",
    id: "49967eb9-5020-4f0a-8775-5114f6d96d75",
    oracle_id: "01f8db27-1191-488e-b0d5-172821613c15",
    multiverse_ids: [83791],
    name: "Eye of the Storm",
    uri: "https://api.scryfall.com/cards/49967eb9-5020-4f0a-8775-5114f6d96d75",
    scryfall_uri:
      "https://scryfall.com/card/rav/48/eye-of-the-storm?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/9/49967eb9-5020-4f0a-8775-5114f6d96d75.jpg?1598914184",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/9/49967eb9-5020-4f0a-8775-5114f6d96d75.jpg?1598914184",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/9/49967eb9-5020-4f0a-8775-5114f6d96d75.jpg?1598914184",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/9/49967eb9-5020-4f0a-8775-5114f6d96d75.png?1598914184",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/9/49967eb9-5020-4f0a-8775-5114f6d96d75.jpg?1598914184",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/9/49967eb9-5020-4f0a-8775-5114f6d96d75.jpg?1598914184"
    },
    mana_cost: "{5}{U}{U}",
    cmc: 7,
    type_line: "Enchantment",
    oracle_text:
      "Whenever a player casts an instant or sorcery card, exile it. Then that player copies each instant or sorcery card exiled with Eye of the Storm. For each copy, the player may cast the copy without paying its mana cost.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/49967eb9-5020-4f0a-8775-5114f6d96d75/rulings",
    artist: "Hideaki Takamura",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=83791"
    }
  },
  {
    object: "card",
    id: "858aa831-b491-4f1e-bb56-33eeca14771d",
    oracle_id: "8586169f-cb8c-4424-ba64-a7c1cc00680e",
    multiverse_ids: [369013],
    name: "Possibility Storm",
    uri: "https://api.scryfall.com/cards/858aa831-b491-4f1e-bb56-33eeca14771d",
    scryfall_uri:
      "https://scryfall.com/card/dgm/34/possibility-storm?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/5/858aa831-b491-4f1e-bb56-33eeca14771d.jpg?1562919767",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/5/858aa831-b491-4f1e-bb56-33eeca14771d.jpg?1562919767",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/5/858aa831-b491-4f1e-bb56-33eeca14771d.jpg?1562919767",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/5/858aa831-b491-4f1e-bb56-33eeca14771d.png?1562919767",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/5/858aa831-b491-4f1e-bb56-33eeca14771d.jpg?1562919767",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/5/858aa831-b491-4f1e-bb56-33eeca14771d.jpg?1562919767"
    },
    mana_cost: "{3}{R}{R}",
    cmc: 5,
    type_line: "Enchantment",
    oracle_text:
      "Whenever a player casts a spell from their hand, that player exiles it, then exiles cards from the top of their library until they exile a card that shares a card type with it. That player may cast that card without paying its mana cost. Then they put all cards exiled with Possibility Storm on the bottom of their library in a random order.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/858aa831-b491-4f1e-bb56-33eeca14771d/rulings",
    artist: "Jason Felix",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=369013"
    }
  },
  {
    object: "card",
    id: "a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a",
    oracle_id: "427ba80d-cfdf-4651-a1eb-89a2125a9217",
    multiverse_ids: [253606],
    name: "Conjured Currency",
    uri: "https://api.scryfall.com/cards/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a",
    scryfall_uri:
      "https://scryfall.com/card/rtr/33/conjured-currency?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/7/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a.jpg?1562791158",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/7/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a.jpg?1562791158",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/7/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a.jpg?1562791158",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/7/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a.png?1562791158",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/7/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a.jpg?1562791158",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/7/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a.jpg?1562791158"
    },
    mana_cost: "{5}{U}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "At the beginning of your upkeep, you may exchange control of Conjured Currency and target permanent you neither own nor control.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/a7c2ea6e-7d29-4526-b135-9bbb1eed9d4a/rulings",
    flavor_text: "A bargain in Keyhole Downs is always too good to be true.",
    artist: "Steve Argyle",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=253606"
    }
  },
  {
    object: "card",
    id: "9d46aca2-4714-4d2c-9466-5f1c043b8726",
    oracle_id: "e477abb9-9b99-48a8-8c09-07b120b72540",
    multiverse_ids: [49528],
    name: "Confusion in the Ranks",
    uri: "https://api.scryfall.com/cards/9d46aca2-4714-4d2c-9466-5f1c043b8726",
    scryfall_uri:
      "https://scryfall.com/card/mrd/87/confusion-in-the-ranks?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/d/9d46aca2-4714-4d2c-9466-5f1c043b8726.jpg?1562152213",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/d/9d46aca2-4714-4d2c-9466-5f1c043b8726.jpg?1562152213",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/d/9d46aca2-4714-4d2c-9466-5f1c043b8726.jpg?1562152213",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/d/9d46aca2-4714-4d2c-9466-5f1c043b8726.png?1562152213",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/d/9d46aca2-4714-4d2c-9466-5f1c043b8726.jpg?1562152213",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/d/9d46aca2-4714-4d2c-9466-5f1c043b8726.jpg?1562152213"
    },
    mana_cost: "{3}{R}{R}",
    cmc: 5,
    type_line: "Enchantment",
    oracle_text:
      "Whenever an artifact, creature, or enchantment enters the battlefield, its controller chooses target permanent another player controls that shares a card type with it. Exchange control of those permanents.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/9d46aca2-4714-4d2c-9466-5f1c043b8726/rulings",
    artist: "Ron Spencer",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=49528"
    }
  },
  {
    object: "card",
    id: "266323da-9528-462e-a0a8-6ef2dda5f1ee",
    oracle_id: "47630b28-c0bc-4911-8d76-33c6fcabf2d7",
    multiverse_ids: [50129],
    name: "Endless Whispers",
    uri: "https://api.scryfall.com/cards/266323da-9528-462e-a0a8-6ef2dda5f1ee",
    scryfall_uri:
      "https://scryfall.com/card/5dn/49/endless-whispers?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/2/6/266323da-9528-462e-a0a8-6ef2dda5f1ee.jpg?1562875914",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/6/266323da-9528-462e-a0a8-6ef2dda5f1ee.jpg?1562875914",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/2/6/266323da-9528-462e-a0a8-6ef2dda5f1ee.jpg?1562875914",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/2/6/266323da-9528-462e-a0a8-6ef2dda5f1ee.png?1562875914",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/6/266323da-9528-462e-a0a8-6ef2dda5f1ee.jpg?1562875914",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/6/266323da-9528-462e-a0a8-6ef2dda5f1ee.jpg?1562875914"
    },
    mana_cost: "{2}{B}{B}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      'Each creature has "When this creature dies, choose target opponent. That player puts this card from its owner\'s graveyard onto the battlefield under their control at the beginning of the next end step."',
    colors: ["B"],
    color_identity: ["B"],

    rulings_uri:
      "https://api.scryfall.com/cards/266323da-9528-462e-a0a8-6ef2dda5f1ee/rulings",
    flavor_text:
      "Those who find death under the black sun's shadow cannot escape its pull.",
    artist: "Carl Critchlow",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=50129"
    }
  },
  {
    object: "card",
    id: "aae0543f-7f8b-4327-b735-ac21244e9936",
    oracle_id: "728e2960-1d85-4b3f-8b5b-915f9b9ffd2f",
    multiverse_ids: [2615],
    name: "Chaos Moon",
    uri: "https://api.scryfall.com/cards/aae0543f-7f8b-4327-b735-ac21244e9936",
    scryfall_uri: "https://scryfall.com/card/ice/179/chaos-moon?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/a/aae0543f-7f8b-4327-b735-ac21244e9936.jpg?1562926911",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/a/aae0543f-7f8b-4327-b735-ac21244e9936.jpg?1562926911",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/a/aae0543f-7f8b-4327-b735-ac21244e9936.jpg?1562926911",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/a/aae0543f-7f8b-4327-b735-ac21244e9936.png?1562926911",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/a/aae0543f-7f8b-4327-b735-ac21244e9936.jpg?1562926911",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/a/aae0543f-7f8b-4327-b735-ac21244e9936.jpg?1562926911"
    },
    mana_cost: "{3}{R}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      "At the beginning of each upkeep, count the number of permanents. If the number is odd, until end of turn, red creatures get +1/+1 and whenever a player taps a Mountain for mana, that player adds an additional {R}. If the number is even, until end of turn, red creatures get -1/-1 and if a player taps a Mountain for mana, that Mountain produces colorless mana instead of any other type.",
    colors: ["R"],
    color_identity: ["R"],
    produced_mana: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/aae0543f-7f8b-4327-b735-ac21244e9936/rulings",
    artist: "Drew Tucker",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=2615"
    }
  },
  {
    object: "card",
    id: "defbbd3a-0e7d-4af2-b25f-9003ddad0bf5",
    oracle_id: "ca2e0c8f-7ece-465f-9103-ba60712eacf7",
    multiverse_ids: [47274],
    name: "Grip of Chaos",
    uri: "https://api.scryfall.com/cards/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5",
    scryfall_uri:
      "https://scryfall.com/card/scg/98/grip-of-chaos?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/e/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5.jpg?1562535751",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/e/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5.jpg?1562535751",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/e/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5.jpg?1562535751",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/e/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5.png?1562535751",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/e/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5.jpg?1562535751",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/e/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5.jpg?1562535751"
    },
    mana_cost: "{4}{R}{R}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "Whenever a spell or ability is put onto the stack, if it has a single target, reselect its target at random. (Select from among all legal targets.)",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/defbbd3a-0e7d-4af2-b25f-9003ddad0bf5/rulings",
    flavor_text:
      "When the world is consumed by chaos, the skilled and the foolish are on equal footing.",
    artist: "Mark Tedin",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=47274"
    }
  },
  {
    object: "card",
    id: "ad0d5b02-ef38-4dab-8ac6-78814ef27b55",
    oracle_id: "e23bf5fe-e494-473e-8502-606106ee1820",
    multiverse_ids: [49764],
    name: "Shared Fate",
    uri: "https://api.scryfall.com/cards/ad0d5b02-ef38-4dab-8ac6-78814ef27b55",
    scryfall_uri: "https://scryfall.com/card/mrd/49/shared-fate?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/d/ad0d5b02-ef38-4dab-8ac6-78814ef27b55.jpg?1562154177",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/d/ad0d5b02-ef38-4dab-8ac6-78814ef27b55.jpg?1562154177",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/d/ad0d5b02-ef38-4dab-8ac6-78814ef27b55.jpg?1562154177",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/d/ad0d5b02-ef38-4dab-8ac6-78814ef27b55.png?1562154177",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/d/ad0d5b02-ef38-4dab-8ac6-78814ef27b55.jpg?1562154177",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/d/ad0d5b02-ef38-4dab-8ac6-78814ef27b55.jpg?1562154177"
    },
    mana_cost: "{4}{U}",
    cmc: 5,
    type_line: "Enchantment",
    oracle_text:
      "If a player would draw a card, that player exiles the top card of one of their opponents' libraries face down instead.\nEach player may look at cards they exiled with Shared Fate, and they may play lands and cast spells from among those cards.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/ad0d5b02-ef38-4dab-8ac6-78814ef27b55/rulings",
    artist: "Matt Cavotta",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=49764"
    }
  },
  {
    object: "card",
    id: "56a1afab-782c-4f31-96f5-17b676852fea",
    oracle_id: "43a23de7-0738-4b03-b87d-5a7d1144825c",
    multiverse_ids: [423610],
    name: "Glimmervoid Basin",
    uri: "https://api.scryfall.com/cards/56a1afab-782c-4f31-96f5-17b676852fea",
    scryfall_uri:
      "https://scryfall.com/card/opca/29/glimmervoid-basin?utm_source=api",
    layout: "planar",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/56a1afab-782c-4f31-96f5-17b676852fea.jpg?1547432512",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/56a1afab-782c-4f31-96f5-17b676852fea.jpg?1547432512",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/56a1afab-782c-4f31-96f5-17b676852fea.jpg?1547432512",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/56a1afab-782c-4f31-96f5-17b676852fea.png?1547432512",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/56a1afab-782c-4f31-96f5-17b676852fea.jpg?1547432512",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/56a1afab-782c-4f31-96f5-17b676852fea.jpg?1547432512"
    },
    mana_cost: "",
    cmc: 0,
    type_line: "Plane — Mirrodin",
    oracle_text:
      "Whenever a player casts an instant or sorcery spell with a single target, that player copies that spell for each other spell, permanent, card not on the battlefield, and/or player the spell could target. Each copy targets a different one of them.\nWhenever you roll {CHAOS}, choose target creature. Each player except that creature's controller creates a token that's a copy of that creature.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/56a1afab-782c-4f31-96f5-17b676852fea/rulings",
    artist: "Lars Grant-West",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=423610"
    }
  },
  {
    object: "card",
    id: "0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7",
    oracle_id: "dbf05c40-7274-4aaa-94d7-1f28cbe15e09",
    multiverse_ids: [233042],
    name: "Omen Machine",
    uri: "https://api.scryfall.com/cards/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7",
    scryfall_uri:
      "https://scryfall.com/card/nph/148/omen-machine?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/0/f/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7.jpg?1562875579",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/f/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7.jpg?1562875579",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/0/f/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7.jpg?1562875579",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/0/f/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7.png?1562875579",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/f/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7.jpg?1562875579",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/f/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7.jpg?1562875579"
    },
    mana_cost: "{6}",
    cmc: 6,
    type_line: "Artifact",
    oracle_text:
      "Players can't draw cards.\nAt the beginning of each player's draw step, that player exiles the top card of their library. If it's a land card, the player puts it onto the battlefield. Otherwise, the player casts it without paying its mana cost if able.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/0ff4e35f-2a82-4d3c-86c5-ae05a5abc4d7/rulings",
    watermark: "phyrexian",
    artist: "David Rapoza",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=233042"
    }
  },
  {
    object: "card",
    id: "561cab0e-8874-4534-bf79-0c1488a9f0a5",
    oracle_id: "99f8805f-6618-4838-a4e7-a3660e3b087f",
    multiverse_ids: [49053],
    name: "Timesifter",
    uri: "https://api.scryfall.com/cards/561cab0e-8874-4534-bf79-0c1488a9f0a5",
    scryfall_uri: "https://scryfall.com/card/mrd/262/timesifter?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/561cab0e-8874-4534-bf79-0c1488a9f0a5.jpg?1562144325",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/561cab0e-8874-4534-bf79-0c1488a9f0a5.jpg?1562144325",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/561cab0e-8874-4534-bf79-0c1488a9f0a5.jpg?1562144325",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/561cab0e-8874-4534-bf79-0c1488a9f0a5.png?1562144325",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/561cab0e-8874-4534-bf79-0c1488a9f0a5.jpg?1562144325",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/561cab0e-8874-4534-bf79-0c1488a9f0a5.jpg?1562144325"
    },
    mana_cost: "{5}",
    cmc: 5,
    type_line: "Artifact",
    oracle_text:
      "At the beginning of each upkeep, each player exiles the top card of their library. The player who exiled the card with the highest mana value takes an extra turn after this one. If two or more players' cards are tied for highest, the tied players repeat this process until the tie is broken.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/561cab0e-8874-4534-bf79-0c1488a9f0a5/rulings",
    artist: "Dany Orizio",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=49053"
    }
  },
  {
    object: "card",
    id: "415e81e9-ca65-4bc0-8aab-d905d58fe6cc",
    oracle_id: "37abcc92-9466-47ea-9e0b-5eda2eb62c8e",
    multiverse_ids: [83294],
    name: "Teferi's Puzzle Box",
    uri: "https://api.scryfall.com/cards/415e81e9-ca65-4bc0-8aab-d905d58fe6cc",
    scryfall_uri:
      "https://scryfall.com/card/9ed/312/teferis-puzzle-box?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/1/415e81e9-ca65-4bc0-8aab-d905d58fe6cc.jpg?1562734271",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/1/415e81e9-ca65-4bc0-8aab-d905d58fe6cc.jpg?1562734271",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/1/415e81e9-ca65-4bc0-8aab-d905d58fe6cc.jpg?1562734271",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/1/415e81e9-ca65-4bc0-8aab-d905d58fe6cc.png?1562734271",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/1/415e81e9-ca65-4bc0-8aab-d905d58fe6cc.jpg?1562734271",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/1/415e81e9-ca65-4bc0-8aab-d905d58fe6cc.jpg?1562734271"
    },
    mana_cost: "{4}",
    cmc: 4,
    type_line: "Artifact",
    oracle_text:
      "At the beginning of each player's draw step, that player puts the cards in their hand on the bottom of their library in any order, then draws that many cards.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/415e81e9-ca65-4bc0-8aab-d905d58fe6cc/rulings",
    artist: "Donato Giancola",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=83294"
    }
  },
  {
    object: "card",
    id: "aba3e4ea-2241-4f1e-a46b-70f512fe729e",
    oracle_id: "9851d934-2e07-49c8-b08b-15f96d0f3f0c",
    multiverse_ids: [3651],
    name: "Teferi's Realm",
    uri: "https://api.scryfall.com/cards/aba3e4ea-2241-4f1e-a46b-70f512fe729e",
    scryfall_uri:
      "https://scryfall.com/card/vis/44/teferis-realm?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/b/aba3e4ea-2241-4f1e-a46b-70f512fe729e.jpg?1562278174",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/aba3e4ea-2241-4f1e-a46b-70f512fe729e.jpg?1562278174",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/b/aba3e4ea-2241-4f1e-a46b-70f512fe729e.jpg?1562278174",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/b/aba3e4ea-2241-4f1e-a46b-70f512fe729e.png?1562278174",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/b/aba3e4ea-2241-4f1e-a46b-70f512fe729e.jpg?1562278174",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/b/aba3e4ea-2241-4f1e-a46b-70f512fe729e.jpg?1562278174"
    },
    mana_cost: "{1}{U}{U}",
    cmc: 3,
    type_line: "World Enchantment",
    oracle_text:
      "At the beginning of each player's upkeep, that player chooses artifact, creature, land, or non-Aura enchantment. All nontoken permanents of that type phase out. (While they're phased out, they're treated as though they don't exist. Each one phases in before its controller untaps during their next untap step.)",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/aba3e4ea-2241-4f1e-a46b-70f512fe729e/rulings",
    flavor_text:
      '"Fire is dead. Water has killed him."\n—From *The Stories of Nature*',
    artist: "Alan Rabinowitz",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=3651"
    }
  },
  {
    object: "card",
    id: "2604a596-fffb-4066-8906-896173de8c27",
    oracle_id: "e3b94133-ff48-4f7b-b47e-2fa552efb233",
    multiverse_ids: [476184],
    name: "High Troller",
    uri: "https://api.scryfall.com/cards/2604a596-fffb-4066-8906-896173de8c27",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/54/high-troller?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/2/6/2604a596-fffb-4066-8906-896173de8c27.jpg?1574125991",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/6/2604a596-fffb-4066-8906-896173de8c27.jpg?1574125991",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/2/6/2604a596-fffb-4066-8906-896173de8c27.jpg?1574125991",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/2/6/2604a596-fffb-4066-8906-896173de8c27.png?1574125991",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/6/2604a596-fffb-4066-8906-896173de8c27.jpg?1574125991",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/6/2604a596-fffb-4066-8906-896173de8c27.jpg?1574125991"
    },
    mana_cost: "{3}{R}",
    cmc: 4,
    type_line: "Creature — Troll Shaman",
    oracle_text:
      "All targeted spells and abilities cost {2} less and have their targets chosen randomly.",
    power: "4",
    toughness: "1",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/2604a596-fffb-4066-8906-896173de8c27/rulings",
    artist: "Graeme Hopkins",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476184"
    }
  },
  {
    object: "card",
    id: "270a0863-7d07-43f0-925d-a8ce0383a1cb",
    oracle_id: "dd4cf149-2fae-40e5-b50b-639f6bcec65e",
    multiverse_ids: [452957],
    arena_id: 68668,
    name: "Thousand-Year Storm",
    uri: "https://api.scryfall.com/cards/270a0863-7d07-43f0-925d-a8ce0383a1cb",
    scryfall_uri:
      "https://scryfall.com/card/grn/207/thousand-year-storm?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/2/7/270a0863-7d07-43f0-925d-a8ce0383a1cb.jpg?1572893865",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/7/270a0863-7d07-43f0-925d-a8ce0383a1cb.jpg?1572893865",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/2/7/270a0863-7d07-43f0-925d-a8ce0383a1cb.jpg?1572893865",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/2/7/270a0863-7d07-43f0-925d-a8ce0383a1cb.png?1572893865",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/7/270a0863-7d07-43f0-925d-a8ce0383a1cb.jpg?1572893865",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/7/270a0863-7d07-43f0-925d-a8ce0383a1cb.jpg?1572893865"
    },
    mana_cost: "{4}{U}{R}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "Whenever you cast an instant or sorcery spell, copy it for each other instant and sorcery spell you've cast before it this turn. You may choose new targets for the copies.",
    colors: ["R", "U"],
    color_identity: ["R", "U"],

    rulings_uri:
      "https://api.scryfall.com/cards/270a0863-7d07-43f0-925d-a8ce0383a1cb/rulings",
    watermark: "planeswalker",
    flavor_text:
      "Ral's storm crackled with mystical detections: Planeswalkers were infiltrating Ravnica.",
    artist: "Dimitar Marinski",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=452957"
    }
  },
  {
    object: "card",
    id: "630efac8-3033-4c2d-9127-b3b2f78bb136",
    oracle_id: "ee0f8b3d-5c40-43e0-9ed7-9963831a1013",
    multiverse_ids: [9775],
    name: "Free-for-All",
    uri: "https://api.scryfall.com/cards/630efac8-3033-4c2d-9127-b3b2f78bb136",
    scryfall_uri:
      "https://scryfall.com/card/ugl/25/free-for-all?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/3/630efac8-3033-4c2d-9127-b3b2f78bb136.jpg?1562799106",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/3/630efac8-3033-4c2d-9127-b3b2f78bb136.jpg?1562799106",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/3/630efac8-3033-4c2d-9127-b3b2f78bb136.jpg?1562799106",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/3/630efac8-3033-4c2d-9127-b3b2f78bb136.png?1562799106",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/3/630efac8-3033-4c2d-9127-b3b2f78bb136.jpg?1562799106",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/3/630efac8-3033-4c2d-9127-b3b2f78bb136.jpg?1562799106"
    },
    mana_cost: "{3}{U}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      "When Free-for-All enters the battlefield, exile all creatures face down.\nAt the beginning of each player's upkeep, that player chooses a card exiled with Free-for-All at random and puts it onto the battlefield.\nWhen Free-for-All leaves the battlefield, put all cards exiled with it into their owners' graveyards.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/630efac8-3033-4c2d-9127-b3b2f78bb136/rulings",
    artist: "Claymore J. Flapdoodle",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=9775"
    }
  },
  {
    object: "card",
    id: "b53c9857-3cad-4b61-bfaa-5de2d44dfbc4",
    oracle_id: "022667d0-60f2-4e37-bc50-53198fc933ab",
    multiverse_ids: [476228],
    name: "Seek Bolas's Counsel",
    uri: "https://api.scryfall.com/cards/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/98/seek-bolass-counsel?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/b/5/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4.jpg?1592933960",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/5/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4.jpg?1592933960",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/b/5/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4.jpg?1592933960",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/b/5/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4.png?1592933960",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/5/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4.jpg?1592933960",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/5/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4.jpg?1592933960"
    },
    mana_cost: "{U}{B}{R}",
    cmc: 3,
    type_line: "Sorcery",
    oracle_text:
      'Choose one at random —\n• You get an emblem with "At the beginning of your upkeep, pay {U}{B}{R}. If you don\'t, you lose the game."\n• Each player discards their hand.\n• Planeswalk to Pools of Becoming. (Once there, you can roll the planar die only if you\'re playing Planechase.)\n• For each opponent, exile cards from the top of their library until you exile a nonland card. You may cast those cards without paying their mana costs.\n• Destroy all creatures and non-Bolas planeswalkers.\n• You get an emblem with "You can cast nonland cards from your sideboard."',
    colors: ["B", "R", "U"],
    color_identity: ["B", "R", "U"],

    rulings_uri:
      "https://api.scryfall.com/cards/b53c9857-3cad-4b61-bfaa-5de2d44dfbc4/rulings",
    artist: "Matt Warren",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476228"
    }
  },
  {
    object: "card",
    id: "d9b404c0-9ce1-4491-82fd-6dba7e6895cd",
    oracle_id: "39a9323d-dddc-42ac-929d-3f4fa7c87567",
    multiverse_ids: [31787],
    name: "Impulsive Maneuvers",
    uri: "https://api.scryfall.com/cards/d9b404c0-9ce1-4491-82fd-6dba7e6895cd",
    scryfall_uri:
      "https://scryfall.com/card/ody/197/impulsive-maneuvers?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/9/d9b404c0-9ce1-4491-82fd-6dba7e6895cd.jpg?1562935681",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/9/d9b404c0-9ce1-4491-82fd-6dba7e6895cd.jpg?1562935681",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/9/d9b404c0-9ce1-4491-82fd-6dba7e6895cd.jpg?1562935681",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/9/d9b404c0-9ce1-4491-82fd-6dba7e6895cd.png?1562935681",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/9/d9b404c0-9ce1-4491-82fd-6dba7e6895cd.jpg?1562935681",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/9/d9b404c0-9ce1-4491-82fd-6dba7e6895cd.jpg?1562935681"
    },
    mana_cost: "{2}{R}{R}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      "Whenever a creature attacks, flip a coin. If you win the flip, the next time that creature would deal combat damage this turn, it deals double that damage instead. If you lose the flip, the next time that creature would deal combat damage this turn, prevent that damage.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/d9b404c0-9ce1-4491-82fd-6dba7e6895cd/rulings",
    artist: "Dave Dorman",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=31787"
    }
  },
  {
    object: "card",
    id: "06a981cd-1951-438e-95c9-68294795638e",
    oracle_id: "18e421c0-2879-4ad8-b027-397f168dfbc2",
    multiverse_ids: [497709],
    name: "Krark, the Thumbless",
    uri: "https://api.scryfall.com/cards/06a981cd-1951-438e-95c9-68294795638e",
    scryfall_uri:
      "https://scryfall.com/card/cmr/189/krark-the-thumbless?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/0/6/06a981cd-1951-438e-95c9-68294795638e.jpg?1617148336",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/6/06a981cd-1951-438e-95c9-68294795638e.jpg?1617148336",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/0/6/06a981cd-1951-438e-95c9-68294795638e.jpg?1617148336",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/0/6/06a981cd-1951-438e-95c9-68294795638e.png?1617148336",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/6/06a981cd-1951-438e-95c9-68294795638e.jpg?1617148336",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/6/06a981cd-1951-438e-95c9-68294795638e.jpg?1617148336"
    },
    mana_cost: "{1}{R}",
    cmc: 2,
    type_line: "Legendary Creature — Goblin Wizard",
    oracle_text:
      "Whenever you cast an instant or sorcery spell, flip a coin. If you lose the flip, return that spell to its owner's hand. If you win the flip, copy that spell, and you may choose new targets for the copy.\nPartner (You can have two commanders if both have partner.)",
    power: "2",
    toughness: "2",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/06a981cd-1951-438e-95c9-68294795638e/rulings",
    flavor_text: '"Double or nothing."',
    artist: "Mathias Kollros",
    frame_effects: ["legendary"],
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=497709"
    }
  },
  {
    object: "card",
    id: "50a27943-f08c-4cbd-affb-8e59411b3d4f",
    oracle_id: "945eaa8b-0ba5-45a6-a02a-763e5bfe3af8",
    multiverse_ids: [457252],
    arena_id: 69236,
    name: "Mirror March",
    uri: "https://api.scryfall.com/cards/50a27943-f08c-4cbd-affb-8e59411b3d4f",
    scryfall_uri:
      "https://scryfall.com/card/rna/108/mirror-march?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/0/50a27943-f08c-4cbd-affb-8e59411b3d4f.jpg?1584830957",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/0/50a27943-f08c-4cbd-affb-8e59411b3d4f.jpg?1584830957",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/0/50a27943-f08c-4cbd-affb-8e59411b3d4f.jpg?1584830957",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/0/50a27943-f08c-4cbd-affb-8e59411b3d4f.png?1584830957",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/0/50a27943-f08c-4cbd-affb-8e59411b3d4f.jpg?1584830957",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/0/50a27943-f08c-4cbd-affb-8e59411b3d4f.jpg?1584830957"
    },
    mana_cost: "{5}{R}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "Whenever a nontoken creature enters the battlefield under your control, flip a coin until you lose a flip. For each flip you won, create a token that's a copy of that creature. Those tokens gain haste. Exile them at the beginning of the next end step.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/50a27943-f08c-4cbd-affb-8e59411b3d4f/rulings",
    artist: "Johannes Voss",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=457252"
    }
  },
  {
    object: "card",
    id: "43b5bd60-87ed-41d2-bbcb-bd4a40a772c9",
    oracle_id: "cb14b713-55e9-40cb-b769-6abe8e359580",
    multiverse_ids: [78606],
    name: "Tide of War",
    uri: "https://api.scryfall.com/cards/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9",
    scryfall_uri:
      "https://scryfall.com/card/chk/194/tide-of-war?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/3/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9.jpg?1562759393",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/3/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9.jpg?1562759393",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/3/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9.jpg?1562759393",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/3/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9.png?1562759393",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/3/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9.jpg?1562759393",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/3/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9.jpg?1562759393"
    },
    mana_cost: "{4}{R}{R}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "Whenever one or more creatures block, flip a coin. If you win the flip, each blocking creature is sacrificed by its controller. If you lose the flip, each blocked creature is sacrificed by its controller.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/43b5bd60-87ed-41d2-bbcb-bd4a40a772c9/rulings",
    artist: "Wayne Reynolds",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=78606"
    }
  },
  {
    object: "card",
    id: "9a0d3142-4224-4b51-885d-33c8938418c1",
    oracle_id: "1accf98a-0905-4a9d-9ab3-72e9f853f4ab",
    multiverse_ids: [31788],
    name: "Grand Melee",
    uri: "https://api.scryfall.com/cards/9a0d3142-4224-4b51-885d-33c8938418c1",
    scryfall_uri:
      "https://scryfall.com/card/ons/211/grand-melee?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/a/9a0d3142-4224-4b51-885d-33c8938418c1.jpg?1562931324",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/a/9a0d3142-4224-4b51-885d-33c8938418c1.jpg?1562931324",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/a/9a0d3142-4224-4b51-885d-33c8938418c1.jpg?1562931324",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/a/9a0d3142-4224-4b51-885d-33c8938418c1.png?1562931324",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/a/9a0d3142-4224-4b51-885d-33c8938418c1.jpg?1562931324",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/a/9a0d3142-4224-4b51-885d-33c8938418c1.jpg?1562931324"
    },
    mana_cost: "{3}{R}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      "All creatures attack each combat if able.\nAll creatures block each combat if able.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/9a0d3142-4224-4b51-885d-33c8938418c1/rulings",
    flavor_text: "Hot blood washes away cold reason.",
    artist: "Trevor Hairsine",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=31788"
    }
  },
  {
    object: "card",
    id: "b39aea56-5c56-4241-81c9-928c3253d7c9",
    oracle_id: "9cf1af53-ab9f-4cce-bdb5-2c13b805523d",
    multiverse_ids: [204972],
    name: "Wild Evocation",
    uri: "https://api.scryfall.com/cards/b39aea56-5c56-4241-81c9-928c3253d7c9",
    scryfall_uri:
      "https://scryfall.com/card/m11/160/wild-evocation?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/b/3/b39aea56-5c56-4241-81c9-928c3253d7c9.jpg?1562472155",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/3/b39aea56-5c56-4241-81c9-928c3253d7c9.jpg?1562472155",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/b/3/b39aea56-5c56-4241-81c9-928c3253d7c9.jpg?1562472155",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/b/3/b39aea56-5c56-4241-81c9-928c3253d7c9.png?1562472155",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/3/b39aea56-5c56-4241-81c9-928c3253d7c9.jpg?1562472155",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/3/b39aea56-5c56-4241-81c9-928c3253d7c9.jpg?1562472155"
    },
    mana_cost: "{5}{R}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "At the beginning of each player's upkeep, that player reveals a card at random from their hand. If it's a land card, the player puts it onto the battlefield. Otherwise, the player casts it without paying its mana cost if able.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/b39aea56-5c56-4241-81c9-928c3253d7c9/rulings",
    artist: "Chippy",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=204972"
    }
  },
  {
    object: "card",
    id: "0c7b248a-3c74-4592-b357-47989568298c",
    oracle_id: "f187f766-3696-419e-9865-58023a46446b",
    multiverse_ids: [8832],
    name: "Angel's Trumpet",
    uri: "https://api.scryfall.com/cards/0c7b248a-3c74-4592-b357-47989568298c",
    scryfall_uri:
      "https://scryfall.com/card/ulg/121/angels-trumpet?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/0/c/0c7b248a-3c74-4592-b357-47989568298c.jpg?1562862313",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/c/0c7b248a-3c74-4592-b357-47989568298c.jpg?1562862313",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/0/c/0c7b248a-3c74-4592-b357-47989568298c.jpg?1562862313",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/0/c/0c7b248a-3c74-4592-b357-47989568298c.png?1562862313",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/c/0c7b248a-3c74-4592-b357-47989568298c.jpg?1562862313",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/c/0c7b248a-3c74-4592-b357-47989568298c.jpg?1562862313"
    },
    mana_cost: "{3}",
    cmc: 3,
    type_line: "Artifact",
    oracle_text:
      "All creatures have vigilance.\nAt the beginning of each player's end step, tap all untapped creatures that player controls that didn't attack this turn. Angel's Trumpet deals damage to the player equal to the number of creatures tapped this way.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/0c7b248a-3c74-4592-b357-47989568298c/rulings",
    artist: "Kev Walker",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=8832"
    }
  },
  {
    object: "card",
    id: "5780f4e0-dcfb-4d1f-8ae1-762b98970abb",
    oracle_id: "676935c8-22e0-427f-9566-16778cea0873",
    multiverse_ids: [45970],
    name: "Fatespinner",
    uri: "https://api.scryfall.com/cards/5780f4e0-dcfb-4d1f-8ae1-762b98970abb",
    scryfall_uri: "https://scryfall.com/card/mrd/36/fatespinner?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/7/5780f4e0-dcfb-4d1f-8ae1-762b98970abb.jpg?1562144468",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/7/5780f4e0-dcfb-4d1f-8ae1-762b98970abb.jpg?1562144468",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/7/5780f4e0-dcfb-4d1f-8ae1-762b98970abb.jpg?1562144468",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/7/5780f4e0-dcfb-4d1f-8ae1-762b98970abb.png?1562144468",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/7/5780f4e0-dcfb-4d1f-8ae1-762b98970abb.jpg?1562144468",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/7/5780f4e0-dcfb-4d1f-8ae1-762b98970abb.jpg?1562144468"
    },
    mana_cost: "{1}{U}{U}",
    cmc: 3,
    type_line: "Creature — Human Wizard",
    oracle_text:
      "At the beginning of each opponent's upkeep, that player chooses draw step, main phase, or combat phase. The player skips each instance of the chosen step or phase this turn.",
    power: "1",
    toughness: "2",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/5780f4e0-dcfb-4d1f-8ae1-762b98970abb/rulings",
    flavor_text:
      "No one knows what she is watching, but she never takes her eyes off it.",
    artist: "rk post",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=45970"
    }
  },
  {
    object: "card",
    id: "e514b13d-2d22-4d9e-a501-b0667f02edac",
    oracle_id: "b1c346a4-fc9b-474a-9d51-cac168e363fa",
    multiverse_ids: [489879],
    name: "Maelstrom Nexus",
    uri: "https://api.scryfall.com/cards/e514b13d-2d22-4d9e-a501-b0667f02edac",
    scryfall_uri:
      "https://scryfall.com/card/2xm/206/maelstrom-nexus?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/5/e514b13d-2d22-4d9e-a501-b0667f02edac.jpg?1599708124",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/5/e514b13d-2d22-4d9e-a501-b0667f02edac.jpg?1599708124",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/5/e514b13d-2d22-4d9e-a501-b0667f02edac.jpg?1599708124",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/5/e514b13d-2d22-4d9e-a501-b0667f02edac.png?1599708124",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/5/e514b13d-2d22-4d9e-a501-b0667f02edac.jpg?1599708124",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/5/e514b13d-2d22-4d9e-a501-b0667f02edac.jpg?1599708124"
    },
    mana_cost: "{W}{U}{B}{R}{G}",
    cmc: 5,
    type_line: "Enchantment",
    oracle_text:
      "The first spell you cast each turn has cascade. (When you cast your first spell, exile cards from the top of your library until you exile a nonland card that costs less. You may cast it without paying its mana cost. Put the exiled cards on the bottom of your library in a random order.)",
    colors: ["B", "G", "R", "U", "W"],
    color_identity: ["B", "G", "R", "U", "W"],

    rulings_uri:
      "https://api.scryfall.com/cards/e514b13d-2d22-4d9e-a501-b0667f02edac/rulings",
    artist: "Steven Belledin",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=489879"
    }
  },
  {
    object: "card",
    id: "aadf253a-eca6-405d-8216-a362854b4ae1",
    oracle_id: "4516f30c-fb21-4371-818f-7dd211612a72",
    multiverse_ids: [479424],
    name: "Topsy Turvy",
    uri: "https://api.scryfall.com/cards/aadf253a-eca6-405d-8216-a362854b4ae1",
    scryfall_uri: "https://scryfall.com/card/und/29/topsy-turvy?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/a/aadf253a-eca6-405d-8216-a362854b4ae1.jpg?1583542845",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/a/aadf253a-eca6-405d-8216-a362854b4ae1.jpg?1583542845",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/a/aadf253a-eca6-405d-8216-a362854b4ae1.jpg?1583542845",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/a/aadf253a-eca6-405d-8216-a362854b4ae1.png?1583542845",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/a/aadf253a-eca6-405d-8216-a362854b4ae1.jpg?1583542845",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/a/aadf253a-eca6-405d-8216-a362854b4ae1.jpg?1583542845"
    },
    mana_cost: "{2}{U}",
    cmc: 3,
    type_line: "Enchantment",
    oracle_text:
      "The phases of each player's turn are reversed. (The phases are, in reverse order, ending, postcombat main, combat, precombat main, and beginning.)\nAs long as there are more than two players in the game, the turn order is reversed.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/aadf253a-eca6-405d-8216-a362854b4ae1/rulings",
    flavor_text: '"Here on going is heck the what?"',
    artist: "Jeff Miracola",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=479424"
    }
  },
  {
    object: "card",
    id: "8569ad47-a243-402d-899f-4e6b17ea4e1e",
    oracle_id: "377d0fa7-1b3d-4b97-b066-dceeff3734d0",
    multiverse_ids: [470593],
    name: "Pramikon, Sky Rampart",
    uri: "https://api.scryfall.com/cards/8569ad47-a243-402d-899f-4e6b17ea4e1e",
    scryfall_uri:
      "https://scryfall.com/card/c19/47/pramikon-sky-rampart?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/5/8569ad47-a243-402d-899f-4e6b17ea4e1e.jpg?1568003714",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/5/8569ad47-a243-402d-899f-4e6b17ea4e1e.jpg?1568003714",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/5/8569ad47-a243-402d-899f-4e6b17ea4e1e.jpg?1568003714",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/5/8569ad47-a243-402d-899f-4e6b17ea4e1e.png?1568003714",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/5/8569ad47-a243-402d-899f-4e6b17ea4e1e.jpg?1568003714",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/5/8569ad47-a243-402d-899f-4e6b17ea4e1e.jpg?1568003714"
    },
    mana_cost: "{U}{R}{W}",
    cmc: 3,
    type_line: "Legendary Creature — Wall",
    oracle_text:
      "Flying, defender\nAs Pramikon, Sky Rampart enters the battlefield, choose left or right.\nEach player may attack only the nearest opponent in the chosen direction and planeswalkers controlled by that opponent.",
    power: "1",
    toughness: "5",
    colors: ["R", "U", "W"],
    color_identity: ["R", "U", "W"],

    rulings_uri:
      "https://api.scryfall.com/cards/8569ad47-a243-402d-899f-4e6b17ea4e1e/rulings",
    flavor_text: "Its colors entrance aggressors, directing their violence.",
    artist: "Richard Wright",
    frame_effects: ["legendary"],
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=470593"
    }
  },
  {
    object: "card",
    id: "f7ea1c6e-c0af-40b0-b492-8d71f496903e",
    oracle_id: "448b27a5-7c0c-4ab6-bddf-bd62b920aacc",
    multiverse_ids: [146166],
    name: "Forced Fruition",
    uri: "https://api.scryfall.com/cards/f7ea1c6e-c0af-40b0-b492-8d71f496903e",
    scryfall_uri:
      "https://scryfall.com/card/lrw/66/forced-fruition?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/7/f7ea1c6e-c0af-40b0-b492-8d71f496903e.jpg?1562374956",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/7/f7ea1c6e-c0af-40b0-b492-8d71f496903e.jpg?1562374956",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/7/f7ea1c6e-c0af-40b0-b492-8d71f496903e.jpg?1562374956",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/7/f7ea1c6e-c0af-40b0-b492-8d71f496903e.png?1562374956",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/7/f7ea1c6e-c0af-40b0-b492-8d71f496903e.jpg?1562374956",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/7/f7ea1c6e-c0af-40b0-b492-8d71f496903e.jpg?1562374956"
    },
    mana_cost: "{4}{U}{U}",
    cmc: 6,
    type_line: "Enchantment",
    oracle_text:
      "Whenever an opponent casts a spell, that player draws seven cards.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/f7ea1c6e-c0af-40b0-b492-8d71f496903e/rulings",
    flavor_text:
      '"Petals within petals within petals, tadpole. The truth lurks below an opulence of illusion."\n—Neerdiv, fallowsage',
    artist: "William O'Connor",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=146166"
    }
  },
  {
    object: "card",
    id: "3bc2a419-7122-4eeb-bb64-738a647cfd82",
    oracle_id: "451e35dd-e0b5-4157-8511-bacb315e19bd",
    multiverse_ids: [4496],
    name: "Psychic Vortex",
    uri: "https://api.scryfall.com/cards/3bc2a419-7122-4eeb-bb64-738a647cfd82",
    scryfall_uri:
      "https://scryfall.com/card/wth/50/psychic-vortex?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/3/b/3bc2a419-7122-4eeb-bb64-738a647cfd82.jpg?1562800323",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/b/3bc2a419-7122-4eeb-bb64-738a647cfd82.jpg?1562800323",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/3/b/3bc2a419-7122-4eeb-bb64-738a647cfd82.jpg?1562800323",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/3/b/3bc2a419-7122-4eeb-bb64-738a647cfd82.png?1562800323",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/b/3bc2a419-7122-4eeb-bb64-738a647cfd82.jpg?1562800323",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/b/3bc2a419-7122-4eeb-bb64-738a647cfd82.jpg?1562800323"
    },
    mana_cost: "{2}{U}{U}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      "Cumulative upkeep—Draw a card. (At the beginning of your upkeep, put an age counter on this permanent, then sacrifice it unless you pay its upkeep cost for each age counter on it.)\nAt the beginning of your end step, sacrifice a land and discard your hand.",
    colors: ["U"],
    color_identity: ["U"],

    rulings_uri:
      "https://api.scryfall.com/cards/3bc2a419-7122-4eeb-bb64-738a647cfd82/rulings",
    flavor_text:
      '"Tolaria floats upon a wheel of fortune."\n—Ertai, wizard adept',
    artist: "Steve Luke",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=4496"
    }
  },
  {
    object: "card",
    id: "440c3e8b-d9c6-46cd-9f39-86db077fb89d",
    oracle_id: "477fe26f-faea-4f33-beda-86f7debfdd88",
    multiverse_ids: [479404],
    name: "Frankie Peanuts",
    uri: "https://api.scryfall.com/cards/440c3e8b-d9c6-46cd-9f39-86db077fb89d",
    scryfall_uri:
      "https://scryfall.com/card/und/5/frankie-peanuts?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/4/440c3e8b-d9c6-46cd-9f39-86db077fb89d.jpg?1583965356",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/4/440c3e8b-d9c6-46cd-9f39-86db077fb89d.jpg?1583965356",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/4/440c3e8b-d9c6-46cd-9f39-86db077fb89d.jpg?1583965356",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/4/440c3e8b-d9c6-46cd-9f39-86db077fb89d.png?1583965356",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/4/440c3e8b-d9c6-46cd-9f39-86db077fb89d.jpg?1583965356",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/4/440c3e8b-d9c6-46cd-9f39-86db077fb89d.jpg?1583965356"
    },
    mana_cost: "{2}{W}{W}",
    cmc: 4,
    type_line: "Legendary Creature — Elephant Rogue",
    oracle_text:
      "At the beginning of your upkeep, you may ask target player a yes-or-no question. If you do, that player answers the question truthfully and abides by that answer if able until end of turn.",
    power: "2",
    toughness: "3",
    colors: ["W"],
    color_identity: ["W"],

    rulings_uri:
      "https://api.scryfall.com/cards/440c3e8b-d9c6-46cd-9f39-86db077fb89d/rulings",
    flavor_text: "Don't cross him or you'll end up sleeping with the merfolk.",
    artist: "Thomas M. Baxa",
    frame_effects: ["legendary"],
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=479404"
    }
  },
  {
    object: "card",
    id: "f8fe2f99-7ec2-490c-8ec3-aa2fb4680826",
    oracle_id: "9aaf1149-eccb-434a-a1a7-14b93fa50141",
    multiverse_ids: [3318],
    name: "Tombstone Stairwell",
    uri: "https://api.scryfall.com/cards/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826",
    scryfall_uri:
      "https://scryfall.com/card/mir/149/tombstone-stairwell?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/8/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826.jpg?1562722862",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/8/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826.jpg?1562722862",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/8/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826.jpg?1562722862",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/8/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826.png?1562722862",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/8/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826.jpg?1562722862",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/8/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826.jpg?1562722862"
    },
    mana_cost: "{2}{B}{B}",
    cmc: 4,
    type_line: "World Enchantment",
    oracle_text:
      "Cumulative upkeep {1}{B} (At the beginning of your upkeep, put an age counter on this permanent, then sacrifice it unless you pay its upkeep cost for each age counter on it.)\nAt the beginning of each upkeep, if Tombstone Stairwell is on the battlefield, each player creates a 2/2 black Zombie creature token with haste named Tombspawn for each creature card in their graveyard.\nAt the beginning of each end step or when Tombstone Stairwell leaves the battlefield, destroy all tokens created with Tombstone Stairwell. They can't be regenerated.",
    colors: ["B"],
    color_identity: ["B"],

    rulings_uri:
      "https://api.scryfall.com/cards/f8fe2f99-7ec2-490c-8ec3-aa2fb4680826/rulings",
    artist: "Dom!",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=3318"
    }
  },
  {
    object: "card",
    id: "a83c165f-a78b-4a89-b868-8128376ff718",
    oracle_id: "f796b090-bec1-4486-ae78-56ce72cf66c1",
    multiverse_ids: [476188],
    name: "Mana Abundance",
    uri: "https://api.scryfall.com/cards/a83c165f-a78b-4a89-b868-8128376ff718",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/58/mana-abundance?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/a/8/a83c165f-a78b-4a89-b868-8128376ff718.jpg?1574519355",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/8/a83c165f-a78b-4a89-b868-8128376ff718.jpg?1574519355",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/a/8/a83c165f-a78b-4a89-b868-8128376ff718.jpg?1574519355",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/a/8/a83c165f-a78b-4a89-b868-8128376ff718.png?1574519355",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/8/a83c165f-a78b-4a89-b868-8128376ff718.jpg?1574519355",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/8/a83c165f-a78b-4a89-b868-8128376ff718.jpg?1574519355"
    },
    mana_cost: "{2}{R}",
    cmc: 3,
    type_line: "World Enchantment",
    oracle_text:
      "If a player would add mana, instead all players add that mana.",
    colors: ["R"],
    color_identity: ["R"],
    produced_mana: ["B", "G", "R", "U", "W"],

    rulings_uri:
      "https://api.scryfall.com/cards/a83c165f-a78b-4a89-b868-8128376ff718/rulings",
    artist: "Ken Nagle",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476188"
    }
  },
  {
    object: "card",
    id: "9a274ebf-15c5-4db9-9987-3e3f92f41d47",
    oracle_id: "dc8a9f48-bf08-4bc4-8e24-1fe409827967",
    multiverse_ids: [476190],
    name: "Problematic Volcano",
    uri: "https://api.scryfall.com/cards/9a274ebf-15c5-4db9-9987-3e3f92f41d47",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/60/problematic-volcano?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/a/9a274ebf-15c5-4db9-9987-3e3f92f41d47.jpg?1574290676",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/a/9a274ebf-15c5-4db9-9987-3e3f92f41d47.jpg?1574290676",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/a/9a274ebf-15c5-4db9-9987-3e3f92f41d47.jpg?1574290676",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/a/9a274ebf-15c5-4db9-9987-3e3f92f41d47.png?1574290676",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/a/9a274ebf-15c5-4db9-9987-3e3f92f41d47.jpg?1574290676",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/a/9a274ebf-15c5-4db9-9987-3e3f92f41d47.jpg?1574290676"
    },
    mana_cost: "{1}{R}{R}",
    cmc: 3,
    type_line: "World Enchantment",
    oracle_text:
      "When Problematic Volcano enters the battlefield, it deals 4 damage to any target. Then, starting with you, each player assigns their creatures to the left or right of the volcano. Creatures enter the battlefield to the left or right of the volcano.\nCreatures can't block creatures on the other side of the volcano.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/9a274ebf-15c5-4db9-9987-3e3f92f41d47/rulings",
    artist: "Gavin Verhey",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476190"
    }
  },
  {
    object: "card",
    id: "3df35f1b-c19c-4faf-81f6-0ffd47054446",
    oracle_id: "e11a4bcf-9086-40b3-add5-177424306472",
    multiverse_ids: [476191],
    name: "Queue of Beetles",
    uri: "https://api.scryfall.com/cards/3df35f1b-c19c-4faf-81f6-0ffd47054446",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/61/queue-of-beetles?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/3/d/3df35f1b-c19c-4faf-81f6-0ffd47054446.jpg?1574519839",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/d/3df35f1b-c19c-4faf-81f6-0ffd47054446.jpg?1574519839",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/3/d/3df35f1b-c19c-4faf-81f6-0ffd47054446.jpg?1574519839",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/3/d/3df35f1b-c19c-4faf-81f6-0ffd47054446.png?1574519839",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/d/3df35f1b-c19c-4faf-81f6-0ffd47054446.jpg?1574519839",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/d/3df35f1b-c19c-4faf-81f6-0ffd47054446.jpg?1574519839"
    },
    mana_cost: "{3}{R}",
    cmc: 4,
    type_line: "Creature — Insect",
    oracle_text:
      "Haste\nThe stack is now first in, first out instead of last in, first out. (The first spell or ability on the stack is the first one to resolve.)",
    power: "3",
    toughness: "3",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/3df35f1b-c19c-4faf-81f6-0ffd47054446/rulings",
    artist: "Brendan Sell",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476191"
    }
  },
  {
    object: "card",
    id: "8ede410c-8ddc-4658-85a6-9a99df9d655f",
    oracle_id: "8342aa2f-4506-4851-8c19-e59733bb93a1",
    multiverse_ids: [476194],
    name: "Siege Elemental",
    uri: "https://api.scryfall.com/cards/8ede410c-8ddc-4658-85a6-9a99df9d655f",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/64/siege-elemental?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/8/e/8ede410c-8ddc-4658-85a6-9a99df9d655f.jpg?1574127321",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/e/8ede410c-8ddc-4658-85a6-9a99df9d655f.jpg?1574127321",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/8/e/8ede410c-8ddc-4658-85a6-9a99df9d655f.jpg?1574127321",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/8/e/8ede410c-8ddc-4658-85a6-9a99df9d655f.png?1574127321",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/e/8ede410c-8ddc-4658-85a6-9a99df9d655f.jpg?1574127321",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/e/8ede410c-8ddc-4658-85a6-9a99df9d655f.jpg?1574127321"
    },
    mana_cost: "{4}{R}{R}",
    cmc: 6,
    type_line: "Creature — Elemental",
    oracle_text:
      "Trample\nUntapped creatures can't block.\nTapped creatures can block.",
    power: "6",
    toughness: "6",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/8ede410c-8ddc-4658-85a6-9a99df9d655f/rulings",
    artist: "Levi Parker",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476194"
    }
  },
  {
    object: "card",
    id: "c54cc43c-8c06-4c23-8021-94689eeb4ad4",
    oracle_id: "073551ca-2e84-4d49-8484-9890718cc483",
    multiverse_ids: [108862],
    name: "Pandemonium",
    uri: "https://api.scryfall.com/cards/c54cc43c-8c06-4c23-8021-94689eeb4ad4",
    scryfall_uri: "https://scryfall.com/card/tsb/68/pandemonium?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/5/c54cc43c-8c06-4c23-8021-94689eeb4ad4.jpg?1562783662",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/5/c54cc43c-8c06-4c23-8021-94689eeb4ad4.jpg?1562783662",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c54cc43c-8c06-4c23-8021-94689eeb4ad4.jpg?1562783662",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/5/c54cc43c-8c06-4c23-8021-94689eeb4ad4.png?1562783662",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/5/c54cc43c-8c06-4c23-8021-94689eeb4ad4.jpg?1562783662",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/5/c54cc43c-8c06-4c23-8021-94689eeb4ad4.jpg?1562783662"
    },
    mana_cost: "{3}{R}",
    cmc: 4,
    type_line: "Enchantment",
    oracle_text:
      "Whenever a creature enters the battlefield, that creature's controller may have it deal damage equal to its power to any target of their choice.",
    colors: ["R"],
    color_identity: ["R"],

    rulings_uri:
      "https://api.scryfall.com/cards/c54cc43c-8c06-4c23-8021-94689eeb4ad4/rulings",
    flavor_text:
      '"If we cannot live proudly, we die so!"\n—Eladamri, Lord of Leaves',
    artist: "Pete Venters",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=108862"
    }
  },
  {
    object: "card",
    id: "f63b82f9-ebc4-465c-b25e-5ee710525143",
    oracle_id: "3e0bcf65-1eaf-440f-a59b-0b11e1106135",
    multiverse_ids: [423635],
    name: "Naar Isle",
    uri: "https://api.scryfall.com/cards/f63b82f9-ebc4-465c-b25e-5ee710525143",
    scryfall_uri: "https://scryfall.com/card/opca/54/naar-isle?utm_source=api",
    layout: "planar",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/6/f63b82f9-ebc4-465c-b25e-5ee710525143.jpg?1547432449",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/6/f63b82f9-ebc4-465c-b25e-5ee710525143.jpg?1547432449",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/6/f63b82f9-ebc4-465c-b25e-5ee710525143.jpg?1547432449",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/f/6/f63b82f9-ebc4-465c-b25e-5ee710525143.png?1547432449",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/6/f63b82f9-ebc4-465c-b25e-5ee710525143.jpg?1547432449",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/6/f63b82f9-ebc4-465c-b25e-5ee710525143.jpg?1547432449"
    },
    mana_cost: "",
    cmc: 0,
    type_line: "Plane — Wildfire",
    oracle_text:
      "At the beginning of your upkeep, put a flame counter on Naar Isle, then Naar Isle deals damage to you equal to the number of flame counters on it.\nWhenever you roll {CHAOS}, Naar Isle deals 3 damage to target player or planeswalker.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/f63b82f9-ebc4-465c-b25e-5ee710525143/rulings",
    artist: "Mark Zug",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=423635"
    }
  },
  {
    object: "card",
    id: "6caf8b21-1807-442c-a461-c89c7591df70",
    oracle_id: "38f84e55-049c-441e-b4e2-1e207ab5dbe5",
    multiverse_ids: [423592],
    name: "Agyrem",
    uri: "https://api.scryfall.com/cards/6caf8b21-1807-442c-a461-c89c7591df70",
    scryfall_uri: "https://scryfall.com/card/opca/11/agyrem?utm_source=api",
    layout: "planar",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/6/c/6caf8b21-1807-442c-a461-c89c7591df70.jpg?1547432309",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/c/6caf8b21-1807-442c-a461-c89c7591df70.jpg?1547432309",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/6/c/6caf8b21-1807-442c-a461-c89c7591df70.jpg?1547432309",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/6/c/6caf8b21-1807-442c-a461-c89c7591df70.png?1547432309",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/c/6caf8b21-1807-442c-a461-c89c7591df70.jpg?1547432309",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/c/6caf8b21-1807-442c-a461-c89c7591df70.jpg?1547432309"
    },
    mana_cost: "",
    cmc: 0,
    type_line: "Plane — Ravnica",
    oracle_text:
      "Whenever a white creature dies, return it to the battlefield under its owner's control at the beginning of the next end step.\nWhenever a nonwhite creature dies, return it to its owner's hand at the beginning of the next end step.\nWhenever you roll {CHAOS}, creatures can't attack you until a player planeswalks.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/6caf8b21-1807-442c-a461-c89c7591df70/rulings",
    artist: "Todd Lockwood",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=423592"
    }
  },
  {
    object: "card",
    id: "0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64",
    oracle_id: "256770fe-c17d-45dd-bf05-36eeee240324",
    multiverse_ids: [423624],
    name: "Kharasha Foothills",
    uri: "https://api.scryfall.com/cards/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64",
    scryfall_uri:
      "https://scryfall.com/card/opca/43/kharasha-foothills?utm_source=api",
    layout: "planar",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/0/f/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64.jpg?1547432379",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/f/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64.jpg?1547432379",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/0/f/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64.jpg?1547432379",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/0/f/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64.png?1547432379",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/f/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64.jpg?1547432379",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/f/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64.jpg?1547432379"
    },
    mana_cost: "",
    cmc: 0,
    type_line: "Plane — Mongseng",
    oracle_text:
      "Whenever a creature you control attacks a player, for each other opponent, you may create a token that's a copy of that creature, tapped and attacking that opponent. Exile those tokens at the beginning of the next end step.\nWhenever you roll {CHAOS}, you may sacrifice any number of creatures. If you do, Kharasha Foothills deals that much damage to target creature.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/0f05d1ae-d70b-474c-93fc-a5d2e3ac6b64/rulings",
    artist: "Trevor Claxton",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=423624"
    }
  },
  {
    object: "card",
    id: "e24fbdbb-f2ae-4823-9d2a-4c505332aa5b",
    oracle_id: "03efb4f3-b8e2-4441-824f-886dc40712c4",
    multiverse_ids: [489945],
    name: "Mesmeric Orb",
    uri: "https://api.scryfall.com/cards/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b",
    scryfall_uri:
      "https://scryfall.com/card/2xm/272/mesmeric-orb?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/2/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b.jpg?1599709541",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/2/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b.jpg?1599709541",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/2/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b.jpg?1599709541",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/2/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b.png?1599709541",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/2/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b.jpg?1599709541",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/2/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b.jpg?1599709541"
    },
    mana_cost: "{2}",
    cmc: 2,
    type_line: "Artifact",
    oracle_text:
      "Whenever a permanent becomes untapped, that permanent's controller mills a card.",
    colors: [],
    color_identity: [],

    rulings_uri:
      "https://api.scryfall.com/cards/e24fbdbb-f2ae-4823-9d2a-4c505332aa5b/rulings",
    flavor_text: "A step in one direction is two steps away from another.",
    artist: "David Martin",
    preview: {
      source: "LoadingReadyRun",
      source_uri: "https://www.youtube.com/watch?v=yAYGFb0F1u0",
      previewed_at: "2020-07-29"
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=489945"
    }
  },
  {
    object: "card",
    id: "4afb8115-3a47-4d7e-a3ed-b2e81ca27255",
    oracle_id: "ca7ecf93-6cab-43b4-85ab-25a2c50505a2",
    multiverse_ids: [439469],
    name: "The Countdown Is at One",
    uri: "https://api.scryfall.com/cards/4afb8115-3a47-4d7e-a3ed-b2e81ca27255",
    scryfall_uri:
      "https://scryfall.com/card/ust/80/the-countdown-is-at-one?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/4/a/4afb8115-3a47-4d7e-a3ed-b2e81ca27255.jpg?1562910709",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4afb8115-3a47-4d7e-a3ed-b2e81ca27255.jpg?1562910709",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4afb8115-3a47-4d7e-a3ed-b2e81ca27255.jpg?1562910709",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4afb8115-3a47-4d7e-a3ed-b2e81ca27255.png?1562910709",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/a/4afb8115-3a47-4d7e-a3ed-b2e81ca27255.jpg?1562910709",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/a/4afb8115-3a47-4d7e-a3ed-b2e81ca27255.jpg?1562910709"
    },
    mana_cost: "{3}{R}{R}",
    cmc: 5,
    type_line: "Sorcery",
    oracle_text:
      "Players play a Magic subgame, starting at 1 life and using their libraries as their decks. For the rest of the main game, if a source would deal damage to a player who didn't win the subgame, it deals double that damage to that player instead.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/4afb8115-3a47-4d7e-a3ed-b2e81ca27255/rulings",
    watermark: "leagueofdastardlydoom",
    artist: "Jesper Ejsing",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=439469"
    }
  },
  {
    object: "card",
    id: "c3bbf567-bdb4-4f88-906c-eb1503c02d9f",
    oracle_id: "edc4d1fb-f482-4f2b-985e-1e4d5941e574",
    multiverse_ids: [439497],
    name: "Earl of Squirrel",
    uri: "https://api.scryfall.com/cards/c3bbf567-bdb4-4f88-906c-eb1503c02d9f",
    scryfall_uri:
      "https://scryfall.com/card/ust/108/earl-of-squirrel?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/3/c3bbf567-bdb4-4f88-906c-eb1503c02d9f.jpg?1579814079",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/3/c3bbf567-bdb4-4f88-906c-eb1503c02d9f.jpg?1579814079",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/3/c3bbf567-bdb4-4f88-906c-eb1503c02d9f.jpg?1579814079",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/3/c3bbf567-bdb4-4f88-906c-eb1503c02d9f.png?1579814079",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/3/c3bbf567-bdb4-4f88-906c-eb1503c02d9f.jpg?1579814079",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/3/c3bbf567-bdb4-4f88-906c-eb1503c02d9f.jpg?1579814079"
    },
    mana_cost: "{4}{G}{G}",
    cmc: 6,
    type_line: "Creature — Squirrel Noble Advisor",
    oracle_text:
      "Squirrellink (Damage dealt by this creature also causes you to create that many 1/1 green Squirrel creature tokens.)\nCreature tokens you control are Squirrels in addition to their other creature types.\nOther Squirrels you control get +1/+1.",
    power: "4",
    toughness: "4",
    colors: ["G"],
    color_identity: ["G"],
    all_parts: [
      {
        object: "related_card",
        id: "c3bbf567-bdb4-4f88-906c-eb1503c02d9f",
        component: "combo_piece",
        name: "Earl of Squirrel",
        type_line: "Creature — Squirrel Noble Advisor",
        uri:
          "https://api.scryfall.com/cards/c3bbf567-bdb4-4f88-906c-eb1503c02d9f"
      },
      {
        object: "related_card",
        id: "c7188d0f-0329-4ecc-ab2e-dea7c5f39852",
        component: "combo_piece",
        name: "Earl of Squirrel",
        type_line: "Creature — Squirrel Noble Advisor",
        uri:
          "https://api.scryfall.com/cards/c7188d0f-0329-4ecc-ab2e-dea7c5f39852"
      },
      {
        object: "related_card",
        id: "53500f0f-ef65-4534-a8db-80ce73030bc1",
        component: "token",
        name: "Squirrel",
        type_line: "Token Creature — Squirrel",
        uri:
          "https://api.scryfall.com/cards/53500f0f-ef65-4534-a8db-80ce73030bc1"
      }
    ],

    rulings_uri:
      "https://api.scryfall.com/cards/c3bbf567-bdb4-4f88-906c-eb1503c02d9f/rulings",
    artist: "Milivoj Ćeran",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=439497"
    }
  },
  {
    object: "card",
    id: "924127a5-a364-489a-804f-a4f4174064ae",
    oracle_id: "4bf9818d-fec2-430c-9278-76ef2539d987",
    multiverse_ids: [74276],
    name: "Staying Power",
    uri: "https://api.scryfall.com/cards/924127a5-a364-489a-804f-a4f4174064ae",
    scryfall_uri:
      "https://scryfall.com/card/unh/21/staying-power?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/9/2/924127a5-a364-489a-804f-a4f4174064ae.jpg?1562488884",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/2/924127a5-a364-489a-804f-a4f4174064ae.jpg?1562488884",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/9/2/924127a5-a364-489a-804f-a4f4174064ae.jpg?1562488884",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/9/2/924127a5-a364-489a-804f-a4f4174064ae.png?1562488884",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/2/924127a5-a364-489a-804f-a4f4174064ae.jpg?1562488884",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/2/924127a5-a364-489a-804f-a4f4174064ae.jpg?1562488884"
    },
    mana_cost: "{2}{W}",
    cmc: 3,
    type_line: "Enchantment",
    oracle_text: '"Until end of turn" and "this turn" effects don\'t end.',
    colors: ["W"],
    color_identity: ["W"],

    rulings_uri:
      "https://api.scryfall.com/cards/924127a5-a364-489a-804f-a4f4174064ae/rulings",
    flavor_text:
      "Mongo's fleas no longer bothered him. But the family of goblins that had moved in behind his left ear was starting to get really irritating.",
    artist: "Richard Sardinha",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=74276"
    }
  },
  {
    object: "card",
    id: "d1ead203-b976-46d7-81c7-86ada091a4ec",
    oracle_id: "0f863bb9-d73a-485b-b620-fb23510ff6d1",
    multiverse_ids: [74336],
    name: "Zzzyxas's Abyss",
    uri: "https://api.scryfall.com/cards/d1ead203-b976-46d7-81c7-86ada091a4ec",
    scryfall_uri:
      "https://scryfall.com/card/unh/70/zzzyxass-abyss?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/1/d1ead203-b976-46d7-81c7-86ada091a4ec.jpg?1562489813",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/1/d1ead203-b976-46d7-81c7-86ada091a4ec.jpg?1562489813",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/1/d1ead203-b976-46d7-81c7-86ada091a4ec.jpg?1562489813",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/1/d1ead203-b976-46d7-81c7-86ada091a4ec.png?1562489813",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/1/d1ead203-b976-46d7-81c7-86ada091a4ec.jpg?1562489813",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/1/d1ead203-b976-46d7-81c7-86ada091a4ec.jpg?1562489813"
    },
    mana_cost: "{1}{B}{B}",
    cmc: 3,
    type_line: "Enchantment",
    oracle_text:
      "At the beginning of your upkeep, destroy all nonland permanents with the first name alphabetically among nonland permanents.",
    colors: ["B"],
    color_identity: ["B"],
    rulings_uri:
      "https://api.scryfall.com/cards/d1ead203-b976-46d7-81c7-86ada091a4ec/rulings",
    flavor_text:
      "Tired of always being picked last, the wizard Zzzyxas created the ultimate revenge.",
    artist: "Pete Venters",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=74336"
    }
  },
  {
    object: "card",
    id: "e731ba8c-e909-4053-84ae-0793a7319540",
    oracle_id: "77d1489b-e7c1-4185-9269-766ca554f0e8",
    multiverse_ids: [74331],
    name: "Yet Another Aether Vortex",
    uri: "https://api.scryfall.com/cards/e731ba8c-e909-4053-84ae-0793a7319540",
    scryfall_uri:
      "https://scryfall.com/card/unh/91/yet-another-aether-vortex?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/e/7/e731ba8c-e909-4053-84ae-0793a7319540.jpg?1562489838",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/7/e731ba8c-e909-4053-84ae-0793a7319540.jpg?1562489838",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/e/7/e731ba8c-e909-4053-84ae-0793a7319540.jpg?1562489838",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/e/7/e731ba8c-e909-4053-84ae-0793a7319540.png?1562489838",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/7/e731ba8c-e909-4053-84ae-0793a7319540.jpg?1562489838",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/7/e731ba8c-e909-4053-84ae-0793a7319540.jpg?1562489838"
    },
    mana_cost: "{3}{R}{R}",
    cmc: 5,
    type_line: "Enchantment",
    oracle_text:
      "All creatures have haste.\nPlayers play with the top card of their libraries revealed.\nNoninstant, nonsorcery cards on top of a library are on the battlefield under their owner's control in addition to being in that library.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/e731ba8c-e909-4053-84ae-0793a7319540/rulings",
    flavor_text: 'It puts the "vortex" in "flavortext."',
    artist: "David Day",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=74331"
    }
  },
  {
    object: "card",
    id: "d696f3a6-88c3-4aab-9c1f-05b5e36094fa",
    oracle_id: "43693907-7bc0-4b2a-a898-e24256e1d923",
    multiverse_ids: [479429],
    name: "Enter the Dungeon",
    uri: "https://api.scryfall.com/cards/d696f3a6-88c3-4aab-9c1f-05b5e36094fa",
    scryfall_uri:
      "https://scryfall.com/card/und/36/enter-the-dungeon?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/d/6/d696f3a6-88c3-4aab-9c1f-05b5e36094fa.jpg?1583965541",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/6/d696f3a6-88c3-4aab-9c1f-05b5e36094fa.jpg?1583965541",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/d/6/d696f3a6-88c3-4aab-9c1f-05b5e36094fa.jpg?1583965541",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/d/6/d696f3a6-88c3-4aab-9c1f-05b5e36094fa.png?1583965541",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/6/d696f3a6-88c3-4aab-9c1f-05b5e36094fa.jpg?1583965541",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/6/d696f3a6-88c3-4aab-9c1f-05b5e36094fa.jpg?1583965541"
    },
    mana_cost: "{B}{B}",
    cmc: 2,
    type_line: "Sorcery",
    oracle_text:
      "Players play a Magic subgame under the table, starting at 5 life and using their libraries as their decks. The winner searches their library for two cards, puts those cards into their hand, then shuffles.",
    colors: ["B"],
    color_identity: ["B"],

    rulings_uri:
      "https://api.scryfall.com/cards/d696f3a6-88c3-4aab-9c1f-05b5e36094fa/rulings",
    artist: "Luca Zontini",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=479429"
    }
  },
  {
    object: "card",
    id: "c5b10c5f-261f-4301-b675-d1f52b859360",
    oracle_id: "9243bd95-5467-490d-9bd2-4d5ce1ebc589",
    multiverse_ids: [89042],
    name: "Ghosts of the Innocent",
    uri: "https://api.scryfall.com/cards/c5b10c5f-261f-4301-b675-d1f52b859360",
    scryfall_uri:
      "https://scryfall.com/card/rav/20/ghosts-of-the-innocent?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/c/5/c5b10c5f-261f-4301-b675-d1f52b859360.jpg?1598913718",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/5/c5b10c5f-261f-4301-b675-d1f52b859360.jpg?1598913718",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c5b10c5f-261f-4301-b675-d1f52b859360.jpg?1598913718",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/c/5/c5b10c5f-261f-4301-b675-d1f52b859360.png?1598913718",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/5/c5b10c5f-261f-4301-b675-d1f52b859360.jpg?1598913718",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/5/c5b10c5f-261f-4301-b675-d1f52b859360.jpg?1598913718"
    },
    mana_cost: "{5}{W}{W}",
    cmc: 7,
    type_line: "Creature — Spirit",
    oracle_text:
      "If a source would deal damage to a permanent or player, it deals half that damage, rounded down, to that permanent or player instead.",
    power: "4",
    toughness: "5",
    colors: ["W"],
    color_identity: ["W"],
    rulings_uri:
      "https://api.scryfall.com/cards/c5b10c5f-261f-4301-b675-d1f52b859360/rulings",
    flavor_text:
      '"Ma said we should offer up blini-cakes and salt to the good ones, but I get that chill up my spine and just shut the door."\n—Otak, Tin Street shopkeep',
    artist: "Kev Walker",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=89042"
    }
  },
  {
    object: "card",
    id: "11443908-358f-4886-a2da-9b98002a3a3a",
    oracle_id: "97c8f5e1-9fc1-4a62-a757-1c0454754cd3",
    multiverse_ids: [25681],
    name: "Impatience",
    uri: "https://api.scryfall.com/cards/11443908-358f-4886-a2da-9b98002a3a3a",
    scryfall_uri: "https://scryfall.com/card/7ed/197/impatience?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/1/1/11443908-358f-4886-a2da-9b98002a3a3a.jpg?1562232834",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/1/11443908-358f-4886-a2da-9b98002a3a3a.jpg?1562232834",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/1/1/11443908-358f-4886-a2da-9b98002a3a3a.jpg?1562232834",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/1/1/11443908-358f-4886-a2da-9b98002a3a3a.png?1562232834",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/1/11443908-358f-4886-a2da-9b98002a3a3a.jpg?1562232834",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/11443908-358f-4886-a2da-9b98002a3a3a.jpg?1562232834"
    },
    mana_cost: "{2}{R}",
    cmc: 3,
    type_line: "Enchantment",
    oracle_text:
      "At the beginning of each player's end step, if that player didn't cast a spell this turn, Impatience deals 2 damage to that player.",
    colors: ["R"],
    color_identity: ["R"],
    rulings_uri:
      "https://api.scryfall.com/cards/11443908-358f-4886-a2da-9b98002a3a3a/rulings",
    flavor_text: '"I\'m going to count to three. Three."',
    artist: "Kunio Hagio",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=25681"
    }
  },
  {
    object: "card",
    id: "58080146-9cbb-4872-a348-8fe85848eba1",
    oracle_id: "5255bad8-23a8-4ec5-860f-b44ca88a5536",
    multiverse_ids: [476236],
    name: "Lantern of Undersight",
    uri: "https://api.scryfall.com/cards/58080146-9cbb-4872-a348-8fe85848eba1",
    scryfall_uri:
      "https://scryfall.com/card/cmb1/106/lantern-of-undersight?utm_source=api",
    layout: "normal",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/5/8/58080146-9cbb-4872-a348-8fe85848eba1.jpg?1582667791",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/58080146-9cbb-4872-a348-8fe85848eba1.jpg?1582667791",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/5/8/58080146-9cbb-4872-a348-8fe85848eba1.jpg?1582667791",
      png:
        "https://c1.scryfall.com/file/scryfall-cards/png/front/5/8/58080146-9cbb-4872-a348-8fe85848eba1.png?1582667791",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/8/58080146-9cbb-4872-a348-8fe85848eba1.jpg?1582667791",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/8/58080146-9cbb-4872-a348-8fe85848eba1.jpg?1582667791"
    },
    mana_cost: "{1}",
    cmc: 1,
    type_line: "Artifact",
    oracle_text:
      "You draw cards from the bottom of your library instead of the top of your library.",
    colors: [],
    color_identity: [],
    rulings_uri:
      "https://api.scryfall.com/cards/58080146-9cbb-4872-a348-8fe85848eba1/rulings",
    artist: "Trick Jarrett",
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476236"
    }
  },
  [
    {
      object: "card",
      id: "fdc7aeed-ce95-4fc6-b7ef-0697f850fa90",
      oracle_id: "561e8ecc-1f2b-4fd4-8f92-a0acea449816",
      multiverse_ids: [531506],
      name: "Netherese Puzzle-Ward",
      uri:
        "https://api.scryfall.com/cards/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90",
      scryfall_uri:
        "https://scryfall.com/card/afc/286/netherese-puzzle-ward?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/f/d/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90.jpg?1626127510",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/d/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90.jpg?1626127510",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/f/d/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90.jpg?1626127510",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/f/d/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90.png?1626127510",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/d/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90.jpg?1626127510",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/d/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90.jpg?1626127510"
      },
      mana_cost: "{3}{U}",
      cmc: 4,
      type_line: "Enchantment",
      oracle_text:
        "Focus Beam — At the beginning of your upkeep, roll a d4. Scry X, where X is the result.\nPerfect Illumination — Whenever you roll a die's highest natural result, draw a card.",
      colors: ["U"],
      color_identity: ["U"],
      rulings_uri:
        "https://api.scryfall.com/cards/fdc7aeed-ce95-4fc6-b7ef-0697f850fa90/rulings",
      artist: "Ralph Horsley",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=531506"
      }
    },
    {
      object: "card",
      id: "0b09315c-d6ff-4fdb-8774-c6402b45e959",
      oracle_id: "1a4c03ab-519a-4840-893a-769dfc5cf161",
      multiverse_ids: [39663],
      name: "Risky Move",
      uri:
        "https://api.scryfall.com/cards/0b09315c-d6ff-4fdb-8774-c6402b45e959",
      scryfall_uri:
        "https://scryfall.com/card/ons/223/risky-move?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/0/b/0b09315c-d6ff-4fdb-8774-c6402b45e959.jpg?1562897507",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/b/0b09315c-d6ff-4fdb-8774-c6402b45e959.jpg?1562897507",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/0/b/0b09315c-d6ff-4fdb-8774-c6402b45e959.jpg?1562897507",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/0/b/0b09315c-d6ff-4fdb-8774-c6402b45e959.png?1562897507",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/b/0b09315c-d6ff-4fdb-8774-c6402b45e959.jpg?1562897507",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/b/0b09315c-d6ff-4fdb-8774-c6402b45e959.jpg?1562897507"
      },
      mana_cost: "{3}{R}{R}{R}",
      cmc: 6,
      type_line: "Enchantment",
      oracle_text:
        "At the beginning of each player's upkeep, that player gains control of Risky Move.\nWhen you gain control of Risky Move from another player, choose a creature you control and an opponent. Flip a coin. If you lose the flip, that opponent gains control of that creature.",
      colors: ["R"],
      color_identity: ["R"],
      rulings_uri:
        "https://api.scryfall.com/cards/0b09315c-d6ff-4fdb-8774-c6402b45e959/rulings",
      artist: "Jerry Tiritilli",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=39663"
      }
    },
    {
      object: "card",
      id: "4afa3367-eb7e-4c92-96a1-2b6865b24f52",
      oracle_id: "fd4236e5-6a2c-45ec-afb3-cd4fc516fbf1",
      multiverse_ids: [89109],
      name: "Concerted Effort",
      uri:
        "https://api.scryfall.com/cards/4afa3367-eb7e-4c92-96a1-2b6865b24f52",
      scryfall_uri:
        "https://scryfall.com/card/rav/8/concerted-effort?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/4/a/4afa3367-eb7e-4c92-96a1-2b6865b24f52.jpg?1598913524",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4afa3367-eb7e-4c92-96a1-2b6865b24f52.jpg?1598913524",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4afa3367-eb7e-4c92-96a1-2b6865b24f52.jpg?1598913524",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4afa3367-eb7e-4c92-96a1-2b6865b24f52.png?1598913524",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/a/4afa3367-eb7e-4c92-96a1-2b6865b24f52.jpg?1598913524",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/a/4afa3367-eb7e-4c92-96a1-2b6865b24f52.jpg?1598913524"
      },
      mana_cost: "{2}{W}{W}",
      cmc: 4,
      type_line: "Enchantment",
      oracle_text:
        "At the beginning of each upkeep, creatures you control gain flying until end of turn if a creature you control has flying. The same is true for fear, first strike, double strike, landwalk, protection, trample, and vigilance.",
      colors: ["W"],
      color_identity: ["W"],
      rulings_uri:
        "https://api.scryfall.com/cards/4afa3367-eb7e-4c92-96a1-2b6865b24f52/rulings",
      artist: "Michael Sutfin",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=89109"
      }
    },
    {
      object: "card",
      id: "c6d4ab45-ab42-4144-9c57-ba046b76860c",
      oracle_id: "c30e89fa-8993-468d-b2ee-093c3950f520",
      multiverse_ids: [386327],
      name: "Hellraiser Goblin",
      uri:
        "https://api.scryfall.com/cards/c6d4ab45-ab42-4144-9c57-ba046b76860c",
      scryfall_uri:
        "https://scryfall.com/card/ddn/7/hellraiser-goblin?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/6/c6d4ab45-ab42-4144-9c57-ba046b76860c.jpg?1592754617",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/6/c6d4ab45-ab42-4144-9c57-ba046b76860c.jpg?1592754617",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/6/c6d4ab45-ab42-4144-9c57-ba046b76860c.jpg?1592754617",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/c/6/c6d4ab45-ab42-4144-9c57-ba046b76860c.png?1592754617",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/6/c6d4ab45-ab42-4144-9c57-ba046b76860c.jpg?1592754617",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/6/c6d4ab45-ab42-4144-9c57-ba046b76860c.jpg?1592754617"
      },
      mana_cost: "{2}{R}",
      cmc: 3,
      type_line: "Creature — Goblin Berserker",
      oracle_text:
        "Creatures you control have haste and attack each combat if able.",
      colors: ["R"],
      color_identity: ["R"],
      rulings_uri:
        "https://api.scryfall.com/cards/c6d4ab45-ab42-4144-9c57-ba046b76860c/rulings",
      artist: "Karl Kopinski",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=386327"
      }
    },
    {
      object: "card",
      id: "393454c2-b256-4a6e-9bc2-56a47cab5073",
      oracle_id: "cb53bd72-dee8-46fa-b0f9-1eee3a99379a",
      multiverse_ids: [214035],
      name: "Knowledge Pool",
      uri:
        "https://api.scryfall.com/cards/393454c2-b256-4a6e-9bc2-56a47cab5073",
      scryfall_uri:
        "https://scryfall.com/card/mbs/111/knowledge-pool?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/3/9/393454c2-b256-4a6e-9bc2-56a47cab5073.jpg?1562610637",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/9/393454c2-b256-4a6e-9bc2-56a47cab5073.jpg?1562610637",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/3/9/393454c2-b256-4a6e-9bc2-56a47cab5073.jpg?1562610637",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/3/9/393454c2-b256-4a6e-9bc2-56a47cab5073.png?1562610637",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/9/393454c2-b256-4a6e-9bc2-56a47cab5073.jpg?1562610637",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/9/393454c2-b256-4a6e-9bc2-56a47cab5073.jpg?1562610637"
      },
      mana_cost: "{6}",
      cmc: 6,
      type_line: "Artifact",
      oracle_text:
        "Imprint — When Knowledge Pool enters the battlefield, each player exiles the top three cards of their library.\nWhenever a player casts a spell from their hand, that player exiles it. If the player does, they may cast a spell from among other cards exiled with Knowledge Pool without paying its mana cost.",
      colors: [],
      color_identity: [],
      rulings_uri:
        "https://api.scryfall.com/cards/393454c2-b256-4a6e-9bc2-56a47cab5073/rulings",
      artist: "Mike Bierek",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=214035"
      }
    },
    {
      object: "card",
      id: "b41983cb-c4e4-4384-bd69-df3fc6e74cd0",
      oracle_id: "44e8d51e-0885-49df-a77c-cf4a88e41bc1",
      multiverse_ids: [78854],
      name: "Horobi, Death's Wail",
      uri:
        "https://api.scryfall.com/cards/b41983cb-c4e4-4384-bd69-df3fc6e74cd0",
      scryfall_uri:
        "https://scryfall.com/card/chk/117/horobi-deaths-wail?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/4/b41983cb-c4e4-4384-bd69-df3fc6e74cd0.jpg?1593860738",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/4/b41983cb-c4e4-4384-bd69-df3fc6e74cd0.jpg?1593860738",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/4/b41983cb-c4e4-4384-bd69-df3fc6e74cd0.jpg?1593860738",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/b/4/b41983cb-c4e4-4384-bd69-df3fc6e74cd0.png?1593860738",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/4/b41983cb-c4e4-4384-bd69-df3fc6e74cd0.jpg?1593860738",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/4/b41983cb-c4e4-4384-bd69-df3fc6e74cd0.jpg?1593860738"
      },
      mana_cost: "{2}{B}{B}",
      cmc: 4,
      type_line: "Legendary Creature — Spirit",
      oracle_text:
        "Flying\nWhenever a creature becomes the target of a spell or ability, destroy that creature.",
      colors: ["B"],
      color_identity: ["B"],
      rulings_uri:
        "https://api.scryfall.com/cards/b41983cb-c4e4-4384-bd69-df3fc6e74cd0/rulings",
      artist: "John Bolton",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=78854"
      }
    },
    {
      object: "card",
      id: "fbafc838-7458-4542-86f3-594326ec0691",
      oracle_id: "7c59ad65-ad1f-4dc4-bcf2-ea6b2b48fad8",
      multiverse_ids: [3790],
      name: "Infinite Hourglass",
      uri:
        "https://api.scryfall.com/cards/fbafc838-7458-4542-86f3-594326ec0691",
      scryfall_uri:
        "https://scryfall.com/card/5ed/378/infinite-hourglass?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/f/b/fbafc838-7458-4542-86f3-594326ec0691.jpg?1562595427",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/b/fbafc838-7458-4542-86f3-594326ec0691.jpg?1562595427",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/f/b/fbafc838-7458-4542-86f3-594326ec0691.jpg?1562595427",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/f/b/fbafc838-7458-4542-86f3-594326ec0691.png?1562595427",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/b/fbafc838-7458-4542-86f3-594326ec0691.jpg?1562595427",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/b/fbafc838-7458-4542-86f3-594326ec0691.jpg?1562595427"
      },
      mana_cost: "{4}",
      cmc: 4,
      type_line: "Artifact",
      oracle_text:
        "At the beginning of your upkeep, put a time counter on Infinite Hourglass.\nAll creatures get +1/+0 for each time counter on Infinite Hourglass.\n{3}: Remove a time counter from Infinite Hourglass. Any player may activate this ability but only during any upkeep step.",
      colors: [],
      color_identity: [],
      rulings_uri:
        "https://api.scryfall.com/cards/fbafc838-7458-4542-86f3-594326ec0691/rulings",
      artist: "Adam Rex",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=3790"
      }
    },
    {
      object: "card",
      id: "a971b3d5-9a78-437f-a385-3390e64c53de",
      oracle_id: "cc4f1023-09e4-4f27-8712-be72e9694a80",
      multiverse_ids: [521674],
      name: "Tempting Contract",
      uri:
        "https://api.scryfall.com/cards/a971b3d5-9a78-437f-a385-3390e64c53de",
      scryfall_uri:
        "https://scryfall.com/card/c21/405/tempting-contract?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/9/a971b3d5-9a78-437f-a385-3390e64c53de.jpg?1625983896",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/9/a971b3d5-9a78-437f-a385-3390e64c53de.jpg?1625983896",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/9/a971b3d5-9a78-437f-a385-3390e64c53de.jpg?1625983896",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/a/9/a971b3d5-9a78-437f-a385-3390e64c53de.png?1625983896",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/9/a971b3d5-9a78-437f-a385-3390e64c53de.jpg?1625983896",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/9/a971b3d5-9a78-437f-a385-3390e64c53de.jpg?1625983896"
      },
      mana_cost: "{4}",
      cmc: 4,
      type_line: "Artifact",
      oracle_text:
        "At the beginning of your upkeep, each opponent may create a Treasure token. For each opponent who does, you create a Treasure token.",
      colors: [],
      color_identity: [],
      rulings_uri:
        "https://api.scryfall.com/cards/a971b3d5-9a78-437f-a385-3390e64c53de/rulings",
      artist: "Tomas Duchek",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=521674"
      }
    },
    {
      object: "card",
      id: "b902b972-3a93-4e4e-aa77-02ada81e6b95",
      oracle_id: "b18b8415-a0b1-459d-8c6b-896381184935",
      multiverse_ids: [4493],
      name: "Pendrell Mists",
      uri:
        "https://api.scryfall.com/cards/b902b972-3a93-4e4e-aa77-02ada81e6b95",
      scryfall_uri:
        "https://scryfall.com/card/wth/47/pendrell-mists?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/9/b902b972-3a93-4e4e-aa77-02ada81e6b95.jpg?1562802967",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/9/b902b972-3a93-4e4e-aa77-02ada81e6b95.jpg?1562802967",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/9/b902b972-3a93-4e4e-aa77-02ada81e6b95.jpg?1562802967",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/b/9/b902b972-3a93-4e4e-aa77-02ada81e6b95.png?1562802967",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/9/b902b972-3a93-4e4e-aa77-02ada81e6b95.jpg?1562802967",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/9/b902b972-3a93-4e4e-aa77-02ada81e6b95.jpg?1562802967"
      },
      mana_cost: "{3}{U}",
      cmc: 4,
      type_line: "Enchantment",
      oracle_text:
        'All creatures have "At the beginning of your upkeep, sacrifice this creature unless you pay {1}."',
      colors: ["U"],
      color_identity: ["U"],
      rulings_uri:
        "https://api.scryfall.com/cards/b902b972-3a93-4e4e-aa77-02ada81e6b95/rulings",
      artist: "Andrew Robinson",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=4493"
      }
    },
    {
      object: "card",
      id: "70511f69-8615-4e45-bd4e-76acfe9e4278",
      oracle_id: "94a844d2-0574-45a7-b347-e0e329767c42",
      multiverse_ids: [],
      name: "Necropotence",
      uri:
        "https://api.scryfall.com/cards/70511f69-8615-4e45-bd4e-76acfe9e4278",
      scryfall_uri:
        "https://scryfall.com/card/dkm/7/necropotence?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/0/70511f69-8615-4e45-bd4e-76acfe9e4278.jpg?1562921448",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/0/70511f69-8615-4e45-bd4e-76acfe9e4278.jpg?1562921448",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/0/70511f69-8615-4e45-bd4e-76acfe9e4278.jpg?1562921448",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/7/0/70511f69-8615-4e45-bd4e-76acfe9e4278.png?1562921448",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/0/70511f69-8615-4e45-bd4e-76acfe9e4278.jpg?1562921448",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/0/70511f69-8615-4e45-bd4e-76acfe9e4278.jpg?1562921448"
      },
      mana_cost: "{B}{B}{B}",
      cmc: 3,
      type_line: "Enchantment",
      oracle_text:
        "Skip your draw step.\nWhenever you discard a card, exile that card from your graveyard.\nPay 1 life: Exile the top card of your library face down. Put that card into your hand at the beginning of your next end step.",
      colors: ["B"],
      color_identity: ["B"],
      rulings_uri:
        "https://api.scryfall.com/cards/70511f69-8615-4e45-bd4e-76acfe9e4278/rulings",
      artist: "Mark Tedin"
    },
    {
      object: "card",
      id: "d7f0e720-3c32-4040-b663-7f99ad5bc810",
      oracle_id: "68715465-6cf9-4006-87e9-31f227fe9ed3",
      multiverse_ids: [205268],
      name: "Furnace of Rath",
      uri:
        "https://api.scryfall.com/cards/d7f0e720-3c32-4040-b663-7f99ad5bc810",
      scryfall_uri:
        "https://scryfall.com/card/hop/55/furnace-of-rath?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/d/7/d7f0e720-3c32-4040-b663-7f99ad5bc810.jpg?1562843335",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/7/d7f0e720-3c32-4040-b663-7f99ad5bc810.jpg?1562843335",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/d/7/d7f0e720-3c32-4040-b663-7f99ad5bc810.jpg?1562843335",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/d/7/d7f0e720-3c32-4040-b663-7f99ad5bc810.png?1562843335",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/7/d7f0e720-3c32-4040-b663-7f99ad5bc810.jpg?1562843335",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/7/d7f0e720-3c32-4040-b663-7f99ad5bc810.jpg?1562843335"
      },
      mana_cost: "{1}{R}{R}{R}",
      cmc: 4,
      type_line: "Enchantment",
      oracle_text:
        "If a source would deal damage to a permanent or player, it deals double that damage to that permanent or player instead.",
      colors: ["R"],
      color_identity: ["R"],
      rulings_uri:
        "https://api.scryfall.com/cards/d7f0e720-3c32-4040-b663-7f99ad5bc810/rulings",
      artist: "John Matson",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=205268"
      }
    },
    {
      object: "card",
      id: "c1c48c58-3532-4022-9eec-1a870385cbf3",
      oracle_id: "4d52c4a5-e5c8-4fb4-be50-78d5482dd1ae",
      multiverse_ids: [25816],
      name: "Overgrown Estate",
      uri:
        "https://api.scryfall.com/cards/c1c48c58-3532-4022-9eec-1a870385cbf3",
      scryfall_uri:
        "https://scryfall.com/card/apc/113/overgrown-estate?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.png?1562940749",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/1/c1c48c58-3532-4022-9eec-1a870385cbf3.jpg?1562940749"
      },
      mana_cost: "{W}{B}{G}",
      cmc: 3,
      type_line: "Enchantment",
      oracle_text: "Sacrifice a land: You gain 3 life.",
      colors: ["B", "G", "W"],
      color_identity: ["B", "G", "W"],
      rulings_uri:
        "https://api.scryfall.com/cards/c1c48c58-3532-4022-9eec-1a870385cbf3/rulings",
      artist: "Brian Snõddy",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=25816"
      }
    },
    {
      object: "card",
      id: "2ea50e09-4ab3-439e-83d7-d584f8af8f16",
      oracle_id: "eed742c3-006f-475c-aa62-41f971d328cb",
      multiverse_ids: [80276],
      name: "Swirl the Mists",
      uri:
        "https://api.scryfall.com/cards/2ea50e09-4ab3-439e-83d7-d584f8af8f16",
      scryfall_uri:
        "https://scryfall.com/card/chk/94/swirl-the-mists?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/e/2ea50e09-4ab3-439e-83d7-d584f8af8f16.jpg?1562758889",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/e/2ea50e09-4ab3-439e-83d7-d584f8af8f16.jpg?1562758889",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/e/2ea50e09-4ab3-439e-83d7-d584f8af8f16.jpg?1562758889",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/2/e/2ea50e09-4ab3-439e-83d7-d584f8af8f16.png?1562758889",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/e/2ea50e09-4ab3-439e-83d7-d584f8af8f16.jpg?1562758889",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/e/2ea50e09-4ab3-439e-83d7-d584f8af8f16.jpg?1562758889"
      },
      mana_cost: "{2}{U}{U}",
      cmc: 4,
      type_line: "Enchantment",
      oracle_text:
        "As Swirl the Mists enters the battlefield, choose a color word.\nAll instances of color words in the text of spells and permanents are changed to the chosen color word.",
      colors: ["U"],
      color_identity: ["U"],
      rulings_uri:
        "https://api.scryfall.com/cards/2ea50e09-4ab3-439e-83d7-d584f8af8f16/rulings",
      artist: "Arnie Swekel",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=80276"
      }
    },
    {
      object: "card",
      id: "2c6606d1-619f-4cc9-8d5b-771c4b4d9615",
      oracle_id: "d901e17f-a5f4-49d9-8a6d-ab771949af24",
      multiverse_ids: [397553],
      name: "Dream Halls",
      uri:
        "https://api.scryfall.com/cards/2c6606d1-619f-4cc9-8d5b-771c4b4d9615",
      scryfall_uri:
        "https://scryfall.com/card/tpr/46/dream-halls?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/c/2c6606d1-619f-4cc9-8d5b-771c4b4d9615.jpg?1562428864",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/c/2c6606d1-619f-4cc9-8d5b-771c4b4d9615.jpg?1562428864",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/c/2c6606d1-619f-4cc9-8d5b-771c4b4d9615.jpg?1562428864",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/2/c/2c6606d1-619f-4cc9-8d5b-771c4b4d9615.png?1562428864",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/c/2c6606d1-619f-4cc9-8d5b-771c4b4d9615.jpg?1562428864",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/c/2c6606d1-619f-4cc9-8d5b-771c4b4d9615.jpg?1562428864"
      },
      mana_cost: "{3}{U}{U}",
      cmc: 5,
      type_line: "Enchantment",
      oracle_text:
        "Rather than pay the mana cost for a spell, its controller may discard a card that shares a color with that spell.",
      colors: ["U"],
      color_identity: ["U"],
      rulings_uri:
        "https://api.scryfall.com/cards/2c6606d1-619f-4cc9-8d5b-771c4b4d9615/rulings",
      artist: "Matthew D. Wilson",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=397553"
      }
    },
    {
      object: "card",
      id: "ab01d871-ba50-400a-95e7-09af9e34405f",
      oracle_id: "6835bf6d-7197-481b-ac26-276ce363b4ad",
      multiverse_ids: [227287],
      name: "Rooftop Storm",
      uri:
        "https://api.scryfall.com/cards/ab01d871-ba50-400a-95e7-09af9e34405f",
      scryfall_uri:
        "https://scryfall.com/card/isd/71/rooftop-storm?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/b/ab01d871-ba50-400a-95e7-09af9e34405f.jpg?1562835323",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/b/ab01d871-ba50-400a-95e7-09af9e34405f.jpg?1562835323",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/b/ab01d871-ba50-400a-95e7-09af9e34405f.jpg?1562835323",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/a/b/ab01d871-ba50-400a-95e7-09af9e34405f.png?1562835323",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/b/ab01d871-ba50-400a-95e7-09af9e34405f.jpg?1562835323",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/b/ab01d871-ba50-400a-95e7-09af9e34405f.jpg?1562835323"
      },
      mana_cost: "{5}{U}",
      cmc: 6,
      type_line: "Enchantment",
      oracle_text:
        "You may pay {0} rather than pay the mana cost for Zombie creature spells you cast.",
      colors: ["U"],
      color_identity: ["U"],
      rulings_uri:
        "https://api.scryfall.com/cards/ab01d871-ba50-400a-95e7-09af9e34405f/rulings",
      artist: "John Stanko",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=227287"
      }
    },
    {
      object: "card",
      id: "2721724d-92ae-4c0c-88dd-628888c468bf",
      oracle_id: "d0d7250b-70d2-43f9-ae15-837227061ccb",
      multiverse_ids: [509580],
      name: "Life and Limb",
      uri:
        "https://api.scryfall.com/cards/2721724d-92ae-4c0c-88dd-628888c468bf",
      scryfall_uri:
        "https://scryfall.com/card/tsr/215/life-and-limb?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/7/2721724d-92ae-4c0c-88dd-628888c468bf.jpg?1619398301",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/7/2721724d-92ae-4c0c-88dd-628888c468bf.jpg?1619398301",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/7/2721724d-92ae-4c0c-88dd-628888c468bf.jpg?1619398301",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/2/7/2721724d-92ae-4c0c-88dd-628888c468bf.png?1619398301",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/7/2721724d-92ae-4c0c-88dd-628888c468bf.jpg?1619398301",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/7/2721724d-92ae-4c0c-88dd-628888c468bf.jpg?1619398301"
      },
      mana_cost: "{3}{G}",
      cmc: 4,
      type_line: "Enchantment",
      oracle_text:
        "All Forests and all Saprolings are 1/1 green Saproling creatures and Forest lands in addition to their other types. (They're affected by summoning sickness.)",
      colors: ["G"],
      color_identity: ["G"],
      rulings_uri:
        "https://api.scryfall.com/cards/2721724d-92ae-4c0c-88dd-628888c468bf/rulings",
      artist: "Jim Nelson",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=509580"
      }
    },
    {
      object: "card",
      id: "2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5",
      oracle_id: "9cf44db4-627a-4197-9588-6da72e41f03d",
      multiverse_ids: [438],
      name: "Camouflage",
      uri:
        "https://api.scryfall.com/cards/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5",
      scryfall_uri:
        "https://scryfall.com/card/leb/188/camouflage?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/f/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5.jpg?1559591858",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/f/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5.jpg?1559591858",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/f/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5.jpg?1559591858",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/2/f/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5.png?1559591858",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/f/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5.jpg?1559591858",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/f/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5.jpg?1559591858"
      },
      mana_cost: "{G}",
      cmc: 1,
      type_line: "Instant",
      oracle_text:
        "Cast this spell only during your declare attackers step.\nThis turn, instead of declaring blockers, each defending player chooses any number of creatures they control and divides them into a number of piles equal to the number of attacking creatures for whom that player is the defending player. Creatures those players control that can block additional creatures may likewise be put into additional piles. Assign each pile to a different one of those attacking creatures at random. Each creature in a pile that can block the creature that pile is assigned to does so. (Piles can be empty.)",
      colors: ["G"],
      color_identity: ["G"],
      rulings_uri:
        "https://api.scryfall.com/cards/2f55ff95-32a3-43ba-82e5-a5a3bc2cc9e5/rulings",
      artist: "Jesper Myrfors",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=438"
      }
    },
    {
      object: "card",
      id: "ea993e57-b72f-48f8-9132-0693f2e78ce4",
      oracle_id: "6fef4204-8fa8-4225-96c7-2394ed3a9ed5",
      multiverse_ids: [9756],
      name: "Ricochet",
      uri:
        "https://api.scryfall.com/cards/ea993e57-b72f-48f8-9132-0693f2e78ce4",
      scryfall_uri: "https://scryfall.com/card/ugl/50/ricochet?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/e/a/ea993e57-b72f-48f8-9132-0693f2e78ce4.jpg?1562799184",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/a/ea993e57-b72f-48f8-9132-0693f2e78ce4.jpg?1562799184",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/e/a/ea993e57-b72f-48f8-9132-0693f2e78ce4.jpg?1562799184",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/e/a/ea993e57-b72f-48f8-9132-0693f2e78ce4.png?1562799184",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/a/ea993e57-b72f-48f8-9132-0693f2e78ce4.jpg?1562799184",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/a/ea993e57-b72f-48f8-9132-0693f2e78ce4.jpg?1562799184"
      },
      mana_cost: "{R}",
      cmc: 1,
      type_line: "Enchantment",
      oracle_text:
        "Whenever a player casts a spell that targets a single player, each player rolls a six-sided die. Change the target of that spell to the player with the lowest result. Reroll to break ties, if necessary.",
      colors: ["R"],
      color_identity: ["R"],
      rulings_uri:
        "https://api.scryfall.com/cards/ea993e57-b72f-48f8-9132-0693f2e78ce4/rulings",
      artist: "David A. Cherry",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=9756"
      }
    },
    {
      object: "card",
      id: "55ad6a45-a840-45ba-89ad-066e20e983f3",
      oracle_id: "ed7bdb3e-5c51-4547-9266-76a791e0b2b0",
      multiverse_ids: [397614],
      name: "Humility",
      uri:
        "https://api.scryfall.com/cards/55ad6a45-a840-45ba-89ad-066e20e983f3",
      scryfall_uri: "https://scryfall.com/card/tpr/16/humility?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/5/55ad6a45-a840-45ba-89ad-066e20e983f3.jpg?1562429370",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/5/55ad6a45-a840-45ba-89ad-066e20e983f3.jpg?1562429370",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/55ad6a45-a840-45ba-89ad-066e20e983f3.jpg?1562429370",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/5/5/55ad6a45-a840-45ba-89ad-066e20e983f3.png?1562429370",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/5/55ad6a45-a840-45ba-89ad-066e20e983f3.jpg?1562429370",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/5/55ad6a45-a840-45ba-89ad-066e20e983f3.jpg?1562429370"
      },
      mana_cost: "{2}{W}{W}",
      cmc: 4,
      type_line: "Enchantment",
      oracle_text:
        "All creatures lose all abilities and have base power and toughness 1/1.",
      colors: ["W"],
      color_identity: ["W"],
      rulings_uri:
        "https://api.scryfall.com/cards/55ad6a45-a840-45ba-89ad-066e20e983f3/rulings",
      artist: "Phil Foglio",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=397614"
      }
    },
    {
      object: "card",
      id: "bd41cb92-578b-4fc8-b1e6-56604088fcd5",
      oracle_id: "ed01d5d7-8f34-47b3-9ca8-d82c242d38b4",
      multiverse_ids: [3435],
      name: "Chaosphere",
      uri:
        "https://api.scryfall.com/cards/bd41cb92-578b-4fc8-b1e6-56604088fcd5",
      scryfall_uri:
        "https://scryfall.com/card/mir/164/chaosphere?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/d/bd41cb92-578b-4fc8-b1e6-56604088fcd5.jpg?1562721439",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/d/bd41cb92-578b-4fc8-b1e6-56604088fcd5.jpg?1562721439",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/d/bd41cb92-578b-4fc8-b1e6-56604088fcd5.jpg?1562721439",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/b/d/bd41cb92-578b-4fc8-b1e6-56604088fcd5.png?1562721439",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/d/bd41cb92-578b-4fc8-b1e6-56604088fcd5.jpg?1562721439",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/d/bd41cb92-578b-4fc8-b1e6-56604088fcd5.jpg?1562721439"
      },
      mana_cost: "{2}{R}",
      cmc: 3,
      type_line: "World Enchantment",
      oracle_text:
        "Creatures with flying can block only creatures with flying.\nCreatures without flying have reach. (They can block creatures with flying.)",
      colors: ["R"],
      color_identity: ["R"],
      rulings_uri:
        "https://api.scryfall.com/cards/bd41cb92-578b-4fc8-b1e6-56604088fcd5/rulings",
      artist: "Steve Luke",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=3435"
      }
    },
    {
      object: "card",
      id: "5480d92e-5c03-49b8-8bdd-fbcce80de998",
      oracle_id: "d22ff377-d282-4a28-9dce-96f25913dc96",
      multiverse_ids: [530488],
      name: "Grazilaxx, Illithid Scholar",
      uri:
        "https://api.scryfall.com/cards/5480d92e-5c03-49b8-8bdd-fbcce80de998",
      scryfall_uri:
        "https://scryfall.com/card/afr/367/grazilaxx-illithid-scholar?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/4/5480d92e-5c03-49b8-8bdd-fbcce80de998.jpg?1625105070",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/4/5480d92e-5c03-49b8-8bdd-fbcce80de998.jpg?1625105070",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/4/5480d92e-5c03-49b8-8bdd-fbcce80de998.jpg?1625105070",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/5/4/5480d92e-5c03-49b8-8bdd-fbcce80de998.png?1625105070",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/4/5480d92e-5c03-49b8-8bdd-fbcce80de998.jpg?1625105070",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/4/5480d92e-5c03-49b8-8bdd-fbcce80de998.jpg?1625105070"
      },
      mana_cost: "{1}{U}{U}",
      cmc: 3,
      type_line: "Legendary Creature — Horror",
      oracle_text:
        "Whenever a creature you control becomes blocked, you may return it to its owner's hand.\nWhenever one or more creatures you control deal combat damage to a player, draw a card.",
      colors: ["U"],
      color_identity: ["U"],
      rulings_uri:
        "https://api.scryfall.com/cards/5480d92e-5c03-49b8-8bdd-fbcce80de998/rulings",
      artist: "Alexander Mokhov",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=530488"
      }
    },
    {
      object: "card",
      id: "5c948872-295c-41b9-8094-db7db7578b0d",
      oracle_id: "48c1c84c-f690-42ce-9c5a-dd09b1e4197c",
      multiverse_ids: [45125],
      name: "Goblin Grappler",
      uri:
        "https://api.scryfall.com/cards/5c948872-295c-41b9-8094-db7db7578b0d",
      scryfall_uri:
        "https://scryfall.com/card/lgn/100/goblin-grappler?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/c/5c948872-295c-41b9-8094-db7db7578b0d.jpg?1562913803",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/c/5c948872-295c-41b9-8094-db7db7578b0d.jpg?1562913803",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/c/5c948872-295c-41b9-8094-db7db7578b0d.jpg?1562913803",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/5/c/5c948872-295c-41b9-8094-db7db7578b0d.png?1562913803",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/c/5c948872-295c-41b9-8094-db7db7578b0d.jpg?1562913803",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/c/5c948872-295c-41b9-8094-db7db7578b0d.jpg?1562913803"
      },
      mana_cost: "{R}",
      cmc: 1,
      type_line: "Creature — Goblin",
      oracle_text:
        "Provoke (Whenever this creature attacks, you may have target creature defending player controls untap and block it if able.)",
      colors: ["R"],
      color_identity: ["R"],
      rulings_uri:
        "https://api.scryfall.com/cards/5c948872-295c-41b9-8094-db7db7578b0d/rulings",
      artist: "Christopher Moeller",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=45125"
      }
    },
    {
      object: "card",
      id: "6d42fd52-34ea-4d1b-80dc-58fb0593bb5b",
      oracle_id: "97db6c39-e690-49b6-93a6-e51b8dfad10b",
      multiverse_ids: [464129],
      name: "Spore Frog",
      uri:
        "https://api.scryfall.com/cards/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b",
      scryfall_uri:
        "https://scryfall.com/card/mh1/180/spore-frog?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/6/d/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b.jpg?1562202192",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/d/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b.jpg?1562202192",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/6/d/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b.jpg?1562202192",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/6/d/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b.png?1562202192",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/d/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b.jpg?1562202192",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/d/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b.jpg?1562202192"
      },
      mana_cost: "{G}",
      cmc: 1,
      type_line: "Creature — Frog",
      oracle_text:
        "Sacrifice Spore Frog: Prevent all combat damage that would be dealt this turn.",
      colors: ["G"],
      color_identity: ["G"],
      rulings_uri:
        "https://api.scryfall.com/cards/6d42fd52-34ea-4d1b-80dc-58fb0593bb5b/rulings",
      artist: "Donato Giancola",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=464129"
      }
    },
    {
      object: "card",
      id: "aa9f4787-9b29-4f57-b105-1f9eb4bb8861",
      oracle_id: "1ef07ae5-3b04-45c8-a080-852b84da4fef",
      multiverse_ids: [19677],
      name: "Shoving Match",
      uri:
        "https://api.scryfall.com/cards/aa9f4787-9b29-4f57-b105-1f9eb4bb8861",
      scryfall_uri:
        "https://scryfall.com/card/mmq/103/shoving-match?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/a/aa9f4787-9b29-4f57-b105-1f9eb4bb8861.jpg?1562382533",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/a/aa9f4787-9b29-4f57-b105-1f9eb4bb8861.jpg?1562382533",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/a/aa9f4787-9b29-4f57-b105-1f9eb4bb8861.jpg?1562382533",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/a/a/aa9f4787-9b29-4f57-b105-1f9eb4bb8861.png?1562382533",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/a/aa9f4787-9b29-4f57-b105-1f9eb4bb8861.jpg?1562382533",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/a/aa9f4787-9b29-4f57-b105-1f9eb4bb8861.jpg?1562382533"
      },
      mana_cost: "{2}{U}",
      cmc: 3,
      type_line: "Instant",
      oracle_text:
        'Until end of turn, all creatures gain "{T}: Tap target creature."',
      colors: ["U"],
      color_identity: ["U"],
      rulings_uri:
        "https://api.scryfall.com/cards/aa9f4787-9b29-4f57-b105-1f9eb4bb8861/rulings",
      artist: "Dave Dorman",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=19677"
      }
    },
    {
      object: "card",
      id: "5edddcbb-0e01-4473-b7a8-1e59cf7ee506",
      oracle_id: "fb5ec55d-4a35-432a-be6e-c295f1b2e603",
      multiverse_ids: [202412],
      name: "Naked Singularity",
      uri:
        "https://api.scryfall.com/cards/5edddcbb-0e01-4473-b7a8-1e59cf7ee506",
      scryfall_uri:
        "https://scryfall.com/card/me4/216/naked-singularity?utm_source=api",
      layout: "normal",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/e/5edddcbb-0e01-4473-b7a8-1e59cf7ee506.jpg?1562917327",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/e/5edddcbb-0e01-4473-b7a8-1e59cf7ee506.jpg?1562917327",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/e/5edddcbb-0e01-4473-b7a8-1e59cf7ee506.jpg?1562917327",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/5/e/5edddcbb-0e01-4473-b7a8-1e59cf7ee506.png?1562917327",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/e/5edddcbb-0e01-4473-b7a8-1e59cf7ee506.jpg?1562917327",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/e/5edddcbb-0e01-4473-b7a8-1e59cf7ee506.jpg?1562917327"
      },
      mana_cost: "{5}",
      cmc: 5,
      type_line: "Artifact",
      oracle_text:
        "Cumulative upkeep {3} (At the beginning of your upkeep, put an age counter on this permanent, then sacrifice it unless you pay its upkeep cost for each age counter on it.)\nIf tapped for mana, Plains produce {R}, Islands produce {G}, Swamps produce {W}, Mountains produce {U}, and Forests produce {B} instead of any other type.",
      colors: [],
      color_identity: ["B", "G", "R", "U", "W"],
      rulings_uri:
        "https://api.scryfall.com/cards/5edddcbb-0e01-4473-b7a8-1e59cf7ee506/rulings",
      artist: "Mark Tedin",
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=202412"
      }
    }
  ]
];

export const NORMAL_PLANES = BASE_PLANES.map(card =>
  addAdditionalProperties(filterAPI(card))
);

export const PLANES = [...CUSTOM_PLANES, ...NORMAL_PLANES];
