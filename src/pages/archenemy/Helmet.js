import React from "react";
import { Helmet } from "react-helmet";

export const ArchenemyHelmet = ({ archenemy }) => {
  return (
    <Helmet name="Archenemy">
      <link
        rel="shortcut icon"
        href={process.env.PUBLIC_URL + "mtg/icon/archenemy.ico"}
      />
      <link
        rel="apple-touch-icon"
        href={process.env.PUBLIC_URL + "mtg/icon/archenemy_256.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="64x64"
        href={process.env.PUBLIC_URL + "mtg/icon/archenemy_64.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="128x128"
        href={process.env.PUBLIC_URL + "mtg/icon/archenemy_128.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href={process.env.PUBLIC_URL + "mtg/icon/archenemy_256.png"}
      />
      <link
        rel="manifest"
        href={process.env.PUBLIC_URL + "/archenemy-manifest.json"}
      />
    </Helmet>
  );
};
