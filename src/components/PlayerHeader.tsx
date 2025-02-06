import { Button } from "react-bootstrap";

export const PlayerHeader = ({
  setLabel,
  player,
  labels,
}: {
  setLabel: (player: number) => void;
  player: number;
  labels: string[];
}) => {
  const playerLabel = player + 1;
  return (
    <Button
      className="bg-transparent border-0"
      onClick={() => setLabel(player)}
    >
      <h2>
        {labels[player] || `Player ${playerLabel}`}
        <sup>
          <i className="fa fa-edit ml-2 text-secondary fa-xs"></i>
        </sup>
      </h2>
    </Button>
  );
};
