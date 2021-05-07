import React from "react";
import merge from "lodash/merge";
import cn from "classnames";

export const DoubleFaceIcon = ({
  enabled,
  backdrop = false,
  invert = false,
  style = {}
}) => {
  const backdropStyle = backdrop ? { backgroundColor: "#ffffff" } : {};
  return (
    <span>
      {enabled ? (
        <i
          className={cn("ms ms-dfc ms-dfc-day", { "text-light": invert })}
          style={merge({}, backdropStyle, style)}
        />
      ) : (
        <i
          className={cn("ms ms-dfc ms-dfc-night", { "text-dark": invert })}
          style={merge({}, backdropStyle, style)}
        />
      )}
    </span>
  );
};
