import {
  CHAOSOMENON_PROP,
  errataProp,
  urlProp,
  CHAOS_ONCE_PROP,
  CHAOS_PLAYER_CHOICE_PROP,
  CHAOS_MAX_PROP,
  randomTokenProp,
  CHAOS_TRIGGER_PROP,
  ASSEMBLE_PROP,
  ATTRACTION_PROP,
} from "../../../util/additionalProps";

export const CUSTOM_CHAOS = [
  {
    name: "Hike Timeout",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player suspend all creatures with time counters equal to their mana value.",
    show_blank: true,
    customProperties: [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  },
  {
    name: "Hike Handout",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player reveals their hand and suspends all nonland cards with time counters equal to mana value, with minimum of 1.",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP],
  },
  {
    name: "Hikey Turvy",
    type_line: "Plane - Hike",
    oracle_text: "Randomly change the game mode. (Reasonable Switches only)",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP],
  },
  {
    name: "Sqwak Thy Neighbor",
    type_line: "Plane - Hike",
    oracle_text:
      "All players randomly change positions at the table. You now play the Hand, Library, Graveyard, Life Total, et all of the new position",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP],
  },
  {
    name: "Hike's Cliffside Market",
    type_line: "Plane - Hike",
    oracle_text: "Randomly redistribute life totals.",
    show_blank: true,
    customProperties: [CHAOS_ONCE_PROP],
  },
  {
    name: "The Hike Millining",
    type_line: "Plane - Hike",
    oracle_text:
      "Each player mills 10, then exiles three cards at random from their graveyard. Players may put any lands exiled this way into play, and may cast any spells exiled this way without paying their mana cost. Any player with no cards left in their library then shuffles their graveyard into their library.",
    show_blank: true,
    customProperties: [CHAOS_PLAYER_CHOICE_PROP],
  },
  {
    name: "Sproket Sproket",
    type_line: "Plane - UnHike",
    oracle_text: "Assemble a Random Contraption",
    show_blank: true,
    customProperties: [CHAOS_TRIGGER_PROP, ASSEMBLE_PROP],
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
      CHAOS_PLAYER_CHOICE_PROP,
    ],
  },
  {
    name: "Summon Goatdrazi",
    type_line: "Plane - Goatdrazi",
    oracle_text:
      "Create a tapped 0/1 White Goat with Annihilator 4, this creature doesn't untap during your untap step, and {8}: Untap all Goats you control",
    show_blank: true,
    customProperties: [CHAOS_MAX_PROP],
  },
  {
    name: "Y'All Start In a Tavern",
    type_line: "Plane - Faerûn",
    oracle_text:
      "Choose a D&D Class that you have played as a PC with at least one other player, create a token of the corresponding class.",
    show_blank: true,
    customProperties: [
      urlProp({
        url: "https://scryfall.com/search?q=t%3Aclass&unique=cards&as=grid&order=name",
        text: "Classes",
      }),
      CHAOS_ONCE_PROP,
    ],
  },
  {
    name: "Shaken, not Stirred",
    type_line: "Plane - 007",
    oracle_text:
      "Create a 3/2 colorless legendary Eldrazi token named 'Sheweena, Martini Princess of the Night'.",
    show_blank: true,
    customProperties: [CHAOS_MAX_PROP],
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
        url: "https://scryfall.com/card/znr/245/lithoform-engine",
      }),
    ],
  },
  {
    name: "MTG Borg",
    type_line: "Plane - Hike",
    oracle_text: "Each player creates a random Sliver token",
    show_blank: true,
    customProperties: [
      CHAOS_TRIGGER_PROP,
      randomTokenProp({
        text: "Create A Token",
        symbol: "ss ss-h09 ss-rare ss-grad ss-2x mx-4",
        url: "https://api.scryfall.com/cards/random?q=t%3Asliver%20t%3Acreature%20include%3Aextras",
      }),
    ],
  },
  {
    name: "Stangg and Friends",
    type_line: "Plane - Hike",
    oracle_text: "Create a random Legendary Creature token",
    show_blank: true,
    customProperties: [
      CHAOS_TRIGGER_PROP,
      randomTokenProp({
        text: "Create A Token",
        symbol: "ms ms-token ss-rare ss-grad ms-2x mx-4",
        url: "https://api.scryfall.com/cards/random?q=t%3Alegend%20t%3Acreature%20include%3Aextras",
      }),
    ],
  },
  {
    name: "Under the Hike-Top",
    type_line: "Plane - UnHikeFinity",
    oracle_text: "Open a random Attraction",
    show_blank: true,
    customProperties: [CHAOS_TRIGGER_PROP, ATTRACTION_PROP],
  },
];

