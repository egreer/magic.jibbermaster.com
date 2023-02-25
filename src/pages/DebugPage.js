import React from "react";
import { Button } from "react-bootstrap";
import { MtgCard } from "../components/magic/Card";
import { Die } from "../components/magic/die/die";
import { Plane } from "../components/magic/Plane";
import { Scheme } from "../components/magic/Scheme";
import { createMarkup, MARKUP_TEXT } from "../util/createMarkup";

export const DebugPage = () => {
  return (
    <>
      <div>
        <Button variant="secondary" className="m-1 mtg-bg-common">
          Common
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-uncommon">
          Uncommon
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-rare">
          Rare
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-mythic">
          Mythic
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-timeshifted">
          timeshifted
        </Button>
      </div>
      <div>
        <Button variant="secondary" className="m-1 mtg-bg-common mtg-grad">
          Common
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-uncommon mtg-grad">
          Uncommon
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-rare mtg-grad">
          Rare
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-mythic mtg-grad">
          Mythic
        </Button>
        <Button variant="secondary" className="m-1 mtg-bg-timeshifted mtg-grad">
          timeshifted
        </Button>
      </div>
      <div>
        <Button variant="outline-secondary" className="m-1 mtg-border-common">
          Common
        </Button>
        <Button variant="outline-secondary" className="m-1 mtg-border-uncommon">
          Uncommon
        </Button>
        <Button variant="outline-secondary" className="m-1 mtg-border-rare">
          Rare
        </Button>
        <Button variant="outline-secondary" className="m-1 mtg-border-mythic">
          Mythic
        </Button>
        <Button
          variant="outline-secondary"
          className="m-1 mtg-border-timeshifted"
        >
          timeshifted
        </Button>
      </div>
      <div>
        <Button
          variant="outline-secondary"
          className="m-1 mtg-border-common mtg-grad"
        >
          Common
        </Button>
        <Button
          variant="outline-secondary"
          className="m-1 mtg-border-uncommon mtg-grad"
        >
          Uncommon
        </Button>
        <Button
          variant="outline-secondary"
          className="m-1 mtg-border-rare mtg-grad"
        >
          Rare
        </Button>
        <Button
          variant="outline-secondary"
          className="m-1 mtg-border-mythic mtg-grad"
        >
          Mythic
        </Button>
        <Button
          variant="outline-secondary"
          className="m-1 mtg-border-timeshifted mtg-grad"
        >
          timeshifted
        </Button>
      </div>

      <div>
        <h1 className="m-1 mtg-text-common">Common</h1>
        <h1 className="m-1 mtg-text-uncommon">Uncommon</h1>
        <h1 className="m-1 mtg-text-rare">Rare</h1>
        <h1 className="m-1 mtg-text-mythic">Mythic</h1>
        <h1 className="m-1 mtg-text-timeshifted">Timeshifted</h1>
      </div>
      <div>
        <h1 className="m-1 mtg-text-common mtg-grad">Common-Grad</h1>
        <h1 className="m-1 mtg-text-uncommon mtg-grad">Uncommon-Grad</h1>
        <h1 className="m-1 mtg-text-rare mtg-grad">Rare-Grad</h1>
        <h1 className="m-1 mtg-text-mythic mtg-grad">Mythic-Grad</h1>
        <h1 className="m-1 mtg-text-timeshifted mtg-grad">Timeshifted-Grad</h1>
      </div>

      <Button className="mtg-bg-timeshifted mtg-grad">
        <span className="mtg-text-uncommon mtg-grad">Timeshifted</span>
      </Button>

      <h1>Mana</h1>
      <div dangerouslySetInnerHTML={{ __html: createMarkup(MARKUP_TEXT) }} />

      <div className="position-fixed" style={{ top: "10%", right: "150px" }}>
        <Die sides={4}></Die>
      </div>
      <div className="position-fixed" style={{ top: "20%", right: "150px" }}>
        <Die sides={6}></Die>
      </div>
      <div className="position-fixed" style={{ top: "30%", right: "150px" }}>
        <Die sides={8}></Die>
      </div>
      <div className="position-fixed" style={{ top: "50%", right: "150px" }}>
        <Die sides={10}></Die>
      </div>
      <div className="position-fixed" style={{ top: "70%", right: "150px" }}>
        <Die sides={12}></Die>
      </div>
      <div className="position-fixed" style={{ top: "80%", right: "150px" }}>
        <Die sides={20}></Die>
      </div>

      <MtgCard />
      <Plane />
      <Scheme />
    </>
  );
};
