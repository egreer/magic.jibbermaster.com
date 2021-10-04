import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";

import { Dropdown, Navbar, Nav } from "react-bootstrap";
import { useSettings } from "../hooks/useSettings";
import { DoubleFaceIcon } from "./magic/DoubleFaceIcon";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const settings = useSettings();

  const {
    disclaimerDismissed,
    displayText,
    displayImages,
    devTools,
    displayGatherer,
    setDisclaimerDismissed,
    setDisplayText,
    setDisplayImages,
    setDevTools,
    setDisplayGatherer,
  } = settings;

  const toggle = () => setOpen(!open);
  const closeNavbar = () => open && setOpen(false);

  const Toggler = ({ value, text, onClick }) => (
    <Dropdown.Item onClick={onClick}>
      <DoubleFaceIcon enabled={value} />
      <span className="ml-3">{text}</span>
    </Dropdown.Item>
  );

  const NavItem = ({ to, text }) => (
    <Nav.Item>
      <Nav.Link
        as={RRNavLink}
        exact
        to={to}
        activeClassName="active"
        onClick={closeNavbar}
      >
        {text}
      </Nav.Link>
    </Nav.Item>
  );

  return (
    <Navbar
      variant="dark"
      expand="md"
      className="text-right p-1 noselect"
      expanded={open}
    >
      <Navbar.Brand />
      <Navbar.Toggle onClick={toggle} />
      <Navbar.Collapse>
        <Nav className="ml-auto" navbar>
          <NavItem to="/" text="Home" />
          <NavItem to="/planechase" text="Planechase" />
          <NavItem to="/archenemy" text="Archenemy" />
          <NavItem to="/syb" text="SYB" />
          <NavItem to="/formats" text="Formats" />
          <NavItem to="/contraptions" text="Contraptions" />
          <Dropdown navbar onToggle={(open) => !open && closeNavbar()}>
            <Dropdown.Toggle as={Nav.Link}>Settings</Dropdown.Toggle>
            <Dropdown.Menu alignRight>
              <Toggler
                value={disclaimerDismissed}
                text="Disclaimer Dismissed"
                onClick={() => setDisclaimerDismissed(!disclaimerDismissed)}
              />
              <Toggler
                value={displayText}
                text="Display Text"
                onClick={() => setDisplayText(!displayText)}
              />
              <Toggler
                value={displayImages}
                text="Display Images"
                onClick={() => setDisplayImages(!displayImages)}
              />
              <Toggler
                value={displayGatherer}
                text="Display Gatherer"
                onClick={() => setDisplayGatherer(!displayGatherer)}
              />
              <Toggler
                value={devTools}
                text="Dev Tools"
                onClick={() => setDevTools(!devTools)}
              />
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => window.localStorage.clear()}>
                Clear Everything
              </Dropdown.Item>

              {devTools && (
                <>
                  <Dropdown.Divider />
                  <Dropdown.Item disabled>
                    Version {settings.getSetting("version")}
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
