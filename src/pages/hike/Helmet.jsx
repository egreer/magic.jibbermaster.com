import { Helmet } from "react-helmet-async";
import { scryfallImageURL } from "../../mtg/card.js";

export const HikeHelmet = ({ cards }) => {
  return (
    <Helmet title="Hike Mode">
      <link rel="shortcut icon" href={"mtg/icon/planechase.ico"} />
      <link rel="apple-touch-icon" href={"mtg/icon/planechase_256.png"} />
      <link
        rel="apple-touch-icon"
        sizes="64x64"
        href={"mtg/icon/planechase_64.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="128x128"
        href={"mtg/icon/planechase_128.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href={"mtg/icon/planechase_256.png"}
      />
      <link rel="manifest" href={"/planechase-manifest.json"} />
      {cards &&
        cards.map((p) => (
          <link
            rel="preload"
            href={scryfallImageURL(p)}
            as="image"
            key={p.id ?? p.name}
          />
        ))}
    </Helmet>
  );
};
