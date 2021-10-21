import map from "lodash/map";
import keys from "lodash/keys";
import { forwardRef, useCallback, useEffect, useImperativeHandle } from "react";
import { Button, Table } from "react-bootstrap";
import { useLocalState } from "../../hooks/useLocalState";
import { useSettings } from "../../hooks/useSettings";
import { createDie, ALL_FACES } from "./data/die";
import { createMarkup } from "../../util/createMarkup";

export const CurrentDie = forwardRef(({ showAllEffect, onClick }, ref) => {
  const [die, setDie] = useLocalState("hike-die", {});
  const { devTools } = useSettings();

  const regenDie = useCallback(() => {
    setDie({ ...createDie() });
  }, [setDie]);

  useImperativeHandle(ref, () => ({
    regenDie,
  }));

  useEffect(() => {
    if (keys(die).length === 0) {
      regenDie();
    }
  }, [die, regenDie]);

  const faceClick = useCallback(
    ({ face }) => {
      const { tags = [] } = face;

      if (tags.includes("randomize")) {
        regenDie();
      }

      onClick?.({ tags });
    },
    [onClick, regenDie]
  );

  return (
    <div className="mt-2 mb-5">
      <h3 className="mtg-text-uncommon mtg-grad">Hike Die</h3>
      <Table size="sm" variant="dark" borderless striped>
        <tbody>
          {map(die, (face, k) => {
            const currentIndex = parseInt(k, 10);
            const adjacentIndex = currentIndex + 6;
            const adjacentFace = die[adjacentIndex];
            const face1Click = () => faceClick({ face });
            const face2Click = () => faceClick({ face: adjacentFace });
            return currentIndex < 7 ? (
              <tr key={k}>
                <td className="text-center pr-2" onClick={face1Click}>
                  <i
                    className={`ms ms-${currentIndex} ms-cost ms-shadow ms-fw`}
                  ></i>
                </td>
                <td className="text-center" onClick={face1Click}>
                  <i className={face?.icon}></i>
                </td>
                <td
                  className="w-50"
                  onClick={face1Click}
                  dangerouslySetInnerHTML={{
                    __html: createMarkup(face?.effect),
                  }}
                ></td>
                <td className="text-center pr-2" onClick={face2Click}>
                  <i
                    className={`ms ms-${adjacentIndex} ms-cost ms-shadow ms-fw`}
                  ></i>
                </td>
                <td className="text-center" onClick={face2Click}>
                  <i className={adjacentFace?.icon}></i>
                </td>
                <td
                  className="w-50"
                  onClick={face2Click}
                  dangerouslySetInnerHTML={{
                    __html: createMarkup(adjacentFace?.effect),
                  }}
                ></td>
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

      <Button onClick={regenDie} block variant="outline-danger">
        <i className="ss ss-fw ss-2x ss-h09" />
        <span className="mx-2">Re-Randomize Die</span>
      </Button>
    </div>
  );
});
