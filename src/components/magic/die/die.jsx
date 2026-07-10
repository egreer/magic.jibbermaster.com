import cn from "classnames";
import { useRef, useState } from "react";
// import "./dice.scss";
import "./more.scss";
// https://codepen.io/vicentemundim/details/cenIh

const animationDuration = 3000;

const getRandomFace = (sides, initialSide) =>
  Math.floor(Math.random() * sides) + initialSide;

export const Die = ({ sides = 20, initialSide = 1 }) => {
  const [rolling, setRolling] = useState(false);
  console.log("🚀 ~ file: die.js ~ line 8 ~ Die ~ rolling", rolling);
  const [face, setFace] = useState(1);
  const [lastFace, setLastFace] = useState(null);

  const timeoutRef = useRef(null);

  const randomFace = () => {
    const face = getRandomFace(sides, initialSide);
    setLastFace(face === lastFace ? getRandomFace(sides, initialSide) : face);
    return face;
  };

  const rollTo = (face) => {
    clearTimeout(timeoutRef.current);
    setFace(face);
  };

  const roll = () => {
    setRolling(true);
    // $die.addClass('rolling')
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setRolling(false);
      // $die.removeClass('rolling')

      rollTo(randomFace());
    }, animationDuration);

    return false;
  };

  const die = `d${sides}`;
  // const _faces = Array(sides)
  //   .fill(1)
  //   .map((_, i) => (
  //     <figure
  //       key={i}
  //       className={`d-face d-face-${i + 1}`}
  //       data-side={i + 1}
  //     ></figure>
  //   ));
  const faces2 = Array(sides)
    .fill(1)
    .map((_, i) => <div key={i} className={`${die}`} data-side={i + 1}></div>);
  return (
    <>
      {/* <div className="content">
  <div className={cn("d-die", {"rolling": rolling, "d12": faces===12, "twenty": faces === 20})} onClick={roll} data-face={face}>
    {faces}
  </div>
</div> */}
      {/* <div id="d4-wrap">
        <div id="d4">
            <div class="d4" data-side="1"><div data-number="2"></div><div data-number="3"></div><div data-number="4"></div></div>
            <div class="d4" data-side="2"><div data-number="1"></div><div data-number="3"></div><div data-number="4"></div></div>
            <div class="d4" data-side="3"><div data-number="1"></div><div data-number="2"></div><div data-number="4"></div></div>
            <div class="d4" data-side="4"><div data-number="1"></div><div data-number="2"></div><div data-number="3"></div></div>
        </div>
    </div> */}
      {/* <div id={`${die}-wrap`}> */}
      <div
        className={cn("react__die", die, { rolling: rolling })}
        onClick={roll}
        onKeyUp={(event) => ["Enter"].includes(event.key) && roll()}
        data-face={face}
        role="button"
        tabIndex={0}
      >
        {faces2}
      </div>
    </>
  );
};
