import React from "react";
import { ARCHENEMY_BACK } from "../../mtg/card";
import { MtgCard } from "./Card";
import "./planes.scss";

export const Scheme = React.forwardRef(({ ...props }, ref) => (
  <MtgCard
    displayChildrenBelow={false}
    back={ARCHENEMY_BACK}
    {...props}
    ref={ref}
  />
));
