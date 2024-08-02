export const createMarkup = (text) => {
  if (!text) {
    return text;
  }

  // Symbols
  text = text.replace(/{PW}/g, '<i class="ms ms-planeswalker"></i>');
  text = text.replace(/{CHAOS}/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/CHAOS/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/{A}/g, '<i class="ms ms-acorn"></i>');
  text = text.replace(/{E}/g, '<i class="ms ms-e"></i>');
  text = text.replace(/\{T\}/g, '<i class="ms ms-tap"></i>');
  text = text.replace(/\{Q\}/g, '<i class="ms ms-untap"></i>');

  // Generic Cost
  text = text.replace(
    /{([WUBRGSCPXYZ])}/g,
    (_match, p1) => `<i class="ms ms-${p1.toLowerCase()} ms-cost"></i>`
  );

  // Numbered Mana
  text = text.replace(/\{½\}/g, '<i class="ms ms-1-2 ms-cost"></i>');
  text = text.replace(/\{∞\}/g, '<i class="ms ms-infinity ms-cost"></i>');
  text = text.replace(/\{([0-9]+?)\}/g, (match, p1) =>
    p1 <= 20 || p1 === "100" || p1 === ""
      ? `<i class="ms ms-${p1} ms-cost"></i>`
      : match
  );
  text = text.replace(/\{([0-9]+?)\}/g, (match, p1) =>
    p1 <= 20 || p1 === "100" || p1 === "1000000"
      ? `<i class="ms ms-${p1} ms-cost"></i>`
      : match
  );

  // Split Mana
  text = text.replace(
    /{([WUBRG2])\/([WUBRG])}/g,
    (_match, p1, p2) =>
      `<i class="ms ms-${p1.toLowerCase()}${p2.toLowerCase()} ms-cost"></i>`
  );

  // Phrexian
  text = text.replace(
    /{([WUBRG])\/P}/g,
    (_match, p1) => `<i class="ms ms-${p1.toLowerCase()} ms-p ms-cost"></i>`
  );

  // Half Mana
  text = text.replace(
    /{H([WUBRG])}/g,
    (match, p1) => `<i class="ms ms-${p1.toLowerCase()} ms-half ms-cost"></i>`
  );

  // Special
  text = text.replace(
    /{(ability|clan|counter|guild|polis|school)-(.+?)}/g,
    `<i class="ms ms-$1-$2"></i>`
  );

  // Text

  // TODO: Can add \d but 1/1 looks weird need bigger /
  text = text.replace(
    /([XYZ0-9])\/([XYZ0-9])/g,
    (_match, p1, p2) =>
      `<i class="ms ms-${p1.toLowerCase()}"></i> / <i class="ms ms-${p2.toLowerCase()}"></i>`
  );

  text = text.replace(
    /\+([XYZ0-9])\/\+([XYZ0-9])/g,
    (_match, p1, p2) =>
      `<i class="fa fa-plus fa-xs"></i><i class="ms ms-${p1.toLowerCase()}"></i> / <i class="fa fa-plus fa-xs"></i><i class="ms ms-${p2.toLowerCase()}"></i>`
  );

  text = text.replace(
    /(\s)([XZY])(\s)/g,
    (_match, p1, p2, p3) =>
      `${p1}<i class="ms ms-${p2.toLowerCase()}"></i>${p3}`
  );

  text = text.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />");
  text = text.replace(/\((.+?)\)/g, "<small><em>($1)</em></small>");

  return text;
};

