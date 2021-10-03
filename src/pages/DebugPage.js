import React from "react";
import { Die } from "../components/magic/die/die";
import { createMarkup, MARKUP_TEXT } from "../util/createMarkup";

export const DebugPage = () => {
  return (
    <>
      <h1>Mana</h1>
      <div dangerouslySetInnerHTML={{ __html: createMarkup(MARKUP_TEXT) }} />

      <div className="position-fixed" style={{ top: "10%", right: "150px" }}>
        <Die sides={4}></Die>
      </div>
      <div className="position-fixed" style={{ top: "20%", right: "150px" }}>
        <Die sides={6}></Die>
      </div>
      <div className="position-fixed" style={{ top: "30%", right: "150px" }}>
        <Die sides={8}></Die>
      </div>
      <div className="position-fixed" style={{ top: "50%", right: "150px" }}>
        <Die sides={10}></Die>
      </div>
      <div className="position-fixed" style={{ top: "70%", right: "150px" }}>
        <Die sides={12}></Die>
      </div>
      <div className="position-fixed" style={{ top: "80%", right: "150px" }}>
        <Die sides={20}></Die>
      </div>
    </>
  );
};
