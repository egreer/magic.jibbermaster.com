import React from "react";
import merge from "lodash/merge";

export const DoubleFaceIcon = ({ enabled, backdrop = false, style = {} }) => {
  const backdropStyle = backdrop ? { backgroundColor: "#ffffff" } : {};
  return (
    <span>
      {enabled ? (
        <i
          className="ms ms-dfc ms-dfc-day"
          style={merge({}, backdropStyle, style)}
        />
      ) : (
        <i
          className="ms ms-dfc ms-dfc-night"
          style={merge({}, backdropStyle, style)}
        />
      )}
    </span>
  );
};
