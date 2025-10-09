import { useState } from "react";
import { Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router";
import { useSettings } from "../hooks/useSettings";
import { DoubleFaceIcon } from "./magic/DoubleFaceIcon";

const Toggler = ({ value, text, onClick }) => (
  <Dropdown.Item onClick={onClick}>
    <DoubleFaceIcon enabled={value} backdrop />
    <span className="ml-3">{text}</span>
  </Dropdown.Item>
);

const NavItem = ({ to, text, onClick }) => (
  <Nav.Item>
    <Nav.Link as={RRNavLink} to={to} onClick={onClick}>
      {text}
    </Nav.Link>
  </Nav.Item>
);

const NavDropdownItem = ({ to, text, onClick }) => (
  <NavDropdown.Item as={RRNavLink} to={to} onClick={onClick}>
    {text}
  </NavDropdown.Item>
);

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
          <NavItem to="/" text="Home" onClick={closeNavbar} />
          <NavItem to="/syb" text="SYB" onClick={closeNavbar} />
          <NavItem to="/formats" text="Formats" onClick={closeNavbar} />
          <NavDropdown
            title="Game Modes"
            id="game-modes-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdownItem
              to="/archenemy"
              text="Archenemy"
              onClick={closeNavbar}
            />
            <NavDropdownItem to="/bounty" text="Bounty" onClick={closeNavbar} />
            <NavDropdownItem to="/hike" text="Hike" onClick={closeNavbar} />
            <NavDropdownItem
              to="/planechase"
              text="Planechase"
              onClick={closeNavbar}
            />
            <NavDropdownItem
              to="/vanguard"
              text="Vanguard"
              onClick={closeNavbar}
            />
          </NavDropdown>
          <NavDropdown
            title="Trackers"
            id="tracker-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdownItem
              to="/attractions"
              text="Attractions"
              onClick={closeNavbar}
            />
            <NavDropdownItem
              to="/contraptions"
              text="Contraptions"
              onClick={closeNavbar}
            />
            <NavDropdownItem
              to="/day-night"
              text="Day-Night"
              onClick={closeNavbar}
            />
            <NavDropdownItem
              to="/slivers"
              text="Slivers"
              onClick={closeNavbar}
            />
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
