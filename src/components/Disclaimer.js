import { Alert } from "react-bootstrap";
import { useSettings } from "../hooks/useSettings";

export const Disclaimer = () => {
  const settings = useSettings();
  const { disclaimerDismissed, setDisclaimerDismissed } = settings;
  return (
    <Alert
      variant="warning"
      className="fixed-bottom mb-0 py-1"
      show={!disclaimerDismissed}
      onClose={() => setDisclaimerDismissed(true)}
      dismissible
    >
      <h6>Disclaimer</h6>
      <small className="text-muted m-0">
        This site is created for personal use. Magic: The Gathering, the mana
        symbols, the tap symbol and all other related images are owned by
        Wizards of the Coast. jibbermaster.com is unaffiliated with Wizards of
        the Coast.
      </small>
    </Alert>
  );
};
