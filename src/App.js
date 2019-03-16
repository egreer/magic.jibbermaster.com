import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import logo from './logo.svg';
import './App.scss';
// import {Button} from 'reactstrap';
import { Link } from "react-router-dom";
// import { AppRouter } from "./Router";

import { BrowserRouter, Route, Switch, NavLink as RRNavLink } from "react-router-dom";

import {Home} from "./pages/home";
import {Planechase} from "./pages/planechase";
import {Archenemy} from "./pages/archenemy";
import {
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
  DropdownItem } from 'reactstrap';

const schemeURL = "https://api.scryfall.com/cards/search?include_extras=1&q=t%3Ascheme&unique=cards";
class App extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - Jibbermaster">
        </Helmet>
        <Navbar color="dark" dark expand="md">
         <NavbarBrand href="/">reactstrap</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
             </NavItem>
             <NavItem>
               <NavLink tag={RRNavLink} exact to="/planechase" activeClassName="active">Planechase</NavLink>
             </NavItem>
             <NavItem>
               <NavLink tag={RRNavLink} exact to="/archenemy" activeClassName="active">Archenemy</NavLink>
             </NavItem>
             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Options
               </DropdownToggle>
               <DropdownMenu right>
                 <DropdownItem>
                   Option 1
                 </DropdownItem>
                 <DropdownItem>
                   Option 2
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Reset
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
           </Nav>
         </Collapse>
       </Navbar>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/planechase/" exact component={Planechase} />
            <Route path="/archenemy/" exact component={Archenemy} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
