import { Button, Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router";

const HomeButton = ({ path, text, children, variant = "secondary" }) => (
  <Col xs={6} sm={4} lg={6} className="my-2">
    <Button
      as={NavLink}
      to={path}
      className="w-100"
      variant={variant}
      size="lg"
    >
      {children}
      <span className="d-block">{text}</span>
    </Button>
  </Col>
);

export const Home = () => {
  return (
    <div className="home">
      <Helmet title="Magic">
        <link rel="manifest" href={"/manifest.json"} />
      </Helmet>
      <div className="mt-4">
        <Container>
          <Row>
            <HomeButton path={"/syb"} text="SYB" variant="indigo">
              <i className="ss ss-s00 ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/formats"} text="Formats" variant="primary">
              <i className="ss ss-evg ss-3x mx-2 d-block" />
            </HomeButton>
            <Col xs={12}>
              <h2 className="text-center">Game Modes</h2>
            </Col>
            <HomeButton path={"/archenemy"} text="Archenemy" variant="danger">
              <i className="ss ss-arc ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/bounty"} text="Bounty" variant="orange">
              <i className="ss ss-otj ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/hike"} text="Hike Mode" variant="warning">
              <i className="ss ss-h17 ss-3x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/planechase"} text="Planechase" variant="info">
              <i className="ms ms-planeswalker ms-4x mx-2 d-block" />
            </HomeButton>
            <HomeButton path={"/vanguard"} text="Vanguard" variant="light">
              <i className="ss ss-van ss-3x mx-2 d-block" />
            </HomeButton>
            <Col xs={12}>
              <h2 className="text-center">Trackers</h2>
            </Col>
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
            <HomeButton
              path={"/day-night"}
              text="Day-Night"
              variant="secondary"
            >
              <div className="my-1 d-block">
                <i className="ms ms-dfc ms-dfc-day ms-3x text-light" />
                <i className="ms ms-dfc ms-dfc-night ms-3x text-dark" />
              </div>
            </HomeButton>
            <HomeButton path={"/slivers"} text="Slivers" variant="success">
              <i className="ss ss-h09 ss-3x mx-2 d-block" />
            </HomeButton>
          </Row>
        </Container>
      </div>
    </div>
  );
};
