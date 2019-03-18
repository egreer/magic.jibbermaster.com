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

import { Home } from "./pages/home";
import { Planechase } from "./pages/planechase";
import { Archenemy } from "./pages/archenemy";

class App extends Component {
  state = {
    isOpen: false,
    disclaimerDismissed: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount = () => {
    const dismissed = store.get("disclaimer-dismissed");
    this.setState({ disclaimerDismissed: !!dismissed });
  };

  dismissDiscalimer = () => {
    store.set("disclaimer-dismissed", true);
    this.setState({ disclaimerDismissed: true });
  };

  render() {
    return (
      <BrowserRouter>
        <Helmet titleTemplate="%s - Jibbermaster" />
        <Navbar color="dark" dark expand="md" className="text-right p-1">
          <NavbarBrand />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/planechase"
                  activeClassName="active"
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
                >
                  Archenemy
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => store.clearAll()}>
                    Clear Everything
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="app text-light bg-dark">
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
            toggle={this.dismissDiscalimer}
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
