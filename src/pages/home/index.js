import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const HomeButton = ({ path, text, children, variant = "secondary" }) => (
  <Col xs={6} sm={4} lg={6} className="my-2">
    <Button as={NavLink} exact to={path} block variant={variant} size="lg">
      {children}
      <span className="d-block">{text}</span>
    </Button>
  </Col>
);

export const Home = () => {
  return (
    <div className="home">
      <Helmet title="Magic">
        <link rel="manifest" href={process.env.PUBLIC_URL + "/manifest.json"} />
      </Helmet>
      <div className="mt-4">
        <Container>
          <Row>
            <HomeButton path={"/planechase"} text="Planechase" variant="info">
              <i className="ms ms-planeswalker ms-4x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/archenemy"} text="Archenemy" variant="danger">
              <i className="ss ss-arc ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/syb"} text="SYB" variant="indigo">
              <i className="ss ss-s00 ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/formats"} text="Formats" variant="primary">
              <i className="ss ss-evg ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton
              path={"/attractions"}
              text="Attractions"
              variant="orange"
            >
              <i className="ss ss-unf ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton
              path={"/contraptions"}
              text="Contraptions"
              variant="secondary"
            >
              <i className="ss ss-ust ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/slivers"} text="Slivers" variant="success">
              <i className="ss ss-h09 ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/vanguard"} text="Vanguard" variant="light">
              <i className="ss ss-van ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/hike"} text="Hike Mode" variant="warning">
              <i className="ss ss-h17 ss-3x mx-2 d-block" />
            </HomeButton>
          </Row>
        </Container>
      </div>
    </div>
  );
};
