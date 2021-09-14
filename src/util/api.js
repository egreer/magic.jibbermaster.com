import axios from "axios";
import moment from "moment";
import store from "store/dist/store.modern";
// TODO use expire store
export const internet = axios.create();

const PLANES_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Aplane+or+t%3Aphenomenon&unique=cards";

const SCHEMES_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Ascheme&unique=cards";

export const getAllPlanechaseCards = async () => {
  try {
    let planes = cached("planes");
    if (!planes) {
      console.log("Loading from Axios");
      let response = await internet.get(PLANES_URL);
      planes = response.data.data;
      planes = planes.map(p => addAdditionalProperties(p));
      cache("planes", planes);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded from store");
    }
    return planes;
  } catch (e) {
    console.error(e);
  }
};

export const getAllArchenemyCards = async () => {
  try {
    let schemes = cached("schemes");
    if (!schemes) {
      console.log("Loading from Axios");
      let response = await internet.get(SCHEMES_URL);
      schemes = response.data.data;
      schemes = schemes.map(p => addAdditionalProperties(p));
      cache("schemes", schemes);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded from store");
    }
    return schemes;
  } catch (e) {
    console.error(e);
  }
};

export const CHAOS_TRIGGER_PROP = { name: "chaos-trigger" };
export const PHENOMENON_PROP = { name: "phenomenon" };
export const CHAOSOMENON_PROP = { name: "chaosomenon" };
export const counterProp = type => {
  return { name: "counter", type };
};
export const errataProp = text => {
  return { name: "errata", text };
};
export const tokenProp = count => {
  return { name: "token", count };
};

export const addAdditionalProperties = card => {
  const properties = {
    Aretopolis: [counterProp("Scroll")],
    "Chaotic Aether": [{ name: "all-chaos" }],
    "Interplanar Tunnel": [{ name: "top-5" }],
    "Kilnspire District": [counterProp("Charge")],
    "Mount Keralia": [counterProp("Pressure")],
    "Naar Isle": [counterProp("Flame")],
    "Spatial Merging": [{ name: "two-planes" }],
    "Stairs to Infinity": [CHAOS_TRIGGER_PROP, { name: "scry-1" }],
    "Pools of Becoming": [CHAOS_TRIGGER_PROP, { name: "triple-chaos" }],
    // Archenemy
    "Your Inescapable Doom": [{ name: "unabandonable" }, counterProp("Doom")],
    // Hike Mode
    Agyrem: [
      errataProp(
        "When you planeswalk to or at the beginning of your upkeep, choose a color at random (replacing White)."
      )
    ],
    "Earl of Squirrel": [
      errataProp("All creatures you control have Squirrellink.")
    ],
    Pramikon: [
      errataProp(
        "When you planeswalk to Pramikon, choose a SYB pattern at random based on the numbers in play. For as long as you remain on Pramikon, players can only attack in the screwing direction.\nWhen a player loses, reselect a screwing pattern with the remaining number of players."
      )
    ],
    "Problematic Volcano": [
      errataProp(
        "When you planeswalk to Problematic Volcano or at the beginning of your upkeep, deal 4 damage to any target chosen at random.\n Then if you planeswalked to Problematic Volcano, starting with you, each player assigns their creatures to the left or right of the volcano.\nCreatures enter the battlefield to the left or right of the volcano.\nCreatures can't block creatures on the other side of the volcano."
      )
    ],
    "The Countdown Is at One": [PHENOMENON_PROP],
    "Psychic Vortex": [
      errataProp(
        "When you planeswalk to or at the beginning of your upkeep, put a fun counter on Pyschic Vortex, then draw a card for each fun counter on it. At the beginning of your end step, discard your hand and sacrifice a land."
      ),
      counterProp("Fun")
    ],
    "Mirror March": [errataProp("All Players")],
    Fatespinner: [
      errataProp(
        "At the beginning of each player's upkeep, they choose draw step, main phase, or combat phase. The player skips each instance of the chosen step or phase this turn."
      )
    ],
    "Forced Fruition": [
      errataProp("Whenever a player casts a spell, they draw 7 cards")
    ],
    "Frankie Peanuts": [
      errataProp(
        "When you planeswalk to Frankie Peanuts and at the beginning of your upkeep, ask target opponent a yes or no question. That player must answer truthfully and abide by their answer for as long as you remain on Frankie Peanuts"
      )
    ],
    "Maelstrom Nexus": [
      errataProp(
        "Whenever a player casts a spell from their hand, it gains cascade."
      )
    ],
    "Seek Bolas's Counsel": [
      errataProp(
        "When you planeswalk to or at the beginning of your upkeep, Seek Bola's Counsel choosing a mode at random."
      )
    ],
    "Thousand-Year Storm": [errataProp("All Players")],
    "Chaos Moon": [
      errataProp(
        "When you planeswalk to Chaos Moon and at the beginning of each upkeep, select a color at random then count the number of permanents in play. If the number is odd, all creatures of the chosen color get +1/+1 and whenever a permanent is tapped for mana of the chosen color add one additional mana of that type. If even, creatures of the chosen color get -1/-1 and whenever a permanent is tapped for mana of the chosen color, add {C}"
      )
    ],
    "Conjured Currency": [
      errataProp(
        "When you planeswalker to and at the beginning of your upkeep, exchange control of a permanent you own and control and target permanent you neither own nor control."
      )
    ],
    "Warp World": [CHAOSOMENON_PROP],
    "Thieves' Auction": [CHAOSOMENON_PROP],
    Scrambleverse: [CHAOSOMENON_PROP],
    "Wrath of God": [CHAOSOMENON_PROP],
    "Last One Standing": [CHAOSOMENON_PROP],
    Boompile: [
      errataProp(
        "Flip a coin.  If you win the flip, destroy all nonland permanents then Chaos Hike away."
      ),
      CHAOSOMENON_PROP
    ],
    "Tyrant of Discord": [
      errataProp(
        "Target opponent chooses a permanent they control at random and sacrifices it. If a nonland permanent is sacrificed this way, repeat this process."
      )
    ],
    "Rakdos, the Showstopper": [
      errataProp(
        "Flip a coin for each creature that isn't a Demon, Devil, or Imp. Destroy each creature whose coin comes up tails."
      ),
      CHAOSOMENON_PROP
    ],
    Mirrorweave: [
      errataProp(
        "Each other creature permanently becomes a copy of target nonlegendary creature."
      )
    ],
    "Dimensional Breach": [CHAOSOMENON_PROP],
    "Perplexing Chimera": [tokenProp(1)],
    "Sphinx Ambassador": [errataProp("resolve damage trigger")],
    Aminatou: [errataProp("The dump, direction at random")],
    "Nascent Metamorph": [tokenProp(1)],
    Amplifire: [tokenProp(1)],
    "Akroan Horse": [tokenProp(1)],
    "Walking Archive": [tokenProp(1)],
    "Vulshok Sorceror": [tokenProp(3)],
    "Serrated Arrows": [tokenProp(1)],
    "Interplanar Brushwagg": [tokenProp(1)],
    "Oddly Uneven": [
      errataProp(
        "Flip a coin. If heads, destroy each creature with an odd number of words in its name. If tails, Destroy each creature with an even number of words in its name"
      )
    ],
    "Naughty // Nice": [errataProp("Both sides")],
    "Norin the Wary": [errataProp("Conjure a Norin the Wary")],
    "Wrath of Sod": [CHAOSOMENON_PROP],
    "Haphazard Bombardment": [errataProp("Destroy a permanent at random")],
    "Evil Presents": [
      errataProp(
        "Put a creature card from your hand into play under target opponent’s control. That creature is goaded"
      )
    ]
  };

  if (properties[card.name]) {
    card.customProperties = properties[card.name];
  } else {
    card.customProperties = [];
  }

  if (card.oracle_text) {
    card.oracle_html = createMarkup(card.oracle_text);
  }

  return card;
};

