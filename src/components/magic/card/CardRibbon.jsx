import cn from "classnames";
import "./card_ribbon.scss";

export const CardRibbon = ({ right, value, background = "bg-secondary" }) => {
  return (
    <div
      className={cn("cardRibbon_container", {
        cardRibbon_container_right: right,
      })}
    >
      <div>
        <div className={cn("cardRibbon_text", background)}>{value}</div>
      </div>
    </div>
  );
};
