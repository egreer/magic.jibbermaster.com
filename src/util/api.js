import axios from "axios";
import moment from "moment";
import store from "store";
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

function addAdditionalProperties(card) {
  const properties = {
    Aretopolis: [{ name: "counter", type: "Scroll" }],
    "Chaotic Aether": [{ name: "all-chaos" }],
    "Interplanar Tunnel": [{ name: "top-5" }],
    "Kilnspire District": [{ name: "counter", type: "Charge" }],
    "Mount Keralia": [{ name: "counter", type: "Pressure" }],
    "Naar Isle": [{ name: "counter", type: "Flame" }],
    "Spatial Merging": [{ name: "two-planes" }],
    "Stairs to Infinity": [{ name: "chaos-trigger" }, { name: "scry-1" }],
    "Pools of Becoming": [{ name: "chaos-trigger" }, { name: "triple-chaos" }],
    "Your Inescapable Doom": [
      { name: "unabandonable" },
      { name: "counter", type: "Doom" }
    ]
  };

  if (properties[card.name]) {
    card.customProperties = properties[card.name];
  } else {
    card.customProperties = [];
  }

  card.oracle_html = createMarkup(card.oracle_text);

  return card;
}

function createMarkup(text) {
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
  return { __html: text };
}

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
