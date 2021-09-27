import React, { useState, useEffect } from "react";

export const Loading = ({
  label = "Loading",
  start = 0,
  numDots = 3,
  interval = 500,
  className,
}) => {
  const [dotsCount, setDotsCount] = useState(start);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDotsCount(dotsCount + 1);
    }, interval);

    return () => {
      clearInterval(dotsInterval);
    };
  });

  const dots = getDotString(dotsCount, numDots);
  const classes = `loading-dots ${className}`;

  return (
    <span className={classes}>
      {label}
      {dots}
    </span>
  );
};

const getDotString = (count, max, char = ".") => char.repeat((count % max) + 1);
