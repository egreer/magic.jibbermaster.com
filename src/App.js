import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as RRNavLink
} from "react-router-dom";
import { Alert, Navbar, Nav, Dropdown } from "react-bootstrap";
import store from "store";

import "./App.scss";

import { setSetting, getSetting, toggleSetting } from "./util/settings";

import { Home } from "./pages/home";
import { Planechase } from "./pages/planechase";
import { Archenemy } from "./pages/archenemy";
import { SYB } from "./pages/syb";
import { Formats } from "./pages/formats";
import { DoubleFaceIcon } from "./components/magic/DoubleFaceIcon";
import GitInfo from "react-git-info/macro";
const gitInfo = GitInfo();

class App extends Component {
  state = {
    isOpen: false,
    disclaimerDismissed: false,
    displayText: false,
    displayImages: false,
    devTools: false,
    displayGatherer: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount = () => {
    this.versionCheck();
    this.setState({
      disclaimerDismissed: getSetting("disclaimerDismissed"),
      displayText: getSetting("displayText"),
      displayImages: getSetting("displayImages"),
      devTools: getSetting("devTools")
    });
  };

  versionCheck = () => {
    const version = getSetting("version");
    if (version !== gitInfo.commit.shortHash) {
      // TODO: Future refine this reset
      store.clearAll();
    }
    setSetting("version", gitInfo.commit.shortHash);
  };

  dismissDisclaimer = () => {
    this.setState({
      disclaimerDismissed: setSetting("disclaimerDismissed", true)
    });
  };

  _toggleSetting = setting => {
    const tempState = {};
    tempState[setting] = toggleSetting(setting);
    this.setState(tempState);
  };

  _mtgToggler = (value, displayText, onClick) => {
    return (
      <Dropdown.Item onClick={onClick}>
        <DoubleFaceIcon enabled={value} />
        <span className="ml-3">{displayText}</span>
      </Dropdown.Item>
    );
  };

  closeNavbar = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const {
      disclaimerDismissed,
      displayText,
      displayImages,
      displayGatherer,
      devTools
    } = this.state;
    return (
      <BrowserRouter>
        <HelmetProvider>
          <Helmet titleTemplate="%s - Jibbermaster" />
          <Navbar
            variant="dark"
            expand="md"
            className="text-right p-1 noselect"
            expanded={this.state.isOpen}
          >
            <Navbar.Brand />
            <Navbar.Toggle onClick={this.toggle} />
            <Navbar.Collapse>
              <Nav className="ml-auto" navbar>
                <Nav.Item>
                  <Nav.Link
                    as={RRNavLink}
                    exact
                    to="/"
                    activeClassName="active"
                    onClick={this.closeNavbar}
                  >
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={RRNavLink}
                    exact
                    to="/planechase"
                    activeClassName="active"
                    onClick={this.closeNavbar}
                  >
                    Planechase
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={RRNavLink}
                    exact
                    to="/archenemy"
                    activeClassName="active"
                    onClick={this.closeNavbar}
                  >
                    Archenemy
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={RRNavLink}
                    exact
                    to="/syb"
                    activeClassName="active"
                    onClick={this.closeNavbar}
                  >
                    SYB
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={RRNavLink}
                    exact
                    to="/formats"
                    activeClassName="active"
                    onClick={this.closeNavbar}
                  >
                    Formats
                  </Nav.Link>
                </Nav.Item>
                <Dropdown
                  navbar
                  onToggle={isOpen => !isOpen && this.closeNavbar()}
                >
                  <Dropdown.Toggle as={Nav.Link}>Settings</Dropdown.Toggle>
                  <Dropdown.Menu alignRight>
                    {this._mtgToggler(
                      disclaimerDismissed,
                      "Disclaimer Dismissed",
                      () => this._toggleSetting("disclaimerDismissed")
                    )}
                    {this._mtgToggler(displayText, "Display Text", () =>
                      this._toggleSetting("displayText")
                    )}
                    {this._mtgToggler(displayImages, "Display Images", () =>
                      this._toggleSetting("displayImages")
                    )}
                    {this._mtgToggler(displayGatherer, "Display Gatherer", () =>
                      this._toggleSetting("displayGatherer")
                    )}
                    {this._mtgToggler(devTools, "Dev Tools", () =>
                      this._toggleSetting("devTools")
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => store.clearAll()}>
                      Clear Everything
                    </Dropdown.Item>

                    {this.state.devTools && (
                      <>
                        <Dropdown.Divider />
                        <Dropdown.Item disabled>
                          Version {getSetting("version")}
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="app text-light bg-dark col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <Switch>
              <Route path="/" exact render={props => <Home {...props} />} />
              <Route
                path="/archenemy"
                exact
                render={props => <Archenemy {...props} />}
              />
              <Route
                path="/planechase"
                exact
                render={props => <Planechase {...props} />}
              />
              <Route path="/syb" exact render={props => <SYB {...props} />} />
              <Route
                path="/formats"
                exact
                render={props => <Formats {...props} />}
              />
            </Switch>
            <Alert
              variant="warning"
              className="fixed-bottom mb-0 py-1"
              show={!this.state.disclaimerDismissed}
              onClose={this.dismissDisclaimer}
              dismissible
            >
              <h6>Disclaimer</h6>
              <small className="text-muted m-0">
                This site is created for personal use. Magic: The Gathering, the
                mana symbols, the tap symbol and all other related images are
                owned by Wizards of the Coast. jibbermaster.com is unaffiliated
                with Wizards of the Coast.
              </small>
            </Alert>
          </div>
        </HelmetProvider>
      </BrowserRouter>
    );
  }
}

export default App;
