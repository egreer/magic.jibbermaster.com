import axios from "axios";
import chunk from "lodash/chunk";
import pick from "lodash/pick";
import moment from "moment";
import store from "store/dist/store.modern";
import { v4 as uuidv4 } from "uuid";
import { BASE_CHAOS } from "../pages/hike/data/chaos";
import { BASE_PLANES } from "../pages/hike/data/planes";
import { addAdditionalProperties } from "./additionalProps";

// TODO use expire store
export const internet = axios.create();

const ATTRACTIONS_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Aattraction&unique=prints";

const PLANES_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Aplane+or+t%3Aphenomenon&unique=cards";

const SCHEMES_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Ascheme&unique=cards";

const CONTRAPTIONS_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Acontraption&unique=cards";

const SLIVERS_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Asliver&unique=cards";

const VANGUARD_URL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Avanguard&unique=cards";

const COLLECTION_URL = "https://api.scryfall.com/cards/collection";

export const filterAPI = (card) =>
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
    "card_faces",
    "colors",
    "color_identity",
    "rulings_uri",
    "artist",
    "flavor_text",
    "related_uris.gatherer",
    // Custom Properties
    "customProperties",
    "oracle_html",
    "show_blank",
  ]);

export const getAllPlanechaseCards = async () => {
  try {
    let planes = cached("planes");
    if (!planes) {
      console.log("Loading planes from Axios");
      let response = await internet.get(PLANES_URL);
      planes = response.data.data;
      planes = planes.map((p) => addAdditionalProperties(filterAPI(p)));
      cache("planes", planes);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded planes from store");
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
      console.log("Loading archenemy from Axios");
      let response = await internet.get(SCHEMES_URL);
      schemes = response.data.data;
      schemes = schemes.map((p) => addAdditionalProperties(filterAPI(p)));
      cache("schemes", schemes);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded archenemy from store");
    }
    return schemes;
  } catch (e) {
    console.error(e);
  }
};

export const getAllAttractionsCards = async () => {
  try {
    let attractions = cached("attractions");
    if (!attractions) {
      console.log("Loading attractions from Axios");
      let response = await internet.get(ATTRACTIONS_URL);
      attractions = response.data.data;
      attractions = attractions.map((p) =>
        addAdditionalProperties(filterAPI(p))
      );
      cache("attractions", attractions);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded attractions from store");
    }
    return attractions;
  } catch (e) {
    console.error(e);
  }
};

export const getAllContraptionsCards = async () => {
  try {
    let contraptions = cached("contraptions");
    if (!contraptions) {
      console.log("Loading contraptions from Axios");
      let response = await internet.get(CONTRAPTIONS_URL);
      contraptions = response.data.data;
      contraptions = contraptions.map((p) =>
        addAdditionalProperties(filterAPI(p))
      );
      cache("contraptions", contraptions);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded contraptions from store");
    }
    return contraptions;
  } catch (e) {
    console.error(e);
  }
};

export const getAllSliversCards = async () => {
  try {
    let slivers = cached("slivers");
    if (!slivers) {
      console.log("Loading slivers from Axios");
      let response = await internet.get(SLIVERS_URL);
      slivers = response.data.data;
      slivers = slivers.map((p) => addAdditionalProperties(filterAPI(p)));
      cache("slivers", slivers);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded slivers from store");
    }
    return slivers;
  } catch (e) {
    console.error(e);
  }
};

export const getAllVanguardCards = async () => {
  try {
    let vanguard = cached("vanguard");
    if (!vanguard) {
      console.log("Loading vanguard from Axios");
      let response = await internet.get(VANGUARD_URL);
      vanguard = response.data.data;
      vanguard = vanguard.map((p) => addAdditionalProperties(filterAPI(p)));
      cache("vanguard", vanguard);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded vanguard from store");
    }
    return vanguard;
  } catch (e) {
    console.error(e);
  }
};

export const getAllHikeModePlaneCards = async () => {
  try {
    let hikePlanes = cached("hikePlanes");
    let ids = BASE_PLANES.map((c) => pick(c, "id"));
    if (!hikePlanes || hikePlanes.length !== ids.length) {
      console.log("Loading hike planes from Axios");
      hikePlanes = await fetchAllCards(ids);
      cache("hikePlanes", hikePlanes);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded hike planes from store");
    }
    return hikePlanes;
  } catch (e) {
    console.error(e);
  }
};

export const getAllHikeModeChaosCards = async () => {
  try {
    let hikeChaos = cached("hikeChaos");
    let ids = BASE_CHAOS.map((c) => pick(c, "id"));
    if (!hikeChaos || hikeChaos.length !== ids.length) {
      console.log("Loading hike chaos from Axios");
      hikeChaos = await fetchAllCards(ids);
      cache("hikeChaos", hikeChaos);
      // TODO use the expire store parameter
    } else {
      console.log("Loaded hike chaos from store");
    }
    return hikeChaos;
  } catch (e) {
    console.error(e);
  }
};

const fetchAllCards = async (ids) => {
  const chunks = chunk(ids, 75);
  let cards = [];
  for (let identifiers of chunks) {
    let response = await internet.post(COLLECTION_URL, {
      identifiers,
    });
    cards = cards.concat([...(response?.data?.data || [])]);
  }
  return cards.map((p) => addAdditionalProperties(filterAPI(p)));
};

export const fetchRandomCard = async (url) => {
  console.log(`Loading random card from Axios (${url})`);
  const response = await internet.get(url);
  const card = addAdditionalProperties(filterAPI({ ...response?.data }));
  card.deck_card_id = uuidv4();

  console.log("Random Card", card);
  return card;
};

export const fetchCard = async (id) => {
  let card = cached(id);
  if (!card) {
    console.log(`Loading card from Axios (${id})`);
    const response = await internet.get(
      `https://api.scryfall.com/cards/${id}?format=json`
    );
    card = addAdditionalProperties(filterAPI({ ...response?.data }));
    cache(id, card);
  }
  return card;
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
