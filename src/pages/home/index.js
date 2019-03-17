import React, { Component } from "react";
import { Helmet } from "react-helmet";
export class Home extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Magic">
          <link
            rel="manifest"
            href={process.env.PUBLIC_URL + "/manifest.json"}
          />
        </Helmet>
        Magic
      </div>
    );
  }
}
