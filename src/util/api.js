import axios from "axios";
import moment from "moment";
import pick from "lodash/pick";
import store from "store/dist/store.modern";
// TODO use expire store
export const internet = axios.create();

const PLANES_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Aplane+or+t%3Aphenomenon&unique=cards";

const SCHEMES_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Ascheme&unique=cards";

export const filterAPI = card =>
  pick(card, [
    "object",
    "id",
    "oracle_id",
    "multiverse_ids",
    "name",
    "uri",
    "scryfall_uri",
    "layout",
    "image_uris",
    "mana_cost",
    "set",
    "cmc",
    "type_line",
    "oracle_text",
    "colors",
    "color_identity",
    "rulings_uri",
    "artist",
    "flavor_text",
    "related_uris.gatherer",
    // Custom Properties
    "customProperties",
    "oracle_html",
    "show_blank"
  ]);

export const getAllPlanechaseCards = async () => {
  try {
    let planes = cached("planes");
    if (!planes) {
      console.log("Loading from Axios");
      let response = await internet.get(PLANES_URL);
      planes = response.data.data;
      planes = planes.map(p => addAdditionalProperties(filterAPI(p)));
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
    Pramikon: [errataProp("Direction is chosen at random")],
    "Problematic Volcano": [
      errataProp("4 damage to any target chosen at random")
    ],
    "The Countdown Is at One": [PHENOMENON_PROP],
    "Psychic Vortex": [
      errataProp(
        "When you planeswalk to or at the beginning of your upkeep, put a fun counter on Pyschic Vortex, then draw a card for each fun counter on it. At the beginning of your end step, discard your hand and sacrifice a land."
      ),
      counterProp("Fun")
    ],
    "Mirror March": [errataProp("All Players")],
    "Seek Bolas's Counsel": [
      errataProp(
        "When you planeswalk to or at the beginning of your upkeep, Seek Bola's Counsel"
      )
    ],
    "Thousand-Year Storm": [errataProp("All Players")],
    "Chaos Moon": [
      errataProp(
        "When you planeswalk to or at the beginning of your upkeep, choose a color at random (replacing Red)."
      )
    ],
    "Conjured Currency": [
      errataProp(
        "When you planeswalker to and at the beginning of your upkeep, exchange control of a permanent you own and control and target permanent you neither own nor control."
      )
    ],
    "Tyrant of Discord": [errataProp("Just ETB Effect")],
    "Rakdos, the Showstopper": [errataProp("Just ETB Effect")],
    Mirrorweave: [
      errataProp(
        "Each other creature permanently becomes a copy of target nonlegendary creature."
      )
    ],
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
    "Oddly Uneven": [errataProp("Roll a die to choose")],
    "Naughty // Nice": [errataProp("Both sides")],
    "Norin the Wary": [errataProp("Conjure a Norin the Wary")],
    "Haphazard Bombardment": [errataProp("Destroy a permanent at random")]
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
  text = text.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />");
  text = text.replace(/{CHAOS}/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/CHAOS/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/{W}/g, '<i class="ms ms-w ms-cost"></i>');
  text = text.replace(/{U}/g, '<i class="ms ms-u ms-cost"></i>');
  text = text.replace(/{B}/g, '<i class="ms ms-b ms-cost"></i>');
  text = text.replace(/{R}/g, '<i class="ms ms-r ms-cost"></i>');
  text = text.replace(/{G}/g, '<i class="ms ms-g ms-cost"></i>');
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