// Curated and Truncated Scryfall API Results
export const BASE_CHAOS = [
  {
    name: "Warp World",
    id: "aa6e1fb5-a06b-4e10-8cc7-785e0f0b298e",
  },
  {
    name: "Thieves' Auction",
    id: "c9e8ad32-a701-4b77-bb7e-0e440e4072da",
  },
  {
    name: "Scrambleverse",
    id: "2b61fa9d-3f69-4632-be0e-09924ca88501",
  },
  {
    name: "Wrath of God",
    id: "caff117f-844b-4d11-a104-930d7f238114",
  },
  {
    name: "Wheel of Fortune",
    id: "4a7a420a-d924-422a-afd9-81a821ace048",
  },
  {
    name: "Gamble",
    id: "81e57561-17d4-48db-8e40-f41019010bc9",
  },
  {
    name: "Haphazard Bombardment",
    id: "e558a5bd-e8f9-477f-a514-1bf0708f4e9e",
  },
  {
    name: "Last One Standing",
    id: "87e2ee71-293d-452b-89a5-b15990186f5b",
  },
  {
    name: "Raving Dead",
    id: "5d24d153-a014-4524-a496-9fe1c41cbc2b",
  },
  {
    name: "Crack the Earth",
    id: "8ab16152-4617-4deb-b995-195e21f8f485",
  },
  {
    name: "Whims of the Fates",
    id: "aeb8d3fc-99e4-49dd-b1f1-bb479b361743",
  },
  {
    name: "Tyrant of Discord",
    id: "e8f7c8ea-e9c1-4d78-972c-15c4014915a0",
  },
  {
    name: "Boompile",
    id: "e27c6a13-d19f-44c5-9e68-0153a627b343",
  },
  {
    name: "Fiery Gambit",
    id: "a91376ed-5868-4887-8389-5ef5b9471786",
  },
  {
    name: "Game of Chaos",
    id: "95b44933-6b0b-426a-97d4-7a7cf6ad1d65",
  },
  {
    name: "Mana Clash",
    id: "740b85ff-61a3-4de0-a055-60daad13ac2a",
  },
  {
    name: "Puppet's Verdict",
    id: "052b743a-456d-49c3-881e-4f30c7645fa5",
  },
  {
    name: "Rakdos, the Showstopper",
    id: "4e3c30c7-c52e-41a0-b7c2-21d39c05160b",
  },
  {
    name: "Order of Succession",
    id: "11f68867-a46c-447f-9061-2bc4dbdde206",
  },
  {
    name: "Mirrorweave",
    id: "1c77925b-0944-4b2b-b389-42bf17907b34",
  },
  {
    name: "Perplexing Chimera",
    id: "f9cff40b-9cae-47d0-8df4-c287a17a33e4",
  },
  {
    name: "Sphinx Ambassador",
    id: "b0937274-d5cb-4790-8c10-804f537c5581",
  },
  {
    name: "Aminatou, the Fateshifter",
    id: "16b9f43a-9c3f-4bfa-9eb1-734189a4bb1f",
  },
  {
    name: "Choice of Damnations",
    id: "05939f15-2d95-47df-b66f-131c3e7ea95f",
  },
  {
    name: "Dimensional Breach",
    id: "f18f2832-07c5-47be-8966-b250fb997f78",
  },
  {
    name: "Aeon Engine",
    id: "ea4dfdd7-f35a-45d6-9fc7-2c096f92dd5f",
  },
  {
    name: "Nascent Metamorph",
    id: "61e7984b-8c20-4867-8045-4fb52cd6e2d4",
  },
  {
    name: "Pain's Reward",
    id: "6d16da68-85f6-4d54-9751-9cf046f5e99a",
  },
  {
    name: "Amplifire",
    id: "7a58c77f-7c15-44f4-8011-6046482a2d08",
  },
  {
    name: "Akroan Horse",
    id: "31a8954f-467d-4eb9-8a48-d25bae9529b8",
  },
  {
    name: "Walking Archive",
    id: "c390e074-bd30-4564-a39a-176af7df79f4",
  },
  {
    name: "Norin the Wary",
    id: "f61ea59a-1db0-4e6b-bcde-19787c76a49b",
  },
  {
    name: "Vulshok Sorcerer",
    id: "b7153854-c548-48de-b9e2-72b7d9397563",
  },
  {
    name: "Serrated Arrows",
    id: "a2a31bc7-cb98-4199-b0dc-3f496e9f9dca",
  },
  {
    name: "Illicit Auction",
    id: "9c3f633f-538c-4581-b3cc-9285ed6bc4fe",
  },
  {
    name: "Interplanar Brushwagg",
    id: "c0da6c46-e4f4-40bd-87d2-14154707131b",
  },
  {
    name: "Wrath of Sod",
    id: "a734f1d9-17a1-4dea-bdec-b070ababe31d",
  },
  {
    name: "Naughty // Nice",
    id: "7ed5261d-4bf1-4cb4-8ffe-a51439eb40c9",
  },
  {
    name: "Season's Beatings",
    id: "e177c12e-551a-4688-aa34-740f873dd37d",
  },
  {
    name: "Evil Presents",
    id: "af171b8b-05cd-4a05-ae0b-6e80935addab",
  },
  {
    name: "Gifts Given",
    id: "ba72c564-0ca6-4f52-b19a-175646965291",
  },
  {
    name: "Decorated Knight // Present Arms",
    id: "6cbda4a6-e01b-4df2-aee9-b6f14336b85f",
  },
  {
    name: "Oddly Uneven",
    id: "830d5f87-1c8b-414a-a91e-4805f5bdca54",
  },
  {
    name: "Gerrymandering",
    id: "aea8ab0f-6898-4312-9989-915d6357515f",
  },
  {
    name: "Stuffy Doll",
    id: "ce427213-4ce5-478e-83d8-fe80ec446a58",
  },
  {
    name: "Phytohydra",
    id: "86c336d2-cc14-4b74-a6f9-aab7a084d0de",
  },
  {
    name: "Nyx-Fleece Ram",
    id: "ad98e518-4ec9-403e-a978-217244262c8f",
  },
  {
    name: "Boomstacker",
    id: "747788b4-42ab-4e3e-bdbe-eb5040432db1",
  },
  {
    name: "Goldenglow Moth",
    id: "8d6e31cb-98c5-4145-bdef-666f3cea7eab",
  },
  {
    name: "Karplusan Minotaur",
    id: "963f45d7-ce84-47af-ae1c-727172a31f0f",
  },
  {
    name: "Adventurous Impulse",
    id: "e7b44893-e6d1-48d0-ba69-06b9569e1e38",
  },
  {
    name: "Commune with Dinosaurs",
    id: "de4b9a07-6631-477a-8c77-3b04f211439d",
  },
  {
    name: "Time Spiral",
    id: "641b21e1-9188-4bc3-96e8-cda2acbc5ed5",
  },
  {
    name: "Goblin Festival",
    id: "ac067eb8-427f-4bfa-b392-0bb41ac8370e",
  },
  {
    name: "Goblin Traprunner",
    id: "36f0fd37-eb34-418d-b136-03d816c93034",
  },
  {
    name: "Stitch in Time",
    id: "4a57766e-8966-4e14-b78f-48ecb5d889c1",
  },
  {
    name: "You Meet in a Tavern",
    id: "593aa59a-4025-4df8-9f27-188fc7712fde",
  },
  {
    name: "Tavern Swindler",
    id: "d00850e4-6be3-4246-ae45-c0e990e6d6e1",
  },
  {
    name: "Mass Mutiny",
    id: "6d18e6fb-e4ae-4ff4-9412-f16edb2e56c6",
  },
  {
    name: "Chatterstorm",
    id: "b34f0ac1-6894-4761-b62c-b85d927acf09",
  },
  {
    name: "Urza, Academy Headmaster",
    id: "e4581455-5fa1-4c96-96b3-e9e9654f5a28",
  },
  {
    name: "Zada's Commando",
    id: "f4ad826d-c7e6-4dfd-991f-15d75b87d504",
  },
  {
    name: "Ondu War Cleric",
    id: "9b255d34-04fa-4d3b-9fc1-8f980ef1f054",
  },
  {
    name: "Revitalize",
    id: "f8da7312-91e8-4f8d-84ef-6888360b3718",
  },
  {
    name: "Through the Breach",
    id: "789196df-143d-4a60-a8e4-5bdcfdfd7ba8",
  },
  {
    name: "Tempting Wurm",
    id: "857c2b6c-cfdf-4c88-a334-2937cb7db603",
  },
  {
    name: "Lord of the Pit",
    id: "56ea363c-ec09-4d79-aaf9-f8ff2e2a34c0",
  },
  {
    name: "Profane Transfusion",
    id: "c3387cfc-2dbe-409e-bfc7-b399f05a817d",
  },
  {
    name: "Beacon of Unrest",
    id: "1ee97c64-39ab-4967-a7e4-3fc5e793d534",
  },
  {
    name: "Door to Nothingness",
    id: "c30c41aa-4c83-489f-84db-d53634d43ea2",
  },
  {
    name: "Mogg Infestation",
    id: "bfeb1145-3729-481e-a314-c325ed2f2a35",
  },
  {
    name: "Chaos Warp",
    id: "6d0a3996-5a03-481b-9bda-15c6f6e5f9c4",
  },
  {
    name: "Black Lotus",
    id: "11e5a2c6-dcc4-4ad3-a4b5-b9095d77c4f8",
  },
  {
    name: "Relic Robber",
    id: "49f6a537-fa85-44ab-a853-7a32812a4b32",
  },
  {
    name: "Poisonbelly Ogre",
    id: "a168b953-eac4-472e-ac74-598febb05f83",
  },
  {
    name: "Aetherflux Reservoir",
    id: "96b6b2e1-c3e6-464c-8a13-b15deb34e862",
  },
  {
    name: "Happily Ever After",
    id: "c38c9120-ac20-4f81-b8d8-9d490cc2a913",
  },
  {
    name: "Knight of the Holy Nimbus",
    id: "d4ac76c0-54ce-41b2-9000-e21eecaf7e99",
  },
  {
    name: "Sharktocrab",
    id: "db490f74-977f-476d-b8ee-da7b0a98b4c4",
  },
  {
    name: "Cruel Entertainment",
    id: "3e304424-4a50-43bb-aee0-e9f960583aac",
  },
  {
    name: "Triskaidekaphobia",
    id: "813995f5-e49a-431d-8a3a-8ec569844e11",
  },
  {
    name: "Escape to the Wilds",
    id: "1bff641e-aad3-414f-ad5b-8d32c734efa9",
  },
  {
    name: "Dubious Challenge",
    id: "3c2f72f7-69e1-4944-98ad-66d88ee2d727",
  },
  {
    name: "Allure of the Unknown",
    id: "c543e785-2c6b-4347-a9c3-25940bbadcff",
  },
  {
    name: "Burning Inquiry",
    id: "a448bc9e-f5db-4507-ac40-7d8ee3598585",
  },
];
