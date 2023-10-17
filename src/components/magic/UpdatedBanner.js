export const UpdatedBanner = ({ setName, symbol, rarity = "mythic" }) => {
  return (
    <div
      className={`text-center p-3`}
      style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
      title={`Cards are added automatically from Scryfall, but behavior has only been tested through ${setName}`}
    >
      <i
        className={`ss ss-fw mx-1 ss-2x ss-${rarity} ss-grad ss-${symbol}`}
      ></i>
      <span className={`mtg-text-${rarity} mtg-grad`}>
        Updated through {setName}
      </span>
    </div>
  );
};
