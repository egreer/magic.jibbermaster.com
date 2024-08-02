import isEmpty from "lodash/isEmpty";
import { createMarkup } from "./createMarkup";

export const ABILITIY_STACKS_PROP = { name: "ability-stacks" };
export const CHAOS_TRIGGER_PROP = { name: "chaos-trigger" };
export const PHENOMENON_PROP = { name: "phenomenon" };
export const CHAOSOMENON_PROP = { name: "chaosomenon" };
export const counterProp = (type) => {
  return { name: "counter", type };
};
export const errataProp = (text) => {
  return { name: "errata", text };
};
export const tokenProp = (count) => {
  return { name: "token", count };
};

export const urlProp = ({ url, text }) => {
  return { name: "url", url, text };
};

export const chaosXProp = (text) => {
  return { name: "chaos_x", text };
};

export const CHAOS_ONCE_PROP = chaosXProp("Once");
export const CHAOS_MAX_PROP = chaosXProp("Max");
export const CHAOS_EACH_OP_PROP = chaosXProp("Each Opponent");
export const CHAOS_PLAYER_CHOICE_PROP = chaosXProp("Player's Choice");
export const COIN_PROP = { name: "coin-flip" };

export const randomTokenProp = ({ type, action, ...props }) => {
  return {
    name: "random-token",
    text: `${action} ${type}`,
    type,
    action,
    ...props,
  };
};

export const randomChoiceProp = ({ choices = [], count = 1, ...props }) => {
  return {
    name: "random-choices",
    choices,
    count,
    ...props,
  };
};

const randomColorProp = ({ ...props }) =>
  randomChoiceProp({
    choices: ["white", "blue", "black", "red", "green"],
    ...props,
  });

const HIKE_RANDOM_COLOR_PROP = randomColorProp({ hikeOnly: true });

export const ATTRACTION_PROP = randomTokenProp({
  action: `"Open"`,
  type: "Attraction",
  symbol: "ss ss-unf ss-rare ss-grad ss-2x",
  url: "https://api.scryfall.com/cards/random?q=t%3Aattraction%20include%3Aextras",
});

export const ASSEMBLE_PROP = randomTokenProp({
  action: "Assemble",
  type: "Contraption",
  symbol: "ss ss-ust ss-rare ss-grad ss-2x",
  url: "https://api.scryfall.com/cards/random?q=t%3Acontraption%20include%3Aextras",
});

export const AVATAR_PROP = randomTokenProp({
  action: "Summon",
  type: "Avatar",
  symbol: "ss ss-van ss-mythic ss-grad ss-2x",
  url: "https://api.scryfall.com/cards/random?q=t%3Avanguard%20include%3Aextras",
});

export const X_CARD_PROP = randomTokenProp({
  action: "Copy",
  type: "Card",
  symbol: "ss ss-van ss-mythic ss-grad ss-2x",
  needsInput: true,
  url: "https://api.scryfall.com/cards/random?q=include%3Aextras%20cmc%3A<<X>>",
  prompt: {
    long: "Mana value of that creature?",
  },
});

export const X_CREATURE_PROP = randomTokenProp({
  action: "Summon",
  type: "Creature",
  symbol: "ss ss-van ss-mythic ss-grad ss-2x",
  needsInput: true,
  url: "https://api.scryfall.com/cards/random?q=t%3Acreature%20include%3Aextras%20cmc%3A<<X>>",
  prompt: {
    long: "Mana Value?",
  },
});

export const X_SLIVER_PROP = randomTokenProp({
  action: "Summon",
  type: "Sliver",
  symbol: "ss ss-van ss-mythic ss-grad ss-2x",
  needsInput: true,
  url: "https://api.scryfall.com/cards/random?q=t%3Asliver%20include%3Aextras%20cmc%3A<<X>>",
  prompt: {
    long: "Mana value of the spell?",
  },
});

export const X_EQUIPMENT_PROP = randomTokenProp({
  action: "Attach",
  type: "Equipment",
  symbol: "ss ss-van ss-mythic ss-grad ss-2x",
  needsInput: true,
  url: "https://api.scryfall.com/cards/random?q=t%3Aequipment%20include%3Aextras%20cmc%3C<<X>>",
  prompt: {
    long: "Mana value of that creature?",
  },
});

