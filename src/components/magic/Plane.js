import React from "react";
import { MtgCard } from "./Card";
import { PLANECHASE_BACK } from "../../mtg/card";

export const Plane = React.memo(({ ...props }) => (
  <MtgCard
    back={PLANECHASE_BACK}
    displayChildrenBelow={false}
    {...props}
  ></MtgCard>
));
