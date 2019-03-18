import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export class Home extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <div className="home">
        <Helmet title="Magic">
          <link
            rel="manifest"
            href={process.env.PUBLIC_URL + "/manifest.json"}
          />
        </Helmet>
        <div className="mt-4">
          <Button
            tag={NavLink}
            exact
            to="/planechase"
            block
            color="info"
            size="lg"
          >
            <i className="ms ms-planeswalker ms-4x mx-2 d-block" />
            <span className="d-block">Planechase</span>
          </Button>
          <Button
            tag={NavLink}
            exact
            to="/archenemy"
            block
            color="danger"
            size="lg"
          >
            <i className="ss ss-arc ss-3x mx-2 d-block" />
            <span className="d-block">Archenemy</span>
          </Button>
        </div>
      </div>
    );
  }
}
