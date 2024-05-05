import { Helmet } from "react-helmet-async";

export const SYBHelmet = () => {
  return (
    <Helmet title="SYB">
      <link rel="shortcut icon" href={"mtg/icon/starter.ico"} />
      <link rel="apple-touch-icon" href={"mtg/icon/starter_256.png"} />
      <link
        rel="apple-touch-icon"
        sizes="64x64"
        href={"mtg/icon/starter_64.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="128x128"
        href={"mtg/icon/starter_128.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href={"mtg/icon/starter_256.png"}
      />
      <link rel="manifest" href={"/syb-manifest.json"} />
    </Helmet>
  );
};
