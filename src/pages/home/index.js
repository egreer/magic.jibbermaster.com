import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

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
            as={NavLink}
            exact
            to="/planechase"
            block
            variant="info"
            size="lg"
          >
            <i className="ms ms-planeswalker ms-4x mx-2 d-block" />
            <span className="d-block">Planechase</span>
          </Button>
          <Button
            as={NavLink}
            exact
            to="/archenemy"
            block
            variant="danger"
            size="lg"
          >
            <i className="ss ss-arc ss-3x mx-2 d-block" />
            <span className="d-block">Archenemy</span>
          </Button>
          <Button
            as={NavLink}
            exact
            to="/syb"
            block
            variant="success"
            size="lg"
          >
            <i className="ss ss-s00 ss-3x mx-2 d-block" />
            <span className="d-block">SYB</span>
          </Button>
          <Button
            as={NavLink}
            exact
            to="/formats"
            block
            variant="primary"
            size="lg"
          >
            <i className="ss ss-evg ss-3x mx-2 d-block" />
            <span className="d-block">Formats</span>
          </Button>
        </div>
      </div>
    );
  }
}