export const createMarkup = text => {
  if (!text) {
    return text;
  }
  text = text.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />");
  text = text.replace(/{CHAOS}/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/CHAOS/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/{W}/g, '<i class="ms ms-w ms-cost"></i>');
  text = text.replace(/{U}/g, '<i class="ms ms-u ms-cost"></i>');
  text = text.replace(/{B}/g, '<i class="ms ms-b ms-cost"></i>');
  text = text.replace(/{R}/g, '<i class="ms ms-r ms-cost"></i>');
  text = text.replace(/{G}/g, '<i class="ms ms-g ms-cost"></i>');
  text = text.replace(/{C}/g, '<i class="ms ms-c ms-cost"></i>');
  text = text.replace(/\{1\}/g, '<i class="ms ms-1 ms-cost"></i>');
  text = text.replace(/\{2\}/g, '<i class="ms ms-2 ms-cost"></i>');
  text = text.replace(/\{3\}/g, '<i class="ms ms-3 ms-cost"></i>');
  text = text.replace(/\{T\}/g, '<i class="ms ms-tap"></i>');
  text = text.replace(/{X}/g, '<i class="ms ms-x ms-cost"></i>');
  text = text.replace(/X/g, '<i class="ms ms-x"></i>');
  text = text.replace(/\((.*)\)/g, "<small><em>($1)</em></small>");
  return text;
};

function cached(prefix) {
  let data = store.get(prefix);
  let cacheDate = store.get(`${prefix}-fetched`);
  if (data && !old(cacheDate)) {
    return data;
  }
  return null;
}

function cache(prefix, data) {
  store.set(prefix, data);
  store.set(`${prefix}-fetched`, moment().unix());
}

function old(time) {
  return time && moment().diff(moment.unix(time), "days") > 5;
}
