import { Helmet } from "react-helmet-async";

export const ArchenemyHelmet = ({ schemes }) => {
  return (
    <Helmet title="Archenemy">
      <link rel="shortcut icon" href={"mtg/icon/archenemy.ico"} />
      <link rel="apple-touch-icon" href={"mtg/icon/archenemy_256.png"} />
      <link
        rel="apple-touch-icon"
        sizes="64x64"
        href={"mtg/icon/archenemy_64.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="128x128"
        href={"mtg/icon/archenemy_128.png"}
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href={"mtg/icon/archenemy_256.png"}
      />
      <link rel="manifest" href={"/archenemy-manifest.json"} />
      {schemes &&
        schemes.map((p) => (
          <link
            rel="preload"
            href={p.image_uris["large"]}
            as="image"
            key={p.id}
          />
        ))}
    </Helmet>
  );
};
