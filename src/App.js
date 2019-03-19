import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as RRNavLink
} from "react-router-dom";
import {
  Alert,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import store from "store";

import "./App.scss";

import { setSetting, getSetting, toggleSetting } from "./util/settings";

import { Home } from "./pages/home";
import { Planechase } from "./pages/planechase";
import { Archenemy } from "./pages/archenemy";

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
    this.setState({
      disclaimerDismissed: getSetting("disclaimerDismissed"),
      displayText: getSetting("displayText"),
      displayImages: getSetting("displayImages"),
      devTools: getSetting("devTools")
    });
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
      <DropdownItem toggle={false} onClick={onClick}>
        <span>
          {value ? (
            <i className="ms ms-dfc ms-dfc-day" />
          ) : (
            <i className="ms ms-dfc ms-dfc-night" />
          )}
        </span>
        <span className="ml-3">{displayText}</span>
      </DropdownItem>
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
        <Helmet titleTemplate="%s - Jibbermaster" />
        <Navbar color="dark" dark expand="md" className="text-right p-1">
          <NavbarBrand />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={this.closeNavbar}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/planechase"
                  activeClassName="active"
                  onClick={this.closeNavbar}
                >
                  Planechase
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/archenemy"
                  activeClassName="active"
                  onClick={this.closeNavbar}
                >
                  Archenemy
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
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
                  <DropdownItem divider />
                  <DropdownItem toggle={false} onClick={() => store.clearAll()}>
                    Clear Everything
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
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
          </Switch>
          <Alert
            color="warning"
            className="fixed-bottom mb-0 py-1"
            isOpen={!this.state.disclaimerDismissed}
            toggle={this.dismissDisclaimer}
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
      </BrowserRouter>
    );
  }
}

export default App;
