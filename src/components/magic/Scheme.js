import React from "react";
import "./planes.scss";

import { MtgCard } from "./Card";
import { ARCHENEMY_BACK } from "../../mtg/card";

export const Scheme = ({ ...props }) => (
  <MtgCard displayChildrenBelow={false} back={ARCHENEMY_BACK} {...props} />
);
