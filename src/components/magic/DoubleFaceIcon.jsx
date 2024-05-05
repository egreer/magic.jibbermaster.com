import cn from "classnames";

export const DoubleFaceIcon = ({
  enabled,
  backdrop = false,
  invert = false,
  style = {},
}) => {
  const classes = {
    "ms-dfc-day": enabled,
    "ms-dfc-night": !enabled,
    "text-light": enabled && invert,
    "text-dark": !enabled && invert,
    "bg-white": backdrop,
  };
  return (
    <span>
      <i className={cn("ms ms-dfc", classes)} style={style} />
    </span>
  );
};
