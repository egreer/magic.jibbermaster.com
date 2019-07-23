import React from "react";
import { Helmet } from "react-helmet-async";

export const FormatsHelmet = () => {
  return (
    <Helmet title="Formats">
      <link
        rel="shortcut icon"
        href={process.env.PUBLIC_URL + "mtg/icon/evg.ico"}
      />
      <link
        rel="apple-touch-icon"
        href={process.env.PUBLIC_URL + "mtg/icon/evg_180.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={process.env.PUBLIC_URL + "mtg/icon/evg_180.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href={process.env.PUBLIC_URL + "mtg/icon/evg_192.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href={process.env.PUBLIC_URL + "mtg/icon/evg_512.png"}
      />
      <link
        rel="manifest"
        href={process.env.PUBLIC_URL + "/formats-manifest.json"}
      />
    </Helmet>
  );
};
