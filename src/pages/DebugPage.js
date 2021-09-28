import React from "react";
import { createMarkup, MARKUP_TEXT } from "../util/createMarkup";

export const DebugPage = () => {
  return (
    <>
      <h1>Mana</h1>
      <div dangerouslySetInnerHTML={{ __html: createMarkup(MARKUP_TEXT) }} />
    </>
  );
};
