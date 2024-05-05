import React from "react";
import { PLANECHASE_BACK } from "../../mtg/card";
import { MtgCard } from "./Card";

export const Plane = React.memo(({ ...props }) => (
  <MtgCard
    back={PLANECHASE_BACK}
    displayChildrenBelow={false}
    {...props}
  ></MtgCard>
));
