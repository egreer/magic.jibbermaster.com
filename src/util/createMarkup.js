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
    /([XYZ])\/([XYZ])/g,
    (_match, p1, p2) =>
      `<i class="ms ms-${p2.toLowerCase()}"></i>/<i class="ms ms-${p2.toLowerCase()}"></i>`
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
