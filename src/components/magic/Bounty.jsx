import React from "react";
import { BOUNTY_BACK } from "../../mtg/card";
import { MtgCard } from "./Card";
import "./planes.scss";

export const Bounty = React.memo(({ ...props }) => (
  <MtgCard
    displayChildrenBelow={false}
    back={BOUNTY_BACK}
    cardClass={"mtg-scheme-card"}
    {...props}
  />
));
