import { useState } from "react";
import { Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";
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
      <DoubleFaceIcon enabled={value} backdrop />
      <span className="ml-3">{text}</span>
    </Dropdown.Item>
  );

  const NavItem = ({ to, text }) => (
    <Nav.Item>
      <Nav.Link as={RRNavLink} to={to} onClick={closeNavbar}>
        {text}
      </Nav.Link>
    </Nav.Item>
  );

  const NavDropdownItem = ({ to, text }) => (
    <NavDropdown.Item as={RRNavLink} to={to} onClick={closeNavbar}>
      {text}
    </NavDropdown.Item>
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
          <NavItem to="/syb" text="SYB" />
          <NavItem to="/formats" text="Formats" />
          <NavDropdown
            title="Game Modes"
            id="game-modes-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdownItem to="/archenemy" text="Archenemy" />
            <NavDropdownItem to="/planechase" text="Planechase" />
            <NavDropdownItem to="/hike" text="Hike" />
            <NavDropdownItem to="/vanguard" text="Vanguard" />
          </NavDropdown>
          <NavDropdown
            title="Trackers"
            id="tracker-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdownItem to="/attractions" text="Attractions" />
            <NavDropdownItem to="/contraptions" text="Contraptions" />
            <NavDropdownItem to="/day-night" text="Day-Night" />
            <NavDropdownItem to="/slivers" text="Slivers" />
          </NavDropdown>
          <Dropdown navbar onToggle={(open) => !open && closeNavbar()}>
            <Dropdown.Toggle as={Nav.Link}>Settings</Dropdown.Toggle>
            <Dropdown.Menu align="end" variant="dark">
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
