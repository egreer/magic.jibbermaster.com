export const DeckIcon = ({ name, type = "ss-mythic ss-grad" }) => {
  switch (name) {
    case "All Schemes":
      return <i className={`ss ss-fw ${type} ss-lea`}></i>;
    case "Custom Deck":
      return <i className={`ss ss-fw ${type} ss-chr`}></i>;
    case "Assemble the Doomsday Machine":
      return <i className={`ss ss-fw ${type} ss-usg`}></i>;
    case "Scorch the World with Dragonfire":
      return <i className={`ss ss-fw ${type} ss-scg`}></i>;
    case "Trample Civilization Underfoot":
      return <i className={`ss ss-fw ${type} ss-c20`}></i>;
    case "Bring About the Undead Apocalypse":
      return <i className={`ss ss-fw ${type} ss-pd3`}></i>;
    case "Archenemy Nicol Bolas":
      return <i className={`ss ss-fw ${type} ss-hou`}></i>;
    case "Death Toll":
      return <i className={`ss ss-fw ${type} ss-mkm`}></i>;
    case "Endless Punishment":
      return <i className={`ss ss-fw ${type} ss-dsk`}></i>;
    case "Jump Scare!":
      return <i className={`ss ss-fw ${type} ss-j22`}></i>;
    case "Miracle Worker":
      return <i className={`ss ss-fw ${type} ss-avr`}></i>;
    default:
      return null;
  }
};