export const PLANECHASE_PROPERTIES = {
  // Planechase
  "Aplan Mortarium": [counterProp("Exposure")],
  Aretopolis: [counterProp("Scroll")],
  "Chaotic Aether": [{ name: "all-chaos" }],
  "Fixed Point in Time": [{ name: "ongoing" }], //TODO: Future - Planar Die - Planeswalk Symbol Effect
  "Interplanar Tunnel": [{ name: "top-5" }],
  "Kerblam! Warehouse": [COIN_PROP],
  "Kilnspire District": [counterProp("Charge")],
  "Mirrored Depths": [COIN_PROP],
  "Mount Keralia": [counterProp("Pressure")],
  "Naar Isle": [counterProp("Flame")],
  "Norn's Seedcore": [
    CHAOS_TRIGGER_PROP,
    { name: "multiple-planes", initial: 0, revealNumber: 1 },
  ],
  Pompeii: [counterProp("Eruption")], //TODO: Future - Planar Die - Blank Side Effect
  "Pools of Becoming": [CHAOS_TRIGGER_PROP, { name: "multi-chaos", number: 3 }],
  "Spatial Merging": [{ name: "multiple-planes", initial: 2, revealNumber: 0 }],
  "Stairs to Infinity": [CHAOS_TRIGGER_PROP, { name: "scry-1" }],
  "The Fertile Lands of Saulvinia": [
    CHAOS_TRIGGER_PROP,
    { name: "multi-chaos", number: 1 },
  ],
  "Unleash the Flux": [COIN_PROP],
};