const ABILITY_ICONS = {
  activated: "ability-activated",
  adamant: "ability-adamant",
  adapt: "ability-adapt",
  addendum: "ability-addendum",
  adventure: "ability-adventure",
  afflict: "ability-afflict",
  afterlife: "ability-afterlife",
  aftermath: "ability-aftermath",
  amass: "ability-amass",
  ascend: "ability-ascend",
  boast: "ability-boast",
  companion: "ability-companion",
  constellation: "ability-constellation",
  convoke: "ability-convoke",
  d20: "ability-d20",
  deathtouch: "ability-deathtouch",
  defender: "ability-defender",
  devotion: "ability-devotion",
  "double strike": "ability-double-strike",
  dungeon: "ability-dungeon",
  embalm: "ability-embalm",
  enrage: "ability-enrage",
  escape: "ability-escape",
  eternalize: "ability-eternalize",
  explore: "ability-explore",
  "first strike": "ability-first-strike",
  flash: "ability-flash",
  flying: "ability-flying",
  foretell: "ability-foretell",
  haste: "ability-haste",
  hexproof: "ability-hexproof",
  "hexproof: white": "ability-hexproof-white",
  "hexproof: blue": "ability-hexproof-blue",
  "hexproof: black": "ability-hexproof-black",
  "hexproof: red": "ability-hexproof-red",
  "hexproof: green": "ability-hexproof-green",
  protection: "ability-hexproof",
  "protection from white": "ability-hexproof-white",
  "protection from blue": "ability-hexproof-blue",
  "protection from black": "ability-hexproof-black",
  "protection from red": "ability-hexproof-red",
  "protection from green": "ability-hexproof-green",
  indestructible: "ability-indestructible",
  jumpstart: "ability-jumpstart",
  kicker: "ability-kicker",
  landfall: "ability-landfall",
  learn: "ability-learn",
  lifelink: "ability-lifelink",
  magecraft: "ability-magecraft",
  menace: "ability-menace",
  mutate: "ability-mutate",
  party: "ability-party",
  proliferate: "ability-proliferate",
  prowess: "ability-prowess",
  raid: "ability-raid",
  reach: "ability-reach",
  revolt: "ability-revolt",
  riot: "ability-riot",
  spectacle: "ability-spectacle",
  "static ability": "ability-static",
  "summoning Sickness": "ability-summoning-sickness",
  surveil: "ability-surveil",
  trample: "ability-trample",
  transform: "ability-transform",
  "triggered Ability": "ability-triggered",
  undergrowth: "ability-undergrowth",
  vigilance: "ability-vigilance",
  ward: "ability-ward",
  white: "w",
  blue: "u",
  black: "b",
  red: "r",
  green: "g",
};

export const hasAbilityIcon = (ability) =>
  ABILITY_ICONS?.[ability?.toLowerCase()];
export const AbilityIcon = ({ ability, className, ...props }) =>
  hasAbilityIcon(`${ability}`) ? (
    <i
      className={`ms ms-fw ms-${
        ABILITY_ICONS[ability?.toLowerCase()]
      } ${className}`}
      {...props}
    ></i>
  ) : null;

export const MARKUP_TEXT = `
{W}
{U}
{B}
{R}
{G}
{C}
{S}
{1}
{2}
{3}
{4}
{5}
{6}
{7}
{8}
{9}
{10}
{11}
{12}
{13}
{14}
{15}
{16}
{17}
{18}
{19}
{20}
{100}
{1000000}
{∞}
{X}
{Y}
{Z}

(Invalid)
{99}

(Split)
{W/U}
{W/B}
{B/R}
{B/G}
{U/B}
{U/R}
{R/G}
{R/W}
{G/W}
{G/U}
{2/W}
{2/U}
{2/B}
{2/R}
{2/G}

(Phrexian)
{P}
{W/P}
{U/P}
{B/P}
{R/P}
{G/P}

(Half)
{HW}
{HU}
{HB}
{HR}
{HG}

(Numbers)

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
100
1000000
X

Y

Z

X | Y | Z


{o1}

1/1
2/2
X/X
Y/Y
Z/Z
X/Z
X/Y
X/0
Y/0
Z/0
+X/+0

(Symbols)
{PW}
{CHAOS}
CHAOS
{A}
{T}
{Q}

Xylophone
Yeti
Zebra
eXtra
trY
beZor
this is CHAOS but not chaos
costs X to cast
costs Y to cast
costs Z to cast

(abilities)
{ability-hexproof-blue}
{ability-ward}

(clan)
{clan-atarka}

(counter)
{counter-brick}

(guild)
{guild-simic}

(poleis)
{polis-setessa}

(school)
{school-lorehold}
`;
