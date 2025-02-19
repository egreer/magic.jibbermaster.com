export const getDeckList = () => {
  return DECKS.map((s) => s.name);
};

const compact = (arr) => arr.filter(Boolean);

export const getCardList = (deckname, schemes) => {
  const deck = DECKS.find((s) => s.name === deckname);
  return compact(
    deck.cards.map((c) => {
      const scheme = schemes.find((s) => s.name === c[0] && s.set == deck.set);
      if (scheme) {
        const clonedCard = JSON.parse(JSON.stringify(scheme));
        clonedCard.count = c[1];
        return clonedCard;
      } else {
        console.warn("Missing expected card in list", c[0]);
        return null;
      }
    })
  );
};

const DECKS = [
  {
    name: "Assemble the Doomsday Machine",
    set: "oarc",
    icon: "ss-usg",
    cards: [
      ["All in Good Time", 1],
      ["Behold the Power of Destruction", 1],
      ["Embrace My Diabolical Vision", 1],
      ["Feed the Machine", 2],
      ["I Delight in Your Convulsions", 1],
      ["I Know All, I See All", 2],
      ["Ignite the Cloneforge!", 2],
      ["Introductions Are in Order", 1],
      ["The Iron Guardian Stirs", 2],
      ["My Genius Knows No Bounds", 1],
      ["Nothing Can Stop Me Now", 1],
      ["The Pieces Are Coming Together", 2],
      ["Realms Befitting My Majesty", 1],
      ["Your Fate Is Thrice Sealed", 1],
      ["Your Puny Minds Cannot Fathom", 1],
    ],
  },
  {
    name: "Scorch the World with Dragonfire",
    set: "oarc",
    icon: "ss-scg",
    cards: [
      ["All Shall Smolder in My Wake", 2],
      ["Approach My Molten Realm", 1],
      ["The Fate of the Flammable", 1],
      ["I Bask in Your Silent Awe", 2],
      ["I Delight in Your Convulsions", 1],
      ["Introductions Are in Order", 1],
      ["Know Naught but Fire", 1],
      ["Look Skyward and Despair", 2],
      ["My Crushing Masterstroke", 1],
      ["My Wish Is Your Command", 2],
      ["Realms Befitting My Majesty", 1],
      ["Tooth, Claw, and Tail", 1],
      ["Which of You Burns Brightest?", 2],
      ["Your Fate Is Thrice Sealed", 1],
      ["Your Puny Minds Cannot Fathom", 1],
    ],
  },
  {
    name: "Trample Civilization Underfoot",
    set: "oarc",
    icon: "ss-c20",
    cards: [
      ["Every Last Vestige Shall Rot", 2],
      ["Evil Comes to Fruition", 1],
      ["I Call on the Ancient Magics", 1],
      ["I Delight in Your Convulsions", 1],
      ["Into the Earthen Maw", 1],
      ["Introductions Are in Order", 1],
      ["May Civilization Collapse", 1],
      ["Nature Demands an Offering", 2],
      ["Nature Shields Its Own", 2],
      ["Realms Befitting My Majesty", 1],
      ["Roots of All Evil", 2],
      ["The Very Soil Shall Shake", 1],
      ["Your Fate Is Thrice Sealed", 1],
      ["Your Puny Minds Cannot Fathom", 1],
      ["Your Will Is Not Your Own", 2],
    ],
  },
  {
    name: "Bring About the Undead Apocalypse",
    set: "oarc",
    icon: "ss-pd3",
    cards: [
      ["Choose Your Champion", 2],
      ["Dance, Pathetic Marionette", 1],
      ["The Dead Shall Serve", 2],
      ["Every Hope Shall Vanish", 2],
      ["I Delight in Your Convulsions", 2],
      ["Introductions Are in Order", 1],
      ["Mortal Flesh Is Weak", 1],
      ["My Undead Horde Awakens", 1],
      ["Only Blood Ends Your Nightmares", 2],
      ["Realms Befitting My Majesty", 1],
      ["Rotted Ones, Lay Siege", 2],
      ["Surrender Your Thoughts", 1],
      ["Your Fate Is Thrice Sealed", 1],
      ["Your Puny Minds Cannot Fathom", 1],
    ],
  },
  {
    name: "Archenemy Nicol Bolas",
    set: "oe01",
    icon: "ss-hou",
    cards: [
      ["Because I Have Willed It", 1],
      ["Behold My Grandeur", 1],
      ["Bow to My Command", 1],
      ["Choose Your Demise", 1],
      ["Delight in the Hunt", 1],
      ["Every Dream a Nightmare", 1],
      ["For Each of You, a Gift", 1],
      ["Know Evil", 1],
      ["Make Yourself Useful", 1],
      ["The Mighty Will Fall", 1],
      ["My Forces Are Innumerable", 1],
      ["My Laughter Echoes", 1],
      ["No One Will Hear Your Cries", 1],
      ["Pay Tribute to Me", 1],
      ["Power Without Equal", 1],
      ["A Reckoning Approaches", 1],
      ["There Is No Refuge", 1],
      ["This World Belongs to Me", 1],
      ["What's Yours Is Now Mine", 1],
      ["When Will You Learn?", 1],
    ],
  },
  {
    name: "Death Toll",
    set: "dsc",
    icon: "ss-mkm",
    cards: [
      ["Choose Your Champion", 1],
      ["Plots That Span Centuries", 1],
      ["My Tendrils Run Deep", 1],
      ["Dark Wings Bring Your Downfall", 1],
      ["I Am Never Alone", 1],
      ["Rot Like the Scum You Are", 1],
      ["You Live Only Because I Will It", 1],
      ["My Will Is Irresistible", 1],
      ["My Wings Enfold All", 1],
      ["Your Mistake Is My Triumph", 1],
    ],
  },
  {
    name: "Endless Punishment",
    set: "dsc",
    icon: "ss-dsk",
    cards: [
      ["When Will You Learn?", 1],
      ["My Crushing Masterstroke", 1],
      ["Fear My Authority", 1],
      ["Reality Is Mine to Control", 1],
      ["Running Is Useless", 1],
      ["You Exist Only to Amuse", 1],
      ["I Call for Slaughter", 1],
      ["I Will Savor Your Agony", 1],
      ["Your Nightmares Are Delicious", 1],
      ["No Secret Is Hidden from Me", 1],
    ],
  },
  {
    name: "Jump Scare!",
    set: "dsc",
    icon: "ss-j22",
    cards: [
      ["My Laughter Echoes", 1],
      ["Power Without Equal", 1],
      ["I Am Untouchable", 1],
      ["Mine Is the Only Truth", 1],
      ["Your Own Face Mocks You", 1],
      ["Kneel Before My Legions", 1],
      ["You Are Unworthy of Mercy", 1],
      ["Chaos Is My Plaything", 1],
      ["Your Plans Mean Nothing", 1],
      ["You Will Know True Suffering", 1],
    ],
  },
  {
    name: "Miracle Worker",
    set: "dsc",
    icon: "ss-avr",
    cards: [
      ["Choose Your Demise", 1],
      ["Behold the Power of Destruction", 1],
      ["You Cannot Hide from Me", 1],
      ["My Champion Stands Supreme", 1],
      ["Only I Know What Awaits", 1],
      ["My Followers Ascend", 1],
      ["Time Bends to My Will", 1],
      ["I Am Duskmourn", 1],
      ["My Wealth Will Bury You", 1],
      ["A Premonition of Your Demise", 1],
    ],
  },
];