export const HIKE_PROPERTIES = {
  // Hike Mode
  Agyrem: [
    HIKE_RANDOM_COLOR_PROP,
    errataProp(
      "When you planeswalk to or at the beginning of your upkeep, choose a color at random (replacing White)."
    ),
  ],
  "Earl of Squirrel": [
    errataProp(
      "All creature tokens are Squirrels in addition to their other types.\n All Squirrels get +1/+1\n All nontoken creatures gain Squirrellink (Whenever they deal damage, create that many 1/1 green Squirrel tokens)"
    ),
  ],
  Pramikon: [
    errataProp(
      "When you planeswalk to Pramikon, choose a SYB pattern at random based on the numbers in play. For as long as you remain on Pramikon, players can only attack in the screwing direction.\nWhen a player loses, reselect a screwing pattern with the remaining number of players."
    ),
  ],
  "Problematic Volcano": [
    errataProp(
      "When you planeswalk to Problematic Volcano or at the beginning of your upkeep, deal 4 damage to any target chosen at random.\n Then if you planeswalked to Problematic Volcano, starting with you, each player assigns their creatures to the left or right of the volcano.\nCreatures enter the battlefield to the left or right of the volcano.\nCreatures can't block creatures on the other side of the volcano."
    ),
  ],
  "Omen Machine": [
    errataProp(
      "Players can't draw cards.\nWhen you planeswalk to Omen machine and at the beginning of your upkeep, exile the top card of your library. If it's a land, put it onto the battlefield. Otherwise, cast it without paying its mana cost if able"
    ),
  ],
  Timesifter: [
    errataProp(
      "When you planeswalk to Timesifter and at the beginning of each upkeep, each player exiles the top card of their library. The player who exiled the card with the highest mana value takes an extra turn after this one. If two or more players' cards are tied for highest, the tied players repeat this process until the tie is broken."
    ),
  ],
  "Teferi's Puzzle Box": [
    errataProp(
      "When you planeswalk to Teferi's Puzzle Box and at the beginning of your draw step, put the cards from your hand onto the bottom of your library, then draw that many cards."
    ),
  ],
  "Goblin Grappler": [
    errataProp("All creatures gain Provoke"),
    urlProp({
      text: "GET OVER HERE",
      url: "https://www.youtube.com/watch?v=3C3poU_0sK4",
    }),
  ],
  "Swirl the Mists": [
    HIKE_RANDOM_COLOR_PROP,
    errataProp(
      "When you planeswalk to Swirl the Mists, choose a color word and a basic land type at random.  All instances of color words in the text of spells and permanents are changed to the chosen color word. All instances of basic land types are replaced with the chosen basic land type"
    ),
  ],
  "Teferi's Realm": [
    errataProp(
      "When you planeswalk to Teferi's Realm and at the beginning of your upkeep, choose artifact, creature, land, or non-Aura enchantment. All nontoken permanents of that type phase out."
    ),
  ],
  "The Countdown Is at One": [PHENOMENON_PROP],
  "Enter the Dungeon": [PHENOMENON_PROP],
  Necropotence: [
    errataProp(
      "Players skip their draw step.\n Whenever a player discards a card, exile that card from their graveyard.\n All players have: 'Pay 1 life to exile the top card of your library face down, and then put it into your hand at the beginning of your next end step."
    ),
  ],
  "Psychic Vortex": [
    errataProp(
      "When you planeswalk to or at the beginning of your upkeep, put a fun counter on Psychic Vortex, then draw a card for each fun counter on it. At the beginning of your end step, discard your hand and sacrifice a land."
    ),
    counterProp("Fun"),
  ],
  "Mirror March": [errataProp("All Players")],
  "Wild Evocation": [
    errataProp(
      "When you planeswalk to Wild Evocation and at the beginning of your upkeep, reveal a card at random from your hand. If it's a land, put it onto the battlefield. Otherwise, cast it without paying its mana cost if able"
    ),
  ],
  Fatespinner: [
    errataProp(
      "At the beginning of each player's upkeep, they choose draw step, main phase, or combat phase. The player skips each instance of the chosen step or phase this turn."
    ),
  ],
  "Forced Fruition": [
    errataProp("Whenever a player casts a spell, they draw 7 cards."),
  ],
  "Frankie Peanuts": [
    errataProp(
      "When you planeswalk to Frankie Peanuts and at the beginning of your upkeep, ask target opponent a yes or no question. That player must answer truthfully and abide by their answer for as long as you remain on Frankie Peanuts"
    ),
  ],
  "Maelstrom Nexus": [
    errataProp(
      "Whenever a player casts a spell from their hand, it gains cascade."
    ),
  ],
  "Tombstone Stairwell": [
    errataProp(
      "When you planeswalk to Tombstone Stairwell and at the beginning of each upkeep, each player creates a 2/2 black Zombie creature token with haste named Tombspawn for each creature card in their graveyard.\nAt the beginning of each end step or if you planeswalk away from Tombstone Stairwell, destroy all tokens created with Tombstone Stairwell. They can't be regenerated."
    ),
  ],
  "Seek Bolas's Counsel": [
    errataProp(
      "When you planeswalk to or at the beginning of your upkeep, Seek Bola's Counsel choosing a mode at random."
    ),
  ],
  "Thousand-Year Storm": [
    errataProp(
      "Whenever any player casts an instant or sorcery spell, they copy it for each instant or sorcery spell cast before it this turn."
    ),
  ],
  "Free-for-All": [
    errataProp(
      "When you planeswalk to Free-For-All, exile all creatures AND PLANESWALKERS face down. The active player chooses one card at random from what they exiled and puts it into play.\nAt the beginning of each player's upkeep, that player chooses a card exiled with Free-for-All at random and puts it onto the battlefield.\nWhen you planeswalk away from Free-For-All, put all cards exiled with it into their owners' graveyards."
    ),
  ],
  "Chaos Moon": [
    HIKE_RANDOM_COLOR_PROP,
    errataProp(
      "When you planeswalk to Chaos Moon and at the beginning of each upkeep, select a color at random then count the number of permanents in play. If the number is odd, all creatures of the chosen color get +1/+1 and whenever a permanent is tapped for mana of the chosen color add one additional mana of that type. If even, creatures of the chosen color get -1/-1 and whenever a permanent is tapped for mana of the chosen color, add {C}"
    ),
  ],
  "Conjured Currency": [
    errataProp(
      "When you planeswalker to and at the beginning of your upkeep, exchange control of a permanent you own and control and target permanent you neither own nor control."
    ),
  ],
  "Rooftop Storm": [
    errataProp(
      "When you planeswalk to Rooftop Storm and at the beginning of each upkeep, choose a creature type. Creature spells you cast of the chosen type cost 0 until end of turn."
    ),
  ],
  "Warp World": [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  "Thieves' Auction": [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  Scrambleverse: [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  "Wrath of God": [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  "Wheel of Fortune": [CHAOS_PLAYER_CHOICE_PROP],
  Gamble: [CHAOS_PLAYER_CHOICE_PROP],
  "Last One Standing": [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  "Raving Dead": [CHAOS_MAX_PROP],
  "Crack the Earth": [CHAOS_MAX_PROP],
  "Whims of the Fates": [CHAOS_ONCE_PROP],
  "Life and Limb": [
    errataProp(
      "Plains - Citizen\n Island - Camarid\n Swamp - Minion\n Mountain - Dwarf\n Forest - Squirrel"
    ),
  ],
  Boompile: [
    errataProp(
      "Flip a coin. If you win the flip, destroy all nonland permanents then Chaos Hike away."
    ),
    CHAOSOMENON_PROP,
    CHAOS_ONCE_PROP,
  ],
  "Tyrant of Discord": [
    errataProp(
      "Target opponent chooses a permanent they control at random and sacrifices it. If a nonland permanent is sacrificed this way, repeat this process."
    ),
    CHAOS_PLAYER_CHOICE_PROP,
  ],
  "Marchesa, the Black Rose": [
    errataProp(
      "All Creatures Gain Dethrone\n Whenever a creature with a +1/+1 counter on it dies return that card to the battlefield under its owner's control at the beginning of the next end step."
    ),
  ],
  "Fiery Gambit": [CHAOS_ONCE_PROP],
  "Game of Chaos": [CHAOS_EACH_OP_PROP],
  "Mana Clash": [CHAOS_EACH_OP_PROP],
  "Puppet's Verdict": [CHAOS_ONCE_PROP],
  "Order of Succession": [CHAOS_MAX_PROP],
  "Rakdos, the Showstopper": [
    errataProp(
      "Flip a coin for each creature that isn't a Demon, Devil, or Imp. Destroy each creature whose coin comes up tails."
    ),
    CHAOSOMENON_PROP,
    CHAOS_ONCE_PROP,
  ],
  Mirrorweave: [
    errataProp(
      "Each other creature permanently becomes a copy of target nonlegendary creature."
    ),
    CHAOS_ONCE_PROP,
  ],
  "Dimensional Breach": [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  "Perplexing Chimera": [tokenProp(1), CHAOS_MAX_PROP],
  "Aeon Engine": [errataProp("Reverse the game's turn order"), CHAOS_ONCE_PROP],
  "Sphinx Ambassador": [
    errataProp(
      "Choose an opponent.  Search that player's library for a card, then that player chooses a card name. If you searched for a creature card that doesn't have that name, you may put it onto the battlefield under your control. Then that player shuffles."
    ),
    CHAOS_PLAYER_CHOICE_PROP,
  ],
  "Aminatou, the Fateshifter": [
    errataProp(
      "Choose left or right at random. Each player gains control of all non-land permanents controlled by the next player in the chosen direction."
    ),
    CHAOS_MAX_PROP,
  ],
  "Choice of Damnations": [CHAOS_EACH_OP_PROP],
  "Nascent Metamorph": [tokenProp(1), CHAOS_MAX_PROP],
  "Pain's Reward": [CHAOS_ONCE_PROP],
  Amplifire: [tokenProp(1), CHAOS_MAX_PROP],
  "Akroan Horse": [tokenProp(1), CHAOS_MAX_PROP],
  "Walking Archive": [tokenProp(1), CHAOS_MAX_PROP],
  "Vulshok Sorcerer": [
    tokenProp(3),
    CHAOS_MAX_PROP,
    errataProp("Each Player Creates 3 Vulshok Sorcerer Tokens"),
  ],
  "Serrated Arrows": [tokenProp(1), CHAOS_MAX_PROP],
  "Interplanar Brushwagg": [tokenProp(1), CHAOS_MAX_PROP],
  "Illicit Auction": [CHAOS_MAX_PROP],
  "Oddly Uneven": [
    errataProp(
      "Flip a coin. If heads, destroy each creature with an odd number of words in its name. If tails, Destroy each creature with an even number of words in its name"
    ),
    CHAOS_ONCE_PROP,
  ],
  Gerrymandering: [CHAOS_PLAYER_CHOICE_PROP],
  "Naughty // Nice": [errataProp("Both sides and same player"), CHAOS_MAX_PROP],
  "Norin the Wary": [errataProp("Conjure a Norin the Wary"), CHAOS_MAX_PROP],
  "Wrath of Sod": [CHAOSOMENON_PROP, CHAOS_ONCE_PROP],
  "Haphazard Bombardment": [
    errataProp("When you roll chaos, destroy a permanent at random"),
    CHAOS_MAX_PROP,
  ],
  "Evil Presents": [
    errataProp(
      "Put a creature card from your hand into play under target opponent’s control. That creature is goaded"
    ),
    CHAOS_PLAYER_CHOICE_PROP,
  ],
  "Gifts Given": [CHAOS_EACH_OP_PROP],
  "Season's Beatings": [CHAOS_EACH_OP_PROP],
  "Present Arms": [CHAOS_ONCE_PROP],
  "Stuffy Doll": [tokenProp(1), CHAOS_MAX_PROP],
  "Tempting Wurm": [tokenProp(1), CHAOS_MAX_PROP],
  Phytohydra: [tokenProp(1), CHAOS_MAX_PROP],
  "Nyx-Fleece Ram": [tokenProp(1), CHAOS_MAX_PROP],
  Boomstacker: [tokenProp(1), CHAOS_MAX_PROP],
  "Goldenglow Moth": [tokenProp(1), CHAOS_MAX_PROP],
  "Karplusan Minotaur": [tokenProp(1), CHAOS_MAX_PROP],
  "Goblin Festival": [tokenProp(1), CHAOS_MAX_PROP],
  "Goblin Traprunner": [tokenProp(1), CHAOS_MAX_PROP],
  "Stitch in Time": [CHAOS_MAX_PROP, CHAOS_MAX_PROP],
  "You Meet in a Tavern": [CHAOS_PLAYER_CHOICE_PROP],
  "Tavern Swindler": [tokenProp(1)],
  "Mass Mutiny": [CHAOS_PLAYER_CHOICE_PROP],
  Chatterstorm: [CHAOS_MAX_PROP],
  Revitalize: [CHAOS_PLAYER_CHOICE_PROP],
  "Through the Breach": [CHAOS_PLAYER_CHOICE_PROP],
  "Urza, Academy Headmaster": [
    tokenProp(1),
    urlProp({
      url: "https://magic.wizards.com/en/products/unstable/askurza",
      text: "Ask Urza",
    }),
    CHAOS_ONCE_PROP,
  ],
  "Black Lotus": [CHAOS_ONCE_PROP],
  "Zada's Commando": [tokenProp(2), CHAOS_MAX_PROP],
  "Ondu War Cleric": [tokenProp(2), CHAOS_MAX_PROP],
  "Lord of the Pit": [tokenProp(1), CHAOS_ONCE_PROP],
  "Door to Nothingness": [tokenProp(1), CHAOS_MAX_PROP],
  "Relic Robber": [tokenProp(1), CHAOS_MAX_PROP],
  "Poisonbelly Ogre": [tokenProp(1), CHAOS_MAX_PROP],
  "Aetherflux Reservoir": [tokenProp(1), CHAOS_ONCE_PROP],
  "Happily Ever After": [tokenProp(1), CHAOS_ONCE_PROP],
  "Knight of the Holy Nimbus": [tokenProp(1), CHAOS_MAX_PROP],
  "Beacon of Unrest": [
    errataProp(
      "Choose a creature or artifact card in a graveyard at random.  Return that card to the battlefield under your control"
    ),
    CHAOS_PLAYER_CHOICE_PROP,
  ],
  "Adventurous Impulse": [CHAOS_PLAYER_CHOICE_PROP],
  "Commune with Dinosaurs": [CHAOS_PLAYER_CHOICE_PROP],
  "Time Spiral": [CHAOS_ONCE_PROP],
  "Profane Transfusion": [CHAOS_ONCE_PROP],
  "Cruel Entertainment": [CHAOS_ONCE_PROP],
  "Escape to the Wilds": [CHAOS_ONCE_PROP],
  "Dubious Challenge": [
    CHAOS_ONCE_PROP,
    errataProp(
      "When you roll chaos, reveal the top 10 cards of your library.  An opponent may put a creature card from among them onto the battlefield under their control. Put all other creature cards onto the battlefield under your control."
    ),
  ],
  Triskaidekaphobia: [
    CHAOS_ONCE_PROP,
    errataProp("Any Player at Exactly 13 life loses the game."),
  ],
  "Allure of the Unknown": [CHAOS_ONCE_PROP],
  "Chaos Warp": [CHAOS_MAX_PROP, errataProp("Chose Target at random")],
  "Mogg Infestation": [
    errataProp(
      "Whenever you roll chaos, choose a player at random. Destroy each creature that player controls, then that player creates two 1/1 red goblin creatures tokens for each creature destroyed this way"
    ),
    CHAOS_MAX_PROP,
  ],
  Sharktocrab: [
    CHAOS_MAX_PROP,
    tokenProp(1),
    errataProp("Create a Sharktocrab token, then put a +1/+1 counter on it."),
  ],
  "Spore Frog": [
    tokenProp(1),
    errataProp("{ability-landfall} Landfall - Create a Spore Frog token."),
  ],
};

export const VANGUARD_PROPERTIES = {
  "Akroma, Angel of Wrath Avatar": [
    // Whenever a creature enters the battlefield under your control, it gains two abilities chosen at random from flying, first strike, trample, haste, protection from black, protection from red, and vigilance.
    randomChoiceProp({
      choices: [
        "flying",
        "first strike",
        "trample",
        "haste",
        "protection from black",
        "protection from red",
        "vigilance",
      ],
      count: 2,
    }),
  ],
  "Flametongue Kavu Avatar": [
    // Whenever a nontoken creature enters the battlefield under your control, that creature deals  damage to target creature, where is a number chosen at random from 0 to 4.
    randomChoiceProp({
      choices: [0, 1, 2, 3, 4],
    }),
  ],
  "Master of the Wild Hunt Avatar": [
    randomChoiceProp({
      choices: [
        "2/2 Wolf",
        "2/3 Antelope - Forestwalk",
        "3/2 Cat - Shroud",
        "4/4 Rhino - Trample",
      ],
    }),
  ],

  "Necropotence Avatar": [counterProp("Death")],
  "Frenetic Efreet Avatar": [COIN_PROP],
  "Maralen of the Mornsong Avatar": [
    // At the beginning of the game, you may pay any amount of life.
    {
      name: "input",
      type: "Life",
      action: "Pay",
      prompt: {
        short: "Pay Life",
        long: "Pay any amount of Life",
      },
    },
  ],
  // Random
  "Maelstrom Archangel Avatar": [
    // At end of combat, for each creature you controlled at the time it dealt combat damage to a player this turn, copy a random card with the same mana cost as that creature. You may pay 3. If you do, choose one of those copies. If a copy of a permanent card is chosen, you may create a token that's a copy of that card. If a copy of an instant or sorcery card is chosen, you may cast the copy without paying its mana cost.
    X_CARD_PROP,
  ],
  "Momir Vig, Simic Visionary Avatar": [
    // X Discard a card: Create a token that's a copy of a creature card with mana value X chosen at random. Activate only as a sorcery and only once each turn.
    X_CREATURE_PROP,
  ],
  "Sliver Queen Avatar": [
    // Whenever you cast a non-Sliver creature spell, exile that spell. If you do, create a token that's a copy of a random non-Shapeshifter Sliver creature card with the same mana value as that spell.
    X_SLIVER_PROP,
  ],

  "Stonehewer Giant Avatar": [
    // Whenever a creature enters the battlefield under your control, create a token that's a copy of a random Equipment card with mana value less than that creature's mana value. Attach that Equipment to that creature.
    X_EQUIPMENT_PROP,
  ],
};

const ARCHENEMY_PROPERTIES = {
  "Your Inescapable Doom": [{ name: "unabandonable" }, counterProp("Doom")],
};

export const addAdditionalProperties = (card) => {
  const properties = {
    ...ARCHENEMY_PROPERTIES,
    ...HIKE_PROPERTIES,
    ...PLANECHASE_PROPERTIES,
    ...VANGUARD_PROPERTIES,
  };

  if (properties[card.name]) {
    card.customProperties = properties[card.name];
  } else if (isEmpty(card.customProperties)) {
    card.customProperties = [];
  }

  if (card.oracle_text) {
    card.oracle_html = createMarkup(card.oracle_text);
  }

  return card;
};
