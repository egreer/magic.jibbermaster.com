import React from "react";
import { Helmet } from "react-helmet-async";
import { gathererImageURL } from "../../mtg/card.js";

export const HikeHelmet = ({ cards }) => {
  return (
    <Helmet title="Hike Mode">
      <link
        rel="shortcut icon"
        href={process.env.PUBLIC_URL + "mtg/icon/planechase.ico"}
      />
      <link
        rel="apple-touch-icon"
        href={process.env.PUBLIC_URL + "mtg/icon/planechase_256.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="64x64"
        href={process.env.PUBLIC_URL + "mtg/icon/planechase_64.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="128x128"
        href={process.env.PUBLIC_URL + "mtg/icon/planechase_128.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href={process.env.PUBLIC_URL + "mtg/icon/planechase_256.png"}
      />
      <link
        rel="manifest"
        href={process.env.PUBLIC_URL + "/planechase-manifest.json"}
      />
      {cards &&
        cards.map((p) => (
          <link
            rel="preload"
            href={gathererImageURL(p)}
            as="image"
            key={p.id ?? p.name}
          />
        ))}
    </Helmet>
  );
};
