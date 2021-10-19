import map from "lodash/map";
import keys from "lodash/keys";
import { useCallback, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useLocalState } from "../../hooks/useLocalState";
import { useSettings } from "../../hooks/useSettings";
import { createDie, ALL_FACES } from "./data/die";

export const CurrentDie = ({ showAllEffect }) => {
  const [die, setDie] = useLocalState("hike-die", {});
  const { devTools } = useSettings();

  const regenDie = useCallback(() => {
    setDie({ ...createDie() });
  }, [setDie]);

  useEffect(() => {
    if (keys(die).length === 0) {
      regenDie();
    }
  }, [die, regenDie]);

  return (
    <div className="my-5">
      <h3>Hike Die</h3>
      <Table size="sm" variant="dark" borderless striped>
        <tbody>
          {map(die, (face, k) => {
            const currentIndex = parseInt(k, 10);
            const adjacentIndex = currentIndex + 6;
            const adjacentFace = die[adjacentIndex];
            return currentIndex < 7 ? (
              <tr key={k}>
                <td className="text-center pr-2">
                  <i
                    className={`ms ms-${currentIndex} ms-cost ms-shadow ms-fw`}
                  ></i>
                </td>
                <td className="text-center">
                  <i className={face?.icon}></i>
                </td>
                <td className="w-50">{face?.effect}</td>
                <td className="text-center pr-2">
                  <i
                    className={`ms ms-${adjacentIndex} ms-cost ms-shadow ms-fw`}
                  ></i>
                </td>
                <td className="text-center">
                  <i className={adjacentFace?.icon}></i>
                </td>
                <td className="w-50">{adjacentFace?.effect}</td>
              </tr>
            ) : null;
          })}
        </tbody>
      </Table>

      {devTools && showAllEffect && (
        <>
          <h3>All Effects</h3>
          <Table size="sm" variant="dark" borderless striped>
            <tbody>
              {map(ALL_FACES, (v, k) => (
                <tr key={k}>
                  <td className="text-center pr-2">
                    {k > 20 ? (
                      k
                    ) : (
                      <i className={`ms ms-${k} ms-cost ms-shadow ms-fw`}></i>
                    )}
                  </td>
                  <td className="text-center">
                    <i className={v?.icon}></i>
                  </td>
                  <td>{v?.effect}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}

      <Button onClick={regenDie} block>
        Regenerate Die
      </Button>
    </div>
  );
};
