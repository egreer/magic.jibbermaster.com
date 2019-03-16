import React, { Component } from "react";
import store from "store";
import { Helmet } from "react-helmet";
import { internet } from "../../util/api.js";
import { Loading } from "../../components/Loading";
const planesURL =
  "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Aplane+or+t%3Aphenomenon&unique=cards";

export class Planechase extends Component {
  state = {
    loading: false,
    planes: null
  };

  componentDidMount = async () => {
    await this.fetchPlanes();
  };

  fetchPlanes = async () => {
    try {
      let planes = store.get("planes");
      if (!planes) {
        console.log("Loading from Axios");
        const planes = await internet.get(planesURL);
        store.set("planes", planes);
      } else {
        console.log("Loaded from store");
      }
      this.setState(planes);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { loading, planes } = this.state;
    return (
      <div className="App">
        <Helmet title="Planechase">
          <link
            rel="shortcut icon"
            href={process.env.PUBLIC_URL + "mtg/icon/planechase.ico"}
          />
          <link
            rel="apple-touch-icon"
            href={process.env.PUBLIC_URL + "mtg/icon/planechase_256.png"}
          />
          <link
            rel="apple-touch-icon"
            sizes="64x64"
            href={process.env.PUBLIC_URL + "mtg/icon/planechase_64.png"}
          />
          <link
            rel="apple-touch-icon"
            sizes="128x128"
            href={process.env.PUBLIC_URL + "mtg/icon/planechase_128.png"}
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href={process.env.PUBLIC_URL + "mtg/icon/planechase_256.png"}
          />
        </Helmet>
        <header className="App-header">
          {loading ? <Loading className="text-muted" /> : <div>{planes}</div>}
          <p>Planechase</p>
        </header>
      </div>
    );
  }
}
